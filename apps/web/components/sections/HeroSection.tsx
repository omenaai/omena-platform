"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const GridIcon1 = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <path d="M8 2v20M16 2v20M2 8h20M2 16h20" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    <circle cx="8" cy="16" r="1.5" fill="currentColor" />
    <path d="M8 8l8 8" />
  </svg>
);

const GridIcon2 = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <circle cx="12" cy="12" r="7" stroke="rgba(0,0,0,0.06)" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v20M2 12h20" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    <path d="M12 12l5 -5" />
  </svg>
);

const GridIcon3 = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <path d="M7 7h10v10H7z" stroke="rgba(0,0,0,0.06)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
  </svg>
);

export function HeroSection() {
  return (
    <section className="flex w-full flex-col justify-between overflow-hidden bg-white bg-grid-pattern lg:min-h-[calc(100vh-104px)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 items-center px-6 py-16 text-left md:py-24 lg:py-28">
        <div className="max-w-[920px] space-y-8">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/45 bg-white px-6 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-[0_0_0_1px_rgba(36,91,255,0.06)]">
              <span className="flex h-3 w-3 items-center justify-center rounded-full border border-primary/30">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Agent Intelligence Layer
            </div>

            <h1 className="max-w-[900px] text-balance font-display text-[68px] font-black leading-[0.88] tracking-[-0.075em] text-[#030303] sm:text-[92px] lg:text-[128px]">
              OMENA
            </h1>

            <div className="max-w-[920px] font-display text-[34px] font-black leading-[1.02] tracking-[-0.055em] text-[#070707] sm:text-[52px] lg:text-[68px]">
              Agent Intelligence Layer<span className="text-primary">.</span>
            </div>

            <p className="max-w-2xl text-lg font-semibold leading-9 text-[#202532] sm:text-[22px]">
              The intelligence layer that empowers AI agents with real-time{" "}
              <span className="font-black text-primary">onchain insights</span>, risk analysis, and actionable signals.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:pt-2">
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-xs font-black uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-primary/90 active:scale-[0.98]"
            >
              Explore Docs
            </Link>
            <Link
              href="/litepaper"
              className="inline-flex h-12 items-center justify-center rounded-full bg-muted/60 px-7 text-xs font-black uppercase tracking-wider text-foreground transition-colors hover:bg-muted active:scale-[0.98]"
            >
              Read Litepaper
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-xs font-black uppercase tracking-wider text-foreground ring-1 ring-black/10 transition-colors hover:bg-muted active:scale-[0.98]"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-surface-container-low shadow-sm">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-center p-6 lg:justify-start">
            <Link
              href="/docs"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground text-xs font-black uppercase tracking-widest text-background shadow-md transition-colors hover:bg-foreground/90 active:scale-95"
            >
              Explore Docs
            </Link>
          </div>

          <div className="group flex items-start gap-3.5 p-6 text-left transition-colors duration-300 hover:bg-primary/5">
            <div className="mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-primary">
              <GridIcon1 />
            </div>
            <div>
              <Link href="/docs" className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                Real-Time Streams <ArrowRight className="h-3 w-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                Unified access to web3 data streams for autonomous systems.
              </p>
            </div>
          </div>

          <div className="group flex items-start gap-3.5 p-6 text-left transition-colors duration-300 hover:bg-primary/5">
            <div className="mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-primary">
              <GridIcon2 />
            </div>
            <div>
              <Link href="/litepaper" className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                Intelligence Layer <ArrowRight className="h-3 w-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                Transforms onchain activity into structured signals and insights.
              </p>
            </div>
          </div>

          <div className="group flex items-start gap-3.5 p-6 text-left transition-colors duration-300 hover:bg-primary/5">
            <div className="mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-primary">
              <GridIcon3 />
            </div>
            <div>
              <Link href="/roadmap" className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                Low-Latency Access <ArrowRight className="h-3 w-3 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                Built for fast transaction, wallet, and log intelligence workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
