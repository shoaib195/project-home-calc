import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { VisibilityControls } from "@/components/admin/VisibilityControls";
import { getAdminLists } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Indexing" };

export default async function AdminIndexingPage() {
  const lists = await getAdminLists();

  const rows = [
    ...lists.pages.map((p) => ({
      key: `page-${p.slug}`,
      entity: "page" as const,
      slug: p.slug,
      label: p.title,
      path: p.path,
      status: p.status,
      robotsIndex: p.robots_index,
      edit: `/admin/pages/${p.slug}`,
    })),
    ...lists.tools.map((t) => ({
      key: `tool-${t.slug}`,
      entity: "tool" as const,
      slug: t.slug,
      label: t.name,
      path: `/calculators/${t.category_slug}/${t.slug}`,
      status: t.status,
      robotsIndex: t.robots_index !== false,
      edit: `/admin/tools/${t.slug}`,
    })),
    ...lists.guides.map((g) => ({
      key: `guide-${g.slug}`,
      entity: "guide" as const,
      slug: g.slug,
      label: g.title,
      path: `/guides/${g.slug}`,
      status: g.status,
      robotsIndex: g.robots_index !== false,
      edit: `/admin/guides/${g.slug}`,
    })),
  ];

  return (
    <div>
      <AdminPageHeader
        title="Indexing"
        description="Choose which public URLs Google should list. Admin itself is always noindex. Draft pages stay out of the sitemap even if Index is on."
      />
      <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
        <table className="w-full min-w-[800px] text-left text-[14px]">
          <thead className="border-b border-border bg-surface-2 text-[12px] uppercase tracking-[0.04em] text-text-3">
            <tr>
              <th className="px-4 py-3 font-semibold">URL</th>
              <th className="px-4 py-3 font-semibold">Published</th>
              <th className="px-4 py-3 font-semibold">Google</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <p className="font-semibold text-text">{row.label}</p>
                  <p className="text-[13px] text-text-3">{row.path}</p>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={row.status === "published" ? "accent" : "amber"}>{row.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={row.robotsIndex ? "accent" : "amber"}>{row.robotsIndex ? "index" : "noindex"}</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={row.edit} className="text-[13.5px] font-semibold text-text hover:underline">
                      Edit meta
                    </Link>
                    <VisibilityControls entity={row.entity} slug={row.slug} status={row.status} robotsIndex={row.robotsIndex} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
