
import { Layers } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const OrMetauxPrecieux = () => {
  return (
    <SolutionDetailTemplate
      title="Or et métaux précieux"
      category="Placements Diversification"
      icon={<Layers className="h-10 w-10 text-french-gold" />}
      description="L'investissement dans l'or et les métaux précieux offre une protection contre l'inflation et une diversification efficace de votre patrimoine. Ces actifs tangibles constituent historiquement une valeur refuge en période d'incertitude économique."
      keyPoints={[
        "Investissement possible sous forme physique (lingots, pièces) ou via des ETF et certificats",
        "Valeur refuge traditionnelle pendant les périodes de crise économique ou d'inflation",
        "Faible corrélation avec les marchés actions et obligataires",
        "Absence de risque de contrepartie pour l'or physique",
        "Liquidité élevée et marché international"
      ]}
      benefits={[
        "Protection contre l'inflation et la dévaluation monétaire",
        "Diversification efficace du patrimoine grâce à sa faible corrélation avec les autres actifs",
        "Préservation du pouvoir d'achat à long terme",
        "Valeur universelle reconnue dans le monde entier",
        "Absence d'imposition sur la plus-value après 22 ans de détention pour l'or physique"
      ]}
    />
  );
};

export default OrMetauxPrecieux;
