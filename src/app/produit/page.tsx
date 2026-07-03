"use client";

import React, { useState } from "react";
import { PRODUCT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Check, Shield, Truck, Wrench, Layers } from "lucide-react";

const ZOOM_SECTIONS = [
  {
    id: "vitres",
    title: "Vitrage Panoramique 12mm",
    description: "Verre trempé thermique de haute sécurité Securit. Une transparence absolue avec traitement anti-reflet premium pour une captation vidéo optimale et aucun angle mort.",
  },
  {
    id: "grillage",
    title: "Grillage Maillé Anti-Déformation",
    description: "Ajusté au millimètre, notre grillage structurel subit un traitement de galvanisation à chaud suivi d'un thermolaquage époxy pour résister aux impacts répétés sans aucune perte de tension.",
  },
  {
    id: "poteaux",
    title: "Poteaux d'Angle Renforcés",
    description: "Profilés d'acier lourd de section 100x100mm conçus pour stabiliser l'ossature face aux vents violents (jusqu'à 150 km/h) et garantir une géométrie parfaite du court.",
  },
  {
    id: "gazon",
    title: "Gazon Monofilament Texturé Pro",
    description: "Fibre de dernière génération limitant l'usure par friction. Rétention de sable optimisée pour des appuis fluides, une réactivité maximale et un rebond de balle régulier.",
  },
];

export default function ProductPage() {
  const [activeZoom, setActiveZoom] = useState(ZOOM_SECTIONS[0]);

  return (
    <div className="bg-background pt-28 text-primary font-inter">
      {/* Hero Produit */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="space-y-6">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Édition Architecte</span>
          <h1 className="font-grotesk text-4xl md:text-6xl font-bold tracking-tight">
            L'excellence structurelle du Padel.
          </h1>
          <div className="font-grotesk text-3xl md:text-5xl font-bold text-accent">
            {PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency} <span className="text-sm text-secondary font-normal font-inter">TTC (Hors pose)</span>
          </div>
          <p className="text-secondary text-lg leading-relaxed">
            Une conception monobloc sans compromis, développée pour les clubs haut de gamme et les propriétés privées d'exception. Conforme aux normes FIP.
          </p>
          
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-3 text-sm text-secondary">
              <Truck className="text-accent w-5 h-5" /> Delivery incluse sous 3 à 4 semaines
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <Wrench className="text-accent w-5 h-5" /> Montage simplifié avec guide d'ingénierie fourni
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <Shield className="text-accent w-5 h-5" /> Garantie structurelle décennale certifiée
            </div>
          </div>

          <div className="pt-6">
            <Button href="/checkout" variant="primary" className="w-full sm:w-auto text-center">
              Procéder à la commande
            </Button>
          </div>
        </div>

        {/* Zone de démonstration visuelle */}
        <div className="relative aspect-square bg-surface border border-white/5 rounded-premium overflow-hidden flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
          <div className="text-center space-y-4">
            <Layers className="w-16 h-16 text-accent mx-auto opacity-80 animate-pulse" />
            <div className="font-grotesk font-bold text-xl">Composant Actif : {activeZoom.title}</div>
            <p className="text-secondary text-sm max-w-sm mx-auto">{activeZoom.description}</p>
          </div>
        </div>
      </section>

      {/* Section interactive de focus technique */}
      <section className="bg-surface border-t border-b border-white/5 py-24 my-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-center mb-4">
            Anatomie de la performance
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-16 text-sm md:text-base">
            Sélectionnez un composant technique pour analyser sa conception structurelle et ses innovations matérielles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ZOOM_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveZoom(section)}
                className={`p-6 text-left rounded-premium border transition-all duration-300 ${
                  activeZoom.id === section.id
                    ? "bg-background border-accent shadow-[0_0_15px_rgba(0,210,106,0.15)] text-primary"
                    : "bg-background/40 border-white/5 text-secondary hover:border-white/20 hover:text-primary"
                }`}
              >
                <div className="font-grotesk font-bold text-lg mb-2">{section.title}</div>
                <p className="text-xs line-clamp-2">{section.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spécifications complètes */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="font-grotesk text-2xl font-bold mb-8 text-center">Fiche Technique Certifiée</h3>
        <div className="border border-white/5 rounded-premium overflow-hidden">
          {[
            { label: "Dimensions réglementaires", val: "20.00m x 10.00m (Intérieur court)" },
            { label: "Hauteur des structures", val: "4.00m sur les fonds, 3.00m sur les latéraux" },
            { label: "Revêtement d'ancrage", val: "Platines d'acier usinées au laser, fixation par goujons chimiques" },
            { label: "Système d'éclairage", val: "8 projecteurs LED de 200W, puissance totale 1600W (400 Lux)" },
            { label: "Normes de sécurité", val: "Conforme EN 12150-1 (Résistance aux chocs thermiques et mécaniques)" },
          ].map((spec, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 p-5 border-b border-white/5 last:border-none bg-surface/30 text-sm">
              <div className="text-secondary font-medium">{spec.label}</div>
              <div className="text-primary font-semibold mt-1 sm:mt-0">{spec.val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
