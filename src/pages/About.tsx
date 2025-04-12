
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, PhoneCall, Medal } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="page-title font-['Playfair_Display']">Qui suis-je</h1>
          <p className="subtitle">
            Découvrez mon parcours et mon approche en tant que conseiller en gestion de patrimoine
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
                <h2 className="text-2xl font-bold text-french-navy mb-2">Antoine Girard</h2>
                <p className="text-french-gray font-medium">Conseiller en Gestion de Patrimoine</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <Medal className="h-5 w-5 text-french-gold mr-3" />
                    <span>15+ ans d'expérience</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-french-gold mr-3" />
                    <span>01 23 45 67 89</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-french-gold mr-3" />
                    <span>contact@agstrategiepatrimoine.fr</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-french-gold mr-3" />
                    <span>Disponible sur rendez-vous</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-french-navy text-white">
                  Me contacter
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-french-navy mb-6">Mon approche</h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg">
                Diplômé en gestion de patrimoine et finances, j'accompagne depuis plus de 15 ans des particuliers et des entrepreneurs dans l'optimisation et la sécurisation de leur patrimoine.
              </p>
              
              <p className="text-lg">
                Ma philosophie repose sur une approche globale et personnalisée. Je prends le temps d'analyser votre situation actuelle, de comprendre vos objectifs et de vous proposer les solutions les plus adaptées à vos besoins spécifiques.
              </p>
              
              <p className="text-lg">
                L'indépendance est au cœur de ma pratique, ce qui me permet de vous recommander les meilleures solutions du marché sans conflit d'intérêt. Mon objectif est de construire une relation de confiance durable pour vous accompagner à chaque étape de votre vie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-french-gold">
                <h3 className="text-xl font-bold text-french-navy mb-3">Ma formation</h3>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Master en Gestion de Patrimoine</li>
                  <li>Certification AMF</li>
                  <li>Diplôme Expert en Stratégie Fiscale</li>
                  <li>Formation continue en droit patrimonial</li>
                </ul>
              </Card>
              
              <Card className="p-6 border-l-4 border-french-gold">
                <h3 className="text-xl font-bold text-french-navy mb-3">Mes valeurs</h3>
                <ul className="list-disc list-inside space-y-2 text-french-gray">
                  <li>Transparence et honnêteté</li>
                  <li>Écoute et disponibilité</li>
                  <li>Excellence et rigueur</li>
                  <li>Confidentialité absolue</li>
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
                "Grâce aux conseils d'Antoine, j'ai pu optimiser ma fiscalité et préparer sereinement ma retraite. Un accompagnement professionnel et personnalisé que je recommande vivement."
              </p>
              <p className="font-semibold">Sophie M., cadre dirigeante</p>
            </Card>
            
            <Card className="p-6">
              <p className="italic text-french-gray mb-4">
                "Un conseiller à l'écoute qui a su comprendre mes objectifs patrimoniaux et me proposer des solutions sur mesure. Une vraie relation de confiance s'est établie."
              </p>
              <p className="font-semibold">Michel D., entrepreneur</p>
            </Card>
            
            <Card className="p-6">
              <p className="italic text-french-gray mb-4">
                "Je cherchais un expert pour m'accompagner dans la transmission de mon entreprise. Antoine m'a guidé avec professionnalisme et efficacité tout au long du processus."
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
            Réserver un rendez-vous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
