import React from 'react';
import { Sparkles, Star, Shield, Wrench, Zap, Anchor, RotateCw } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateFAQSchema } from '../components/seo/StructuredData';
import { generateEnhancedLocalBusinessSchema } from '../components/seo/EnhancedLocalBusinessSchema';
import { faqs } from '../data/faqs-comprehensive';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string[];
  color: string;
  image: string;
  imageAlt: string;
  popular?: boolean;
}

export const ServicesPage = () => {
  // Get service-specific FAQs
  const serviceFAQs = [
    faqs.find(f => f.id === 'pri-1'), // How much does car detailing cost
    faqs.find(f => f.id === 'pri-3'), // What is most popular package
    faqs.find(f => f.id === 'pri-6'), // Can I get just interior or exterior
    faqs.find(f => f.id === 'gen-2'), // How long does detailing take
    faqs.find(f => f.id === 'gen-6'), // Do you detail trucks and SUVs
  ].filter(Boolean).map(f => ({ question: f!.question, answer: f!.answer }));

  const getServiceUrl = (title: string): string => {
    const urlMap: { [key: string]: string } = {
      'Interior Detail': '/services/interior-detailing',
      'Exterior Detail': '/services/exterior-detailing',
      'Basic Detail Package': '/services/full-detail',
      'Factory Reset Package': '/services/full-detail',
      'Ceramic Coatings': '/services/ceramic-coating',
      'Paint Corrections': '/services/paint-correction',
      'Specialty Services': '/services/interior-detailing',
      'Marine & RV Detailing': '/services/exterior-detailing',
      'Routine Reset': '/services/mobile-detailing',
    };
    return urlMap[title] || '/services/full-detail';
  };

  const services: Service[] = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset Package',
      price: '$400',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Foam contact wash, brake dust removal, protective wax layer, tires & rims dressed',
        'Add-On Services: Weather Stripping Restoration, Scratch Removal (call for a quote)'
      ],
      image: '/exterior3.jpg',
      imageAlt: 'Auto detailing services columbia sc - factory reset complete detail package',
      popular: true
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail Package',
      price: '$225',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Wheels decontaminated, foam contact wash, protective wax layer, wheels & tires dressed'
      ],
      image: '/exterior1.jpg',
      imageAlt: 'Auto detailing services columbia sc - basic detail package interior and exterior'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Interior Detail',
      price: '$200',
      color: 'bg-primary-500',
      description: [
        'Full interior wipe down & conditioning',
        'UV protection on all surfaces',
        'Complete vacuum & disinfection',
        'Glass cleaned inside & out',
        'Door jambs cleaned & waxed'
      ],
      image: '/interior1.jpg',
      imageAlt: 'Interior auto detailing services columbia sc - professional cleaning and conditioning'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Exterior Detail',
      price: '$100',
      color: 'bg-primary-500',
      description: [
        'Foam contact wash',
        'Wheels decontaminated & dressed',
        'Protective wax layer applied',
        'Tires dressed & shined',
        'Door jambs cleaned'
      ],
      image: '/exterior2.jpg',
      imageAlt: 'Exterior auto detailing services columbia sc - professional wash and wax'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Ceramic Coatings',
      price: 'Starting at $999',
      color: 'bg-primary-500',
      description: [
        'Achieve long-term paint protection with our professional-grade ceramic application',
        'We meticulously prepare your vehicle with thorough wash and decontamination',
        'Ensures maximum durability and an incredible shine that lasts'
      ],
      image: '/ceramic.jpg',
      imageAlt: 'Auto detailing services columbia sc - ceramic coating paint protection'
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Paint Corrections',
      price: 'Starting at $599',
      color: 'bg-primary-600',
      description: [
        "Restore your vehicle's flawless finish with expert paint correction",
        'Effectively remove swirl marks, light scratches, and oxidation',
        'Single-stage or two-stage correction options bring back original luster'
      ],
      image: '/exterior7.jpg',
      imageAlt: 'Auto detailing services columbia sc - paint correction swirl removal'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Specialty Services',
      price: 'Quote',
      color: 'bg-primary-500',
      description: [
        'Interior-only or Exterior-only detail',
        'Odor Removal / Ozone Treatment',
        'Engine Bay Detail'
      ],
      image: '/interior1.jpg',
      imageAlt: 'Auto detailing services columbia sc - specialty detailing and engine bay'
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Marine & RV Detailing',
      price: 'Quote',
      color: 'bg-primary-500',
      description: [
        'Marine Detailing',
        'RV Detailing',
        'Motorcycle Detailing'
      ],
      image: '/exterior5.jpg',
      imageAlt: 'Auto detailing services columbia sc - marine RV and motorcycle detailing'
    },
    {
      icon: <RotateCw className="w-8 h-8" />,
      title: 'Routine Reset',
      price: '$225/Month',
      color: 'bg-orange-500',
      description: [
        'Stay consistently clean with our monthly subscription designed to keep your vehicle clean, protected, and consistent — every month.',
        "✅What's Included:",
        '• 2x Exterior Details per Month',
        '• 1x Interior Reset per Month',
        '• Priority Scheduling - You pick the times',
        '💰 Pricing: $225/month • Cancel anytime. No rollovers.',
        '⚠️ Want to stay consistently clean without falling behind? The Routine Reset is your system.'
      ],
      image: '/exterior6.jpg',
      imageAlt: 'Auto detailing services columbia sc - monthly subscription routine reset'
    }
  ];

  // Generate service list schema
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "@id": `https://mikahsmobiledetailingsc.com${getServiceUrl(service.title)}`,
        "name": service.title,
        "description": service.description.join(' '),
        "image": `https://mikahsmobiledetailingsc.com${service.image}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Mikah's Auto Detailing",
          "telephone": "(803) 667-8731"
        }
      }
    }))
  };

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(serviceFAQs);

  // Combine schemas
  const schemas = [serviceListSchema, faqSchema, generateEnhancedLocalBusinessSchema()];

  return (
    <>
      <SEOHead
        title="Auto Detailing Services Columbia SC | Packages & Pricing | Mikah's"
        description="Professional auto detailing services in Columbia, SC. Mobile detailing, ceramic coating, paint correction, interior & exterior packages. 5-star rated. Call (803) 667-8731!"
        keywords="auto detailing services columbia sc, auto detailing services in columbia sc, mobile auto detailing columbia sc, car detailing columbia sc, ceramic coating columbia sc, interior detailing, exterior detailing, paint correction, mobile detailer near me"
        canonical="https://mikahsmobiledetailingsc.com/services"
        ogType="website"
        schema={schemas}
      />

      <Navigation />


      {/* Services Section */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-20 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-3 md:px-4 max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">Auto Detailing Services in Columbia SC</h1>
          <p className="text-center text-gray-600 text-sm md:text-base mb-4 md:mb-8 max-w-2xl mx-auto">
            Professional auto detailing services in Columbia, SC. We bring mobile car detailing, ceramic coating, and paint correction to your location with comprehensive detailing packages.
          </p>

          <div className="flex justify-center mb-8 md:mb-12">
            <a
              href="/book"
              className="inline-block py-3 px-8 bg-primary-700 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-primary-800 transition text-center"
            >
              Book Online
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Service Image */}
                <div className="relative h-28 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    title={service.title}
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute bottom-2 left-2 md:top-4 md:right-4 md:bottom-auto md:left-auto ${service.color} text-white px-2 py-1 md:px-3 md:py-1 rounded-md md:rounded-lg`}>
                    {service.icon}
                  </div>
                  {service.popular && (
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2" itemProp="name">{service.title}</h3>
                  <p className="text-lg md:text-2xl font-bold text-primary-600 mb-2 md:mb-4" itemProp="price">{service.price}</p>

                  {/* Description - Hidden on mobile */}
                  <div itemProp="description" className="hidden md:block">
                    <ul className="space-y-2 mb-6">
                      {service.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hidden metadata for schema */}
                  <meta itemProp="provider" content="Mikah's Auto Detailing" />
                  <meta itemProp="areaServed" content="Columbia, SC" />
                  <link itemProp="url" href={`https://mikahsmobiledetailingsc.com${getServiceUrl(service.title)}`} />

                  <a
                    href={getServiceUrl(service.title)}
                    className="block w-full py-2 md:py-3 bg-primary-100 md:bg-primary-700 text-primary-700 md:text-white text-xs md:text-sm font-semibold rounded-md md:rounded-lg hover:bg-primary-800 hover:text-white transition text-center"
                  >
                    Details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 md:py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Detail?</h2>
          <p className="text-base md:text-lg text-primary-100 mb-8">
            Schedule your auto detailing service online in minutes — we come to you anywhere in Columbia, SC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book"
              className="inline-block py-3 px-8 bg-white text-primary-700 text-sm md:text-base font-semibold rounded-lg hover:bg-gray-100 transition text-center"
            >
              Book Online
            </a>
            <a
              href="tel:+18036678731"
              className="inline-block py-3 px-8 bg-primary-800 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-primary-900 transition text-center"
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

export default ServicesPage;
