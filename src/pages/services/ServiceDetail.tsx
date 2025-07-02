import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound';

interface ServiceDetailProps {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  fullDescription?: string;
  benefits?: string[];
  process?: {
    title: string;
    description: string;
  }[];
}

const servicesData: ServiceDetailProps[] = [
  {
    id: 1,
    name: "Consultation Patrimoniale",
    category: "conseil",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Analyse complète de votre situation financière et conseils personnalisés pour optimiser votre patrimoine.",
    fullDescription: "Notre service de consultation patrimoniale vous offre une analyse approfondie de votre situation financière actuelle. Nos experts examinent l'ensemble de vos actifs, passifs, revenus et objectifs à court et long terme pour vous fournir des recommandations sur mesure qui optimiseront votre patrimoine tout en respectant votre profil de risque et vos aspirations.",
    benefits: [
      "Évaluation complète de votre situation financière",
      "Identification des opportunités d'optimisation fiscale",
      "Stratégies personnalisées pour atteindre vos objectifs patrimoniaux",
      "Accompagnement par un conseiller dédié",
      "Suivi régulier et ajustements selon l'évolution de votre situation"
    ],
    process: [
      {
        title: "Analyse initiale",
        description: "Évaluation détaillée de votre patrimoine actuel, vos revenus, dépenses et objectifs personnels."
      },
      {
        title: "Élaboration de stratégie",
        description: "Création d'un plan financier personnalisé basé sur vos objectifs et votre tolérance au risque."
      },
      {
        title: "Mise en œuvre",
        description: "Accompagnement dans la réalisation des recommandations avec un calendrier précis."
      },
      {
        title: "Suivi et ajustements",
        description: "Révisions périodiques pour assurer que votre plan reste aligné avec vos objectifs évolutifs."
      }
    ]
  },
  {
    id: 2,
    name: "Stratégie d'Investissement",
    category: "investissement",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Élaboration d'une stratégie d'investissement adaptée à vos objectifs et votre profil de risque.",
    fullDescription: "Notre service de stratégie d'investissement vous propose une approche méticuleuse pour optimiser vos placements. Nous combinons analyse macroéconomique, étude des tendances de marché et évaluation de votre profil investisseur pour construire un portefeuille diversifié et performant qui correspond à vos objectifs financiers à court, moyen et long terme.",
    benefits: [
      "Diversification optimale de votre portefeuille",
      "Sélection d'actifs adaptés à votre profil de risque",
      "Stratégies d'entrée et de sortie bien définies",
      "Analyse régulière des performances",
      "Ajustements tactiques selon les conditions du marché"
    ],
    process: [
      {
        title: "Définition du profil investisseur",
        description: "Détermination de votre tolérance au risque, horizon d'investissement et objectifs financiers."
      },
      {
        title: "Allocation d'actifs",
        description: "Construction d'un portefeuille diversifié entre différentes classes d'actifs (actions, obligations, immobilier, etc.)."
      },
      {
        title: "Sélection des supports",
        description: "Identification des meilleurs véhicules d'investissement pour chaque catégorie d'actifs."
      },
      {
        title: "Monitoring et rebalancing",
        description: "Suivi continu et ajustements périodiques pour maintenir l'allocation cible et saisir les opportunités."
      }
    ]
  },
  {
    id: 3,
    name: "Construction de Portefeuille",
    category: "investissement",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Notre service de gestion de portefeuille vous propose de vous accompagner dans la sélection des actions de votre PEA ou CTO. Notre expertise sur les investissements pertinents à long terme est basée sur des stratégies éprouvées par les plus grands investisseurs tels que Graham, Buffet ou Lynch.",
    fullDescription: "Notre service de gestion de portefeuille offre un suivi actif de vos investissements par des professionnels expérimentés. Nous surveillons quotidiennement l'évolution des marchés et prenons les décisions nécessaires pour protéger et faire fructifier votre capital conformément à votre stratégie d'investissement établie, tout en vous tenant régulièrement informé des performances et ajustements réalisés.",
    benefits: [
      "Gestion active par des professionnels qualifiés",
      "Optimisation continue du ratio rendement/risque",
      "Réactivité face aux événements de marché",
      "Reporting transparent et régulier",
      "Frais transparents et compétitifs"
    ],
    process: [
      {
        title: "Audit du portefeuille existant",
        description: "Analyse détaillée de vos investissements actuels et de leurs performances historiques."
      },
      {
        title: "Restructuration optimisée",
        description: "Ajustement de votre portefeuille selon les recommandations issues de l'audit initial."
      },
      {
        title: "Gestion active",
        description: "Suivi quotidien et prise de décisions d'investissement selon l'évolution des marchés."
      },
      {
        title: "Reporting périodique",
        description: "Communication régulière des performances et des décisions prises pour votre portefeuille."
      }
    ]
  },
  {
    id: 4,
    name: "Planification Retraite",
    category: "conseil",
    image: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Préparation de votre avenir financier pour assurer une retraite sereine et confortable.",
    fullDescription: "Notre service de planification retraite vous aide à préparer cette étape cruciale de votre vie. Nous évaluons votre situation actuelle, estimons vos besoins futurs et élaborons un plan d'épargne et d'investissement adapté pour vous assurer des revenus suffisants pendant votre retraite, tout en optimisant votre situation fiscale actuelle et future.",
    benefits: [
      "Estimation précise de vos besoins financiers à la retraite",
      "Optimisation des dispositifs d'épargne retraite",
      "Stratégies de défiscalisation adaptées",
      "Préparation à la transition travail-retraite",
      "Protection du capital et génération de revenus complémentaires"
    ],
    process: [
      {
        title: "Bilan prévisionnel",
        description: "Évaluation de vos droits à la retraite et estimation de vos revenus futurs vs besoins financiers."
      },
      {
        title: "Stratégie d'épargne",
        description: "Création d'un plan d'épargne adapté combinant différents dispositifs (PER, assurance-vie, immobilier...)."
      },
      {
        title: "Optimisation fiscale",
        description: "Mise en place de stratégies pour réduire votre imposition avant et pendant la retraite."
      },
      {
        title: "Planification successorale",
        description: "Organisation de la transmission de votre patrimoine selon vos souhaits et dans un cadre fiscal optimisé."
      }
    ]
  },
  {
    id: 5,
    name: "Investissement Immobilier",
    category: "immobilier",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Accompagnement dans l'acquisition de biens immobiliers de rentabilité et dispositifs de défiscalisation immobilière (Denormandie, Malraux, Monuments historiques).",
    fullDescription: "Notre service d'investissement immobilier vous guide dans la sélection, l'acquisition et la gestion de biens immobiliers à fort potentiel. Nous analysons les marchés locaux, identifions les opportunités attractives et vous accompagnons à chaque étape, du financement à la mise en location, pour optimiser votre rendement. Nous proposons également un accompagnement dans les dispositifs de défiscalisation immobilière comme Denormandie, Malraux et Monuments Historiques pour allier investissement et optimisation fiscale.",
    benefits: [
      "Accès à des opportunités d'investissement sélectionnées",
      "Analyse détaillée des marchés immobiliers locaux",
      "Optimisation du financement et de la structure d'acquisition",
      "Conseils sur la gestion locative et la valorisation du bien",
      "Stratégies de défiscalisation immobilière adaptées",
      "Accompagnement dans les dispositifs Denormandie, Malraux et Monuments Historiques"
    ],
    process: [
      {
        title: "Définition de projet",
        description: "Clarification de vos objectifs d'investissement et identification des critères prioritaires."
      },
      {
        title: "Recherche et sélection",
        description: "Identification des biens correspondant à vos critères et présentant un potentiel de rentabilité optimal."
      },
      {
        title: "Analyse financière",
        description: "Étude approfondie de la rentabilité potentielle et structuration optimale du financement."
      },
      {
        title: "Accompagnement à l'acquisition",
        description: "Support dans les négociations, démarches administratives et mise en place de la gestion locative."
      }
    ]
  },
  {
    id: 6,
    name: "Optimisation Fiscale",
    category: "fiscalité",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Stratégies légales pour réduire votre charge fiscale et maximiser votre patrimoine.",
    fullDescription: "Notre service d'optimisation fiscale vous propose des stratégies légales et éthiques pour minimiser votre imposition. Nous analysons en détail votre situation fiscale personnelle et professionnelle pour identifier toutes les opportunités de réduction d'impôts, en tirant parti des niches fiscales adaptées à votre profil et vos objectifs patrimoniaux.",
    benefits: [
      "Réduction significative de votre charge fiscale",
      "Utilisation optimale des dispositifs de défiscalisation",
      "Harmonisation entre stratégie fiscale et objectifs patrimoniaux",
      "Veille réglementaire et adaptation aux évolutions fiscales",
      "Conformité totale avec la législation en vigueur"
    ],
    process: [
      {
        title: "Audit fiscal",
        description: "Analyse détaillée de votre situation actuelle et identification des opportunités d'optimisation."
      },
      {
        title: "Élaboration de stratégie",
        description: "Création d'un plan personnalisé combinant divers dispositifs de défiscalisation adaptés à votre profil."
      },
      {
        title: "Mise en œuvre",
        description: "Accompagnement dans la réalisation des investissements ou la restructuration patrimoniale recommandée."
      },
      {
        title: "Suivi et adaptation",
        description: "Ajustements réguliers pour tenir compte des évolutions légales et de votre situation personnelle."
      }
    ]
  },
  {
    id: 7,
    name: "Transmission de Patrimoine",
    category: "succession",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Préparation et optimisation de la transmission de votre patrimoine à vos héritiers.",
    fullDescription: "Notre service de transmission de patrimoine vous aide à planifier efficacement la transmission de vos biens à vos héritiers. Nous élaborons une stratégie successorale personnalisée qui optimise la fiscalité, préserve l'équilibre familial et respecte vos volontés, tout en vous accompagnant dans la mise en place des outils juridiques adaptés (donation, testament, démembrement, assurance-vie...).",
    benefits: [
      "Réduction significative des droits de succession",
      "Préservation de l'harmonie familiale",
      "Protection du conjoint survivant",
      "Anticipation des risques juridiques et fiscaux",
      "Transmission progressive adaptée à vos besoins"
    ],
    process: [
      {
        title: "Bilan patrimonial successoral",
        description: "Analyse détaillée de votre patrimoine et simulation de sa transmission selon les règles en vigueur."
      },
      {
        title: "Définition de stratégie",
        description: "Élaboration d'une stratégie de transmission sur mesure intégrant vos souhaits et contraintes."
      },
      {
        title: "Mise en place des outils",
        description: "Mise en œuvre des solutions recommandées (donations, pacte Dutreil, assurance-vie, SCI...)."
      },
      {
        title: "Actualisation périodique",
        description: "Suivi et adaptation de votre stratégie selon l'évolution de votre situation et de la législation."
      }
    ]
  },
  {
    id: 8,
    name: "Optimisation Trésorerie d'Entreprise",
    category: "entreprise",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Optimisation de la gestion de trésorerie et des investissements d'entreprise pour maximiser la rentabilité.",
    fullDescription: "Notre service d'optimisation de trésorerie d'entreprise vous aide à maximiser le rendement de vos excédents de trésorerie tout en préservant la liquidité nécessaire à votre activité. Nous analysons vos flux de trésorerie, identifions les opportunités de placement et mettons en place des stratégies adaptées à vos besoins opérationnels et votre profil de risque.",
    benefits: [
      "Maximisation du rendement des excédents de trésorerie",
      "Préservation de la liquidité opérationnelle",
      "Diversification des placements selon votre profil de risque",
      "Optimisation fiscale des investissements d'entreprise",
      "Suivi et reporting régulier des performances"
    ],
    process: [
      {
        title: "Analyse des flux de trésorerie",
        description: "Étude détaillée de vos flux financiers pour identifier les excédents disponibles pour placement."
      },
      {
        title: "Définition de la stratégie",
        description: "Élaboration d'une stratégie de placement adaptée à vos besoins de liquidité et objectifs de rentabilité."
      },
      {
        title: "Mise en place des solutions",
        description: "Implémentation des solutions de placement recommandées (comptes à terme, SICAV, obligations...)."
      },
      {
        title: "Suivi et optimisation",
        description: "Monitoring continu des performances et ajustements selon l'évolution de vos besoins."
      }
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const serviceId = parseInt(id || '0');
  const service = servicesData.find(s => s.id === serviceId);
  
  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link to="/services" className="flex items-center text-french-navy hover:text-french-gold transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Retour aux services</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block bg-french-cream text-french-navy text-sm px-3 py-1 rounded-full font-medium capitalize">
                  {service.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-french-navy mb-4">{service.name}</h1>
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-lg text-french-gray mb-8">{service.fullDescription}</p>
              
              <h2 className="text-xl font-semibold text-french-navy mb-4">Avantages clés</h2>
              <ul className="space-y-2 mb-8">
                {service.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-french-gold mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-french-navy mb-4">Notre processus</h2>
              <div className="space-y-6 mb-8">
                {service.process?.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="bg-french-gold text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-french-navy">{step.title}</h3>
                      <p className="text-french-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-french-cream rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-french-navy mb-4">{service.name}</h3>
              <p className="text-french-gray mb-6">
                Bénéficiez d'un accompagnement personnalisé adapté à vos besoins spécifiques et vos objectifs patrimoniaux.
              </p>
              <div className="space-y-4">
                <a href="https://calendly.com/agstrategiepatrimoine/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-french-gold hover:bg-french-gold/90 flex items-center justify-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Prendre Rendez-vous
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
