"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { seedCatalogAction } from "@/lib/cms/actions";

export function SeedCatalogButton() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function run() {
    setPending(true);
    setMessage(null);
    setError(null);
    const result = await seedCatalogAction();
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setMessage("Built-in calculators and guides were copied into Supabase. You can edit them from Tools and Guides.");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-3">
      <Button type="button" variant="secondary" disabled={pending} onClick={run}>
        {pending ? "Copying…" : "Copy built-in catalog into Supabase"}
      </Button>
      {message && (
        <Alert tone="success" title="Catalog copied">
          {message}
        </Alert>
      )}
      {error && (
        <Alert tone="danger" title="Could not copy the catalog">
          {error}
        </Alert>
      )}
    </div>
  );
}
