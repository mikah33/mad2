import React, { useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Star,
  Shield,
  ArrowRight,
  Clock,
  CheckCircle,
  Home,
  Car
} from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../../components/seo/StructuredData';
import { generateGMBSchema } from '../../components/seo/GMBSchema';
import { aggregateRating, reviews } from '../../data/reviews';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  getCityBySlug,
  getNeighborhoodsByCity,
  getFeaturedNeighborhoods,
  City,
  Neighborhood
} from '../../data/neighborhoods';

// Helper to generate SEO-optimized neighborhood paths
const getNeighborhoodPath = (n: Neighborhood) => `/locations/${n.citySlug}/${n.slug}`;

interface NeighborhoodCardProps {
  neighborhood: Neighborhood;
  featured?: boolean;
}

const NeighborhoodCard: React.FC<NeighborhoodCardProps> = ({ neighborhood, featured = false }) => {
  return (
    <Link
      to={getNeighborhoodPath(neighborhood)}
      className={`group block border rounded-xl p-6 transition ${
        featured
          ? 'border-primary-200 bg-primary-50 hover:border-primary-400 hover:shadow-lg'
          : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold group-hover:text-primary-600 transition">
              {neighborhood.name}
            </h3>
            {featured && (
              <span className="bg-primary-600 text-white text-xs px-2 py-0.5 rounded font-medium">
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {neighborhood.city}, {neighborhood.state} - {neighborhood.zipCodes.join(', ')}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition flex-shrink-0" />
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {neighborhood.shortDescription}
      </p>

      {/* Quick stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <span>{neighborhood.landmarks.length} landmarks</span>
        <span>•</span>
        <span>{neighborhood.zipCodes.join(', ')}</span>
      </div>

      {/* Popular services */}
      <div className="flex flex-wrap gap-2">
        {neighborhood.popularServices.map((service, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Characteristics preview */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <ul className="grid grid-cols-2 gap-1">
          {neighborhood.characteristics.slice(0, 4).map((char, i) => (
            <li key={i} className="flex items-center text-xs text-gray-600">
              <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
              <span className="truncate">{char}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export const CityHubPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };
    playVideo();
  }, []);

  // Get city data
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) {
    return <Navigate to="/locations" replace />;
  }

  const neighborhoods = getNeighborhoodsByCity(city.slug);
  const featuredNeighborhoods = getFeaturedNeighborhoods(city.slug);
  const regularNeighborhoods = neighborhoods.filter(n => !n.featured);

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: `Mikah's Auto Detailing - ${city.name} SC`,
      description: city.seo.description,
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: '',
        city: city.name,
        state: 'SC',
        zip: '29063'
      }
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(city.faqs);

  // Canonical path for city hub
  const cityHubPath = `/locations/${city.slug}/neighborhoods`;

  // City-specific schema with neighborhoods
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://mikahsmobiledetailingsc.com${cityHubPath}`,
    name: `Mikah's Mobile Auto Detailing - ${city.name} SC`,
    description: city.description,
    url: `https://mikahsmobiledetailingsc.com${cityHubPath}`,
    telephone: '+1-803-667-8731',
    email: 'mikahsautodetailing@gmail.com',
    areaServed: neighborhoods.map(n => ({
      '@type': 'Place',
      name: `${n.name}, ${n.city}, SC`,
      geo: n.coordinates ? {
        '@type': 'GeoCoordinates',
        latitude: n.coordinates.lat,
        longitude: n.coordinates.lng
      } : undefined
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  };

  const schemas = [gmbSchema, localBusinessSchema, faqSchema, citySchema];

  // Calculate total landmarks across neighborhoods
  const totalLandmarks = neighborhoods.reduce((sum, n) => sum + n.landmarks.length, 0);

  return (
    <>
      <SEOHead
        title={city.seo.title}
        description={city.seo.description}
        keywords={city.seo.keywords.join(', ')}
        canonical={`https://mikahsmobiledetailingsc.com${cityHubPath}`}
        ogDescription={city.seo.ogDescription}
        twitterDescription={city.seo.ogDescription}
        schema={schemas}
      />

      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: `${city.name} SC`, path: `/locations/${city.slug}` },
              { label: 'All Neighborhoods', path: cityHubPath }
            ]}
          />
        </div>
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative text-white min-h-[60vh] w-full overflow-hidden flex items-center">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-24 pb-12">
            <div className="flex items-center justify-center gap-2 text-primary-300 mb-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-semibold">
                All {city.name} SC Neighborhoods
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Mobile Auto Detailing
              <br />
              <span className="text-primary-300">{city.name}, South Carolina</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              {city.shortDescription} Professional mobile car detailing serving all {city.name} neighborhoods.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-lg">
                <Home className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary-300" />
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold">{neighborhoods.length}</div>
                  <div className="text-xs md:text-sm text-gray-300">Neighborhoods</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-lg">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary-300" />
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold">{totalLandmarks}</div>
                  <div className="text-xs md:text-sm text-gray-300">Service Locations</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-lg">
                <Star className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-yellow-400" />
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold">5.0</div>
                  <div className="text-xs md:text-sm text-gray-300">{aggregateRating.reviewCount} Reviews</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="tel:8036678731">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (803) 667-8731
                </button>
              </a>
              <a href="/#quote">
                <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary-700 text-white text-base md:text-lg font-bold rounded-lg hover:bg-primary-800 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Your Free Quote
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* City Description */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <Car className="w-7 h-7 mr-3 text-primary-600" />
                Auto Detailing Throughout {city.name}
              </h2>
              <div className="prose prose-gray max-w-none">
                {city.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                <div className="flex items-center text-sm">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="font-medium">IDA Certified</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-medium">5.0 Star Rating</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium">Same-Day Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Neighborhoods */}
        {featuredNeighborhoods.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Popular {city.name} Neighborhoods
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Our most-requested service areas in {city.name}. Click any neighborhood for detailed
                information and local landmarks.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredNeighborhoods.map((neighborhood) => (
                  <NeighborhoodCard
                    key={neighborhood.slug}
                    neighborhood={neighborhood}
                    featured={true}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Neighborhoods */}
        {regularNeighborhoods.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                All {city.name} Neighborhoods
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Complete list of neighborhoods we serve in the {city.name} area
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNeighborhoods.map((neighborhood) => (
                  <NeighborhoodCard
                    key={neighborhood.slug}
                    neighborhood={neighborhood}
                    featured={false}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quick Navigation */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              Quick Links: {city.name} Neighborhoods
            </h2>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-wrap justify-center gap-3">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={getNeighborhoodPath(n)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-primary-400 hover:text-primary-700 hover:shadow-sm transition text-sm font-medium"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {city.name} Auto Detailing FAQ
            </h2>

            <div className="space-y-6">
              {city.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Locations Link */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-2xl font-bold mb-4">Serving All Columbia Metro Areas</h2>
            <p className="text-gray-600 mb-6">
              In addition to {city.name}, we provide mobile detailing throughout the Columbia metropolitan area.
            </p>
            <Link
              to="/locations"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition"
            >
              View all service locations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Detailing in {city.name}?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Best mobile car detailing across all {city.name} SC neighborhoods.
              5.0 rating from {aggregateRating.reviewCount} reviews. We come to you!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <p className="text-primary-200 mt-6">
              Serving {neighborhoods.map(n => n.name).join(', ')} and more
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CityHubPage;
