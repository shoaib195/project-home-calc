import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("projects");
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-14 text-center sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Project Planner" }]} />
      <div className="mt-8 flex justify-center">
        <Badge tone="amber">Coming soon</Badge>
      </div>
      <h1 className="mt-4 text-[32px] font-extrabold tracking-[-0.015em] text-text">Plan a whole project, not just one calculation</h1>
      <p className="mx-auto mt-3 max-w-lg text-[16px] leading-relaxed text-text-2">
        The project planner will let you name a project — like &ldquo;My Backyard Patio&rdquo; — add calculations
        from any tool, and see a combined materials list and estimated total in one place, with PDF export to take
        to a contractor or supplier.
      </p>
      <div className="mt-8">
        <LinkButton href="/calculators">Browse calculators in the meantime</LinkButton>
      </div>
    </div>
  );
}
