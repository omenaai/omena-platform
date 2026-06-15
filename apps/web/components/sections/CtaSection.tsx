"use client";

import React from "react";
import { Heading, Subheading } from "@/components/ui/Typography";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";

export function CtaSection() {
  return (
    <section className="w-full text-center bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-6 flex flex-col items-center">
        <Heading as="h2" size="section" className="text-primary-foreground max-w-2xl text-center font-black leading-[1.3] text-balance">
          Build smarter agents with
          <span className="inline-flex items-center justify-center bg-background/15 text-primary-foreground rounded-full px-5 h-[1.2em] mx-2 font-black align-middle leading-none">
            onchain intelligence.
          </span>
        </Heading>
        <Subheading className="text-primary-foreground/85 max-w-2xl text-center leading-relaxed font-medium">
          Get access to the most comprehensive API for agentic workflows today.
        </Subheading>
        
        <div className="pt-2">
          <InteractiveHoverButton variant="white" className="h-11 flex items-center justify-center font-bold text-xs uppercase tracking-wider">
            Start Building Free
          </InteractiveHoverButton>
        </div>
      </div>

    </section>
  );
}
