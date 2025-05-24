
import { Layers } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const Vin = () => {
  return (
    <SolutionDetailTemplate
      title="Vin"
      category="Placements Diversification"
      icon={<Layers className="h-10 w-10 text-french-gold" />}
      description="L'investissement dans les grands crus offre une diversification patrimoniale unique, alliant passion et potentiel de valorisation. Les vins de prestige constituent une classe d'actifs alternative recherchée par les investisseurs avisés."
      keyPoints={[
        "Investissement dans les grands crus classés (Bordeaux, Bourgogne, Champagne)",
        "Stockage professionnel en conditions optimales",
        "Marché mondial en croissance constante",
        "Actif tangible et rare par nature",
        "Fiscalité avantageuse pour les particuliers"
      ]}
      benefits={[
        "Diversification de portefeuille avec une classe d'actifs décorelée des marchés financiers",
        "Potentiel de plus-value attractif sur le long terme",
        "Plaisir de posséder des vins d'exception",
        "Transmission patrimoniale facilitée",
        "Exonération d'impôt sur les plus-values pour les particuliers (sous conditions)",
        "Liquidité croissante grâce aux plateformes spécialisées"
      ]}
    />
  );
};

export default Vin;
