"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  type CookieConsentValue,
  readStoredConsent,
  updateConsentMode,
} from "@/lib/ads";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      updateConsentMode(stored);
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  function save(value: CookieConsentValue) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    updateConsentMode(value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("phc-consent", { detail: value }));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[300] border-t border-border bg-surface p-4 sm:p-5"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[15px] font-semibold text-text">Cookies &amp; advertising</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-text-2">
            We use essential storage for theme preference. Advertising partners such as Google AdSense may use
            cookies for ads when you accept. Choose <strong className="font-semibold text-text">Accept</strong> for
            optional advertising cookies, or <strong className="font-semibold text-text">Essential only</strong> to
            keep advertising cookies off. See our{" "}
            <Link href="/legal/cookies" className="font-semibold text-accent-strong underline-offset-2 hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="font-semibold text-accent-strong underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save("essential")}
            className="min-h-11 rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-2.5 text-[14px] font-semibold text-text-2 hover:bg-surface-2"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="min-h-11 rounded-[var(--radius-sm)] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-accent-strong"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
