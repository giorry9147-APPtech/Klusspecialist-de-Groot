import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const logoUrl =
    "https://www.klusdegroot.nl/.cm4all/iproc.php/klusspecialistdegroot-logo.png/scale_197_63/klusspecialistdegroot-logo.png";

  return (
    <footer className="bg-accent text-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Klus Specialist de Groot logo"
                width={197}
                height={63}
                className="h-12 w-auto rounded bg-white p-1 shadow"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy/80">
              Uw betrouwbare allround vakman voor kleine en grote klussen in
              Didam, Dieren, Arnhem en omgeving. Actief sinds 2004.
            </p>
            <div className="mt-5 space-y-2 text-sm text-navy/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-navy" />
                <span>Schuttersstraat 34, 6941EA Didam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-navy" />
                <a href="tel:0642829417" className="hover:text-black transition">
                  06-42829417
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-navy" />
                <a href="mailto:info@klusdegroot.nl" className="hover:text-black transition">
                  info@klusdegroot.nl
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy/60">
              Navigatie
            </h3>
            <ul className="space-y-2 text-sm text-navy/80">
              {[
                { label: "Home", href: "/" },
                { label: "Wie zijn wij", href: "/wie-zijn-wij" },
                { label: "Wat doen wij", href: "/wat-doen-wij" },
                { label: "Werkwijze", href: "/werkwijze" },
                { label: "Recensies", href: "/recensies" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-black transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy/60">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-navy/80">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Contactformulier", href: "/contact/contactformulier" },
                { label: "Terugbelafspraak", href: "/contact/terugbelafspraak" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-black transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy/60">
                Werkgebied
              </p>
              <p className="text-sm text-navy/80">
                Didam · Arnhem · Dieren · Brummen · Eerbeek · Doesburg
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-navy/20 pt-6 text-center text-xs text-navy/70">
          © {new Date().getFullYear()} KLUSdeGroot - Alle rechten voorbehouden
        </div>
      </div>
    </footer>
  );
}
