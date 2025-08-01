
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Scale, BarChart4 } from "lucide-react";

const ExpertiseSection = () => {
  return (
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
                  Aucun produit bancaire ou d'assurance en propre, pour des conseils objectifs et un accompagnement sur mesure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
