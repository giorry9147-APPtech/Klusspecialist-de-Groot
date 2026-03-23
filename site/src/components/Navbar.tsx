"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Wie zijn wij", href: "/wie-zijn-wij" },
  { label: "Wat doen wij", href: "/wat-doen-wij" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Recensies", href: "/recensies" },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contactformulier", href: "/contact/contactformulier" },
      { label: "Terugbelafspraak", href: "/contact/terugbelafspraak" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const logoUrl = "/images/logo.png";

  return (
    <header className="sticky top-0 z-50 border-b-4 border-accent bg-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <img
            src={logoUrl}
            alt="Klus Specialist de Groot logo"
            width={197}
            height={63}
            className="h-11 w-auto rounded bg-white/95 p-1 shadow-sm"
          />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/75 xl:block">
            Voor al uw klussen
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-accent hover:text-navy">
                  {link.label}
                  <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm font-medium text-navy hover:bg-gray-50"
                    >
                      {link.label} (overzicht)
                    </Link>
                    <div className="my-1 border-t border-gray-100" />
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-accent hover:text-navy"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0642829417"
            className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-navy shadow transition hover:bg-accentHover sm:flex"
          >
            <Phone className="h-4 w-4" />
            06-42829417
          </a>
          <button
            aria-label="Menu openen"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navyDark px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className="ml-4 block rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                >
                  - {child.label}
                </Link>
              ))}
            </div>
          ))}
          <a
            href="tel:0642829417"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            Bel: 06-42829417
          </a>
        </div>
      )}
    </header>
  );
}
