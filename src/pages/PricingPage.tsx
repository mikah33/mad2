import React from 'react';
import { Check, Star, Shield, Sparkles, Clock, CreditCard, MapPin, Droplet, Wrench, RotateCw, Anchor } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const PricingPage = () => {
  // NOTE: All pricing on this page is sourced directly from the booking form
  // (src/components/BookingTimeline.tsx). Keep them in sync — do not add
  // services, tiers, or add-ons that don't exist in the booking flow.

  // Pricing FAQ — answers reflect real booking-form prices only
  const pricingFAQs = [
    {
      question: "How much does car detailing cost on average in 2026?",
      answer: "In 2026, most U.S. drivers pay $150–$300 for a full car detail, $125–$250 for interior-only, and $75–$150 for exterior-only service, with larger vehicles at the higher end. At Mikah's Auto Detailing in Columbia SC, a full interior and exterior Basic Detail is a flat $225 with mobile service included — no travel fees in the Midlands area."
    },
    {
      question: "How much does car detailing cost at Mikah's?",
      answer: "Our pricing is flat and transparent. Exterior Detail starts at $100, Interior Detail starts at $200, our Basic Detail (full interior + exterior with wax) is $225, and the Factory Reset deep-clean package is $400. Paint Correction starts at $599 and Ceramic Coating at $999. Every price includes mobile service — we come to you in Columbia, Lexington, and the surrounding Midlands SC area."
    },
    {
      question: "What's the difference between the Basic Detail and Factory Reset?",
      answer: "The Basic Detail ($225) is a full interior and exterior detail with wax protection — perfect for regular maintenance. The Factory Reset ($400) is our deep-clean package: it adds light stain removal, upholstery and floor-mat shampoo and extraction, black trim restoration, and an engine bay detail to get your vehicle as close to factory condition as possible."
    },
    {
      question: "How much does interior car detailing cost?",
      answer: "Interior Detail starts at $200. It includes a full interior wipe down, conditioning and UV protection on all surfaces, a complete vacuum, full disinfection of cloth surfaces, glass cleaning, and door jambs cleaned and waxed."
    },
    {
      question: "How much does exterior detailing cost?",
      answer: "Exterior Detail starts at $100. It includes wheel decontamination from brake dust, a foam contact wash that removes bugs, sap, and tar, a layer of wax for protection, and trim and tires dressed."
    },
    {
      question: "Do you offer a monthly detailing plan?",
      answer: "Yes — our Routine Reset is $225/month and includes one interior detail plus two exterior washes every month. That keeps your vehicle consistently fresh and saves you $125/month compared to booking those services separately."
    },
    {
      question: "How much is paint correction and ceramic coating?",
      answer: "Paint Correction starts at $599, with 1-step and 2-step options depending on your paint's condition. Ceramic Coating starts at $999 and includes the required paint correction prep, providing 2–5 years of protection. Both are quoted after we inspect your vehicle's paint."
    },
    {
      question: "Do you charge travel fees?",
      answer: "No travel fees within our primary service area of Columbia, Lexington, Irmo, West Columbia, Cayce, and surrounding Midlands SC communities. Mobile service is included in every price. For locations outside the Midlands area, a small travel fee may apply — contact us for a quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash. Payment is due upon completion of service. For ceramic coating and larger jobs, we may require a deposit to secure your appointment."
    }
  ];

  // Quick pricing table — one row per real booking-form service
  const pricingTable = [
    { service: 'Exterior Detail', price: 'From $100', description: 'Wheels, foam wash, wax, trim & tires dressed' },
    { service: 'Interior Detail', price: 'From $200', description: 'Wipe down, vacuum, disinfection, UV protection, glass' },
    { service: 'Basic Detail', price: '$225', description: 'Full interior & exterior detail with wax protection' },
    { service: 'Factory Reset', price: '$400', description: 'Deep clean — shampoo, extraction & restoration' },
    { service: 'Paint Correction', price: 'From $599', description: '1-step & 2-step swirl and scratch removal' },
    { service: 'Ceramic Coating', price: 'From $999', description: '2–5 year paint protection with prep included' },
    { service: 'Routine Reset', price: '$225/mo', description: '1 interior + 2 exterior details every month' },
    { service: 'Marine & RV', price: 'Custom Quote', description: 'Boats, RVs, motorcycles & specialty vehicles' }
  ];

  // 2026 national averages vs. our flat prices — targets "average car
  // detailing cost 2026" searches (ranges are widely cited industry figures)
  const costComparison = [
    { service: 'Exterior detail', usRange: '$75 – $150', ourPrice: 'From $100', link: '/services/exterior-detailing' },
    { service: 'Interior detail', usRange: '$125 – $250', ourPrice: 'From $200', link: '/services/interior-detailing' },
    { service: 'Full detail (interior + exterior)', usRange: '$150 – $300', ourPrice: '$225 flat', link: '/services/full-detail' },
    { service: 'Deep-clean / restoration detail', usRange: '$250 – $450', ourPrice: '$400 flat', link: '/services/full-detail' },
    { service: 'Paint correction', usRange: '$500 – $1,500+', ourPrice: 'From $599', link: '/services/paint-correction' },
    { service: 'Ceramic coating', usRange: '$1,000 – $3,000', ourPrice: 'From $999', link: '/services/ceramic-coating' }
  ];

  // Service package cards — names, prices, and features all from the booking form
  const packages = [
    {
      name: 'Basic Detail',
      price: '$225',
      priceNote: 'flat',
      slug: 'basic-detail',
      servicePage: '/services/full-detail',
      popular: false,
      description: 'Full interior & exterior detail with wax protection',
      features: [
        'Full interior wipe down & conditioning',
        'UV protection on all surfaces',
        'Full vacuum & cloth disinfection',
        'Glass cleaned, door jambs cleaned & waxed',
        'Wheels decontaminated, foam contact wash',
        'Layer of wax, trim & tires dressed'
      ],
      icon: <Sparkles className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Factory Reset',
      price: '$400',
      priceNote: 'flat',
      slug: 'factory-reset',
      servicePage: '/services/full-detail',
      popular: true,
      description: 'Deep clean to get your vehicle close to factory condition',
      features: [
        'Everything in the Basic Detail',
        'Light stain removal',
        'Upholstery & floor mat shampoo + extraction',
        'Black trim restored / redyed',
        'Engine bay detailed'
      ],
      icon: <Star className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Interior Detail',
      price: 'From $200',
      priceNote: 'starting at',
      slug: 'interior-detail',
      servicePage: '/services/interior-detailing',
      popular: false,
      description: 'Complete interior cleaning & protection',
      features: [
        'Full interior wipe down & conditioning',
        'UV protection on all surfaces',
        'Full vacuum & cloth disinfection',
        'Glass cleaning',
        'Door jambs cleaned & waxed'
      ],
      icon: <Sparkles className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Exterior Detail',
      price: 'From $100',
      priceNote: 'starting at',
      slug: 'exterior-detail',
      servicePage: '/services/exterior-detailing',
      popular: false,
      description: 'Full exterior wash, wax & protection',
      features: [
        'Wheels decontaminated from brake dust',
        'Foam contact wash (bugs, sap & tar removed)',
        'Layer of wax for protection',
        'Trim & tires dressed'
      ],
      icon: <Droplet className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Paint Correction',
      price: 'From $599',
      priceNote: 'starting at',
      slug: 'paint-correction',
      servicePage: '/services/paint-correction',
      popular: false,
      description: '1-step & 2-step correction available',
      features: [
        'Hand wash & clay bar decontamination',
        'Machine polishing removes swirls & scratches',
        'Restores gloss & clarity',
        'Paint sealant application',
        'Level recommended after paint inspection'
      ],
      icon: <Wrench className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Ceramic Coating',
      price: 'From $999',
      priceNote: 'starting at',
      slug: 'ceramic-coating',
      servicePage: '/services/ceramic-coating',
      popular: false,
      description: 'Long-lasting paint protection (2–5 years)',
      features: [
        '2–5 year paint protection',
        'Extreme hydrophobic water beading',
        'Enhanced gloss & depth of color',
        'UV & chemical resistance',
        'Includes required paint correction prep'
      ],
      icon: <Shield className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Routine Reset',
      price: '$225',
      priceNote: 'per month',
      slug: 'routine-reset',
      servicePage: '/services/mobile-detailing',
      popular: false,
      description: '1 interior + 2 exterior details every month',
      features: [
        '1 interior detail per month',
        '2 exterior washes per month',
        'Keeps your vehicle consistently fresh',
        'Saves $125/month vs. booking separately'
      ],
      icon: <RotateCw className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Marine & RV',
      price: 'Custom',
      priceNote: 'quote',
      slug: 'marine-rv',
      servicePage: '/services',
      popular: false,
      description: 'Boats, RVs, motorcycles & specialty vehicles',
      features: [
        'Gel coat cleaning & restoration',
        'Oxidation removal',
        'Waxing & protection',
        'Quoted by size, surface & condition'
      ],
      icon: <Anchor className="w-12 h-12 text-orange-500" />
    }
  ];

  // Generate schemas
  const faqSchema = generateFAQSchema(pricingFAQs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  // Offer schemas — one per real, fixed/starting price (mirrors booking form)
  const seller = {
    '@type': 'LocalBusiness',
    name: "Mikah's Auto Detailing",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Columbia',
      addressRegion: 'SC',
      addressCountry: 'US'
    }
  };
  const makeOffer = (name: string, description: string, price: string) => ({
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency: 'USD',
    url: 'https://mikahsmobiledetailingsc.com/pricing',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
    priceValidUntil: '2026-12-31',
    itemOffered: {
      '@type': 'Service',
      name,
      serviceType: 'Auto detailing',
      provider: seller,
      areaServed: ['Columbia SC', 'Lexington SC', 'Irmo SC', 'West Columbia SC', 'Cayce SC']
    }
  });
  const offers = [
    makeOffer('Exterior Detail', 'Exterior wash, decontamination, wax, and trim/tire dressing. Starting price.', '100'),
    makeOffer('Interior Detail', 'Complete interior cleaning, disinfection, conditioning, and UV protection. Starting price.', '200'),
    makeOffer('Basic Detail', 'Full interior and exterior detail with wax protection.', '225'),
    makeOffer('Factory Reset', 'Deep-clean package with shampoo, extraction, trim restoration, and engine bay detail.', '400'),
    makeOffer('Paint Correction', '1-step and 2-step paint correction to remove swirls and scratches. Starting price.', '599'),
    makeOffer('Ceramic Coating', '2–5 year ceramic paint protection including required paint correction prep. Starting price.', '999')
  ];

  // One coherent LocalBusiness entity carrying the price catalog (instead of
  // six disconnected top-level Offers, which can't earn rich results)
  const businessWithOffers = {
    ...enhancedBusinessSchema,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Auto Detailing Price List 2026',
      itemListElement: offers
    }
  };

  const schemas = [faqSchema, businessWithOffers];

  return (
    <>
      <SEOHead
        title="Car Detailing Prices 2026 — Columbia SC Price List"
        description="2026 car detailing price list for Columbia &amp; Lexington SC: Exterior from $100, Interior from $200, Basic Detail $225, Factory Reset $400. Mobile — we come to you. Free quote: (803) 667-8731."
        keywords="car detailing prices, auto detailing prices, how much does car detailing cost, car detailing prices columbia sc, auto detailing prices columbia sc, mobile detailing prices, interior detailing cost, exterior detailing prices, detailing packages pricing"
        canonical="https://mikahsmobiledetailingsc.com/pricing"
        ogType="website"
        schema={schemas}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-16 md:py-24 mt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-block bg-orange-500/20 text-orange-300 border border-orange-400/40 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              2026 Price List — Updated July 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Car Detailing Prices in Columbia &amp; Lexington SC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Transparent, flat-rate pricing with no hidden fees
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              These are the exact prices from our booking form. Every service includes mobile detailing at your
              location in Columbia, Lexington, Irmo, West Columbia, Cayce, and surrounding SC areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/book"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition transform hover:scale-105"
              >
                Book Your Detail
              </a>
              <a
                href="tel:+18036678731"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg transition border border-white/30"
              >
                Call (803) 667-8731
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Pricing Table */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing at a Glance</h2>
            <p className="text-gray-600 text-lg">
              All prices include mobile service — we come to you!
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Service</th>
                  <th className="px-6 py-4 text-center font-bold">Price</th>
                  <th className="px-6 py-4 text-left font-bold hidden md:table-cell">What's Included</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{item.service}</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-bold text-xl whitespace-nowrap">{item.price}</td>
                    <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2026 Average Cost Section — targets "how much does car detailing cost" searches */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Much Does Car Detailing Cost in 2026?</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            In 2026, most U.S. drivers pay between <strong>$150 and $300</strong> for a full car detail,
            depending on vehicle size and condition. Interior-only details typically run $125–$250 and
            exterior-only $75–$150, while paint correction and ceramic coating range from $500 into the
            thousands. At Mikah's Auto Detailing, our flat <strong>$225 Basic Detail</strong> covers the full
            interior and exterior — with mobile service to your driveway included, not extra.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-4 text-left font-bold">Service</th>
                  <th className="px-6 py-4 text-center font-bold">Typical U.S. Range (2026)</th>
                  <th className="px-6 py-4 text-center font-bold">Our Price</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      <a href={row.link} className="hover:text-primary-600 hover:underline">{row.service}</a>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 whitespace-nowrap">{row.usRange}</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-bold whitespace-nowrap">{row.ourPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            Prices vary with vehicle size, condition, and location — a heavily soiled SUV costs more to
            detail than a maintained sedan anywhere you go. Ours are flat, published rates for the
            Midlands: see what's included on each <a href="/services" className="text-primary-600 font-semibold hover:underline">service page</a>,
            or check <a href="/locations" className="text-primary-600 font-semibold hover:underline">our service areas</a> across
            Columbia, Lexington, Irmo, West Columbia, and Cayce.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Detailing Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every package includes mobile service and our satisfaction guarantee. Tap any package to book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                  pkg.popular ? 'ring-4 ring-orange-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>

                  <h3 className="text-xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{pkg.priceNote}</span>
                  </div>

                  <p className="text-gray-600 text-center mb-6 text-sm">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/book?service=${pkg.slug}`}
                    className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition mt-auto ${
                      pkg.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    Book {pkg.name}
                  </a>
                  <a
                    href={pkg.servicePage}
                    className="block text-center text-sm text-primary-600 hover:underline mt-3"
                  >
                    What's included in {pkg.name} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Detailing Prices FAQ</h2>
            <p className="text-gray-600 text-lg">
              Common questions about our auto detailing prices and what they include
            </p>
          </div>

          <div className="space-y-6">
            {pricingFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="w-10 h-10 text-primary-600 mb-3" />
              <span className="font-bold text-gray-800">100% Satisfaction</span>
              <span className="text-sm text-gray-600">Guaranteed</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MapPin className="w-10 h-10 text-primary-600 mb-3" />
              <span className="font-bold text-gray-800">Mobile Service</span>
              <span className="text-sm text-gray-600">We Come To You</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Clock className="w-10 h-10 text-primary-600 mb-3" />
              <span className="font-bold text-gray-800">Flexible Scheduling</span>
              <span className="text-sm text-gray-600">7 Days a Week</span>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <CreditCard className="w-10 h-10 text-primary-600 mb-3" />
              <span className="font-bold text-gray-800">Easy Payment</span>
              <span className="text-sm text-gray-600">All Cards Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Pick your package and lock in a time, or call us and we'll help you choose the right detail for your vehicle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              Book Your Detail
            </a>
            <a
              href="tel:+18036678731"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition border border-white/30"
            >
              Call (803) 667-8731
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;
