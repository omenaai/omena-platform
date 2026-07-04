import crypto from "node:crypto";
import path from "node:path";
import { betterAuth, type BetterAuthOptions } from "better-auth";
import { getMigrations } from "better-auth/db/migration";
import { nextCookies } from "better-auth/next-js";

const DEFAULT_BETTER_AUTH_URL = "http://localhost:3001";
const DEFAULT_AUTH_DB_PATH = path.join(process.cwd(), "data", "auth.sqlite");
const BUILD_FALLBACK_SECRET = crypto.randomBytes(32).toString("hex");

function getBetterAuthSecret() {
  return process.env.BETTER_AUTH_SECRET?.trim() || process.env.AUTH_SESSION_SECRET?.trim() || BUILD_FALLBACK_SECRET;
}

function getBetterAuthBaseUrl() {
  return process.env.BETTER_AUTH_URL?.trim() || DEFAULT_BETTER_AUTH_URL;
}

function createDatabase() {
  if (process.env.DATABASE_URL) {
    // PostgreSQL — used in production (EC2 / Docker)
    const { Pool } = require("pg") as typeof import("pg");
    return new Pool({ connectionString: process.env.DATABASE_URL });
  }

  // SQLite — used in local development
  const fs = require("node:fs") as typeof import("fs");
  const Database = require("better-sqlite3") as typeof import("better-sqlite3");
  const dbPath = process.env.AUTH_DB_PATH?.trim() || DEFAULT_AUTH_DB_PATH;
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  return new Database(dbPath);
}

const database = createDatabase();

const betterAuthOptions: BetterAuthOptions = {
  database,
  secret: getBetterAuthSecret(),
  baseURL: getBetterAuthBaseUrl(),
  basePath: "/api/auth",
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
};

export const emailAuth = betterAuth(betterAuthOptions);

let migrationPromise: Promise<void> | null = null;

export async function ensureBetterAuthSchema() {
  if (!migrationPromise) {
    migrationPromise = (async () => {
      const { runMigrations } = await getMigrations(betterAuthOptions);
      await runMigrations();
    })().catch((error) => {
      migrationPromise = null;
      throw error;
    });
  }

  await migrationPromise;
}
