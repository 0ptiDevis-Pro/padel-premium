import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Le Terrain de Padel Premium | Sans intermédiaire. 14 999 €",
  description: "Achetez le terrain de padel de qualité professionnelle au prix unique de 14 999 €. Livraison rapide et structure ultra-résistante.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-primary font-inter antialiased selection:bg-accent selection:text-background`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
