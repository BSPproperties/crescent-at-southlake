import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { address, neighborhood } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Apartments in South Lake Charles, LA",
  description:
    "Live at Crescent at Southlake in South Lake Charles near Prien Lake Mall, McNeese State University, I-210, and local schools.",
  path: "/neighborhood",
});

export default function NeighborhoodPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Neighborhood", path: "/neighborhood" },
        ])}
      />
      <PageHero
        eyebrow={address.subdivision}
        title="South Lake Charles"
        subtitle={`A residential pocket at ${address.full}, with highways, shopping, and schools close by.`}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink">Nearby</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {neighborhood.highlights.map((item) => (
            <li key={item.name} className="card flex gap-5 p-6">
              <div>
                <p className="stat-number text-4xl">{item.minutes}</p>
                <p className="meta-label mt-1">min</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-ink">{item.name}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-serif text-3xl text-ink">Schools</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Schools commonly associated with this area. Verify zoning for your household.
        </p>
        <ul className="mt-6 divide-y divide-line overflow-hidden rounded-[1.25rem] border border-border bg-white/60">
          {neighborhood.schools.map((school) => (
            <li
              key={school.name}
              className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4"
            >
              <span className="font-medium text-ink">{school.name}</span>
              <span className="text-sm text-ink-muted">
                {school.type} · Grades {school.grades}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-border">
          <iframe
            title="Map of Crescent at Southlake neighborhood"
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address.full)}&z=14&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
