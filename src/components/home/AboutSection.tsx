
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Medal, PhoneCall, Calendar, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-french-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-french-navy mb-4">Qui Suis-je</h2>
          <p className="text-french-gray max-w-2xl mx-auto">
            Découvrez mon parcours et mon approche en tant que conseillère en gestion de patrimoine
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="aspect-w-3 aspect-h-4 bg-french-cream">
                <div className="flex items-center justify-center h-full py-8">
                  <div className="w-24 h-24 bg-french-navy rounded-full"></div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-french-navy mb-2">Alice Goyec</h3>
                <p className="text-french-gray font-medium">Conseillère en Gestion de Patrimoine</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <Medal className="h-5 w-5 text-french-gold mr-3" />
                    <span>10+ ans d'expérience</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-french-gold mr-3" />
                    <span>Capacités IAS, IOBSP, CIF, IMMO</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-french-gold mr-3" />
                    <span>Membre de la CNCEF Patrimoine</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-french-gold mr-3" />
                    <span>Inscrite à l'ORIAS sous le n° 25005313</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-french-navy text-white">
                  <a href="https://calendly.com/agstrategiepatrimoine/30min" target="_blank" rel="noopener noreferrer">
                    Me contacter
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold text-french-navy mb-6">Mon approche</h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg">
                Diplômée en commerce et finance avec une spécialisation en finance internationale, j'ai travaillé 10 ans en banque d'investissement. Tout d'abord en tant qu'analyste risque crédit au sein du groupe bancaire BPCE. Ma mission consistait en l'analyse des comptes de banques et d'entreprise afin de s'assurer de leur solidité financière.
              </p>
              
              <p className="text-lg">
                Puis, j'ai traversé l'Atlantique et rejoins Dexia Crédit Local à New York en financement de projet d'infrastructure comme des hôpitaux, des champs éoliens, des autoroutes entre autres, situés en Amérique du nord et du sud. Et enfin, j'ai exercé en tant qu'assistant trader sur les produits structurés chez Société Générale.
              </p>
              
              <p className="text-lg">
                J'ai ensuite voulu me reconnecter à l'économie réelle et pouvoir mettre les connaissances accumulées ces 10 années, au service de l'économie française en aidant les français à investir judicieusement leur épargne.
              </p>

              <p className="text-lg">
                Aujourd'hui j'accompagne donc les particuliers et les entrepreneurs dans l'optimisation et la sécurisation de leur patrimoine.
              </p>

              <p className="text-lg">
                Forte d'une expérience significative auprès de grands groupes bancaires, j'ai développé une expertise approfondie dans le conseil financier et la gestion d'actifs. Ainsi, je m'engage à vous offrir un service d'excellence.
              </p>

              <p className="text-lg">
                Ma philosophie repose sur une approche personnalisée et sur mesure. Je prends le temps d'analyser votre situation actuelle, de comprendre vos objectifs et de vous proposer les solutions les plus adaptées à vos besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-french-gold">
                <h4 className="text-xl font-bold text-french-navy mb-3">Ma formation</h4>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Master Grande Ecole Spé Finance Internationale</li>
                  <li>Double diplôme de l'ESC Pau et de la London School of Economics.</li>
                  <li>Certification AMF</li>
                  <li>Formation continue en ingénierie patrimonial</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-l-4 border-french-gold">
                <h4 className="text-xl font-bold text-french-navy mb-3">Mes domaines d'expertise</h4>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Conseil en investissement (tout type d'actifs)</li>
                  <li>Optimisation fiscale</li>
                  <li>Optimisation trésorerie d'entreprise</li>
                  <li>Transmission de patrimoine</li>
                  <li>Protection familiale</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-md bg-white">
              <p className="italic text-french-gray mb-4">
                "Grâce aux conseils d'Alice, j'ai pu optimiser ma fiscalité et préparer sereinement ma retraite. Un accompagnement professionnel et personnalisé que je recommande vivement."
              </p>
              <p className="font-semibold">Sophie M., cadre dirigeante</p>
            </Card>
            
            <Card className="p-6 shadow-md bg-white">
              <p className="italic text-french-gray mb-4">
                "Une conseillère à l'écoute qui a su comprendre mes objectifs patrimoniaux et me proposer des solutions sur mesure. Une vraie relation de confiance s'est établie."
              </p>
              <p className="font-semibold">Michel D., entrepreneur</p>
            </Card>
            
            <Card className="p-6 shadow-md bg-white">
              <p className="italic text-french-gray mb-4">
                "Je cherchais une experte pour m'accompagner dans la transmission de mon entreprise. Alice m'a guidé avec professionnalisme et efficacité tout au long du processus."
              </p>
              <p className="font-semibold">Philippe L., chef d'entreprise</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
