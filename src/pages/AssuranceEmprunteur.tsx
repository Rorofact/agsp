
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ArrowRight, Calculator, PiggyBank, Shield, FileCheck, Heart, Search, PresentationChart, Users } from "lucide-react";

const AssuranceEmprunteur = () => {
  const [pret, setPret] = useState({
    montant: 200000,
    duree: 20,
    taux: 3.5,
    tauxAssurance: 0.36
  });

  // États pour stocker les résultats des simulations
  const [resultatPret, setResultatPret] = useState<{
    mensualite: number;
    coutCredit: number;
    coutAssurance: number;
    tauxEffectifGlobal: number;
  } | null>(null);

  const calculerMensualite = (montant: number, taux: number, duree: number) => {
    const tauxMensuel = taux / 100 / 12;
    const nbMensualites = duree * 12;
    return montant * tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -nbMensualites));
  };

  const calculerCoutAssurance = (montant: number, tauxAssurance: number, duree: number) => {
    const coutAnnuel = montant * tauxAssurance / 100;
    return coutAnnuel * duree;
  };

  const handleSimulationPret = () => {
    const mensualite = calculerMensualite(pret.montant, pret.taux, pret.duree);
    const coutTotal = mensualite * pret.duree * 12;
    const coutAssurance = calculerCoutAssurance(pret.montant, pret.tauxAssurance, pret.duree);
    
    setResultatPret({
      mensualite: mensualite,
      coutCredit: coutTotal - pret.montant,
      coutAssurance: coutAssurance,
      tauxEffectifGlobal: pret.taux + pret.tauxAssurance / 100
    });
  };

  const processSteps = [
    {
      number: "1",
      title: "Analyse de votre contrat actuel",
      description: "Nous étudions vos garanties et vos cotisations actuelles"
    },
    {
      number: "2",
      title: "Recherche des meilleures offres",
      description: "Comparaison parmi nos partenaires assureurs"
    },
    {
      number: "3",
      title: "Présentation des solutions",
      description: "Proposition personnalisée avec économies réalisables"
    },
    {
      number: "4",
      title: "Accompagnement complet",
      description: "Gestion de toutes les démarches administratives"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Assurance Emprunteur</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Simulez votre prêt immobilier.
        </p>
        
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="montant">Montant du prêt</Label>
                  <span className="font-semibold">{pret.montant.toLocaleString()} €</span>
                </div>
                <Slider
                  id="montant"
                  min={50000}
                  max={1000000}
                  step={10000}
                  value={[pret.montant]}
                  onValueChange={(value) => setPret({...pret, montant: value[0]})}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>50 000 €</span>
                  <span>1 000 000 €</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="duree">Durée (années)</Label>
                  <span className="font-semibold">{pret.duree} ans</span>
                </div>
                <Slider
                  id="duree"
                  min={5}
                  max={30}
                  step={1}
                  value={[pret.duree]}
                  onValueChange={(value) => setPret({...pret, duree: value[0]})}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 ans</span>
                  <span>30 ans</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="taux">Taux d'intérêt (%)</Label>
                  <span className="font-semibold">{pret.taux.toFixed(2)} %</span>
                </div>
                <Slider
                  id="taux"
                  min={1}
                  max={7}
                  step={0.1}
                  value={[pret.taux]}
                  onValueChange={(value) => setPret({...pret, taux: value[0]})}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1 %</span>
                  <span>7 %</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="tauxAssurance">Taux d'assurance (%)</Label>
                  <span className="font-semibold">{pret.tauxAssurance.toFixed(2)} %</span>
                </div>
                <Slider
                  id="tauxAssurance"
                  min={0.10}
                  max={1.00}
                  step={0.01}
                  value={[pret.tauxAssurance]}
                  onValueChange={(value) => setPret({...pret, tauxAssurance: value[0]})}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0.10 %</span>
                  <span>1.00 %</span>
                </div>
              </div>
              
              {resultatPret && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-french-navy mb-3">Résultat de votre simulation</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Mensualité:</span>
                      <span className="font-semibold">{resultatPret.mensualite.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût total du crédit:</span>
                      <span className="font-semibold">{resultatPret.coutCredit.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coût total de l'assurance:</span>
                      <span className="font-semibold">{resultatPret.coutAssurance.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux effectif global:</span>
                      <span className="font-semibold">{resultatPret.tauxEffectifGlobal.toFixed(2)} %</span>
                    </div>
                  </div>
                </div>
              )}
              
              <Button 
                onClick={handleSimulationPret} 
                className="w-full bg-french-navy hover:bg-french-navy/90"
              >
                Simuler mon prêt <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Section Pourquoi changer d'assurance emprunteur */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-french-navy mb-4">Pourquoi changer d'assurance emprunteur ?</h2>
            <p className="text-lg text-french-gray">
              Depuis 2022, vous pouvez résilier votre assurance emprunteur à tout moment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-french-gold/20 text-center">
              <CardContent className="p-6">
                <PiggyBank className="h-12 w-12 text-french-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-french-navy mb-3">Économies importantes</h3>
                <p className="text-french-gray">
                  Réalisez jusqu'à 50% d'économies sur vos cotisations d'assurance emprunteur
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20 text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-french-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-french-navy mb-3">Garanties équivalentes</h3>
                <p className="text-french-gray">
                  Bénéficiez de garanties identiques ou supérieures à celles de votre banque
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20 text-center">
              <CardContent className="p-6">
                <FileCheck className="h-12 w-12 text-french-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-french-navy mb-3">Changement simplifié</h3>
                <p className="text-french-gray">
                  Nous nous occupons de toutes les démarches pour votre changement d'assurance
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20 text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-french-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-french-navy mb-3">Sans engagement</h3>
                <p className="text-french-gray">
                  Étude offerte et sans engagement de votre part
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section Notre processus */}
        <section className="mb-16 bg-gray-50 py-12 px-6 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-french-navy mb-4">Notre processus</h2>
            <p className="text-lg text-french-gray">
              Un accompagnement complet pour optimiser votre assurance emprunteur
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-french-gold hidden md:block"></div>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
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
        </section>

        {/* Section Qui peut en bénéficier */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-french-navy mb-4">Qui peut en bénéficier ?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-french-gold/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-french-navy mb-4">Éligibilité</h3>
                <div className="space-y-2 text-french-gray">
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Tous les emprunteurs, quel que soit l'âge du prêt</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Prêts immobiliers résidence principale ou investissement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Prêts professionnels et SCI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Rachat de crédits avec assurance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-french-navy mb-4">Important à savoir</h3>
                <div className="space-y-2 text-french-gray">
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Résiliation possible à tout moment depuis 2022</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Garanties équivalentes obligatoires</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Aucune pénalité de la banque</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Économies immédiates dès la substitution</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-french-gold">•</span>
                    <span>Processus entièrement géré par nos soins</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-french-navy mb-4">
            Prêt à économiser sur votre assurance emprunteur ?
          </h2>
          <p className="text-french-gray mb-6">
            Obtenez une étude personnalisée et offerte en moins de 48h
          </p>
          <Button asChild size="lg" className="bg-french-gold hover:bg-french-gold/90">
            <a href="https://calendly.com/agstrategiepatrimoine/30min?month=2025-07" target="_blank" rel="noopener noreferrer">
              Demander mon étude offerte
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssuranceEmprunteur;
