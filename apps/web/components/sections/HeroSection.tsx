"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-background bg-grid-pattern">
      <div className="mx-auto grid min-h-[calc(100vh-104px)] w-full max-w-[1200px] items-center gap-12 px-6 py-16 text-left md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="space-y-8 lg:col-span-6">
          <div className="space-y-5">
            <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[72px]">
              <span className="block">OMENA</span>
              <span className="block">Agent Intelligence Layer</span>
            </h1>

            <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              Transforming onchain data into intelligence for autonomous systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-xs font-black uppercase tracking-wider text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 active:scale-[0.98]"
            >
              Explore Docs
            </Link>
            <Link
              href="/litepaper"
              className="inline-flex h-12 items-center justify-center rounded-full bg-background px-7 text-xs font-black uppercase tracking-wider text-foreground ring-1 ring-foreground/20 transition-colors hover:bg-muted hover:ring-foreground/35 active:scale-[0.98]"
            >
              Read Litepaper
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
          <div className="pointer-events-none absolute -z-10 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex aspect-4/3 w-full max-w-[580px] items-center justify-center">
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
    </section>
  );
}
