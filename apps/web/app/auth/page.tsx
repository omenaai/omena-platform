import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { WalletSignInCard } from "@/components/auth/WalletSignInCard";

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
        <div className="w-full max-w-[400px]">
          <WalletSignInCard nextPath={nextPath} />
        </div>
      </main>
    </div>
  );
}
