import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PropertyImage } from "@/components/PropertyImage";
import { TourForm } from "@/components/TourForm";
import {
  address,
  floorPlans,
  formatCurrency,
  getFloorPlan,
  kitchenPhoto,
  livingPhoto,
} from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const detailImages: Record<string, { src: string; alt: string }> = {
  "1-bedroom": livingPhoto,
  "2-bedroom": kitchenPhoto,
  "4-bedroom": {
    src: "/images/property/photo-11.jpg",
    alt: "Bedroom with ensuite bathroom and walk-in closet",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return floorPlans.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plan = getFloorPlan(slug);
  if (!plan) return {};

  const titleMap: Record<string, string> = {
    "1-bedroom": "1 Bedroom Apartments in Lake Charles",
    "2-bedroom": "2 Bedroom Apartments in Lake Charles",
    "4-bedroom": "4 Bedroom Apartments in Lake Charles",
  };

  return createMetadata({
    title: titleMap[slug] ?? `${plan.name} Apartments in Lake Charles`,
    description: `${plan.name} apartments at Crescent at Southlake — ${plan.beds} bed, ${plan.baths} bath, ${plan.sqFt} sq ft from ${formatCurrency(plan.rentFrom)}/mo at ${address.full}.`,
    path: `/floor-plans/${slug}`,
  });
}

export default async function FloorPlanDetailPage({ params }: Props) {
  const { slug } = await params;
  const plan = getFloorPlan(slug);
  if (!plan) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Floor Plans", path: "/floor-plans" },
          { name: plan.name, path: `/floor-plans/${plan.slug}` },
        ])}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm">
          <Link
            href="/floor-plans"
            className="text-sm font-semibold text-ink-muted no-underline hover:text-ink"
          >
            ← All floor plans
          </Link>
        </p>
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem]">
              <PropertyImage
                src={(detailImages[plan.slug] ?? livingPhoto).src}
                alt={(detailImages[plan.slug] ?? livingPhoto).alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h1 className="display-title mt-8 text-5xl text-ink">{plan.name}</h1>
            <p className="mt-3 text-lg text-ink-muted">
              {plan.beds} bedroom · {plan.baths} bathroom · {plan.sqFt.toLocaleString()} sq ft
            </p>
            <p className="mt-5 text-3xl font-semibold text-lagoon">
              From {formatCurrency(plan.rentFrom)}
              <span className="text-base font-normal text-ink-muted"> / month</span>
            </p>
            <h2 className="mt-10 font-serif text-3xl text-ink">Inside your home</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-border bg-white/60 px-4 py-3 text-sm text-ink"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <TourForm source={`floor-plan-${plan.slug}`} />
        </div>
      </section>
    </>
  );
}
