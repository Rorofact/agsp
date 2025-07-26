import SolutionDetailTemplate from "@/components/SolutionDetailTemplate";
import { TrendingUp, Shield, PiggyBank, FileCheck, Calculator, Gift } from "lucide-react";

const PERData = {
  title: "Plan d'Épargne Retraite (PER)",
  description: "Le Plan d'Épargne Retraite (PER) est un produit d'épargne retraite qui vous permet de vous constituer un capital ou une rente pour votre retraite tout en bénéficiant d'avantages fiscaux immédiats.",
  icon: <TrendingUp className="h-10 w-10 text-french-gold" />,
  category: "Placements Financiers",
  keyPoints: [
    "Déduction fiscale des versements jusqu'à 10% des revenus professionnels",
    "Plafond de versement pouvant atteindre plusieurs dizaines de milliers d'euros par an",
    "Choix entre sortie en capital ou en rente à la retraite",
    "Possibilité de transférer d'anciens contrats retraite (PERP, Madelin...)",
    "Gestion libre, pilotée ou à horizon disponible",
    "Frais réduits et transparents sur les contrats que nous sélectionnons"
  ],
  benefits: [
    "Avantages fiscaux immédiats sur les versements",
    "Constitution d'un complément de revenus pour la retraite",
    "Flexibilité des versements selon vos possibilités",
    "Large choix de supports d'investissement",
    "Transmission facilitée à vos bénéficiaires",
    "Déblocage anticipé possible en cas d'accident de la vie"
  ]
};

const PER = () => {
  return <SolutionDetailTemplate {...PERData} />;
};

export default PER;