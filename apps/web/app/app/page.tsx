import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TokenInputForm } from "@/components/app/TokenInputForm";
import { ExampleReportPreview, ModulePreviewGrid, RecentAnalysisPlaceholder } from "@/components/app/cards";
import { createMockAnalysis, demoTokenAddress } from "@/lib/intelligence/mock-analysis";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function DashboardHomePage() {
  const exampleResult = createMockAnalysis(demoTokenAddress);

  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6">
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_260px]">
        <div className="rounded-[28px] border border-border/70 bg-card/88 p-5 shadow-[var(--shadow-ambient)] sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="font-display text-3xl font-black tracking-[-0.06em] text-foreground sm:text-4xl">
                  Token intelligence, reduced to the essentials.
                </h1>
                <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">
                  Analyze a token, review the core signals, and open the full report without oversized dashboard framing.
                </p>
              </div>
              <Link
                href={`/app/analyze?token=${encodeURIComponent(demoTokenAddress)}`}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-2xl bg-background text-[11px] font-black uppercase tracking-[0.18em]")}
              >
                Demo Report
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <TokenInputForm />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          {[
            ["4", "Core modules"],
            ["Live", "Fallback-safe mode"],
            ["Fast", "Single entry flow"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[24px] border border-border/70 bg-card/82 px-4 py-4 shadow-sm">
              <p className="text-2xl font-black tracking-[-0.05em] text-foreground">{value}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ModulePreviewGrid />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <RecentAnalysisPlaceholder />
        <ExampleReportPreview result={exampleResult} />
      </div>
    </div>
  );
}
