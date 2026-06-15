"use client";

import React from "react";
import { Bot, Radio, Database, Link } from "lucide-react";

export function IsometricStack() {
  return (
    <>
      {/* Agent Layer */}
      <div className="absolute w-64 h-64 bg-card rounded-xl border-none isometric-layer layer-1 flex flex-col items-center justify-center group cursor-pointer shadow-ambient">
        <Bot className="text-foreground w-8 h-8 mb-2" />
        <h3 className="font-bold text-sm text-foreground">Agent Layer</h3>
        <p className="font-label-xs text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Agents &amp; Applications
        </p>
        <div className="layer-side bg-muted border-none rounded-b-xl"></div>
        <div className="layer-side-right bg-muted/80 border-none rounded-r-xl"></div>
        {/* Tooltip */}
        <div className="absolute -top-24 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-popover text-popover-foreground px-4 py-2.5 rounded-lg font-label-xs text-xs pointer-events-none w-56 text-center shadow-xl z-50 transform group-hover:-translate-y-2 border-none">
          Autonomous Execution - Powering the next generation of AI agents and applications.
        </div>
      </div>

      {/* Intelligence Layer */}
      <div className="absolute w-64 h-64 bg-primary rounded-xl border-none isometric-layer layer-2 flex flex-col items-center justify-center group cursor-pointer shadow-ambient">
        <Radio className="text-primary-foreground w-8 h-8 mb-2" />
        <h3 className="font-bold text-sm text-primary-foreground">Intelligence Layer</h3>
        <p className="font-label-xs text-[10px] text-primary-foreground/80 uppercase tracking-widest mt-1">
          Analysis • Signals • Insights
        </p>
        <div className="layer-side bg-primary/95 border-none rounded-b-xl"></div>
        <div className="layer-side-right bg-primary/90 border-none rounded-r-xl"></div>
        {/* Tooltip */}
        <div className="absolute -top-24 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-popover text-popover-foreground px-4 py-2.5 rounded-lg font-label-xs text-xs pointer-events-none w-56 text-center shadow-xl z-50 transform group-hover:-translate-y-2 border-none">
          Signal Extraction - Transforms raw onchain data into risk-aware signals and insights.
        </div>
      </div>

      {/* Onchain Data Layer */}
      <div className="absolute w-64 h-64 bg-card rounded-xl border-none isometric-layer layer-3 flex flex-col items-center justify-center group cursor-pointer shadow-ambient">
        <Database className="text-muted-foreground w-8 h-8 mb-2" />
        <h3 className="font-bold text-sm text-foreground">Data Layer</h3>
        <p className="font-label-xs text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Wallets • Transactions
        </p>
        <div className="layer-side bg-muted border-none rounded-b-xl"></div>
        <div className="layer-side-right bg-muted/80 border-none rounded-r-xl"></div>
        {/* Tooltip */}
        <div className="absolute -top-24 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-popover text-popover-foreground px-4 py-2.5 rounded-lg font-label-xs text-xs pointer-events-none w-56 text-center shadow-xl z-50 transform group-hover:-translate-y-2 border-none">
          Data Indexing - Unified access to wallets, transactions, and liquidity across chains.
        </div>
      </div>

      {/* Blockchain Networks */}
      <div className="absolute w-64 h-64 bg-zinc-950 rounded-xl border-none isometric-layer layer-4 flex flex-col items-center justify-center group cursor-pointer shadow-ambient">
        <Link className="text-zinc-400 w-8 h-8 mb-2" />
        <h3 className="font-bold text-sm text-zinc-100">Networks</h3>
        <p className="font-label-xs text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
          Solana &amp; Multi Chain
        </p>
        <div className="layer-side bg-black border-none rounded-b-xl"></div>
        <div className="layer-side-right bg-zinc-900 border-none rounded-r-xl"></div>
        {/* Tooltip */}
        <div className="absolute -top-24 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-popover text-popover-foreground px-4 py-2.5 rounded-lg font-label-xs text-xs pointer-events-none w-56 text-center shadow-xl z-50 transform group-hover:-translate-y-2 border-none">
          Network Connectivity - Low-latency access to Solana and multi-chain environments.
        </div>
      </div>
    </>
  );
}
