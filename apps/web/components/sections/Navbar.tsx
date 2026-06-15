"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const navLinks = [
  { name: "Platform", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Enterprise", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
];

const announcements = [
  "Unlocked 50+ Real-Time Web3 Data Streams",
  "Join us at Omena Hackathon: July 13-14 in SF",
  "Deploy your first agent in under 2 minutes",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur-md flex flex-col z-50 sticky top-0 shadow-sm">
      {/* Upper Navbar */}
      <div className="w-full max-w-[1200px] mx-auto px-6 h-16 flex justify-between items-center">

        {/* Left Side: Brand Logo + Slash + Desktop Links */}
        <div className="flex items-center gap-6">
          {/* Brand logo */}
          <Link
            className="flex items-center gap-2 group shrink-0"
            href="#"
          >
            <Image
              src="/logo.png"
              alt="OMENA"
              width={110}
              height={28}
              priority
              className="h-6.5 w-auto object-contain"
            />
          </Link>

          {/* Daytona-style slash */}
          <span className="hidden md:inline text-muted/60 font-light text-sm select-none">/</span>

          {/* Desktop Menu Links inline */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="font-body-md text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons: GitHub + Sign in + Get started */}
        <div className="hidden md:flex items-center gap-4.5">
          {/* GitHub Star Button */}
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted/70 transition-colors uppercase tracking-wider shadow-sm shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Star</span>
          </Link>

          {/* Sign In */}
          <Link
            href="#"
            className="text-[10px] font-black text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-primary cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Subheader Banner */}
      <div className="w-full bg-background overflow-hidden">
        <Marquee className="mx-auto max-w-[1200px] px-6 py-2.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider [--duration:28s]" repeat={3}>
          {announcements.map((item) => (
            <div key={item} className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-6 right-6 bg-card/95 backdrop-blur-lg shadow-ambient rounded-2xl p-5 space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-left pl-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
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
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
          </div>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center bg-primary hover:bg-primary/85 text-primary-foreground font-black text-xs h-10 rounded-full transition-all uppercase tracking-wider"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
