import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

function withAdminRobots(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export async function updateSession(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminPath = pathname.startsWith("/admin");
  const isAdminLogin = pathname === "/admin/login";

  if (!isAdminPath) {
    return NextResponse.next({ request });
  }

  if (!isSupabaseConfigured()) {
    if (isAdminLogin) return withAdminRobots(NextResponse.next({ request }));
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return withAdminRobots(NextResponse.redirect(url));
  }

  let response = withAdminRobots(NextResponse.next({ request }));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = withAdminRobots(NextResponse.next({ request }));
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isAdminLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return withAdminRobots(NextResponse.redirect(url));
  }

  if (user && isAdminLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return withAdminRobots(NextResponse.redirect(url));
  }

  return withAdminRobots(response);
}
