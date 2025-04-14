
import { Briefcase } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const CreationEntreprise = () => {
  return (
    <SolutionDetailTemplate
      title="Création d'entreprise"
      category="Opportunités Professionnelles"
      icon={<Briefcase className="h-10 w-10 text-french-gold" />}
      description="La création d'entreprise représente une opportunité d'investissement dans votre propre projet professionnel. Notre accompagnement couvre les aspects juridiques, fiscaux et patrimoniaux pour optimiser la structure de votre entreprise et sécuriser votre patrimoine personnel."
      keyPoints={[
        "Conseil sur le choix de la structure juridique adaptée à votre projet (SASU, EURL, SAS, etc.)",
        "Optimisation fiscale dès la création de l'entreprise",
        "Stratégie de rémunération du dirigeant (salaire vs dividendes)",
        "Protection du patrimoine personnel et familial",
        "Accompagnement dans les relations avec les investisseurs et partenaires financiers"
      ]}
      benefits={[
        "Création de valeur patrimoniale à travers le développement de votre entreprise",
        "Optimisation fiscale grâce à une structure adaptée à vos objectifs",
        "Sécurisation de votre patrimoine personnel face aux risques entrepreneuriaux",
        "Préparation de la transmission ou cession future de l'entreprise",
        "Accompagnement global intégrant votre situation personnelle et professionnelle"
      ]}
    />
  );
};

export default CreationEntreprise;
