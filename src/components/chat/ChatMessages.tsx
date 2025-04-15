
import { useRef, useEffect } from "react";
import { Message } from "./types";
import ChatMessage from "./ChatMessage";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  onFeedback: (isPositive: boolean, messageId: number) => void;
  onLinkClick: () => void;
}

const ChatMessages = ({ messages, isLoading, onFeedback, onLinkClick }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto p-3 bg-gray-50">
      {messages.map((msg) => (
        <ChatMessage 
          key={msg.id} 
          message={msg} 
          onFeedback={onFeedback}
          onLinkClick={onLinkClick}
        />
      ))}
      <div ref={messagesEndRef} />
      {isLoading && (
        <div className="text-center text-french-gray text-sm italic">
          En train de générer une réponse...
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
