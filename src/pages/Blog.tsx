
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
  // Sample blog post data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'Art de la Parfumerie Française",
      excerpt: "Découvrez les secrets et l'histoire fascinante derrière la création des parfums français de renommée mondiale.",
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sophie Dubois",
      date: "12 avril 2025",
      readTime: "5 min",
      category: "Art & Culture"
    },
    {
      id: 2,
      title: "La Gastronomie Française : Un Patrimoine Mondial",
      excerpt: "Une exploration des traditions culinaires françaises qui continuent d'influencer la gastronomie mondiale.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Jean-Pierre Martin",
      date: "5 avril 2025",
      readTime: "7 min",
      category: "Gastronomie"
    },
    {
      id: 3,
      title: "Les Secrets de la Mode Parisienne",
      excerpt: "Comment adopter l'élégance et le style à la française dans votre garde-robe quotidienne.",
      image: "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Marie Lefevre",
      date: "28 mars 2025",
      readTime: "6 min",
      category: "Mode"
    },
    {
      id: 4,
      title: "Les Châteaux de la Loire : Joyaux du Patrimoine",
      excerpt: "Voyage à travers l'histoire architecturale des plus beaux châteaux de la Loire, témoins de la Renaissance française.",
      image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Philippe Durand",
      date: "15 mars 2025",
      readTime: "8 min",
      category: "Voyage"
    },
    {
      id: 5,
      title: "L'Art du Vin : Comprendre les Terroirs Français",
      excerpt: "Un guide pour comprendre les différentes régions viticoles françaises et leurs caractéristiques uniques.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Claire Beaumont",
      date: "2 mars 2025",
      readTime: "10 min",
      category: "Gastronomie"
    },
    {
      id: 6,
      title: "La Lavande de Provence : Plus qu'un Parfum",
      excerpt: "Les bienfaits thérapeutiques et cosmétiques de cette plante emblématique du Sud de la France.",
      image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Émilie Moreau",
      date: "20 février 2025",
      readTime: "4 min",
      category: "Bien-être"
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
          <h1 className="page-title">Notre Blog</h1>
          <p className="subtitle">
            Explorez nos articles sur l'art de vivre à la française, la culture, la gastronomie et bien plus encore.
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
                <Button className="w-fit bg-french-navy hover:bg-french-navy/90">
                  Lire l'Article
                </Button>
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
                <Button variant="ghost" className="text-french-navy hover:text-french-gold hover:bg-transparent p-0">
                  Lire l'Article →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Subscribe */}
        <div className="mt-16 bg-french-cream rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-french-navy mb-4">Restez Informé</h3>
          <p className="text-french-gray mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités directement dans votre boîte mail.
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
