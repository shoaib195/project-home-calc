"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { CONTACT_EMAIL } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function validate() {
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Enter your name so we know who to reply to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (message.trim().length < 10) next.message = "Add a bit more detail — at least a sentence or two.";
    return next;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Project Home Calc — message from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <Alert tone="success" title="Your email app should be open">
        If nothing opened, write to us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent-strong underline">
          {CONTACT_EMAIL}
        </a>
        . We read every message about calculator errors, missing tools, and privacy requests.
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
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
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(e) => setName(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent ${
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
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent ${
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
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2.5 text-[16px] text-text outline-none focus:border-accent ${
            errors.message ? "border-danger" : "border-border-strong"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[13px] font-medium text-danger">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" className="self-start">
        Open email to send
      </Button>
      <p className="text-[13px] text-text-3">
        This opens your email app addressed to {CONTACT_EMAIL}. We do not collect the form contents on our servers.
      </p>
    </form>
  );
}
