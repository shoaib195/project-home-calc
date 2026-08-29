import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { VisibilityControls } from "@/components/admin/VisibilityControls";
import { getAdminLists } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Calculators" };

export default async function AdminToolsPage() {
  const lists = await getAdminLists();

  return (
    <div>
      <AdminPageHeader
        title="Calculators"
        description="Each tool has its own editor for copy, meta tags, publish, and Google index. The calculator math stays in code."
      />
      <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
        <table className="w-full min-w-[760px] text-left text-[14px]">
          <thead className="border-b border-border bg-surface-2 text-[12px] uppercase tracking-[0.04em] text-text-3">
            <tr>
              <th className="px-4 py-3 font-semibold">Calculator</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Google</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.tools.map((tool) => (
              <tr key={tool.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <Link href={`/admin/tools/${tool.slug}`} className="font-semibold text-accent-strong hover:underline">
                    {tool.name}
                  </Link>
                  <p className="text-[13px] text-text-3">/calculators/{tool.category_slug}/{tool.slug}</p>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={tool.status === "published" ? "accent" : "amber"}>{tool.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={tool.robots_index !== false ? "accent" : "amber"}>
                    {tool.robots_index !== false ? "index" : "noindex"}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={`/admin/tools/${tool.slug}`} className="text-[13.5px] font-semibold text-text hover:underline">
                      Edit
                    </Link>
                    <Link
                      href={`/calculators/${tool.category_slug}/${tool.slug}`}
                      className="text-[13.5px] font-semibold text-text-2 hover:underline"
                    >
                      View
                    </Link>
                    <VisibilityControls
                      entity="tool"
                      slug={tool.slug}
                      status={tool.status}
                      robotsIndex={tool.robots_index !== false}
                    />
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
