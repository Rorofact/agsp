
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, Repeat } from "lucide-react";

const AssuranceEmprunteur = () => {
  const [pret, setPret] = useState({
    montant: 200000,
    duree: 20,
    taux: 3.5,
    tauxAssurance: 0.36
  });
  
  const [rachat, setRachat] = useState({
    montantRestant: 150000,
    dureeRestante: 15,
    tauxActuel: 4.2,
    tauxNouveauPret: 3.2,
    tauxAssuranceActuel: 0.45,
    tauxAssuranceNouveau: 0.30
  });

  // États pour stocker les résultats des simulations
  const [resultatPret, setResultatPret] = useState<{
    mensualite: number;
    coutCredit: number;
    coutAssurance: number;
    tauxEffectifGlobal: number;
  } | null>(null);

  const [resultatRachat, setResultatRachat] = useState<{
    economiesMensuelles: number;
    economiesTotales: number;
    economieAssurance: number;
    economieGlobale: number;
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

  const handleSimulationRachat = () => {
    const mensualiteActuelle = calculerMensualite(rachat.montantRestant, rachat.tauxActuel, rachat.dureeRestante);
    const mensualiteNouvelle = calculerMensualite(rachat.montantRestant, rachat.tauxNouveauPret, rachat.dureeRestante);
    
    const coutAssuranceActuel = calculerCoutAssurance(rachat.montantRestant, rachat.tauxAssuranceActuel, rachat.dureeRestante);
    const coutAssuranceNouveau = calculerCoutAssurance(rachat.montantRestant, rachat.tauxAssuranceNouveau, rachat.dureeRestante);
    
    const economiesMensuelles = mensualiteActuelle - mensualiteNouvelle;
    const economieAssurance = coutAssuranceActuel - coutAssuranceNouveau;
    
    setResultatRachat({
      economiesMensuelles: economiesMensuelles,
      economiesTotales: economiesMensuelles * rachat.dureeRestante * 12,
      economieAssurance: economieAssurance,
      economieGlobale: economiesMensuelles * rachat.dureeRestante * 12 + economieAssurance
    });
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Assurance Emprunteur</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Simulez votre prêt immobilier ou estimez les économies potentielles avec un rachat de prêt.
        </p>
        
        <Tabs defaultValue="simulation" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="simulation" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              <Calculator className="mr-2 h-4 w-4" />
              Simulation de prêt
            </TabsTrigger>
            <TabsTrigger value="rachat" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              <Repeat className="mr-2 h-4 w-4" />
              Rachat de prêt
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="simulation" className="space-y-8">
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
                
                <Button 
                  onClick={handleSimulationPret} 
                  className="w-full bg-french-navy hover:bg-french-navy/90"
                >
                  Simuler mon prêt <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
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
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rachat" className="space-y-8">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="montantRestant">Capital restant dû</Label>
                  <Input
                    id="montantRestant"
                    type="number"
                    value={rachat.montantRestant}
                    onChange={(e) => setRachat({...rachat, montantRestant: Number(e.target.value)})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dureeRestante">Durée restante (années)</Label>
                  <Input
                    id="dureeRestante"
                    type="number"
                    min="1"
                    max="30"
                    value={rachat.dureeRestante}
                    onChange={(e) => setRachat({...rachat, dureeRestante: Number(e.target.value)})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tauxActuel">Taux actuel (%)</Label>
                  <Input
                    id="tauxActuel"
                    type="number"
                    step="0.01"
                    value={rachat.tauxActuel}
                    onChange={(e) => setRachat({...rachat, tauxActuel: Number(e.target.value)})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tauxNouveauPret">Taux nouveau prêt (%)</Label>
                  <Input
                    id="tauxNouveauPret"
                    type="number"
                    step="0.01"
                    value={rachat.tauxNouveauPret}
                    onChange={(e) => setRachat({...rachat, tauxNouveauPret: Number(e.target.value)})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tauxAssuranceActuel">Taux assurance actuel (%)</Label>
                  <Input
                    id="tauxAssuranceActuel"
                    type="number"
                    step="0.01"
                    value={rachat.tauxAssuranceActuel}
                    onChange={(e) => setRachat({...rachat, tauxAssuranceActuel: Number(e.target.value)})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tauxAssuranceNouveau">Taux assurance nouveau (%)</Label>
                  <Input
                    id="tauxAssuranceNouveau"
                    type="number"
                    step="0.01"
                    value={rachat.tauxAssuranceNouveau}
                    onChange={(e) => setRachat({...rachat, tauxAssuranceNouveau: Number(e.target.value)})}
                  />
                </div>
                
                <Button 
                  onClick={handleSimulationRachat} 
                  className="w-full bg-french-navy hover:bg-french-navy/90"
                >
                  Calculer mes économies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {resultatRachat && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-french-navy mb-3">Économies potentielles</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Économie mensuelle:</span>
                        <span className="font-semibold">{resultatRachat.economiesMensuelles.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Économie totale sur la durée restante:</span>
                        <span className="font-semibold">{resultatRachat.economiesTotales.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Économie sur l'assurance:</span>
                        <span className="font-semibold">{resultatRachat.economieAssurance.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Économie globale:</span>
                        <span className="font-semibold">{resultatRachat.economieGlobale.toFixed(2)} €</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-french-gray mb-6">
            Besoin d'un accompagnement personnalisé pour votre projet immobilier ?
          </p>
          <Button asChild size="lg" className="bg-french-gold hover:bg-french-gold/90">
            <a href="/rendez-vous">Prendre rendez-vous</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssuranceEmprunteur;
