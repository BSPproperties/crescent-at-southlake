import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { TourForm } from "@/components/TourForm";
import { address, contact, siteConfig } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact & Tour",
  description: `Contact Crescent at Southlake at ${address.full}. Call ${contact.phoneDisplay} or request a tour.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Reach the leasing office to ask about availability or schedule a tour."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-ink">{siteConfig.name}</h2>
          <address className="mt-6 not-italic text-ink">
            <p className="font-medium">{address.street}</p>
            <p>
              {address.city}, {address.state} {address.zip}
            </p>
          </address>
          <p className="mt-6">
            <span className="meta-label">Phone</span>
            <br />
            <a
              href={`tel:${contact.phoneTel}`}
              className="text-2xl font-semibold text-lagoon no-underline"
            >
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-5">
            <span className="meta-label">Email</span>
            <br />
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink no-underline">
              {siteConfig.email}
            </a>
          </p>

          <h3 className="mt-10 font-serif text-2xl text-ink">Office hours</h3>
          <ul className="mt-4 divide-y divide-line overflow-hidden rounded-[1.25rem] border border-border bg-white/60 text-sm">
            {contact.officeHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 px-4 py-3">
                <span className="font-medium text-ink">{row.day}</span>
                <span className="text-ink-muted">{row.hours}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border">
            <iframe
              title="Directions to Crescent at Southlake"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address.full)}&z=15&output=embed`}
            />
          </div>
        </div>
        <TourForm source="contact" />
      </section>
    </>
  );
}
