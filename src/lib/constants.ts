export const PRODUCT = {
  name: "Le Terrain de Padel Premium",
  price: 14999,
  currency: "€",
  tagline: "Sans intermédiaire.",
  description: "Conçu pour l'excellence. Qualité professionnelle, structure renforcée et vitres panoramiques haute sécurité 12mm.",
  paymentLink: process.env.NEXT_PUBLIC_PAYMENT_LINK || "#paiement",
};

export const COMPARISON_DATA = [
  { feature: "Vitres Panoramiques", us: "12mm Verre Trempé Homologué", others: "10mm Standard" },
  { feature: "Structure Acier", us: "Galvanisé à chaud + Poudre époxy", others: "Peinture simple" },
  { feature: "Gazon Synthétique", us: "Monofilament texturé pro", others: "Fibres fibrillées basiques" },
  { feature: "Éclairage LED", us: "8x 200W Asymétrique anti-éblouissement", others: "4x 150W Standard" },
  { feature: "Garantie Structure", us: "10 Ans", others: "2 Ans" },
];

export const FAQ_DATA = [
  {
    question: "Le terrain est-il homologué pour les compétitions ?",
    answer: "Oui, notre terrain respecte rigoureusement le cahier des charges de la FIP (Fédération Internationale de Padel) et de la FFT."
  },
  {
    question: "Quels sont les prérequis pour l'installation ?",
    answer: "Une dalle en béton armé poreux ou lissé de 21m x 11m est requise. Nous fournissons les plans d'ancrage détaillés dès la commande."
  },
  {
    question: "Quel est le délai de livraison ?",
    answer: "La livraison est effectuée par transporteur spécialisé sous 3 à 4 semaines partout en Europe."
  }
];
