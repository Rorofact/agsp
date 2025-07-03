import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator } from "lucide-react";

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

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Assurance Emprunteur</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Simulez votre prêt immobilier.
        </p>
        
        <div className="max-w-4xl mx-auto">
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
        
        <div className="text-center mt-12">
          <p className="text-french-gray mb-6">
            Vous souhaitez faire baisser le coût de votre prêt immobilier ?
          </p>
          <Button asChild size="lg" className="bg-french-gold hover:bg-french-gold/90">
            <a href="https://calendly.com/agstrategiepatrimoine/30min?month=2025-07" target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssuranceEmprunteur;
