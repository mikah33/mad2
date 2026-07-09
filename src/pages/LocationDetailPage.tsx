import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Check, Star, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '../components/seo/StructuredData';
import { getLocationBySlug } from '../data/locations';
import { businessInfo } from '../data/business';
import { reviews, aggregateRating } from '../data/reviews';
import { faqs } from '../data/faqs-comprehensive';
import { NotFoundPage } from './NotFoundPage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const LocationDetailPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;

  if (!location) {
    return <NotFoundPage />;
  }

  // Get location-specific FAQs
  const locationFAQs = [
    faqs.find(f => f.id === 'mob-2'), // Do you detail at my home
    faqs.find(f => f.id === 'mob-6'), // What areas do you serve
    faqs.find(f => f.id === 'mob-1'), // How much does mobile detailing cost
    faqs.find(f => f.id === 'sch-1'), // How far in advance to book
    faqs.find(f => f.id === 'mob-5'), // Same-day service available
  ].filter(Boolean).map(f => ({ question: f!.question, answer: f!.answer }));

  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: 'Home', url: 'https://mikahsmobiledetailingsc.com' },
    { name: 'Locations', url: 'https://mikahsmobiledetailingsc.com/locations' },
    { name: `${location.city}, ${location.state}`, url: `https://mikahsmobiledetailingsc.com/locations/${location.slug}` }
  ];

  // Generate location-specific LocalBusiness schema
  const localBusinessSchema = {
    ...generateLocalBusinessSchema(
      {
        name: `${businessInfo.name} - ${location.city}`,
        description: location.description || businessInfo.description,
        phone: businessInfo.phone,
        email: businessInfo.email,
        address: {
          ...businessInfo.address,
          city: location.city,
          zip: location.zipCodes[0]
        },
        hours: businessInfo.hours,
        priceRange: businessInfo.priceRange
      },
      aggregateRating,
      reviews.slice(0, 3) // Top 3 reviews
    ),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates?.lat || 34.0007,
      longitude: location.coordinates?.lng || -81.0348
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      '@id': `https://en.wikipedia.org/wiki/${location.city.replace(' ', '_')},_${location.state.replace(' ', '_')}`
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(locationFAQs);

  const schemas = [localBusinessSchema, breadcrumbSchema, faqSchema];

  const services = [
    { name: 'Mobile Auto Detailing', price: 'from $100', icon: '🚗' },
    { name: 'Ceramic Coating', price: 'from $999', icon: '🛡️' },
    { name: 'Paint Correction', price: 'from $599', icon: '✨' },
    { name: 'Interior Detailing', price: 'from $200', icon: '🧽' },
    { name: 'Exterior Detailing', price: 'from $100', icon: '💦' },
    { name: 'Full Detail Package', price: '$225', icon: '⭐' }
  ];

  return (
    <>
      <SEOHead
        title={`Best Mobile Detailing ${location.city} SC | ${businessInfo.name}`}
        description={location.description || `Professional mobile auto detailing in ${location.city}, South Carolina. Ceramic coating, paint correction, interior/exterior detailing. We come to you! Free quotes. Call (803) 667-8731.`}
        keywords={`mobile detailing ${location.city} sc, car detailing ${location.city}, auto detailing ${location.city}, ceramic coating ${location.city}, car wash ${location.city}, mobile car detailing near me, best auto detailing ${location.city}`}
        canonical={`https://mikahsmobiledetailingsc.com/locations/${location.slug}/`}
        ogType="place"
        schema={schemas}
      />

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Locations
            </Link>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-12 h-12 text-primary-300 flex-shrink-0" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Mobile Detailing in {location.city}, SC
                </h1>
                <p className="text-xl text-primary-100 mb-4">
                  {location.description}
                </p>
                {location.neighborhoods && location.neighborhoods.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-primary-200">Serving:</span>
                    {location.neighborhoods.map((neighborhood, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-600/50 rounded-full text-sm">
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 text-primary-300 mb-3" />
                <h3 className="font-semibold mb-2">Call for Free Quote</h3>
                <a href="tel:8036678731" className="text-2xl font-bold hover:text-primary-200 transition">
                  (803) 667-8731
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary-300 mb-3" />
                <h3 className="font-semibold mb-2">Service Hours</h3>
                <p>Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-sm text-primary-200">Same-day available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Star className="w-8 h-8 text-primary-300 mb-3" />
                <h3 className="font-semibold mb-2">Top Rated Service</h3>
                <p className="text-2xl font-bold">{aggregateRating.ratingValue.toFixed(1)} ⭐</p>
                <p className="text-sm text-primary-200">{aggregateRating.reviewCount} reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Auto Detailing Services in {location.city}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional mobile detailing brought to your home or office in {location.city}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-primary-700 mb-3">{service.price}</p>
                  <Link
                    to="/#quote"
                    className="inline-block w-full text-center py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition"
                  >
                    Get Free Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why {location.city} Chooses Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Mobile Service</h3>
                  <p className="text-gray-600">
                    We come to your home, office, or any location in {location.city}. No need to drive anywhere or wait at a shop.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-gray-600">
                    Self-contained mobile unit with water, power, and professional-grade equipment. Same quality as any detail shop.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">IDA Certified</h3>
                  <p className="text-gray-600">
                    International Detailing Association certified. Fully insured for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-600">
                    We're not satisfied until you are. If you're not happy with any aspect of our service, we'll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {locationFAQs.length > 0 && (
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {locationFAQs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book in {location.city}?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get your free quote today and experience the best mobile detailing in {location.city}, SC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Book Online
              </a>
              <a
                href="tel:8036678731"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call (803) 667-8731
              </a>
              <Link
                to="/#quote"
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Get Free Quote Online
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LocationDetailPage;
