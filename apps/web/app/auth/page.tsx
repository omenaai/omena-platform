import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-[420px] shrink-0 flex-col justify-between border-r border-border px-10 py-12">
        <Link href="/" aria-label="OMENA home">
          <Image src="/logo.png" alt="OMENA" width={120} height={32} className="h-8 w-auto object-contain" priority />
        </Link>

        <div className="space-y-5">
          <p className="text-[10px] font-black uppercase tracking-[0.26em] text-primary">
            Agent Intelligence Layer
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.06em] text-foreground">
            Real-time<br />onchain<br />intelligence.
          </h2>
          <p className="text-sm font-medium leading-7 text-muted-foreground max-w-[240px]">
            Risk analysis, wallet intelligence, and actionable signals for AI agents.
          </p>
        </div>

        <p className="text-[10px] font-medium text-muted-foreground/60 tracking-wide">
          © {new Date().getFullYear()} OMENA AI
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>

          {/* Logo — top right */}
          <Link href="/" aria-label="OMENA home">
            <Image src="/logo.png" alt="OMENA" width={100} height={28} className="h-7 w-auto object-contain" priority />
          </Link>
        </div>

        {/* Form centered */}
        <div className="flex-1 flex items-center justify-center px-8 py-10">
          <div className="w-full max-w-[360px]">
            <WalletSignInCard nextPath={nextPath} />
          </div>
        </div>
      </div>
    </div>
  );
}
