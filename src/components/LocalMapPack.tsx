import { useState } from 'react';
import { MapPin, Star, Phone, Clock, ChevronRight, Navigation, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceArea {
  city: string;
  slug: string;
  tagline: string;
  neighborhoods: string[];
  position: { top: string; left: string }; // Position on the visual map
  featured?: boolean;
}

const serviceAreas: ServiceArea[] = [
  {
    city: 'Blythewood',
    slug: 'blythewood-sc',
    tagline: 'Cobblestone Park, Killian, Ridgewood',
    neighborhoods: ['Cobblestone Park', 'Killian', 'Ridgewood', 'Longtown'],
    position: { top: '15%', left: '70%' }
  },
  {
    city: 'Chapin',
    slug: 'chapin-sc',
    tagline: 'Lake Murray Dam, Crooked Creek',
    neighborhoods: ['Lake Murray Dam', 'Crooked Creek', 'Ballentine'],
    position: { top: '25%', left: '25%' }
  },
  {
    city: 'Irmo',
    slug: 'irmo-sc',
    tagline: 'Harbison, Lake Murray Shores',
    neighborhoods: ['Harbison', 'Lake Murray Shores', 'Seven Oaks'],
    position: { top: '35%', left: '40%' },
    featured: true
  },
  {
    city: 'Columbia',
    slug: 'columbia-sc',
    tagline: 'Downtown, Five Points, Forest Acres',
    neighborhoods: ['Downtown', 'Five Points', 'Forest Acres', 'Shandon', 'The Vista'],
    position: { top: '45%', left: '60%' },
    featured: true
  },
  {
    city: 'Lexington',
    slug: 'lexington-sc',
    tagline: 'Lake Murray, Oak Grove, Red Bank',
    neighborhoods: ['Lake Murray', 'Oak Grove', 'Red Bank', 'Gilbert'],
    position: { top: '60%', left: '30%' },
    featured: true
  },
  {
    city: 'West Columbia',
    slug: 'west-columbia-sc',
    tagline: 'Cayce, Airport Area, Riverwalk',
    neighborhoods: ['Cayce', 'Airport Area', 'Springdale'],
    position: { top: '55%', left: '55%' }
  },
  {
    city: 'Newberry',
    slug: 'newberry-sc',
    tagline: 'Historic Downtown, Newberry College area',
    neighborhoods: ['Downtown Newberry', 'College Park'],
    position: { top: '20%', left: '10%' }
  },
  {
    city: 'Swansea',
    slug: 'swansea-sc',
    tagline: 'Swansea, Gaston, Edmund',
    neighborhoods: ['Swansea', 'Gaston', 'Edmund'],
    position: { top: '75%', left: '45%' }
  }
];

const businessInfo = {
  name: "Mikah's Auto Detailing",
  rating: 5.0,
  reviewCount: 31,
  phone: '(803) 667-8731',
  hours: 'Open Mon-Sat 8AM-6PM',
  type: 'Mobile Auto Detailing',
  badges: ['IDA Certified', 'Fully Insured', '5-Star Rated']
};

export const LocalMapPack = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(serviceAreas.find(a => a.city === 'Columbia')!);

  return (
    <section className="py-12 md:py-20 bg-white" aria-label="Local Service Area Map">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Mobile Service - We Come To You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Serving Columbia & The Midlands
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional mobile auto detailing throughout the Greater Columbia area. No travel fees within our service area.
          </p>
        </div>

        {/* Map Pack Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

            {/* Business Header - Like Google's Business Profile */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-5">

                {/* Logo */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-3xl">M</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {businessInfo.name}
                  </h3>

                  {/* Rating Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-lg text-gray-900">{businessInfo.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <a href="/review-us" className="text-gray-600 hover:text-primary-600 transition-colors">
                        ({businessInfo.reviewCount} reviews)
                      </a>
                    </div>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <span className="text-gray-600">{businessInfo.type}</span>
                  </div>

                  {/* Quick Details */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-green-600 font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      {businessInfo.hours}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      Mobile Service
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:8036678731"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="https://maps.google.com/?q=Mikah's+Auto+Detailing+Columbia+SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all border-2 border-primary-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Directions
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                {businessInfo.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Map + Location List Grid */}
            <div className="grid lg:grid-cols-5">

              {/* Visual Map Area */}
              <div className="lg:col-span-3 relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 min-h-[350px] md:min-h-[450px] overflow-hidden">

                {/* Decorative Map Elements */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                  {/* Lake Murray representation */}
                  <ellipse cx="120" cy="120" rx="60" ry="40" fill="#93c5fd" opacity="0.6" />
                  <text x="120" y="125" textAnchor="middle" className="text-[8px] fill-blue-600 font-medium">Lake Murray</text>

                  {/* Congaree River */}
                  <path d="M200 50 Q220 100 240 150 Q250 200 280 280" stroke="#93c5fd" strokeWidth="8" fill="none" opacity="0.5" />

                  {/* Road lines */}
                  <line x1="50" y1="150" x2="350" y2="150" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="50" x2="200" y2="280" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
                </svg>

                {/* Service Area Pins */}
                {serviceAreas.map((area) => (
                  <button
                    key={area.slug}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
                      selectedArea.slug === area.slug ? 'scale-125 z-20' : 'hover:scale-110'
                    }`}
                    style={{ top: area.position.top, left: area.position.left }}
                    onClick={() => setSelectedArea(area)}
                    onMouseEnter={() => setHoveredArea(area.slug)}
                    onMouseLeave={() => setHoveredArea(null)}
                    aria-label={`Select ${area.city}`}
                  >
                    {/* Pin */}
                    <div className={`relative ${selectedArea.slug === area.slug ? 'animate-bounce' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 ${
                        selectedArea.slug === area.slug
                          ? 'bg-primary-600 border-white'
                          : area.featured
                          ? 'bg-primary-500 border-primary-200'
                          : 'bg-white border-gray-300'
                      }`}>
                        <MapPin className={`w-5 h-5 ${
                          selectedArea.slug === area.slug || area.featured ? 'text-white' : 'text-primary-600'
                        }`} />
                      </div>
                      {/* Pulse effect for selected */}
                      {selectedArea.slug === area.slug && (
                        <div className="absolute inset-0 w-10 h-10 rounded-full bg-primary-400 animate-ping opacity-30"></div>
                      )}
                    </div>

                    {/* City Label */}
                    <span className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-2 py-0.5 rounded ${
                      selectedArea.slug === area.slug
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 shadow-sm'
                    }`}>
                      {area.city}
                    </span>
                  </button>
                ))}

                {/* Selected Area Info Card */}
                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72">
                  <Link
                    to={`/locations/${selectedArea.slug}`}
                    className="block bg-white rounded-xl shadow-xl p-4 border border-gray-200 hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-lg">{selectedArea.city}, SC</h4>
                        <p className="text-sm text-gray-600 truncate">{selectedArea.tagline}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {selectedArea.neighborhoods.slice(0, 4).map((n, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                          {n}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-primary-600 font-semibold text-sm flex items-center gap-1">
                        View {selectedArea.city} Details
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Map Legend */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Service Areas</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    <span>Featured</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                    <span>All Areas</span>
                  </div>
                </div>
              </div>

              {/* Location List */}
              <div className="lg:col-span-2 border-l border-gray-100">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary-600" />
                    All Service Areas
                  </h4>
                </div>

                <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                  {serviceAreas.map((area, idx) => (
                    <button
                      key={area.slug}
                      onClick={() => setSelectedArea(area)}
                      className={`w-full text-left p-4 transition-colors ${
                        selectedArea.slug === area.slug
                          ? 'bg-primary-50 border-l-4 border-primary-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                          selectedArea.slug === area.slug
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-gray-900">{area.city}, SC</h5>
                            {area.featured && (
                              <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] rounded font-medium">
                                TOP
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 truncate">{area.tagline}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
                          selectedArea.slug === area.slug ? 'text-primary-600' : 'text-gray-300'
                        }`} />
                      </div>
                    </button>
                  ))}
                </div>

                {/* View All Link */}
                <Link
                  to="/locations"
                  className="block p-4 text-center font-semibold text-primary-700 hover:bg-primary-50 transition-colors border-t border-gray-200"
                >
                  View All Neighborhoods & Areas
                </Link>
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="p-5 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white text-center md:text-left">
                  <h4 className="font-bold text-xl">Book Your Mobile Detail Today</h4>
                  <p className="text-primary-100">Same-day service available | No travel fees</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:8036678731"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    (803) 667-8731
                  </a>
                  <Link
                    to="/#quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-800 text-white font-bold rounded-xl hover:bg-primary-900 transition-colors border border-primary-500"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO: Inline structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mikahsmobiledetailingsc.com/#business",
              "name": "Mikah's Auto Detailing",
              "image": "https://mikahsmobiledetailingsc.com/logo.jpg",
              "telephone": "+1-803-667-8731",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "31",
                "bestRating": "5"
              },
              "areaServed": serviceAreas.map(area => ({
                "@type": "City",
                "name": area.city,
                "containedInPlace": { "@type": "State", "name": "South Carolina" }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default LocalMapPack;
