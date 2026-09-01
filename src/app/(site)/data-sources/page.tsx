import type { Metadata } from "next";
import { cmsPageMetadata, CmsMarkdownPage } from "@/components/site/CmsMarkdownPage";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata("data-sources");
}

export default function DataSourcesPage() {
  return <CmsMarkdownPage slug="data-sources" />;
}
