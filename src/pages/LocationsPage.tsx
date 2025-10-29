import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const LocationsPage = () => {
  const baseUrl = 'https://mikahsmobiledetailingsc.com';

  // Generate comprehensive LocalBusiness schema with all service areas
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: "Mikah's Auto Detailing",
    image: `${baseUrl}/exterior1.jpg`,
    description: 'Professional mobile auto detailing services serving Columbia, Lexington, Irmo, and surrounding South Carolina communities. We bring expert car detailing directly to your location.',
    url: baseUrl,
    telephone: '(803) 667-8731',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Columbia',
      addressRegion: 'SC',
      addressCountry: 'US',
      postalCode: '29201'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.0007',
      longitude: '-81.0348'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Columbia',
        sameAs: 'https://en.wikipedia.org/wiki/Columbia,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Lexington',
        sameAs: 'https://en.wikipedia.org/wiki/Lexington,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'Irmo',
        sameAs: 'https://en.wikipedia.org/wiki/Irmo,_South_Carolina'
      },
      {
        '@type': 'City',
        name: 'West Columbia'
      },
      {
        '@type': 'City',
        name: 'Cayce'
      },
      {
        '@type': 'City',
        name: 'Forest Acres'
      },
      {
        '@type': 'City',
        name: 'Chapin'
      }
    ],
    sameAs: [
      'https://www.facebook.com/mikahsautodetailing',
      'https://www.instagram.com/mikahsautodetailing'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Auto Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Car Detailing',
            description: 'Complete mobile detailing service at your location'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
            description: 'Professional ceramic coating application'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Detailing',
            description: 'Deep interior cleaning and restoration'
          }
        }
      ]
    }
  };

  const serviceAreas = [
    {
      city: 'Columbia',
      citySlug: 'columbia-sc',
      description: 'Premier mobile detailing services throughout Columbia SC',
      neighborhoods: [
        'Downtown Columbia',
        'Forest Acres',
        'Shandon',
        'Rosewood',
        'Arcadia Lakes',
        'Lake Carolina',
        'Five Points',
        'The Vista',
        'Elmwood Park',
        'Heathwood',
        'Earlewood',
        'Eau Claire',
        'Spring Valley',
        'Sandhill'
      ],
      landmarks: ['USC Campus', 'Fort Jackson', 'Harbison', 'Sandhills Shopping Center']
    },
    {
      city: 'Lexington',
      citySlug: 'lexington-sc',
      description: 'Mobile auto detailing for Lexington and Lake Murray communities',
      neighborhoods: [
        'Lake Murray Shores',
        'Spence Island',
        'River Club',
        'Oak Grove',
        'Red Bank',
        'Gilbert',
        'Pelion',
        'Batesburg-Leesville',
        'Summit',
        'Cottages at Murray'
      ],
      landmarks: ['Lake Murray', 'Lexington Medical Center', 'Sunset Boulevard', 'Saluda Shoals Park']
    },
    {
      city: 'Irmo & Chapin',
      citySlug: 'irmo-sc',
      description: 'Expert detailing services for Lake Murray area and Northwest Columbia',
      neighborhoods: [
        'Harbison',
        'Seven Oaks',
        'Lake Murray Dam Area',
        'Chapin Town Center',
        'Crooked Creek',
        'Ballentine',
        'Little Mountain',
        'White Rock'
      ],
      landmarks: ['Harbison State Forest', 'Lake Murray Boulevard', 'Columbiana Centre']
    },
    {
      city: 'Cayce',
      citySlug: 'cayce-sc',
      description: 'Mobile detailing for Cayce and Airport area',
      neighborhoods: [
        'Cayce',
        'Springdale',
        'Airport Area',
        'Sunset',
        'Congaree Vista',
        'New Brookland',
        'Guignard Park',
        'Knox Abbott Drive'
      ],
      landmarks: ['Riverbanks Zoo', 'Columbia Metropolitan Airport', 'West Columbia Riverwalk']
    }
  ];

  return (
    <>
      <SEOHead
        title="Service Locations | Mobile Auto Detailing Columbia, Lexington, Irmo SC"
        description="Mobile auto detailing services available throughout Columbia, Lexington, Irmo, West Columbia, Cayce, and surrounding South Carolina communities. We come to you!"
        keywords="mobile detailing columbia sc, auto detailing lexington sc, car detailing irmo, mobile car wash columbia, detailing near me"
        canonical={`${baseUrl}/locations`}
        schema={locationSchema}
      />

      <Navigation />


      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/exterior1.jpg')] bg-cover bg-center"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5 text-primary-300" />
                <span className="text-sm font-semibold">Mobile Service - We Come to You!</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Service Locations
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Professional mobile auto detailing throughout Columbia, Lexington, Irmo, and surrounding South Carolina communities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:8036678731"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call (803) 667-8731
                </a>
                <a
                  href="/#quote"
                  className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-300" />
                  <span>20+ Locations</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-300" />
                  <span>Same-Day Available</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-300" />
                  <span>No Travel Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We bring professional mobile detailing services directly to your home, office, or preferred location throughout the Greater Columbia area
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  to={`/locations/${area.citySlug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-6 group-hover:from-primary-600 group-hover:to-primary-500 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6" />
                        <h3 className="text-2xl font-bold">{area.city}</h3>
                      </div>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <p className="text-gray-100">{area.description}</p>
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      Neighborhoods Served:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {area.neighborhoods.map((neighborhood, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{neighborhood}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                        Popular Landmarks:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {area.landmarks.map((landmark, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {landmark}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
                Mobile Detailing Convenience
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    We Come to You
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No need to drive to a shop or wait in line. We bring our professional equipment, water, and power directly to your home, office, or any convenient Columbia-area location.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Book appointments Monday through Saturday, 8am-6pm. We offer same-day service when available and weekend appointments for busy professionals throughout Columbia SC.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    No Travel Fees
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Free mobile service within 20 miles of Columbia. All listed neighborhoods and cities receive complimentary travel - no hidden fees or surcharges for Lexington, Irmo, or surrounding areas.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Easy Booking
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Call or text (803) 667-8731 to schedule your appointment. We'll confirm your location, discuss your vehicle's needs, and provide upfront pricing before we arrive.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Don't See Your Area Listed?
                </h3>
                <p className="text-lg mb-6 text-gray-200">
                  We may still service your location! Contact us to check availability in your area.
                </p>
                <a
                  href="tel:8036678731"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Call (803) 667-8731
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Map Info */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Comprehensive Columbia SC Coverage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                From Lake Murray waterfront properties in Lexington and Chapin to downtown Columbia condos, from Forest Acres neighborhoods to Irmo business parks - Mikah's Auto Detailing serves the entire Greater Columbia metropolitan area. Our mobile units are equipped with professional-grade equipment, ensuring shop-quality results at your location.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary-700 mb-2">20+</div>
                  <div className="text-gray-600 font-medium">Communities</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary-700 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Neighborhoods</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-4xl font-bold text-primary-700 mb-2">0</div>
                  <div className="text-gray-600 font-medium">Travel Fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
