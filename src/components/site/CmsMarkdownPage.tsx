import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";

export async function cmsPageMetadata(slug: string): Promise<Metadata> {
  return pageSeoMetadata(slug);
}

export async function CmsMarkdownPage({ slug }: { slug: string }) {
  const page = await getResolvedPage(slug);
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-[720px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: page.title }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text">{page.title}</h1>
      <div className="mt-6">
        <MarkdownBody text={page.body} />
      </div>
    </div>
  );
}
