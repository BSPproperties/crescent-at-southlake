import Link from "next/link";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { PropertyImage } from "@/components/PropertyImage";
import { TourForm } from "@/components/TourForm";
import {
  address,
  amenities,
  community,
  contact,
  floorPlans,
  formatCurrency,
  galleryPhotos,
  heroPhoto,
  neighborhood,
  siteConfig,
} from "@/lib/property";

const paths = [
  {
    href: "/floor-plans",
    title: "See floor plans",
    detail: "1, 2, and 4 bedroom homes with laundry and outdoor space",
  },
  {
    href: "/amenities",
    title: "Explore amenities",
    detail: "Pool, sundeck, courtyard, grill area, and on-site team",
  },
  {
    href: "/neighborhood",
    title: "Check the location",
    detail: "South Lake Charles near malls, schools, and highways",
  },
  {
    href: "/contact",
    title: "Schedule a tour",
    detail: "Walk the community and talk with leasing",
  },
] as const;

export default function HomePage() {
  const lowest = Math.min(...floorPlans.map((p) => p.rentFrom));

  return (
    <>
      {/* Cinematic hero with real property photography */}
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <PropertyImage
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            priority
            sizes="100vw"
            className="scale-[1.02]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,36,40,0.35) 0%, rgba(11,36,40,0.55) 45%, rgba(11,36,40,0.88) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 lg:pb-20">
          <p className="section-label section-label-light reveal">
            {siteConfig.name} · {address.neighborhood}
          </p>
          <h1 className="display-title reveal-delay-1 mt-5 max-w-3xl text-[clamp(2.6rem,7vw,4.75rem)] text-white">
            {siteConfig.heroHeadline}
          </h1>
          <p className="reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {siteConfig.heroSupport}
          </p>
          <div className="reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Schedule a tour
            </Link>
            <Link
              href="/floor-plans"
              className="btn-secondary !border-white/40 !text-white hover:!border-white hover:!bg-white/10"
            >
              View floor plans
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/60">
            From {formatCurrency(lowest)}/mo · {address.full}
          </p>
        </div>
      </section>

      {/* Task paths — Monmouth Row / Sutton: clear leasing routes */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group bg-mist px-6 py-8 no-underline transition hover:bg-white"
            >
              <p className="font-serif text-2xl text-ink group-hover:text-lagoon">{path.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{path.detail}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-lagoon">
                Continue →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About + selective amenities */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="section-label">About</p>
            <h2 className="display-title mt-4 text-4xl text-ink sm:text-5xl">
              A quieter home base
              <span className="block">in South Lake Charles</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {community.unitCount} garden-style homes built in {community.yearBuilt}. Full
              kitchens. Washers and dryers. Balconies and patios. A pool and open lawns for the
              days you want to stay close to home.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <p className="stat-number">{community.unitCount}</p>
                <p className="meta-label mt-2">Homes</p>
              </div>
              <div>
                <p className="stat-number">3</p>
                <p className="meta-label mt-2">Plans</p>
              </div>
              <div>
                <p className="stat-number text-[2.2rem] sm:text-[2.8rem]">Pool</p>
                <p className="meta-label mt-2">On site</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <PropertyImage
              src="/images/property/photo-03.jpg"
              alt="Aerial view of Crescent at Southlake"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.community.slice(0, 3).map((item) => (
            <li key={item.name} className="amenity-tile card p-6">
              <p className="font-serif text-2xl text-ink">{item.name}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
        <Link href="/amenities" className="text-link mt-8">
          All amenities →
        </Link>
      </section>

      {/* Marquee — Bluprint/Brindle cue without clutter */}
      <div className="overflow-hidden border-y border-line bg-white/50 py-4" aria-hidden="true">
        <div className="marquee-track flex gap-10 whitespace-nowrap text-sm font-medium tracking-wide text-ink/40">
          {[...amenities.community, ...amenities.community].map((item, i) => (
            <span key={`${item.name}-${i}`}>{item.name}</span>
          ))}
        </div>
      </div>

      {/* Floor plans */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">Homes</p>
          <h2 className="display-title mt-4 text-4xl text-ink sm:text-5xl">
            Open layouts that
            <span className="block">fit real life</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            Starting from {formatCurrency(lowest)}/month. Confirm current pricing on your tour.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {floorPlans.map((plan) => (
            <FloorPlanCard key={plan.slug} plan={plan} />
          ))}
        </div>
        <Link href="/floor-plans" className="btn-secondary mt-10 inline-flex">
          Compare floor plans
        </Link>
      </section>

      {/* Gallery strip — Collection “picture yourself here” */}
      <section className="border-y border-line bg-ink py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label section-label-light">Gallery</p>
              <h2 className="display-title mt-4 text-4xl sm:text-5xl">
                Picture yourself
                <span className="block">at Crescent</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-semibold text-sand-soft no-underline hover:text-white"
            >
              View gallery →
            </Link>
          </div>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-6">
          {galleryPhotos.slice(0, 6).map((shot) => (
            <div
              key={shot.id}
              className="relative h-56 w-[78vw] shrink-0 overflow-hidden rounded-[1.4rem] sm:h-64 sm:w-[42vw] lg:w-[28%]"
            >
              <PropertyImage src={shot.src} alt={shot.alt} sizes="40vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-10">
                <span className="text-sm font-medium text-white">{shot.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood lifestyle */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="section-label">Neighborhood</p>
        <h2 className="display-title mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
          Live in South Lake Charles.
          <span className="block">Get to everything.</span>
        </h2>
        <p className="mt-5 max-w-xl text-ink-muted">
          Drive from your front door to shopping, campus, parks, and the interstate — then come
          home to a quieter street.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhood.highlights.map((item) => (
            <li key={item.name} className="border-t border-line pt-5">
              <p className="stat-number">{item.minutes}</p>
              <p className="meta-label mt-1">min</p>
              <p className="mt-4 font-serif text-2xl text-ink">{item.name}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <Link href="/neighborhood" className="text-link mt-10">
          Explore the neighborhood →
        </Link>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="section-label">Visit</p>
            <h2 className="display-title mt-4 text-4xl text-ink sm:text-5xl">
              Want to know
              <span className="block">more?</span>
            </h2>
            <p className="mt-5 max-w-md text-ink-muted">
              Tell us what you’re looking for. We’ll help you schedule a tour.
            </p>
            <p className="mt-8 font-medium text-ink">{address.full}</p>
            <a
              href={`tel:${contact.phoneTel}`}
              className="mt-2 inline-block text-2xl font-semibold text-lagoon no-underline"
            >
              {contact.phoneDisplay}
            </a>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border">
              <iframe
                title="Map of Crescent at Southlake"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address.full)}&z=15&output=embed`}
              />
            </div>
          </div>
          <TourForm source="home" />
        </div>
      </section>
    </>
  );
}
