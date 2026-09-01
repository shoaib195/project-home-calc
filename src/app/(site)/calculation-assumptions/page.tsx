import type { Metadata } from "next";
import { cmsPageMetadata, CmsMarkdownPage } from "@/components/site/CmsMarkdownPage";

export async function generateMetadata(): Promise<Metadata> {
  return cmsPageMetadata("calculation-assumptions");
}

export default function CalculationAssumptionsPage() {
  return <CmsMarkdownPage slug="calculation-assumptions" />;
}
