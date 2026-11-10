import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/property";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description: `How ${siteConfig.name} handles contact form information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        subtitle="A short note about the information you share through this website."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 text-ink-muted sm:px-6">
        <div className="prose space-y-4 text-base leading-relaxed">
          <p>
            When you submit the tour or contact form on {siteConfig.name}, we collect the name,
            email address, phone number, preferred floor plan, and message you provide. We use that
            information only to respond to your inquiry and to follow up about leasing at this
            community.
          </p>
          <p>
            Form submissions are emailed to our leasing inbox (and may be logged in development). We
            do not sell your contact information. Do not include Social Security numbers, bank
            details, or other sensitive financial data in the message field.
          </p>
          <p>
            Questions about this notice can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-lagoon">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
