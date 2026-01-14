import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Star, Shield } from 'lucide-react';

interface LocationData {
  name: string;
  slug: string;
  distance: string;
  highlights: string[];
  specialties: string[];
}

interface InternalLinkingMatrixProps {
  currentLocation: string;
  currentSlug: string;
  showServiceAreas?: boolean;
  showNearbyServices?: boolean;
  compact?: boolean;
}

export const InternalLinkingMatrix: React.FC<InternalLinkingMatrixProps> = ({
  currentLocation,
  currentSlug,
  showServiceAreas = true,
  showNearbyServices = true,
  compact = false
}) => {
  // Location data matrix with strategic connections
  const locationMatrix: Record<string, LocationData[]> = {
    'lexington-sc': [
      {
        name: 'Columbia SC',
        slug: 'columbia-sc',
        distance: '15 miles',
        highlights: ['Downtown Columbia', 'University Area', 'Five Points'],
        specialties: ['Urban Mobile Detailing', 'Student Discounts', 'Fleet Services']
      },
      {
        name: 'Irmo SC',
        slug: 'irmo-sc',
        distance: '12 miles',
        highlights: ['Lake Murray Dam', 'Crooked Creek Park', 'Harbison'],
        specialties: ['Lake House Detailing', 'Boat Detailing', 'Luxury Vehicles']
      },
      {
        name: 'West Columbia SC',
        slug: 'west-columbia-sc',
        distance: '18 miles',
        highlights: ['Riverbanks Zoo Area', 'Meeting Street', 'State Street'],
        specialties: ['Family Vehicle Detailing', 'SUV Specialist', 'Quick Service']
      },
      {
        name: 'Cayce SC',
        slug: 'cayce-sc',
        distance: '20 miles',
        highlights: ['Cayce Riverwalk', 'Historic Cayce', 'Airport Boulevard'],
        specialties: ['Historic Car Care', 'Airport Pickup Service', 'Classic Vehicles']
      }
    ],
    'columbia-sc': [
      {
        name: 'Lexington SC',
        slug: 'lexington-sc',
        distance: '15 miles',
        highlights: ['Lake Murray', 'Sunset Boulevard', 'Medical Center Area'],
        specialties: ['Lake Community Detailing', 'Watercraft Detailing', 'Medical Professional Discounts']
      },
      {
        name: 'Irmo SC',
        slug: 'irmo-sc',
        distance: '10 miles',
        highlights: ['Harbison District', 'Lake Murray', 'Ballentine'],
        specialties: ['Shopping Center Service', 'Lake Resident Care', 'Premium Detailing']
      },
      {
        name: 'West Columbia SC',
        slug: 'west-columbia-sc',
        distance: '8 miles',
        highlights: ['Meeting Street Corridor', 'Riverbanks Area', 'Airport Road'],
        specialties: ['Quick Downtown Service', 'Zoo Visitor Care', 'Business Accounts']
      },
      {
        name: 'Cayce SC',
        slug: 'cayce-sc',
        distance: '12 miles',
        highlights: ['Riverwalk District', 'Knox Abbott Drive', 'Historic District'],
        specialties: ['Riverwalk Residents', 'Quick Airport Access', 'Community Events']
      }
    ],
    'irmo-sc': [
      {
        name: 'Lexington SC',
        slug: 'lexington-sc',
        distance: '12 miles',
        highlights: ['Lake Murray Shores', 'Gilbert', 'Red Bank'],
        specialties: ['Cross-Lake Service', 'Marina Detailing', 'Lake Property Care']
      },
      {
        name: 'Columbia SC',
        slug: 'columbia-sc',
        distance: '10 miles',
        highlights: ['USC Campus', 'Forest Drive', 'Trenholm Plaza'],
        specialties: ['Student Services', 'University Area', 'Shopping District Care']
      },
      {
        name: 'West Columbia SC',
        slug: 'west-columbia-sc',
        distance: '15 miles',
        highlights: ['State Street', 'Sunset Boulevard', 'Meeting Street'],
        specialties: ['Cross-River Service', 'State Employee Care', 'Government District']
      },
      {
        name: 'Chapin SC',
        slug: 'chapin-sc',
        distance: '8 miles',
        highlights: ['Lake Murray West Side', 'Chapin High School', 'Timberlake'],
        specialties: ['West Lake Service', 'School District Care', 'Premium Lake Homes']
      }
    ],
    'west-columbia-sc': [
      {
        name: 'Columbia SC',
        slug: 'columbia-sc',
        distance: '8 miles',
        highlights: ['Downtown Bridge Connection', 'USC Area', 'Assembly Street'],
        specialties: ['Bridge Commuter Care', 'University District', 'Downtown Professionals']
      },
      {
        name: 'Cayce SC',
        slug: 'cayce-sc',
        distance: '5 miles',
        highlights: ['Knox Abbott Connection', 'Airport Boulevard', 'Riverwalk'],
        specialties: ['Airport Corridor', 'River District', 'Historic Preservation']
      },
      {
        name: 'Lexington SC',
        slug: 'lexington-sc',
        distance: '18 miles',
        highlights: ['Sunset Boulevard Extension', 'Red Bank', 'Gilbert'],
        specialties: ['Sunset Corridor', 'Medical District', 'Lake Access']
      },
      {
        name: 'Irmo SC',
        slug: 'irmo-sc',
        distance: '15 miles',
        highlights: ['Lake Murray Access', 'Harbison', 'St. Andrews'],
        specialties: ['Lake Corridor', 'Shopping Districts', 'Premium Services']
      }
    ],
    'cayce-sc': [
      {
        name: 'West Columbia SC',
        slug: 'west-columbia-sc',
        distance: '5 miles',
        highlights: ['Meeting Street Corridor', 'Airport Road', 'State Street'],
        specialties: ['Airport Service Route', 'Government District', 'Business Centers']
      },
      {
        name: 'Columbia SC',
        slug: 'columbia-sc',
        distance: '12 miles',
        highlights: ['Congaree River Crossing', 'USC Campus', 'Five Points'],
        specialties: ['River Crossing Service', 'Entertainment District', 'Student Areas']
      },
      {
        name: 'Lexington SC',
        slug: 'lexington-sc',
        distance: '20 miles',
        highlights: ['Airport to Lake Murray', 'Medical Centers', 'Sunset Boulevard'],
        specialties: ['Airport-Lake Route', 'Healthcare Districts', 'Extended Service']
      },
      {
        name: 'Swansea SC',
        slug: 'swansea-sc',
        distance: '15 miles',
        highlights: ['Rural Route 5', 'Historic Swansea', 'Country Properties'],
        specialties: ['Rural Properties', 'Historic Vehicle Care', 'Farm Equipment']
      }
    ],
    'chapin-sc': [
      {
        name: 'Irmo SC',
        slug: 'irmo-sc',
        distance: '8 miles',
        highlights: ['Lake Murray East', 'Harbison Shopping', 'Ballentine'],
        specialties: ['East Lake Connection', 'Shopping Centers', 'Suburban Service']
      },
      {
        name: 'Lexington SC',
        slug: 'lexington-sc',
        distance: '20 miles',
        highlights: ['Full Lake Circuit', 'Lake Murray Dam', 'Medical District'],
        specialties: ['Complete Lake Service', 'Dam Area', 'Medical Professionals']
      },
      {
        name: 'Columbia SC',
        slug: 'columbia-sc',
        distance: '25 miles',
        highlights: ['Lake to City Route', 'USC Campus', 'Downtown Columbia'],
        specialties: ['Lake-City Connection', 'University Service', 'Urban Detailing']
      },
      {
        name: 'Newberry SC',
        slug: 'newberry-sc',
        distance: '18 miles',
        highlights: ['Rural Lake Properties', 'College Town', 'Historic District'],
        specialties: ['Rural Lake Homes', 'College Service', 'Historic Vehicles']
      }
    ]
  };

  // Service area connections
  const serviceAreaConnections = {
    'lexington-sc': [
      'Lake Murray Shores Auto Detailing',
      'Sunset Boulevard Mobile Service',
      'Lexington Medical Center Area',
      'Gilbert & Red Bank Service',
      'Spence Island Detailing'
    ],
    'columbia-sc': [
      'USC Campus Mobile Detailing',
      'Five Points Auto Care',
      'Forest Drive Service Area',
      'Downtown Columbia Detailing',
      'Trenholm Plaza Mobile Service'
    ],
    'irmo-sc': [
      'Harbison District Detailing',
      'Lake Murray Dam Area',
      'Ballentine Mobile Service',
      'St. Andrews Road Service',
      'Crooked Creek Area'
    ],
    'west-columbia-sc': [
      'Meeting Street Corridor',
      'Riverbanks Zoo Area',
      'State Street District',
      'Airport Boulevard Service',
      'Sunset Boulevard West'
    ],
    'cayce-sc': [
      'Cayce Riverwalk District',
      'Knox Abbott Drive Service',
      'Historic Cayce Area',
      'Airport Boulevard Corridor',
      'Congaree River District'
    ],
    'chapin-sc': [
      'Lake Murray West Side',
      'Chapin High School Area',
      'Timberlake Community',
      'Little Mountain Service',
      'Prosperity Area'
    ]
  };

  const nearbyLocations = locationMatrix[currentSlug] || [];
  const serviceAreas = serviceAreaConnections[currentSlug] || [];

  if (compact) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary-600" />
          Also Serving Nearby Areas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {nearbyLocations.slice(0, 4).map((location) => (
            <Link
              key={location.slug}
              to={`/locations/${location.slug}`}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium hover:underline transition"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Nearby Locations Matrix */}
      {nearbyLocations.length > 0 && (
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-primary-600" />
            Mobile Detailing in Nearby Areas
          </h3>
          <p className="text-gray-600 mb-6">
            We also provide professional mobile auto detailing service to these nearby locations with the same quality and convenience.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {nearbyLocations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group block border border-gray-200 rounded-lg p-5 hover:border-primary-300 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold group-hover:text-primary-600 transition">
                      Auto Detailing {location.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      {location.distance} from {currentLocation}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition" />
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Service Areas:</p>
                    <p className="text-sm text-gray-600">{location.highlights.join(', ')}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {location.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Service Area Links */}
      {showServiceAreas && serviceAreas.length > 0 && (
        <section className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-primary-600" />
            {currentLocation} Service Area Coverage
          </h3>
          <p className="text-gray-600 mb-4">
            Professional mobile auto detailing service throughout these specific areas in {currentLocation}:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <Star className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-primary-800">
              <strong>100% Mobile:</strong> We bring our professional equipment directly to your location in any of these areas.
              No need to travel - we come to you!
            </p>
          </div>
        </section>
      )}

      {/* Cross-Service Recommendations */}
      {showNearbyServices && (
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 text-primary-600" />
            Related Auto Detailing Services
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/services/ceramic-coating"
              className="group block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold group-hover:text-primary-600 transition">Ceramic Coating</h4>
                  <p className="text-sm text-gray-600">Professional paint protection</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/services/paint-correction"
              className="group block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold group-hover:text-primary-600 transition">Paint Correction</h4>
                  <p className="text-sm text-gray-600">Remove swirls & scratches</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/services/interior-detailing"
              className="group block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold group-hover:text-primary-600 transition">Interior Detailing</h4>
                  <p className="text-sm text-gray-600">Deep cleaning & protection</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default InternalLinkingMatrix;