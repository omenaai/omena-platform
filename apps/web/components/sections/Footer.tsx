import Link from "next/link";
import Image from "next/image";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Litepaper", href: "/litepaper" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { label: "Architecture", href: "/docs#architecture" },
      { label: "Risk Engine", href: "/docs#risk-intelligence" },
      { label: "API Overview", href: "/docs#api-overview" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <section className="relative overflow-hidden bg-[#020202] py-10 text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-35 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-7 px-6 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.42em] text-white/55">Built on</p>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
            <div className="flex items-center gap-3">
              <Image src="/solana-logo-mark.svg" alt="Solana" width={101} height={88} className="h-8 w-auto" />
              <span className="font-display text-2xl font-black uppercase tracking-[0.18em]">Solana</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/aws-logo.svg" alt="AWS" width={128} height={128} className="h-10 w-auto" />
              <span className="font-display text-2xl font-black uppercase tracking-[0.18em]">AWS</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-12 md:py-16">
        <div className="flex w-full flex-col items-start justify-between gap-5 text-left sm:flex-row sm:items-center">
          <Link className="flex items-center" href="/" aria-label="OMENA home">
            <Image src="/logo.png" alt="OMENA" width={120} height={32} className="h-12 w-auto object-contain" />
          </Link>
          <p className="max-w-md text-sm font-semibold leading-6 text-muted-foreground">
            The Agent Intelligence Layer for Web3, built for autonomous systems that need trustworthy onchain context.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 border-y border-slate-200 py-8 sm:grid-cols-2 md:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3.5">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground">{group.title}</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3.5">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground">Start</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/docs"
                className="inline-flex h-10 w-fit items-center rounded-full bg-primary px-5 text-[10px] font-black uppercase tracking-wider text-white transition-colors hover:bg-primary/90"
              >
                Explore Docs
              </Link>
              <Link
                href="/litepaper"
                className="inline-flex h-10 w-fit items-center rounded-full border border-black/10 bg-white px-5 text-[10px] font-black uppercase tracking-wider text-foreground transition-colors hover:bg-muted/50"
              >
                Read Litepaper
              </Link>
              <Link
                href="https://github.com"
                className="inline-flex h-10 w-fit items-center rounded-full bg-[#111827] px-5 text-[10px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#0b1220]"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-semibold text-muted-foreground sm:flex-row">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Omena. All rights reserved.</p>
          <div className="flex items-center gap-4.5">
            <Link href="/docs" className="transition-colors hover:text-primary">Docs</Link>
            <Link href="/litepaper" className="transition-colors hover:text-primary">Litepaper</Link>
            <Link href="/roadmap" className="transition-colors hover:text-primary">Roadmap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
