import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Recensies",
  description:
    "Lees ervaringen van klanten van KLUSdeGroot en ontdek hoe wij kwaliteit, communicatie en nette oplevering combineren.",
};

const reviews = [
  {
    name: "Klant uit Dieren",
    title: "Netjes gewerkt en duidelijk in communicatie",
    text: "De afspraken waren helder, er werd op tijd gewerkt en alles is schoon achtergelaten. Precies zoals je hoopt bij een klusbedrijf.",
  },
  {
    name: "Klant uit Arnhem",
    title: "Veelzijdig en praktisch",
    text: "Voor meerdere klussen in huis één aanspreekpunt gehad. Dat werkte prettig en het resultaat was gewoon goed.",
  },
  {
    name: "Klant uit Doesburg",
    title: "Betrouwbaar van offerte tot oplevering",
    text: "Geen verrassingen achteraf. Eerst netjes komen kijken, daarna een duidelijke prijs en vervolgens uitgevoerd zoals afgesproken.",
  },
];

export default function ReviewsPage() {
  const kitchenPhoto = "/images/project-keuken.jpg";

  return (
    <>
      <PageHero
        eyebrow="Recensies"
        title="Wat klanten over ons zeggen"
        description="Niets zegt meer over het werk dan de ervaring van mensen bij wie we al over de vloer zijn geweest."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <h2 className="mt-5 text-lg font-bold text-navy">{review.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{review.text}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:grid-cols-[1fr_1.1fr] lg:p-8">
            <img
              src={kitchenPhoto}
              alt="Keukenproject 2014"
              className="h-80 w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Project uit archief
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy">Keuken in maart 2014</h2>
              <blockquote className="mt-5 border-l-4 border-accent pl-4 text-gray-700 italic">
                &quot;Andre, bedankt voor compleet opnieuw aanleggen van mijn keuken.
                De prachtige moderne witte keuken heb je mooi afgewerkt.
                Nu kan ik er weer vele jaren tegenaan. Nogmaals dank voor het vakwerk!&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy">Ook een offerte aanvragen?</h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Ervaar zelf hoe KLUSdeGroot werkt: persoonlijk contact, duidelijke prijs en een nette oplevering.
              </p>
            </div>
            <div className="mt-6 sm:mt-0">
              <Link href="/contact/contactformulier" className="btn-primary">
                Vraag offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
