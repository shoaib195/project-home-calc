import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { PageEditor } from "@/components/admin/PageEditor";
import { getAdminPage } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Edit page" };

export default async function AdminPageEdit({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getAdminPage(slug);
  if (!page) notFound();

  return (
    <div>
      <AdminPageHeader
        title={page.title}
        description="Update the search title, description, keywords, publish state, and (where used) page body."
        actions={
          <LinkButton href={page.path} variant="secondary" size="sm">
            View live
          </LinkButton>
        }
      />
      <PageEditor initial={page} />
    </div>
  );
}
