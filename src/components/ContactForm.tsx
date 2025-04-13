
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation des champs obligatoires
      if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
        throw new Error('Veuillez remplir tous les champs obligatoires.');
      }

      // Envoi du message à Supabase
      const { error } = await supabase
        .from('messages_contact')
        .insert({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message envoyé!",
        description: "Nous vous contacterons très bientôt.",
      });

      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: "Erreur!",
        description: "Une erreur s'est produite lors de l'envoi de votre message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-french-navy mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-french-gold"
          />
        </div>
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-french-navy mb-1">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-french-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-french-navy mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-french-gold"
        />
      </div>
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-french-navy mb-1">
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          value={formData.telephone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-french-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-french-navy mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-french-gold"
        ></textarea>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-french-navy hover:bg-french-navy/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
      <p className="text-xs text-french-gray text-center mt-2">
        <span className="text-red-500">*</span> Champs obligatoires
      </p>
    </form>
  );
};

export default ContactForm;
