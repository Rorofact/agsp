
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";

const FAQ = () => {
  // FAQ categories and questions
  const faqData = {
    commandes: [
      {
        id: "commandes-1",
        question: "Comment puis-je passer une commande ?",
        answer:
          "Vous pouvez passer une commande directement sur notre site web. Naviguez vers la page des produits, sélectionnez les articles qui vous intéressent, ajoutez-les au panier et suivez les instructions pour finaliser votre achat.",
      },
      {
        id: "commandes-2",
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les cartes de crédit et de débit (Visa, Mastercard, American Express), PayPal, ainsi que les virements bancaires pour les commandes importantes.",
      },
      {
        id: "commandes-3",
        question: "Comment puis-je suivre ma commande ?",
        answer:
          "Une fois votre commande expédiée, vous recevrez un e-mail de confirmation avec un numéro de suivi. Vous pourrez utiliser ce numéro pour suivre votre colis sur le site du transporteur ou dans votre espace client sur notre site.",
      },
      {
        id: "commandes-4",
        question: "Puis-je modifier ou annuler ma commande ?",
        answer:
          "Vous pouvez modifier ou annuler votre commande dans les 24 heures suivant sa passation en contactant notre service client. Au-delà de ce délai, nous ne pouvons garantir que la commande pourra être modifiée si elle est déjà en cours de préparation.",
      },
    ],
    livraisons: [
      {
        id: "livraisons-1",
        question: "Quels sont vos délais de livraison ?",
        answer:
          "Nos délais de livraison varient selon votre localisation. En France métropolitaine, comptez 2-3 jours ouvrables. Pour l'Europe, 3-5 jours ouvrables. Pour le reste du monde, 5-10 jours ouvrables.",
      },
      {
        id: "livraisons-2",
        question: "Livrez-vous à l'international ?",
        answer:
          "Oui, nous livrons dans la plupart des pays. Les frais de port et délais peuvent varier selon la destination. Veuillez consulter notre page sur les livraisons pour plus de détails.",
      },
      {
        id: "livraisons-3",
        question: "Les frais de livraison sont-ils offerts ?",
        answer:
          "Les frais de livraison sont offerts pour toute commande supérieure à 100€ en France métropolitaine et 150€ pour les livraisons internationales.",
      },
    ],
    produits: [
      {
        id: "produits-1",
        question: "D'où proviennent vos produits ?",
        answer:
          "Tous nos produits sont fabriqués en France, par des artisans et producteurs locaux sélectionnés pour leur savoir-faire et la qualité de leur travail.",
      },
      {
        id: "produits-2",
        question: "Vos produits sont-ils biologiques ?",
        answer:
          "Une grande partie de notre gamme de produits alimentaires et cosmétiques est certifiée biologique. Chaque fiche produit indique clairement les certifications obtenues.",
      },
      {
        id: "produits-3",
        question: "Comment entretenir mes produits ?",
        answer:
          "Chaque produit est accompagné d'instructions d'entretien spécifiques. Vous pouvez également consulter notre guide d'entretien en ligne pour des conseils détaillés par catégorie de produits.",
      },
    ],
    retours: [
      {
        id: "retours-1",
        question: "Quelle est votre politique de retour ?",
        answer:
          "Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un article. Le produit doit être dans son état d'origine, non utilisé et dans son emballage d'origine.",
      },
      {
        id: "retours-2",
        question: "Comment effectuer un retour ?",
        answer:
          "Pour effectuer un retour, connectez-vous à votre compte client, sélectionnez la commande concernée et suivez les instructions pour générer une étiquette de retour. Emballez soigneusement le produit et déposez-le au point relais indiqué.",
      },
      {
        id: "retours-3",
        question: "Dans quel délai serai-je remboursé ?",
        answer:
          "Une fois votre retour reçu et vérifié, le remboursement est traité dans un délai de 5 à 10 jours ouvrables. Le délai peut varier selon votre banque ou votre mode de paiement initial.",
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="page-title">Foire Aux Questions</h1>
          <p className="subtitle">
            Trouvez des réponses aux questions les plus fréquemment posées sur nos produits et services.
          </p>
        </div>

        {/* FAQ Tabs and Accordions */}
        <div className="max-w-3xl mx-auto mb-16">
          <Tabs defaultValue="commandes" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="commandes">Commandes</TabsTrigger>
              <TabsTrigger value="livraisons">Livraisons</TabsTrigger>
              <TabsTrigger value="produits">Produits</TabsTrigger>
              <TabsTrigger value="retours">Retours</TabsTrigger>
            </TabsList>

            {Object.entries(faqData).map(([category, questions]) => (
              <TabsContent
                key={category}
                value={category}
                className="border rounded-lg p-6 bg-white shadow-sm"
              >
                <Accordion type="single" collapsible className="w-full">
                  {questions.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-left font-medium text-french-navy">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-french-gray">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Contact Section */}
        <div className="bg-french-cream rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-french-navy mb-4">
            Vous n'avez pas trouvé de réponse ?
          </h3>
          <p className="text-french-gray mb-6">
            Notre équipe du service client est disponible pour répondre à toutes
            vos questions et vous aider dans vos démarches.
          </p>
          <Button className="bg-french-navy hover:bg-french-navy/90 gap-2">
            <Mail className="h-4 w-4" /> Contactez-nous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
