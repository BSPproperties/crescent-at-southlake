import type { Metadata } from "next";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { floorPlans } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Floor Plans & Pricing",
  description:
    "Browse 1, 2, and 4 bedroom floor plans at Crescent at Southlake in Lake Charles, LA. Homes with washers, dryers, and outdoor space.",
  path: "/floor-plans",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Floor Plans", path: "/floor-plans" },
        ])}
      />
      <PageHero
        eyebrow="Homes"
        title="Floor plans"
        subtitle="Choose a home that fits — from 690 to over 1,200 square feet."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {floorPlans.map((plan) => (
            <FloorPlanCard key={plan.slug} plan={plan} />
          ))}
        </div>
      </section>
    </>
  );
}
