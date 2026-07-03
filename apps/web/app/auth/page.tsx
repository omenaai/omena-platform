import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { WalletSignInCard } from "@/components/auth/WalletSignInCard";
import { getRequestSession } from "@/lib/auth/session";

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const session = await getRequestSession();
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/") ? params.next : "/app";

  if (session) {
    redirect(nextPath);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/80 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-6">
          <Link className="flex items-center" href="/" aria-label="OMENA home">
            <Image src="/logo.png" alt="OMENA" width={132} height={34} className="h-8 w-auto object-contain" priority />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/72 transition-colors hover:text-foreground">
            Landing
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_top_left,rgba(36,91,255,0.12),transparent_34%),linear-gradient(180deg,#fbfdff_0%,rgba(247,250,255,0.72)_50%,rgba(247,250,255,0)_100%)]" />
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-12 md:py-16">
          <WalletSignInCard nextPath={nextPath} />
        </div>
      </main>
    </div>
  );
}
