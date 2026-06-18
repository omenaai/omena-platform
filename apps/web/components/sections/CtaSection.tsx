"use client";

import React from "react";
import Link from "next/link";
import { Heading, Subheading } from "@/components/ui/Typography";

export function CtaSection() {
  return (
    <section className="w-full text-center bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-6 flex flex-col items-center">
        <Heading as="h2" size="section" className="text-primary-foreground max-w-2xl text-center font-black leading-[1.3] text-balance">
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Build smarter agents with</span>
            <span className="inline-flex items-center justify-center bg-background/15 text-primary-foreground rounded-full px-5 h-[1.05em] font-black leading-none">
              onchain intelligence.
            </span>
          </span>
        </Heading>
        <Subheading className="text-primary-foreground/85 max-w-2xl text-center leading-relaxed font-medium">
          Get access to the most comprehensive API for agentic workflows today.
        </Subheading>
        
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-black uppercase tracking-wider text-[#245bff] transition-colors hover:bg-white/90"
          >
            Explore Docs
          </Link>
          <Link
            href="/litepaper"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white/15 px-6 text-xs font-black uppercase tracking-wider text-white ring-1 ring-white/25 transition-colors hover:bg-white/20"
          >
            Litepaper
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white/15 px-6 text-xs font-black uppercase tracking-wider text-white ring-1 ring-white/25 transition-colors hover:bg-white/20"
          >
            Roadmap
          </Link>
        </div>
      </div>

    </section>
  );
}
