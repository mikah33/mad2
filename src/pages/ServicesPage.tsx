import React from 'react';
import { Sparkles, Star, Shield, Wrench, Zap, Anchor, RotateCw } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
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
}

export const ServicesPage = () => {
  const getServiceUrl = (title: string): string => {
    const urlMap: { [key: string]: string } = {
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
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Basic Detail Package',
      price: '$200',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Wheels decontaminated, foam contact wash, protective wax layer, wheels & tires dressed'
      ],
      image: '/exterior1.jpg',
      imageAlt: 'Basic auto detailing package showing clean exterior and interior in Columbia SC'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Factory Reset Package',
      price: '$325',
      color: 'bg-orange-500',
      description: [
        'Interior: Full wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned, door jambs cleaned & waxed',
        'Exterior: Foam contact wash, brake dust removal, protective wax layer, tires & rims dressed',
        'Add-On Services: Weather Stripping Restoration ($50), Scratch Removal ($80/panel)'
      ],
      image: '/exterior2.jpg',
      imageAlt: 'Factory reset complete auto detailing package in Columbia SC'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ceramic Coatings',
      price: 'Quote',
      color: 'bg-primary-500',
      description: [
        'Achieve long-term paint protection with our professional-grade ceramic application',
        'We meticulously prepare your vehicle with thorough wash and decontamination',
        'Ensures maximum durability and an incredible shine that lasts'
      ],
      image: '/exterior3.jpg',
      imageAlt: 'Professional ceramic coating application on vehicle in Columbia SC'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Paint Corrections',
      price: 'Quote',
      color: 'bg-primary-600',
      description: [
        "Restore your vehicle's flawless finish with expert paint correction",
        'Effectively remove swirl marks, light scratches, and oxidation',
        'Single-stage or two-stage correction options bring back original luster'
      ],
      image: '/exterior4.jpg',
      imageAlt: 'Paint correction and polishing service removing swirls in Columbia SC'
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
      imageAlt: 'Specialty auto detailing services including interior and engine bay in Columbia SC'
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
      imageAlt: 'Marine, RV, and motorcycle detailing services in Columbia SC'
    },
    {
      icon: <RotateCw className="w-8 h-8" />,
      title: 'Routine Reset',
      price: '$175/Month',
      color: 'bg-orange-500',
      description: [
        'Stay consistently clean with our monthly subscription designed to keep your vehicle clean, protected, and consistent — every month.',
        "✅What's Included:",
        '• 2x Exterior Details per Month',
        '• 1x Interior Reset per Month',
        '• 1x Engine Bay Cleaning (first visit of each month)',
        '• Priority Scheduling - You pick the times',
        '💰 Pricing: First 2 months: $300 upfront (limited-time offer)',
        'After that: $175/month • Cancel anytime. No rollovers.',
        '⚠️ Want to stay consistently clean without falling behind? The Routine Reset is your system.'
      ],
      image: '/exterior6.jpg',
      imageAlt: 'Monthly auto detailing subscription service in Columbia SC'
    }
  ];

  return (
    <>
      <SEOHead
        title="Auto Detailing Services | Mikah's Mobile Detailing SC"
        description="Professional auto detailing services in Columbia, SC. Mobile detailing, interior/exterior cleaning, ceramic coating, paint correction, and more."
        keywords="auto detailing services, mobile detailing Columbia SC, interior detailing, exterior detailing, ceramic coating, paint correction, car detailing services"
        canonical="https://mikahsmobiledetailingsc.com/services"
        ogType="website"
      />

      <script type="application/ld+json">
        {JSON.stringify({
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
              "image": {
                "@type": "ImageObject",
                "url": `https://mikahsmobiledetailingsc.com${service.image}`,
                "name": service.imageAlt,
                "description": service.imageAlt,
                "contentUrl": `https://mikahsmobiledetailingsc.com${service.image}`,
                "creator": {
                  "@type": "Person",
                  "name": "Mikah Albertson"
                },
                "copyrightHolder": {
                  "@type": "Organization",
                  "name": "Mikah's Auto Detailing"
                },
                "copyrightNotice": "© 2024 Mikah's Auto Detailing. All rights reserved.",
                "creditText": "Photo by Mikah's Auto Detailing",
                "acquireLicensePage": "https://mikahsmobiledetailingsc.com/contact",
                "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "Mikah's Auto Detailing",
                "telephone": "(803) 667-8731",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Columbia",
                  "addressRegion": "SC",
                  "addressCountry": "US"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Columbia",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "SC"
                }
              },
              "offers": service.price !== 'Quote' ? {
                "@type": "Offer",
                "price": service.price.replace(/[^0-9]/g, ''),
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              } : {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            }
          }))
        })}
      </script>

      <Navigation />


      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Professional Services</h1>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Choose from our comprehensive range of detailing services. Click "View Details" to learn more about each service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    title={service.title}
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-xl font-bold text-gray-800" itemProp="price">{service.price}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${service.color} text-white p-3 rounded-lg`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-800" itemProp="name">{service.title}</h3>

                  <div itemProp="description">
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

                  <div className="flex gap-2">
                    <a
                      href="/#quote"
                      className="flex-1 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-primary-700 hover:text-white transition text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href={getServiceUrl(service.title)}
                      className="flex-1 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition text-center text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
