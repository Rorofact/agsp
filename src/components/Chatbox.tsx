
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, MinusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage("");
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-chat-response', {
        body: JSON.stringify({ message })
      });

      if (error) throw error;

      const botResponse: Message = {
        id: messages.length + 2,
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Erreur lors de la génération de la réponse:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Désolé, je n'ai pas pu générer de réponse pour le moment.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-french-navy hover:bg-french-navy/90 shadow-lg z-30"
      >
        <MessageCircle size={24} />
      </Button>

      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 z-30 transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none",
          isMinimized ? "h-12" : "h-auto"
        )}
      >
        <Card className="overflow-hidden border border-french-navy/20 shadow-lg">
          <div className="bg-french-navy text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="font-medium">Chat d'assistance</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={minimizeChat} className="h-6 w-6 text-white hover:text-french-cream hover:bg-transparent">
                <MinusCircle size={16} />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-6 w-6 text-white hover:text-french-cream hover:bg-transparent">
                <X size={16} />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-3 bg-gray-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "mb-3 max-w-[80%] rounded-lg p-2 text-sm",
                      msg.isUser
                        ? "ml-auto bg-french-navy text-white"
                        : "mr-auto bg-french-cream text-french-navy"
                    )}
                  >
                    <div>{msg.text}</div>
                    <div className={cn(
                      "text-right text-xs mt-1",
                      msg.isUser ? "text-french-cream" : "text-french-gray"
                    )}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-center text-french-gray text-sm italic">
                    En train de générer une réponse...
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-3 bg-white border-t flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-grow"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="bg-french-navy hover:bg-french-navy/90"
                  disabled={isLoading}
                >
                  <Send size={16} />
                </Button>
              </form>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Chatbox;
