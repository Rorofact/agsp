
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Lightbulb, Users, Zap, GraduationCap, Briefcase, User } from "lucide-react";

const Carriere = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Devenez Conseiller Patrimonial</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Nous aidons les talents passionnés par l'investissement à lancer leur cabinet de gestion de patrimoine.
          <br />
          Le cabinet AG Stratégie Patrimoine, vous accompagne dans votre parcours et vous aide à monter en compétence jusqu'à ce que vous vous sentiez prêt à gérer votre cabinet de manière autonome.
          <br />
          Vous trouverez ci-dessous, les différentes offres.
        </p>

        {/* Avantages Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-french-navy text-center mb-8">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="mx-auto bg-french-cream rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-french-gold" />
                </div>
                <CardTitle className="text-lg">Stratégie innovante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-french-gray">
                  Bénéficiez d'une approche moderne et digitalisée avec une application dédiée à l'accompagnement de vos clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="mx-auto bg-french-cream rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-french-gold" />
                </div>
                <CardTitle className="text-lg">Réseau Reconnu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-french-gray">
                  Rejoignez un groupement de conseillers indépendants avec plus de 20 ans d'expériences et une expertise reconnue
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="mx-auto bg-french-cream rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-french-gold" />
                </div>
                <CardTitle className="text-lg">Flexibilité Totale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-french-gray">
                  Développez votre activité à votre rythme, que ce soit en complément de revenus ou comme activité principale
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="mx-auto bg-french-cream rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-french-gold" />
                </div>
                <CardTitle className="text-lg">Apprentissage collectif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-french-gray">
                  Monter rapidement en compétence en apprenant à argumenter vos choix d'allocation face à des conseillers expérimentés
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nos postes Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-french-navy text-center mb-8">Nos offres</h2>
          <div className="space-y-8">
            {/* Conseiller Patrimonial */}
            <Card className="border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-french-cream rounded-full p-3">
                    <Briefcase className="h-8 w-8 text-french-gold" />
                  </div>
                  <CardTitle className="text-xl">Conseiller(ère) Patrimonial</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Description</h4>
                    <p className="text-french-gray">
                      Le Conseiller Patrimonial gère l'ensemble du processus : analyse des besoins clients, élaboration de stratégies patrimoniales personnalisées, et suivi complet des investissements en gestion de patrimoine.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Missions</h4>
                    <ul className="text-french-gray space-y-1">
                      <li>• Analyse des objectifs patrimoniaux clients</li>
                      <li>• Création de stratégies d'investissement sur mesure</li>
                      <li>• Présentation et suivi patrimonial personnalisé</li>
                      <li>• Gestion complète du portefeuille client</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultant Patrimoine */}
            <Card className="border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-french-cream rounded-full p-3">
                    <User className="h-8 w-8 text-french-gold" />
                  </div>
                  <CardTitle className="text-xl">Consultant(e) Patrimoine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Description</h4>
                    <p className="text-french-gray">
                      Le Consultant Patrimoine anime l'expérience client, découvre les besoins patrimoniaux et accompagne dans les projets d'investissement.
                      <br /><br />
                      Poste idéal pour débuter dans le conseil en patrimoine avec possibilité d'évolution vers conseiller patrimonial.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Missions</h4>
                    <ul className="text-french-gray space-y-1">
                      <li>• Animation de l'expérience client</li>
                      <li>• Identification des objectifs patrimoniaux</li>
                      <li>• Collaboration avec l'ingénieur patrimonial</li>
                      <li>• Développement d'équipe commerciale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ambassadeur Patrimoine */}
            <Card className="border-2 hover:border-french-gold transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-french-cream rounded-full p-3">
                    <Users className="h-8 w-8 text-french-gold" />
                  </div>
                  <CardTitle className="text-xl">Ambassadeur Patrimoine</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Description</h4>
                    <p className="text-french-gray">
                      L'Ambassadeur Patrimoine initie le contact client, identifie les projets patrimoniaux et oriente vers les spécialistes en gestion de patrimoine.
                      <br /><br />
                      Emploi temps partiel idéal pour découvrir le métier de conseiller patrimonial sans contraintes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-french-navy mb-3">Missions</h4>
                    <ul className="text-french-gray space-y-1">
                      <li>• Introduction à l'expérience client</li>
                      <li>• Identification des projets de vie</li>
                      <li>• Orientation vers les experts patrimoine</li>
                      <li>• Activité flexible et évolutive</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            className="bg-french-navy hover:bg-french-navy/90 text-white px-8 py-3"
            onClick={() => window.location.href = '/contact'}
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carriere;
