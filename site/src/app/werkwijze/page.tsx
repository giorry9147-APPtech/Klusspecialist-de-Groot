import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, Hammer, MessageSquareMore } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Bekijk hoe KLUSdeGroot werkt: van eerste contact en vrijblijvende inspectie tot duidelijke offerte en nette oplevering.",
};

const steps = [
  {
    icon: MessageSquareMore,
    title: "1. Eerste contact",
    text: "U neemt contact op via telefoon, e-mail, website of spreekt ons direct aan wanneer wij ergens aan het werk zijn.",
  },
  {
    icon: CalendarDays,
    title: "2. Afspraak op locatie",
    text: "We komen vrijblijvend langs om uw klus te bekijken, uw wensen te bespreken en de situatie goed in te schatten.",
  },
  {
    icon: FileText,
    title: "3. Offerte zonder verplichting",
    text: "Aan de hand van de opname maken wij een duidelijke offerte. Ook die is kosteloos en vrijblijvend.",
  },
  {
    icon: Hammer,
    title: "4. Bespreken en uitvoeren",
    text: "Na akkoord plannen we samen de startdatum. Daarna gaan we op afspraak aan het werk en leveren netjes op.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Werkwijze"
        title="Duidelijk, persoonlijk en zonder verrassingen"
        description="Een klus goed uitvoeren begint met helder contact. Daarom werken wij stap voor stap, met een vrijblijvende opname en een offerte die pas wordt gemaakt nadat we de situatie hebben gezien."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-2xl font-bold text-navy">Waarom wij niet ongezien offreren</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Een opdracht is in de praktijk bijna nooit goed te beoordelen op basis van alleen een korte omschrijving.
              Daarom komen wij eerst langs. Zo voorkomen we misverstanden, onrealistische verwachtingen en onverwachte kosten voor beide kanten.
            </p>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="text-2xl font-bold">Klaar voor de eerste stap?</h2>
            <p className="mt-4 text-white/75">
              Plan een vrijblijvende afspraak in en we bekijken uw klus graag op locatie.
            </p>
            <div className="mt-6">
              <Link href="/contact/terugbelafspraak" className="btn-primary">
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
