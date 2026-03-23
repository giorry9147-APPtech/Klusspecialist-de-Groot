import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CallbackForm from "@/components/forms/CallbackForm";

export const metadata: Metadata = {
  title: "Terugbelafspraak",
  description:
    "Plan een terugbelafspraak met KLUSdeGroot en kies een moment waarop u bereikbaar bent.",
};

export default function CallbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Terugbelafspraak"
        title="Plan een moment waarop wij u terugbellen"
        description="Laat uw gegevens achter en geef aan wanneer u bereikbaar bent. Dan nemen wij contact met u op wanneer het u uitkomt."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <CallbackForm />

          <aside className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="text-2xl font-bold">Snelle route naar advies</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Een terugbelafspraak is handig als u de situatie liever eerst mondeling uitlegt. Zo kunnen we direct doorvragen en sneller richting een passende oplossing gaan.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
