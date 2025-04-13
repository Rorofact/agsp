
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, ArrowRight } from "lucide-react";

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("tous");
  
  // Finance and real estate services data
  const services: Service[] = [
    {
      id: 1,
      name: "Consultation Patrimoniale",
      category: "conseil",
      price: 150,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Analyse complète de votre situation financière et conseils personnalisés pour optimiser votre patrimoine."
    },
    {
      id: 2,
      name: "Stratégie d'Investissement",
      category: "investissement",
      price: 200,
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Élaboration d'une stratégie d'investissement adaptée à vos objectifs et votre profil de risque."
    },
    {
      id: 3,
      name: "Gestion de Portefeuille",
      category: "gestion",
      price: 250,
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Suivi et optimisation régulière de vos placements financiers pour maximiser votre rendement."
    },
    {
      id: 4,
      name: "Planification Retraite",
      category: "conseil",
      price: 180,
      image: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Préparation de votre avenir financier pour assurer une retraite sereine et confortable."
    },
    {
      id: 5,
      name: "Investissement Immobilier",
      category: "immobilier",
      price: 220,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Accompagnement dans l'acquisition de biens immobiliers à fort potentiel de rentabilité."
    },
    {
      id: 6,
      name: "Optimisation Fiscale",
      category: "fiscalité",
      price: 190,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Stratégies légales pour réduire votre charge fiscale et maximiser votre patrimoine."
    },
    {
      id: 7,
      name: "Défiscalisation Immobilière",
      category: "immobilier",
      price: 210,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Dispositifs Pinel, Denormandie, Malraux pour investir tout en réduisant vos impôts."
    },
    {
      id: 8,
      name: "Transmission de Patrimoine",
      category: "succession",
      price: 230,
      image: "https://images.unsplash.com/photo-1586527317521-54e53e996909?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Préparation et optimisation de la transmission de votre patrimoine à vos héritiers."
    },
  ];
  
  // Get unique categories
  const categories = ["tous", ...new Set(services.map((service) => service.category))];
  
  // Filter services based on active category
  const filteredServices = activeCategory === "tous"
    ? services
    : services.filter((service) => service.category === activeCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="page-title">Nos Services Financiers</h1>
          <p className="subtitle">
            Découvrez notre gamme de services d'expertise en gestion de patrimoine et investissement immobilier.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-10">
          <Tabs 
            defaultValue="tous" 
            className="w-full"
            onValueChange={setActiveCategory}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-french-navy flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Catégories
              </h2>
              <TabsList className="bg-french-cream">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredServices.map((service) => (
                    <Card key={service.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="h-full w-full object-cover transition-transform hover:scale-105" 
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                        <p className="text-sm text-french-gray mb-2 capitalize">{service.category}</p>
                        <p className="text-sm text-french-gray mb-4 line-clamp-2">{service.description}</p>
                        <p className="font-medium text-french-navy">{service.price} €</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-french-navy hover:bg-french-navy/90 gap-2">
                          En savoir plus <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
