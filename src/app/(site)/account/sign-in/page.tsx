import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { pageSeoMetadata } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("sign-in");
}

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-[560px] px-4 py-14 text-center sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sign in" }]} />
      <div className="mt-8 flex justify-center">
        <Badge tone="amber">Coming soon</Badge>
      </div>
      <h1 className="mt-4 text-[28px] font-extrabold tracking-[-0.015em] text-text">Sign in is not live yet</h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-2">
        You do not need an account to use any calculator. When saved projects ship, this page will be the place to sign in.
        Until then there is no password form here — that keeps the site honest for visitors and for ads review.
      </p>
      <div className="mt-8">
        <LinkButton href="/calculators">Browse calculators</LinkButton>
      </div>
    </div>
  );
}
