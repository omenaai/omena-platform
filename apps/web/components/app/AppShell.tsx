import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, LayoutDashboard } from "lucide-react";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { buttonVariants } from "@/components/ui/Button";
import { getRequestSession } from "@/lib/auth/session";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

const navLinks = [
  { href: "/app", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
  { href: "/litepaper", label: "Litepaper" },
];

function formatIdentity(session: Awaited<ReturnType<typeof getRequestSession>>) {
  if (!session) {
    return "No Session";
  }

  if (session.walletAddress) {
    return `${session.walletAddress.slice(0, 4)}...${session.walletAddress.slice(-4)}`;
  }

  if (session.email) {
    return session.email;
  }

  return session.name || "Signed In";
}

export async function AppShell({ children }: AppShellProps) {
  const session = await getRequestSession();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-8">
            <Link className="flex items-center" href="/" aria-label="OMENA home">
              <Image src="/logo.png" alt="OMENA" width={132} height={34} className="h-8 w-auto object-contain" priority />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Dashboard navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.18em] text-foreground/72 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden max-w-[220px] truncate rounded-full border border-border bg-card px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/72 sm:inline-flex">
              {formatIdentity(session)}
            </div>
            <Link
              href="/docs#api-overview"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "hidden bg-card text-[10px] font-black uppercase tracking-[0.18em] sm:inline-flex",
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              API Flow
            </Link>
            <LogoutButton />
            <Link href="/" className={cn(buttonVariants({ size: "sm" }), "text-[10px] font-black uppercase tracking-[0.18em]")}>
              Landing
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top_left,rgba(36,91,255,0.12),transparent_34%),linear-gradient(180deg,#fbfdff_0%,rgba(247,250,255,0.72)_50%,rgba(247,250,255,0)_100%)]" />
        {children}
      </main>

      <footer className="border-t border-border/80 bg-background/95">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-6 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-foreground">
            <LayoutDashboard className="h-4 w-4 text-primary" />
            <span className="font-semibold">OMENA Dashboard Phase 1</span>
          </div>
          <p>Minimal token intelligence UI with mock-safe fallback and modular analysis blocks.</p>
        </div>
      </footer>
    </div>
  );
}
