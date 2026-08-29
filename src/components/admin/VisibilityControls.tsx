"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { setGuideStatusAction, setPageStatusAction, setRobotsIndexAction, setToolStatusAction } from "@/lib/cms/actions";
import type { ContentStatus } from "@/lib/cms/types";

export function VisibilityControls({
  entity,
  slug,
  status,
  robotsIndex,
}: {
  entity: "tool" | "guide" | "page";
  slug: string;
  status: ContentStatus;
  robotsIndex: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function run(fn: () => Promise<{ ok: boolean; error?: string }>) {
    setPending(true);
    const result = await fn();
    setPending(false);
    if (!result.ok) {
      window.alert(result.error ?? "Update failed. Run supabase/migrations/004_seo.sql in the SQL editor if columns are missing.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        size="sm"
        variant="secondary"
        disabled={pending}
        onClick={() =>
          run(() =>
            entity === "tool"
              ? setToolStatusAction(slug, status === "published" ? "draft" : "published")
              : entity === "guide"
                ? setGuideStatusAction(slug, status === "published" ? "draft" : "published")
                : setPageStatusAction(slug, status === "published" ? "draft" : "published")
          )
        }
      >
        {status === "published" ? "Unpublish" : "Publish"}
      </Button>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        disabled={pending}
        onClick={() => run(() => setRobotsIndexAction(entity, slug, !robotsIndex))}
      >
        {robotsIndex ? "Set noindex" : "Allow index"}
      </Button>
    </div>
  );
}
