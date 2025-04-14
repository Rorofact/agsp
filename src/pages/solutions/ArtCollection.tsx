
import { Layers } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const ArtCollection = () => {
  return (
    <SolutionDetailTemplate
      title="Art et collection"
      category="Placements Diversification"
      icon={<Layers className="h-10 w-10 text-french-gold" />}
      description="L'investissement dans l'art et les objets de collection permet d'allier passion et placement financier. Ces actifs tangibles peuvent connaître une appréciation significative de leur valeur tout en procurant un plaisir esthétique au quotidien."
      keyPoints={[
        "Diversification patrimoniale via des actifs tangibles déconnectés des marchés financiers",
        "Investissement dans différentes catégories: art contemporain, art moderne, art ancien, photographie, mobilier, montres, vins, etc.",
        "Valorisation potentiellement significative à long terme pour les pièces de qualité",
        "Marché international avec différents niveaux d'accessibilité",
        "Possibilité d'investir via des fonds spécialisés ou en direct"
      ]}
      benefits={[
        "Diversification du patrimoine sur une classe d'actifs peu corrélée aux marchés financiers",
        "Protection contre l'inflation, les objets rares ayant tendance à prendre de la valeur avec le temps",
        "Plaisir esthétique et émotionnel de posséder des œuvres ou objets d'art",
        "Transmission d'un patrimoine culturel aux générations futures",
        "Possibilités d'optimisation fiscale via des structures dédiées ou des donations"
      ]}
    />
  );
};

export default ArtCollection;
