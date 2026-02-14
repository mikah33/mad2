import { useState } from 'react';
import { MapPin, Star, Phone, Clock, ChevronRight, Navigation, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceArea {
  city: string;
  slug: string;
  description: string;
  neighborhoods: string[];
  coordinates: { lat: number; lng: number };
  distance?: string;
  featured?: boolean;
}

const serviceAreas: ServiceArea[] = [
  {
    city: 'Columbia',
    slug: 'columbia-sc',
    description: 'Downtown, Five Points, Forest Acres, Shandon, The Vista',
    neighborhoods: ['Downtown', 'Five Points', 'Forest Acres', 'Shandon', 'The Vista', 'Rosewood'],
    coordinates: { lat: 34.0007, lng: -81.0348 },
    featured: true
  },
  {
    city: 'Lexington',
    slug: 'lexington-sc',
    description: 'Lake Murray, Oak Grove, Red Bank, Gilbert',
    neighborhoods: ['Lake Murray', 'Oak Grove', 'Red Bank', 'Gilbert', 'Summit'],
    coordinates: { lat: 33.9816, lng: -81.2362 },
    featured: true
  },
  {
    city: 'Irmo',
    slug: 'irmo-sc',
    description: 'Harbison, Lake Murray Shores, Seven Oaks',
    neighborhoods: ['Harbison', 'Lake Murray Shores', 'Seven Oaks', 'Friarsgate'],
    coordinates: { lat: 34.0858, lng: -81.1834 },
    featured: true
  },
  {
    city: 'West Columbia',
    slug: 'west-columbia-sc',
    description: 'Cayce, Airport Area, Springdale, Riverwalk',
    neighborhoods: ['Cayce', 'Airport Area', 'Springdale', 'Riverwalk'],
    coordinates: { lat: 33.9935, lng: -81.0740 }
  },
  {
    city: 'Chapin',
    slug: 'chapin-sc',
    description: 'Lake Murray Dam, Crooked Creek, Ballentine',
    neighborhoods: ['Lake Murray Dam', 'Crooked Creek', 'Ballentine', 'Little Mountain'],
    coordinates: { lat: 34.1660, lng: -81.3496 }
  },
  {
    city: 'Blythewood',
    slug: 'blythewood-sc',
    description: 'Cobblestone Park, Killian, Ridgewood',
    neighborhoods: ['Cobblestone Park', 'Killian', 'Ridgewood', 'Longtown'],
    coordinates: { lat: 34.2143, lng: -80.9745 }
  }
];

// Business info
const businessInfo = {
  name: "Mikah's Auto Detailing",
  rating: 5.0,
  reviewCount: 31,
  phone: '(803) 667-8731',
  hours: 'Mon-Sat 8AM-6PM',
  priceRange: '$$',
  services: ['Mobile Detailing', 'Ceramic Coating', 'Paint Correction', 'Interior Detail'],
  badges: ['IDA Certified', 'Insured', '5.0 Rated']
};

export const ServiceAreaMapPack = () => {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(serviceAreas[0]);
  const [showAllAreas, setShowAllAreas] = useState(false);

  // Generate Google Maps embed URL centered on selected area or Columbia
  const center = selectedArea?.coordinates || serviceAreas[0].coordinates;
  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const mapUrl = mapsApiKey ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Mikah's+Auto+Detailing+Columbia+SC&center=${center.lat},${center.lng}&zoom=11` : '';

  // Fallback static map for performance
  const staticMapUrl = mapsApiKey ? `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=10&size=600x400&maptype=roadmap&markers=color:blue%7C${serviceAreas.map(a => `${a.coordinates.lat},${a.coordinates.lng}`).join('|')}&key=${mapsApiKey}` : '';

  const displayedAreas = showAllAreas ? serviceAreas : serviceAreas.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-gray-50" aria-label="Service Areas Map">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Service Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional mobile auto detailing throughout Columbia, Lexington & the Midlands
          </p>
        </div>

        {/* Map Pack Container - Mimics Google's Local Pack */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

            {/* Top Section - Business Card */}
            <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
              <div className="flex items-start gap-4">
                {/* Business Logo/Avatar */}
                <div className="w-16 h-16 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>

                {/* Business Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {businessInfo.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{businessInfo.rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      ({businessInfo.reviewCount} reviews)
                    </span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-600 text-sm">{businessInfo.priceRange}</span>
                  </div>

                  {/* Quick Info */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      Mobile Service
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary-600" />
                      {businessInfo.hours}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:8036678731"
                  className="hidden md:flex items-center gap-2 px-5 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {businessInfo.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Content - Map + Locations */}
            <div className="grid md:grid-cols-2">

              {/* Location List */}
              <div className="order-2 md:order-1 border-r border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-primary-600" />
                    Areas We Serve
                  </h4>
                </div>

                <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                  {displayedAreas.map((area, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedArea(area)}
                      className={`w-full text-left p-4 hover:bg-primary-50 transition-colors ${
                        selectedArea?.slug === area.slug ? 'bg-primary-50 border-l-4 border-primary-600' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h5 className="font-semibold text-gray-900">{area.city}, SC</h5>
                            {area.featured && (
                              <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 ml-8 line-clamp-2">
                            {area.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Show More / View All */}
                {!showAllAreas && serviceAreas.length > 3 && (
                  <button
                    onClick={() => setShowAllAreas(true)}
                    className="w-full p-4 text-primary-700 font-medium hover:bg-primary-50 transition-colors border-t border-gray-100 flex items-center justify-center gap-2"
                  >
                    Show {serviceAreas.length - 3} more areas
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

                <Link
                  to="/locations"
                  className="block w-full p-4 text-center text-primary-700 font-semibold hover:bg-primary-50 transition-colors border-t border-gray-200"
                >
                  View All Service Areas
                </Link>
              </div>

              {/* Map */}
              <div className="order-1 md:order-2 relative bg-gray-100 min-h-[300px] md:min-h-[400px]">
                {/* Interactive Map Embed */}
                <iframe
                  title="Service Area Map"
                  src={mapUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Overlay with Selected Area Info */}
                {selectedArea && (
                  <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-xs">
                    <Link
                      to={`/locations/${selectedArea.slug}`}
                      className="block bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-primary-600" />
                        <h5 className="font-bold text-gray-900">{selectedArea.city}, SC</h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Serving {selectedArea.neighborhoods.slice(0, 3).join(', ')} & more
                      </p>
                      <span className="text-primary-700 font-medium text-sm flex items-center gap-1">
                        View Details <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-5 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg">Ready to book your detail?</h4>
                  <p className="text-primary-100 text-sm">Same-day service available in all areas</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="tel:8036678731"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (803) 667-8731
                  </a>
                  <Link
                    to="/#quote"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-500 transition-colors border border-primary-500"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schema Markup for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessInfo.name,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": businessInfo.rating,
                "reviewCount": businessInfo.reviewCount
              },
              "telephone": "+1-803-667-8731",
              "areaServed": serviceAreas.map(area => ({
                "@type": "City",
                "name": area.city,
                "containedInPlace": {
                  "@type": "State",
                  "name": "South Carolina"
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default ServiceAreaMapPack;
