import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

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

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [leadData, setLeadData] = useState<LeadData>({ messages: [] });
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ConversationMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      addBotMessage(
        "Hi! I'm Julia, your friendly virtual receptionist at Mikah's Auto Detailing! 🚗✨\n\nI'd love to help you find the perfect detailing service for your vehicle. What can I help you with today?"
      );
    }
  }, [isOpen]);

  const sendLeadToWebhook = async (data: LeadData) => {
    try {
      // Format conversation in alternating AI/USER chat style
      const formattedConversation = data.messages.map((msg) => {
        if (msg.startsWith('Julia: ')) {
          return `🤖 Julia: ${msg.replace('Julia: ', '')}`;
        } else if (msg.startsWith('User: ')) {
          return `👤 User: ${msg.replace('User: ', '')}`;
        }
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

      console.log('📧 Sending lead to webhook with data:', payload);

      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('✅ Webhook response:', result);

      if (!response.ok) {
        console.error('❌ Webhook failed:', result);
      }
    } catch (error) {
      console.error('❌ Failed to send lead to webhook:', error);
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

    // Track bot responses
    setLeadData((prev) => ({
      ...prev,
      messages: [...prev.messages, `Julia: ${text}`]
    }));
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Track conversation
    setLeadData((prev) => ({
      ...prev,
      messages: [...prev.messages, `User: ${text}`]
    }));

    // Extract contact info from message
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    const phoneMatch = text.match(/(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/);

    // Extract name if message looks like a name (capitalize first word)
    const namePattern = /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)$/;
    const nameMatch = text.match(namePattern);

    if (emailMatch && !leadData.email) {
      setLeadData((prev) => ({ ...prev, email: emailMatch[0] }));
    }

    if (phoneMatch && !leadData.phone) {
      setLeadData((prev) => ({ ...prev, phone: phoneMatch[0] }));
    }

    if (nameMatch && !leadData.fullName) {
      setLeadData((prev) => ({ ...prev, fullName: nameMatch[0] }));
    }

    // Extract location if message contains Columbia area cities
    const locationKeywords = ['columbia', 'lexington', 'irmo', 'cayce', 'west columbia', 'blythewood', 'forest acres'];
    const lowerText = text.toLowerCase();
    if (locationKeywords.some(city => lowerText.includes(city)) && !leadData.location) {
      setLeadData((prev) => ({ ...prev, location: text }));
    }

    // Extract vehicle info if message contains car-related keywords
    const vehicleKeywords = ['honda', 'toyota', 'ford', 'chevy', 'nissan', 'bmw', 'mercedes', 'audi', 'car', 'truck', 'suv', 'sedan'];
    if (vehicleKeywords.some(keyword => lowerText.includes(keyword)) && !leadData.vehicleDetails) {
      setLeadData((prev) => ({ ...prev, vehicleDetails: text }));
    }
  };

  const getAiResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          conversationHistory: conversationHistory
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      if (data.success) {
        // Update conversation history
        setConversationHistory(prev => [
          ...prev,
          { role: 'user', content: userInput },
          { role: 'assistant', content: data.message }
        ]);

        return data.message;
      } else {
        throw new Error(data.error || 'AI response failed');
      }
    } catch (error) {
      console.error('AI chat error:', error);
      return "I apologize, but I'm having trouble connecting right now. Please call us at (803) 667-8731 or fill out the quote form on this page! I'm here to help you get the best auto detailing service in Columbia, SC! 🚗✨";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue;
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    // Detect service interest for lead tracking
    const input = userMessage.toLowerCase();
    if (input.includes('basic detail')) {
      setLeadData((prev) => ({ ...prev, service: 'Basic Detail Package - $200' }));
    } else if (input.includes('factory reset')) {
      setLeadData((prev) => ({ ...prev, service: 'Factory Reset Package - $325' }));
    } else if (input.includes('ceramic')) {
      setLeadData((prev) => ({ ...prev, service: 'Ceramic Coating' }));
    } else if (input.includes('paint correction')) {
      setLeadData((prev) => ({ ...prev, service: 'Paint Correction' }));
    } else if (input.includes('routine reset')) {
      setLeadData((prev) => ({ ...prev, service: 'Routine Reset Subscription - $175/month' }));
    }

    // Capture lead if booking/contact questions
    if ((input.includes('book') || input.includes('contact') || input.includes('phone'))
        && !leadCaptured && leadData.messages.length > 4) {
      setLeadCaptured(true);
      setTimeout(() => sendLeadToWebhook(leadData), 1000);
    }

    try {
      const response = await getAiResponse(userMessage);
      console.log('🤖 Julia response:', response);
      console.log('🔍 Contains BOOKING_COMPLETE?', response.includes('BOOKING_COMPLETE'));
      console.log('📊 Lead captured?', leadCaptured);
      console.log('📋 Current lead data:', leadData);

      // Check if booking is complete
      if (response.includes('BOOKING_COMPLETE') && !leadCaptured) {
        console.log('✅ BOOKING_COMPLETE detected! Triggering webhook...');
        // Remove the BOOKING_COMPLETE marker before displaying
        const cleanResponse = response.replace('BOOKING_COMPLETE', '').trim();
        addBotMessage(cleanResponse);

        // Submit to webhook - use a callback to ensure we have latest state
        setLeadCaptured(true);
        setLeadData((currentData) => {
          console.log('📧 About to send webhook with data:', currentData);
          // Send webhook with current state
          setTimeout(() => sendLeadToWebhook(currentData), 500);
          return currentData;
        });
      } else {
        addBotMessage(response);
        if (response.includes('BOOKING_COMPLETE')) {
          console.log('⚠️ BOOKING_COMPLETE found but lead already captured');
        }
      }
    } catch (error) {
      console.error('❌ Error in handleSendMessage:', error);
      addBotMessage("I apologize, but I'm having trouble connecting right now. Please call us at (803) 667-8731 or fill out the quote form on this page!");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button - Sticky Bottom Right */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 z-50 animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border-2 border-orange-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Julia</h3>
                <p className="text-xs text-orange-100">Virtual Receptionist • Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-orange-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-orange-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none shadow-md border border-gray-100 p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
