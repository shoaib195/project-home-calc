import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { pageSeoMetadata, getResolvedPage } from "@/lib/cms/catalog";
import { SITE_NAME } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("about");
}

export default async function AboutPage() {
  const page = await getResolvedPage("about");
  return (
    <div className="mx-auto max-w-[720px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text">About {SITE_NAME}</h1>
      <div className="mt-6">
        <MarkdownBody text={page?.body ?? ""} />
      </div>
    </div>
  );
}
