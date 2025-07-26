
import { TrendingUp } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const PEA = () => {
  return (
    <SolutionDetailTemplate
      title="PEA"
      category="Placements Financiers"
      icon={<TrendingUp className="h-10 w-10 text-french-gold" />}
      description="Le Plan d'Épargne en Actions (PEA) est une enveloppe fiscale permettant d'investir en bourse dans des entreprises européennes tout en bénéficiant d'une fiscalité avantageuse après 5 ans de détention."
      keyPoints={[
        "Investissement en actions européennes et OPCVM éligibles",
        "Plafond de versements limité à 150 000€ (PEA classique)",
        "Exonération d'impôt sur le revenu (hors prélèvements sociaux) après 5 ans de détention",
        "Pas de durée maximum de détention",
        "Possibilité de retirer des fonds après 5 ans sans clôture du plan"
      ]}
      benefits={[
        "Fiscalité attractive après 5 ans: exonération d'impôt sur les plus-values (17,2% de prélèvements sociaux uniquement)",
        "Diversification possible sur différentes entreprises et secteurs européens",
        "Adaptabilité aux différents profils d'investisseurs grâce aux OPCVM éligibles",
        "Possibilité de convertir le capital en rente viagère défiscalisée",
        "Transmission du PEA possible au conjoint en cas de décès sans perte de l'antériorité fiscale"
      ]}
    />
  );
};

export default PEA;
