
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-french-navy mb-4">FAQ</h2>
          <p className="text-french-gray max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                En quoi consiste exactement votre accompagnement en gestion de patrimoine ?
              </AccordionTrigger>
              <AccordionContent>
                Mon rôle est de vous accompagner dans l'organisation et l'optimisation de votre situation financière. Que ce soit pour investir, réduire votre fiscalité, préparer votre retraite ou transmettre votre patrimoine, je vous propose des solutions personnalisées, en toute indépendance et en fonction de vos objectifs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Est-ce que vous travaillez uniquement avec des personnes déjà riches ?
              </AccordionTrigger>
              <AccordionContent>
                Pas du tout ! La gestion de patrimoine concerne tout le monde, dès qu'on souhaite mieux gérer son argent, préparer des projets ou sécuriser son avenir financier.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Êtes-vous indépendante ou rattachée à une banque ou un assureur ?
              </AccordionTrigger>
              <AccordionContent>
                Je suis conseillère indépendante, membre du réseau Inovea, un groupement de professionnels en gestion de patrimoine. Cette structure me permet d'avoir accès à un large panel de partenaires (banques, assureurs, sociétés de gestion) tout en conservant une totale liberté dans mes recommandations. Mon objectif : vous proposer les solutions les plus adaptées à votre situation, sans aucun conflit d'intérêt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Proposez-vous des solutions d'investissement responsables ou durables ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument. Si vous êtes sensible à l'impact de vos placements, je vous oriente vers des supports responsables, éthiques et alignés avec vos valeurs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Puis-je être accompagné à distance ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, les rendez-vous peuvent se faire à distance, en visioconférence, où que vous soyez en France. Je m'adapte à votre emploi du temps pour plus de flexibilité et de confort.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
