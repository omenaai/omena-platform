import type {
  BehaviorAnalysis,
  ContextAnalysis,
  RiskAnalysis,
  SignalAnalysis,
  TokenOverview,
} from "@/lib/types/token-analysis";

const DEFAULT_OLLAMA_BASE_URL = "http://127.0.0.1:11434";
const DEFAULT_OLLAMA_MODEL = "qwen2.5:3b";
const DEFAULT_OLLAMA_TIMEOUT_MS = 15000;

type OllamaGenerateResponse = {
  response?: string;
  done?: boolean;
};

type OllamaContextPayload = {
  aiSummary: string;
  finalVerdict: string;
  cautionLevel: "Low" | "Medium" | "High";
  reportSections: string[];
};

function getOllamaConfig() {
  return {
    baseUrl: process.env.OLLAMA_BASE_URL?.trim() || DEFAULT_OLLAMA_BASE_URL,
    model: process.env.OLLAMA_MODEL?.trim() || DEFAULT_OLLAMA_MODEL,
    timeoutMs: Number(process.env.OLLAMA_TIMEOUT_MS ?? DEFAULT_OLLAMA_TIMEOUT_MS),
  };
}

function buildPrompt(input: {
  token: TokenOverview;
  risk: RiskAnalysis;
  behavior: BehaviorAnalysis;
  signals: SignalAnalysis;
  dataQualityNotes: string[];
}) {
  return JSON.stringify(
    {
      token: input.token,
      risk: input.risk,
      behavior: input.behavior,
      signals: input.signals,
      dataQualityNotes: input.dataQualityNotes,
    },
    null,
    2,
  );
}

function parseStructuredResponse(raw: string): ContextAnalysis {
  const trimmed = raw.trim();
  const candidate = trimmed.startsWith("{") ? trimmed : trimmed.slice(trimmed.indexOf("{"), trimmed.lastIndexOf("}") + 1);
  const parsed = JSON.parse(candidate) as OllamaContextPayload;

  if (
    typeof parsed.aiSummary !== "string" ||
    typeof parsed.finalVerdict !== "string" ||
    !["Low", "Medium", "High"].includes(parsed.cautionLevel) ||
    !Array.isArray(parsed.reportSections)
  ) {
    throw new Error("Ollama returned an invalid structured report.");
  }

  return {
    aiSummary: parsed.aiSummary.trim(),
    finalVerdict: parsed.finalVerdict.trim(),
    cautionLevel: parsed.cautionLevel,
    reportSections: parsed.reportSections.map((section) => String(section).trim()).filter(Boolean).slice(0, 5),
  };
}

export async function generateOllamaContextAnalysis(input: {
  token: TokenOverview;
  risk: RiskAnalysis;
  behavior: BehaviorAnalysis;
  signals: SignalAnalysis;
  dataQualityNotes: string[];
}) {
  const { baseUrl, model, timeoutMs } = getOllamaConfig();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        stream: false,
        system:
          "You are OMENA Context Intelligence. Produce cautious token analysis only. Never give buy, sell, moon, 100x, profit, or financial-advice language. Keep the tone minimal, credible, and plain English.",
        prompt:
          "Turn the following token analysis payload into a JSON object for OMENA. Return only valid JSON matching the provided schema. Mention partial data when needed and stay conservative.\n\n" +
          buildPrompt(input),
        format: {
          type: "object",
          properties: {
            aiSummary: { type: "string" },
            finalVerdict: { type: "string" },
            cautionLevel: { type: "string", enum: ["Low", "Medium", "High"] },
            reportSections: {
              type: "array",
              items: { type: "string" },
              minItems: 3,
              maxItems: 5,
            },
          },
          required: ["aiSummary", "finalVerdict", "cautionLevel", "reportSections"],
        },
        options: {
          temperature: 0.2,
        },
        keep_alive: "5m",
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed: ${response.status}`);
    }

    const payload = (await response.json()) as OllamaGenerateResponse;

    if (!payload.response || payload.done === false) {
      throw new Error("Ollama returned an incomplete response.");
    }

    return parseStructuredResponse(payload.response);
  } finally {
    clearTimeout(timeoutId);
  }
}
