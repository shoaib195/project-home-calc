import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { VisibilityControls } from "@/components/admin/VisibilityControls";
import { getAdminLists } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Guides" };

export default async function AdminGuidesPage() {
  const lists = await getAdminLists();

  return (
    <div>
      <AdminPageHeader
        title="Guides"
        description="Each guide has its own editor. Keep these as practical project notes — extra keyword blogs are not required."
      />
      <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
        <table className="w-full min-w-[760px] text-left text-[14px]">
          <thead className="border-b border-border bg-surface-2 text-[12px] uppercase tracking-[0.04em] text-text-3">
            <tr>
              <th className="px-4 py-3 font-semibold">Guide</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Google</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.guides.map((guide) => (
              <tr key={guide.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <Link href={`/admin/guides/${guide.slug}`} className="font-semibold text-accent-strong hover:underline">
                    {guide.title}
                  </Link>
                  <p className="text-[13px] text-text-3">/guides/{guide.slug}</p>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={guide.status === "published" ? "accent" : "amber"}>{guide.status}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={guide.robots_index !== false ? "accent" : "amber"}>
                    {guide.robots_index !== false ? "index" : "noindex"}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link href={`/admin/guides/${guide.slug}`} className="text-[13.5px] font-semibold text-text hover:underline">
                      Edit
                    </Link>
                    <Link href={`/guides/${guide.slug}`} className="text-[13.5px] font-semibold text-text-2 hover:underline">
                      View
                    </Link>
                    <VisibilityControls
                      entity="guide"
                      slug={guide.slug}
                      status={guide.status}
                      robotsIndex={guide.robots_index !== false}
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
