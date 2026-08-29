import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";
import { formatDisplayDate } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("cookies");
}

export default async function CookiesPage() {
  const page = await getResolvedPage("cookies");
  return (
    <LegalPage title={page?.title ?? "Cookie Policy"} updated={formatDisplayDate(page?.updated_at ?? "2026-08-29")}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
