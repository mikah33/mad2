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
      question: 'How long does a typical detailing service take?',
      answer: 'The duration varies depending on the service selected. A basic detail typically takes 2-3 hours, while our comprehensive packages can take 4-6 hours. We\'ll provide a specific time estimate when you book.',
    },
    {
      question: 'Do you provide mobile services in Columbia, SC?',
      answer: 'Yes! We come directly to your home, office, or any convenient location in Columbia and surrounding areas. Mobile service is our specialty.',
    },
    {
      question: 'What areas do you serve in Columbia?',
      answer: 'We serve Columbia, SC and surrounding areas including Lexington, West Columbia, Irmo, Cayce, and Forest Acres.',
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept cash, all major credit cards, and digital payment methods including Venmo and Cash App for your convenience.',
    },
    {
      question: 'How often should I get my car detailed?',
      answer: 'We recommend professional detailing every 3-6 months depending on usage and conditions. Our monthly Routine Reset subscription is perfect for keeping your vehicle consistently clean.',
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
            className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary-500 focus:outline-none"
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
            <button className="px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
