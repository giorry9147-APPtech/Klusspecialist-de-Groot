import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Paintbrush,
  Square,
  Layers,
  Hammer,
  Building2,
  Wrench,
  Star,
  ShieldCheck,
  Clock,
  BadgeEuro,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KLUSdeGroot — Uw vakman voor klus & renovatiewerk",
  description:
    "Klus Specialist de Groot helpt u bij grote en kleine klussen. Actief in Didam, Arnhem, Dieren, Brummen, Eerbeek en Doesburg. Offerte altijd vrijblijvend.",
};

/* ─── DATA ─────────────────────────────────────────────────── */

const services = [
  {
    icon: Paintbrush,
    title: "Schilderwerk",
    description:
      "Binnen en buiten. Muren, plafonds, kozijnen, deuren en gevels. Degelijke voorbereiding, nette afwerking.",
  },
  {
    icon: Square,
    title: "Tegelwerk",
    description:
      "Badkamers, keukens, toiletten en vloeren. Strak, waterdicht en vakkundig gelegd.",
  },
  {
    icon: Layers,
    title: "Laminaat & PVC",
    description:
      "Snel en netjes gelegd met aandacht voor ondervloer en plinten. Gratis advies bij materiaalkeuze.",
  },
  {
    icon: Hammer,
    title: "Timmerwerk",
    description:
      "Deuren bijstellen, kozijnen repareren, lambrisering, kasten inmeten en monteren.",
  },
  {
    icon: Building2,
    title: "Metselwerk",
    description:
      "Scheuren herstellen, voegen bijwerken, muurtjes repareren. Klein metselwerk, professioneel resultaat.",
  },
  {
    icon: Wrench,
    title: "Montage & overig",
    description:
      "Lampen ophangen, gordijnrails plaatsen, meubels monteren, spiegels ophangen. Geen klus te klein.",
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: "Al 20+ jaar actief", sub: "Actief sinds 2004" },
  { icon: BadgeEuro, label: "Geen voorrijkosten", sub: "Altijd eerlijke prijs" },
  { icon: Clock, label: "Binnen 48u reactie", sub: "Snel en betrouwbaar" },
  { icon: Star, label: "Tevreden klanten", sub: "Alleen dat telt" },
];

const steps = [
  {
    number: "01",
    title: "Contact opnemen",
    desc: "Bel, mail of vul het formulier in. We reageren binnen één werkdag.",
  },
  {
    number: "02",
    title: "Gratis inspectie",
    desc: "We komen langs, bekijken de situatie en geven een vaste prijsofferte.",
  },
  {
    number: "03",
    title: "Nette oplevering",
    desc: "We werken efficiënt, ruimen alles op en leveren op afspraak op.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function HomePage() {
  const oldHeroImage = "/images/hero.jpg";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${oldHeroImage})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-accent opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-yellow-200 opacity-10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
              <Wrench className="h-3.5 w-3.5" />
              Allround klusbedrijf · Actief sinds 2004
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Uw vakman voor elk{" "}
              <span className="text-accent">klus- en renovatiewerk</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Van schilderwerk tot tegelwerk — KLUSdeGroot werkt netjes, snel
              en tegen een eerlijke prijs. Geen voorrijkosten, geen verborgen
              kosten, altijd een vaste prijsafspraak vooraf.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact/contactformulier" className="btn-primary text-base px-8 py-3.5">
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:0642829417" className="btn-secondary text-base px-8 py-3.5">
                <Phone className="h-4 w-4" />
                06-42829417
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {[
                "Geen voorrijkosten",
                "Vrijblijvende offerte",
                "Op afspraak en op tijd",
                "Netjes werken & opruimen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────── */}
      <section className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustPoints.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-6 py-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10">
                  <Icon className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20" id="diensten">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Wat doen wij?</h2>
            <p className="section-subheading mx-auto max-w-xl">
              Van kleine reparatie tot volledige renovatie — wij pakken het aan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/wat-doen-wij" className="btn-outline">
              Alle diensten bekijken
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-navy">
            <div className="grid lg:grid-cols-2">
              {/* text */}
              <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-16">
                <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  Wie zijn wij
                </span>
                <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                  Meer dan 20 jaar vakmanschap
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/75">
                  Klus Specialist de Groot is in 2004 gestart als allround klusser
                  voor particulieren. Groot of klein — wij vinden niets te eenvoudig
                  of te ingewikkeld. U heeft altijd direct contact met De Groot zelf:
                  persoonlijk, eerlijk en op afspraak.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Persoonlijk contact met de eigenaar",
                    "Transparante vaste prijsafspraken",
                    "Nette oplevering — werkplek altijd schoon",
                    "Actief in Didam, Arnhem en omgeving",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/wie-zijn-wij" className="btn-secondary inline-flex">
                    Meer over ons
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* stats panel */}
              <div className="flex items-center justify-center bg-navyDark px-8 py-12 lg:px-12">
                <div className="grid w-full grid-cols-2 gap-6">
                  {[
                    { stat: "20+", label: "jaar ervaring" },
                    { stat: "100%", label: "vrijblijvende offerte" },
                    { stat: "€0", label: "voorrijkosten" },
                    { stat: "∞", label: "geen klus te klein" },
                  ].map(({ stat, label }) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10"
                    >
                      <p className="text-3xl font-extrabold text-accent">{stat}</p>
                      <p className="mt-1 text-xs font-medium text-white/60">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-20" id="werkwijze">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Hoe werkt het?</h2>
            <p className="section-subheading mx-auto max-w-xl">
              Van eerste contact tot nette oplevering — transparant en op afspraak.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-7 hidden h-0.5 w-full translate-x-1/2 bg-gray-200 sm:block" />
                )}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-lg">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/werkwijze" className="btn-outline">
              Volledige werkwijze bekijken
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Klaar om te beginnen?
              </h2>
              <p className="mt-2 text-white/80">
                Neem contact op voor een gratis, vrijblijvende offerte. We reageren
                binnen één werkdag.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact/contactformulier"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-accent shadow transition hover:bg-gray-50"
              >
                <Mail className="h-4 w-4" />
                Stuur een bericht
              </Link>
              <a
                href="tel:0642829417"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
