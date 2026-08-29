import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ToolEditor } from "@/components/admin/ToolEditor";
import { getAdminLists, getAdminTool } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Edit calculator" };

export default async function AdminToolEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [tool, lists] = await Promise.all([getAdminTool(slug), getAdminLists()]);
  if (!tool) notFound();

  return (
    <div>
      <AdminPageHeader
        title={tool.name}
        description="Write as you would explain the job to a homeowner on site. Meta tags and indexing are at the top of the form."
        actions={
          <LinkButton href={`/calculators/${tool.category_slug}/${tool.slug}`} variant="secondary" size="sm">
            View live
          </LinkButton>
        }
      />
      <ToolEditor initial={tool} categories={lists.categories} />
    </div>
  );
}
