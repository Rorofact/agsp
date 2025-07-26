
import { Card, CardContent } from "@/components/ui/card";

const MethodSection = () => {
  const steps = [
    {
      number: "1",
      title: "Audit patrimonial et Etablissement des objectifs",
      description: "Analyse complète de votre situation actuelle et définition de vos objectifs"
    },
    {
      number: "2", 
      title: "Préconisations",
      description: "Proposition de solutions personnalisées adaptées à votre profil"
    },
    {
      number: "3",
      title: "Mise en place des solutions approuvées", 
      description: "Implémentation des recommandations validées ensemble"
    },
    {
      number: "4",
      title: "Suivi et ajustement au moins une fois par an et sur-demande",
      description: "Accompagnement continu et ajustements selon l'évolution de vos besoins"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-french-navy mb-4">Notre méthode</h2>
          <p className="text-lg text-french-gray max-w-4xl mx-auto">
            Confier l'optimisation de votre épargne à AG Stratégie Patrimoine, c'est choisir une prise en main experte et efficace de votre patrimoine et ce, en 4 étapes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-french-gold hidden md:block"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-center gap-6">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-16 h-16 bg-french-gold text-white rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {step.number}
                  </div>
                  
                  {/* Step content */}
                  <Card className="flex-1 border-french-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-french-navy mb-2">{step.title}</h3>
                      <p className="text-french-gray">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
