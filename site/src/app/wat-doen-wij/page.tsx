import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Paintbrush,
  Wallpaper,
  Zap,
  Droplets,
  Flame,
  Bath,
  PanelsTopLeft,
  Heater,
  CookingPot,
  Shield,
  Square,
  DoorOpen,
  LayoutPanelTop,
  Wrench,
  House,
  BrickWall,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wat doen wij",
  description:
    "KLUSdeGroot voert schilderwerk, tegelwerk, timmerwerk, renovaties, lekkageherstel en allerlei andere klussen in en rondom het huis uit.",
};

const services = [
  { icon: Paintbrush, title: "Schilderen", text: "Binnen en buiten, inclusief kozijnen, deuren, plafonds en muren." },
  { icon: Wallpaper, title: "Behangen", text: "Oud behang verwijderen, muren herstellen en nieuw behang aanbrengen." },
  { icon: Zap, title: "Elektra", text: "Verlichting, groepenkast, schakelaars en stopcontacten aanpassen of uitbreiden." },
  { icon: Droplets, title: "Water", text: "Leidingen aanleggen, lekkages herstellen en kranen vervangen." },
  { icon: Flame, title: "Gas", text: "Gasleidingen aanleggen of afsluiten met aandacht voor veiligheid." },
  { icon: Bath, title: "Sanitair", text: "Toilet of badkamer vernieuwen of compleet opnieuw aanleggen." },
  { icon: PanelsTopLeft, title: "Plafonds en wanden", text: "Nieuwe plafonds of scheidingswanden in hout, gips of kunststof." },
  { icon: Heater, title: "Centrale verwarming", text: "Radiatoren verwijderen, plaatsen, ontluchten en bijvullen." },
  { icon: CookingPot, title: "Keuken", text: "Installatiewerk en plaatsing van keukens en keukenonderdelen." },
  { icon: Shield, title: "Isolatie", text: "Dak-, muur- en vloerisolatie voor meer comfort en lagere energiekosten." },
  { icon: Square, title: "Tegelen", text: "Vloer- en wandtegels strak gelegd in keuken, toilet of badkamer." },
  { icon: DoorOpen, title: "Deuren en ramen", text: "Plaatsen, repareren en verbeteren van hang- en sluitwerk." },
  { icon: LayoutPanelTop, title: "Vloeren", text: "Diverse soorten vloeren verwijderen, voorbereiden en aanbrengen." },
  { icon: Wrench, title: "Lekkages", text: "Lekkages binnen en buiten opsporen en vakkundig verhelpen." },
  { icon: House, title: "Daken en goten", text: "Dakreparaties, dakramen, nokpannen, schoorstenen en gootreiniging." },
  { icon: BrickWall, title: "Rondom het huis", text: "Bestrating, schuttingen, borders en andere buitenklussen." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Wat doen wij"
        title="Een breed pakket aan klussen in en rondom uw huis"
        description="Van schilderwerk en sanitair tot vloerwerk en buitenklussen. Staat uw klus er niet tussen, dan denken we alsnog graag met u mee."
      />

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-accent px-8 py-10 text-white">
            <h2 className="text-2xl font-bold">Staat uw klus er niet tussen?</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Neem gewoon contact op. Veel opdrachten zijn maatwerk en we geven u graag persoonlijk advies.
            </p>
            <div className="mt-6">
              <Link href="/contact/contactformulier" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent transition hover:bg-gray-50">
                Vraag een offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
