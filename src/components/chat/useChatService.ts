
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Message } from "./types";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useChatService = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'Alice Goyec. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (messageText: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-chat-response', {
        body: JSON.stringify({ message: messageText })
      });

      if (error) throw error;

      const botResponse: Message = {
        id: messages.length + 2,
        text: data.response,
        isUser: false,
        timestamp: new Date(),
        showFeedback: true,
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Erreur lors de la génération de la réponse:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Désolé, je n'ai pas pu générer de réponse pour le moment.",
        isUser: false,
        timestamp: new Date(),
        showFeedback: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (isPositive: boolean, messageId: number) => {
    // Update message to hide feedback buttons
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? {...msg, showFeedback: false} 
          : msg
      )
    );

    if (!isPositive) {
      toast({
        title: "Besoin d'aide supplémentaire ?",
        description: "Nous vous redirigeons vers notre page de contact pour une assistance personnalisée.",
        duration: 3000,
      });
      
      setTimeout(() => {
        navigate("/contact");
      }, 1500);
    } else {
      toast({
        title: "Merci pour votre retour !",
        description: "Nous sommes ravis d'avoir pu vous aider.",
        duration: 3000,
      });
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    handleFeedback,
  };
};
