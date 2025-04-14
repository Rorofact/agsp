
import { Layers } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const ForetsTerresAgricoles = () => {
  return (
    <SolutionDetailTemplate
      title="Forêts et terres agricoles"
      category="Placements Diversification"
      icon={<Layers className="h-10 w-10 text-french-gold" />}
      description="L'investissement dans les forêts et terres agricoles permet d'acquérir un patrimoine foncier tangible, productif et écologiquement responsable. Ces actifs offrent une diversification intéressante avec une valorisation stable à long terme."
      keyPoints={[
        "Acquisition de parcelles forestières ou agricoles en direct ou via des groupements forestiers (GF) ou fonciers agricoles (GFA)",
        "Rendement annuel modéré mais régulier (1-3% pour les forêts, 2-4% pour les terres agricoles)",
        "Valorisation du capital à long terme",
        "Avantages fiscaux spécifiques (réduction d'impôt, exonération partielle d'IFI)",
        "Actif tangible transmissible aux générations futures"
      ]}
      benefits={[
        "Placement stable et peu volatile, déconnecté des marchés financiers",
        "Revenus réguliers issus de l'exploitation (coupes de bois, fermages)",
        "Avantages fiscaux attractifs (réduction d'impôt de 25% pour les investissements en GF)",
        "Impact positif sur l'environnement (séquestration carbone, préservation de la biodiversité)",
        "Protection contre l'inflation, la terre étant une ressource limitée dont la valeur tend à augmenter sur le long terme"
      ]}
    />
  );
};

export default ForetsTerresAgricoles;
