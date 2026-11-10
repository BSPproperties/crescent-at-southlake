import type { MetadataRoute } from "next";
import { floorPlans, siteConfig } from "@/lib/property";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPaths = [
    "",
    "/floor-plans",
    "/amenities",
    "/neighborhood",
    "/leasing",
    "/gallery",
    "/contact",
    "/residents",
    "/privacy",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...floorPlans.map((plan) => ({
      url: `${base}/floor-plans/${plan.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
