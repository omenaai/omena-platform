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
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-10 md:py-14">
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary">Phase 1 Dashboard</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-[-0.07em] text-foreground sm:text-5xl">
              Minimal token intelligence built with the same OMENA brand language.
            </h1>
          </div>
          <Link
            href={`/app/analyze?token=${encodeURIComponent(demoTokenAddress)}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-card text-[11px] font-black uppercase tracking-[0.18em]")}
          >
            View Demo Report
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <TokenInputForm />
      </section>

      <ModulePreviewGrid />

      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <RecentAnalysisPlaceholder />
        <ExampleReportPreview result={exampleResult} />
      </div>
    </div>
  );
}
