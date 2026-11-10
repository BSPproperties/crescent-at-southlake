import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  community,
  contact,
  formatCurrency,
  petPolicy,
} from "@/lib/property";
import { breadcrumbJsonLd, createMetadata, leasingFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Leasing",
  description:
    "How to lease at Crescent at Southlake in Lake Charles. Floor plans, lease terms, application details, and how to schedule a tour.",
  path: "/leasing",
});

export default function LeasingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Leasing", path: "/leasing" },
          ]),
          leasingFaqJsonLd(),
        ]}
      />
      <PageHero
        eyebrow="Leasing"
        title="Ready when you are"
        subtitle="Browse a floor plan, schedule a tour, and apply when you find the right fit."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card p-7">
              <h2 className="font-serif text-3xl text-ink">What to expect</h2>
              <ul className="mt-5 space-y-3 text-ink-muted">
                <li>· Standard lease term: {community.leaseTermMonths} months</li>
                {community.applicationFeeConfirmed && (
                  <li>· Application fee: {formatCurrency(community.applicationFee)} per applicant</li>
                )}
                <li>· 1, 2, and 4 bedroom homes available to tour</li>
                <li>· Confirm current pricing and availability with the office</li>
              </ul>
            </div>
            <div className="card p-7">
              <h2 className="font-serif text-3xl text-ink">Pets</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{petPolicy.summary}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-7">
              <h2 className="font-serif text-3xl text-ink">Fair housing</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                We provide equal housing opportunity. We do not discriminate based on race, color,
                religion, sex, handicap, familial status, or national origin.
              </p>
            </div>
            <div className="card p-7">
              <h2 className="font-serif text-3xl text-ink">Next step</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Call{" "}
                <a href={`tel:${contact.phoneTel}`} className="font-semibold text-lagoon">
                  {contact.phoneDisplay}
                </a>{" "}
                or{" "}
                <Link href="/contact" className="font-semibold text-lagoon">
                  request a tour
                </Link>
                .
              </p>
              <Link href="/contact" className="btn-primary mt-6 inline-flex">
                Contact leasing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
