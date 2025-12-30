import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Image, Calendar, Wrench, MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  isCenter?: boolean;
  isChat?: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadData {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  vehicleDetails?: string;
  messages: string[];
}

const BottomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [leadData, setLeadData] = useState<LeadData>({ messages: [] });
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      id: 'home',
      icon: <Home className="w-6 h-6" />,
      label: 'Home',
      path: '/',
    },
    {
      id: 'gallery',
      icon: <Image className="w-6 h-6" />,
      label: 'Gallery',
      path: '/gallery',
    },
    {
      id: 'book',
      icon: <Calendar className="w-7 h-7" />,
      label: 'Book',
      path: '/book',
      isCenter: true,
    },
    {
      id: 'services',
      icon: <Wrench className="w-6 h-6" />,
      label: 'Services',
      path: '/services',
    },
    {
      id: 'chat',
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'Chat',
      path: '',
      isChat: true,
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  React.useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      addBotMessage(
        "Hi! I'm Julia, your virtual assistant at Mikah's Auto Detailing! 🚗✨\n\nHow can I help you today?"
      );
    }
  }, [isChatOpen]);

  const sendLeadToWebhook = async (data: LeadData) => {
    try {
      const formattedConversation = data.messages.map((msg) => {
        if (msg.startsWith('Julia: ')) return `🤖 Julia: ${msg.replace('Julia: ', '')}`;
        if (msg.startsWith('User: ')) return `👤 User: ${msg.replace('User: ', '')}`;
        return msg;
      }).join('\n\n');

      const payload = {
        fullName: data.fullName || 'Not provided',
        email: data.email || 'Not provided',
        phone: data.phone || 'Not provided',
        service: data.service || 'Chatbot Inquiry',
        description: `💬 Chatbot Conversation:\n\n${formattedConversation}`,
        location: data.location || 'Not provided',
        vehicleDetails: data.vehicleDetails || 'Not provided',
        timestamp: new Date().toISOString(),
        source: 'Julia Chatbot - Mikahs Auto Detailing Website'
      };

      await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Failed to send lead:', error);
    }
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setLeadData((prev) => ({ ...prev, messages: [...prev.messages, `Julia: ${text}`] }));
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setLeadData((prev) => ({ ...prev, messages: [...prev.messages, `User: ${text}`] }));

    // Extract contact info
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    const phoneMatch = text.match(/(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/);
    if (emailMatch && !leadData.email) setLeadData((prev) => ({ ...prev, email: emailMatch[0] }));
    if (phoneMatch && !leadData.phone) setLeadData((prev) => ({ ...prev, phone: phoneMatch[0] }));
  };

  const getAiResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput, conversationHistory }),
      });

      if (!response.ok) throw new Error('Failed to get AI response');
      const data = await response.json();

      if (data.success) {
        setConversationHistory(prev => [
          ...prev,
          { role: 'user', content: userInput },
          { role: 'assistant', content: data.message }
        ]);
        return data.message;
      }
      throw new Error(data.error || 'AI response failed');
    } catch (error) {
      return "I apologize, but I'm having trouble connecting. Please call us at (803) 667-8731! 🚗✨";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue;
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    const input = userMessage.toLowerCase();
    if (input.includes('ceramic')) setLeadData((prev) => ({ ...prev, service: 'Ceramic Coating' }));
    else if (input.includes('basic')) setLeadData((prev) => ({ ...prev, service: 'Basic Detail' }));

    if ((input.includes('book') || input.includes('contact')) && !leadCaptured && leadData.messages.length > 4) {
      setLeadCaptured(true);
      setTimeout(() => sendLeadToWebhook(leadData), 1000);
    }

    try {
      const response = await getAiResponse(userMessage);
      if (response.includes('BOOKING_COMPLETE') && !leadCaptured) {
        const cleanResponse = response.replace('BOOKING_COMPLETE', '').trim();
        addBotMessage(cleanResponse);
        setLeadCaptured(true);
        setTimeout(() => sendLeadToWebhook(leadData), 500);
      } else {
        addBotMessage(response);
      }
    } catch {
      addBotMessage("I apologize, but I'm having trouble connecting. Please call us at (803) 667-8731!");
    } finally {
      setIsTyping(false);
    }
  };

  const handleNavigation = (item: NavItem) => {
    if (item.isChat) {
      setIsChatOpen(true);
      return;
    }
    if (item.path.includes('#')) {
      const [basePath, hash] = item.path.split('#');
      if (location.pathname !== basePath && basePath !== '/') {
        navigate(basePath || '/');
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (item: NavItem) => {
    if (item.isChat) return isChatOpen;
    if (item.path === '/') return location.pathname === '/' && !location.hash;
    return location.pathname === item.path || location.pathname.startsWith(item.path + '/');
  };

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-[9998] bg-white flex flex-col"
          style={{ bottom: 'calc(64px + env(safe-area-inset-bottom, 0px))' }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0077B6] to-[#90E0EF] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Julia</h3>
                <p className="text-xs text-[#CAF0F8]">Virtual Assistant • Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm border border-gray-200 p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#0077B6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#0077B6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#0077B6] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white p-3 rounded-full disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200"
        style={{
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="flex items-center justify-around h-16 w-full px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                item.isCenter ? 'relative -mt-4' : ''
              }`}
            >
              {item.isCenter ? (
                <div className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive(item)
                        ? 'bg-[#023E8A] scale-110'
                        : 'bg-gradient-to-br from-[#023E8A] to-[#0077B6] hover:scale-105'
                    }`}
                    style={{ boxShadow: '0 4px 15px rgba(2, 62, 138, 0.4)' }}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <span className={`text-xs mt-1 font-semibold ${isActive(item) ? 'text-[#023E8A]' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <span className={`transition-colors duration-200 ${
                    isActive(item) ? 'text-[#023E8A]' : 'text-gray-500 hover:text-[#0077B6]'
                  }`}>
                    {item.icon}
                  </span>
                  <span className={`text-xs mt-1 transition-colors duration-200 ${
                    isActive(item) ? 'text-[#023E8A] font-semibold' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
