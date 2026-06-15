"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom SVG Wireframe Outline Icons matching the Partify node icons style
const GridIcon1 = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <path d="M8 2v20M16 2v20M2 8h20M2 16h20" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    <circle cx="8" cy="16" r="1.5" fill="currentColor" />
    <path d="M8 8l8 8" />
  </svg>
);

const GridIcon2 = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <circle cx="12" cy="12" r="7" stroke="rgba(0,0,0,0.06)" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v20M2 12h20" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
    <path d="M12 12l5 -5" />
  </svg>
);

const GridIcon3 = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="2" y="2" width="20" height="20" rx="6" />
    <path d="M7 7h10v10H7z" stroke="rgba(0,0,0,0.06)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
  </svg>
);

export function HeroSection() {
  return (
    <section className="w-full bg-background bg-grid-pattern lg:h-[calc(100vh-104px)] lg:min-h-[650px] lg:max-h-[850px] flex flex-col justify-between overflow-hidden pt-10 lg:pt-12">

      {/* Upper Grid: Typographic Content (Left) + Asset Image (Right) */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12 lg:py-0 flex-grow grid lg:grid-cols-12 gap-12 items-center text-left">

        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-6">
            <h1 className="text-foreground text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.18] text-balance">
              <span className="block">Discover the</span>
              <span className="block">power of</span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-5 h-[1.05em] font-black leading-none">
                  intelligent
                </span>
                <span>onchain</span>
              </span>
              <span className="block">actions</span>
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>scored</span>
                <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-5 h-[1.05em] font-black leading-none">
                  with Omena.
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground font-medium text-sm sm:text-base max-w-xl leading-relaxed">
              Omena&apos;s agent intelligence layer is now available and ready to revolutionize the way you think about onchain risk and contract auditing.
            </p>
          </div>
        </div>

        {/* Right Column: Visual (Stack Image) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
          <div className="absolute w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />

          <div className="relative w-full max-w-[580px] aspect-4/3 flex items-center justify-center">
            <Image
              src="/stack.png"
              alt="Omena Isometric Stack"
              width={800}
              height={800}
              priority
              className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500 drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row: 4-Column Divided Row */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-surface-container-low border-y border-outline-variant/40 shadow-sm">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Button Column */}
          <div className="p-6 flex items-center justify-center lg:justify-start">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-foreground hover:bg-foreground/90 text-background font-black text-xs uppercase tracking-widest h-12 w-full rounded-full transition-transform active:scale-95 shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Feature Column 1 */}
          <div className="p-6 flex items-start gap-3.5 text-left">
            <div className="shrink-0 mt-0.5">
              <GridIcon1 />
            </div>
            <div>
              <Link href="#" className="text-[10px] font-black uppercase text-foreground hover:text-primary transition-colors flex items-center gap-1.5 tracking-wide">
                Real-Time Scoring <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </Link>
              <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-medium">
                Empower AI agents with wallet and smart contract trust scores.
              </p>
            </div>
          </div>

          {/* Feature Column 2 */}
          <div className="p-6 flex items-start gap-3.5 text-left">
            <div className="shrink-0 mt-0.5">
              <GridIcon2 />
            </div>
            <div>
              <Link href="#" className="text-[10px] font-black uppercase text-foreground hover:text-primary transition-colors flex items-center gap-1.5 tracking-wide">
                Intelligence Layer <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </Link>
              <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-medium">
                Continuous auditing of smart contract vulnerability &amp; pool stability.
              </p>
            </div>
          </div>

          {/* Feature Column 3 */}
          <div className="p-6 flex items-start gap-3.5 text-left">
            <div className="shrink-0 mt-0.5">
              <GridIcon3 />
            </div>
            <div>
              <Link href="#" className="text-[10px] font-black uppercase text-foreground hover:text-primary transition-colors flex items-center gap-1.5 tracking-wide">
                Sub-Second Latency <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </Link>
              <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed font-medium">
                Unified low-latency access to transactions &amp; logs across chains.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
