"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { createBrowserSupabase } from "@/lib/supabase/browser";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  if (!isSupabaseConfigured()) {
    return (
      <Alert tone="warning" title="Supabase is not connected yet">
        Add <code className="font-mono text-[13px]">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
        <code className="font-mono text-[13px]">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to <code className="font-mono text-[13px]">.env.local</code>,
        run <code className="font-mono text-[13px]">supabase/migrations/001_init.sql</code> in the SQL editor, create an Auth user, and insert that
        email into <code className="font-mono text-[13px]">admin_emails</code>. The public calculators work without this.
      </Alert>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const supabase = createBrowserSupabase();
      const { error: signError } = await supabase.auth.signInWithPassword({ email, password });
      if (signError) {
        setError("That email or password did not match. Use the admin user you created in Supabase Auth.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Could not reach Supabase. Check the project URL and anon key.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {error && (
        <Alert tone="danger" title="Could not sign in">
          {error}
        </Alert>
      )}
      <div>
        <label htmlFor="admin-email" className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
          Email
        </label>
        <input
          id="admin-email"
          type="email"
          autoComplete="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-[var(--radius-sm)] border border-border-strong bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="admin-password" className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-[var(--radius-sm)] border border-border-strong bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent"
        />
      </div>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
