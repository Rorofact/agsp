
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="page-title">Contactez-nous</h1>
          <p className="subtitle max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande d'information.
          </p>
        </div>
        
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
      </div>
    </div>
  );
};

export default Contact;
