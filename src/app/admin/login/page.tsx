import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col justify-center px-4 py-16">
      <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-text-3">Project Home Calc</p>
      <h1 className="mt-2 text-[28px] font-extrabold tracking-[-0.015em] text-text">Admin sign in</h1>
      <p className="mt-2 text-[14.5px] text-text-2">
        This area is for editing calculators and guides. It is not part of the public site and is not indexed.
        {isSupabaseConfigured() ? "" : " Connect Supabase before signing in."}
      </p>
      <div className="mt-8 rounded-[var(--radius-md)] border border-border bg-surface p-6">
        <AdminLoginForm />
      </div>
    </div>
  );
}
