import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { RatesBar } from "@/components/RatesBar";
import { apartmentComplexJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/property";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Crescent at Southlake Apartments | 5001 Pecan Acres, Lake Charles, LA",
    template: "%s | Crescent at Southlake",
  },
  description:
    "Crescent at Southlake — 1, 2, and 4 bedroom apartments at 5001 Pecan Acres St in South Lake Charles, LA. Pool, courtyard, and easy access to I-210.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Crescent at Southlake Apartments | Lake Charles, LA",
    description:
      "Garden-style apartment homes in South Lake Charles. Spacious floor plans, community pool, and a quiet residential setting.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/property/photo-01.jpg",
        width: 1600,
        height: 1067,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescent at Southlake Apartments | Lake Charles, LA",
    description:
      "1, 2, and 4 bedroom apartments at 5001 Pecan Acres St, South Lake Charles.",
    images: ["/images/property/photo-01.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={apartmentComplexJsonLd()} />
        <RatesBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
