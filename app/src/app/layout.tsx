import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DomainCompare Afrique — Comparateur de noms de domaine",
  description:
    "Comparez les prix de tous les registrars pour votre nom de domaine en Afrique de l'Ouest, sans engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased">
        <Header />
        <main className="w-full pt-16 bg-surface min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
