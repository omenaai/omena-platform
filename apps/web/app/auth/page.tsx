import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3 } from "lucide-react";
import { WalletSignInCard } from "@/components/auth/WalletSignInCard";
import { Badge } from "@/components/ui/Badge";

type AuthPageProps = {
  searchParams: Promise<{
    next?: string;
  }>;
};

function getSafeNextPath(nextPath?: string) {
  if (!nextPath || !nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/app";
  }

  return nextPath;
}

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const params = await searchParams;
  const nextPath = getSafeNextPath(params.next);
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-between px-8 py-6 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>

        <Link href="/" aria-label="OMENA home">
          <Image
            src="/logo.png"
            alt="OMENA"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-8 py-10">
        {isProduction ? (
          <div className="w-full max-w-xl rounded-[28px] border border-border/70 bg-card/92 p-8 text-center shadow-[var(--shadow-ambient)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Clock3 className="h-5 w-5" />
            </div>
            <Badge className="mt-5 bg-primary/10 text-primary">Temporarily Closed</Badge>
            <h1 className="mt-4 font-display text-3xl font-black tracking-[-0.05em] text-foreground">
              Sign in and sign up are paused for now.
            </h1>
            <p className="mt-3 text-sm font-medium leading-7 text-muted-foreground">
              Access to the dashboard is limited outside localhost while the MVP is being finalized.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/docs"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Docs
              </Link>
              <Link
                href="/roadmap"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-xs font-black uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-muted"
              >
                View Roadmap
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[400px]">
            <WalletSignInCard nextPath={nextPath} />
          </div>
        )}
      </main>
    </div>
  );
}
