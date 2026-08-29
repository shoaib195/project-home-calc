import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("cookies");
}

export default async function CookiesPage() {
  const page = await getResolvedPage("cookies");
  return (
    <LegalPage title={page?.title ?? "Cookie Policy"} updated={page?.updated_at ?? "17 August 2026"}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
