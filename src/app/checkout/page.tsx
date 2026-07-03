"use client";

import React, { useState } from "react";
import { PRODUCT } from "@/lib/constants";
import { ShieldCheck, ArrowRight, Lock } from "lucide-react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    carrier: "standard",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Redirection directe et sécurisée vers le lien de paiement configuré dans le .env
    setTimeout(() => {
      window.location.href = PRODUCT.paymentLink;
    }, 800);
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-16 px-6 text-primary font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Formulaire de coordonnées */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="font-grotesk text-3xl font-bold tracking-tight mb-2">Finaliser votre commande</h1>
            <p className="text-secondary text-sm">Veuillez renseigner vos informations de livraison professionnelles ou privées.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-surface p-6 rounded-premium border border-white/5 space-y-4">
              <h2 className="font-grotesk font-bold text-lg border-b border-white/5 pb-2 mb-4 text-accent">1. Coordonnées</h2>
              <div>
                <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  placeholder="nom@entreprise.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-premium border border-white/5 space-y-4">
              <h2 className="font-grotesk font-bold text-lg border-b border-white/5 pb-2 mb-4 text-accent">2. Destination finale</h2>
              <div>
                <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Adresse de livraison</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  placeholder="Numéro et nom de rue (accès poids lourds requis)"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Ville</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary mb-2">Code Postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-sm text-primary focus:border-accent focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-premium border border-white/5 space-y-4">
              <h2 className="font-grotesk font-bold text-lg border-b border-white/5 pb-2 mb-4 text-accent">3. Logistics & Transport</h2>
              <div className="flex items-center justify-between bg-background p-4 rounded-lg border border-accent/20">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="carrier"
                    value="standard"
                    checked={formData.carrier === "standard"}
                    onChange={handleChange}
                    className="accent-accent w-4 h-4"
                  />
                  <div>
                    <div className="text-sm font-semibold text-primary">Fret Spécialisé Plateforme</div>
                    <div className="text-xs text-secondary">Déchargement latéral requis</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-accent">Inclus</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-background font-grotesk font-bold text-lg py-5 rounded-premium hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,210,106,0.2)] disabled:opacity-50"
            >
              {isSubmitting ? (
                "Initialisation de la passerelle sécurisée..."
              ) : (
                <>
                  Payer {PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency} <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Récapitulatif Panier Droit */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface p-6 rounded-premium border border-white/5 sticky top-28 space-y-6">
            <h2 className="font-grotesk font-bold text-xl">Synthèse de la commande</h2>
            
            <div className="flex items-start gap-4 border-b border-white/5 pb-6">
              <div className="w-20 h-20 bg-background rounded-lg border border-white/5 flex items-center justify-center font-grotesk font-bold text-xs text-accent">
                3D COURT
              </div>
              <div className="flex-1">
                <h3 className="font-grotesk font-bold text-base text-primary">{PRODUCT.name}</h3>
                <p className="text-xs text-secondary mt-1">Édition Unique — Normes FIP</p>
                <div className="text-sm font-bold text-primary mt-2">Qté : 1</div>
              </div>
            </div>

            <div className="space-y-3 text-sm border-b border-white/5 pb-6">
              <div className="flex justify-between">
                <span className="text-secondary">Sous-total</span>
                <span>{PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Logistique & Livraison</span>
                <span className="text-accent">Offert</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-grotesk font-bold text-lg">Total global</span>
              <span className="font-grotesk font-bold text-2xl text-accent">
                {PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency}
              </span>
            </div>

            <div className="bg-background/50 p-4 rounded-lg border border-white/5 space-y-2 text-xs text-secondary">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Lock className="w-3.5 h-3.5 text-accent" /> Environnement transactionnel sécurisé
              </div>
              <p>
                La validation redirige vers une interface bancaire cryptée de bout en bout. Aucune coordonnée bancaire n'est collectée sur notre serveur.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
