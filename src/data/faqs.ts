export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'scheduling' | 'mobile';
  order?: number;
}

export const faqs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'What areas do you serve?',
    answer: 'We provide mobile auto detailing services throughout the Phoenix metropolitan area, including Scottsdale, Tempe, Mesa, and surrounding cities within a 25-mile radius.',
    category: 'mobile',
    order: 1
  },
  {
    id: 'faq-002',
    question: 'How long does a typical detail take?',
    answer: 'Most detailing services take between 2-4 hours depending on the package and vehicle condition. More intensive services like ceramic coating or paint correction may take 4-8 hours or require multiple days.',
    category: 'services',
    order: 2
  },
  {
    id: 'faq-003',
    question: 'Do I need to provide water or electricity?',
    answer: 'No! Our mobile units are completely self-contained with their own water supply and power generators. We just need access to your vehicle.',
    category: 'mobile',
    order: 3
  },
  {
    id: 'faq-004',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards, Venmo, Zelle, and PayPal. Payment is due upon completion of service.',
    category: 'pricing',
    order: 4
  },
  {
    id: 'faq-005',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 3-5 days in advance, though we can often accommodate same-day or next-day appointments based on availability.',
    category: 'scheduling',
    order: 5
  },
  {
    id: 'faq-006',
    question: 'Do you offer any warranties or guarantees?',
    answer: 'Yes! We stand behind our work with a 100% satisfaction guarantee. Ceramic coatings come with manufacturer warranties ranging from 2-7 years depending on the product.',
    category: 'services',
    order: 6
  },
  // Add more FAQs as needed
];

export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs
    .filter(faq => faq.category === category)
    .sort((a, b) => (a.order || 999) - (b.order || 999));
};

export const getAllFAQs = (): FAQ[] => {
  return faqs.sort((a, b) => (a.order || 999) - (b.order || 999));
};
