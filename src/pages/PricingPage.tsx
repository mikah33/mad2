import React from 'react';
import { Check, Star, Shield, Sparkles, Clock, CreditCard, Car, Truck, MapPin } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const PricingPage = () => {
  // Pricing FAQ targeting "auto detailing prices" and "car detailing prices" keywords
  const pricingFAQs = [
    {
      question: "How much does car detailing cost?",
      answer: "Car detailing costs depend on the service type and vehicle size. At Mikah's Auto Detailing in Columbia SC, interior detailing starts at $200, exterior detailing at $200, and full detail packages at $225 for sedans. SUVs and trucks start at $225 for interior and $275 for full detail. Ceramic coating and paint correction are quoted individually based on vehicle condition. All prices include mobile service — we come to your location."
    },
    {
      question: "Why is mobile detailing worth it?",
      answer: "Mobile detailing saves you time and hassle by bringing professional car detailing directly to your home or office in Columbia and Lexington SC. You don't need to drive anywhere, wait at a shop, or arrange transportation. Our mobile service is included in all prices at no extra charge, and you get the same professional-grade products and equipment as a fixed-location detail shop. Plus, we can work on your vehicle while you're at work, home, or anywhere convenient for you."
    },
    {
      question: "How long does each service take?",
      answer: "Service times vary based on vehicle size and condition. Interior Detail typically takes 1.5-2 hours for sedans and 2-2.5 hours for SUVs/trucks. Exterior Detail takes 1-1.5 hours for sedans and 1.5-2 hours for larger vehicles. Full Detail (interior + exterior combined) takes 2.5-3.5 hours for sedans and 3.5-4.5 hours for SUVs/trucks. We always schedule enough time to do the job right."
    },
    {
      question: "Do you charge travel fees?",
      answer: "No travel fees within our primary service areas of Columbia, Lexington, Irmo, West Columbia, Cayce, and surrounding Midlands SC communities. Our prices include mobile service at no extra charge. For locations outside the Midlands area, a small travel fee may apply - contact us for a quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, cash, Venmo, Cash App, and Zelle. Payment is due upon completion of service. For ceramic coating and larger jobs, we may require a deposit to secure your appointment."
    },
    {
      question: "How much does interior car detailing cost?",
      answer: "Interior car detailing prices start at $200 for sedans/coupes and $225 for SUVs/trucks. This includes deep cleaning, vacuuming, surface conditioning, UV protection, disinfection, and interior glass cleaning. For heavy stains or pet hair, add-on services are available."
    },
    {
      question: "What's included in your auto detailing prices?",
      answer: "All our car detailing prices include mobile service (we come to you), professional-grade products, and our satisfaction guarantee. Interior Detail includes deep clean, vacuum, surfaces, and windows. Exterior Detail includes hand wash, clay bar treatment, wax, and tire dressing. Full Detail combines both services at a discounted rate."
    },
    {
      question: "How much does car detailing cost on average?",
      answer: "Car detailing prices average between $150 and $400 for standard services. A basic interior or exterior detail typically costs $150-$250, while a full detail (interior + exterior) ranges from $225-$400. Premium services like ceramic coating run $600-$2,500 and paint correction $400-$1,000+. At Mikah's, our prices start at $200 for interior, $200 for exterior, and $225 for a full detail."
    },
    {
      question: "Is professional auto detailing worth the price?",
      answer: "Yes — professional auto detailing protects your vehicle's value and appearance far better than DIY methods. Professional detailers use commercial-grade products, specialized equipment, and trained techniques that deliver longer-lasting results. Regular professional detailing can add $500-$2,000 to your vehicle's resale value and prevent costly paint damage from UV exposure, contamination, and environmental wear."
    },
    {
      question: "Why do car detailing prices vary so much?",
      answer: "Car detailing prices vary based on vehicle size (sedan vs. SUV/truck), current condition, service level chosen, and product quality. A well-maintained sedan needing a basic detail costs much less than a heavily soiled SUV needing deep extraction and paint correction. Geographic location, whether mobile or shop-based, and detailer experience also affect pricing."
    },
    {
      question: "What is the cheapest car detailing option?",
      answer: "Our most affordable option is the Interior Detail starting at $200 for sedans or the Exterior Detail also starting at $200. For the best value, our Full Detail Package starts at $225 and combines interior + exterior service. All prices include mobile service — we come to your location in Columbia, Lexington, or surrounding SC areas at no extra charge."
    }
  ];

  // Vehicle size pricing table
  const vehiclePricing = [
    {
      service: 'Interior Detail',
      description: 'Deep clean, vacuum, surfaces, windows',
      sedan: '$200',
      suv: '$225'
    },
    {
      service: 'Exterior Detail',
      description: 'Hand wash, clay bar, wax, tires',
      sedan: '$200',
      suv: '$225'
    },
    {
      service: 'Full Detail',
      description: 'Interior + Exterior combined',
      sedan: '$225',
      suv: '$275'
    }
  ];

  const packages = [
    {
      name: 'Interior Detail',
      sedanPrice: '$200',
      suvPrice: '$225',
      popular: false,
      description: 'Complete interior restoration for a fresh, clean cabin',
      features: [
        'Deep Clean All Surfaces',
        'Complete Vacuum & Disinfection',
        'Dashboard & Console Conditioning',
        'UV Protection Treatment',
        'Interior Glass Cleaning',
        'Door Jambs Cleaned',
        'Air Freshener Treatment',
        'Cup Holder Deep Clean'
      ],
      cta: 'Get Quote',
      link: '/#quote',
      icon: <Sparkles className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Exterior Detail',
      sedanPrice: '$200',
      suvPrice: '$225',
      popular: false,
      description: 'Professional exterior wash and protection',
      features: [
        'Hand Wash & Dry',
        'Clay Bar Treatment',
        'Premium Wax Application',
        'Tire & Wheel Cleaning',
        'Tire Dressing',
        'Wheel Well Cleaning',
        'Door Jambs Cleaned',
        'Exterior Glass Polish'
      ],
      cta: 'Get Quote',
      link: '/#quote',
      icon: <Car className="w-12 h-12 text-orange-500" />
    },
    {
      name: 'Full Detail',
      sedanPrice: '$225',
      suvPrice: '$275',
      popular: true,
      description: 'Complete interior + exterior package - best value',
      features: [
        'Everything in Interior Detail',
        'Everything in Exterior Detail',
        'Engine Bay Wipe Down',
        'Weather Stripping Care',
        'Pet Hair Removal (Light)',
        'Odor Elimination',
        'Priority Scheduling',
        'Extended Satisfaction Guarantee'
      ],
      cta: 'Most Popular',
      link: '/#quote',
      icon: <Star className="w-12 h-12 text-orange-500" />
    }
  ];

  const addOns = [
    { service: 'Pet Hair Removal', price: '+$25-50', description: 'Thorough pet hair extraction from all surfaces' },
    { service: 'Headlight Restoration', price: '+$50', description: 'Restore clarity and brightness to foggy headlights' },
    { service: 'Engine Bay Cleaning', price: '+$50', description: 'Detailed engine compartment degreasing and dressing' },
    { service: 'Ceramic Coating', price: 'Quote', description: '2-5 year paint protection with incredible gloss' },
    { service: 'Odor Removal / Ozone', price: '+$75', description: 'Professional ozone treatment for tough odors' },
    { service: 'Scratch Removal', price: '+$80/panel', description: 'Light scratch and swirl mark correction' }
  ];

  // What's included breakdown
  const packageDetails = [
    {
      name: 'Interior Detail',
      includes: [
        'Full vacuum including seats, carpets, floor mats, and trunk',
        'Dashboard, console, and all plastic surfaces cleaned and conditioned',
        'UV protection to prevent cracking and fading',
        'Door panels and pockets cleaned',
        'Cup holders and storage compartments deep cleaned',
        'Interior glass cleaned streak-free',
        'Air vents dusted and cleaned',
        'Leather conditioning (if applicable)'
      ]
    },
    {
      name: 'Exterior Detail',
      includes: [
        'Pre-rinse to remove loose dirt and debris',
        'Hand wash with pH-balanced car wash soap',
        'Clay bar treatment to remove contaminants',
        'Premium wax for shine and protection',
        'Wheels and tires cleaned and dressed',
        'Wheel wells cleaned',
        'Door jambs cleaned and protected',
        'Exterior glass cleaned and polished'
      ]
    },
    {
      name: 'Full Detail',
      includes: [
        'Complete Interior Detail service',
        'Complete Exterior Detail service',
        'Engine bay wipe down and dressing',
        'Weather stripping conditioned',
        'Light pet hair removal included',
        'Basic odor elimination treatment',
        'Priority scheduling available',
        'Extended 7-day satisfaction guarantee'
      ]
    }
  ];

  // Generate schemas
  const faqSchema = generateFAQSchema(pricingFAQs);
  const enhancedBusinessSchema = generateEnhancedLocalBusinessSchema();

  // Generate Offer schemas for rich snippets
  const offerSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Interior Detail - Sedan/Coupe',
      description: 'Complete interior detailing service for sedans and coupes including deep clean, vacuum, surfaces, and windows',
      price: '200',
      priceCurrency: 'USD',
      url: 'https://mikahsmobiledetailingsc.com/pricing',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing",
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Columbia',
          addressRegion: 'SC',
          addressCountry: 'US'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Exterior Detail - Sedan/Coupe',
      description: 'Professional exterior detailing including hand wash, clay bar, wax, and tire dressing',
      price: '200',
      priceCurrency: 'USD',
      url: 'https://mikahsmobiledetailingsc.com/pricing',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing"
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Full Detail - Sedan/Coupe',
      description: 'Complete interior and exterior detailing package for sedans and coupes',
      price: '225',
      priceCurrency: 'USD',
      url: 'https://mikahsmobiledetailingsc.com/pricing',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing"
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Full Detail - SUV/Truck',
      description: 'Complete interior and exterior detailing package for SUVs and trucks',
      price: '275',
      priceCurrency: 'USD',
      url: 'https://mikahsmobiledetailingsc.com/pricing',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'LocalBusiness',
        name: "Mikah's Auto Detailing"
      }
    }
  ];

  const schemas = [faqSchema, enhancedBusinessSchema, ...offerSchemas];

  return (
    <>
      <SEOHead
        title="Car Detailing Prices Columbia SC 2026 — Interior from $200 | Mikah's"
        description="How much does car detailing cost? Interior from $200, full detail from $225. Mobile detailing in Columbia &amp; Lexington SC — we come to you. Free quote: (803) 667-8731."
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Car Detailing Prices: How Much Does Auto Detailing Cost?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Transparent auto detailing prices with no hidden fees
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Complete car detailing prices for every service we offer. All prices include mobile service at your location
              in Columbia, Lexington, Irmo, West Columbia, Cayce, and surrounding SC areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#quote"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition transform hover:scale-105"
              >
                Get Your Free Quote
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Detailing Prices at a Glance</h2>
            <p className="text-gray-600 text-lg">
              All prices include mobile service - we come to you!
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Service</th>
                  <th className="px-6 py-4 text-center font-bold">
                    <div className="flex items-center justify-center gap-2">
                      <Car className="w-5 h-5" />
                      Sedan/Coupe
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold">
                    <div className="flex items-center justify-center gap-2">
                      <Truck className="w-5 h-5" />
                      SUV/Truck
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-bold hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {vehiclePricing.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{item.service}</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-bold text-xl">{item.sedan}</td>
                    <td className="px-6 py-4 text-center text-primary-600 font-bold text-xl">{item.suv}</td>
                    <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Car Detailing Prices Guide - SEO content for national keywords */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Much Does Car Detailing Cost?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              <strong>Car detailing prices</strong> vary widely depending on the type of service, vehicle size, condition, and whether you choose mobile or shop-based detailing. On average, professional car detailing costs between $150 and $500 for standard services, with premium services like ceramic coating and paint correction ranging from $500 to $2,500+.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">Auto Detailing Prices by Service Type</h3>
            <p>
              Understanding <strong>auto detailing prices</strong> starts with knowing what each service includes. Here's a breakdown of typical car detailing costs:
            </p>
            <ul className="space-y-2">
              <li><strong>Interior Detailing:</strong> $150–$250. Includes deep vacuuming, surface cleaning and conditioning, glass cleaning, and UV protection. Adds stain removal and extraction for higher-tier packages.</li>
              <li><strong>Exterior Detailing:</strong> $100–$250. Includes hand wash, clay bar decontamination, wax or sealant protection, and wheel/tire dressing.</li>
              <li><strong>Full Detail (Interior + Exterior):</strong> $225–$400. Combines both services at a discounted rate compared to booking separately.</li>
              <li><strong>Ceramic Coating:</strong> $600–$2,500. Includes paint correction prep, professional-grade ceramic application, and multi-year protection.</li>
              <li><strong>Paint Correction:</strong> $400–$1,000+. Single-stage or multi-stage correction to remove swirl marks, scratches, and oxidation.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">What Affects Car Detailing Prices?</h3>
            <p>
              Several factors determine how much you'll pay for auto detailing:
            </p>
            <ul className="space-y-2">
              <li><strong>Vehicle size:</strong> Sedans and coupes cost less than SUVs, trucks, and vans due to additional surface area and interior space.</li>
              <li><strong>Vehicle condition:</strong> A regularly maintained vehicle costs less to detail than a heavily soiled or neglected one. Pet hair, heavy stains, and years of buildup add time and effort.</li>
              <li><strong>Service level:</strong> Basic maintenance details cost less than deep restoration packages. Premium products and coatings also increase pricing.</li>
              <li><strong>Location:</strong> Pricing varies by region. Columbia, SC detailing prices tend to be 10-20% lower than major metro areas while maintaining the same quality standards.</li>
              <li><strong>Mobile vs. shop:</strong> Mobile detailing may cost slightly more due to travel, though many services (including ours) include mobile service in the base price.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">Mobile Detailing Prices vs. Shop Prices</h3>
            <p>
              Mobile auto detailing prices are generally comparable to shop pricing, with the added benefit of convenience. You save time by not driving to a shop, waiting, and returning for pickup. At Mikah's Auto Detailing, our car detailing prices include mobile service at no extra charge — the price you see is the price you pay, whether we come to your home in Columbia, your office in Lexington, or anywhere in the Midlands SC area.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Detailing Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional auto detailing packages with transparent pricing. Every service includes our satisfaction guarantee and mobile service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-orange-500 transform md:scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MOST POPULAR - BEST VALUE
                  </div>
                )}

                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-center mb-4">
                    <div className="flex justify-center items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary-600">{pkg.sedanPrice}</span>
                      <span className="text-gray-500">sedan</span>
                      <span className="text-gray-400 mx-1">|</span>
                      <span className="text-3xl font-bold text-primary-600">{pkg.suvPrice}</span>
                      <span className="text-gray-500">SUV</span>
                    </div>
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

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Each Package</h2>
            <p className="text-gray-600 text-lg">
              Detailed breakdown of our car detailing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageDetails.map((pkg, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-600 border-b pb-3">{pkg.name}</h3>
                <ul className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Services</h2>
            <p className="text-gray-600 text-lg">
              Customize your detail with these popular add-on services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className={`p-6 ${index < addOns.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''} ${index % 2 === 0 && index < addOns.length - 1 ? 'md:border-r border-gray-200' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-gray-800 text-lg">{addon.service}</span>
                    <span className="text-orange-500 font-bold text-lg">{addon.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Detailing Prices FAQ</h2>
            <p className="text-gray-600 text-lg">
              Common questions about auto detailing prices and what they include
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
            Get Your Free Quote
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Ready to get your vehicle detailed? Contact us for a free, no-obligation quote today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105"
            >
              Get Your Free Quote
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
