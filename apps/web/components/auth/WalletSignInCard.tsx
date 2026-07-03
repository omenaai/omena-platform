"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import bs58 from "bs58";
import { AlertCircle, Loader2, ShieldCheck, Wallet } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type WalletSignInCardProps = {
  nextPath: string;
};

export function WalletSignInCard({ nextPath }: WalletSignInCardProps) {
  const router = useRouter();
  const { setVisible } = useWalletModal();
  const { connected, publicKey, signMessage, wallet, disconnect } = useWallet();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSigning, setIsSigning] = useState(false);

  const walletAddress = publicKey?.toBase58() ?? "";

  const handleSignIn = async () => {
    if (!publicKey) {
      setVisible(true);
      return;
    }

    if (!signMessage) {
      setError("This wallet does not support message signing.");
      return;
    }

    setError("");
    setIsSigning(true);

    try {
      const nonceResponse = await fetch("/api/auth/nonce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletAddress }),
      });

      const noncePayload = (await nonceResponse.json()) as { message?: string; error?: string };

      if (!nonceResponse.ok || !noncePayload.message) {
        throw new Error(noncePayload.error || "Unable to create sign-in challenge.");
      }

      const messageBytes = new TextEncoder().encode(noncePayload.message);
      const signatureBytes = await signMessage(messageBytes);
      const signature = bs58.encode(signatureBytes);

      const verifyResponse = await fetch("/api/auth/verify-wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ walletAddress, signature }),
      });

      const verifyPayload = (await verifyResponse.json()) as { error?: string };

      if (!verifyResponse.ok) {
        throw new Error(verifyPayload.error || "Wallet verification failed.");
      }

      startTransition(() => {
        router.push(nextPath || "/app");
        router.refresh();
      });
    } catch (signInError) {
      setError(signInError instanceof Error ? signInError.message : "Wallet sign-in failed.");
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <div className="rounded-[32px] border border-border bg-card/95 p-6 shadow-[0_24px_60px_rgba(8,18,37,0.08)] sm:p-7">
      <div className="mb-6 space-y-3">
        <Badge variant="secondary" className="bg-primary/10 text-primary">Wallet Required</Badge>
        <h1 className="font-display text-3xl font-black tracking-[-0.06em] text-foreground sm:text-4xl">
          Sign in with your Solana wallet.
        </h1>
        <p className="max-w-2xl text-sm font-medium leading-6 text-muted-foreground">
          OMENA uses wallet signature for identity proof, then issues a secure session cookie for dashboard access.
        </p>
      </div>

      <div className="space-y-4 rounded-[28px] border border-border/70 bg-background p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Connected Wallet</p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {walletAddress || "No wallet connected"}
            </p>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              {wallet?.adapter.name ? `Using ${wallet.adapter.name}` : "Select a wallet to continue"}
            </p>
          </div>
          <Button type="button" variant="outline" size="sm" className="text-[11px] font-black uppercase tracking-[0.18em]" onClick={() => setVisible(true)}>
            <Wallet className="h-4 w-4" />
            {connected ? "Change Wallet" : "Connect Wallet"}
          </Button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" size="lg" className="min-w-48 text-[11px] font-black uppercase tracking-[0.18em]" disabled={isSigning || isPending} onClick={handleSignIn}>
            {isSigning || isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
            Sign In
          </Button>
          {connected ? (
            <Button type="button" variant="outline" size="lg" className="text-[11px] font-black uppercase tracking-[0.18em]" onClick={() => disconnect()}>
              Disconnect
            </Button>
          ) : null}
        </div>
      </div>

      {error ? (
        <div className="mt-4 flex items-start gap-2 rounded-2xl border border-[color:rgba(186,26,26,0.18)] bg-[color:rgba(255,218,214,0.55)] px-4 py-3 text-sm font-medium text-foreground/88">
          <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--color-error)]" />
          <span>{error}</span>
        </div>
      ) : null}
    </div>
  );
}
