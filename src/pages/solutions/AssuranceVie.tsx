
import { TrendingUp } from 'lucide-react';
import SolutionDetailTemplate from '@/components/SolutionDetailTemplate';

const AssuranceVie = () => {
  return (
    <SolutionDetailTemplate
      title="Assurance-vie"
      category="Placements Financiers"
      icon={<TrendingUp className="h-10 w-10 text-french-gold" />}
      description="L'assurance-vie est un contrat d'épargne flexible qui permet de placer son argent sur différents supports financiers tout en bénéficiant d'avantages fiscaux importants, notamment en matière de transmission patrimoniale."
      keyPoints={[
        "Contrat d'épargne permettant d'investir sur des fonds en euros (capital garanti) et/ou des unités de compte (potentiel de performance plus élevé)",
        "Aucun plafond de versement",
        "Disponibilité permanente de l'épargne via des rachats partiels ou totaux",
        "Fiscalité avantageuse après 8 ans de détention",
        "Outil privilégié pour la transmission patrimoniale (hors succession dans certaines limites)"
      ]}
      benefits={[
        "Souplesse d'utilisation: versements libres ou programmés, rachats possibles à tout moment",
        "Diversification possible entre fonds sécuritaires et supports dynamiques",
        "Abattement fiscal annuel de 4 600€ (célibataire) ou 9 200€ (couple) sur les gains après 8 ans",
        "Transmission facilitée aux bénéficiaires désignés (hors cadre successoral)",
        "Exonération totale ou partielle des droits de succession"
      ]}
    />
  );
};

export default AssuranceVie;
