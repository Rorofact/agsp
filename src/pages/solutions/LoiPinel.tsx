
import { Building2 } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const LoiPinel = () => {
  return (
    <SolutionDetailTemplate
      title="Loi Pinel"
      category="Immobilier"
      icon={<Building2 className="h-10 w-10 text-french-gold" />}
      description="Le dispositif Pinel est un mécanisme de défiscalisation immobilière permettant aux investisseurs d'acquérir un bien immobilier neuf destiné à la location et de bénéficier d'une réduction d'impôt sur le revenu, sous certaines conditions de location et d'engagement de durée."
      keyPoints={[
        "Réduction d'impôt sur le revenu allant jusqu'à 12%, 18% ou 21% du prix d'acquisition (selon la durée d'engagement: 6, 9 ou 12 ans)",
        "Plafond d'investissement fixé à 300 000€ et 5 500€/m²",
        "Obligation de louer le bien comme résidence principale pendant la durée d'engagement",
        "Respect des plafonds de loyers et de ressources des locataires",
        "Localisation du bien dans des zones géographiques spécifiques (zones tendues)"
      ]}
      benefits={[
        "Économie d'impôt substantielle répartie sur la durée de l'engagement",
        "Constitution d'un patrimoine immobilier à crédit avec l'aide fiscale",
        "Complément de revenu grâce aux loyers perçus",
        "Sécurisation de l'investissement avec un bien neuf (garanties décennale, biennale, etc.)",
        "Possibilité de louer à un ascendant ou descendant (hors foyer fiscal)"
      ]}
    />
  );
};

export default LoiPinel;
