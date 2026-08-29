import type { Metadata } from "next";
import { getAdminLists } from "@/lib/cms/admin";

export const metadata: Metadata = { title: "Activity" };

export default async function AdminAuditPage() {
  const lists = await getAdminLists();

  return (
    <div>
      <h1 className="text-[28px] font-extrabold tracking-[-0.015em] text-text">Activity</h1>
      <p className="mt-2 text-[15px] text-text-2">
        Who changed catalog content. This is not a log of public visitors.
      </p>
      {lists.audit.length === 0 ? (
        <p className="mt-8 rounded-[var(--radius-md)] border border-dashed border-border-strong bg-surface p-6 text-[14px] text-text-2">
          No CMS changes yet. Copy the catalog or save a tool to see rows here.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-[var(--radius-md)] border border-border bg-surface">
          <table className="w-full min-w-[720px] text-left text-[14px]">
            <thead className="border-b border-border bg-surface-2 text-[12px] uppercase tracking-[0.04em] text-text-3">
              <tr>
                <th className="px-4 py-3 font-semibold">When</th>
                <th className="px-4 py-3 font-semibold">Who</th>
                <th className="px-4 py-3 font-semibold">Action</th>
                <th className="px-4 py-3 font-semibold">Item</th>
              </tr>
            </thead>
            <tbody>
              {lists.audit.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-text-3">{new Date(row.created_at).toLocaleString("en-GB")}</td>
                  <td className="px-4 py-3">{row.actor_email ?? "—"}</td>
                  <td className="px-4 py-3">{row.action}</td>
                  <td className="px-4 py-3">
                    {row.entity_type} / {row.entity_id}
                    {row.detail ? <span className="block text-[12.5px] text-text-3">{row.detail}</span> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
