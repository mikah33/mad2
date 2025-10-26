export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocalLandmark {
  name: string;
  type: string;
  description: string;
}

export interface ServiceArea {
  city: string;
  radius: number; // in miles
  zipCodes: string[];
}

export interface LocalTestimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationData {
  city: string;
  state: string;
  slug: string;
  coordinates: GeoCoordinates;
  county: string;
  population: number;
  description: string;
  landmarks: LocalLandmark[];
  neighborhoods: string[];
  serviceArea: ServiceArea;
  uniqueContent: {
    intro: string;
    whyChooseUs: string;
    localExpertise: string;
    communityInvolvement: string;
  };
  testimonials: LocalTestimonial[];
  faqs: LocationFAQ[];
  metaTitle: string;
  metaDescription: string;
  nearbyLocations: string[];
}

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

export interface PricingTier {
  name: string;
  services: Service[];
}
