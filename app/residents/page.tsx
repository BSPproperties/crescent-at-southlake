import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { contact, siteConfig } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Current Residents",
  description:
    "Resources for Crescent at Southlake residents in Lake Charles. Rent portal link will appear here once available.",
  path: "/residents",
});

export default function ResidentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Residents", path: "/residents" },
        ])}
      />
      <PageHero
        eyebrow="Residents"
        title="Already home"
        subtitle="Links and contacts for people who live at Crescent at Southlake."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="card p-8">
          <h2 className="font-serif text-3xl text-ink">Resident portal</h2>
          {contact.residentPortalUrl ? (
            <p className="mt-4 text-ink-muted">
              Pay rent and submit requests through the{" "}
              <a
                href={contact.residentPortalUrl}
                className="font-semibold text-lagoon"
                rel="noopener noreferrer"
                target="_blank"
              >
                resident portal
              </a>
              .
            </p>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Ask the on-site office for the current payment and maintenance portal, or call{" "}
              <a href={`tel:${contact.phoneTel}`} className="font-semibold text-lagoon">
                {contact.phoneDisplay}
              </a>
              .
            </p>
          )}

          <h2 className="mt-10 font-serif text-3xl text-ink">Need help?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            For emergencies after hours, follow the instructions posted by management. For general
            questions,{" "}
            <Link href="/contact" className="font-semibold text-lagoon">
              contact the office
            </Link>{" "}
            or email{" "}
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
