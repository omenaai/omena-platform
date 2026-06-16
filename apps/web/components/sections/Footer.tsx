"use client";

import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

export function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  return (
    <footer className="w-full py-12 md:py-16 bg-card flex flex-col">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col">
        
        {/* Top Row: Brand Logo + Tagline */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left w-full">
          <Link
            className="flex items-center gap-2 group"
            href="#"
          >
            <Image
              src="/logo.png"
              alt="OMENA"
              width={100}
              height={26}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-muted-foreground/80 font-medium">
            The Agent Intelligence Layer for Web3.
          </p>
        </div>

        {/* Columns Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left py-8">
          
          {/* Column 1: Company */}
          <div className="space-y-3.5">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-semibold">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security Audit</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-semibold">
              <li><Link href="#" className="hover:text-primary transition-colors">Key Benefits</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Developer SDK</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Agent Sandbox</Link></li>
            </ul>
          </div>

          

          {/* Column 4: Language & Socials */}
          <div className="flex flex-col gap-5 justify-between">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground bg-muted/30 hover:bg-muted/65 transition-colors w-fit cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground/60" />
              </Button>

              {langOpen && (
                <div className="absolute bottom-10 left-0 bg-card rounded-xl shadow-lg p-1.5 space-y-1 z-30 min-w-[110px] text-xs font-semibold">
                  {["English", "Português", "Bahasa"].map((lang) => (
                    <Button
                      variant="ghost"
                      size="sm"
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 hover:bg-muted/50 hover:text-primary rounded-md transition-colors cursor-pointer"
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: <TwitterIcon />, href: "#" },
                { icon: <GithubIcon />, href: "#" },
              ].map((soc, idx) => (
                <Link
                  key={idx}
                  href={soc.href}
                  className="w-8 h-8 rounded-full hover:text-primary bg-muted/30 hover:bg-card text-muted-foreground flex items-center justify-center transition-all active:scale-95 shadow-sm"
                >
                  {soc.icon}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground font-semibold pt-6">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Omena. All rights reserved.
          </p>
          <div className="flex items-center gap-4.5 justify-center sm:justify-end">
            <Link href="#" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
