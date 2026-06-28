import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs: FAQItem[] = [
    {
      question: 'How much does mobile detailing cost?',
      answer: 'Our mobile detailing services start at $100 for an exterior detail and range up to $999+ for ceramic coating. We use simple flat pricing—the package you choose sets your price, not your vehicle\'s size. We offer competitive rates with no hidden fees - get your personalized quote by calling (803) 667-8731.',
    },
    {
      question: 'What is included in a mobile detailing service?',
      answer: 'Our mobile detailing packages include exterior wash and wax, interior vacuuming and cleaning, dashboard conditioning, window cleaning, tire shine, and wheel cleaning. Premium packages add paint correction, ceramic coating, deep interior shampooing, and leather conditioning. We bring all equipment, water, and eco-friendly products to your location.',
    },
    {
      question: 'How often should you detail your vehicle?',
      answer: 'Most vehicles should be professionally detailed every 3-6 months to maintain optimal appearance and protect resale value. Daily drivers in Columbia\'s climate may benefit from quarterly service, while garage-kept vehicles can go 6 months. Our subscription service provides convenient regular maintenance at discounted rates.',
    },
    {
      question: 'What are the benefits of ceramic coating?',
      answer: 'Ceramic coating provides long-lasting paint protection, enhanced gloss, easier cleaning, and UV protection. It creates a hydrophobic barrier that repels water, dirt, and contaminants while maintaining your vehicle\'s showroom shine for years. Columbia\'s humid climate and intense sun make ceramic coating especially valuable for preserving your investment.',
    },
    {
      question: 'How long does ceramic coating last?',
      answer: 'Professional ceramic coating typically lasts 2-5 years depending on the product grade and maintenance. Our premium ceramic packages include 3-year warranties with proper care. The coating\'s durability makes it more cost-effective than traditional wax, which needs reapplication every 3-4 months.',
    },
    {
      question: 'How long does a typical detailing service take?',
      answer: 'The duration varies depending on the service selected. A basic detail typically takes 2-3 hours, while our comprehensive packages can take 4-6 hours. Ceramic coating applications require 6-8 hours. We\'ll provide a specific time estimate when you book.',
    },
    {
      question: 'Do you provide mobile services in Lexington and Columbia, SC?',
      answer: 'Yes! We specialize in mobile auto detailing throughout Lexington, Columbia, and surrounding South Carolina areas. We come directly to your home, office, or any convenient location with all professional equipment. Mobile service eliminates your travel time and provides ultimate convenience.',
    },
    {
      question: 'What areas do you serve in the Columbia region?',
      answer: 'We proudly serve Lexington, Columbia, West Columbia, Irmo, Cayce, Forest Acres, Blythewood, and surrounding Midlands areas. Our mobile service covers a 30-mile radius from Columbia, ensuring convenient professional detailing wherever you are in the greater Columbia metropolitan area.',
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and convenient digital payment methods including Venmo, Cash App, and Zelle. Payment is collected upon service completion to your satisfaction.',
    },
    {
      question: 'Is mobile detailing as effective as shop detailing?',
      answer: 'Our mobile detailing delivers the same professional results as shop-based services. We use commercial-grade equipment, professional products, and bring our own water supply. Mobile service offers superior convenience while maintaining the highest quality standards - many clients prefer the personalized attention and time savings.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-12 md:py-20 bg-gray-900 text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mb-12">
          Find answers to common questions about our detailing services, pricing, and process.
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#90E0EF] focus:outline-none"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-750 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our team is here to help with any questions about
            our services.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-[#023E8A] text-white font-semibold rounded-lg hover:bg-[#0077B6] transition">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-[#0077B6] text-white font-semibold rounded-lg hover:bg-[#023E8A] transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
