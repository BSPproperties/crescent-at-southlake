import Link from "next/link";
import { address, contact, navLinks, siteConfig } from "@/lib/property";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-tight">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            A garden community in South Lake Charles — spacious homes, a pool, and everyday
            convenience near Prien Lake Mall and the interstate.
          </p>
          <p className="mt-6 text-sm text-white/80">
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
          </p>
          <p className="mt-3">
            <a
              href={`tel:${contact.phoneTel}`}
              className="text-lg font-semibold text-white no-underline hover:text-sand-soft"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/50">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 no-underline transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/residents"
                className="text-sm text-white/80 no-underline transition hover:text-white"
              >
                Residents
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm text-white/80 no-underline transition hover:text-white"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/50">Equal Housing</p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            We are pledged to the letter and spirit of U.S. policy for equal housing opportunity.
            We encourage and support affirmative advertising and marketing with no barriers based
            on race, color, religion, sex, handicap, familial status, or national origin.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45 sm:px-6">
        © 2026 {siteConfig.name}. {address.full}
      </div>
    </footer>
  );
}
