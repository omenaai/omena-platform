"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
    <section className="flex w-full flex-col justify-between overflow-hidden bg-background bg-grid-pattern lg:min-h-[calc(100vh-104px)]">
      <div className="mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-6 py-16 text-left md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-5">
            <h1 className="max-w-[760px] text-balance text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[64px]">
              <span className="block">OMENA</span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>Agent</span>
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-5 text-primary leading-none">
                  Intelligence
                </span>
                <span>Layer</span>
              </span>
            </h1>

            <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              Transforming real-time onchain data into structured intelligence for autonomous systems, agent workflows, and research-grade Web3 infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="pointer-events-none absolute -z-10 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex aspect-4/3 w-full max-w-[760px] scale-125 items-center justify-center lg:origin-center xl:scale-150">
            <Image
              src="/stack.png"
              alt="Omena intelligence layer stack visualization"
              width={800}
              height={800}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:animate-float"
            />
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
              <Link href="#architecture" className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
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
              <Link href="#app" className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
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
