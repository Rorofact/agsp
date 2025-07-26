
import { Building2 } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const ImmobilierDefiscalisant = () => {
  return (
    <SolutionDetailTemplate
      title="Immobilier défiscalisant"
      category="Immobilier"
      icon={<Building2 className="h-10 w-10 text-french-gold" />}
      description="Les dispositifs de défiscalisation immobilière permettent de réduire significativement votre imposition tout en constituant un patrimoine immobilier de qualité. Ces investissements combinent avantages fiscaux et potentiel de valorisation patrimoniale."
      keyPoints={[
        "Dispositif Denormandie : rénovation de logements anciens dans les petites villes revitalisées",
        "Loi Malraux : restauration de monuments historiques et secteurs sauvegardés",
        "Monuments Historiques : investissement dans des biens d'exception avec déficit foncier illimité",
        "Réductions d'impôts substantielles selon le dispositif choisi",
        "Constitution d'un patrimoine immobilier de prestige"
      ]}
      benefits={[
        "Réduction d'impôt immédiate sur plusieurs années",
        "Déficit foncier imputable sur le revenu global (Monuments Historiques)",
        "Valorisation patrimoniale des biens restaurés",
        "Contribution à la préservation du patrimoine français",
        "Diversification de votre portefeuille d'investissement",
        "Transmission facilitée aux héritiers"
      ]}
    />
  );
};

export default ImmobilierDefiscalisant;
