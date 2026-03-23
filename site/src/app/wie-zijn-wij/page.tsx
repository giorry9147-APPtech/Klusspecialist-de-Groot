import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Over KLUSdeGroot",
  description:
    "Maak kennis met KLUSdeGroot: een ervaren en betrouwbaar klusbedrijf voor particulieren. Persoonlijk contact, eerlijke prijzen en nette oplevering.",
};

const reasons = [
  "Persoonlijk contact met De Groot zelf",
  "Transparante prijzen zonder verborgen kosten",
  "Werkplek wordt netjes schoon achtergelaten",
  "Kleine en grote klussen met dezelfde zorg uitgevoerd",
];

export default function AboutPage() {
  const andrePhoto = "/images/andre.jpg";

  return (
    <>
      <PageHero
        eyebrow="Wie zijn wij"
        title="Een betrouwbare vakman voor werk dat gewoon goed moet gebeuren"
        description="KLUSdeGroot is opgericht door De Groot, een allround vakman met jarenlange ervaring in bouw, renovatie en onderhoud voor particulieren."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed text-gray-600">
              Wat begon als een passie voor degelijk werk, is uitgegroeid tot een
              klusbedrijf waar klanten op terugvallen voor uiteenlopende klussen in en
              rondom het huis. Van schilderwerk tot renovatie: de afspraak is simpel.
              We zeggen duidelijk wat we doen, wat het kost en wanneer het klaar is.
            </p>
            <p className="leading-relaxed">
              Wij werken uitsluitend voor particulieren en behandelen elk project met
              aandacht en zorgvuldigheid. Geen verrassingen achteraf, geen onduidelijke
              communicatie. U weet vooraf waar u aan toe bent.
            </p>
            <p className="leading-relaxed">
              Onze manier van werken is persoonlijk en praktisch. We komen langs,
              bekijken de situatie, geven een eerlijke offerte en plannen het werk in
              op een moment dat past. Pas wanneer u tevreden bent, is het werk echt af.
            </p>
          </div>

          <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <img
              src={andrePhoto}
              alt="Andre de Groot"
              className="h-72 w-full rounded-2xl object-cover"
            />
            <div className="mt-4 rounded-xl bg-soft/50 p-4">
              <p className="text-lg font-bold text-navy">Andre de Groot</p>
              <p className="text-sm text-gray-600">Sinds 2004 als ondernemer actief</p>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-5">
            <h2 className="text-2xl font-bold text-navy">Waarom KLUSdeGroot?</h2>
            <ul className="mt-6 space-y-4">
              {reasons.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:p-10">
            <Quote className="h-10 w-10 text-accent" />
            <blockquote className="mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl">
              Ik ben pas tevreden als u dat ook bent.
            </blockquote>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              De Groot, eigenaar
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">Wilt u kennismaken?</h2>
              <p className="mt-2 max-w-xl text-white/75">
                Neem contact op en ontvang een vrijblijvende offerte voor uw klus of renovatie.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Naar contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
