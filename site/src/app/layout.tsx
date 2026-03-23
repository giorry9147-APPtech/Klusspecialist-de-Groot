import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KLUSdeGroot — Uw klusbedrijf voor klus & renovatiewerk",
    template: "%s | KLUSdeGroot",
  },
  description:
    "KLUSdeGroot is uw betrouwbare vakman voor schilderwerk, tegelwerk, laminaat, timmerwerk en meer. Netjes werk, eerlijke prijs, snel geholpen. Actief in Didam, Arnhem en omgeving.",
  keywords: [
    "klusbedrijf",
    "allround klusser",
    "schilder",
    "tegelwerk",
    "laminaat leggen",
    "timmerwerk",
    "Didam",
    "Arnhem",
    "renovatie",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "KLUSdeGroot",
    url: "https://www.klusdegroot.nl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
