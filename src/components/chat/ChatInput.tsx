
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSend(message);
    setMessage("");
  };

  return (
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
  );
};

export default ChatInput;
