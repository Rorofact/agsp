
import { cn } from "@/lib/utils";
import { MessageSegment, Message } from "./types";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ChatMessageProps {
  message: Message;
  onFeedback: (isPositive: boolean, messageId: number) => void;
  onLinkClick: () => void;
}

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
};

const parseMessageWithLinks = (text: string): MessageSegment[] => {
  // Regex pour trouver les liens au format [LIEN:/chemin:texte du lien]
  const regex = /\[LIEN:(\/[^:]*):([^\]]*)\]/g;
  
  // Diviser le texte en segments (texte normal et liens)
  const segments: MessageSegment[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Ajouter le texte avant le lien
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.substring(lastIndex, match.index)
      });
    }
    
    // Ajouter le lien
    segments.push({
      type: 'link',
      url: match[1],
      content: match[2]
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Ajouter le reste du texte après le dernier lien
  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.substring(lastIndex)
    });
  }
  
  return segments;
};

const ChatMessage = ({ message, onFeedback, onLinkClick }: ChatMessageProps) => {
  return (
    <div>
      <div
        className={cn(
          "mb-1 max-w-[80%] rounded-lg p-2 text-sm",
          message.isUser
            ? "ml-auto bg-french-navy text-white"
            : "mr-auto bg-french-cream text-french-navy"
        )}
      >
        {message.isUser ? (
          <div>{message.text}</div>
        ) : (
          <div>
            {parseMessageWithLinks(message.text).map((segment, index) => 
              segment.type === 'text' ? (
                <span key={index}>{segment.content}</span>
              ) : (
                <Link 
                  key={index} 
                  to={segment.url!} 
                  className="text-french-navy font-medium underline hover:text-french-gold"
                  onClick={onLinkClick}
                >
                  {segment.content}
                </Link>
              )
            )}
          </div>
        )}
        <div className={cn(
          "text-right text-xs mt-1",
          message.isUser ? "text-french-cream" : "text-french-gray"
        )}>
          {formatTime(message.timestamp)}
        </div>
      </div>
      
      {message.showFeedback && !message.isUser && (
        <div className="flex justify-end gap-2 mb-3 mr-auto">
          <span className="text-xs text-french-gray italic">Cette réponse vous a-t-elle aidé ?</span>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 text-green-600 hover:bg-transparent hover:text-green-700"
            onClick={() => onFeedback(true, message.id)}
          >
            <ThumbsUp size={14} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 text-red-600 hover:bg-transparent hover:text-red-700"
            onClick={() => onFeedback(false, message.id)}
          >
            <ThumbsDown size={14} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
