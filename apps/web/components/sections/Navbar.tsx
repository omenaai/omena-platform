"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Litepaper", href: "/litepaper" },
  { name: "Architecture", href: "#architecture" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Community", href: "#community" },
  { name: "App", href: "#app" },
];

const announcements = [
  "UNLOCKED 50+ REAL-TIME WEB3 DATA STREAMS • OMENA RESEARCH LITERATION V1.0 IS NOW LIVE • TRANSFORMING ONCHAIN DATA INTO INTELLIGENCE",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full flex-col bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-16 w-full max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
        <div className="flex items-center">
          <Link className="flex shrink-0 items-center" href="/" aria-label="OMENA home">
            <Image
              src="/logo.png"
              alt="OMENA"
              width={132}
              height={34}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="font-body-md relative text-[10px] font-bold uppercase tracking-wider text-foreground/80 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:text-foreground hover:after:w-full"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-muted/60 px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>STAR</span>
          </Link>

          <Link
            href="#"
            className="rounded-full bg-muted/60 px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
          >
            SIGN IN
          </Link>
        </div>

        <div className="flex items-center justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-muted-foreground hover:text-primary"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-background">
        <Marquee className="mx-auto max-w-[1200px] px-6 py-2.5 text-[10px] font-bold uppercase tracking-wider text-foreground/75 [--duration:42s]" repeat={4}>
          {announcements.map((item) => (
            <div key={item} className="flex items-center gap-4 whitespace-nowrap">
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {isOpen && (
        <div className="absolute left-6 right-6 top-16 z-50 space-y-4 rounded-2xl bg-card/95 p-5 shadow-ambient backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 pl-2 text-left">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              STAR
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              SIGN IN
            </Link>
          </div>
          <Link
            href="/docs"
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-full items-center justify-center rounded-full bg-primary text-xs font-black uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Explore Docs
          </Link>
        </div>
      )}
    </header>
  );
}
