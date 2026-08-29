"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/tools", label: "Calculators" },
  { href: "/admin/guides", label: "Guides" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/indexing", label: "Indexing" },
  { href: "/admin/audit", label: "Activity" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin" className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:px-2 lg:pb-0">
      {links.map((link) => {
        const active = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`shrink-0 rounded-[var(--radius-sm)] px-3 py-2 text-[13.5px] font-semibold ${
              active ? "bg-white/12 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
