import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";
import { formatDisplayDate } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("disclaimer");
}

export default async function DisclaimerPage() {
  const page = await getResolvedPage("disclaimer");
  return (
    <LegalPage title={page?.title ?? "Disclaimer"} updated={formatDisplayDate(page?.updated_at ?? "2026-08-29")}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
