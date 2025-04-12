
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Star, TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-french-navy to-french-navy/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Playfair_Display']">
              Découvrez l'Art de Vivre à la Française
            </h1>
            <p className="text-xl max-w-3xl mb-8">
              Une collection exclusive qui célèbre l'élégance, la sophistication et le savoir-faire français.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-french-gold hover:bg-french-gold/90 text-french-navy text-lg px-8 py-6">
                Nos Produits
              </Button>
              <Button variant="outline" className="border-white hover:bg-white/10 text-white text-lg px-8 py-6">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-french-navy mb-4">Pourquoi Nous Choisir</h2>
            <p className="text-french-gray max-w-2xl mx-auto">
              Nous nous engageons à offrir des produits de la plus haute qualité, fabriqués avec passion et expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <Award className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Qualité Premium</h3>
                  <p className="text-french-gray">
                    Des produits fabriqués avec les meilleurs matériaux et un souci du détail exceptionnel.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Tendances Actuelles</h3>
                  <p className="text-french-gray">
                    Des créations qui suivent les dernières tendances tout en conservant un charme intemporel.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <Star className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Savoir-faire Français</h3>
                  <p className="text-french-gray">
                    L'excellence artisanale française au service de votre satisfaction.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-french-cream p-3 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-french-navy" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Service Client</h3>
                  <p className="text-french-gray">
                    Une équipe dévouée pour vous accompagner et répondre à toutes vos questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-french-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-french-navy mb-4">
                Prêt à découvrir notre collection ?
              </h2>
              <p className="text-french-gray max-w-lg">
                Explorez notre gamme de produits exclusifs et laissez-vous séduire par l'élégance à la française.
              </p>
            </div>
            <Button className="bg-french-navy hover:bg-french-navy/90 text-white text-lg px-8 py-6">
              Voir Nos Produits
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
