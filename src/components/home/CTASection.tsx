
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-french-navy mb-4">
            Prêt à construire votre stratégie patrimoniale ?
          </h2>
          <p className="text-french-gray max-w-lg mx-auto mb-8">
            Prenez rendez-vous pour un bilan patrimonial gratuit et découvrez comment nous pouvons vous accompagner.
          </p>
          <Button className="bg-french-navy hover:bg-french-navy/90 text-white text-lg px-8 py-6">
            <a href="https://calendly.com/agstrategiepatrimoine/30min" target="_blank" rel="noopener noreferrer">
              Bilan Patrimonial offert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
