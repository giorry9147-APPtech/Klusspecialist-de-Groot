import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met KLUSdeGroot via telefoon, e-mail, contactformulier of terugbelafspraak. Actief in Didam, Dieren en omgeving.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Neem contact op voor uw klus of renovatie"
        description="Bel, mail of gebruik een van de contactroutes hieronder. We reageren snel en denken praktisch met u mee."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <Phone className="h-8 w-8 text-accent" />
            <h2 className="mt-5 text-xl font-bold text-navy">Bellen</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Liever direct contact? Bel ons op 06-42829417 of 0313-650400.
            </p>
            <a href="tel:0642829417" className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-accent">
              06-42829417
            </a>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <Mail className="h-8 w-8 text-accent" />
            <h2 className="mt-5 text-xl font-bold text-navy">E-mail</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Stuur uw vraag of klusomschrijving naar info@klusdegroot.nl.
            </p>
            <a href="mailto:info@klusdegroot.nl" className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-accent">
              info@klusdegroot.nl
            </a>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <MapPin className="h-8 w-8 text-accent" />
            <h2 className="mt-5 text-xl font-bold text-navy">Locatie</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Schuttersstraat 34, 6941EA Didam. Eerder stond op de oude site ook een vestigingsvermelding in Dieren.
            </p>
            <p className="mt-5 text-sm font-semibold text-navy">Werkgebied: Didam, Dieren, Arnhem en omgeving</p>
          </article>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-2xl font-bold text-navy">Schriftelijk contact</h2>
            <p className="mt-3 text-gray-600">
              Wilt u uw klus rustig omschrijven? Gebruik dan het contactformulier.
            </p>
            <div className="mt-6">
              <Link href="/contact/contactformulier" className="btn-primary">
                Naar contactformulier
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="text-2xl font-bold">Liever teruggebeld worden?</h2>
            <p className="mt-3 text-white/75">
              Plan een terugbelafspraak en kies een moment dat voor u uitkomt.
            </p>
            <div className="mt-6">
              <Link href="/contact/terugbelafspraak" className="btn-secondary">
                Plan terugbelafspraak
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
