
import { Layers } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const PrivateEquity = () => {
  return (
    <SolutionDetailTemplate
      title="Private Equity"
      category="Placements Diversification"
      icon={<Layers className="h-10 w-10 text-french-gold" />}
      description="Le Private Equity permet d'investir dans des entreprises non cotées en bourse, offrant un potentiel de rendement supérieur aux placements traditionnels. Cette classe d'actifs s'adresse aux investisseurs expérimentés recherchant une diversification patrimoniale avancée."
      keyPoints={[
        "Investissement dans des entreprises non cotées à fort potentiel",
        "Participation au développement d'entreprises innovantes",
        "Horizon d'investissement de 5 à 10 ans",
        "Sélection rigoureuse des opportunités par des professionnels",
        "Accès via des fonds spécialisés ou investissement direct"
      ]}
      benefits={[
        "Potentiel de rendement supérieur aux marchés cotés",
        "Diversification avec des actifs non corrélés aux marchés publics",
        "Participation à la croissance de l'économie réelle",
        "Avantages fiscaux via l'assurance-vie ou les FCPR",
        "Expertise professionnelle dans la sélection et le suivi des investissements",
        "Création de valeur par l'accompagnement des dirigeants"
      ]}
    />
  );
};

export default PrivateEquity;
