import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { Alert } from "@/components/ui/Alert";
import { getAdminUser } from "@/lib/cms/admin";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AdminConsoleLayout({ children }: { children: React.ReactNode }) {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login");
  }

  const { user, isAdmin } = await getAdminUser();
  if (!user) {
    redirect("/admin/login");
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16">
        <Alert tone="danger" title="This account is not an admin">
          Sign in succeeded, but {user.email} is not in the <code className="font-mono">admin_emails</code> table.
          Add that email in the Supabase SQL editor, then refresh.
        </Alert>
      </div>
    );
  }

  return <AdminShell email={user.email}>{children}</AdminShell>;
}
