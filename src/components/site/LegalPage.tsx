import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[720px] px-4 py-10 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />
      <h1 className="mt-3 text-[32px] font-extrabold tracking-[-0.015em] text-text">{title}</h1>
      <p className="mt-2 text-[13px] text-text-3">Last updated {updated}</p>
      <div className="mt-6 flex flex-col gap-5 text-[15.5px] leading-relaxed text-text-2 [&_h2]:mt-2 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-text [&_a]:font-semibold [&_a]:text-accent-strong [&_a]:underline [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
