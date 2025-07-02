
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-french-navy to-french-navy/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Playfair_Display']">
            Construire et Protéger Votre Patrimoine
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            Des solutions personnalisées pour optimiser votre stratégie patrimoniale et assurer votre avenir financier.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-french-gold hover:bg-french-gold/90 text-french-navy text-lg px-8 py-6">
              <Link to="/services">Nos Services</Link>
            </Button>
            <Button variant="outline" className="border-white hover:bg-white/10 text-french-gold text-lg px-8 py-6">
              <a href="https://calendly.com/agstrategiepatrimoine/30min" target="_blank" rel="noopener noreferrer">
                Bilan Patrimonial offert
              </a>
            </Button>
          </div>
          <p className="text-lg mt-6 text-french-gold font-semibold">
            10 ans d'expérience. Conseil indépendant
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
