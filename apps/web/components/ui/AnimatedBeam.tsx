"use client";

import React, { useRef } from "react";
import { Database, ShieldAlert, Terminal, Bot, Wallet, Layers } from "lucide-react";
import { AnimatedBeam as MagicBeam } from "./animated-beam";

export function AnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const ledgerRef = useRef<HTMLDivElement>(null);
  const poolsRef = useRef<HTMLDivElement>(null);
  const walletsRef = useRef<HTMLDivElement>(null);
  
  const centerRef = useRef<HTMLDivElement>(null);
  
  const tradingRef = useRef<HTMLDivElement>(null);
  const alertsRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative flex w-full max-w-[600px] mx-auto aspect-[16/11] bg-card rounded-3xl p-6 md:p-8 overflow-hidden items-center justify-between shadow-sm"
    >
      {/* Left Column (Inputs) */}
      <div className="flex flex-col justify-between h-full z-10 w-[35%] py-4">
        {/* Ledger Node */}
        <div 
          ref={ledgerRef}
          className="flex items-center gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">Ledger</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">Transactions</p>
          </div>
        </div>

        {/* DEX Pools Node */}
        <div 
          ref={poolsRef}
          className="flex items-center gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">DEX Pools</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">Liquidity</p>
          </div>
        </div>

        {/* Wallets Node */}
        <div 
          ref={walletsRef}
          className="flex items-center gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <Wallet className="w-4 h-4" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">Wallets</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">Profiles</p>
          </div>
        </div>
      </div>

      {/* Center Column (Omena Core) */}
      <div className="flex items-center justify-center z-10 w-[20%]">
        <div ref={centerRef} className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/15 rounded-full blur-xl animate-pulse group-hover:bg-primary/25" />
          <div className="relative flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-2xl shadow-glow transform transition-transform group-hover:scale-105 duration-300">
            <img 
              src="/logo.png" 
              alt="Omena Logo" 
              className="w-8 h-8 object-contain brightness-0 invert" 
            />
          </div>
        </div>
      </div>

      {/* Right Column (Outputs) */}
      <div className="flex flex-col justify-between h-full z-10 w-[35%] py-4">
        {/* Trading Node */}
        <div 
          ref={tradingRef}
          className="flex items-center justify-between gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="text-left min-w-0 pl-1">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">Trading</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">Automated Bots</p>
          </div>
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <Bot className="w-4 h-4" />
          </div>
        </div>

        {/* Risk Alerts Node */}
        <div 
          ref={alertsRef}
          className="flex items-center justify-between gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="text-left min-w-0 pl-1">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">Risk Alerts</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">Webhooks</p>
          </div>
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
        </div>

        {/* Dev API Node */}
        <div 
          ref={apiRef}
          className="flex items-center justify-between gap-3 bg-card shadow-sm p-2.5 rounded-2xl w-full group transition-colors"
        >
          <div className="text-left min-w-0 pl-1">
            <p className="text-[10px] font-black uppercase text-zinc-800 leading-none tracking-wide">Dev API</p>
            <p className="text-[8px] text-zinc-400 mt-1 leading-none font-medium truncate">REST &amp; WS</p>
          </div>
          <div className="p-1.5 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all flex items-center justify-center w-8 h-8 shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Animated Beams connecting nodes */}
      <MagicBeam
        containerRef={containerRef}
        fromRef={ledgerRef}
        toRef={centerRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
      />
      <MagicBeam
        containerRef={containerRef}
        fromRef={poolsRef}
        toRef={centerRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
        delay={1.2}
      />
      <MagicBeam
        containerRef={containerRef}
        fromRef={walletsRef}
        toRef={centerRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
        delay={2.4}
      />
      <MagicBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={tradingRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
        delay={0.6}
      />
      <MagicBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={alertsRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
        delay={1.8}
      />
      <MagicBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={apiRef}
        gradientStartColor="var(--primary)"
        gradientStopColor="var(--inverse-primary)"
        pathColor="rgba(37, 99, 235, 0.08)"
        pathWidth={2}
        duration={4}
        delay={3}
      />
    </div>
  );
}
