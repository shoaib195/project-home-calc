import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("disclaimer");
}

export default async function DisclaimerPage() {
  const page = await getResolvedPage("disclaimer");
  return (
    <LegalPage title={page?.title ?? "Disclaimer"} updated={page?.updated_at ?? "17 August 2026"}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
