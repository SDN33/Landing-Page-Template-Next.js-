import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Team Backlink | Boostez votre visibilité avec les meilleurs backlinks",
  description: "Dans un monde où les connexions sont essentielles, des backlinks de qualité font toute la différence. Rejoignez notre communauté et profitez de l'expertise de nos mentors pour booster votre visibilité en ligne ! Service 100% gratuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
