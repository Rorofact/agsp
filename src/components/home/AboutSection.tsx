
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-french-navy">Qui suis-je?</h2>
              <p className="text-lg text-french-gray">
                Alice Goyec, conseillère en gestion de patrimoine, je vous accompagne dans la réalisation de vos projets financiers et patrimoniaux avec une approche personnalisée et professionnelle.
              </p>
              <p className="text-french-gray">
                Fort de plusieurs années d'expérience dans le secteur financier, je mets mon expertise au service de votre réussite patrimoniale. Ma mission est de vous aider à optimiser votre patrimoine et à préparer sereinement votre avenir.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-french-gold/20">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-french-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-french-navy">500+</div>
                  <div className="text-sm text-french-gray">Clients accompagnés</div>
                </CardContent>
              </Card>
              <Card className="border-french-gold/20">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-french-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-french-navy">95%</div>
                  <div className="text-sm text-french-gray">Clients satisfaits</div>
                </CardContent>
              </Card>
              <Card className="border-french-gold/20">
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-french-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-french-navy">10+</div>
                  <div className="text-sm text-french-gray">Années d'expérience</div>
                </CardContent>
              </Card>
              <Card className="border-french-gold/20">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-french-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-french-navy">8.5%</div>
                  <div className="text-sm text-french-gray">Rendement moyen</div>
                </CardContent>
              </Card>
            </div>
            
            <Link to="/about">
              <Button className="bg-french-gold hover:bg-french-gold/90 text-white">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://www.skolinvest.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoibG01dmhuMHl0MHl0NTc2N25pcTZuZWozN3NtZSIsImRvbWFpbiI6Ind3dy5za29saW52ZXN0LmNvbSJ9.9_BXp5-tYjzMxlWo_FdVgpi5PvWET_ax2UnhRdqjQWg"
                alt="Alice Goyec - Conseillère en gestion de patrimoine"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-french-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-french-navy/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
