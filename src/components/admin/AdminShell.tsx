import Link from "next/link";
import { AdminSignOut } from "@/components/admin/AdminSignOut";
import { AdminNav } from "@/components/admin/AdminNav";

export function AdminShell({
  email,
  children,
}: {
  email?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-surface-2">
      <aside className="sticky top-0 z-40 bg-ink-950 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:h-dvh lg:w-60 lg:flex-col">
        <div className="flex shrink-0 items-center justify-between px-4 py-4">
          <div>
            <Link href="/admin" className="font-display text-[15px] font-extrabold tracking-[-0.01em] text-white">
              Admin
            </Link>
            <p className="mt-0.5 text-[11px] font-medium text-white/50">Project Home Calc</p>
          </div>
          <Link href="/" className="text-[12px] font-semibold text-white/70 hover:text-white lg:hidden">
            View site
          </Link>
        </div>
        <div className="lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
          <AdminNav />
        </div>
        <div className="hidden shrink-0 border-t border-white/10 px-4 py-4 lg:block">
          <Link href="/" className="text-[12.5px] font-semibold text-white/80 hover:text-white">
            View public site
          </Link>
          {email && <p className="mt-3 truncate text-[12px] text-white/45">{email}</p>}
          <div className="[&_button]:text-white/70 [&_button:hover]:text-white">
            <AdminSignOut />
          </div>
        </div>
      </aside>
      <div className="px-4 py-6 sm:px-6 lg:ml-60 lg:px-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
