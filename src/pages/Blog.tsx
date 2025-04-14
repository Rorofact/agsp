
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog = () => {
  // Finance and real estate blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Les Fondamentaux de l'Investissement Immobilier en 2025",
      excerpt: "Découvrez les bases essentielles pour réussir vos investissements immobiliers dans le contexte économique actuel.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Thomas Durand",
      date: "12 avril 2025",
      readTime: "8 min",
      category: "Immobilier"
    },
    {
      id: 2,
      title: "Comment Optimiser sa Fiscalité en France",
      excerpt: "Stratégies légales et astuces pour réduire votre imposition et maximiser votre patrimoine.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sophie Martin",
      date: "5 avril 2025",
      readTime: "10 min",
      category: "Fiscalité"
    },
    {
      id: 3,
      title: "Les Erreurs à Éviter dans la Gestion de Portefeuille",
      excerpt: "Analyse des pièges courants qui peuvent compromettre vos performances financières à long terme.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Marc Leblanc",
      date: "28 mars 2025",
      readTime: "7 min",
      category: "Investissement"
    },
    {
      id: 4,
      title: "La Loi Pinel 2025 : Ce qui Change pour les Investisseurs",
      excerpt: "Toutes les modifications du dispositif Pinel et comment les intégrer dans votre stratégie d'investissement.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Julie Dupont",
      date: "15 mars 2025",
      readTime: "9 min",
      category: "Immobilier"
    },
    {
      id: 5,
      title: "Préparer sa Retraite : Stratégies Patrimoniales Efficaces",
      excerpt: "Comment construire un patrimoine solide pour assurer vos revenus pendant la retraite.",
      image: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Pierre Moreau",
      date: "2 mars 2025",
      readTime: "11 min",
      category: "Patrimoine"
    },
    {
      id: 6,
      title: "Les SCPI : Une Alternative aux Investissements Immobiliers Directs",
      excerpt: "Tout ce que vous devez savoir sur les Sociétés Civiles de Placement Immobilier et leur place dans votre stratégie.",
      image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Hélène Girard",
      date: "20 février 2025",
      readTime: "6 min",
      category: "Immobilier"
    }
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  
  // Regular posts (excluding the featured one)
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="page-title">Notre Blog Financier</h1>
          <p className="subtitle">
            Explorez nos articles sur la gestion de patrimoine, l'investissement immobilier et les stratégies financières.
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="inline-block bg-french-cream text-french-navy text-xs px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-french-gray mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-french-gray mb-6">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button className="w-fit bg-french-navy hover:bg-french-navy/90">
                    Lire l'Article
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <CardContent className="pt-6">
                <div className="mb-2">
                  <span className="inline-block bg-french-cream text-french-navy text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-french-gray text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-sm text-french-gray">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" className="text-french-navy hover:text-french-gold hover:bg-transparent p-0">
                    Lire l'Article →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Subscribe */}
        <div className="mt-16 bg-french-cream rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-french-navy mb-4">Restez Informé</h3>
          <p className="text-french-gray mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur la finance et l'immobilier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="rounded-md px-4 py-2 border border-gray-300 flex-grow"
            />
            <Button className="bg-french-navy hover:bg-french-navy/90">
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
