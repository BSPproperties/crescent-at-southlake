import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/lib/property";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description: "Your tour request was received.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank you"
        subtitle="Your message is on its way to the leasing team. We will follow up soon."
      />
      <section className="mx-auto max-w-xl px-4 py-12 text-center sm:px-6">
        <p className="text-ink-muted">
          If you need a faster answer, call{" "}
          <a href={`tel:${contact.phoneTel}`} className="font-semibold">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </section>
    </>
  );
}
