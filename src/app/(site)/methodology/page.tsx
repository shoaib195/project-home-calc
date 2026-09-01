import type { Metadata } from "next";
import { cmsPageMetadata, CmsMarkdownPage } from "@/components/site/CmsMarkdownPage";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata("methodology");
}

export default function MethodologyPage() {
  return <CmsMarkdownPage slug="methodology" />;
}
