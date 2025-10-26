import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
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
        "Hi! I'm Julia, your friendly virtual receptionist at Mikah's Auto Detailing! 🚗✨\n\nI'd love to help you find the perfect detailing service for your vehicle. What can I help you with today?\n\n💡 Try asking me about:\n• Our services and pricing\n• Areas we serve\n• Ceramic coating packages\n• Booking a detail"
      );
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.match(/^(hi|hello|hey|greetings)/i)) {
      return "Hello! Great to hear from you! 😊 I'm Julia, and I'm here to help you with all your auto detailing needs. What would you like to know about our services?";
    }

    // Pricing questions
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      return "Here are our main service packages:\n\n💰 **Detailing Packages:**\n• Basic Detail Package - $200\n• Factory Reset Package - $325\n• Routine Reset Subscription - $175/month\n\n🛡️ **Ceramic Coating:**\n• Bronze (2-year) - $599\n• Silver (3-year) - $799\n• Gold (5-year) - $999\n• Platinum (7-year) - $1,299\n\n🎨 **Other Services:**\n• Paint Corrections - Custom quote\n• Specialty Services - Custom quote\n• Marine & RV Detailing - Custom quote\n\n*Note: Prices may vary if your vehicle requires extra attention due to heavy soiling or damage. We'll always agree on the final price before starting any work!*\n\nWould you like more details about any specific service?";
    }

    // Basic Detail Package
    if (input.includes('basic detail') || input.includes('basic package')) {
      return "**Basic Detail Package - $200**\n\nThis is perfect for maintaining your vehicle's appearance!\n\n✨ Interior:\n• Full wipe down\n• Conditioner + UV protection\n• Vacuum & disinfection\n• Glass cleaned\n• Door jambs cleaned & waxed\n\n🚗 Exterior:\n• Wheels decontaminated\n• Foam contact wash\n• Protective wax layer\n• Wheels & tires dressed\n\n*Prices may vary for heavily soiled vehicles. Final price agreed before starting work.*\n\nReady to book? Just let me know!";
    }

    // Factory Reset Package
    if (input.includes('factory reset') || input.includes('factory package')) {
      return "**Factory Reset Package - $325**\n\nOur most comprehensive detail - restores your car to like-new condition!\n\n✨ Interior:\n• Full wipe down with conditioner + UV protection\n• Vacuum + disinfection\n• Light stain removal\n• Shampoo & extraction\n• Glass cleaned\n• Door jambs cleaned & waxed\n\n🚗 Exterior:\n• Foam contact wash\n• Brake dust removal\n• Protective wax layer\n• Tires & rims dressed\n\n➕ Add-Ons Available:\n• Weather Stripping Restoration ($50)\n• Scratch Removal ($80/panel)\n\n*Prices may vary for heavily soiled vehicles. Final price agreed before starting work.*\n\nInterested in booking this service?";
    }

    // Routine Reset Subscription
    if (input.includes('routine reset') || input.includes('subscription') || input.includes('monthly')) {
      return "**Routine Reset - $175/Month**\n\nStay consistently clean with our monthly subscription!\n\n✅ What's Included:\n• 2x Exterior Details per Month\n• 1x Interior Reset per Month\n• 1x Engine Bay Cleaning (first visit each month)\n• Priority Scheduling - You pick the times\n\n💰 Special Offer:\n• First 2 months: $300 upfront\n• After that: $175/month\n• Cancel anytime, no rollovers\n\nThis is perfect if you want to stay consistently clean without falling behind! Want to sign up?";
    }

    // Ceramic Coating
    if (input.includes('ceramic') || input.includes('coating')) {
      return "**Ceramic Coating Packages** 🛡️\n\nProfessional paint protection that lasts years, not weeks!\n\n💎 Our Packages:\n• **Bronze** (2-year warranty) - $599\n  Premium ceramic protection, decontamination, paint prep\n\n• **Silver** (3-year warranty) - $799\n  Enhanced coating, deep decontamination, advanced prep\n\n• **Gold** (5-year warranty) - $999 ⭐ MOST POPULAR\n  Premium multi-coat, wheels coated, light paint correction\n\n• **Platinum** (7-year warranty) - $1,299\n  Ultimate protection, wheels + windows, full paint correction\n\nAll packages include:\n✅ Hydrophobic water beading\n✅ UV protection\n✅ Enhanced gloss & depth\n✅ Easier cleaning\n\n*Prices may vary based on vehicle condition. Final price agreed before starting work.*\n\nWhich package interests you?";
    }

    // Paint Correction
    if (input.includes('paint correction') || input.includes('scratch')) {
      return "**Paint Corrections** 🎨\n\nRestore your vehicle's flawless finish! We remove:\n• Swirl marks\n• Light scratches\n• Oxidation\n• Water spots\n\nWe offer single-stage or two-stage correction to bring back your paint's original luster.\n\n💰 Pricing: Custom quote based on vehicle condition\n\n*We'll inspect your vehicle and provide an exact quote before starting. The price is always agreed upon upfront!*\n\nWould you like to schedule a free quote?";
    }

    // Specialty Services
    if (input.includes('specialty') || input.includes('interior only') || input.includes('exterior only') || input.includes('odor') || input.includes('ozone') || input.includes('engine')) {
      return "**Specialty Services** ⚡\n\nWe offer specialized services tailored to your needs:\n\n• Interior-only Detail\n• Exterior-only Detail\n• Odor Removal / Ozone Treatment\n• Engine Bay Detail\n\n💰 Pricing: Custom quote based on service needed\n\n*Each vehicle is unique, so we provide personalized quotes. Price is always agreed upon before we start!*\n\nWhat specific service are you interested in?";
    }

    // Marine & RV
    if (input.includes('marine') || input.includes('rv') || input.includes('boat') || input.includes('motorcycle')) {
      return "**Marine & RV Detailing** ⚓\n\nWe detail more than just cars!\n\n• Marine Detailing (boats, yachts)\n• RV Detailing\n• Motorcycle Detailing\n\n💰 Pricing: Custom quote based on size and condition\n\n*Prices vary significantly based on vehicle type and size. We'll provide a detailed quote after seeing your vehicle.*\n\nWhat type of vehicle would you like detailed?";
    }

    // Areas/Locations
    if (input.includes('area') || input.includes('location') || input.includes('where') || input.includes('service area') || input.includes('come to')) {
      return "**Areas We Serve** 📍\n\nWe're a mobile detailing service serving the greater Columbia, SC area!\n\n🚗 We come to you in:\n• Columbia, SC\n• Lexington, SC\n• West Columbia, SC\n• Irmo, SC\n• Cayce, SC\n• And surrounding areas!\n\nWe bring all our professional equipment to your home or office - you don't have to go anywhere! Just relax while we make your vehicle look amazing.\n\nAre you located in one of these areas?";
    }

    // Mobile service
    if (input.includes('mobile') || input.includes('come to me') || input.includes('my location')) {
      return "Yes! We're a fully mobile service! 🚐\n\nThat means we come directly to your home, office, or wherever is convenient for you in the Columbia, SC area. You don't have to drive anywhere or wait at a shop.\n\n📍 We serve:\n• Columbia, SC\n• Lexington, SC\n• West Columbia, SC\n• Irmo, SC\n• Cayce, SC\n• Surrounding areas\n\nJust schedule your appointment and we'll handle everything at your location!\n\nWould you like to book a service?";
    }

    // Booking/Appointment
    if (input.includes('book') || input.includes('schedule') || input.includes('appointment') || input.includes('when can you')) {
      return "I'd love to help you schedule a detail! 📅\n\nHere's how to book:\n\n1️⃣ **Call us:** (803) 667-8731\n2️⃣ **Get a quote:** Scroll down to the 'Get Your Free Quote' form on our website\n3️⃣ **Tell me more:** Let me know what service you're interested in and I can guide you!\n\nWe offer flexible scheduling and come to your location throughout the Columbia, SC area.\n\nWhat service are you interested in booking?";
    }

    // Contact/Phone
    if (input.includes('contact') || input.includes('phone') || input.includes('call') || input.includes('number')) {
      return "**Contact Information** 📞\n\n• Phone: (803) 667-8731\n• Service: Mobile (we come to you!)\n• Areas: Columbia, Lexington, West Columbia, Irmo, Cayce, SC\n\nFeel free to call us anytime, or fill out the 'Get Your Free Quote' form on this page!\n\nIs there anything else I can help you with?";
    }

    // How long/duration
    if (input.includes('how long') || input.includes('duration') || input.includes('time')) {
      return "Great question! ⏱️\n\nService times vary based on the package:\n\n• **Basic Detail:** 2-3 hours\n• **Factory Reset:** 4-6 hours\n• **Ceramic Coating:** 1-2 days (includes curing time)\n• **Paint Correction:** 4-8 hours (depending on level)\n\nWe'll give you a more specific timeframe when you book, based on your vehicle's condition.\n\nRemember - we're mobile, so we come to you! You can go about your day while we work.\n\nWhat service are you considering?";
    }

    // Thank you
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're very welcome! 😊 I'm happy to help!\n\nIf you have any other questions about our services, pricing, or scheduling, feel free to ask anytime.\n\nReady to book? Call us at (803) 667-8731 or fill out the quote form on this page!\n\nHave a wonderful day! ✨";
    }

    // Default response
    return "I'd be happy to help you with that! Here's what I can tell you about:\n\n💰 **Services & Pricing**\n• Detailing packages ($200-$325)\n• Ceramic coating ($599-$1,299)\n• Paint correction & specialty services\n\n📍 **Service Areas**\n• Columbia, Lexington, Irmo, Cayce, SC\n\n📞 **Booking**\n• Call: (803) 667-8731\n• Request a quote on this page\n\nCould you tell me more specifically what you're looking for? I'm here to help! 😊";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const response = getBotResponse(inputValue);

    setTimeout(() => {
      addBotMessage(response);
    }, 500);

    setInputValue('');
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
