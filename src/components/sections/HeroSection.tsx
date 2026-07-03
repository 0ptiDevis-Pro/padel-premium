import React from "react";
import { PRODUCT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { PadelCourt3D } from "@/components/3d/PadelCourt3D";

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 inline-block">
          Ingénierie Sportive
        </span>
        <h1 className="font-grotesk text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 leading-tight">
          {PRODUCT.name}. <br />
          <span className="text-secondary font-normal">{PRODUCT.tagline}</span>
        </h1>
        <p className="text-secondary text-lg md:text-xl mb-8 font-inter">
          {PRODUCT.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={PRODUCT.paymentLink} variant="primary">
            Commander — {PRODUCT.price.toLocaleString("fr-FR")} {PRODUCT.currency}
          </Button>
          <Button href="#technologie" variant="secondary">
            Découvrir la technologie
          </Button>
        </div>
      </div>
      <PadelCourt3D />
    </section>
  );
};
