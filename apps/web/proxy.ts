import { NextResponse, type NextRequest } from "next/server";

const SUBDOMAIN_ROUTES: Record<string, string> = {
  docs: "/docs",
  litepaper: "/litepaper",
};

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const subdomain = hostname.split(".")[0];
  const targetPath = SUBDOMAIN_ROUTES[subdomain];

  if (!targetPath || request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = targetPath;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/"],
};
