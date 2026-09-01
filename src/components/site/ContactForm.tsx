"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { CONTACT_EMAIL } from "@/lib/site";

type FieldErrors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Enter your name so we know who to reply to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (message.trim().length < 10) next.message = "Add a bit more detail — at least a sentence or two.";
    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again or email us directly.");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection or email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <Alert tone="success" title="Message sent">
        Thanks — your message was emailed to us. We usually reply within a few business days. You can also
        reach us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent-strong underline">
          {CONTACT_EMAIL}
        </a>
        .
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {status === "error" && errorMessage ? (
        <Alert tone="danger" title="Could not send">
          {errorMessage}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent-strong underline">
            Email {CONTACT_EMAIL}
          </a>
        </Alert>
      ) : null}

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          disabled={status === "sending"}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(e) => setName(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent disabled:opacity-60 ${
            errors.name ? "border-danger" : "border-border-strong"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-[13px] font-medium text-danger">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          disabled={status === "sending"}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent disabled:opacity-60 ${
            errors.email ? "border-danger" : "border-border-strong"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-[13px] font-medium text-danger">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold uppercase tracking-[0.04em] text-text-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          disabled={status === "sending"}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent disabled:opacity-60 ${
            errors.message ? "border-danger" : "border-border-strong"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[13px] font-medium text-danger">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" className="self-start" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p className="text-[13px] text-text-3">
        Messages are emailed to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent-strong underline">
          {CONTACT_EMAIL}
        </a>
        . We use your email only to reply.
      </p>
    </form>
  );
}
