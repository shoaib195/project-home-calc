import Link from "next/link";

export default function AdminConsoleNotFound() {
  return (
    <div className="max-w-lg">
      <p className="font-mono text-[13px] font-bold uppercase tracking-[0.06em] text-text-3">404</p>
      <h1 className="mt-2 text-[28px] font-extrabold tracking-[-0.015em] text-text">That admin screen is not here</h1>
      <p className="mt-2 text-[15px] text-text-2">
        Try Overview and copy the built-in catalog if this calculator or guide is missing from Supabase.
      </p>
      <Link href="/admin" className="mt-6 inline-flex min-h-11 items-center font-semibold text-accent-strong hover:underline">
        Back to overview
      </Link>
    </div>
  );
}
