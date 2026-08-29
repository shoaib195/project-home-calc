import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/site/ContactForm";
import { MarkdownBody } from "@/components/site/MarkdownBody";
import { pageSeoMetadata, getResolvedPage } from "@/lib/cms/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return pageSeoMetadata("contact");
}

export default async function ContactPage() {
  const page = await getResolvedPage("contact");
  return (
    <div className="mx-auto max-w-[560px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text">Contact</h1>
      <div className="mt-3">
        <MarkdownBody text={page?.body ?? ""} />
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
