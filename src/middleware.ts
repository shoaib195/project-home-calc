import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Apex → www for all paths except /ads.txt (AdSense crawlers often treat
 * ads.txt redirects as "Not found").
 */
export async function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const { pathname } = request.nextUrl;

  if (host === "projecthomecalc.com" && pathname !== "/ads.txt") {
    const url = request.nextUrl.clone();
    url.hostname = "www.projecthomecalc.com";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/admin")) {
    return updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all paths except Next internals / static assets.
     * /ads.txt is included so apex can serve it without www redirect.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
