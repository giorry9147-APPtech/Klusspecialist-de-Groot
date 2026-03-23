# Klus Specialist de Groot Website

Deze repository bevat de gemoderniseerde Next.js versie van de website in de map `site`.

## Belangrijk

Wil je de nieuwe veranderingen zien? Open dan niet de oude `index.html`, maar start de Next.js app.

## Projectstructuur

- `site/` - Nieuwe Next.js + Tailwind website
  - `src/app/page.tsx` - Homepagina
  - `src/app/wie-zijn-wij/page.tsx`
  - `src/app/wat-doen-wij/page.tsx`
  - `src/app/werkwijze/page.tsx`
  - `src/app/recensies/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/contact/contactformulier/page.tsx`
  - `src/app/contact/terugbelafspraak/page.tsx`

## Snel starten (vanaf root)

1. Installeer dependencies in `site`:

  `npm run install:site`

2. Start development server:

  `npm run dev`

3. Open in browser:

  `http://localhost:3000`

## Extra scripts

- `npm run build` - Productiebuild
- `npm run start` - Start productie server
- `npm run lint` - Linting uitvoeren

## Opmerking

De website draait via Next.js in `site` en is lokaal zichtbaar via `npm run dev`.