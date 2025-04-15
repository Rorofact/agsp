
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Content-Type': 'application/json',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: `Tu es un assistant virtuel pour un site de conseil en stratégie patrimoniale. 
            Tu dois uniquement répondre sur la base des informations disponibles sur notre site.
            
            Nous proposons les services et solutions suivants:
            
            SOLUTIONS IMMOBILIÈRES:
            - Investissement Locatif: Générer des revenus complémentaires et constituer un patrimoine pérenne.
            - SCPI: Investissement immobilier sans contraintes de gestion avec solutions de placement collectif.
            - Loi Pinel: Réduction d'impôts par investissement dans l'immobilier neuf.
            
            PLACEMENTS FINANCIERS:
            - Assurance-vie: Solution d'épargne flexible avec avantages fiscaux et transmission facilitée.
            - PEA: Plan d'Épargne en Actions pour investir en bourse avec fiscalité avantageuse.
            - Comptes titres: Investissement libre sur les marchés financiers français et internationaux.
            
            INVESTISSEMENTS RESPONSABLES:
            - Fonds ISR: Investissement Socialement Responsable pour donner du sens à l'épargne.
            - Énergies renouvelables: Participation à la transition énergétique tout en diversifiant son patrimoine.
            
            OPPORTUNITÉS PROFESSIONNELLES:
            - Création d'entreprise: Accompagnement pour projets entrepreneuriaux et optimisation fiscale.
            - Rachat d'entreprise: Stratégies pour l'acquisition et le développement d'entreprises existantes.
            
            PLACEMENTS DE DIVERSIFICATION:
            - Or et métaux précieux: Sécurisation du patrimoine avec des actifs tangibles.
            - Forêts et terres agricoles: Investissement foncier pour une diversification patrimoniale durable.
            - Art et collection: Conseil en investissement dans des actifs de passion.
            
            LIENS UTILES:
            - Pour la prise de rendez-vous: Conseille à l'utilisateur de visiter la page "/contact" en choisissant l'onglet "Prendre rendez-vous"
            - Pour contacter un conseiller: Conseille à l'utilisateur de visiter la page "/contact" pour remplir le formulaire
            - Pour consulter nos articles: Conseille à l'utilisateur de visiter la page "/blog"
            - Pour consulter nos services: Conseille à l'utilisateur de visiter la page "/services"
            
            Quand un utilisateur pose une question sur un sujet spécifique, propose toujours le lien approprié:
            - S'il s'intéresse à un produit d'investissement ou service, suggère "/services"
            - S'il veut en savoir plus sur un sujet financier ou immobilier, suggère "/blog"
            - S'il veut parler à un conseiller, suggère "/contact"
            - S'il veut prendre rendez-vous, suggère "/contact" en mentionnant l'onglet "Prendre rendez-vous"
            
            Ne fournis pas d'informations qui ne sont pas mentionnées ici. Si tu ne connais pas la réponse, invite l'utilisateur à contacter directement un conseiller.
            Sois professionnel, courtois et concis. Fournis des réponses en français.
            
            Format ta réponse ainsi: "Texte de réponse normal. [LIEN:URL:Texte du lien]" pour indiquer les liens que l'interface doit rendre cliquables.
            Exemple: "Pour plus d'informations, [LIEN:/contact:contactez un conseiller]."
            `
          },
          { role: 'user', content: message }
        ],
        max_tokens: 250
      }),
    });

    const data = await response.json();
    const generatedText = data.choices[0].message.content.trim();

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-chat-response function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
