import type { Metadata } from "next";
import {
  address,
  amenities,
  community,
  contact,
  floorPlans,
  siteConfig,
} from "./property";

const defaultOgImage = `${siteConfig.url}/og-default.svg`;

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function apartmentComplexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: siteConfig.name,
    alternateName: siteConfig.formerName,
    description: `${siteConfig.name} offers ${community.unitCount} apartment homes at ${address.full}.`,
    url: siteConfig.url,
    telephone: contact.phoneTel,
    email: siteConfig.email,
    numberOfAccommodationUnits: community.unitCount,
    yearBuilt: community.yearBuilt,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: address.geo.latitude,
      longitude: address.geo.longitude,
    },
    amenityFeature: [
      ...amenities.community.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a.name,
        value: true,
      })),
      ...amenities.apartment.slice(0, 6).map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    ],
    containsPlace: floorPlans.map((plan) => ({
      "@type": "Apartment",
      name: plan.name,
      numberOfRooms: plan.beds,
      numberOfBathroomsTotal: plan.baths,
      floorSize: {
        "@type": "QuantitativeValue",
        value: plan.sqFt,
        unitCode: "FTK",
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function leasingFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What floor plans are available at Crescent at Southlake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Crescent at Southlake offers 1, 2, and 4 bedroom apartment homes with full kitchens, washers and dryers, and outdoor space.",
        },
      },
      {
        "@type": "Question",
        name: "What is the lease term?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${community.leaseTermMonths}-month leases are standard. Confirm availability and pricing with the leasing office.`,
        },
      },
      {
        "@type": "Question",
        name: "Where is Crescent at Southlake located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Crescent at Southlake is at ${address.full}, in South Lake Charles.`,
        },
      },
    ],
  };
}
