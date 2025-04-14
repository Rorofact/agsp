
import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="page-title">Contactez-nous</h1>
          <p className="subtitle max-w-2xl mx-auto">
            Nous sommes à votre écoute. Choisissez comment vous souhaitez nous contacter.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue="contact" 
            className="w-full mb-8"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">Formulaire de contact</TabsTrigger>
              <TabsTrigger value="rendezvous">Prendre rendez-vous</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ContactForm />
                </div>
                
                <div className="bg-french-cream rounded-lg p-8 space-y-6">
                  <h2 className="text-xl font-semibold text-french-navy mb-4">Nos coordonnées</h2>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-french-gold h-6 w-6" />
                    <div>
                      <p className="font-medium text-french-navy">Adresse</p>
                      <p className="text-french-gray">123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="text-french-gold h-6 w-6" />
                    <div>
                      <p className="font-medium text-french-navy">Téléphone</p>
                      <p className="text-french-gray">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="text-french-gold h-6 w-6" />
                    <div>
                      <p className="font-medium text-french-navy">Email</p>
                      <p className="text-french-gray">contact@agstrategiepatrimoine.fr</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rendezvous" className="mt-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-8">
                  <Calendar className="mx-auto h-12 w-12 text-french-gold mb-3" />
                  <h2 className="text-2xl font-semibold text-french-navy">Prendre rendez-vous</h2>
                  <p className="text-french-gray mt-2">
                    Planifiez une consultation avec l'un de nos conseillers en patrimoine
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-french-cream rounded-lg p-6">
                    <h3 className="font-medium text-french-navy mb-2">Consultation en ligne</h3>
                    <p className="text-french-gray mb-4">
                      Échangez avec un conseiller via vidéoconférence depuis le confort de votre domicile
                    </p>
                    <Link to="/rendez-vous">
                      <Button className="w-full bg-french-navy hover:bg-french-navy/90">
                        Réserver une consultation en ligne
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="bg-french-cream rounded-lg p-6">
                    <h3 className="font-medium text-french-navy mb-2">Consultation dans nos bureaux</h3>
                    <p className="text-french-gray mb-4">
                      Visitez-nous à notre bureau de Paris pour une consultation personnalisée
                    </p>
                    <Link to="/rendez-vous">
                      <Button className="w-full bg-french-navy hover:bg-french-navy/90">
                        Réserver un rendez-vous au bureau
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="bg-french-cream rounded-lg p-6">
                    <h3 className="font-medium text-french-navy mb-2">Consultation téléphonique</h3>
                    <p className="text-french-gray mb-4">
                      Échangez avec un conseiller par téléphone pour une première prise de contact
                    </p>
                    <Link to="/rendez-vous">
                      <Button className="w-full bg-french-navy hover:bg-french-navy/90">
                        Demander un appel téléphonique
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Contact;
