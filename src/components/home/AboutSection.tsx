
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Award, Building2, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        {/* Title and subtitle centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-french-navy mb-4">Qui suis-je ?</h2>
          <p className="text-lg text-french-gray max-w-3xl mx-auto">
            Découvrez mon parcours et mon approche en tant que conseillère en gestion de patrimoine
          </p>
        </div>

        {/* Main content: Alice info 1/3, approach 2/3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Alice Goyec info - 1/3 */}
          <div className="lg:col-span-1">
            <Card className="border-french-gold/20 h-fit">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-french-navy">Alice Goyec</h3>
                    <p className="text-lg font-semibold text-french-gold">Conseillière en Gestion de Patrimoine</p>
                    
                    <div className="space-y-3 text-french-gray">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-french-gold" />
                        <span>10+ ans d'expérience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-french-gold" />
                        <span>Capacités IAS, IOBSP, CIF, IMMO</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-french-gold" />
                        <span>Membre de la CNCEF Patrimoine</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-french-gold" />
                        <span>Inscrite à l'ORIAS sous le n° 25005313</span>
                      </div>
                    </div>
                  </div>
                  
                  <a href="https://calendly.com/agstrategiepatrimoine/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-french-gold hover:bg-french-gold/90 text-white w-full">
                      Me contacter
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right: Mon approche - 2/3 */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-french-navy">Mon approche</h3>
              <div className="text-french-gray space-y-4">
                <p>
                  Diplômée en commerce et finance avec une spécialisation en finance internationale, j'ai travaillé 10 ans en banque d'investissement. Tout d'abord en tant qu'analyste risque crédit au sein du groupe bancaire BPCE. Ma mission consistait en l'analyse des comptes de banques et d'entreprise afin de s'assurer de leur solidité financière.
                </p>
                <p>
                  Puis, j'ai traversé l'Atlantique et rejoins Dexia Crédit Local à New York en financement de projet d'infrastructure comme des hôpitaux, des champs éoliens, des autoroutes entre autres, situés en Amérique du nord et du sud. Et enfin, j'ai exercé en tant qu'assistant trader sur les produits structurés chez Société Générale.
                </p>
                <p>
                  J'ai ensuite voulu me reconnecter à l'économie réelle et pouvoir mettre les connaissances accumulées ces 10 années, au service de l'économie française en aidant les français à investir judicieusement leur épargne.
                </p>
                <p>
                  Aujourd'hui j'accompagne donc les particuliers et les entrepreneurs dans l'optimisation et la sécurisation de leur patrimoine.
                </p>
                <p>
                  Forte d'une expérience significative auprès de grands groupes bancaires, j'ai développé une expertise approfondie dans le conseil financier et la gestion d'actifs. Ainsi, je m'engage à vous offrir un service d'excellence.
                </p>
                <p>
                  Ma philosophie repose sur une approche personnalisée et sur mesure. Je prends le temps d'analyser votre situation actuelle, de comprendre vos objectifs et de vous proposer les solutions les plus adaptées à vos besoins spécifiques.
                </p>
              </div>

              {/* Formation and Expertise blocks under Mon approche */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="border-french-gold/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-french-navy mb-4">Ma formation</h4>
                    <div className="space-y-2 text-french-gray">
                      <p>Master Grande Ecole Spé Finance Internationale</p>
                      <p>Double diplôme de l'ESC Pau et de la London School of Economics</p>
                      <p>Certification AMF</p>
                      <p>Formation continue en ingénierie patrimonial</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-french-gold/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-french-navy mb-4">Mes domaines d'expertise</h4>
                    <div className="space-y-2 text-french-gray">
                      <p>Conseil en investissement (tout type d'actifs)</p>
                      <p>Optimisation fiscale</p>
                      <p>Optimisation trésorerie d'entreprise</p>
                      <p>Transmission de patrimoine</p>
                      <p>Protection familiale</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Client testimonials */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-french-navy mb-8">Avis clients</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-french-gold/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-french-gold fill-current" />
                  ))}
                </div>
                <p className="text-french-gray mb-4">
                  "Alice a su comprendre nos besoins et nous proposer des solutions parfaitement adaptées à notre situation familiale."
                </p>
                <p className="font-semibold text-french-navy">- Marie et Pierre D.</p>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-french-gold fill-current" />
                  ))}
                </div>
                <p className="text-french-gray mb-4">
                  "Un accompagnement professionnel et personnalisé. Alice nous a aidés à optimiser notre patrimoine de façon remarquable."
                </p>
                <p className="font-semibold text-french-navy">- Jean-Luc M.</p>
              </CardContent>
            </Card>
            
            <Card className="border-french-gold/20">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-french-gold fill-current" />
                  ))}
                </div>
                <p className="text-french-gray mb-4">
                  "Expertise exceptionnelle et conseil de qualité. Je recommande vivement Alice pour la gestion de patrimoine."
                </p>
                <p className="font-semibold text-french-navy">- Sophie L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
