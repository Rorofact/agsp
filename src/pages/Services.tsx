
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
  
  // Sample service data
  const services: Service[] = [
    {
      id: 1,
      name: "Consultation en Style",
      category: "conseil",
      price: 89,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94c3b5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Découvrez votre style personnel avec nos experts en mode française."
    },
    {
      id: 2,
      name: "Création d'Accessoires",
      category: "creation",
      price: 125,
      image: "https://images.unsplash.com/photo-1601370552761-d129028bd833?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Des accessoires sur mesure conçus avec savoir-faire et élégance."
    },
    {
      id: 3,
      name: "Dégustation de Vins",
      category: "gastronomie",
      price: 45,
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Une initiation aux grands crus et vins français par notre sommelier."
    },
    {
      id: 4,
      name: "Décoration d'Intérieur",
      category: "maison",
      price: 120,
      image: "https://images.unsplash.com/photo-1595925889916-5ef8bfb5e349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Transformez votre espace avec notre expertise en décoration à la française."
    },
    {
      id: 5,
      name: "Atelier Parfumerie",
      category: "atelier",
      price: 75,
      image: "https://images.unsplash.com/photo-1603006945432-d363264c5751?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Créez votre propre parfum guidé par un maître parfumeur."
    },
    {
      id: 6,
      name: "Cours de Cuisine",
      category: "gastronomie",
      price: 65,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Apprenez les secrets de la cuisine française avec nos chefs."
    },
    {
      id: 7,
      name: "Coaching d'Image",
      category: "conseil",
      price: 95,
      image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Un accompagnement personnalisé pour révéler votre meilleur style."
    },
    {
      id: 8,
      name: "Création de Foulards",
      category: "creation",
      price: 110,
      image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Des foulards en soie personnalisés selon vos goûts."
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
          <h1 className="page-title">Nos Services</h1>
          <p className="subtitle">
            Découvrez notre éventail de services français d'exception, fournis avec passion et savoir-faire.
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
