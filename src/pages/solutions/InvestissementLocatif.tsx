
import { Building2 } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const InvestissementLocatif = () => {
  return (
    <SolutionDetailTemplate
      title="Investissement Locatif"
      category="Immobilier"
      icon={<Building2 className="h-10 w-10 text-french-gold" />}
      description="L'investissement locatif est une stratégie d'investissement immobilier qui consiste à acquérir un bien dans le but de le louer et de percevoir des revenus réguliers sous forme de loyers. Cette approche permet de se constituer un patrimoine solide et durable tout en bénéficiant de revenus complémentaires."
      keyPoints={[
        "Acquisition d'un bien immobilier (appartement, maison, local commercial) pour le mettre en location",
        "Perception de loyers mensuels qui peuvent couvrir tout ou partie du crédit immobilier",
        "Constitution d'un patrimoine transmissible qui s'apprécie généralement avec le temps",
        "Possibilité de bénéficier de dispositifs fiscaux avantageux selon le type d'investissement"
      ]}
      benefits={[
        "Revenu complémentaire régulier grâce aux loyers perçus",
        "Protection contre l'inflation, les loyers étant généralement indexés sur l'IRL",
        "Effet de levier du crédit permettant d'acquérir un bien d'une valeur supérieure à votre apport",
        "Diversification patrimoniale via un actif tangible",
        "Possibilité d'optimisation fiscale (déduction des charges, amortissements, dispositifs spécifiques)"
      ]}
    />
  );
};

export default InvestissementLocatif;
