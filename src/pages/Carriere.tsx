
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar } from "lucide-react";

const Carriere = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Aidez les français à investir judicieusement leur épargne en devenant CGP</h1>
        <p className="subtitle text-center mx-auto max-w-3xl mb-12">
          J'aide les talents passionnés par l'investissement à lancer leur cabinet de gestion de patrimoine, pour en savoir plus n'hésitez pas à me contacter.
        </p>
        
        <div className="text-center">
          <p className="text-lg text-french-gray max-w-2xl mx-auto mb-12">
            Nous recherchons des talents passionnés par la gestion de patrimoine pour accompagner nos clients dans la réalisation de leurs objectifs financiers.
          </p>
          
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
    </div>
  );
};

export default Carriere;
