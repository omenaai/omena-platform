"use client";

import { useState, useTransition, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import bs58 from "bs58";
import { AlertCircle, Loader2, Mail, ShieldCheck, UserPlus, Wallet } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { authClient } from "@/lib/auth/auth-client";
import { Button } from "@/components/ui/Button";

type WalletSignInCardProps = {
  nextPath: string;
};

type AuthMode = "signin" | "register";

function getFriendlyAuthError(message?: string) {
  const normalized = message?.toLowerCase() ?? "";

  if (normalized.includes("support message signing")) {
    return "This wallet cannot be used for sign-in here.";
  }

  if (normalized.includes("nonce") || normalized.includes("challenge") || normalized.includes("expired")) {
    return "Your sign-in request expired. Please try again.";
  }

  if (normalized.includes("verification") || normalized.includes("signature")) {
    return "We could not confirm your wallet. Please try again.";
  }

  if (normalized.includes("unauthorized")) {
    return "Your session has ended. Please sign in again.";
  }

  if (normalized.includes("invalid email") || normalized.includes("email is invalid")) {
    return "Please enter a valid email address.";
  }

  if (normalized.includes("password") && normalized.includes("8")) {
    return "Use a password with at least 8 characters.";
  }

  if (normalized.includes("already exists") || normalized.includes("already been taken") || normalized.includes("already registered")) {
    return "This email is already in use.";
  }

  if (normalized.includes("invalid email or password") || normalized.includes("account not found") || normalized.includes("invalid credentials")) {
    return "Email or password is incorrect.";
  }

  return "Sign-in could not be completed. Please try again.";
}

function Field({
  icon,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="flex h-12 items-center gap-3 rounded-2xl border border-border/70 bg-background px-4">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-full w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}

export function WalletSignInCard({ nextPath }: WalletSignInCardProps) {
  const router = useRouter();
  const { setVisible } = useWalletModal();
  const { connected, publicKey, signMessage, disconnect } = useWallet();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isSigning, setIsSigning] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const walletAddress = publicKey?.toBase58() ?? "";

  const handleSignIn = async () => {
    if (!publicKey) {
      setVisible(true);
      return;
    }

    if (!signMessage) {
      setError("This wallet cannot be used for sign-in here.");
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
        throw new Error(noncePayload.error || "challenge_failed");
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
        throw new Error(verifyPayload.error || "verification_failed");
      }

      startTransition(() => {
        router.push(nextPath || "/app");
        router.refresh();
      });
    } catch (signInError) {
      setError(getFriendlyAuthError(signInError instanceof Error ? signInError.message : undefined));
    } finally {
      setIsSigning(false);
    }
  };

  const handlePasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    if (mode === "register" && !fullName.trim()) {
      setError("Please enter your name.");
      return;
    }

    setIsSubmittingEmail(true);

    try {
      const result = mode === "signin"
        ? await authClient.signIn.email({
            email: email.trim(),
            password,
            callbackURL: nextPath || "/app",
            rememberMe: true,
          })
        : await authClient.signUp.email({
            name: fullName.trim(),
            email: email.trim(),
            password,
            callbackURL: nextPath || "/app",
          });

      if (result.error) {
        setError(getFriendlyAuthError(result.error.message));
        return;
      }

      startTransition(() => {
        router.push(nextPath || "/app");
        router.refresh();
      });
    } catch (submitError) {
      setError(getFriendlyAuthError(submitError instanceof Error ? submitError.message : undefined));
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <div className="w-full max-w-[420px] space-y-5">
      <div className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 p-1">
        <button
          type="button"
          onClick={() => setMode("signin")}
          aria-label="Sign in mode"
          className={`flex h-10 flex-1 items-center justify-center rounded-full transition-colors ${mode === "signin" ? "bg-background text-foreground" : "text-muted-foreground"}`}
        >
          <Mail className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          aria-label="Register mode"
          className={`flex h-10 flex-1 items-center justify-center rounded-full transition-colors ${mode === "register" ? "bg-background text-foreground" : "text-muted-foreground"}`}
        >
          <UserPlus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setVisible(true)}
          aria-label="Wallet mode"
          className="flex h-10 flex-1 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <Wallet className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="w-full justify-center rounded-2xl border-border/70 bg-background text-[11px] font-black uppercase tracking-[0.18em]"
          disabled={isSigning || isPending}
          onClick={handleSignIn}
        >
          {isSigning || isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
          Wallet
        </Button>

        {connected ? (
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="w-full justify-center rounded-2xl border-border/70 bg-background text-[11px] font-black uppercase tracking-[0.18em]"
            onClick={() => disconnect()}
          >
            <Wallet className="h-4 w-4" />
            Disconnect
          </Button>
        ) : null}
      </div>

      <form onSubmit={handlePasswordSubmit} className="space-y-3">
        {mode === "register" ? (
          <Field icon={<UserPlus className="h-4 w-4" />} value={fullName} onChange={setFullName} placeholder="Full name" />
        ) : null}

        <Field icon={<Mail className="h-4 w-4" />} type="email" value={email} onChange={setEmail} placeholder="Email" />
        <Field icon={<ShieldCheck className="h-4 w-4" />} type="password" value={password} onChange={setPassword} placeholder="Password" />

        <Button
          type="submit"
          size="lg"
          className="w-full justify-center rounded-2xl text-[11px] font-black uppercase tracking-[0.18em]"
          disabled={isSubmittingEmail || isPending}
        >
          {isSubmittingEmail ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "signin" ? <Mail className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
          {mode === "signin" ? "Continue" : "Create"}
        </Button>
      </form>

      {walletAddress ? (
        <div className="truncate text-center text-xs font-medium text-muted-foreground">{walletAddress}</div>
      ) : null}

      {error ? (
        <div className="flex items-start gap-2 rounded-2xl border border-[color:rgba(186,26,26,0.18)] bg-[color:rgba(255,218,214,0.4)] px-4 py-3 text-sm font-medium text-foreground/88">
          <AlertCircle className="mt-0.5 h-4 w-4 text-[var(--color-error)]" />
          <span>{error}</span>
        </div>
      ) : null}
    </div>
  );
}
