import SolutionDetailTemplate from "@/components/SolutionDetailTemplate";
import { TrendingUp, Shield, Users, Euro, Building2, Clock } from "lucide-react";

const ContratCapitalisationData = {
  title: "Contrat de Capitalisation",
  description: "Le contrat de capitalisation est un placement financier similaire à l'assurance-vie mais sans lien avec la personne de l'assuré. Il offre une grande flexibilité dans la gestion et la transmission de votre épargne.",
  icon: <TrendingUp className="h-10 w-10 text-french-gold" />,
  category: "Placements Financiers",
  keyPoints: [
    "Contrat cessible et transmissible de son vivant",
    "Fiscalité des plus-values mobilières après 8 ans",
    "Possibilité de nantissement pour garantir un emprunt",
    "Gestion libre ou déléguée selon vos préférences",
    "Idéal pour les investisseurs souhaitant une approche patrimoniale",
    "Complément parfait à l'assurance-vie dans une stratégie globale"
  ],
  benefits: [
    "Fiscalité attractive après 8 ans avec abattement",
    "Transmission facilitée avec possibilité de donation",
    "Souplesse totale de gestion et de rachats",
    "Large diversification d'investissement possible",
    "Aucune durée minimale de détention",
    "Outil d'optimisation patrimoniale polyvalent"
  ]
};

const ContratCapitalisation = () => {
  return <SolutionDetailTemplate {...ContratCapitalisationData} />;
};

export default ContratCapitalisation;