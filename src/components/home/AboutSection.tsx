
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, TrendingUp } from "lucide-react";

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
              <div className="space-y-2 text-french-gray">
                <p>• 10+ ans d'expérience</p>
                <p>• Capacités IAS, IOBSP, CIF, IMMO</p>
                <p>• Membre de la CNCEF Patrimoine</p>
                <p>• Inscrite à l'ORIAS sous le n° 25005313</p>
              </div>
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
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-french-cream aspect-square flex items-center justify-center">
                <span className="text-6xl font-semibold text-french-navy">AG</span>
              </div>
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
