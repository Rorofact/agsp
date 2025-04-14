
import { Leaf } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const FondsISR = () => {
  return (
    <SolutionDetailTemplate
      title="Fonds ISR"
      category="Investissements Responsables"
      icon={<Leaf className="h-10 w-10 text-french-gold" />}
      description="Les fonds d'Investissement Socialement Responsable (ISR) permettent d'investir dans des entreprises qui intègrent des critères environnementaux, sociaux et de gouvernance (ESG) dans leur stratégie, tout en recherchant une performance financière."
      keyPoints={[
        "Sélection d'entreprises selon des critères ESG (Environnementaux, Sociaux et de Gouvernance)",
        "Approche combinant performance financière et impact positif sur la société et l'environnement",
        "Label ISR garantissant la transparence et la qualité du processus d'investissement",
        "Disponible dans différentes enveloppes fiscales: assurance-vie, PEA, compte-titres",
        "Reporting régulier sur les impacts environnementaux et sociaux du portefeuille"
      ]}
      benefits={[
        "Alignement de vos investissements avec vos valeurs personnelles",
        "Contribution au développement d'une économie plus durable et responsable",
        "Potentiel de performance comparable aux investissements traditionnels",
        "Meilleure gestion des risques extra-financiers pouvant impacter la performance à long terme",
        "Diversification du portefeuille sur différents secteurs et géographies"
      ]}
    />
  );
};

export default FondsISR;
