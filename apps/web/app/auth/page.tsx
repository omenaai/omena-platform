import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ArrowUpRight, DatabaseZap, ShieldCheck, Waves } from "lucide-react";
import { WalletSignInCard } from "@/components/auth/WalletSignInCard";
import { getRequestSession } from "@/lib/auth/session";

const featureTiles = [
  { icon: ShieldCheck, label: "Session" },
  { icon: DatabaseZap, label: "Analysis" },
  { icon: Waves, label: "Signals" },
];

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
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_460px]">
        <section className="relative hidden overflow-hidden border-r border-border/70 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(36,91,255,0.16),transparent_28%),radial-gradient(circle_at_78%_58%,rgba(36,91,255,0.12),transparent_32%),linear-gradient(180deg,rgba(251,253,255,0.98)_0%,rgba(244,248,255,0.98)_100%)]" />
          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="flex items-center justify-between gap-4">
              <Link className="flex items-center" href="/" aria-label="OMENA home">
                <Image src="/logo.png" alt="OMENA" width={132} height={34} className="h-8 w-auto object-contain" priority />
              </Link>
              <Link href="/" className="inline-flex items-center gap-1.5 text-foreground/72 transition-colors hover:text-foreground" aria-label="Back to landing">
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[30px] border border-primary/10 bg-white/55 p-6 sm:col-span-2">
                <div className="flex gap-3">
                  {featureTiles.map((tile) => {
                    const Icon = tile.icon;

                    return (
                      <div key={tile.label} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-white/70 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[30px] border border-border/60 bg-white/50 p-6 sm:col-span-2">
                <div className="h-[280px] rounded-[26px] border border-dashed border-primary/20 bg-[radial-gradient(circle_at_30%_25%,rgba(36,91,255,0.14),transparent_26%),radial-gradient(circle_at_70%_70%,rgba(36,91,255,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.52),rgba(244,248,255,0.7))]" />
              </div>
            </div>

            <div className="flex gap-3">
              {featureTiles.map((tile) => {
                const Icon = tile.icon;

                return (
                  <div key={tile.label} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-white/60 text-foreground/72">
                    <Icon className="h-5 w-5" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-8 lg:px-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link className="flex items-center" href="/" aria-label="OMENA home">
                <Image src="/logo.png" alt="OMENA" width={132} height={34} className="h-8 w-auto object-contain" priority />
              </Link>
              <Link href="/" className="inline-flex items-center text-foreground/72 transition-colors hover:text-foreground" aria-label="Back to landing">
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <WalletSignInCard nextPath={nextPath} />
          </div>
        </section>
      </div>
    </div>
  );
}
