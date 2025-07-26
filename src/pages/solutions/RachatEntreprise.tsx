
import { Briefcase } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const RachatEntreprise = () => {
  return (
    <SolutionDetailTemplate
      title="Rachat d'entreprise"
      category="Opportunités Professionnelles"
      icon={<Briefcase className="h-10 w-10 text-french-gold" />}
      description="Le rachat d'entreprise est une stratégie d'investissement permettant d'acquérir une société existante plutôt que de partir de zéro. Notre accompagnement vous aide à structurer l'opération de façon optimale sur les plans juridique, fiscal et financier."
      keyPoints={[
        "Analyse de la cible et évaluation de sa valeur",
        "Structuration du montage financier (LBO, financement bancaire, apport personnel)",
        "Optimisation fiscale de l'acquisition (holding, intégration fiscale)",
        "Due diligence et sécurisation juridique de la transaction",
        "Stratégie post-acquisition et intégration de l'entreprise rachetée"
      ]}
      benefits={[
        "Reprise d'une activité déjà établie avec une clientèle existante",
        "Effet de levier financier permettant d'acquérir une entreprise d'une valeur supérieure à votre apport",
        "Optimisation fiscale de l'acquisition et de la future cession",
        "Sécurisation juridique de l'opération et limitation des risques",
        "Accompagnement dans les négociations avec les vendeurs et les financeurs"
      ]}
    />
  );
};

export default RachatEntreprise;
