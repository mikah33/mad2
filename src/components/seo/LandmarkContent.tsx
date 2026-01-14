import React from 'react';
import { MapPin, Star, Clock, ShoppingBag, Building, GraduationCap, Trees, Waves } from 'lucide-react';

interface Landmark {
  name: string;
  type: 'business' | 'landmark' | 'school' | 'recreation' | 'hospital' | 'shopping';
  description: string;
  serviceNote: string;
  icon: React.ReactNode;
  prominence: 'high' | 'medium' | 'low';
}

interface LandmarkContentProps {
  location: string;
  locationSlug: string;
  compact?: boolean;
}

export const LandmarkContent: React.FC<LandmarkContentProps> = ({
  location,
  locationSlug,
  compact = false
}) => {
  // Landmark data by location
  const landmarkData: Record<string, Landmark[]> = {
    'lexington-sc': [
      {
        name: 'Lake Murray',
        type: 'recreation',
        description: 'South Carolina\'s premier recreational lake with 500+ miles of shoreline',
        serviceNote: 'Perfect for lake house vehicle detailing and boat care services',
        icon: <Waves className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Lexington Medical Center',
        type: 'hospital',
        description: 'Leading healthcare facility serving the Midlands region',
        serviceNote: 'Convenient mobile detailing for medical professionals with busy schedules',
        icon: <Building className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Sunset Boulevard Corridor',
        type: 'business',
        description: 'Major commercial and residential corridor connecting Lexington to West Columbia',
        serviceNote: 'Prime location for mobile detailing services along this busy corridor',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Spence Island',
        type: 'recreation',
        description: 'Exclusive Lake Murray community with luxury waterfront properties',
        serviceNote: 'Specialized detailing for luxury vehicles and waterfront properties',
        icon: <Star className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'River Club',
        type: 'recreation',
        description: 'Prestigious Lake Murray golf and country club community',
        serviceNote: 'Premium detailing services for club members and luxury vehicles',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Gilbert Elementary & Middle School',
        type: 'school',
        description: 'Part of the highly-rated Lexington District One school system',
        serviceNote: 'Convenient pickup and drop-off time mobile detailing for busy parents',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'columbia-sc': [
      {
        name: 'University of South Carolina',
        type: 'school',
        description: 'Major state university with 35,000+ students and faculty',
        serviceNote: 'Student-friendly packages and faculty/staff mobile detailing services',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Five Points District',
        type: 'business',
        description: 'Historic entertainment and shopping district near USC campus',
        serviceNote: 'Evening and weekend mobile detailing for nightlife district residents',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'State Capitol Building',
        type: 'landmark',
        description: 'Historic South Carolina State House and government district',
        serviceNote: 'Professional mobile detailing for government employees and downtown workers',
        icon: <Building className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Forest Drive Corridor',
        type: 'business',
        description: 'Major commercial corridor with shopping centers and restaurants',
        serviceNote: 'Convenient mobile detailing while you shop or dine along Forest Drive',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Trenholm Plaza',
        type: 'shopping',
        description: 'Upscale shopping center in the heart of Columbia',
        serviceNote: 'Premium mobile detailing services for upscale shopping district',
        icon: <Star className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Congaree Vista',
        type: 'business',
        description: 'Revitalized warehouse district with restaurants, galleries, and lofts',
        serviceNote: 'Mobile detailing for urban professionals and Vista residents',
        icon: <Building className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'irmo-sc': [
      {
        name: 'Lake Murray Dam',
        type: 'landmark',
        description: 'Historic earthen dam creating Lake Murray, built in the 1920s',
        serviceNote: 'Mobile detailing for dam area residents and lake visitors',
        icon: <Waves className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Harbison District',
        type: 'shopping',
        description: 'Major shopping and dining destination with Columbiana Centre Mall',
        serviceNote: 'Mobile detailing while you shop at Harbison\'s premier retail destinations',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Crooked Creek Park',
        type: 'recreation',
        description: 'Popular Lake Murray park with boat ramps and recreational facilities',
        serviceNote: 'Perfect for boat and RV detailing services at this popular lake access point',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Ballentine Elementary',
        type: 'school',
        description: 'Well-regarded elementary school in the Irmo-Chapin area',
        serviceNote: 'Convenient mobile detailing for busy parents during school hours',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'St. Andrews Road Corridor',
        type: 'business',
        description: 'Major commercial corridor connecting Irmo to Columbia',
        serviceNote: 'Mobile detailing services along this busy commercial route',
        icon: <Building className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'west-columbia-sc': [
      {
        name: 'Riverbanks Zoo & Garden',
        type: 'landmark',
        description: 'Award-winning zoo and botanical garden attracting 900,000+ visitors annually',
        serviceNote: 'Mobile detailing for zoo staff, volunteers, and frequent visitors',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Meeting Street Corridor',
        type: 'business',
        description: 'Historic commercial corridor connecting West Columbia to downtown Columbia',
        serviceNote: 'Mobile detailing for businesses and residents along historic Meeting Street',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'State Street District',
        type: 'business',
        description: 'Growing commercial and residential area with new developments',
        serviceNote: 'Mobile detailing for new residents and State Street area businesses',
        icon: <Building className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Airport Boulevard Corridor',
        type: 'business',
        description: 'Major transportation corridor near Columbia Metropolitan Airport',
        serviceNote: 'Convenient mobile detailing for frequent travelers and airport area businesses',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Congaree River Access',
        type: 'recreation',
        description: 'River access points and recreational areas along the Congaree River',
        serviceNote: 'Mobile detailing for outdoor enthusiasts and riverfront property owners',
        icon: <Waves className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'cayce-sc': [
      {
        name: 'Cayce Riverwalk',
        type: 'recreation',
        description: 'Scenic walking trail and park system along the Congaree River',
        serviceNote: 'Mobile detailing for riverwalk residents and outdoor recreation enthusiasts',
        icon: <Waves className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Historic Cayce District',
        type: 'landmark',
        description: 'Charming historic downtown area with antique shops and local businesses',
        serviceNote: 'Specialized care for classic and vintage vehicles in historic district',
        icon: <Building className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Knox Abbott Drive',
        type: 'business',
        description: 'Main commercial corridor with shopping centers and restaurants',
        serviceNote: 'Mobile detailing services for Knox Abbott area businesses and shoppers',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Columbia Metropolitan Airport Area',
        type: 'business',
        description: 'Close proximity to Columbia\'s main airport and related businesses',
        serviceNote: 'Convenient mobile detailing for frequent travelers and airport employees',
        icon: <Building className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Congaree Creek Heritage Preserve',
        type: 'recreation',
        description: 'Natural preserve area offering hiking trails and wildlife viewing',
        serviceNote: 'Mobile detailing for outdoor enthusiasts exploring local nature preserves',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'chapin-sc': [
      {
        name: 'Lake Murray West Side',
        type: 'recreation',
        description: 'Premium Lake Murray communities and luxury waterfront properties',
        serviceNote: 'Specialized lake house vehicle detailing and luxury car care services',
        icon: <Waves className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Chapin High School',
        type: 'school',
        description: 'Highly-rated high school serving the Chapin community',
        serviceNote: 'Convenient mobile detailing for busy parents and school staff',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Timberlake Community',
        type: 'recreation',
        description: 'Exclusive gated Lake Murray community with luxury homes',
        serviceNote: 'Premium mobile detailing for luxury vehicles and lake house properties',
        icon: <Star className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Little Mountain',
        type: 'business',
        description: 'Historic small town near Chapin with local businesses',
        serviceNote: 'Mobile detailing services for Little Mountain residents and businesses',
        icon: <Building className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Prosperity',
        type: 'business',
        description: 'Small town community with local businesses and rural properties',
        serviceNote: 'Rural mobile detailing services for country properties and farm vehicles',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'medium'
      }
    ],
    'swansea-sc': [
      {
        name: 'Historic Swansea District',
        type: 'landmark',
        description: 'Historic small town with preserved railroad heritage and antique charm',
        serviceNote: 'Specialized care for classic and vintage vehicles in historic district',
        icon: <Building className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Swansea High School',
        type: 'school',
        description: 'Community high school serving rural Swansea area',
        serviceNote: 'Mobile detailing for school staff and busy parents in rural area',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Railroad Heritage Area',
        type: 'landmark',
        description: 'Historic railroad district showcasing Swansea\'s transportation heritage',
        serviceNote: 'Classic car care and vintage vehicle restoration detailing services',
        icon: <Star className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Rural Route 5',
        type: 'business',
        description: 'Main rural corridor with country properties and local businesses',
        serviceNote: 'Mobile detailing services for rural properties and farm vehicles',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Country Properties',
        type: 'recreation',
        description: 'Rural residential areas with large properties and farm land',
        serviceNote: 'Specialized rural mobile detailing for country homes and farm equipment',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'low'
      }
    ],
    'newberry-sc': [
      {
        name: 'Newberry College',
        type: 'school',
        description: 'Private liberal arts college with historic campus and student population',
        serviceNote: 'Student vehicle care packages and faculty/staff mobile detailing services',
        icon: <GraduationCap className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Historic Downtown Newberry',
        type: 'landmark',
        description: 'Charming historic downtown with preserved architecture and local businesses',
        serviceNote: 'Classic vehicle care and downtown business mobile detailing services',
        icon: <Building className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Newberry Opera House',
        type: 'landmark',
        description: 'Historic performing arts venue and cultural centerpiece of downtown',
        serviceNote: 'Premium vehicle care for cultural events and theater patrons',
        icon: <Star className="w-5 h-5" />,
        prominence: 'high'
      },
      {
        name: 'Memorial Park',
        type: 'recreation',
        description: 'Community park with recreational facilities and event spaces',
        serviceNote: 'Mobile detailing for park visitors and community event attendees',
        icon: <Trees className="w-5 h-5" />,
        prominence: 'medium'
      },
      {
        name: 'Main Street District',
        type: 'business',
        description: 'Historic Main Street with local shops, restaurants, and businesses',
        serviceNote: 'Business mobile detailing and Main Street merchant vehicle care',
        icon: <ShoppingBag className="w-5 h-5" />,
        prominence: 'medium'
      }
    ]
  };

  const landmarks = landmarkData[locationSlug] || [];
  const highPromLandmarks = landmarks.filter(l => l.prominence === 'high');
  const displayLandmarks = compact ? highPromLandmarks.slice(0, 3) : landmarks;

  const getIconColor = (type: string) => {
    const colors = {
      business: 'text-blue-600',
      landmark: 'text-green-600',
      school: 'text-purple-600',
      recreation: 'text-teal-600',
      hospital: 'text-red-600',
      shopping: 'text-orange-600'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600';
  };

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-800">
          <MapPin className="w-5 h-5 mr-2" />
          Serving {location} Landmarks & Communities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {displayLandmarks.map((landmark, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className={`${getIconColor(landmark.type)} flex-shrink-0 mt-0.5`}>
                {landmark.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{landmark.name}</p>
                <p className="text-xs text-gray-600">{landmark.serviceNote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
          <MapPin className="w-6 h-6 mr-3 text-primary-600" />
          {location} Local Landmarks & Communities
        </h3>
        <p className="text-gray-600">
          We proudly serve the landmarks, businesses, and communities that make {location} special
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayLandmarks.map((landmark, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-start mb-3">
              <div className={`${getIconColor(landmark.type)} mr-3 flex-shrink-0 mt-1`}>
                {landmark.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{landmark.name}</h4>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                  {landmark.type}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">{landmark.description}</p>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
              <div className="flex items-start">
                <Star className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary-800">{landmark.serviceNote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Connection */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-orange-50 border border-primary-200 rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-xl font-semibold text-primary-800 mb-3">
            Proud to Serve {location}
          </h4>
          <p className="text-primary-700 mb-4">
            As a local mobile detailing service, we understand {location} and its unique communities.
            Whether you're visiting Lake Murray, working downtown, or living in one of our beautiful neighborhoods,
            we bring professional auto detailing directly to you.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              5.0★ Local Reviews
            </span>
            <span className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              Mobile Service
            </span>
            <span className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              Community Focused
            </span>
          </div>
        </div>
      </div>

      {/* Local SEO Enhancement */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          <strong>Mobile Auto Detailing</strong> serving all {location} landmarks, businesses, schools, and residential communities.
          Professional service brought directly to your location throughout the {location} area.
        </p>
      </div>
    </div>
  );
};

export default LandmarkContent;