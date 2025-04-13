
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface OffreEmploi {
  id: string;
  titre: string;
  description: string;
  lieu: string;
  type_contrat: string;
  date_publication: string;
}

const Carriere = () => {
  const [offres, setOffres] = useState<OffreEmploi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffres = async () => {
      try {
        const { data, error } = await supabase
          .from('offres_emploi')
          .select('*')
          .order('date_publication', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        setOffres(data || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des offres d\'emploi:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les offres d'emploi.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOffres();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Rejoignez notre équipe</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          Nous recherchons des talents passionnés par la gestion de patrimoine pour accompagner nos clients dans la réalisation de leurs objectifs financiers.
        </p>

        {loading ? (
          <div className="flex justify-center my-12">
            <div className="animate-pulse text-french-navy">Chargement des offres...</div>
          </div>
        ) : offres.length === 0 ? (
          <div className="text-center my-12">
            <h3 className="text-xl">Aucune offre disponible actuellement</h3>
            <p className="text-french-gray mt-2">Revenez vérifier ultérieurement ou contactez-nous directement.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offres.map((offre) => (
              <Card key={offre.id} className="border-2 border-french-cream shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-french-navy">{offre.titre}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin size={16} className="text-french-gold" />
                    {offre.lieu}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-french-gray text-sm">
                    <Clock size={16} />
                    <span>{offre.type_contrat}</span>
                    <span className="mx-1">•</span>
                    <Calendar size={16} />
                    <span>Publié le {formatDate(offre.date_publication)}</span>
                  </div>
                  <p className="line-clamp-4">{offre.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-french-navy hover:bg-french-navy/90">
                    Postuler
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carriere;
