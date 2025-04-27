
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    content: "Hi there! I'm Harsh's AI assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(),
  },
];

// Predefined Q&A pairs for the chatbot
const QA_PAIRS = [
  {
    question: "What skills does Harsh have?",
    answer: "Harsh is a Full Stack Developer with expertise in Python, Django, JavaScript, React, and web development frameworks. He's also skilled in database management, API development, and responsive UI design."
  },
  {
    question: "What are Harsh's educational qualifications?",
    answer: "Harsh has a Bachelor's degree in Computer Science. He's continuously expanding his knowledge through self-learning and online courses in the latest web technologies."
  },
  {
    question: "What projects has Harsh worked on?",
    answer: "Harsh has worked on several projects including a College Event Management System, a Responsive Portfolio Website, and an Online Voting System. You can view all his projects in the Projects section."
  },
  {
    question: "How can I contact Harsh?",
    answer: "You can reach Harsh via email at hgarg9613@gmail.com, phone at +91 8368850238, or through his LinkedIn profile. Visit the Contact section for all communication channels."
  },
  {
    question: "Is Harsh available for freelance work?",
    answer: "Yes, Harsh is currently available for freelance work and new opportunities. Feel free to reach out if you have a project in mind."
  },
  {
    question: "What technologies does Harsh work with?",
    answer: "Harsh works with a range of technologies including Python, Django, Flask, JavaScript, React, Node.js, MongoDB, PostgreSQL, HTML5, CSS3, Tailwind CSS, and Git."
  },
  {
    question: "Can I download Harsh's resume?",
    answer: "Yes, you can download Harsh's resume from the Resume section of this website. There's a dedicated download button there."
  },
  {
    question: "What is Harsh's work experience?",
    answer: "Harsh has experience working on various web development projects, focusing on creating efficient, scalable, and user-friendly applications. He's seeking an entry-level position to further grow his skills."
  },
  {
    question: "What makes Harsh stand out as a developer?",
    answer: "Harsh stands out through his passion for creating elegant solutions to complex problems, his commitment to continuous learning, and his ability to adapt to new technologies quickly."
  },
  {
    question: "Where is Harsh based?",
    answer: "Harsh is based in India and is open to remote work opportunities worldwide."
  }
];

// Advanced features for suggesting relevant questions based on context
const getSuggestedQuestions = (messageHistory: Message[]): string[] => {
  // Logic to determine which questions to suggest based on conversation context
  const userMessageCount = messageHistory.filter(m => m.isUser).length;
  
  // Initial suggestions
  if (userMessageCount === 0) {
    return [
      "What skills does Harsh have?",
      "What projects has Harsh worked on?",
      "How can I contact Harsh?"
    ];
  }
  
  // After talking about skills
  const lastUserMessage = messageHistory.filter(m => m.isUser).pop()?.content.toLowerCase() || '';
  
  if (lastUserMessage.includes('skill') || lastUserMessage.includes('tech') || lastUserMessage.includes('technology')) {
    return [
      "What projects showcase these skills?",
      "What technologies does Harsh work with?",
      "Is Harsh looking for work opportunities?"
    ];
  }
  
  if (lastUserMessage.includes('project') || lastUserMessage.includes('work')) {
    return [
      "Can I see Harsh's resume?",
      "What makes Harsh stand out as a developer?",
      "Is Harsh available for freelance work?"
    ];
  }
  
  if (lastUserMessage.includes('contact') || lastUserMessage.includes('reach') || lastUserMessage.includes('email')) {
    return [
      "Where is Harsh based?",
      "Is Harsh available for remote work?",
      "What's the best way to discuss a potential project?"
    ];
  }
  
  // Default suggestions
  return [
    "What is Harsh's work experience?",
    "What technologies does Harsh work with?",
    "Can I download Harsh's resume?"
  ];
};

// Get response for user query
const getResponse = (query: string): string => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for direct matches in our QA pairs
  for (const pair of QA_PAIRS) {
    if (lowercaseQuery.includes(pair.question.toLowerCase())) {
      return pair.answer;
    }
  }
  
  // Keyword-based responses
  if (lowercaseQuery.includes('hello') || lowercaseQuery.includes('hi')) {
    return "Hello! How can I help you learn more about Harsh today?";
  }
  
  if (lowercaseQuery.includes('thank')) {
    return "You're welcome! Is there anything else you'd like to know about Harsh?";
  }
  
  if (lowercaseQuery.includes('skill') || lowercaseQuery.includes('tech')) {
    return QA_PAIRS[0].answer;
  }
  
  if (lowercaseQuery.includes('education') || lowercaseQuery.includes('study') || lowercaseQuery.includes('degree')) {
    return QA_PAIRS[1].answer;
  }
  
  if (lowercaseQuery.includes('project') || lowercaseQuery.includes('portfolio')) {
    return QA_PAIRS[2].answer;
  }
  
  if (lowercaseQuery.includes('contact') || lowercaseQuery.includes('email') || lowercaseQuery.includes('phone')) {
    return QA_PAIRS[3].answer;
  }
  
  if (lowercaseQuery.includes('freelance') || lowercaseQuery.includes('hire') || lowercaseQuery.includes('available')) {
    return QA_PAIRS[4].answer;
  }
  
  if (lowercaseQuery.includes('resume') || lowercaseQuery.includes('cv')) {
    return QA_PAIRS[6].answer;
  }
  
  if (lowercaseQuery.includes('experience') || lowercaseQuery.includes('work')) {
    return QA_PAIRS[7].answer;
  }
  
  // Default response
  return "I don't have specific information about that. Would you like to know about Harsh's skills, projects, or how to contact him?";
};

const ChatbotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      
      // Set initial suggested questions
      setSuggestedQuestions(getSuggestedQuestions(messages));
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Show welcoming toast
      toast({
        title: "Chatbot Assistant",
        description: "Hi there! How can I help you today?",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const simulateTyping = (response: string) => {
    setIsTyping(true);
    
    // Calculate typing delay based on response length (more realistic)
    const typingDelay = Math.min(Math.max(response.length * 20, 500), 2000);
    
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          content: response,
          isUser: false,
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
      
      // Update suggested questions based on the new message history
      const updatedMessages = [
        ...messages, 
        {
          id: Date.now().toString(),
          content: response,
          isUser: false,
          timestamp: new Date()
        }
      ];
      setSuggestedQuestions(getSuggestedQuestions(updatedMessages));
      
    }, typingDelay);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    // Get AI response
    const response = getResponse(inputValue);
    simulateTyping(response);
  };

  const handleSuggestedQuestionClick = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: question,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Get AI response
    const response = getResponse(question);
    simulateTyping(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-96 max-h-[70vh] flex flex-col rounded-lg overflow-hidden shadow-xl bg-background border border-border"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-accent text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <span className="font-medium">Harsh's Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-accent-foreground/20"
                onClick={toggleChat}
              >
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-background/80 backdrop-blur-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-accent text-white rounded-br-none"
                        : "bg-secondary text-foreground rounded-tl-none"
                    }`}
                  >
                    <p>{message.content}</p>
                    <div className={`text-xs mt-1 ${message.isUser ? "text-white/70" : "text-muted-foreground"}`}>
                      {new Intl.DateTimeFormat('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      }).format(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested questions */}
            <div className="px-4 py-2 bg-muted/30 flex overflow-x-auto gap-2 no-scrollbar">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="flex-shrink-0 text-xs bg-background px-3 py-1 rounded-full border border-border hover:bg-accent hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => handleSuggestedQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-background flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="w-full px-4 py-2 pr-10 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Sparkles 
                  size={16} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground opacity-70" 
                />
              </div>
              <Button
                onClick={handleSendMessage}
                className="h-10 w-10 rounded-full p-2 bg-accent hover:bg-accent/90"
                disabled={!inputValue.trim()}
              >
                <Send size={18} className="text-white" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotAssistant;
