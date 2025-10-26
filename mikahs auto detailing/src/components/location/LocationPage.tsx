import React from 'react';
import { LocationData, PricingTier } from '../../types/location';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from '../../utils/schema';
import LocationFAQ from './LocationFAQ';
import ServiceAreaMap from './ServiceAreaMap';
import TestimonialsSection from './TestimonialsSection';

interface LocationPageProps {
  location: LocationData;
  pricingTiers: PricingTier[];
  businessInfo: {
    name: string;
    phone: string;
    streetAddress: string;
    postalCode: string;
    image: string;
    website: string;
    socialLinks: string[];
  };
}

const LocationPage: React.FC<LocationPageProps> = ({
  location,
  pricingTiers,
  businessInfo,
}) => {
  const localBusinessSchema = generateLocalBusinessSchema(location, businessInfo);
  const breadcrumbSchema = generateBreadcrumbSchema(location, businessInfo.website);

  return (
    <div className="location-page">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Car Detailing in {location.city}, SC | Mikahs Auto
              Detailing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessInfo.phone}`}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Call Now: {businessInfo.phone}
              </a>
              <a
                href="#booking"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg border-2 border-white"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Premium Auto Detailing Services in {location.city}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {location.uniqueContent.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks Section */}
      <section className="landmarks py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Serving All of {location.city}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-3">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {landmark.name}
                      </h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {landmark.type}
                      </span>
                      <p className="text-gray-700 text-sm">{landmark.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Mikahs Auto Detailing in {location.city}?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {location.uniqueContent.whyChooseUs}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Local Expertise
                </h3>
                <p className="text-gray-700">{location.uniqueContent.localExpertise}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Community Involvement
                </h3>
                <p className="text-gray-700">
                  {location.uniqueContent.communityInvolvement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Services in {location.city}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional detailing packages tailored for {location.city} residents
            </p>

            {pricingTiers.map((tier, tierIndex) => (
              <div key={tierIndex} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
                  {tier.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tier.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-900">
                          {service.name}
                        </h4>
                        <span className="text-2xl font-bold text-blue-600">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        Duration: {service.duration}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#booking"
                        className="block mt-6 text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Book This Service
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={location.testimonials} city={location.city} />

      {/* Service Area Map */}
      <ServiceAreaMap location={location} />

      {/* FAQ Section */}
      <LocationFAQ faqs={location.faqs} city={location.city} />

      {/* Call to Action */}
      <section className="cta py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Car Shine in {location.city}?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book your professional detailing service today and experience the Mikahs
            Auto Detailing difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              Call: {businessInfo.phone}
            </a>
            <a
              href="#booking"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg border-2 border-white inline-block"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
