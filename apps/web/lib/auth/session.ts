import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { cookies } from "next/headers";
import { AUTH_AUDIENCE, AUTH_COOKIE_NAME, AUTH_ISSUER, AUTH_SESSION_TTL_SECONDS, getAuthSecret } from "@/lib/auth/config";

export type AuthSession = {
  userId: string;
  walletAddress: string;
  issuedAt: number;
  expiresAt: number;
};

type SessionClaims = JWTPayload & {
  uid: string;
  walletAddress: string;
};

function buildSessionFromClaims(payload: SessionClaims): AuthSession {
  return {
    userId: payload.uid,
    walletAddress: payload.walletAddress,
    issuedAt: payload.iat ?? 0,
    expiresAt: payload.exp ?? 0,
  };
}

export async function createSessionToken(walletAddress: string) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const expiresAt = issuedAt + AUTH_SESSION_TTL_SECONDS;

  const token = await new SignJWT({
    uid: `wallet:${walletAddress}`,
    walletAddress,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(issuedAt)
    .setIssuer(AUTH_ISSUER)
    .setAudience(AUTH_AUDIENCE)
    .setExpirationTime(expiresAt)
    .sign(getAuthSecret());

  return { token, session: { userId: `wallet:${walletAddress}`, walletAddress, issuedAt, expiresAt } satisfies AuthSession };
}

export async function verifySessionToken(token: string) {
  const { payload } = await jwtVerify(token, getAuthSecret(), {
    issuer: AUTH_ISSUER,
    audience: AUTH_AUDIENCE,
  });

  return buildSessionFromClaims(payload as SessionClaims);
}

export async function getRequestSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    return await verifySessionToken(token);
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_SESSION_TTL_SECONDS,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
