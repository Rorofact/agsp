
import { TrendingUp } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const ComptesTitres = () => {
  return (
    <SolutionDetailTemplate
      title="Comptes titres"
      category="Placements Financiers"
      icon={<TrendingUp className="h-10 w-10 text-french-gold" />}
      description="Le Compte-Titres Ordinaire (CTO) est un compte d'investissement permettant d'accéder à l'ensemble des marchés financiers sans restriction géographique ni de montant. Il offre une grande liberté d'investissement mais ne bénéficie pas d'avantages fiscaux spécifiques."
      keyPoints={[
        "Accès à tous les marchés financiers mondiaux et à tous types d'instruments financiers (actions, obligations, ETF, OPCVM, produits structurés…)",
        "Aucune limite de versement ou de durée",
        "Disponibilité totale des fonds à tout moment",
        "Possibilité d'ouvrir un compte individuel, joint ou en démembrement de propriété",
        "Transmission possible dans le cadre successoral"
      ]}
      benefits={[
        "Liberté totale d'investissement sans restrictions géographiques ou d'instruments",
        "Flexibilité d'utilisation sans contrainte de durée ou de plafond",
        "Possibilité de détenir des titres non éligibles aux autres enveloppes fiscales",
        "Stratégies de gestion diversifiées adaptées à tous les profils de risque",
        "Option de nantissement pour garantir un crédit"
      ]}
    />
  );
};

export default ComptesTitres;
