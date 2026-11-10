import Link from "next/link";
import { PropertyImage } from "@/components/PropertyImage";
import { FloorPlan, formatCurrency, kitchenPhoto, livingPhoto } from "@/lib/property";

const planImages: Record<string, { src: string; alt: string }> = {
  "1-bedroom": {
    src: livingPhoto.src,
    alt: "Bright living area at Crescent at Southlake",
  },
  "2-bedroom": {
    src: kitchenPhoto.src,
    alt: "Apartment kitchen at Crescent at Southlake",
  },
  "4-bedroom": {
    src: "/images/property/photo-11.jpg",
    alt: "Bedroom with ensuite bath at Crescent at Southlake",
  },
};

export function FloorPlanCard({ plan }: { plan: FloorPlan }) {
  const image = planImages[plan.slug] ?? livingPhoto;

  return (
    <article className="card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,36,40,0.08)]">
      <div className="relative min-h-[11rem] overflow-hidden">
        <PropertyImage
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-3xl text-ink">{plan.name}</h3>
        <p className="mt-2 text-sm text-ink-muted">
          {plan.beds} bed · {plan.baths} bath · {plan.sqFt.toLocaleString()} sq ft
        </p>
        <p className="mt-5 text-xl font-semibold text-lagoon">
          From {formatCurrency(plan.rentFrom)}
          <span className="ml-1 text-sm font-normal text-ink-muted">/mo</span>
        </p>
        <ul className="mt-5 flex-1 space-y-1.5 text-sm text-ink-muted">
          {plan.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Link href={`/floor-plans/${plan.slug}`} className="btn-secondary mt-6 w-full">
          View details
        </Link>
      </div>
    </article>
  );
}
