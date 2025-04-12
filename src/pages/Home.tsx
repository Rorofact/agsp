
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Scale, BarChart4 } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
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
                Nos Services
              </Button>
              <Button variant="outline" className="border-white hover:bg-white/10 text-french-gold text-lg px-8 py-6">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-french-navy mb-4">Notre Expertise</h2>
            <p className="text-french-gray max-w-2xl mx-auto">
              Une approche complète et sur mesure pour répondre à tous vos besoins en gestion patrimoniale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <ShieldCheck className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Protection Patrimoniale</h3>
                  <p className="text-french-gray">
                    Sécurisez votre patrimoine et protégez les intérêts de vos proches avec nos solutions d'assurance et de prévoyance.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Investissements</h3>
                  <p className="text-french-gray">
                    Optimisez votre rendement avec des placements diversifiés et adaptés à votre profil d'investisseur.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <Scale className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Optimisation Fiscale</h3>
                  <p className="text-french-gray">
                    Réduisez votre charge fiscale grâce à des stratégies légales et efficaces adaptées à votre situation.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <BarChart4 className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Conseil Personnalisé</h3>
                  <p className="text-french-gray">
                    Un accompagnement sur mesure pour définir et atteindre vos objectifs financiers à court et long terme.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-french-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-french-navy mb-4">
                Prêt à construire votre stratégie patrimoniale ?
              </h2>
              <p className="text-french-gray max-w-lg">
                Prenez rendez-vous pour un bilan patrimonial gratuit et découvrez comment nous pouvons vous accompagner.
              </p>
            </div>
            <Button className="bg-french-navy hover:bg-french-navy/90 text-white text-lg px-8 py-6">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
