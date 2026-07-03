import React from "react";
import Link from "next/link";
import { PRODUCT } from "@/lib/constants";

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-grotesk text-xl font-bold tracking-tight text-primary">
          COURT<span className="text-accent">.</span>PRO
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-secondary">
          <Link href="#technologie" className="hover:text-primary transition-colors">Technologie</Link>
          <Link href="#comparatif" className="hover:text-primary transition-colors">Comparatif</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline-block font-grotesk font-bold text-primary">
            {PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency}
          </span>
          <Link
            href={PRODUCT.paymentLink}
            className="bg-accent text-background px-5 py-2.5 rounded-premium font-semibold text-sm hover:bg-opacity-90 transition-all"
          >
            Commander
          </Link>
        </div>
      </div>
    </header>
  );
};
