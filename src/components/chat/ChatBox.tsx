
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useChatService } from "./useChatService";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { messages, isLoading, sendMessage, handleFeedback } = useChatService();

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

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
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
          <ChatHeader onClose={closeChat} onMinimize={minimizeChat} />

          {!isMinimized && (
            <>
              <ChatMessages 
                messages={messages} 
                isLoading={isLoading} 
                onFeedback={handleFeedback}
                onLinkClick={handleLinkClick}
              />
              <ChatInput onSend={sendMessage} isLoading={isLoading} />
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default ChatBox;
