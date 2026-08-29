import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";
import { formatDisplayDate } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("terms");
}

export default async function TermsPage() {
  const page = await getResolvedPage("terms");
  return (
    <LegalPage title={page?.title ?? "Terms of Use"} updated={formatDisplayDate(page?.updated_at ?? "2026-08-29")}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
