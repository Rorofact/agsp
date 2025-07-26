
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, PhoneCall, Medal, Building, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="page-title font-['Playfair_Display']">Qui suis-je</h1>
          <p className="subtitle">
            Découvrez mon parcours et mon approche en tant que conseillère en gestion de patrimoine
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-16">
          <div className="w-full lg:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-w-3 aspect-h-4 bg-french-cream">
                <div className="flex items-center justify-center h-full">
                  <span className="text-4xl font-semibold text-french-navy">AG</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-french-navy mb-2">Alice Goyec</h2>
                <p className="text-french-gray font-medium">Conseillère en Gestion de Patrimoine</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <Medal className="h-5 w-5 text-french-gold mr-3" />
                    <span>10+ ans d'expérience</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-french-gold mr-3" />
                    <span>133 rue du Ranelagh<br />75016 Paris, France</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-french-gold mr-3" />
                    <span>01 23 45 67 89</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-french-gold mr-3" />
                    <span>ag.strategiepatrimoine@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-french-gold mr-3" />
                    <span>Disponible sur rendez-vous</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-french-navy text-white">
                  <Link to="/contact">Me contacter</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-french-navy mb-6">Mon approche</h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg">
                Diplômée en commerce et finance avec une spécialisation en finance internationale, j'ai travaillé 10 ans en banque d'investissement. Tout d'abord en tant qu'analyste risque crédit au sein du groupe bancaire BPCE. Ma mission consistait en l'analyse des comptes de banques et d'entreprise afin de s'assurer de leur solidité financière. Puis, j'ai traversé l'Atlantique et rejoins Dexia Crédit Local à New York en financement de projet d'infrastructure comme des hôpitaux, des champs éoliens, des autoroutes entre autres, situés en Amérique du nord et du sud. Et enfin, j'ai exercé en tant qu'assistant trader sur les produits structurés chez Société Générale.
              </p>
              
              <p className="text-lg">
                J'ai ensuite voulu me reconnecter à l'économie réelle et pouvoir mettre les connaissances accumulées ces 10 années, au service de l'économie française en aidant les français à investir judicieusement leur épargne.
              </p>
              
              <p className="text-lg">
                Aujourd'hui j'accompagne donc les particuliers et les entrepreneurs dans l'optimisation et la sécurisation de leur patrimoine. Forte d'une expérience significative auprès de grands groupes bancaires, j'ai développé une expertise approfondie dans le conseil financier et la gestion d'actifs. Ainsi, je m'engage à vous offrir un service d'excellence.
              </p>
              
              <p className="text-lg">
                Ma philosophie repose sur une approche personnalisée et sur mesure. Je prends le temps d'analyser votre situation actuelle, de comprendre vos objectifs et de vous proposer les solutions les plus adaptées à vos besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-french-gold">
                <h3 className="text-xl font-bold text-french-navy mb-3">Ma formation</h3>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Master Grande Ecole Spé Finance Internationale</li>
                  <li>Double diplôme de l'ESC Pau et de la London School of Economics.</li>
                  <li>Certification AMF</li>
                  <li>Formation continue en ingénierie patrimonial</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-l-4 border-french-gold">
                <h3 className="text-xl font-bold text-french-navy mb-3">Mes domaines d'expertise</h3>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Conseil en investissement (tout type d'actifs)</li>
                  <li>Optimisation fiscale</li>
                  <li>Stratégies de retraite</li>
                  <li>Transmission de patrimoine</li>
                  <li>Protection familiale</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-french-navy mb-8 text-center">Ce que disent mes clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <p className="italic text-french-gray mb-4">
                "Grâce aux conseils d'Alice, j'ai pu optimiser ma fiscalité et préparer sereinement ma retraite. Un accompagnement professionnel et personnalisé que je recommande vivement."
              </p>
              <p className="font-semibold">Sophie M., cadre dirigeante</p>
            </Card>
            
            <Card className="p-6">
              <p className="italic text-french-gray mb-4">
                "Une conseillère à l'écoute qui a su comprendre mes objectifs patrimoniaux et me proposer des solutions sur mesure. Une vraie relation de confiance s'est établie."
              </p>
              <p className="font-semibold">Michel D., entrepreneur</p>
            </Card>
            
            <Card className="p-6">
              <p className="italic text-french-gray mb-4">
                "Je cherchais une experte pour m'accompagner dans la transmission de mon entreprise. Alice m'a guidé avec professionnalisme et efficacité tout au long du processus."
              </p>
              <p className="font-semibold">Philippe L., chef d'entreprise</p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-french-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-french-navy mb-4">
            Prenez rendez-vous pour un premier entretien gratuit
          </h2>
          <p className="text-french-gray max-w-2xl mx-auto mb-6">
            Discutons ensemble de vos objectifs patrimoniaux et des solutions adaptées à votre situation personnelle.
          </p>
          <Button className="bg-french-navy text-white px-8 py-6 text-lg">
            <Link to="/rendez-vous">Réserver un rendez-vous</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
