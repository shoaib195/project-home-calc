"use client";

import { useRouter } from "next/navigation";
import { createBrowserSupabase } from "@/lib/supabase/browser";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function AdminSignOut() {
  const router = useRouter();

  async function signOut() {
    if (!isSupabaseConfigured()) return;
    const supabase = createBrowserSupabase();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button type="button" onClick={signOut} className="mt-2 text-[12.5px] font-semibold text-text-2 hover:text-text">
      Sign out
    </button>
  );
}
