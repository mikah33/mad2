import React from 'react';
import { Check, Star, Shield, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const PricingPage = () => {
  // Pricing FAQ targeting "how much" keywords
  const pricingFAQs = [
    {
      question: "How much is it to detail a car in Columbia SC?",
      answer: "Car detailing prices in Columbia SC typically range from $200-$325 for our complete packages. Our Basic Detail Package starts at $200 for a full interior and exterior service, while our Factory Reset Package is $325 for a deep clean with shampoo and extraction. Ceramic coating and paint correction are custom-quoted based on vehicle size and condition. All prices include mobile service - we come to you!"
    },
    {
      question: "What are interior car detailing prices?",
      answer: "Interior car detailing prices start at $200 for our Basic Detail Package which includes full wipe down, conditioning, UV protection, vacuuming, disinfection, and glass cleaning. For deep interior cleaning with shampoo and extraction, our Factory Reset Package is $325. Interior-only detailing is available starting at $150. Prices vary based on vehicle size and condition."
    },
    {
      question: "How much does mobile detailing cost in Columbia SC?",
      answer: "Mobile detailing in Columbia SC costs $200-$325 for complete packages. Unlike traditional detailers, our prices include mobile service at no extra charge - we bring our professional equipment directly to your location in Columbia, Lexington, Irmo, or surrounding areas. You save time while getting the same quality as fixed-location shops."
    },
    {
      question: "Do you offer cheap or affordable detailing options?",
      answer: "Yes! Our $200 Basic Detail Package offers exceptional value without compromising quality. This affordable option includes both interior and exterior detailing with professional-grade products. We also offer interior-only ($150) or exterior-only ($125) services for budget-conscious customers. Every package includes our satisfaction guarantee."
    },
    {
      question: "How much does ceramic coating cost?",
      answer: "Ceramic coating prices vary based on vehicle size, paint condition, and coating tier selected. Entry-level ceramic coatings start around $600 for small vehicles, while premium multi-year coatings for larger SUVs/trucks can range $1,200-$2,000. We provide free quotes and customize packages to your budget and protection needs."
    },
    {
      question: "What's included in your pricing?",
      answer: "All our prices include mobile service (we come to you), professional-grade products, and our satisfaction guarantee. The Basic Detail ($200) includes interior conditioning, vacuum, exterior wash, wax, and tire dressing. Factory Reset ($325) adds shampoo extraction and brake dust removal. Add-ons like weather stripping restoration ($50) or scratch removal ($80/panel) are available."
    }
  ];

  const packages = [
    {
      name: 'Basic Detail Package',
      price: '$200',
      popular: false,
      description: 'Perfect for regular maintenance and keeping your vehicle looking great',
      features: [
        'Full Interior Wipe Down',
        'Conditioning + UV Protection',
        'Complete Vacuum & Disinfection',
        'Interior Glass Cleaning',
        'Door Jambs Cleaned & Waxed',
        'Wheels Decontaminated',
        'Foam Contact Wash',
        'Protective Wax Layer',
        'Wheels & Tires Dressed'
      ],
      cta: 'Get Quote',
      link: '/#quote',
      icon: <Sparkles className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Factory Reset Package',
      price: '$325',
      popular: true,
      description: 'Our most popular package - complete restoration of interior and exterior',
      features: [
        'Everything in Basic Detail',
        'Light Stain Removal',
        'Carpet & Seat Shampoo',
        'Hot Water Extraction',
        'Brake Dust Removal',
        'Weather Stripping Conditioning',
        'Engine Bay Wipe Down',
        'Pet Hair Removal',
        'Odor Elimination Treatment'
      ],
      cta: 'Most Popular',
      link: '/#quote',
      icon: <Star className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Ceramic Coating',
      price: 'Custom Quote',
      popular: false,
      description: 'Long-lasting paint protection with incredible shine - lasts 2-5 years',
      features: [
        'Complete Paint Decontamination',
        'Clay Bar Treatment',
        'Single or Two-Stage Polish',
        'Professional Ceramic Application',
        'Hydrophobic Protection',
        'UV Ray Protection',
        'Enhanced Gloss & Depth',
        'Easy Maintenance',
        '2-5 Year Warranty Options'
      ],
      cta: 'Request Quote',
      link: '/#quote',
      icon: <Shield className="w-12 h-12 text-primary-500" />
    }
  ];

  const addOns = [
    { service: 'Interior Only Detail', price: '$150' },
    { service: 'Exterior Only Detail', price: '$125' },
    { service: 'Weather Stripping Restoration', price: '$50' },
    { service: 'Scratch Removal', price: '$80/panel' },
    { service: 'Engine Bay Detail', price: '$75' },
    { service: 'Pet Hair Removal (Heavy)', price: '$50' },
    { service: 'Odor Removal / Ozone Treatment', price: '$100' },
    { service: 'Headlight Restoration', price: '$80' }
  ];

  // Generate schemas
  const faqSchema = generateFAQSchema(pricingFAQs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  // Generate offer schemas for each package (inline schema)
  const offerSchemas = packages.filter(pkg => pkg.price !== 'Custom Quote').map(pkg => ({
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: pkg.name,
    description: pkg.description,
    price: pkg.price.replace('$', ''),
    priceCurrency: 'USD',
    url: 'https://mikahsmobiledetailingsc.com/pricing',
    availability: 'https://schema.org/InStock',
    validFrom: '2024-01-01',
    seller: {
      '@type': 'Organization',
      name: "Mikah's Auto Detailing"
    }
  }));

  const schemas = [faqSchema, enhancedBusinessSchema, ...offerSchemas];

  return (
    <>
      <SEOHead
        title="Auto Detailing Prices Columbia SC | How Much Is It To Detail A Car?"
        description="Transparent car detailing prices in Columbia SC. Interior car detailing starting at $150. Full detail packages $200-$325. Mobile service included. See our pricing and get a free quote today!"
        keywords="interior car detailing prices, how much is it to detail a car, auto detailing prices columbia sc, car detailing cost, mobile detailing prices, cheap detailing near me, how much does car detailing cost, detailing prices near me, affordable car detailing"
        canonical="https://mikahsmobiledetailingsc.com/pricing"
        ogType="website"
        schema={schemas}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Auto Detailing Prices Columbia SC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Transparent Pricing • No Hidden Fees • Mobile Service Included
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Wondering "how much is it to detail a car?" See our complete pricing below. All packages include professional mobile service - we come to you in Columbia, Lexington, Irmo, and surrounding areas!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Detailing Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional interior and exterior car detailing packages with transparent pricing. Every service includes our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                  </div>

                  <p className="text-gray-600 text-center mb-6 text-sm">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pkg.link}
                    className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition ${
                      pkg.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À La Carte Services & Add-Ons</h2>
            <p className="text-gray-600 text-lg">
              Customize your detail with these popular add-on services
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
                >
                  <span className="font-medium text-gray-800">{addon.service}</span>
                  <span className="text-primary-600 font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing FAQs</h2>
            <p className="text-gray-600 text-lg">
              Common questions about our car detailing prices
            </p>
          </div>

          <div className="space-y-6">
            {pricingFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get a free, no-obligation quote for your vehicle today
          </p>
          <a
            href="/#quote"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;
