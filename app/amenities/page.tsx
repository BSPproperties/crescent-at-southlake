import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PropertyImage } from "@/components/PropertyImage";
import { amenities, community, galleryPhotos } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Amenities",
  description:
    "Pool, sundeck, courtyard, grill area, on-site management, and apartment features at Crescent at Southlake in Lake Charles, LA.",
  path: "/amenities",
});

export default function AmenitiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Amenities", path: "/amenities" },
        ])}
      />
      <PageHero
        eyebrow="Amenities"
        title="Everyday comforts"
        subtitle="Spaces and finishes that make home feel easy — outside and in."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-[1.75rem]">
          <PropertyImage
            src={galleryPhotos[4].src}
            alt={galleryPhotos[4].alt}
            sizes="100vw"
            priority
          />
        </div>
        <h2 className="font-serif text-3xl text-ink">Community</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.community.map((item) => (
            <li key={item.name} className="amenity-tile card p-6">
              <p className="font-serif text-2xl text-ink">{item.name}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-serif text-3xl text-ink">Inside your home</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {amenities.apartment.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-border bg-white/60 px-5 py-4 text-sm text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        {!community.utilitiesConfirmed && (
          <p className="mt-10 text-sm text-ink-muted">
            Ask leasing whether gas, water, and trash are included with your lease.
          </p>
        )}
      </section>
    </>
  );
}
