import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, CalendarIcon, Clock, Share2 } from 'lucide-react';
import NotFound from '../NotFound';

interface BlogArticleProps {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
}

// Database of blog posts (in a real app, this would come from a backend)
const blogData: BlogArticleProps[] = [
  {
    id: 1,
    title: "Les Fondamentaux de l'Investissement Immobilier en 2025",
    excerpt: "Découvrez les bases essentielles pour réussir vos investissements immobiliers dans le contexte économique actuel.",
    content: `<p>L'investissement immobilier reste l'un des piliers fondamentaux de la création de patrimoine en 2025, malgré un contexte économique en constante évolution. Pour réussir dans ce domaine, il est essentiel de maîtriser certains principes clés qui permettront d'optimiser vos rendements tout en minimisant les risques.</p>

<br><br>

<h2>1. L'importance de l'emplacement</h2>
<p>La localisation reste le critère numéro un de tout investissement immobilier réussi. En 2025, les zones urbaines dynamiques et les villes moyennes en plein essor économique offrent les meilleures perspectives. Recherchez les quartiers bénéficiant de projets d'infrastructures, de transports en commun efficaces et d'un tissu économique diversifié.</p>

<br><br>

<h2>2. Comprendre les cycles du marché</h2>
<p>Le marché immobilier évolue en cycles, alternant périodes haussières et baissières. La capacité à identifier où nous nous situons dans ce cycle est un avantage majeur pour tout investisseur. En 2025, nous observons une stabilisation dans plusieurs régions après les turbulences post-COVID, créant des opportunités pour les investisseurs avisés.</p>

<br><br>

<h2>3. La diversification du portefeuille immobilier</h2>
<p>Ne mettez pas tous vos œufs dans le même panier. La diversification peut s'opérer à plusieurs niveaux : types de biens (résidentiel, commercial, bureaux), localisations géographiques, ou encore stratégies d'investissement (locatif traditionnel, location saisonnière, colocation). Cette approche permet de réduire les risques et d'optimiser la performance globale de votre patrimoine.</p>

<br><br>

<h2>4. L'analyse financière rigoureuse</h2>
<p>Avant tout investissement, réalisez une analyse financière complète incluant tous les frais (acquisition, travaux, gestion, fiscalité) et les revenus potentiels. Le calcul du rendement locatif net doit être votre boussole, avec une attention particulière à la capacité du bien à générer un cash-flow positif.</p>

<br><br>

<h2>5. L'optimisation fiscale</h2>
<p>La fiscalité immobilière offre de nombreuses opportunités d'optimisation, mais nécessite une stratégie adaptée à votre situation personnelle. Les dispositifs comme le déficit foncier, la loi Pinel (dans sa version 2025), ou encore le statut LMNP peuvent significativement améliorer la rentabilité de vos investissements.</p>

<br><br>

<h2>6. Le financement stratégique</h2>
<p>Dans un environnement où les taux d'intérêt connaissent une relative stabilisation après plusieurs années de hausses, optimiser votre financement devient crucial. L'effet de levier du crédit immobilier reste un atout majeur, à condition de structurer votre emprunt de manière judicieuse (durée, type de taux, assurance).</p>

<br><br>

<h2>7. L'anticipation des tendances sociétales</h2>
<p>Les besoins en logement évoluent avec les transformations de la société. Le développement du télétravail, la quête d'espaces extérieurs, et la sensibilité croissante aux performances énergétiques sont autant de facteurs à intégrer dans votre stratégie d'investissement pour assurer la pérennité de vos revenus locatifs.</p>

<br><br>

<h2>Conclusion</h2>
<p>Investir dans l'immobilier en 2025 requiert une approche méthodique, informée et adaptative. En combinant une analyse approfondie du marché, une gestion financière rigoureuse et une vision à long terme, vous maximiserez vos chances de succès et construirez un patrimoine immobilier solide et rentable. N'oubliez pas que l'accompagnement par des professionnels du secteur peut s'avérer déterminant pour naviguer efficacement dans la complexité du marché actuel.</p>`,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "12 avril 2025",
    readTime: "8 min",
    category: "Immobilier",
    tags: ["Investissement", "Immobilier", "Finances", "Patrimoine"]
  },
  {
    id: 2,
    title: "Comment Optimiser sa Fiscalité en France",
    excerpt: "Stratégies légales et astuces pour réduire votre imposition et maximiser votre patrimoine.",
    content: `<p>L'optimisation fiscale est un aspect essentiel de la gestion de patrimoine en France. Loin d'être une pratique d'évitement fiscal, elle consiste à utiliser intelligemment les dispositifs légaux pour réduire votre charge d'impôts tout en contribuant à l'économie nationale. Voici un guide des stratégies les plus efficaces en 2025.</p>

<br><br>

<h2>Comprendre votre situation fiscale</h2>
<p>Avant d'envisager toute stratégie d'optimisation, il est crucial de bien comprendre votre situation fiscale globale : tranches d'imposition, revenus imposables, charges déductibles, et crédits d'impôt auxquels vous pourriez prétendre. Cette vision d'ensemble vous permettra d'identifier les leviers d'action les plus pertinents pour votre cas personnel.</p>

<br><br>

<h2>Les investissements défiscalisants</h2>

<h3>L'immobilier défiscalisant</h3>
<p>Les dispositifs comme la loi Pinel (dans sa version 2025), le Denormandie ou encore le Malraux offrent des réductions d'impôts substantielles en contrepartie d'investissements immobiliers répondant à certains critères. Ces mécanismes permettent non seulement d'alléger votre facture fiscale mais aussi de constituer un patrimoine immobilier générateur de revenus complémentaires.</p>

<br><br>

<h3>Les placements financiers défiscalisés</h3>
<p>Le Plan d'Épargne en Actions (PEA) et l'Assurance-vie restent des piliers de l'optimisation fiscale pour vos investissements financiers. Le PEA offre une exonération d'impôt sur les plus-values après 5 ans (hors prélèvements sociaux), tandis que l'assurance-vie bénéficie d'une fiscalité avantageuse sur les gains après 8 ans de détention.</p>

<br><br>

<h2>Optimiser sa fiscalité professionnelle</h2>

<h3>Le choix du statut juridique</h3>
<p>Pour les entrepreneurs et professions libérales, le choix du statut juridique est déterminant dans l'optimisation fiscale. La comparaison entre entreprise individuelle, EURL, SASU ou SAS doit prendre en compte non seulement l'impôt sur le revenu ou l'impôt sur les sociétés, mais aussi les charges sociales et la flexibilité de rémunération.</p>

<br><br>

<h3>La Location Meublée Non Professionnelle (LMNP)</h3>
<p>Le statut LMNP permet de générer des revenus locatifs tout en bénéficiant d'avantages fiscaux significatifs, notamment grâce à l'amortissement comptable du bien qui vient réduire, voire annuler, la base imposable des loyers perçus pendant de nombreuses années.</p>

<br><br>

<h2>Stratégies d'optimisation avancées</h2>

<h3>Le démembrement de propriété</h3>
<p>Cette technique consiste à séparer la nue-propriété d'un bien de son usufruit, permettant d'optimiser la transmission patrimoniale tout en réduisant l'assiette taxable, notamment pour l'IFI (Impôt sur la Fortune Immobilière) et les droits de succession.</p>

<br><br>

<h3>Les donations et pactes familiaux</h3>
<p>La planification des donations, le recours aux abattements renouvelables tous les 15 ans, et la mise en place de pactes comme le Pacte Dutreil pour les entreprises familiales sont des stratégies efficaces pour optimiser la transmission de patrimoine tout en réduisant considérablement les droits de succession.</p>

<br><br>

<h2>Conseils pratiques</h2>

<p>1. <strong>Anticipation</strong> : La plupart des stratégies d'optimisation fiscale nécessitent d'être mises en place avant la fin de l'année fiscale ou plusieurs années avant la transmission du patrimoine.</p>

<br>

<p>2. <strong>Personnalisation</strong> : Il n'existe pas de solution universelle. Votre stratégie d'optimisation doit être adaptée à votre situation personnelle, vos objectifs et votre horizon de temps.</p>

<br>

<p>3. <strong>Équilibre risque/avantage</strong> : Les investissements défiscalisants ne doivent pas être choisis uniquement pour leur avantage fiscal, mais aussi pour leur qualité intrinsèque et leur cohérence avec votre stratégie patrimoniale globale.</p>

<br>

<p>4. <strong>Accompagnement professionnel</strong> : La complexité et l'évolution constante de la fiscalité française rend souvent indispensable le recours à un conseiller en gestion de patrimoine ou un expert-comptable pour optimiser efficacement votre situation.</p>

<br><br>

<h2>Conclusion</h2>

<p>L'optimisation fiscale est un exercice d'équilibriste qui demande connaissance, anticipation et prudence. En combinant les différents dispositifs légaux à votre disposition et en adaptant votre stratégie à l'évolution de votre situation personnelle et professionnelle, vous pourrez significativement réduire votre charge fiscale tout en construisant et préservant votre patrimoine sur le long terme.</p>`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "5 avril 2025",
    readTime: "10 min",
    category: "Fiscalité",
    tags: ["Impôts", "Défiscalisation", "Patrimoine", "Finance personnelle"]
  },
  {
    id: 3,
    title: "Les Erreurs à Éviter dans la Gestion de Portefeuille",
    excerpt: "Analyse des pièges courants qui peuvent compromettre vos performances financières à long terme.",
    content: `<p>La gestion d'un portefeuille d'investissement est un exercice qui requiert méthode, discipline et connaissance des marchés financiers. Malheureusement, de nombreux investisseurs, qu'ils soient novices ou expérimentés, commettent régulièrement des erreurs qui peuvent sérieusement compromettre leurs performances à long terme. Voici les principales erreurs à éviter pour optimiser la gestion de votre portefeuille.</p>

<br><br>

<h2>1. L'absence de stratégie claire</h2>
<p>L'erreur la plus fondamentale consiste à investir sans avoir défini au préalable une stratégie cohérente. Votre stratégie d'investissement doit être alignée avec vos objectifs financiers, votre horizon temporel et votre tolérance au risque. Sans cette boussole, vous risquez de prendre des décisions impulsives et incohérentes qui compromettront vos performances à long terme.</p>

<br><br>

<h2>2. Le manque de diversification</h2>
<p>Concentrer ses investissements sur un nombre limité d'actifs ou de secteurs expose inutilement votre portefeuille à des risques spécifiques qui pourraient être atténués par une diversification judicieuse. Une allocation équilibrée entre différentes classes d'actifs (actions, obligations, immobilier, etc.), zones géographiques et secteurs économiques permet de réduire la volatilité globale de votre portefeuille tout en optimisant son rendement ajusté du risque.</p>

<br><br>

<h2>3. La surréaction aux fluctuations du marché</h2>
<p>Les marchés financiers sont par nature volatils, alternant périodes haussières et corrections plus ou moins sévères. Réagir émotionnellement à ces fluctuations en vendant lors des baisses (par peur) ou en achetant lors des hausses (par cupidité) est une erreur classique qui détruit de la valeur à long terme. La discipline et la patience sont des vertus essentielles en matière d'investissement.</p>

<br><br>

<h2>4. L'obsession du market timing</h2>
<p>Tenter de prévoir systématiquement les mouvements du marché pour acheter au plus bas et vendre au plus haut est une stratégie illusoire, même pour les professionnels les plus aguerris. Des décennies d'études académiques ont démontré que le "market timing" est inefficace sur le long terme et qu'une approche d'investissement régulier et discipliné (comme le dollar cost averaging) produit généralement de meilleurs résultats.</p>

<br><br>

<h2>5. La négligence des frais et de la fiscalité</h2>
<p>Les frais de gestion, commissions de transaction et impacts fiscaux peuvent significativement éroder la performance de votre portefeuille sur le long terme. Une attention insuffisante portée à ces aspects peut transformer une stratégie d'investissement théoriquement solide en une performance médiocre en pratique. Privilégiez les véhicules d'investissement à faibles coûts et optimisez la structure fiscale de votre portefeuille.</p>

<br><br>

<h2>6. Le biais de confirmation</h2>
<p>Ce biais cognitif nous pousse à rechercher et à accorder plus de poids aux informations qui confirment nos croyances préexistantes, tout en ignorant ou minimisant les données contradictoires. En investissement, ce biais peut nous conduire à rester attachés à des positions perdantes ou à ignorer des signes d'alerte évidents. Cultivez une pensée critique et remettez régulièrement en question vos hypothèses d'investissement.</p>

<br><br>

<h2>7. L'absence de rééquilibrage</h2>
<p>Au fil du temps, les performances divergentes des différents actifs de votre portefeuille modifient votre allocation initiale, potentiellement augmentant votre exposition au risque. L'absence de rééquilibrage périodique pour revenir à votre allocation cible peut compromettre votre stratégie d'investissement à long terme et vous exposer à des risques non désirés, particulièrement à l'approche d'objectifs financiers importants.</p>

<br><br>

<h2>8. La négligence du facteur inflation</h2>
<p>L'inflation érode progressivement le pouvoir d'achat de votre capital. Ne pas tenir compte de ce facteur dans votre stratégie d'investissement peut vous conduire à des choix trop conservateurs qui, malgré leur apparente sécurité, entraînent une perte de valeur réelle sur le long terme. Votre portefeuille doit inclure des actifs capables de générer un rendement supérieur à l'inflation pour préserver et accroître votre pouvoir d'achat.</p>

<br><br>

<h2>9. L'excès de confiance</h2>
<p>Après une série de succès d'investissement, il est facile de surestimer ses compétences et de sous-estimer le rôle de la chance. Cet excès de confiance peut conduire à une prise de risque excessive ou à une concentration imprudente du portefeuille. Gardez toujours à l'esprit les limites de vos connaissances et compétences en matière d'investissement.</p>

<br><br>

<h2>Conclusion</h2>
<p>La gestion efficace d'un portefeuille d'investissement repose autant sur les erreurs que vous évitez que sur les décisions positives que vous prenez. En restant vigilant face à ces pièges courants et en cultivant une approche disciplinée, méthodique et rationnelle, vous maximiserez vos chances de succès dans la construction et la préservation de votre patrimoine financier sur le long terme.</p>`,
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "28 mars 2025",
    readTime: "7 min",
    category: "Investissement",
    tags: ["Portefeuille", "Bourse", "Investissement", "Risques"]
  },
  {
    id: 4,
    title: "La Loi Pinel 2025 : Ce qui Change pour les Investisseurs",
    excerpt: "Toutes les modifications du dispositif Pinel et comment les intégrer dans votre stratégie d'investissement.",
    content: `<p>Le dispositif Pinel, pilier de l'investissement immobilier défiscalisant en France depuis plusieurs années, connaît en 2025 des évolutions significatives que tout investisseur doit maîtriser pour optimiser sa stratégie patrimoniale. Ces changements s'inscrivent dans une tendance de fond visant à recentrer le dispositif sur les logements les plus qualitatifs et écologiquement performants.</p>

<br><br>

<h2>Rappel du dispositif Pinel</h2>
<p>Le dispositif Pinel permet aux investisseurs d'obtenir une réduction d'impôt en contrepartie de l'acquisition ou la construction d'un logement neuf destiné à la location. L'avantage fiscal est conditionné au respect de plafonds de loyers et de ressources des locataires, ainsi qu'à un engagement de location sur une durée déterminée.</p>

<br><br>

<h2>Les principales modifications en 2025</h2>

<h3>1. Évolution des taux de réduction d'impôt</h3>
<p>En 2025, les taux de réduction d'impôt du dispositif Pinel classique poursuivent leur diminution progressive engagée depuis 2023 :</p>
<ul>
    <li>Engagement sur 6 ans : 10,5% (contre 12% en 2023)</li>
    <li>Engagement sur 9 ans : 15% (contre 18% en 2023)</li>
    <li>Engagement sur 12 ans : 17,5% (contre 21% en 2023)</li>
</ul>

<p>En revanche, le dispositif Pinel+ (ou "Pinel renforcé") maintient des taux plus attractifs pour les logements respectant des critères de qualité supérieurs :</p>
<ul>
    <li>Engagement sur 6 ans : 12%</li>
    <li>Engagement sur 9 ans : 18%</li>
    <li>Engagement sur 12 ans : 21%</li>
</ul>

<h3>2. Critères de qualification pour le Pinel+</h3>
<p>Pour bénéficier des taux avantageux du Pinel+, les logements doivent désormais répondre à des exigences renforcées :</p>
<ul>
    <li>Respect de la RE2020 avec un seuil de performance énergétique renforcé (classe A ou A+ du DPE)</li>
    <li>Surface minimale par typologie (28 m² pour un T1, 45 m² pour un T2, 62 m² pour un T3, etc.)</li>
    <li>Présence d'espaces extérieurs privatifs (balcon, terrasse ou jardin) d'au moins 4 m² pour les T2 et plus</li>
    <li>Double exposition pour les logements à partir du T3</li>
    <li>Niveau de qualité d'usage selon la méthode SÉQUÉ (Surface, Équipement, Qualité d'Usage Écoresponsable)</li>
</ul>

<h3>3. Recentrage géographique</h3>
<p>Le dispositif Pinel se concentre désormais exclusivement sur les zones tendues (zones A, A bis et B1) où le déséquilibre entre l'offre et la demande de logements est le plus marqué. Les communes en zone B2 et C sont définitivement exclues du dispositif, sauf exceptions très limitées pour des opérations déjà engagées.</p>

<h3>4. Plafonnement renforcé</h3>
<p>Le prix de revient du logement pris en compte pour le calcul de la réduction d'impôt est désormais plafonné à 5 500 €/m² (contre 5 500 €/m² précédemment également, mais avec une application plus stricte des critères de surface habitable). Le montant total d'investissement reste limité à 300 000 € par an et par contribuable.</p>

<br><br>

<h2>Stratégies d'adaptation pour les investisseurs</h2>

<h3>1. Privilégier la qualité avant tout</h3>
<p>Face à l'écart croissant entre les avantages fiscaux du Pinel classique et du Pinel+, il devient stratégiquement judicieux de se concentrer sur les programmes immobiliers répondant aux critères du Pinel+. Même si le prix d'achat est généralement plus élevé, le différentiel d'avantage fiscal peut compenser ce surcoût, sans compter la meilleure résilience locative et patrimoniale de ces biens plus qualitatifs.</p>

<h3>2. Anticiper la fin programmée du dispositif</h3>
<p>Le dispositif Pinel est théoriquement programmé pour s'éteindre fin 2024, mais a été prolongé sous cette forme modifiée jusqu'à fin 2025. Les investisseurs souhaitant en bénéficier devraient donc finaliser leurs acquisitions avant cette échéance, tout en restant attentifs aux annonces concernant d'éventuels dispositifs successeurs.</p>

<h3>3. Diversifier les stratégies de défiscalisation</h3>
<p>La réduction progressive de l'attractivité fiscale du Pinel classique invite les investisseurs à considérer d'autres dispositifs défiscalisants comme alternatives ou compléments : LMNP (Location Meublée Non Professionnelle), Déficit foncier, Malraux, Monuments Historiques, ou encore l'investissement en SCPI fiscales.</p>

<h3>4. Sélectionner minutieusement les emplacements</h3>
<p>Avec le recentrage géographique du dispositif, la concurrence s'intensifie sur les zones éligibles. Il devient donc crucial de sélectionner des emplacements combinant forte demande locative, potentiel de valorisation et résilience économique, en privilégiant la proximité des transports, services et bassins d'emploi dynamiques.</p>

<br><br>

<h2>Conclusion</h2>
<p>Les évolutions du dispositif Pinel en 2025 marquent une transition vers une politique de défiscalisation immobilière plus exigeante en termes de qualité des logements et de pertinence des zones d'investissement. Pour les investisseurs, ces changements imposent une approche plus sélective et professionnelle, avec une attention accrue portée à la qualité intrinsèque des biens au-delà du simple avantage fiscal. Dans ce contexte, l'accompagnement par des professionnels spécialisés devient plus que jamais déterminant pour optimiser sa stratégie d'investissement immobilier défiscalisant.</p>`,
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "15 mars 2025",
    readTime: "9 min",
    category: "Immobilier",
    tags: ["Loi Pinel", "Défiscalisation", "Immobilier", "Investissement locatif"]
  },
  {
    id: 5,
    title: "Préparer sa Retraite : Stratégies Patrimoniales Efficaces",
    excerpt: "Comment construire un patrimoine solide pour assurer vos revenus pendant la retraite.",
    content: `<p>La préparation de la retraite est devenue un enjeu patrimonial majeur face aux incertitudes pesant sur les régimes de retraite obligatoires. Construire une stratégie efficace pour générer des revenus complémentaires demande anticipation et méthode. Voici les approches les plus pertinentes pour bâtir un patrimoine capable de soutenir votre niveau de vie à la retraite.</p>

<br><br>

<h2>Évaluer ses besoins futurs</h2>
<p>Avant de mettre en place une stratégie, il est essentiel d'estimer précisément vos besoins financiers à la retraite. Généralement, on considère qu'il faut prévoir entre 70% et 80% de ses derniers revenus d'activité pour maintenir son niveau de vie. Cette estimation doit prendre en compte l'évolution probable de vos charges (prêt immobilier remboursé, enfants autonomes, mais potentiellement des frais de santé accrus), et intégrer l'impact de l'inflation sur le long terme.</p>

<br><br>

<h2>Les piliers d'une stratégie retraite équilibrée</h2>

<h3>1. L'épargne retraite dédiée</h3>
<p>Le Plan d'Épargne Retraite (PER) s'est imposé comme le véhicule privilégié de préparation de la retraite depuis sa création par la loi PACTE. Ce dispositif offre une réduction d'impôt immédiate sur les versements et une capitalisation en franchise d'impôt, avec une sortie possible en rente viagère ou en capital. Les différentes versions du PER (individuel, collectif, obligatoire) permettent d'adapter votre stratégie à votre situation professionnelle.</p>

<br><br>

<h3>2. L'assurance-vie, pilier de la flexibilité</h3>
<p>L'assurance-vie reste un outil incontournable de préparation à la retraite, combinant souplesse d'utilisation et fiscalité avantageuse après 8 ans. Elle permet de constituer un capital qui pourra générer des revenus complémentaires via des rachats partiels programmés fiscalement optimisés, tout en conservant une disponibilité de l'épargne et des possibilités d'évolution de l'allocation d'actifs au cours du temps.</p>

<br><br>

<h3>3. L'immobilier, générateur de revenus réguliers</h3>
<p>La pierre reste un actif privilégié pour préparer sa retraite, qu'il s'agisse d'investissement locatif direct ou indirect :</p>
<ul>
    <li><strong>Immobilier locatif direct</strong> : acquisition de biens locatifs générant des revenus réguliers et bénéficiant potentiellement d'une valorisation du capital sur le long terme.</li>
    <li><strong>SCPI (Sociétés Civiles de Placement Immobilier)</strong> : permettent d'investir dans l'immobilier avec un ticket d'entrée plus accessible et une diversification immédiate, tout en déléguant la gestion locative.</li>
    <li><strong>SCI (Société Civile Immobilière)</strong> : structure adaptée pour la gestion et la transmission d'un patrimoine immobilier familial.</li>
</ul>

<br><br>

<h3>4. Le démembrement pour optimiser transmission et revenus</h3>
<p>Les stratégies de démembrement de propriété (séparation entre usufruit et nue-propriété) offrent des opportunités intéressantes pour préparer à la fois sa retraite et la transmission de son patrimoine. Par exemple, l'acquisition d'un bien immobilier en nue-propriété avec reconstitution automatique de la pleine propriété à l'âge de la retraite peut constituer une approche fiscalement efficiente.</p>

<br><br>

<h3>5. L'investissement en actions sur le long terme</h3>
<p>Sur un horizon long comme celui de la préparation à la retraite, l'investissement en actions (via PEA, compte-titres ou unités de compte d'assurance-vie) constitue historiquement la classe d'actifs la plus performante. Une approche progressive d'investissement régulier (versements programmés) permet de lisser les points d'entrée et de bénéficier des effets positifs de la capitalisation et des dividendes réinvestis.</p>

<br><br>

<h2>Stratégies d'optimisation par tranche d'âge</h2>

<h3>Avant 40 ans : privilégier l'accumulation de capital</h3>
<p>À cet âge, l'horizon d'investissement long permet de prendre davantage de risques pour viser des rendements plus élevés. Privilégiez :</p>
<ul>
    <li>Une allocation d'actifs dynamique avec une forte proportion d'actions</li>
    <li>L'investissement immobilier avec effet de levier (crédit)</li>
    <li>La mise en place de versements automatiques pour discipliner l'épargne</li>
</ul>

<br><br>

<h3>Entre 40 et 55 ans : diversifier et optimiser fiscalement</h3>
<p>Cette période charnière doit permettre de consolider votre stratégie :</p>
<ul>
    <li>Diversification accrue des placements et des classes d'actifs</li>
    <li>Optimisation fiscale plus poussée (PER, niches fiscales)</li>
    <li>Réévaluation régulière de vos objectifs et ajustement des projections</li>
    <li>Début de désendettement progressif</li>
</ul>

<br><br>

<h3>Après 55 ans : sécuriser et préparer la conversion en revenus</h3>
<p>L'approche de la retraite nécessite une adaptation de la stratégie :</p>
<ul>
    <li>Sécurisation progressive du capital (réduction de la part des actifs risqués)</li>
    <li>Planification détaillée de la conversion du capital en revenus réguliers</li>
    <li>Optimisation des dates de départ en retraite et de liquidation des droits</li>
    <li>Organisation de la transmission patrimoniale</li>
</ul>

<br><br>

<h2>Conclusion</h2>
<p>Préparer efficacement sa retraite implique de combiner différents véhicules d'épargne et d'investissement dans une stratégie cohérente et évolutive. Plus cette préparation est entamée tôt, plus les effets de la capitalisation à long terme seront puissants. Face à la complexité des choix possibles et aux enjeux importants, l'accompagnement par un conseiller en gestion de patrimoine permet d'optimiser votre stratégie et de l'adapter aux évolutions de votre situation personnelle et du contexte économique et fiscal.</p>`,
    image: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "2 mars 2025",
    readTime: "11 min",
    category: "Patrimoine",
    tags: ["Retraite", "Épargne", "Placements", "Planification financière"]
  },
  {
    id: 6,
    title: "Les SCPI : Une Alternative aux Investissements Immobiliers Directs",
    excerpt: "Tout ce que vous devez savoir sur les Sociétés Civiles de Placement Immobilier et leur place dans votre stratégie.",
    content: `<p>Les Sociétés Civiles de Placement Immobilier (SCPI) se sont progressivement imposées comme une alternative crédible et accessible à l'investissement immobilier traditionnel. Ces véhicules d'investissement collectif permettent aux épargnants d'accéder aux rendements de l'immobilier locatif sans les contraintes de gestion associées à la détention directe de biens immobiliers.</p>

<br><br>

<h2>Qu'est-ce qu'une SCPI ?</h2>
<p>Une SCPI est une société à capital variable ou fixe qui a pour objet exclusif l'acquisition et la gestion d'un patrimoine immobilier locatif. En investissant dans des parts de SCPI, vous devenez indirectement copropriétaire d'un parc immobilier diversifié (bureaux, commerces, logements, entrepôts logistiques, établissements de santé, etc.) généralement inaccessible aux investisseurs individuels.</p>

<br><br>

<h2>Les différentes catégories de SCPI</h2>

<h3>SCPI de rendement</h3>
<p>Principalement investies en immobilier d'entreprise (bureaux, commerces, entrepôts), elles visent à maximiser la distribution de revenus réguliers aux associés. Leur rendement moyen se situe généralement entre 4% et 6% par an, nettement supérieur aux placements sécurisés traditionnels.</p>

<br><br>

<h3>SCPI de plus-value</h3>
<p>Elles privilégient les biens présentant un potentiel d'appréciation du capital sur le long terme, souvent au détriment du rendement immédiat. Ces SCPI investissent généralement dans des zones à fort potentiel de développement ou dans des actifs nécessitant une valorisation.</p>

<br><br>

<h3>SCPI fiscales</h3>
<p>Conçues pour répondre à des objectifs de défiscalisation spécifiques (Pinel, Malraux, Déficit foncier), elles permettent à l'investisseur de bénéficier d'avantages fiscaux en contrepartie d'investissements dans des secteurs ciblés par les politiques publiques.</p>

<br><br>

<h3>SCPI européennes ou internationales</h3>
<p>Elles diversifient leurs investissements au-delà des frontières françaises, permettant d'accéder à des marchés immobiliers européens ou internationaux offrant parfois des rendements supérieurs ou des cycles économiques différents.</p>

<br><br>

<h2>Avantages des SCPI par rapport à l'investissement direct</h2>

<h3>1. Accessibilité et diversification</h3>
<p>Avec des tickets d'entrée généralement compris entre 200€ et 1000€ par part, les SCPI permettent d'investir dans l'immobilier avec un capital limité et d'accéder immédiatement à un patrimoine diversifié géographiquement et sectoriellement, réduisant ainsi le risque global de votre investissement.</p>

<br><br>

<h3>2. Absence de contraintes de gestion</h3>
<p>La société de gestion s'occupe de tous les aspects pratiques : recherche des locataires, gestion locative, travaux, démarches administratives et fiscales, contentieux éventuels. Cette délégation complète vous libère des contraintes opérationnelles de l'immobilier traditionnel.</p>

<br><br>

<h3>3. Revenus réguliers et prévisibles</h3>
<p>Les SCPI distribuent généralement des revenus trimestriels avec une bonne visibilité, permettant de planifier des compléments de revenus stables, particulièrement appréciés pour la préparation de la retraite.</p>

<br><br>

<h3>4. Liquidité relative</h3>
<p>Bien que moins liquides que des actifs financiers cotés, les parts de SCPI offrent une liquidité supérieure à l'immobilier direct, avec des mécanismes de revente organisés par les sociétés de gestion ou sur le marché secondaire.</p>

<br><br>

<h3>5. Mutualisation des risques locatifs</h3>
<p>La diversification du patrimoine sur de nombreux locataires et biens permet de lisser l'impact d'éventuels impayés ou vacances locatives, assurant une plus grande stabilité des revenus comparée à un investissement dans un bien unique.</p>

<br><br>

<h2>Points d'attention et limites</h2>

<h3>1. Frais à considérer</h3>
<p>Les SCPI comportent plusieurs niveaux de frais qui peuvent impacter la performance : frais de souscription (généralement entre 8% et 12%), frais de gestion annuels (environ 10% des loyers perçus), et parfois des frais de cession. Une analyse comparative des frais entre différentes SCPI est donc essentielle.</p>

<br><br>

<h3>2. Fiscalité des revenus</h3>
<p>Les revenus distribués par les SCPI sont imposés comme des revenus fonciers, soumis au barème progressif de l'impôt sur le revenu et aux prélèvements sociaux. Pour les SCPI investies à l'étranger, des mécanismes de crédit d'impôt permettent généralement d'éviter la double imposition.</p>

<br><br>

<h3>3. Horizon d'investissement</h3>
<p>Comme pour tout investissement immobilier, les SCPI doivent être envisagées sur un horizon long (idéalement 8 à 10 ans minimum) pour lisser les cycles immobiliers et amortir les frais d'entrée.</p>

<br><br>

<h3>4. Variabilité des performances</h3>
<p>Les rendements passés ne présagent pas des rendements futurs, et les SCPI peuvent connaître des fluctuations de performance en fonction des évolutions du marché immobilier et de la conjoncture économique.</p>

<br><br>

<h2>Intégrer les SCPI dans sa stratégie patrimoniale</h2>

<h3>En détention directe</h3>
<p>L'acquisition de parts de SCPI en direct est adaptée pour générer des revenus complémentaires immédiats ou pour diversifier un patrimoine déjà constitué. L'achat à crédit peut permettre un effet de levier intéressant, particulièrement dans un contexte de taux bas.</p>

<br><br>

<h3>Via l'assurance-vie</h3>
<p>L'intégration de SCPI dans un contrat d'assurance-vie (via des unités de compte dédiées) permet de bénéficier de la fiscalité avantageuse de ce support après 8 ans, tout en conservant une certaine souplesse dans la gestion de l'épargne. Attention toutefois, le rendement est généralement diminué de 0,5% à 1% du fait des frais supplémentaires prélevés par l'assureur.</p>

<br><br>

<h3>Au sein d'une SCI familiale</h3>
<p>La détention de parts de SCPI via une SCI peut faciliter la transmission patrimoniale en permettant des donations progressives de parts de la SCI aux enfants, tout en conservant le contrôle de la gestion du patrimoine.</p>

<br><br>

<h2>Conclusion</h2>
<p>Les SCPI représentent une solution d'investissement immobilier particulièrement adaptée aux épargnants recherchant des revenus réguliers sans les contraintes de gestion de l'immobilier direct. Leur accessibilité et leur dimension collective en font un outil de diversification patrimoniale puissant, qui trouve sa place dans une stratégie d'investissement équilibrée. Comme tout placement, elles nécessitent néanmoins une sélection rigoureuse et une analyse approfondie avant investissement, idéalement avec l'accompagnement d'un conseiller en gestion de patrimoine pour optimiser leur intégration dans votre stratégie globale.</p>`,
    image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "20 février 2025",
    readTime: "6 min",
    category: "Immobilier",
    tags: ["SCPI", "Immobilier", "Investissement", "Rendement"]
  },
  {
    id: 7,
    title: "Private Equity : L'investissement dans l'économie non cotée",
    excerpt: "Découvrez les opportunités et les risques du Private Equity pour diversifier votre patrimoine.",
    content: `<p>Le Private Equity, ou capital-investissement, représente une classe d'actifs alternative qui consiste à investir dans des entreprises non cotées en bourse. Cette forme d'investissement, longtemps réservée aux investisseurs institutionnels et aux grandes fortunes, s'ouvre progressivement aux particuliers fortunés et constitue une opportunité de diversification patrimoniale intéressante pour qui sait en maîtriser les enjeux.</p>

<br><br>

<h2>Qu'est-ce que le Private Equity ?</h2>
<p>Le Private Equity désigne l'ensemble des investissements réalisés dans le capital d'entreprises non cotées en bourse. Cette activité consiste à prendre des participations dans des sociétés, généralement majoritaires, avec pour objectif de les accompagner dans leur développement et de réaliser une plus-value lors de la revente, typiquement après 3 à 7 ans de détention.</p>

<br><br>

<h2>Les différentes stratégies du Private Equity</h2>

<h3>1. Le Capital-Risque (Venture Capital)</h3>
<p>Cette stratégie consiste à investir dans des start-ups et jeunes entreprises innovantes à fort potentiel de croissance. Bien que plus risqué, le capital-risque peut générer des rendements exceptionnels lorsqu'une entreprise du portefeuille connaît un succès majeur. Les secteurs technologiques, biotechnologiques et de la transition énergétique sont particulièrement prisés.</p>

<br><br>

<h3>2. Le Capital-Développement (Growth Capital)</h3>
<p>Il s'agit d'accompagner des entreprises déjà établies dans leur phase d'expansion. Ces sociétés ont généralement dépassé le stade de démarrage et cherchent des capitaux pour accélérer leur croissance, conquérir de nouveaux marchés ou financer des acquisitions. Cette stratégie présente un profil risque-rendement plus modéré que le capital-risque.</p>

<br><br>

<h3>3. Le Capital-Transmission (Buy-out)</h3>
<p>Cette approche consiste à acquérir des entreprises matures, souvent dans le cadre de transmissions d'entreprises familiales ou de cessions de filiales de grands groupes. L'objectif est d'optimiser la gestion de ces sociétés et d'améliorer leur performance opérationnelle avant une revente. Le recours à l'effet de levier (LBO - Leveraged Buy-Out) est fréquent dans cette stratégie.</p>

<br><br>

<h3>4. Le Capital-Retournement (Turnaround)</h3>
<p>Cette stratégie, plus spécialisée, vise à redresser des entreprises en difficulté financière mais disposant d'actifs de valeur ou d'un potentiel de redressement. Elle nécessite une expertise particulière en restructuration d'entreprises et présente un profil de risque élevé.</p>

<br><br>

<h2>Les avantages du Private Equity</h2>

<h3>1. Potentiel de rendement élevé</h3>
<p>Historiquement, le Private Equity a généré des rendements supérieurs aux marchés actions publics sur le long terme. Les fonds de Private Equity visent généralement des rendements annuels nets de 15% à 20%, bien que cette performance varie considérablement selon les stratégies et les millésimes.</p>

<br><br>

<h3>2. Diversification du portefeuille</h3>
<p>Les investissements en Private Equity présentent une corrélation relativement faible avec les marchés financiers traditionnels, offrant ainsi une véritable diversification. Cette classe d'actifs peut apporter de la stabilité au portefeuille global, particulièrement en période de volatilité des marchés publics.</p>

<br><br>

<h3>3. Exposition à l'économie réelle</h3>
<p>Investir en Private Equity permet de participer directement au développement de l'économie réelle en finançant des entreprises dans leurs projets de croissance, d'innovation ou de transformation. Cette dimension concrète de l'investissement peut être séduisante pour les investisseurs souhaitant donner du sens à leur épargne.</p>

<br><br>

<h3>4. Accompagnement actif des entreprises</h3>
<p>Contrairement aux investissements en actions cotées, le Private Equity implique un accompagnement actif des entreprises du portefeuille. Les gestionnaires apportent leur expertise stratégique, opérationnelle et financière pour créer de la valeur, ce qui peut améliorer les perspectives de performance.</p>

<br><br>

<h2>Les risques et contraintes à considérer</h2>

<h3>1. Illiquidité des investissements</h3>
<p>La principale contrainte du Private Equity réside dans l'illiquidité des investissements. Les fonds ont généralement une durée de vie de 8 à 12 ans, pendant laquelle les capitaux sont immobilisés. Il n'existe pas de marché secondaire liquide permettant de revendre facilement ses parts avant l'échéance.</p>

<br><br>

<h3>2. Tickets d'entrée élevés</h3>
<p>L'investissement en Private Equity nécessite des montants importants, généralement de plusieurs centaines de milliers d'euros minimum pour accéder aux fonds institutionnels. Cette barrière à l'entrée limite l'accès à cette classe d'actifs aux investisseurs disposant d'un patrimoine conséquent.</p>

<br><br>

<h3>3. Complexité et opacité</h3>
<p>Les stratégies de Private Equity sont complexes et nécessitent une expertise spécialisée pour être correctement évaluées. De plus, l'information sur les entreprises du portefeuille est moins accessible que pour les sociétés cotées, rendant le suivi des investissements plus difficile.</p>

<br><br>

<h3>4. Risque de perte en capital</h3>
<p>Comme tout investissement en capital, le Private Equity comporte un risque de perte partielle ou totale du capital investi. Les entreprises du portefeuille peuvent faire faillite ou voir leur valeur diminuer, particulièrement dans les stratégies les plus risquées comme le capital-risque.</p>

<br><br>

<h2>Comment investir en Private Equity ?</h2>

<h3>1. Fonds de Private Equity</h3>
<p>L'approche la plus courante consiste à investir dans des fonds spécialisés gérés par des sociétés de gestion expérimentées. Ces fonds diversifient les risques en investissant dans un portefeuille d'entreprises et bénéficient de l'expertise de gestionnaires professionnels.</p>

<br><br>

<h3>2. Fonds de fonds (Fund of Funds)</h3>
<p>Cette approche permet d'investir simultanément dans plusieurs fonds de Private Equity, offrant ainsi une diversification supplémentaire. Les tickets d'entrée sont généralement plus accessibles, mais les frais de gestion sont plus élevés du fait de la double couche de gestion.</p>

<br><br>

<h3>3. Véhicules cotés</h3>
<p>Certaines sociétés d'investissement cotées en bourse (SCR - Sociétés de Capital-Risque) permettent d'accéder indirectement au Private Equity avec une liquidité quotidienne. Cependant, ces véhicules peuvent présenter une décote ou une surcote par rapport à leur valeur liquidative.</p>

<br><br>

<h3>4. Assurance-vie et contrats de capitalisation</h3>
<p>Certains contrats d'assurance-vie haut de gamme proposent des unités de compte investies en Private Equity, permettant de bénéficier de la fiscalité avantageuse de l'assurance-vie tout en accédant à cette classe d'actifs.</p>

<br><br>

<h2>Intégration dans une stratégie patrimoniale</h2>

<h3>Allocation recommandée</h3>
<p>Les experts conseillent généralement d'allouer entre 5% et 15% du patrimoine financier au Private Equity, selon le profil de risque et l'horizon d'investissement. Cette allocation doit être progressive et étalée dans le temps pour lisser les risques de timing.</p>

<br><br>

<h3>Horizon d'investissement</h3>
<p>Le Private Equity nécessite un horizon d'investissement long, idéalement de 10 à 15 ans, pour permettre aux gestionnaires de réaliser leurs stratégies de création de valeur et pour lisser les cycles économiques.</p>

<br><br>

<h3>Complémentarité avec d'autres actifs</h3>
<p>Le Private Equity doit être considéré comme un complément à un portefeuille diversifié comprenant des actions cotées, des obligations et de l'immobilier. Sa faible corrélation avec les autres classes d'actifs en fait un excellent diversificateur.</p>

<br><br>

<h2>Fiscalité du Private Equity</h2>

<h3>Régime fiscal des plus-values</h3>
<p>Les plus-values réalisées sur les investissements en Private Equity sont généralement soumises au régime des plus-values de cession de valeurs mobilières, soit un taux global de 30% (flat tax) ou l'option pour le barème progressif avec abattement pour durée de détention.</p>

<br><br>

<h3>Optimisation fiscale</h3>
<p>L'investissement via des véhicules comme l'assurance-vie peut permettre d'optimiser la fiscalité, notamment en cas de transmission. Le PEA-PME peut également être utilisé pour certains investissements en capital-risque éligibles.</p>

<br><br>

<h2>Conclusion</h2>

<p>Le Private Equity représente une opportunité d'investissement attractive pour les investisseurs disposant d'un patrimoine conséquent et d'un horizon long. Cette classe d'actifs offre un potentiel de rendement élevé et une vraie diversification, mais nécessite une approche prudente et informée compte tenu de sa complexité et de ses risques spécifiques.</p>

<br><br>

<p>Avant de s'engager dans cette voie, il est essentiel de bien comprendre les mécanismes du Private Equity, d'évaluer sa tolérance au risque et à l'illiquidité, et de s'entourer de conseils professionnels spécialisés. Une approche progressive et diversifiée, intégrée dans une stratégie patrimoniale globale, permet de tirer parti des opportunités de cette classe d'actifs tout en maîtrisant les risques associés.</p>`,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=800",
    author: "Alice Goyec",
    date: "15 février 2025",
    readTime: "9 min",
    category: "Investissement",
    tags: ["Private Equity", "Investissement", "Diversification", "Capital-risque"]
  }
];

const BlogArticle = () => {
  // Get the article ID from URL params
  const { id } = useParams<{ id: string }>();
  
  // Find the article data based on ID
  const articleId = parseInt(id || '0');
  const article = blogData.find(a => a.id === articleId);
  
  // If article not found, display NotFound component
  if (!article) {
    return <NotFound />;
  }

  // Function to generate article schema for SEO
  const generateArticleSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Finance Conseil",
        "logo": {
          "@type": "ImageObject",
          "url": "https://example.com/logo.png"
        }
      },
      "datePublished": article.date,
      "description": article.excerpt
    };
  };

  const generateShareUrl = (platform: string) => {
    const currentUrl = window.location.href;
    const title = encodeURIComponent(article.title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      default:
        return '#';
    }
  };

  const handleShare = (platform: string) => {
    const shareUrl = generateShareUrl(platform);
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="flex items-center text-french-navy hover:text-french-gold transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour au blog</span>
          </Link>
        </div>

        {/* Article header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-french-cream text-french-navy text-sm px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-french-navy mb-4">{article.title}</h1>
          
          {/* Author info and metadata */}
          <div className="flex flex-wrap items-center text-sm text-french-gray mb-8">
            <div className="flex items-center mr-6 mb-2">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Article content */}
        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />
        
        {/* Tags */}
        {article.tags && (
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-french-navy px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Share buttons */}
        <div className="border-t border-gray-200 pt-6 mb-12">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Partager cet article
          </h3>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center" onClick={() => handleShare('facebook')}>
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
            <Button variant="outline" className="flex items-center" onClick={() => handleShare('twitter')}>
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184A4.92 4.92 0 0011.78 8.28 13.98 13.98 0 013.093 1.72a4.92 4.92 0 001.524 6.57A4.911 4.911 0 011 7.677v.063a4.926 4.926 0 003.95 4.827 4.93 4.93 0 01-2.224.084 4.935 4.935 0 004.6 3.42A9.86 9.86 0 010 19.418a13.941 13.941 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.59z"/>
              </svg>
              Twitter
            </Button>
            <Button variant="outline" className="flex items-center" onClick={() => handleShare('linkedin')}>
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-french-cream rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-french-navy mb-4">Vous avez besoin de conseils financiers personnalisés?</h3>
          <p className="text-french-gray mb-6 max-w-2xl mx-auto">
            Nos experts en gestion de patrimoine et investissement sont à votre disposition pour vous accompagner dans tous vos projets financiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SuK203EhNMUBR8RiWozh7HeUCKavBAz_zWUt_BBPJwXXmoA3CfZBJH3E0oy3gHjZCQO_0a1aH?gv=true" target="_blank" rel="noopener noreferrer">
              <Button className="bg-french-navy hover:bg-french-navy/90">
                Prendre rendez-vous
              </Button>
            </a>
          </div>
        </div>
        
        {/* JSON-LD schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(generateArticleSchema())}
        </script>
      </div>
    </div>
  );
};

export default BlogArticle;
