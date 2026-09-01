import type { Metadata } from "next";
import { cmsPageMetadata, CmsMarkdownPage } from "@/components/site/CmsMarkdownPage";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata("suggest-calculator");
}

export default function SuggestCalculatorPage() {
  return <CmsMarkdownPage slug="suggest-calculator" />;
}
