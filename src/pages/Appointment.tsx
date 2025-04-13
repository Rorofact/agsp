
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, PieChart, LineChart, Clock } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const appointmentTypes = [
  {
    id: "discovery",
    title: "1er rdv de découverte",
    icon: <Calendar className="h-10 w-10 text-french-gold" />,
    description: "Faisons connaissance et découvrons ensemble vos besoins et objectifs patrimoniaux.",
    duration: "45 min",
  },
  {
    id: "assessment",
    title: "Bilan patrimonial complet",
    icon: <FileText className="h-10 w-10 text-french-gold" />,
    description: "Une analyse complète de votre situation patrimoniale actuelle et de vos objectifs.",
    duration: "1h30",
  },
  {
    id: "investment",
    title: "Stratégie d'investissement",
    icon: <LineChart className="h-10 w-10 text-french-gold" />,
    description: "Définissons ensemble une stratégie d'investissement adaptée à vos objectifs.",
    duration: "1h",
  },
  {
    id: "tax",
    title: "Optimisation fiscale",
    icon: <PieChart className="h-10 w-10 text-french-gold" />,
    description: "Identifions les solutions pour réduire votre charge fiscale de manière légale.",
    duration: "1h",
  },
  {
    id: "followup",
    title: "Suivi patrimonial",
    icon: <Clock className="h-10 w-10 text-french-gold" />,
    description: "Faisons le point sur l'évolution de votre patrimoine et ajustons votre stratégie.",
    duration: "45 min",
  },
];

const Appointment = () => {
  const [selectedAppointment, setSelectedAppointment] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Rendez-vous demandé",
      description: "Nous vous contacterons prochainement pour confirmer votre rendez-vous.",
      duration: 5000,
    });
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Prendre rendez-vous</h1>
        <p className="subtitle text-center mx-auto">
          Choisissez le type de rendez-vous qui correspond à vos besoins et nous vous contacterons dans les plus brefs délais.
        </p>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-french-navy mb-8">Type de rendez-vous</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appointmentTypes.map((type) => (
              <Card 
                key={type.id}
                className={`border-2 transition-all cursor-pointer ${
                  selectedAppointment === type.id 
                    ? "border-french-gold bg-french-cream/30" 
                    : "border-transparent hover:border-french-cream"
                }`}
                onClick={() => setSelectedAppointment(type.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-french-gray mb-4">{type.description}</p>
                    <div className="flex items-center text-french-navy">
                      <Clock size={16} className="mr-2" />
                      <span>{type.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-french-navy mb-6">Vos informations</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium">Prénom</label>
                  <Input id="firstName" placeholder="Votre prénom" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium">Nom</label>
                  <Input id="lastName" placeholder="Votre nom" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">Téléphone</label>
                <Input id="phone" placeholder="Votre numéro de téléphone" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Message (facultatif)</label>
                <Textarea 
                  id="message" 
                  placeholder="Précisez vos disponibilités ou toute information utile pour votre rendez-vous"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-french-navy hover:bg-french-navy/90 text-white py-6"
                  disabled={!selectedAppointment}
                >
                  Confirmer ma demande
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
