import type { Metadata } from "next";
import { Alert } from "@/components/ui/Alert";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Settings" };

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-[28px] font-extrabold tracking-[-0.015em] text-text">Settings</h1>
      <p className="mt-2 text-[15px] text-text-2">
        Site keys live in environment variables, not in the public frontend bundle beyond the Supabase anon key (which is designed to be public and is locked down with RLS).
      </p>

      <dl className="mt-8 divide-y divide-border rounded-[var(--radius-md)] border border-border bg-surface">
        <Row label="Public site URL" value={SITE_URL} />
        <Row label="Supabase" value={isSupabaseConfigured() ? "Connected" : "Not configured"} />
        <Row label="OpenAI / AI writer" value="Not installed — drafts stay human-edited" />
        <Row label="Visitor tracking in this database" value="Off on purpose" />
        <Row label="Admin indexing" value="Forced noindex (robots.txt + meta + X-Robots-Tag)" />
        <Row label="Admin indexing" value="Forced noindex (robots + X-Robots-Tag)" />
      </dl>

      <div className="mt-8">
        <Alert tone="info" title="AdSense publisher ID">
          When Google issues a publisher ID, add it as an environment variable on the host (for example Vercel). Do not paste it into a public Git repo. Ads stay in the reserved slots already on the site — never next to Calculate.
        </Alert>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3">
      <dt className="text-[12px] font-semibold uppercase tracking-[0.04em] text-text-3">{label}</dt>
      <dd className="mt-1 text-[14.5px] text-text">{value}</dd>
    </div>
  );
}
