import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { VisibilityControls } from "@/components/admin/VisibilityControls";
import { getAdminLists } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Pages" };

export default async function AdminPagesPage() {
  const lists = await getAdminLists();

  return (
    <div>
      <AdminPageHeader
        title="Pages"
        description="Home, About, Contact, legal, category hubs, and other URLs. Each row has meta tags, keywords, publish, and index controls. Calculators and guides have their own lists."
      />
      <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
        <table className="w-full min-w-[760px] text-left text-[14px]">
          <thead className="border-b border-border bg-surface-2 text-[12px] uppercase tracking-[0.04em] text-text-3">
            <tr>
              <th className="px-4 py-3 font-semibold">Page</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Google</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.pages.map((page) => (
              <tr key={page.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <Link href={`/admin/pages/${page.slug}`} className="font-semibold text-accent-strong hover:underline">
                    {page.title}
                  </Link>
                  <p className="text-[13px] text-text-3">{page.path}</p>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={page.status === "published" ? "accent" : "amber"}>{page.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={page.robots_index ? "accent" : "amber"}>{page.robots_index ? "index" : "noindex"}</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={`/admin/pages/${page.slug}`} className="text-[13.5px] font-semibold text-text hover:underline">
                      Edit
                    </Link>
                    <Link href={page.path} className="text-[13.5px] font-semibold text-text-2 hover:underline">
                      View
                    </Link>
                    <VisibilityControls entity="page" slug={page.slug} status={page.status} robotsIndex={page.robots_index} />
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
