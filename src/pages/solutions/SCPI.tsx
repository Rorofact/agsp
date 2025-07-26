
import { Building2 } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const SCPI = () => {
  return (
    <SolutionDetailTemplate
      title="SCPI"
      category="Immobilier"
      icon={<Building2 className="h-10 w-10 text-french-gold" />}
      description="Les Sociétés Civiles de Placement Immobilier (SCPI) sont des placements collectifs permettant d'investir dans l'immobilier sans contraintes de gestion. En achetant des parts de SCPI, vous devenez copropriétaire d'un parc immobilier diversifié et professionnel, géré par une société spécialisée."
      keyPoints={[
        "Investissement collectif permettant d'accéder à l'immobilier avec un ticket d'entrée réduit",
        "Diversification des actifs immobiliers (bureaux, commerces, logistique, santé)",
        "Délégation complète de la gestion à des experts du secteur",
        "Revenus trimestriels sous forme de dividendes (taux de distribution moyen entre 4% et 6%)",
        "Possibilité d'investir via l'assurance-vie ou en direct"
      ]}
      benefits={[
        "Accessibilité: investissement possible à partir de quelques milliers d'euros",
        "Mutualisation des risques grâce à la diversification du patrimoine",
        "Aucune contrainte de gestion: pas de recherche de locataires, pas de travaux à gérer",
        "Liquidité relative: possibilité de revendre ses parts sur le marché secondaire",
        "Rendement attractif comparé à d'autres placements financiers"
      ]}
    />
  );
};

export default SCPI;
