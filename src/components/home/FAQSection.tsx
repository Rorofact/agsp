
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLocation } from "react-router-dom";

const FAQSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const faqData = [
    {
      question: "Quels sont vos domaines d'expertise ?",
      answer: "Nous sommes spécialisés dans la gestion de patrimoine, l'investissement immobilier, la défiscalisation, la préparation de la retraite, et l'optimisation fiscale. Notre expertise couvre tous les aspects de la gestion patrimoniale."
    },
    {
      question: "Comment se déroule un premier rendez-vous ?",
      answer: "Le premier rendez-vous est gratuit et sans engagement. Nous analysons votre situation patrimoniale actuelle, vos objectifs et vous proposons des solutions adaptées à votre profil d'investisseur."
    },
    {
      question: "Quels sont vos frais de conseil ?",
      answer: "Nos frais dépendent du type de mission et de la complexité de votre dossier. Nous vous proposons une tarification transparente, définie dès le début de notre collaboration."
    },
    {
      question: "Proposez-vous un suivi personnalisé ?",
      answer: "Oui, nous assurons un suivi régulier de vos investissements et de l'évolution de votre patrimoine. Nous vous rencontrons au minimum une fois par an pour faire le point sur votre situation."
    },
    {
      question: "Travaillez-vous avec tous les profils d'investisseurs ?",
      answer: "Nous accompagnons tous les profils, du jeune actif souhaitant commencer à investir aux retraités cherchant à optimiser leur patrimoine. Nous accompagnons également les entrepreneurs et optimisons la gestion de leur trésorerie d'entreprise. Nos solutions s'adaptent à chaque situation."
    }
  ];

  if (!isHomePage) {
    // If not on home page, scroll to home page FAQ section
    const handleFAQClick = () => {
      window.location.href = '/#faq';
    };

    return (
      <section className="py-16 bg-french-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-french-navy mb-8">Questions Fréquentes</h2>
          <p className="text-french-gray mb-8">
            Consultez notre FAQ complète sur la page d'accueil pour obtenir des réponses à toutes vos questions.
          </p>
          <button 
            onClick={handleFAQClick}
            className="bg-french-navy text-white px-6 py-3 rounded-lg hover:bg-french-navy/90 transition-colors"
          >
            Voir la FAQ complète
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-16 bg-french-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-french-navy mb-4">Questions Fréquentes</h2>
          <p className="text-french-gray max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services de gestion de patrimoine.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="font-semibold text-french-navy">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-french-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
