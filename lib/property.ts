/**
 * Single source of truth for Crescent at Southlake (formerly La Maison Apartments).
 * Fields marked pending: confirm before treating published copy as final.
 */

export const siteConfig = {
  name: "Crescent at Southlake",
  formerName: "La Maison Apartments",
  tagline: "Apartment living in South Lake Charles",
  shortPitch:
    "Live close to what you need — pool days, courtyard evenings, and easy drives to Prien Lake Mall and I-210.",
  heroHeadline: "Live where everyday feels lighter",
  heroSupport:
    "Crescent at Southlake is a garden community of 1, 2, and 4 bedroom homes in South Lake Charles — room to settle in, outdoors to use, and a leasing team ready when you are.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.crescentatsouthlake.com",
  email: process.env.CONTACT_EMAIL ?? "leasing@crescentatsouthlake.com",
} as const;

export const address = {
  street: "5001 Pecan Acres St",
  city: "Lake Charles",
  state: "LA",
  zip: "70605",
  neighborhood: "South Lake Charles",
  subdivision: "Providence",
  full: "5001 Pecan Acres St, Lake Charles, LA 70605",
  geo: {
    latitude: 30.1685,
    longitude: -93.2165,
  },
} as const;

/**
 * PENDING: sources disagree — (337) 570-2796 vs (337) 479-1313.
 */
export const contact = {
  phoneDisplay: "(337) 570-2796",
  phoneTel: "+13375702796",
  phoneConfirmed: false,
  officeHours: [
    { day: "Monday", hours: "By appointment" },
    { day: "Tuesday", hours: "By appointment" },
    { day: "Wednesday", hours: "By appointment" },
    { day: "Thursday", hours: "By appointment" },
    { day: "Friday", hours: "By appointment" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  officeHoursConfirmed: false,
  residentPortalUrl: null as string | null,
} as const;

export const community = {
  unitCount: 78,
  stories: 2,
  yearBuilt: 2004,
  leaseTermMonths: 12,
  applicationFee: 40,
  applicationFeeConfirmed: true,
  /** PENDING: confirm before marketing */
  utilitiesIncluded: ["Gas", "Water", "Trash"] as const,
  utilitiesConfirmed: false,
} as const;

export type FloorPlan = {
  slug: string;
  name: string;
  beds: number;
  baths: number;
  sqFt: number;
  rentFrom: number;
  rentConfirmed: false;
  features: string[];
};

export const floorPlans: FloorPlan[] = [
  {
    slug: "1-bedroom",
    name: "1 Bedroom",
    beds: 1,
    baths: 1,
    sqFt: 690,
    rentFrom: 725,
    rentConfirmed: false,
    features: [
      "Washer and dryer",
      "Full kitchen with dishwasher",
      "Refrigerator with ice maker",
      "Central air and heating",
      "Ceiling fans",
      "Walk-in closets",
      "Balcony, patio, or porch",
      "Cable ready",
    ],
  },
  {
    slug: "2-bedroom",
    name: "2 Bedroom",
    beds: 2,
    baths: 2,
    sqFt: 936,
    rentFrom: 900,
    rentConfirmed: false,
    features: [
      "Washer and dryer",
      "Full kitchen with dishwasher",
      "Refrigerator with ice maker",
      "Central air and heating",
      "Ceiling fans",
      "Walk-in closets",
      "Balcony, patio, or porch",
      "Cable ready",
    ],
  },
  {
    slug: "4-bedroom",
    name: "4 Bedroom",
    beds: 4,
    baths: 2,
    sqFt: 1263,
    // Some listings show ~1,296 sq ft for the 4-bedroom
    rentFrom: 1021,
    rentConfirmed: false,
    features: [
      "Washer and dryer",
      "Full kitchen with dishwasher",
      "Refrigerator with ice maker",
      "Central air and heating",
      "Ceiling fans",
      "Walk-in closets",
      "Balcony, patio, or porch",
      "Cable ready",
    ],
  },
];

export const amenities = {
  community: [
    { name: "Swimming pool", description: "Fenced pool beside the clubhouse" },
    { name: "Sundeck", description: "Open deck around the water" },
    { name: "Courtyard lawns", description: "Open green space between buildings" },
    { name: "Grill & picnic", description: "Outdoor cooking for weekends and gatherings" },
    { name: "Parking & carports", description: "Surface parking with covered carports on site" },
    { name: "On-site management", description: "A team that knows the community" },
    { name: "On-site maintenance", description: "Help when you need it" },
  ],
  apartment: [
    "Washer and dryer",
    "Dishwasher",
    "Garbage disposal",
    "Microwave",
    "Frost-free refrigerator with ice maker",
    "Ceiling fans",
    "Central air conditioning and heating",
    "Walk-in closets",
    "Balcony, patio, or porch",
    "High-speed internet available",
    "Cable ready",
  ],
} as const;

/** Public listings describe the community as pet friendly; confirm fees and breed rules with leasing. */
export const petPolicy = {
  status: "friendly" as const,
  summary:
    "Pets are welcome — cats and dogs. Confirm current fees, deposits, and any breed or weight limits with the leasing office.",
};

export const neighborhood = {
  highlights: [
    {
      name: "Prien Lake Mall",
      detail: "Shopping and dining about 4 miles away",
      minutes: 8,
    },
    {
      name: "I-210 & I-10",
      detail: "Quick highway access for work and travel",
      minutes: 5,
    },
    {
      name: "McNeese State University",
      detail: "About 2 miles from campus",
      minutes: 5,
    },
    {
      name: "Prien Lake Park",
      detail: "Parks and open water nearby",
      minutes: 8,
    },
  ],
  schools: [
    { name: "A. A. Nelson Elementary School", grades: "PK–5", type: "Public" },
    { name: "S. J. Welsh Middle School", grades: "6–8", type: "Public" },
    { name: "Alfred M. Barbe High School", grades: "9–12", type: "Public" },
  ],
} as const;

/** Photos sourced from the public Cushman & Wakefield listing for this property. */
export const galleryPhotos = [
  {
    id: "pool-clubhouse",
    src: "/images/property/photo-01.jpg",
    label: "Pool & clubhouse",
    alt: "Community pool and clubhouse at Crescent at Southlake",
  },
  {
    id: "building-exterior",
    src: "/images/property/photo-02.jpg",
    label: "Building exterior",
    alt: "Two-story apartment building exterior with lawn",
  },
  {
    id: "aerial",
    src: "/images/property/photo-03.jpg",
    label: "Community aerial",
    alt: "Aerial view of the garden-style apartment community",
  },
  {
    id: "leasing-entry",
    src: "/images/property/photo-04.jpg",
    label: "Community entry",
    alt: "Leasing office and mailbox area at the community entrance",
  },
  {
    id: "pool-deck",
    src: "/images/property/photo-05.jpg",
    label: "Pool deck",
    alt: "Fenced swimming pool beside the clubhouse",
  },
  {
    id: "leasing-lounge",
    src: "/images/property/photo-06.jpg",
    label: "Leasing lounge",
    alt: "Interior lounge in the leasing office",
  },
  {
    id: "kitchen-a",
    src: "/images/property/photo-07.jpg",
    label: "Kitchen",
    alt: "Apartment kitchen with full appliances",
  },
  {
    id: "kitchen-b",
    src: "/images/property/photo-08.jpg",
    label: "Kitchen detail",
    alt: "Apartment kitchen with dishwasher and stove",
  },
  {
    id: "dining",
    src: "/images/property/photo-09.jpg",
    label: "Dining area",
    alt: "Open dining area adjacent to the kitchen",
  },
  {
    id: "living",
    src: "/images/property/photo-10.jpg",
    label: "Living room",
    alt: "Bright living room with patio door",
  },
  {
    id: "bedroom",
    src: "/images/property/photo-11.jpg",
    label: "Bedroom",
    alt: "Bedroom with ensuite bathroom and walk-in closet",
  },
  {
    id: "bathroom",
    src: "/images/property/photo-12.jpg",
    label: "Bathroom",
    alt: "Bathroom with vanity, tub, and storage",
  },
] as const;

export const heroPhoto = galleryPhotos[0];
export const aerialPhoto = galleryPhotos[2];
export const livingPhoto = galleryPhotos[9];
export const kitchenPhoto = galleryPhotos[6];

/** @deprecated use galleryPhotos */
export const galleryPlaceholders = galleryPhotos;

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getFloorPlan(slug: string): FloorPlan | undefined {
  return floorPlans.find((p) => p.slug === slug);
}

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/floor-plans", label: "Homes" },
  { href: "/amenities", label: "Amenities" },
  { href: "/neighborhood", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/leasing", label: "Leasing" },
  { href: "/contact", label: "Contact" },
] as const;
