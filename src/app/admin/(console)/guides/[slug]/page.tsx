import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { GuideEditor } from "@/components/admin/GuideEditor";
import { getAdminGuide } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Edit guide" };

export default async function AdminGuideEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await getAdminGuide(slug);
  if (!guide) notFound();

  return (
    <div>
      <AdminPageHeader
        title={guide.title}
        description="If a paragraph does not help someone order materials or read a quote, delete it."
        actions={
          <LinkButton href={`/guides/${guide.slug}`} variant="secondary" size="sm">
            View live
          </LinkButton>
        }
      />
      <GuideEditor initial={guide} />
    </div>
  );
}
