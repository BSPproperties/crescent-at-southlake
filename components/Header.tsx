"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navLinks, siteConfig } from "@/lib/property";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-mist/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0 no-underline">
          <span className="font-serif text-[1.4rem] font-semibold leading-tight text-ink sm:text-[1.55rem]">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block text-[0.75rem] font-medium text-lagoon">
            Lake Charles, LA
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${contact.phoneTel}`}
            className="hidden text-sm font-medium text-ink/75 no-underline hover:text-ink md:inline"
          >
            {contact.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Schedule a tour
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-3.5 text-sm font-semibold text-ink"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="site-menu"
          className="border-t border-line bg-mist px-4 py-4 sm:px-6"
          aria-label="Site"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink no-underline hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 sm:col-span-2 lg:col-span-3">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Schedule a tour
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
