import React, { useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Home,
  Trees,
  ShoppingBag,
  GraduationCap,
  Building,
  Waves,
  Users
} from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { generateLocalBusinessSchema, generateFAQSchema } from '../../components/seo/StructuredData';
import { generateGMBSchema } from '../../components/seo/GMBSchema';
import { aggregateRating, reviews } from '../../data/reviews';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {
  getNeighborhoodBySlug,
  getAdjacentNeighborhoods,
  getCityBySlug,
  Neighborhood,
  Landmark
} from '../../data/neighborhoods';
import BookingTimeline from '../../components/BookingTimeline';

// Icon mapping for landmark types
const getLandmarkIcon = (type: Landmark['type']) => {
  const iconMap = {
    park: <Trees className="w-5 h-5" />,
    school: <GraduationCap className="w-5 h-5" />,
    shopping: <ShoppingBag className="w-5 h-5" />,
    restaurant: <Building className="w-5 h-5" />,
    community: <Users className="w-5 h-5" />,
    recreation: <Waves className="w-5 h-5" />,
    business: <Building className="w-5 h-5" />
  };
  return iconMap[type] || <MapPin className="w-5 h-5" />;
};

const getLandmarkColor = (type: Landmark['type']) => {
  const colorMap = {
    park: 'text-green-600 bg-green-50 border-green-200',
    school: 'text-purple-600 bg-purple-50 border-purple-200',
    shopping: 'text-orange-600 bg-orange-50 border-orange-200',
    restaurant: 'text-red-600 bg-red-50 border-red-200',
    community: 'text-blue-600 bg-blue-50 border-blue-200',
    recreation: 'text-teal-600 bg-teal-50 border-teal-200',
    business: 'text-gray-600 bg-gray-50 border-gray-200'
  };
  return colorMap[type] || 'text-gray-600 bg-gray-50 border-gray-200';
};

// Services data
const services = [
  {
    title: 'Basic Detail Package',
    price: '$225',
    duration: '2-3 hours',
    description: 'Interior full wipe down, conditioner + UV protection, vacuum, disinfection, glass cleaned. Exterior wheels decontaminated, foam wash, protective wax, wheels & tires dressed.',
    link: '/services/full-detail'
  },
  {
    title: 'Factory Reset Package',
    price: '$400',
    duration: '3-4 hours',
    description: 'Interior wipe down, conditioner + UV protection, vacuum + disinfection, light stain removal, shampoo & extraction, glass cleaned. Exterior foam wash, brake dust removal, protective wax, tires & rims dressed.',
    link: '/services/full-detail'
  },
  {
    title: 'Ceramic Coatings',
    price: 'Quote',
    duration: '1-2 days',
    description: 'Professional-grade ceramic application with thorough wash and decontamination. Long-term paint protection with maximum durability and incredible shine.',
    link: '/services/ceramic-coating'
  },
  {
    title: 'Paint Corrections',
    price: 'Quote',
    duration: '4-8 hours',
    description: 'Expert paint correction to remove swirl marks, light scratches, and oxidation. Single-stage or two-stage correction options.',
    link: '/services/paint-correction'
  }
];

export const NeighborhoodPage: React.FC = () => {
  const { neighborhoodSlug, citySlug } = useParams<{ neighborhoodSlug: string; citySlug?: string }>();
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

  // Get neighborhood data - support both URL patterns
  const neighborhood = neighborhoodSlug ? getNeighborhoodBySlug(neighborhoodSlug) : undefined;

  // Generate canonical URL path (SEO-optimized structure)
  const getNeighborhoodPath = (n: Neighborhood) => `/locations/${n.citySlug}/${n.slug}`;
  const canonicalPath = neighborhood ? getNeighborhoodPath(neighborhood) : '';

  if (!neighborhood) {
    return <Navigate to="/locations" replace />;
  }

  const city = getCityBySlug(neighborhood.citySlug);
  const adjacentNeighborhoods = getAdjacentNeighborhoods(neighborhood.slug);

  // Generate schemas
  const gmbSchema = generateGMBSchema();

  const localBusinessSchema = generateLocalBusinessSchema(
    {
      name: `Mikah's Auto Detailing - ${neighborhood.name}, ${neighborhood.city} SC`,
      description: neighborhood.seo.description,
      phone: '(803) 667-8731',
      email: 'mikahsautodetailing@gmail.com',
      address: {
        street: '',
        city: neighborhood.city,
        state: 'SC',
        zip: neighborhood.zipCodes[0]
      }
    },
    aggregateRating,
    reviews
  );

  const faqSchema = generateFAQSchema(neighborhood.faqs);

  // Neighborhood-specific schema
  const neighborhoodSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://mikahsmobiledetailingsc.com${canonicalPath}`,
    name: `Mikah's Mobile Auto Detailing - ${neighborhood.name}`,
    description: neighborhood.description,
    url: `https://mikahsmobiledetailingsc.com${canonicalPath}`,
    telephone: '+1-803-667-8731',
    email: 'mikahsautodetailing@gmail.com',
    areaServed: {
      '@type': 'Place',
      name: `${neighborhood.name}, ${neighborhood.city}, SC`,
      geo: neighborhood.coordinates ? {
        '@type': 'GeoCoordinates',
        latitude: neighborhood.coordinates.lat,
        longitude: neighborhood.coordinates.lng
      } : undefined
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: neighborhood.coordinates ? {
        '@type': 'GeoCoordinates',
        latitude: neighborhood.coordinates.lat,
        longitude: neighborhood.coordinates.lng
      } : undefined,
      geoRadius: '5 miles'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Venmo, Zelle',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        },
        price: service.price.replace('$', '').replace('/Month', ''),
        priceCurrency: 'USD',
        position: index + 1
      }))
    }
  };

  const schemas = [gmbSchema, localBusinessSchema, faqSchema, neighborhoodSchema];

  return (
    <>
      <SEOHead
        title={neighborhood.seo.title}
        description={neighborhood.seo.description}
        keywords={neighborhood.seo.keywords.join(', ')}
        canonical={`https://mikahsmobiledetailingsc.com${canonicalPath}`}
        ogDescription={neighborhood.seo.ogDescription}
        twitterDescription={neighborhood.seo.ogDescription}
        schema={schemas}
      />

      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations' },
              { label: `${neighborhood.city} SC`, path: `/locations/${neighborhood.citySlug}` },
              { label: 'All Neighborhoods', path: `/locations/${neighborhood.citySlug}/neighborhoods` },
              { label: neighborhood.name, path: canonicalPath }
            ]}
          />
        </div>
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative text-white min-h-[80vh] w-full overflow-hidden flex items-center">
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
          <div className="absolute inset-0 bg-black bg-opacity-55"></div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center max-w-7xl relative z-10 pt-24 pb-12">
            <div className="flex items-center justify-center gap-2 text-primary-300 mb-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-semibold">
                Mobile Detailing {neighborhood.name}, {neighborhood.city} SC
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Professional Auto Detailing
              <br />
              <span className="text-primary-300">{neighborhood.name}, {neighborhood.city}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-100 px-4">
              {neighborhood.shortDescription} Expert mobile car detailing brought directly to your {neighborhood.name} home or office.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 px-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-400 flex-shrink-0" />
                <span>5.0 Rating ({aggregateRating.reviewCount} Reviews)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>IDA Certified</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-primary-300 flex-shrink-0" />
                <span>Same Day Available</span>
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
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary-700 text-white text-base md:text-lg font-bold rounded-lg hover:bg-primary-800 transition shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Booking Form Section - Directly under hero */}
        <section id="booking" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Get Your Free {neighborhood.name} Quote
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Mobile detailing at your {neighborhood.name} location. We come to you!
            </p>
            <BookingTimeline />
          </div>
        </section>

        {/* Neighborhood Info Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* About the neighborhood */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Auto Detailing in {neighborhood.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {neighborhood.description}
                </p>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-primary-600" />
                    {neighborhood.name} Community
                  </h3>
                  <ul className="space-y-2">
                    {neighborhood.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Popular Vehicles:</strong> {neighborhood.vehicleTypes.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service note */}
              <div>
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary-800 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    {neighborhood.name} Detailing Specialties
                  </h3>
                  <p className="text-primary-700 mb-4">{neighborhood.serviceNotes}</p>

                  <div className="flex flex-wrap gap-2">
                    {neighborhood.popularServices.map((service, i) => (
                      <span
                        key={i}
                        className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium border border-primary-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Zip codes served */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    ZIP Codes We Serve in {neighborhood.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.zipCodes.map((zip, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Detailing Services in {neighborhood.name}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional car detailing at your {neighborhood.name} location. All prices include mobile service.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-700 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                    <div>
                      <div className="text-2xl font-bold text-primary-700">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-700 group-hover:translate-x-2 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Landmarks Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {neighborhood.name} Landmarks & Service Areas
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We proudly serve all areas of {neighborhood.name}. Here are some of the landmarks and locations
              where our mobile detailing service is available.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhood.landmarks.map((landmark, i) => {
                const colorClass = getLandmarkColor(landmark.type);
                return (
                  <div
                    key={i}
                    className={`rounded-xl border p-6 ${colorClass}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {getLandmarkIcon(landmark.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{landmark.name}</h3>
                        <span className="text-xs font-medium uppercase tracking-wide opacity-75">
                          {landmark.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm mb-4 opacity-90">{landmark.description}</p>

                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{landmark.detailingNote}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Adjacent Neighborhoods */}
        {adjacentNeighborhoods.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Nearby Neighborhoods We Serve
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Also serving these neighborhoods adjacent to {neighborhood.name}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adjacentNeighborhoods.map((adj) => (
                  <Link
                    key={adj.slug}
                    to={getNeighborhoodPath(adj)}
                    className="group block border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary-600 transition">
                          {adj.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {adj.city}, {adj.state}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition" />
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{adj.shortDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {adj.popularServices.slice(0, 2).map((service, i) => (
                        <span
                          key={i}
                          className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Link to city hub */}
              {city && (
                <div className="text-center mt-8">
                  <Link
                    to={`/locations/${city.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition"
                  >
                    View all {city.name} neighborhoods
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {neighborhood.name} Detailing FAQ
            </h2>

            <div className="space-y-6">
              {neighborhood.faqs.map((faq, index) => (
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

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Detailing in {neighborhood.name}?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Best mobile car detailing in {neighborhood.name}, {neighborhood.city} SC.
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
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg"
              >
                Get Free Quote Online
              </button>
            </div>

            <p className="text-primary-200 mt-6">
              Serving {neighborhood.name} and all {neighborhood.city} neighborhoods
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default NeighborhoodPage;
