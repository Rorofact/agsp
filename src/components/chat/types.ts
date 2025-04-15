
export interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  showFeedback?: boolean;
}

export interface MessageSegment {
  type: 'text' | 'link';
  content: string;
  url?: string;
}
