
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Leaf, Briefcase, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const solutionsData = {
  immobilier: [
    {
      title: "Investissement Locatif",
      description: "Générez des revenus complémentaires et constituez un patrimoine pérenne grâce à l'immobilier locatif.",
      icon: <Building2 className="h-10 w-10 text-french-gold" />
    },
    {
      title: "SCPI",
      description: "Investissez dans l'immobilier sans contraintes de gestion avec nos solutions de placement collectif.",
      icon: <Building2 className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Loi Pinel",
      description: "Réduisez votre imposition tout en investissant dans l'immobilier neuf grâce au dispositif Pinel.",
      icon: <Building2 className="h-10 w-10 text-french-gold" />
    }
  ],
  placements: [
    {
      title: "Assurance-vie",
      description: "Solution d'épargne flexible offrant des avantages fiscaux et une transmission facilitée.",
      icon: <TrendingUp className="h-10 w-10 text-french-gold" />
    },
    {
      title: "PEA",
      description: "Plan d'Épargne en Actions pour investir en bourse avec une fiscalité avantageuse.",
      icon: <TrendingUp className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Comptes titres",
      description: "Investissez librement sur les marchés financiers français et internationaux.",
      icon: <TrendingUp className="h-10 w-10 text-french-gold" />
    }
  ],
  responsable: [
    {
      title: "Fonds ISR",
      description: "Investissement Socialement Responsable pour donner du sens à votre épargne.",
      icon: <Leaf className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Énergies renouvelables",
      description: "Participez à la transition énergétique tout en diversifiant votre patrimoine.",
      icon: <Leaf className="h-10 w-10 text-french-gold" />
    }
  ],
  opportunites: [
    {
      title: "Création d'entreprise",
      description: "Accompagnement pour vos projets entrepreneuriaux et optimisation fiscale.",
      icon: <Briefcase className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Rachat d'entreprise",
      description: "Stratégies pour l'acquisition et le développement d'entreprises existantes.",
      icon: <Briefcase className="h-10 w-10 text-french-gold" />
    }
  ],
  diversification: [
    {
      title: "Or et métaux précieux",
      description: "Sécurisez votre patrimoine avec des actifs tangibles résistants à l'inflation.",
      icon: <Layers className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Forêts et terres agricoles",
      description: "Investissement dans le foncier pour une diversification patrimoniale durable.",
      icon: <Layers className="h-10 w-10 text-french-gold" />
    },
    {
      title: "Art et collection",
      description: "Conseil en investissement dans des actifs de passion avec potentiel de valorisation.",
      icon: <Layers className="h-10 w-10 text-french-gold" />
    }
  ]
};

const Solutions = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Nos solutions patrimoniales</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Découvrez nos solutions d'investissement adaptées à vos objectifs et à votre profil d'investisseur.
        </p>

        <Tabs defaultValue="immobilier" className="max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            <TabsTrigger value="immobilier" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              Immobilier
            </TabsTrigger>
            <TabsTrigger value="placements" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              Placements Financiers
            </TabsTrigger>
            <TabsTrigger value="responsable" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              Investissements Responsables
            </TabsTrigger>
            <TabsTrigger value="opportunites" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              Opportunités Professionnelles
            </TabsTrigger>
            <TabsTrigger value="diversification" className="data-[state=active]:bg-french-navy data-[state=active]:text-white">
              Placements Diversification
            </TabsTrigger>
          </TabsList>

          {Object.entries(solutionsData).map(([key, solutions]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                  <Card key={index} className="border-2 hover:border-french-gold transition-all">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-french-cream rounded-full p-3">
                        {solution.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-french-gray">{solution.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-french-navy hover:bg-french-navy/90 w-full">
                        En savoir plus
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Link to="/rendez-vous">
                  <Button size="lg" className="bg-french-gold hover:bg-french-gold/90 text-white">
                    Prendre rendez-vous pour en discuter
                  </Button>
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Solutions;
