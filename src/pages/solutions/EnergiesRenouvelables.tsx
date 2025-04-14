
import { Leaf } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const EnergiesRenouvelables = () => {
  return (
    <SolutionDetailTemplate
      title="Énergies renouvelables"
      category="Investissements Responsables"
      icon={<Leaf className="h-10 w-10 text-french-gold" />}
      description="L'investissement dans les énergies renouvelables permet de participer au financement de la transition énergétique tout en diversifiant son patrimoine et en recherchant des rendements attractifs à moyen et long terme."
      keyPoints={[
        "Participation au financement de projets d'énergies renouvelables (solaire, éolien, hydraulique, biomasse)",
        "Investissement possible via des fonds spécialisés, des groupements fonciers, ou en direct",
        "Revenus réguliers générés par la vente d'électricité, souvent avec des contrats à long terme",
        "Horizon d'investissement généralement de moyen à long terme (5 à 20 ans)",
        "Avantages fiscaux possibles selon le véhicule d'investissement choisi"
      ]}
      benefits={[
        "Contribution directe à la transition énergétique et à la réduction des émissions de CO2",
        "Rendements potentiellement attractifs et peu corrélés aux marchés financiers traditionnels",
        "Revenus réguliers et prévisibles grâce aux contrats d'achat d'électricité de longue durée",
        "Diversification du patrimoine sur une classe d'actifs réels et tangibles",
        "Protection contre l'inflation, l'électricité étant un bien de première nécessité"
      ]}
    />
  );
};

export default EnergiesRenouvelables;
