"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {
  source?: string;
};

export function TourForm({ source = "website" }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          preferredPlan: data.get("preferredPlan"),
          message: data.get("message"),
          source,
          website: data.get("website"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please call us.");
      }

      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send. Please call us.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <div>
        <p className="section-label">Visit</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Schedule a tour</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Tell us what you need. We will follow up by phone or email.
        </p>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Full name
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input name="email" type="email" required autoComplete="email" className="field" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className="field" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Preferred home
          <select name="preferredPlan" className="field" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="1-bedroom">1 Bedroom</option>
            <option value="2-bedroom">2 Bedroom</option>
            <option value="4-bedroom">4 Bedroom</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          rows={4}
          className="field min-h-[7rem] resize-y"
          placeholder="Move-in timing, questions about floor plans…"
        />
      </label>

      {status === "error" && (
        <p
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a tour"}
      </button>
    </form>
  );
}
