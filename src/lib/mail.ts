import nodemailer from "nodemailer";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function smtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_TO,
  );
}

export function contactInbox(): string {
  return process.env.SMTP_TO?.trim() || process.env.CONTACT_EMAIL?.trim() || "shoaib.octachat@gmail.com";
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!smtpConfigured()) {
    throw new Error("SMTP is not configured");
  }

  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const from = process.env.SMTP_FROM?.trim() || user;
  const to = contactInbox();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const { name, email, message } = payload;

  await transporter.sendMail({
    from: `"Project Home Calc" <${from}>`,
    to,
    replyTo: email,
    subject: `Project Home Calc — message from ${name}`,
    text: [
      message,
      "",
      "—",
      name,
      email,
      "",
      `Sent from ${process.env.NEXT_PUBLIC_SITE_URL || "Project Home Calc"} contact form`,
    ].join("\n"),
    html: `
      <p style="white-space:pre-wrap;font-family:sans-serif;line-height:1.5">${escapeHtml(message)}</p>
      <hr />
      <p style="font-family:sans-serif;font-size:14px;color:#555">
        <strong>${escapeHtml(name)}</strong><br />
        <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
      </p>
      <p style="font-family:sans-serif;font-size:12px;color:#888">Sent from Project Home Calc contact form</p>
    `,
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
