"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Eyebrow, Heading, Subheading } from "@/components/ui/Typography";
import { Bot, Activity, Shield, Search, Bell, Terminal, ArrowUpRight } from "lucide-react";

const useCasesData = [
  {
    title: "Trading Agents",
    desc: "Algorithmic execution based on sentiment and flow.",
    icon: Bot,
  },
  {
    title: "DeFi Monitoring",
    desc: "Track TVL shifts and yield farming opportunities.",
    icon: Activity,
  },
  {
    title: "Risk Scoring",
    desc: "Real-time wallet and contract trust scores.",
    icon: Shield,
  },
  {
    title: "Onchain Research",
    desc: "Deep dive into historical wallet behaviors.",
    icon: Search,
  },
  {
    title: "Alert Systems",
    desc: "Custom webhooks for specific onchain events.",
    icon: Bell,
  },
  {
    title: "Developer APIs",
    desc: "Integrate intelligence directly into dApps.",
    icon: Terminal,
  },
];

export function UseCases() {
  return (
    <section className="bg-muted/30 py-16 framer-animate rounded-3xl max-w-[1200px] mx-auto px-6 mt-12">
      <div className="mx-auto">
        {/* Headings */}
        <div className="mb-12 text-left">
          <Eyebrow>GLOBAL TRANSFERS</Eyebrow>
          <Heading as="h2" size="section" className="font-black text-foreground leading-[1.3] text-balance">
            Your intelligence layer just got
            <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-5 h-[1.2em] ml-2 font-black align-middle leading-none">
              global
            </span>
          </Heading>
          <Subheading className="mt-1 text-muted-foreground/80">
            Deep context, real time threat detection, and modular SDK hooks across multiple chains.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCasesData.map((uc) => {
            const IconComponent = uc.icon;
            return (
              <SpotlightCard
                key={uc.title}
                className="hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-card p-6 md:p-8 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 bg-muted/40 rounded-xl text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4.5 h-4.5 text-muted-foreground/85 group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <h4 className="group-hover:text-primary transition-colors text-base font-black text-foreground">
                    {uc.title}
                  </h4>
                  <p className="text-xs md:text-sm mt-2 leading-relaxed text-muted-foreground/80 font-medium">
                    {uc.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
