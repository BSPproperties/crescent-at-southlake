import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PropertyImage } from "@/components/PropertyImage";
import { galleryPhotos } from "@/lib/property";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Photo Gallery",
  description:
    "Photos of Crescent at Southlake in Lake Charles — pool, exteriors, kitchens, living rooms, and more at 5001 Pecan Acres St.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="See the community"
        subtitle="Real photos of the homes, pool, and grounds at Crescent at Southlake."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((shot) => (
            <li key={shot.id} className="overflow-hidden rounded-[1.5rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <PropertyImage
                  src={shot.src}
                  alt={shot.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="meta-label mt-3 px-1">{shot.label}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
