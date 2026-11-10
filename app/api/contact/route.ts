import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/property";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  preferredPlan?: string;
  message?: string;
  source?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; humans leave it empty
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const preferredPlan = String(body.preferredPlan ?? "").trim();
  const message = String(body.message ?? "").trim();
  const source = String(body.source ?? "website").trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const subject = `Tour request — ${name} — Crescent at Southlake`;
  const text = [
    `New tour / contact request from the Crescent at Southlake website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred plan: ${preferredPlan || "Not specified"}`,
    `Source: ${source}`,
    ``,
    `Message:`,
    message || "(none)",
  ].join("\n");

  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Crescent at Southlake <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Unable to send right now. Please call the leasing office." },
        { status: 502 },
      );
    }
  } else {
    // Dev / pre-launch: log so the form still works without email credentials
    console.log("[contact lead]", { to, subject, text });
  }

  return NextResponse.json({ ok: true });
}
