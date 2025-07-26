
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { FileText, Clock, Calendar as CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const appointmentTypes = [
  {
    id: "discovery",
    title: "1er rdv de découverte",
    icon: <CalendarIcon className="h-10 w-10 text-french-gold" />,
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
    icon: <CalendarIcon className="h-10 w-10 text-french-gold" />,
    description: "Définissons ensemble une stratégie d'investissement adaptée à vos objectifs.",
    duration: "1h",
  },
  {
    id: "tax",
    title: "Optimisation fiscale",
    icon: <CalendarIcon className="h-10 w-10 text-french-gold" />,
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

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const formSchema = z.object({
  prenom: z.string().min(2, "Le prénom est requis"),
  nom: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  message: z.string().optional(),
  type_rdv: z.string().min(1, "Veuillez sélectionner un type de rendez-vous"),
  date: z.date({ required_error: "Veuillez sélectionner une date" }),
  heure: z.string().min(1, "Veuillez sélectionner une heure")
});

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      message: "",
      type_rdv: "",
      heure: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      // Simulation de l'envoi de la demande
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Rendez-vous demandé",
        description: "Nous vous contacterons pour confirmer votre rendez-vous.",
        duration: 5000,
      });
      
      // Réinitialiser le formulaire
      form.reset();
      setSelectedDate(undefined);
      
    } catch (error: any) {
      console.error("Erreur lors de la prise de rendez-vous:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la prise de rendez-vous.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="page-title text-center mb-4">Prendre rendez-vous</h1>
        <p className="subtitle text-center mx-auto">
          Choisissez le type de rendez-vous qui correspond à vos besoins et une date disponible dans notre calendrier.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 max-w-5xl mx-auto mt-12">
            <div>
              <h2 className="text-2xl font-bold text-french-navy mb-8">Type de rendez-vous</h2>
              
              <FormField
                control={form.control}
                name="type_rdv"
                render={({ field }) => (
                  <FormItem className="space-y-6">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {appointmentTypes.map((type) => (
                          <FormItem key={type.id}>
                            <Card
                              className={`border-2 transition-all cursor-pointer ${
                                field.value === type.id 
                                  ? "border-french-gold bg-french-cream/30" 
                                  : "border-transparent hover:border-french-cream"
                              }`}
                              onClick={() => field.onChange(type.id)}
                            >
                              <CardContent className="p-6">
                                <RadioGroupItem
                                  value={type.id}
                                  id={type.id}
                                  className="sr-only"
                                />
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
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-french-navy mb-8">Date et heure du rendez-vous</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sélectionnez une date</h3>
                  <div className="border rounded-md p-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        if (date) {
                          form.setValue("date", date);
                        }
                      }}
                      disabled={[
                        { before: new Date() },
                        { dayOfWeek: [0, 6] } // Disable weekends
                      ]}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Sélectionnez une heure</h3>
                  
                  <FormField
                    control={form.control}
                    name="heure"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-2 gap-2"
                          >
                            {selectedDate ? (
                              timeSlots.map((time) => (
                                <FormItem key={time} className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value={time} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {time}
                                  </FormLabel>
                                </FormItem>
                              ))
                            ) : (
                              <p className="text-french-gray col-span-2">Veuillez d'abord sélectionner une date.</p>
                            )}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-french-navy mb-8">Vos informations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre prénom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre numéro de téléphone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Message (facultatif)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Précisez vos disponibilités ou toute information utile pour votre rendez-vous"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-french-navy hover:bg-french-navy/90 text-white py-6"
                disabled={loading || Object.keys(form.formState.errors).length > 0}
              >
                {loading ? "Traitement en cours..." : "Confirmer ma demande"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
