import type { Metadata } from "next";
import Link from "next/link";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { SeedCatalogButton } from "@/components/admin/SeedCatalogButton";
import { getAdminLists } from "@/lib/cms/admin";
import { tools as seedTools } from "@/lib/data/tools";
import { guides as seedGuides } from "@/lib/data/guides";

export const metadata: Metadata = { title: "Overview" };

export default async function AdminOverviewPage() {
  const lists = await getAdminLists();
  const toolCount = lists.tools.length || seedTools.length;
  const guideCount = lists.guides.length || seedGuides.length;
  const publishedTools = lists.tools.filter((t) => t.status === "published").length || seedTools.length;
  const publishedGuides = lists.guides.filter((g) => g.status === "published").length || seedGuides.length;

  const checks = [
    { ok: true, label: "About, Contact, Privacy, Terms, Cookies, Disclaimer pages exist on the public site" },
    { ok: true, label: "Calculators run without an account" },
    { ok: publishedTools >= 6, label: `${publishedTools} published calculators (need useful original tools, not empty categories)` },
    { ok: publishedGuides >= 2, label: `${publishedGuides} published guides that explain real project decisions` },
    { ok: lists.connected, label: lists.connected ? "Supabase connected" : "Supabase not connected — public site still uses the built-in catalog" },
    { ok: lists.source === "supabase", label: lists.source === "supabase" ? "Public catalog can read from Supabase" : "Copy the built-in catalog before CMS edits go live" },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Overview"
        description="Edit calculators, guides, and page SEO. Do not paste generated filler — Google treats thin, repetitive articles as low quality, including for ads."
      />

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Tools in CMS" value={String(toolCount)} />
        <Stat label="Guides in CMS" value={String(guideCount)} />
        <Stat label="Published tools" value={String(publishedTools)} />
        <Stat label="Activity rows" value={String(lists.audit.length)} />
      </div>

      <section className="mt-10 rounded-[var(--radius-md)] border border-border bg-surface p-5">
        <h2 className="font-display text-[16px] font-bold text-text">Site readiness</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {checks.map((c) => (
            <li key={c.label} className="flex gap-2 text-[14px] text-text-2">
              <span className={c.ok ? "text-success" : "text-warning"}>{c.ok ? "Yes" : "Not yet"}</span>
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-[var(--radius-md)] border border-border bg-surface p-5">
        <h2 className="font-display text-[16px] font-bold text-text">First-time setup</h2>
        <p className="mt-2 text-[14px] text-text-2">
          Copy the built-in catalog into Supabase once. After that, Tools and Guides in this admin are the live copy when rows exist.
        </p>
        <div className="mt-4">
          <SeedCatalogButton />
        </div>
      </section>

      <Alert tone="info" title="Ads and traffic reports">
        Country and search-query reports belong in Google Analytics and Search Console after the domain is live — not as a visitor-by-visitor log in this database. This admin is for content, publish state, and who changed what.
      </Alert>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin/tools" className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-2 text-[14px] font-semibold text-text hover:border-accent">
          Edit tools
        </Link>
        <Link href="/admin/guides" className="rounded-[var(--radius-sm)] border border-border-strong px-3 py-2 text-[14px] font-semibold text-text hover:border-accent">
          Edit guides
        </Link>
        <Badge tone="neutral">No AI writer in this admin</Badge>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-text-3">{label}</p>
      <p className="mt-1 font-mono text-[28px] font-bold text-accent-strong">{value}</p>
    </div>
  );
}
