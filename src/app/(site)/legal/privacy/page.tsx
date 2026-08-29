import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { getResolvedPage, pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("privacy");
}

export default async function PrivacyPage() {
  const page = await getResolvedPage("privacy");
  return (
    <LegalPage title={page?.title ?? "Privacy Policy"} updated={page?.updated_at ?? "17 August 2026"}>
      <MarkdownBody text={page?.body ?? ""} />
    </LegalPage>
  );
}
