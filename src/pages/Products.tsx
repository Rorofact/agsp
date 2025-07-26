
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("tous");
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Parfum Élégance",
      category: "parfums",
      price: 89,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94c3b5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Écharpe en Soie",
      category: "accessoires",
      price: 125,
      image: "https://images.unsplash.com/photo-1601370552761-d129028bd833?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Vin Rouge Premier Cru",
      category: "gastronomie",
      price: 45,
      image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Sachet de Lavande",
      category: "maison",
      price: 12,
      image: "https://images.unsplash.com/photo-1595925889916-5ef8bfb5e349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Bougie Parfumée",
      category: "maison",
      price: 34,
      image: "https://images.unsplash.com/photo-1603006945432-d363264c5751?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Coffret Fromages",
      category: "gastronomie",
      price: 65,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      name: "Eau de Cologne",
      category: "parfums",
      price: 75,
      image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      name: "Foulard de Paris",
      category: "accessoires",
      price: 95,
      image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];
  
  // Get unique categories
  const categories = ["tous", ...new Set(products.map((product) => product.category))];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === "tous"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="page-title">Nos Produits</h1>
          <p className="subtitle">
            Découvrez notre sélection de produits français d'exception, fabriqués avec passion et savoir-faire.
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
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-full object-cover transition-transform hover:scale-105" 
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-sm text-french-gray mb-4 capitalize">{product.category}</p>
                        <p className="font-medium text-french-navy">{product.price} €</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-french-navy hover:bg-french-navy/90 gap-2">
                          <ShoppingCart className="h-4 w-4" /> Ajouter au Panier
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

export default Products;
