import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contactformulier",
  description:
    "Vul het contactformulier van KLUSdeGroot in voor een vrijblijvende offerte of vraag over uw klus.",
};

export default function ContactFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Contactformulier"
        title="Stuur ons een bericht"
        description="Omschrijf uw klus zo duidelijk mogelijk. Dan kunnen we snel beoordelen wat er nodig is en hoe we u het beste kunnen helpen."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <ContactForm />

          <aside className="rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100">
            <h2 className="text-2xl font-bold text-navy">Goed om te weten</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
              <li>We reageren doorgaans binnen één werkdag.</li>
              <li>Hoe concreter uw omschrijving, hoe sneller wij kunnen inschatten wat nodig is.</li>
              <li>Voor een nauwkeurige offerte komen we meestal eerst even kijken.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
