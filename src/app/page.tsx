import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { COMPARISON_DATA, FAQ_DATA } from "@/lib/constants";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />

      {/* Section Comparatif */}
      <section id="comparatif" className="max-w-5xl mx-auto px-6">
        <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi notre terrain redéfinit les standards.
        </h2>
        <div className="bg-surface rounded-premium border border-white/5 overflow-hidden">
          <div className="grid grid-cols-3 p-6 border-b border-white/5 font-grotesk font-bold text-sm md:text-base text-secondary">
            <div>Caractéristiques</div>
            <div className="text-accent">Notre Terrain</div>
            <div>Concurrence Standard</div>
          </div>
          {COMPARISON_DATA.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-none text-sm md:text-base items-center">
              <div className="font-medium text-primary">{row.feature}</div>
              <div className="font-semibold text-accent">{row.us}</div>
              <div className="text-secondary">{row.others}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6">
        <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-center mb-12">
          Questions Fréquentes
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="bg-surface p-6 rounded-premium border border-white/5">
              <h3 className="font-grotesk font-bold text-lg mb-2 text-primary">{item.question}</h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
