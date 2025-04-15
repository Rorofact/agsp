
import { MinusCircle, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

const ChatHeader = ({ onClose, onMinimize }: ChatHeaderProps) => {
  return (
    <div className="bg-french-navy text-white p-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MessageCircle size={18} />
        <span className="font-medium">Chat d'assistance</span>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMinimize} 
          className="h-6 w-6 text-white hover:text-french-cream hover:bg-transparent"
        >
          <MinusCircle size={16} />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="h-6 w-6 text-white hover:text-french-cream hover:bg-transparent"
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
