/**
 * Neighborhood Landing Page Data Types and Sample Data
 * For Mikah's Mobile Detailing - Columbia SC Metro Area
 */

// Core Interfaces
export interface Landmark {
  name: string;
  type: 'park' | 'school' | 'shopping' | 'restaurant' | 'community' | 'recreation' | 'business';
  description: string;
  detailingNote: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogDescription: string;
  // LLMO (Large Language Model Optimization) fields
  llmoSummary?: string; // AI-friendly summary for voice search and AI assistants
  entityKeywords?: string[]; // Named entities for knowledge graphs
  semanticKeywords?: string[]; // LSI and related terms
  questionsAnswered?: string[]; // Questions this page answers (for AI)
  structuredFacts?: string[]; // Key facts in structured format
}

export interface Neighborhood {
  // Core identifiers
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  state: string;
  zipCodes: string[];

  // Geographic/demographic info
  coordinates?: {
    lat: number;
    lng: number;
  };
  population?: number;
  homeValueRange: string;
  avgHomeValue?: number;
  characteristics: string[];
  vehicleTypes: string[]; // Common vehicle types in the area

  // Content
  description: string;
  shortDescription: string;
  landmarks: Landmark[];
  adjacentNeighborhoods: string[]; // slugs

  // Services emphasis
  popularServices: string[];
  serviceNotes: string;

  // SEO
  seo: SEOMeta;
  faqs: FAQ[];

  // Display
  featured?: boolean;
  heroImage?: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  description: string;
  shortDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population?: number;
  neighborhoods: string[]; // neighborhood slugs
  seo: SEOMeta;
  faqs: FAQ[];
}

// Irmo SC Neighborhoods Data
export const irmoNeighborhoods: Neighborhood[] = [
  {
    slug: 'harbison-irmo-sc',
    name: 'Harbison',
    city: 'Irmo',
    citySlug: 'irmo-sc',
    state: 'SC',
    zipCodes: ['29212', '29063'],
    coordinates: { lat: 34.0772, lng: -81.1892 },
    population: 25000,
    homeValueRange: '$250,000 - $450,000',
    avgHomeValue: 325000,
    characteristics: [
      'Major shopping destination',
      'Mixed residential and commercial',
      'Family-friendly neighborhoods',
      'Easy access to I-26 and I-20',
      'Diverse community'
    ],
    vehicleTypes: ['SUVs', 'Minivans', 'Luxury sedans', 'Crossovers', 'Trucks'],
    description: `Harbison is one of the most vibrant and accessible neighborhoods in the Irmo area, known for Columbiana Centre Mall and extensive shopping, dining, and entertainment options. This master-planned community offers a perfect blend of suburban living with urban convenience. Residents enjoy tree-lined streets, well-maintained common areas, and proximity to major employers in the Columbia metropolitan area. The neighborhood attracts families, young professionals, and retirees who appreciate the area's amenities and central location.`,
    shortDescription: 'Premier shopping destination with family-friendly neighborhoods and easy highway access.',
    landmarks: [
      {
        name: 'Columbiana Centre',
        type: 'shopping',
        description: 'Largest shopping mall in the Columbia area with 100+ stores and restaurants',
        detailingNote: 'Perfect for mobile detailing while you shop - we come to the parking lot'
      },
      {
        name: 'Harbison State Forest',
        type: 'recreation',
        description: '2,177-acre urban forest with hiking trails, mountain biking, and nature programs',
        detailingNote: 'Clean your vehicle after outdoor adventures - we specialize in removing trail dust and mud'
      },
      {
        name: 'Harbison Theatre at Midlands Technical College',
        type: 'community',
        description: 'Premier performing arts venue hosting concerts, plays, and community events',
        detailingNote: 'Get your vehicle detailed before special events and date nights'
      },
      {
        name: 'Costco Harbison',
        type: 'shopping',
        description: 'Popular warehouse club serving the greater Columbia area',
        detailingNote: 'Schedule detailing during your shopping trip - we work while you save'
      },
      {
        name: 'Harbison Rec Center',
        type: 'recreation',
        description: 'Community recreation center with pools, fitness facilities, and youth programs',
        detailingNote: 'Mobile detailing for busy parents dropping off kids at activities'
      }
    ],
    adjacentNeighborhoods: ['seven-oaks-irmo-sc', 'st-andrews-columbia-sc', 'ballentine-irmo-sc'],
    popularServices: ['Full Detail Package', 'Interior Deep Clean', 'Ceramic Coating'],
    serviceNotes: 'High demand for minivan and SUV interior cleaning from families. Many luxury vehicles in newer subdivisions.',
    seo: {
      title: 'Mobile Auto Detailing Harbison Irmo SC | Same-Day Service',
      description: 'Professional mobile car detailing in Harbison, Irmo SC. Interior cleaning, ceramic coating, paint correction. We come to Columbiana Centre, your home, or office. Free quotes!',
      keywords: [
        'car detailing harbison sc',
        'mobile detailing columbiana centre',
        'auto detailing irmo harbison',
        'car wash near columbiana mall',
        'interior detailing harbison',
        'ceramic coating harbison sc',
        'harbison mobile car wash',
        'detailing near harbison state forest',
        'auto detail 29212'
      ],
      ogDescription: 'Mobile auto detailing in Harbison, Irmo SC. 5-star rated. We come to you at home, work, or while you shop!',
      // LLMO Optimization
      llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services in the Harbison area of Irmo, South Carolina. Services include interior detailing starting at $225, ceramic coating, and paint correction. The mobile service travels to customer locations including Columbiana Centre mall, residential homes, and office buildings. The business is IDA certified with a 5.0 star rating.",
      entityKeywords: [
        'Mikah\'s Auto Detailing',
        'Harbison',
        'Irmo SC',
        'Columbiana Centre',
        'Harbison State Forest',
        'Lake Murray Boulevard',
        'I-26',
        'I-20'
      ],
      semanticKeywords: [
        'car wash',
        'vehicle cleaning',
        'auto spa',
        'car care',
        'paint protection',
        'interior cleaning',
        'exterior wash',
        'professional detailer',
        'mobile service',
        'at-home detailing'
      ],
      questionsAnswered: [
        'Where can I get my car detailed in Harbison?',
        'How much does car detailing cost near Columbiana Centre?',
        'Is there mobile car detailing in Irmo SC?',
        'What is the best car detailing service near Harbison?',
        'Can I get ceramic coating in the Irmo area?'
      ],
      structuredFacts: [
        'Service area: Harbison, Irmo SC and surrounding neighborhoods',
        'Pricing: Basic Detail $225, Factory Reset $400',
        'Rating: 5.0 stars',
        'Certification: IDA Certified',
        'Service type: Mobile (comes to your location)',
        'Popular services: Interior cleaning, ceramic coating, paint correction'
      ]
    },
    faqs: [
      {
        question: 'Do you offer mobile detailing at Columbiana Centre?',
        answer: 'Yes! We can detail your vehicle in the Columbiana Centre parking lot while you shop. Just let us know your approximate shopping time, and we\'ll have your car looking amazing when you return. Our mobile unit is fully self-contained with water and power.'
      },
      {
        question: 'How much does car detailing cost in Harbison?',
        answer: 'Our Harbison mobile detailing packages start at $225 for Basic Detail and $400 for Factory Reset. Ceramic coatings and paint corrections are quoted based on vehicle size and condition. All prices include mobile service to your Harbison location.'
      },
      {
        question: 'What areas of Harbison do you service?',
        answer: 'We serve all of Harbison including Columbiana Centre area, Harbison Boulevard, Lake Murray Boulevard intersections, Harbison State Forest vicinity, and all residential subdivisions. We also service nearby Seven Oaks and St. Andrews.'
      },
      {
        question: 'Can you remove pet hair from my car in Harbison?',
        answer: 'Absolutely! Pet hair removal is included in our Interior and Factory Reset packages. Many Harbison families have pets, and our extraction equipment effectively removes embedded pet hair from seats, carpets, and hard-to-reach areas.'
      }
    ],
    featured: true
  },
  {
    slug: 'seven-oaks-irmo-sc',
    name: 'Seven Oaks',
    city: 'Irmo',
    citySlug: 'irmo-sc',
    state: 'SC',
    zipCodes: ['29210', '29063'],
    coordinates: { lat: 34.0556, lng: -81.1756 },
    population: 18000,
    homeValueRange: '$180,000 - $350,000',
    avgHomeValue: 245000,
    characteristics: [
      'Established residential community',
      'Tree-lined streets',
      'Active neighborhood association',
      'Near Dutch Fork schools',
      'Mix of starter homes and larger properties'
    ],
    vehicleTypes: ['Sedans', 'SUVs', 'Compact cars', 'Pickup trucks', 'Older vehicles'],
    description: `Seven Oaks is a well-established residential community in Irmo known for its mature trees, friendly neighbors, and convenient location. The neighborhood features a mix of housing styles from the 1970s through 1990s, offering affordable options for families and first-time homebuyers. Residents appreciate the strong sense of community, proximity to Dutch Fork schools, and easy access to shopping and dining along St. Andrews Road.`,
    shortDescription: 'Established family neighborhood with mature trees and strong community ties.',
    landmarks: [
      {
        name: 'Seven Oaks Park',
        type: 'park',
        description: 'Community park with playgrounds, walking trails, and picnic areas',
        detailingNote: 'Family-friendly neighborhood means lots of kids and car seats to clean!'
      },
      {
        name: 'Dutch Fork High School',
        type: 'school',
        description: 'Highly-rated public high school serving the Dutch Fork area',
        detailingNote: 'Teen drivers and busy parents benefit from convenient mobile detailing'
      },
      {
        name: 'Piggly Wiggly Seven Oaks',
        type: 'shopping',
        description: 'Local grocery store serving the Seven Oaks community',
        detailingNote: 'Schedule detailing during your grocery run - we work while you shop'
      },
      {
        name: 'St. Andrews Road Corridor',
        type: 'business',
        description: 'Major commercial corridor with restaurants, retail, and services',
        detailingNote: 'Convenient for workers along the St. Andrews corridor'
      }
    ],
    adjacentNeighborhoods: ['harbison-irmo-sc', 'st-andrews-columbia-sc', 'broad-river-estates-irmo-sc'],
    popularServices: ['Basic Detail', 'Interior Cleaning', 'Exterior Wash & Wax'],
    serviceNotes: 'Mix of vehicle ages means both maintenance detailing and restoration work. Popular with families who need regular interior cleaning.',
    seo: {
      title: 'Car Detailing Seven Oaks Irmo SC | Mobile Service Available',
      description: 'Mobile auto detailing Seven Oaks, Irmo SC. Professional interior & exterior cleaning at your home. Dutch Fork area service. 5-star rated. Book today!',
      keywords: [
        'car detailing seven oaks',
        'auto detailing near dutch fork',
        'mobile car wash seven oaks',
        'interior cleaning irmo sc',
        'car detailing st andrews road',
        'seven oaks auto detailing',
        'dutch fork high school area detailing',
        'seven oaks park car wash',
        'auto detail 29210'
      ],
      ogDescription: 'Professional car detailing in Seven Oaks, Irmo SC. Mobile service to your home. 5-star rated!',
      llmoSummary: "Mikah's Mobile Auto Detailing serves the Seven Oaks neighborhood in Irmo, South Carolina. This established residential community near Dutch Fork High School features mature trees and family homes. Mobile detailing services include basic detail packages at $225 and full factory reset at $400. The service comes directly to customers' homes in Seven Oaks and surrounding St. Andrews Road area.",
      entityKeywords: ['Seven Oaks', 'Dutch Fork High School', 'St. Andrews Road', 'Irmo SC', 'Piggly Wiggly'],
      semanticKeywords: ['family car cleaning', 'driveway detailing', 'home car wash', 'neighborhood detailing', 'school area service'],
      questionsAnswered: [
        'Do you detail cars in Seven Oaks Irmo?',
        'What is the best car detailing near Dutch Fork?',
        'How much is interior cleaning in Seven Oaks?',
        'Can you come to my house in Seven Oaks for car detailing?'
      ],
      structuredFacts: [
        'Service area: Seven Oaks, Dutch Fork, St. Andrews Road corridor',
        'Nearby landmark: Dutch Fork High School',
        'Community type: Established residential, family-oriented',
        'Popular services: Basic Detail, Interior Cleaning'
      ]
    },
    faqs: [
      {
        question: 'Do you service the Seven Oaks neighborhood?',
        answer: 'Yes! Seven Oaks is one of our most-served neighborhoods in the Irmo area. We provide mobile detailing to all streets and subdivisions in Seven Oaks, including the areas near Dutch Fork schools and St. Andrews Road.'
      },
      {
        question: 'What\'s the best detailing package for older vehicles?',
        answer: 'For older vehicles common in Seven Oaks, we recommend our Factory Reset Package ($400) which includes deep interior cleaning, light stain removal, and exterior restoration with protective wax. For vehicles needing paint correction, we provide custom quotes.'
      },
      {
        question: 'Can you detail my car at my Seven Oaks home?',
        answer: 'Absolutely! Our mobile detailing service comes directly to your Seven Oaks home. We bring all equipment including water and power. Just need a driveway or parking space, and we\'ll transform your vehicle while you relax at home.'
      }
    ],
    featured: false
  },
  {
    slug: 'ballentine-irmo-sc',
    name: 'Ballentine',
    city: 'Irmo',
    citySlug: 'irmo-sc',
    state: 'SC',
    zipCodes: ['29063'],
    coordinates: { lat: 34.0994, lng: -81.2289 },
    population: 8500,
    homeValueRange: '$300,000 - $600,000',
    avgHomeValue: 425000,
    characteristics: [
      'Lake Murray proximity',
      'Newer construction homes',
      'Golf course communities',
      'Upscale subdivisions',
      'Rural-suburban feel'
    ],
    vehicleTypes: ['Luxury SUVs', 'Trucks', 'Boats/trailers', 'Sports cars', 'Golf carts'],
    description: `Ballentine is an upscale community situated between Irmo and Chapin, offering the perfect blend of Lake Murray access and suburban convenience. Known for its newer construction homes, golf course communities, and spacious properties, Ballentine attracts families and professionals seeking a higher-end lifestyle. The area features excellent schools, beautiful natural surroundings, and quick access to both Irmo shopping and Lake Murray recreation.`,
    shortDescription: 'Upscale Lake Murray community with golf courses and luxury homes.',
    landmarks: [
      {
        name: 'Timberlake Country Club',
        type: 'recreation',
        description: 'Premier golf and country club with championship course and dining',
        detailingNote: 'Luxury vehicle care for club members - we detail at the club or your home'
      },
      {
        name: 'Ballentine Elementary School',
        type: 'school',
        description: 'Highly-rated elementary school in the Lexington/Richland 5 district',
        detailingNote: 'Convenient detailing for busy parents during school hours'
      },
      {
        name: 'Lake Murray Marina',
        type: 'recreation',
        description: 'Boat access and marina services for Lake Murray',
        detailingNote: 'We also offer boat detailing and post-lake vehicle cleaning'
      },
      {
        name: 'Ballentine Farms',
        type: 'community',
        description: 'Local farm with seasonal activities and community events',
        detailingNote: 'Clean up after farm visits and fall festivals'
      },
      {
        name: 'River Club',
        type: 'recreation',
        description: 'Golf community with Lake Murray views and luxury amenities',
        detailingNote: 'Premium detailing services for River Club residents'
      }
    ],
    adjacentNeighborhoods: ['harbison-irmo-sc', 'chapin-sc', 'lake-murray-shores-irmo-sc'],
    popularServices: ['Ceramic Coating', 'Paint Correction', 'Luxury Interior Detail'],
    serviceNotes: 'Higher concentration of luxury vehicles. Boat and trailer detailing requests common. Many multi-vehicle households.',
    seo: {
      title: 'Luxury Auto Detailing Ballentine SC | Ceramic Coating Specialists',
      description: 'Premium mobile auto detailing in Ballentine, Irmo SC. Ceramic coating, paint correction, luxury interior care. Lake Murray area. We come to you!',
      keywords: [
        'luxury car detailing ballentine',
        'ceramic coating near lake murray',
        'ballentine auto detailing',
        'paint correction irmo sc',
        'boat detailing ballentine',
        'timberlake country club detailing',
        'river club auto detailing',
        'ballentine luxury car wash',
        'golf community car care',
        'auto detail 29063'
      ],
      ogDescription: 'Premium auto detailing in Ballentine, SC. Ceramic coating and luxury vehicle specialists. 5-star mobile service!',
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car detailing services in Ballentine, an upscale Lake Murray community in Irmo, South Carolina. Specializing in luxury vehicles, the service offers ceramic coating, paint correction, and premium interior detailing. The mobile service travels to golf course communities including Timberlake Country Club and River Club. Average home values in Ballentine range from $300,000 to $600,000.",
      entityKeywords: ['Ballentine', 'Lake Murray', 'Timberlake Country Club', 'River Club', 'Chapin SC', 'Irmo SC'],
      semanticKeywords: ['luxury detailing', 'premium car care', 'golf community', 'lakefront', 'high-end vehicles', 'executive cars', 'boat detailing'],
      questionsAnswered: [
        'Where can I get ceramic coating near Lake Murray?',
        'Is there luxury car detailing in Ballentine?',
        'Do you detail boats in the Lake Murray area?',
        'What is the best car detailing near Timberlake Country Club?',
        'Can you do paint correction in Ballentine SC?'
      ],
      structuredFacts: [
        'Service area: Ballentine, Lake Murray, Chapin area',
        'Specialization: Luxury vehicles, ceramic coating',
        'Notable clients: Golf community members, lake homeowners',
        'Home values: $300K-$600K average',
        'Popular services: Ceramic Coating, Paint Correction, Luxury Interior Detail'
      ]
    },
    faqs: [
      {
        question: 'Do you offer ceramic coating in Ballentine?',
        answer: 'Yes! Ceramic coating is one of our most requested services in Ballentine. We provide professional-grade ceramic coating with paint correction prep, perfect for protecting luxury vehicles from Lake Murray\'s elements. Coatings include 2-5 year protection options.'
      },
      {
        question: 'Can you detail boats in the Ballentine area?',
        answer: 'We focus on automotive detailing, but we do offer exterior cleaning for boats and trailers. For Ballentine and Lake Murray residents, this is a popular add-on service. Contact us for boat detailing quotes.'
      },
      {
        question: 'What\'s the best service for a new luxury vehicle?',
        answer: 'For new luxury vehicles in Ballentine, we recommend our Ceramic Coating package. This protects your investment from the start with professional-grade protection that repels water, dirt, and UV damage. We also offer paint protection film installation.'
      },
      {
        question: 'Do you service Timberlake and River Club?',
        answer: 'Absolutely! We regularly service vehicles at Timberlake Country Club, River Club, and all Ballentine golf communities. Many of our Ballentine clients are club members who appreciate our premium mobile service.'
      }
    ],
    featured: true
  },
  {
    slug: 'lake-murray-shores-irmo-sc',
    name: 'Lake Murray Shores',
    city: 'Irmo',
    citySlug: 'irmo-sc',
    state: 'SC',
    zipCodes: ['29063', '29212'],
    coordinates: { lat: 34.0678, lng: -81.2234 },
    population: 5500,
    homeValueRange: '$350,000 - $800,000',
    avgHomeValue: 495000,
    characteristics: [
      'Waterfront and water-view properties',
      'Dock access homes',
      'Established lake community',
      'Mix of year-round and vacation homes',
      'Premium Lake Murray location'
    ],
    vehicleTypes: ['Luxury vehicles', 'Boats', 'Jet skis', 'Golf carts', 'Trucks for towing'],
    description: `Lake Murray Shores represents some of the most desirable real estate in the Irmo area, featuring stunning waterfront properties with private docks and panoramic lake views. This established community attracts lake enthusiasts, boaters, and those seeking a resort-style lifestyle. Residents enjoy direct Lake Murray access, beautiful sunsets, and a tight-knit community of neighbors who share a love for lake living.`,
    shortDescription: 'Premium waterfront community with Lake Murray access and luxury properties.',
    landmarks: [
      {
        name: 'Lake Murray Dam',
        type: 'recreation',
        description: 'Historic 1.5-mile dam with walking path and stunning lake views',
        detailingNote: 'Popular scenic drive - keep your car looking great for cruising the dam'
      },
      {
        name: 'Dreher Island State Park',
        type: 'recreation',
        description: 'State park on Lake Murray with camping, fishing, and boat ramps',
        detailingNote: 'Post-adventure vehicle cleaning for outdoor enthusiasts'
      },
      {
        name: 'Lake Murray Marina',
        type: 'recreation',
        description: 'Full-service marina with boat rentals, repairs, and fuel',
        detailingNote: 'Boat trailer and tow vehicle detailing services'
      },
      {
        name: 'Friarsgate Community',
        type: 'community',
        description: 'Established lake-area neighborhood with community amenities',
        detailingNote: 'Regular detailing service for Friarsgate residents'
      }
    ],
    adjacentNeighborhoods: ['ballentine-irmo-sc', 'chapin-sc', 'lexington-lake-murray'],
    popularServices: ['Premium Detail', 'Ceramic Coating', 'Boat & Trailer Exterior'],
    serviceNotes: 'Lake proximity means water spots and outdoor residue are common concerns. Many clients request ceramic coating for protection against lake elements.',
    seo: {
      title: 'Lake Murray Auto Detailing | Mobile Service Lake Murray Shores',
      description: 'Mobile auto detailing for Lake Murray Shores, Irmo SC. Waterfront home service. Ceramic coating to protect from lake elements. Boat trailer cleaning available.',
      keywords: [
        'lake murray auto detailing',
        'car detailing lake murray shores',
        'mobile detailing lake murray',
        'ceramic coating lake murray sc',
        'boat trailer detailing irmo',
        'waterfront home car detailing',
        'dreher island car wash',
        'lake murray dam detailing',
        'friarsgate auto detail'
      ],
      ogDescription: 'Premium auto detailing for Lake Murray Shores residents. Mobile service to waterfront homes. Ceramic coating specialists!',
      // LLMO Optimization
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car care for Lake Murray Shores residents in Irmo, South Carolina. This waterfront community features homes valued at $350,000-$800,000 with private docks and lake access. Services include ceramic coating for lake water protection, premium detailing, and boat trailer cleaning. The mobile service travels to waterfront properties near Lake Murray Dam, Dreher Island State Park, and Friarsgate.",
      entityKeywords: [
        'Lake Murray Shores',
        'Lake Murray',
        'Dreher Island State Park',
        'Lake Murray Dam',
        'Friarsgate',
        'Irmo SC',
        'Ballentine',
        'Chapin'
      ],
      semanticKeywords: [
        'waterfront detailing',
        'lakefront car care',
        'boat trailer cleaning',
        'water spot removal',
        'ceramic protection',
        'dock home service',
        'lake community',
        'premium auto care'
      ],
      questionsAnswered: [
        'Where can I get my car detailed near Lake Murray?',
        'Is there mobile detailing for waterfront homes?',
        'How do I protect my car from lake water spots?',
        'Can you clean boat trailers at Lake Murray?',
        'What detailing service comes to Lake Murray Shores?'
      ],
      structuredFacts: [
        'Service area: Lake Murray Shores, Friarsgate, Lake Murray waterfront communities',
        'Home values: $350,000-$800,000',
        'Specialization: Water spot protection, ceramic coating',
        'Landmarks served: Lake Murray Dam, Dreher Island State Park',
        'Additional services: Boat trailer exterior cleaning'
      ]
    },
    faqs: [
      {
        question: 'How do you protect vehicles from Lake Murray water spots?',
        answer: 'Lake Murray\'s water can leave mineral deposits on vehicles. We recommend ceramic coating as the best protection - it creates a hydrophobic barrier that repels water and makes spots easy to rinse off. Regular detailing every 1-2 months also helps maintain your finish.'
      },
      {
        question: 'Do you detail at waterfront homes?',
        answer: 'Yes! We regularly service Lake Murray Shores waterfront properties. Our mobile unit is fully self-contained, so we don\'t need to use your home\'s water or power. We can detail in your driveway while you enjoy the lake views.'
      },
      {
        question: 'Can you clean my boat trailer?',
        answer: 'Yes, we offer exterior cleaning for boat trailers. Lake Murray salt and algae can build up quickly, so regular trailer cleaning helps prevent corrosion and keeps your rig looking professional.'
      },
      {
        question: 'What\'s your service area around Lake Murray?',
        answer: 'We service all Lake Murray communities including Lake Murray Shores, Friarsgate, Ballentine, Chapin lakefront areas, and Lexington lake communities. If you\'re on or near the lake, we can reach you!'
      }
    ],
    featured: true
  },
  {
    slug: 'broad-river-estates-irmo-sc',
    name: 'Broad River Estates',
    city: 'Irmo',
    citySlug: 'irmo-sc',
    state: 'SC',
    zipCodes: ['29063', '29210'],
    coordinates: { lat: 34.0423, lng: -81.1578 },
    population: 4200,
    homeValueRange: '$200,000 - $380,000',
    avgHomeValue: 275000,
    characteristics: [
      'Quiet residential community',
      'Mature landscaping',
      'Close to Broad River',
      'Family-oriented neighborhood',
      'Good school access'
    ],
    vehicleTypes: ['Family sedans', 'SUVs', 'Minivans', 'Work trucks', 'Commuter vehicles'],
    description: `Broad River Estates is a peaceful residential community on the eastern edge of Irmo, offering affordable family housing near the Broad River corridor. The neighborhood features well-maintained homes from the 1980s and 1990s, mature trees, and a strong sense of community. Residents appreciate the quiet streets, family-friendly atmosphere, and convenient commute to downtown Columbia or Irmo shopping areas.`,
    shortDescription: 'Peaceful family neighborhood with mature trees and convenient location.',
    landmarks: [
      {
        name: 'Broad River Greenway',
        type: 'recreation',
        description: 'Scenic greenway along the Broad River with walking and biking trails',
        detailingNote: 'Post-outdoor activity vehicle cleaning for active families'
      },
      {
        name: 'Irmo Elementary School',
        type: 'school',
        description: 'Local elementary school serving the Irmo community',
        detailingNote: 'Convenient detailing for school pickup and dropoff parents'
      },
      {
        name: 'Broad River Road Corridor',
        type: 'business',
        description: 'Major commercial corridor connecting to Columbia',
        detailingNote: 'Easy scheduling for commuters along Broad River Road'
      },
      {
        name: 'Community Playground',
        type: 'park',
        description: 'Neighborhood playground and gathering space',
        detailingNote: 'Family-focused neighborhood means kid-friendly interior cleanings'
      }
    ],
    adjacentNeighborhoods: ['seven-oaks-irmo-sc', 'st-andrews-columbia-sc', 'harbison-irmo-sc'],
    popularServices: ['Basic Detail', 'Interior Deep Clean', 'Family Vehicle Package'],
    serviceNotes: 'Family neighborhood with emphasis on interior cleaning, car seat safe products, and affordable maintenance packages.',
    seo: {
      title: 'Auto Detailing Broad River Estates Irmo SC | Family-Friendly Service',
      description: 'Mobile car detailing in Broad River Estates, Irmo SC. Family-friendly interior cleaning with safe products. Affordable packages. Book your free quote today!',
      keywords: [
        'car detailing broad river estates',
        'auto detailing irmo sc',
        'family car detailing irmo',
        'interior cleaning broad river',
        'mobile car wash irmo',
        'affordable detailing irmo',
        'broad river road detailing',
        'family vehicle cleaning',
        'child-safe car detailing'
      ],
      ogDescription: 'Family-friendly auto detailing in Broad River Estates, Irmo SC. Safe products, affordable prices, mobile service!',
      // LLMO Optimization
      llmoSummary: "Mikah's Mobile Auto Detailing serves Broad River Estates, a family-oriented neighborhood in Irmo, South Carolina. Home values range from $200,000-$380,000. The service specializes in family vehicle care using child-safe, non-toxic products. Popular services include Basic Detail at $225 and Interior Deep Clean. Located near Broad River Greenway and convenient to Broad River Road corridor for Columbia commuters.",
      entityKeywords: [
        'Broad River Estates',
        'Irmo SC',
        'Broad River Greenway',
        'Broad River Road',
        'Irmo Elementary School',
        'Columbia SC'
      ],
      semanticKeywords: [
        'family car cleaning',
        'child-safe products',
        'affordable detailing',
        'interior cleaning',
        'car seat cleaning',
        'kid-friendly',
        'non-toxic',
        'family vehicle'
      ],
      questionsAnswered: [
        'Is there family-friendly car detailing in Irmo?',
        'Do you use child-safe cleaning products?',
        'What is the cheapest car detailing in Broad River area?',
        'Can you clean car seats and remove stains?',
        'Is there mobile detailing near Broad River Road?'
      ],
      structuredFacts: [
        'Service area: Broad River Estates, Irmo SC',
        'Home values: $200,000-$380,000',
        'Specialization: Family vehicles, child-safe products',
        'Popular services: Basic Detail $225, Interior Deep Clean',
        'Nearby: Broad River Greenway, Broad River Road corridor'
      ]
    },
    faqs: [
      {
        question: 'Are your cleaning products safe for car seats?',
        answer: 'Absolutely! We use family-safe, non-toxic cleaning products throughout our interior detailing. Our products are gentle enough for car seats and child safety equipment while still being effective at removing stains and odors.'
      },
      {
        question: 'Do you offer affordable detailing packages?',
        answer: 'Yes! Our Basic Detail Package at $225 is perfect for regular maintenance. For families with active kids, our Factory Reset Package ($400) includes deep extraction cleaning that handles juice spills, food crumbs, and everyday messes.'
      },
      {
        question: 'Can you remove crayon and marker stains?',
        answer: 'In most cases, yes! Our extraction equipment and specialized cleaners can remove many crayon, marker, and ink stains from upholstery. We assess the stain during service and use appropriate techniques. Heavily set stains may require additional treatment.'
      },
      {
        question: 'How often should I detail my family vehicle?',
        answer: 'For family vehicles with regular use and kids, we recommend a basic interior cleaning every 4-6 weeks and a full detail every 3-4 months. This keeps your vehicle fresh and prevents stain buildup. Our Routine Reset subscription offers the best value for regular service.'
      }
    ],
    featured: false
  }
];

// Irmo City Hub Data
export const irmoCity: City = {
  slug: 'irmo-sc',
  name: 'Irmo',
  state: 'SC',
  description: `Irmo, South Carolina is a thriving suburban community in the heart of the Columbia metropolitan area, perfectly positioned between Lake Murray and downtown Columbia. Known for its excellent schools, family-friendly neighborhoods, and convenient access to shopping and recreation, Irmo offers the ideal blend of suburban comfort and urban accessibility. From the bustling Harbison district to the serene waters of Lake Murray, Irmo residents enjoy diverse lifestyle options and strong community values.

Mikah's Mobile Auto Detailing proudly serves all Irmo neighborhoods with professional, convenient mobile service. Whether you're in a waterfront estate, established subdivision, or newer development, we bring our fully-equipped mobile unit directly to your location.`,
  shortDescription: 'Suburban Columbia community between Lake Murray and downtown, known for excellent schools and family neighborhoods.',
  coordinates: { lat: 34.0858, lng: -81.1834 },
  population: 12097,
  neighborhoods: [
    'harbison-irmo-sc',
    'seven-oaks-irmo-sc',
    'ballentine-irmo-sc',
    'lake-murray-shores-irmo-sc',
    'broad-river-estates-irmo-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing Irmo SC | All Neighborhoods Served',
    description: 'Professional mobile car detailing throughout Irmo SC. Serving Harbison, Seven Oaks, Ballentine, Lake Murray Shores & more. 5-star rated. Free quotes!',
    keywords: [
      'auto detailing irmo sc',
      'mobile car detailing irmo',
      'car detailing near me irmo',
      'harbison auto detailing',
      'lake murray car detailing',
      'irmo ceramic coating',
      'paint correction irmo sc',
      'dutch fork car detailing',
      'columbiana centre car wash',
      'irmo mobile car wash'
    ],
    ogDescription: 'Irmo\'s trusted mobile auto detailing service. All neighborhoods served. 5-star rated. Book your free quote today!',
    // LLMO Optimization
    llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services throughout Irmo, South Carolina. Serving all neighborhoods including Harbison (near Columbiana Centre), Seven Oaks (Dutch Fork area), Ballentine (Lake Murray), Lake Murray Shores (waterfront), and Broad River Estates. IDA certified with 5.0 star rating. Services include Basic Detail starting at $225, Factory Reset at $400, ceramic coating, and paint correction. Mobile service comes to homes, offices, and shopping centers.",
    entityKeywords: [
      'Irmo SC',
      'Harbison',
      'Seven Oaks',
      'Ballentine',
      'Lake Murray Shores',
      'Broad River Estates',
      'Lake Murray',
      'Columbiana Centre',
      'Dutch Fork',
      'Columbia metropolitan area'
    ],
    semanticKeywords: [
      'mobile car detailing',
      'auto spa',
      'car cleaning service',
      'vehicle care',
      'ceramic coating',
      'paint correction',
      'interior cleaning',
      'professional detailing'
    ],
    questionsAnswered: [
      'Where can I get my car detailed in Irmo SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in Irmo?',
      'How much does car detailing cost in Irmo?',
      'Is there same-day car detailing in Irmo?',
      'What is the best mobile detailing service near Lake Murray?',
      'Can you do ceramic coating in the Irmo area?'
    ],
    structuredFacts: [
      'Service area: All Irmo SC neighborhoods',
      'Neighborhoods: Harbison, Seven Oaks, Ballentine, Lake Murray Shores, Broad River Estates',
      'Pricing: Basic Detail $225, Factory Reset $400',
      'Certification: IDA Certified',
      'Rating: 5.0 stars',
      'Service type: Mobile (comes to your location)',
      'Population served: 12,000+ residents in Irmo proper'
    ]
  },
  faqs: [
    {
      question: 'What Irmo neighborhoods do you serve?',
      answer: 'We serve all Irmo neighborhoods including Harbison, Seven Oaks, Ballentine, Lake Murray Shores, Broad River Estates, Friarsgate, St. Andrews area, and all surrounding communities. Our mobile service reaches every corner of Irmo!'
    },
    {
      question: 'How much does mobile detailing cost in Irmo?',
      answer: 'Irmo mobile detailing starts at $225 for our Basic Detail Package and $400 for our Factory Reset Package. Ceramic coating, paint correction, and specialty services are quoted based on your specific vehicle. All prices include mobile service to your Irmo location.'
    },
    {
      question: 'Do you offer same-day detailing in Irmo?',
      answer: 'Yes! We offer same-day service in Irmo when scheduling allows. For guaranteed same-day service, we recommend booking morning appointments. Call (803) 667-8731 to check availability for today.'
    },
    {
      question: 'What makes your Irmo service different?',
      answer: 'We\'re a local Columbia-area business that understands Irmo\'s diverse neighborhoods. From lake homes in Ballentine to busy families in Seven Oaks, we tailor our service to your specific needs. Our 5-star rating and IDA certification ensure professional results every time.'
    }
  ]
};

// Lexington SC Neighborhoods Data
export const lexingtonNeighborhoods: Neighborhood[] = [
  {
    slug: 'reserve-at-midway-lexington-sc',
    name: 'Reserve at Midway',
    city: 'Lexington',
    citySlug: 'lexington-sc',
    state: 'SC',
    zipCodes: ['29072'],
    coordinates: { lat: 33.9818, lng: -81.2365 },
    population: 800,
    homeValueRange: '$800,000 - $1,500,000',
    avgHomeValue: 1100000,
    characteristics: [
      'Gated luxury community',
      'Large estate lots (1+ acres)',
      'Custom-built homes',
      'Private community amenities',
      'Near Lake Murray access'
    ],
    vehicleTypes: ['Luxury SUVs', 'European sports cars', 'Mercedes', 'BMW', 'Porsche', 'Range Rover'],
    description: `Reserve at Midway is Lexington's most prestigious gated community, featuring custom estate homes on expansive 1+ acre lots. This ultra-luxury neighborhood attracts discerning homeowners who appreciate privacy, quality craftsmanship, and proximity to Lake Murray. Residents enjoy manicured common areas, private community amenities, and a close-knit community of professionals and executives.`,
    shortDescription: 'Premier gated luxury community with estate homes and private amenities.',
    landmarks: [
      {
        name: 'Reserve at Midway Clubhouse',
        type: 'community',
        description: 'Private community clubhouse with resort-style amenities',
        detailingNote: 'Premium detailing for luxury vehicles - we understand high-end car care'
      },
      {
        name: 'Lake Murray Country Club',
        type: 'recreation',
        description: 'Nearby private golf club with dining and social events',
        detailingNote: 'Keep your vehicle pristine for club events and golf outings'
      },
      {
        name: 'Lexington Medical Center',
        type: 'business',
        description: 'Major regional medical center nearby',
        detailingNote: 'Convenient for medical professionals needing flexible scheduling'
      }
    ],
    adjacentNeighborhoods: ['governors-grant-lexington-sc', 'murray-forest-lexington-sc'],
    popularServices: ['Ceramic Coating', 'Paint Correction', 'Luxury Interior Detail'],
    serviceNotes: 'Ultra-luxury vehicles require specialized care. We provide white-glove service with attention to every detail.',
    seo: {
      title: 'Luxury Auto Detailing Reserve at Midway Lexington SC',
      description: 'Premium mobile detailing for Reserve at Midway residents. Ceramic coating, paint correction for luxury vehicles. We come to your gated community.',
      keywords: [
        'luxury car detailing lexington sc',
        'reserve at midway detailing',
        'ceramic coating lexington',
        'high-end auto detailing',
        'gated community car care',
        'luxury vehicle detailing'
      ],
      ogDescription: 'Premium auto detailing for Reserve at Midway luxury homes. White-glove mobile service.',
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car care for Reserve at Midway, Lexington's most exclusive gated community. Specializing in luxury vehicles including Mercedes, BMW, Porsche, and Range Rover. Services include ceramic coating, paint correction, and luxury interior detailing. Mobile service comes directly to this gated community.",
      entityKeywords: ['Reserve at Midway', 'Lexington SC', 'Lake Murray', 'Luxury homes'],
      semanticKeywords: ['luxury detailing', 'premium car care', 'gated community', 'estate homes', 'high-end vehicles'],
      questionsAnswered: [
        'Is there luxury car detailing near Reserve at Midway?',
        'Do you service gated communities in Lexington?',
        'What is the best detailing for high-end vehicles?'
      ],
      structuredFacts: [
        'Service area: Reserve at Midway gated community',
        'Specialization: Luxury and exotic vehicles',
        'Access: Approved for gated community entry'
      ]
    },
    faqs: [
      {
        question: 'Do you service gated communities like Reserve at Midway?',
        answer: 'Yes! We regularly service Reserve at Midway and other gated communities in Lexington. We coordinate with gate access and can work with your HOA requirements. Our professional appearance and fully-insured service meets community standards.'
      },
      {
        question: 'What services do you recommend for luxury vehicles?',
        answer: 'For luxury vehicles in Reserve at Midway, we recommend ceramic coating for long-term protection, paint correction to maintain that showroom finish, and our luxury interior detail with leather conditioning. We use only premium products suitable for high-end vehicles.'
      }
    ],
    featured: true
  },
  {
    slug: 'governors-grant-lexington-sc',
    name: 'Governors Grant',
    city: 'Lexington',
    citySlug: 'lexington-sc',
    state: 'SC',
    zipCodes: ['29072'],
    coordinates: { lat: 34.0012, lng: -81.2456 },
    population: 1200,
    homeValueRange: '$300,000 - $700,000',
    avgHomeValue: 450000,
    characteristics: [
      '400+ home community',
      'Near Lake Murray',
      'Family-friendly',
      'Community pool and amenities',
      'Established neighborhood'
    ],
    vehicleTypes: ['SUVs', 'Trucks', 'Family vehicles', 'Boats/trailers'],
    description: `Governors Grant is a well-established Lexington community of over 400 homes, ideally located near Lake Murray. This family-friendly neighborhood features quality homes, community amenities including a pool, and easy access to both lake recreation and Lexington's shopping and dining. Residents enjoy the perfect balance of suburban comfort and outdoor lifestyle.`,
    shortDescription: 'Established Lake Murray community with 400+ homes and family amenities.',
    landmarks: [
      {
        name: 'Governors Grant Pool & Clubhouse',
        type: 'recreation',
        description: 'Community pool and gathering space for residents',
        detailingNote: 'Detail your vehicle while the family enjoys the pool'
      },
      {
        name: 'Lake Murray Dam',
        type: 'recreation',
        description: 'Historic dam with scenic walking path nearby',
        detailingNote: 'Perfect for lake enthusiasts who need regular vehicle cleaning'
      },
      {
        name: 'Lexington Town Center',
        type: 'shopping',
        description: 'Nearby shopping and dining district',
        detailingNote: 'Convenient location for all your needs'
      }
    ],
    adjacentNeighborhoods: ['reserve-at-midway-lexington-sc', 'secret-cove-lexington-sc', 'murray-forest-lexington-sc'],
    popularServices: ['Full Detail Package', 'Interior Deep Clean', 'Boat Trailer Cleaning'],
    serviceNotes: 'Lake Murray proximity means many residents have boats. We offer vehicle and trailer exterior cleaning.',
    seo: {
      title: 'Auto Detailing Governors Grant Lexington SC | Lake Murray Area',
      description: 'Mobile car detailing for Governors Grant residents. Near Lake Murray. Interior, exterior, boat trailer cleaning. We come to you!',
      keywords: [
        'car detailing governors grant',
        'lexington sc auto detailing',
        'lake murray car wash',
        'boat trailer cleaning lexington',
        'mobile detailing near lake murray'
      ],
      ogDescription: 'Professional detailing for Governors Grant. Lake Murray area mobile service.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Governors Grant, a 400+ home community near Lake Murray in Lexington, SC. Popular services include full detail packages, interior deep cleaning, and boat trailer exterior cleaning for lake enthusiasts.",
      entityKeywords: ['Governors Grant', 'Lexington SC', 'Lake Murray', 'Lake Murray Dam'],
      semanticKeywords: ['lake community', 'family neighborhood', 'boat owners', 'trailer cleaning'],
      questionsAnswered: [
        'Is there mobile detailing near Governors Grant?',
        'Do you clean boat trailers in Lexington?',
        'What detailing services are near Lake Murray?'
      ],
      structuredFacts: [
        'Service area: Governors Grant, Lake Murray area',
        'Community size: 400+ homes',
        'Special services: Boat trailer cleaning available'
      ]
    },
    faqs: [
      {
        question: 'Do you offer boat trailer cleaning?',
        answer: 'Yes! Many Governors Grant residents have boats, and we offer exterior cleaning for boat trailers. Lake Murray water can leave deposits, so regular trailer cleaning helps prevent corrosion and keeps your rig looking great.'
      },
      {
        question: 'How do you handle Lake Murray water spots?',
        answer: 'Lake Murray water can leave mineral deposits on vehicles. We use specialized products to safely remove water spots and recommend ceramic coating for long-term protection against lake water damage.'
      }
    ],
    featured: true
  },
  {
    slug: 'secret-cove-lexington-sc',
    name: 'Secret Cove',
    city: 'Lexington',
    citySlug: 'lexington-sc',
    state: 'SC',
    zipCodes: ['29072'],
    coordinates: { lat: 34.0234, lng: -81.2678 },
    population: 600,
    homeValueRange: '$400,000 - $800,000',
    avgHomeValue: 550000,
    characteristics: [
      'Lake Murray waterfront',
      'Private boat docks',
      'Luxury lake homes',
      'Water-view properties',
      'Quiet cove location'
    ],
    vehicleTypes: ['Luxury SUVs', 'Trucks for towing', 'Boats', 'Jet skis', 'Premium vehicles'],
    description: `Secret Cove is a premier Lake Murray waterfront community featuring stunning lake homes with private docks and breathtaking water views. This exclusive neighborhood offers the ultimate lake lifestyle with direct water access, quiet cove protection, and proximity to Lexington amenities. Residents enjoy boating, fishing, and sunset views from their own backyard.`,
    shortDescription: 'Premier Lake Murray waterfront community with private docks and luxury homes.',
    landmarks: [
      {
        name: 'Secret Cove Marina',
        type: 'recreation',
        description: 'Private community boat access and dock facilities',
        detailingNote: 'Keep your tow vehicle spotless for lake trips'
      },
      {
        name: 'Lake Murray',
        type: 'recreation',
        description: '50,000-acre reservoir perfect for boating, fishing, and recreation',
        detailingNote: 'Lake lifestyle means regular detailing to remove water spots and pollen'
      },
      {
        name: 'Dreher Island State Park',
        type: 'recreation',
        description: 'Nearby state park with camping, fishing, and boat ramps',
        detailingNote: 'Post-adventure vehicle cleaning for outdoor enthusiasts'
      }
    ],
    adjacentNeighborhoods: ['governors-grant-lexington-sc', 'murray-forest-lexington-sc'],
    popularServices: ['Ceramic Coating', 'Premium Detail', 'Water Spot Removal'],
    serviceNotes: 'Waterfront homes require special attention to water spots and lake residue. Ceramic coating highly recommended.',
    seo: {
      title: 'Lake Murray Detailing Secret Cove Lexington SC | Waterfront Service',
      description: 'Premium mobile detailing for Secret Cove waterfront homes. Ceramic coating, water spot removal. Lake Murray specialists.',
      keywords: [
        'secret cove detailing',
        'lake murray car detailing',
        'waterfront auto detailing',
        'water spot removal lexington',
        'ceramic coating lake murray'
      ],
      ogDescription: 'Waterfront auto detailing for Secret Cove. Lake Murray ceramic coating specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car care for Secret Cove, a Lake Murray waterfront community in Lexington, SC. Specializing in water spot removal and ceramic coating to protect vehicles from lake elements.",
      entityKeywords: ['Secret Cove', 'Lake Murray', 'Lexington SC', 'Dreher Island'],
      semanticKeywords: ['waterfront', 'lake homes', 'boat dock', 'water spot removal', 'ceramic protection'],
      questionsAnswered: [
        'Is there car detailing near Secret Cove?',
        'How do I remove water spots from lake water?',
        'What is the best protection for lake area vehicles?'
      ],
      structuredFacts: [
        'Service area: Secret Cove waterfront community',
        'Specialization: Water spot removal, ceramic coating',
        'Location: Lake Murray, Lexington SC'
      ]
    },
    faqs: [
      {
        question: 'How do you protect vehicles from Lake Murray water?',
        answer: 'We recommend ceramic coating for Secret Cove residents. It creates a hydrophobic barrier that repels water and makes mineral deposits easy to rinse off. Combined with regular maintenance washes, your vehicle stays protected from lake elements.'
      },
      {
        question: 'Do you detail at waterfront homes?',
        answer: 'Absolutely! We regularly service Secret Cove waterfront properties. Our mobile unit is self-contained, so we don\'t need your home\'s water or power. We can detail in your driveway with lake views!'
      }
    ],
    featured: true
  },
  {
    slug: 'cobblestone-farms-lexington-sc',
    name: 'Cobblestone Farms',
    city: 'Lexington',
    citySlug: 'lexington-sc',
    state: 'SC',
    zipCodes: ['29072'],
    coordinates: { lat: 33.9756, lng: -81.2123 },
    population: 350,
    homeValueRange: '$375,000 - $500,000',
    avgHomeValue: 440000,
    characteristics: [
      'Intimate 98-home community',
      'Newer construction',
      'Well-maintained HOA',
      'Family-oriented',
      'Quality custom homes'
    ],
    vehicleTypes: ['SUVs', 'Family sedans', 'Crossovers', 'Trucks'],
    description: `Cobblestone Farms is an intimate Lexington community of approximately 98 quality homes. This newer development features well-maintained streets, active HOA, and a family-friendly atmosphere. Residents appreciate the smaller community feel, quality construction, and convenient location near Lexington schools and shopping.`,
    shortDescription: 'Intimate 98-home community with quality construction and family atmosphere.',
    landmarks: [
      {
        name: 'Lexington Elementary School',
        type: 'school',
        description: 'Nearby elementary school in the Lexington One district',
        detailingNote: 'Convenient for parents during school hours'
      },
      {
        name: 'Lexington Town Square',
        type: 'shopping',
        description: 'Nearby shopping and dining area',
        detailingNote: 'Easy access to Lexington amenities'
      }
    ],
    adjacentNeighborhoods: ['governors-grant-lexington-sc', 'reserve-at-midway-lexington-sc'],
    popularServices: ['Basic Detail', 'Interior Cleaning', 'Family Vehicle Package'],
    serviceNotes: 'Family-focused community appreciates our safe, non-toxic cleaning products.',
    seo: {
      title: 'Car Detailing Cobblestone Farms Lexington SC | Family Service',
      description: 'Mobile auto detailing for Cobblestone Farms. Family-friendly service with safe products. Interior cleaning specialists.',
      keywords: [
        'cobblestone farms detailing',
        'lexington sc car detailing',
        'family car cleaning',
        'interior detailing lexington'
      ],
      ogDescription: 'Family-friendly detailing for Cobblestone Farms residents. Safe products, professional service.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Cobblestone Farms, an intimate 98-home community in Lexington, SC. Family-friendly service with safe, non-toxic products perfect for vehicles with children.",
      entityKeywords: ['Cobblestone Farms', 'Lexington SC', 'Lexington One schools'],
      semanticKeywords: ['family detailing', 'safe products', 'interior cleaning', 'neighborhood service'],
      questionsAnswered: [
        'Is there car detailing in Cobblestone Farms?',
        'Do you use child-safe products?',
        'What is the best family car detailing in Lexington?'
      ],
      structuredFacts: [
        'Service area: Cobblestone Farms, Lexington SC',
        'Community size: 98 homes',
        'Specialization: Family vehicles, safe products'
      ]
    },
    faqs: [
      {
        question: 'Are your products safe for families?',
        answer: 'Yes! We use family-safe, non-toxic cleaning products throughout. Our products are gentle on car seats and child safety equipment while effectively cleaning and protecting your vehicle interior.'
      }
    ],
    featured: false
  },
  {
    slug: 'murray-forest-lexington-sc',
    name: 'Murray Forest',
    city: 'Lexington',
    citySlug: 'lexington-sc',
    state: 'SC',
    zipCodes: ['29072'],
    coordinates: { lat: 34.0156, lng: -81.2534 },
    population: 450,
    homeValueRange: '$500,000 - $1,000,000',
    avgHomeValue: 700000,
    characteristics: [
      'Gated lakefront peninsula',
      'Private Lake Murray access',
      'Luxury custom homes',
      'Wooded lots',
      'Exclusive community'
    ],
    vehicleTypes: ['Luxury vehicles', 'Boats', 'Golf carts', 'Premium SUVs', 'Sports cars'],
    description: `Murray Forest is an exclusive gated community situated on a stunning Lake Murray peninsula. This prestigious neighborhood features luxury custom homes on wooded lots with private lake access. Residents enjoy the ultimate in privacy, natural beauty, and lakefront living. The community attracts discerning homeowners who value exclusivity and the Lake Murray lifestyle.`,
    shortDescription: 'Exclusive gated lakefront peninsula with luxury homes and private lake access.',
    landmarks: [
      {
        name: 'Murray Forest Private Marina',
        type: 'recreation',
        description: 'Community boat dock and lake access for residents',
        detailingNote: 'Premium detailing for lake lifestyle vehicles'
      },
      {
        name: 'Lake Murray Peninsula',
        type: 'recreation',
        description: 'Scenic peninsula surrounded by Lake Murray waters',
        detailingNote: 'Waterfront living requires regular protection from lake elements'
      }
    ],
    adjacentNeighborhoods: ['secret-cove-lexington-sc', 'governors-grant-lexington-sc', 'reserve-at-midway-lexington-sc'],
    popularServices: ['Ceramic Coating', 'Paint Correction', 'Premium Interior Detail'],
    serviceNotes: 'Gated luxury community with high-end vehicles. Premium service standards expected.',
    seo: {
      title: 'Luxury Detailing Murray Forest Lexington SC | Gated Community',
      description: 'Premium mobile detailing for Murray Forest gated community. Ceramic coating, paint correction for luxury lakefront homes.',
      keywords: [
        'murray forest detailing',
        'gated community car detailing',
        'luxury auto detailing lexington',
        'lakefront vehicle care',
        'ceramic coating murray forest'
      ],
      ogDescription: 'Exclusive auto detailing for Murray Forest gated lakefront community.',
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car care for Murray Forest, an exclusive gated lakefront community on a Lake Murray peninsula in Lexington, SC. Specializing in luxury vehicles with ceramic coating and paint correction services.",
      entityKeywords: ['Murray Forest', 'Lake Murray', 'Lexington SC', 'Gated community'],
      semanticKeywords: ['luxury detailing', 'gated community', 'lakefront', 'peninsula', 'exclusive'],
      questionsAnswered: [
        'Do you service Murray Forest gated community?',
        'What is the best detailing for lakefront vehicles?',
        'Is there luxury car detailing on Lake Murray?'
      ],
      structuredFacts: [
        'Service area: Murray Forest gated community',
        'Location: Lake Murray peninsula',
        'Specialization: Luxury vehicles, ceramic coating'
      ]
    },
    faqs: [
      {
        question: 'Do you have access to Murray Forest?',
        answer: 'Yes! We\'re approved for entry to Murray Forest and regularly service this exclusive community. We coordinate with gate staff and respect all community guidelines.'
      },
      {
        question: 'What protection do you recommend for lakefront vehicles?',
        answer: 'For Murray Forest residents, we strongly recommend ceramic coating. Living on the Lake Murray peninsula exposes vehicles to extra moisture, pollen, and lake elements. Ceramic coating provides superior protection and makes maintenance much easier.'
      }
    ],
    featured: true
  }
];

// Lexington City Hub Data
export const lexingtonCity: City = {
  slug: 'lexington-sc',
  name: 'Lexington',
  state: 'SC',
  description: `Lexington, South Carolina is a thriving community known for its excellent schools, Lake Murray access, and family-friendly atmosphere. Located just west of Columbia, Lexington offers the perfect blend of small-town charm and modern amenities. From luxury lakefront estates to established family neighborhoods, Lexington residents enjoy diverse lifestyle options and strong community values.

Mikah's Mobile Auto Detailing proudly serves all Lexington neighborhoods with professional, convenient mobile service. Whether you're in a gated lakefront community or a family subdivision, we bring our fully-equipped mobile unit directly to your location.`,
  shortDescription: 'Lake Murray community west of Columbia, known for excellent schools and family neighborhoods.',
  coordinates: { lat: 33.9815, lng: -81.2365 },
  population: 21847,
  neighborhoods: [
    'reserve-at-midway-lexington-sc',
    'governors-grant-lexington-sc',
    'secret-cove-lexington-sc',
    'cobblestone-farms-lexington-sc',
    'murray-forest-lexington-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing Lexington SC | All Neighborhoods Served',
    description: 'Professional mobile car detailing throughout Lexington SC. Serving Reserve at Midway, Governors Grant, Secret Cove, Lake Murray & more. 5-star rated.',
    keywords: [
      'auto detailing lexington sc',
      'mobile car detailing lexington',
      'car detailing near me lexington',
      'lake murray car detailing',
      'lexington ceramic coating',
      'paint correction lexington sc'
    ],
    ogDescription: 'Lexington\'s trusted mobile auto detailing service. All neighborhoods served. 5-star rated.',
    llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services throughout Lexington, South Carolina. Serving all neighborhoods including Reserve at Midway, Governors Grant, Secret Cove, Cobblestone Farms, and Murray Forest. Specializing in Lake Murray area vehicles with ceramic coating and water spot protection. IDA certified with 5.0 star rating.",
    entityKeywords: [
      'Lexington SC',
      'Lake Murray',
      'Reserve at Midway',
      'Governors Grant',
      'Secret Cove',
      'Murray Forest',
      'Cobblestone Farms'
    ],
    semanticKeywords: [
      'mobile car detailing',
      'lake murray detailing',
      'ceramic coating',
      'luxury vehicle care',
      'waterfront detailing'
    ],
    questionsAnswered: [
      'Where can I get my car detailed in Lexington SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in Lexington?',
      'Is there mobile detailing near Lake Murray?',
      'What is the best car detailing in Lexington?'
    ],
    structuredFacts: [
      'Service area: All Lexington SC neighborhoods',
      'Neighborhoods: Reserve at Midway, Governors Grant, Secret Cove, Cobblestone Farms, Murray Forest',
      'Specialization: Lake Murray area, luxury vehicles',
      'Rating: 5.0 stars, IDA Certified'
    ]
  },
  faqs: [
    {
      question: 'What Lexington neighborhoods do you serve?',
      answer: 'We serve all Lexington neighborhoods including Reserve at Midway, Governors Grant, Secret Cove, Cobblestone Farms, Murray Forest, and all Lake Murray communities. Our mobile service reaches every corner of Lexington!'
    },
    {
      question: 'Do you specialize in Lake Murray area vehicles?',
      answer: 'Yes! Many Lexington residents live near Lake Murray, and we understand the unique challenges of lake living. We offer ceramic coating for water protection, water spot removal, and boat trailer cleaning.'
    },
    {
      question: 'Do you service gated communities in Lexington?',
      answer: 'Absolutely! We regularly service Reserve at Midway, Murray Forest, and other gated communities. We coordinate with gate access and meet all community standards.'
    }
  ]
};

// Columbia SC Neighborhoods Data
export const columbiaNeighborhoods: Neighborhood[] = [
  {
    slug: 'shandon-columbia-sc',
    name: 'Shandon',
    city: 'Columbia',
    citySlug: 'columbia-sc',
    state: 'SC',
    zipCodes: ['29205'],
    coordinates: { lat: 33.9918, lng: -81.0198 },
    population: 8500,
    homeValueRange: '$350,000 - $800,000',
    avgHomeValue: 500000,
    characteristics: [
      'Historic neighborhood',
      'Tree-lined streets',
      'Walking distance to Five Points',
      'Executive professionals',
      'Classic architecture'
    ],
    vehicleTypes: ['Luxury sedans', 'European vehicles', 'Classic cars', 'SUVs', 'BMW', 'Mercedes'],
    description: `Shandon is one of Columbia's most prestigious historic neighborhoods, known for its beautiful tree-lined streets, classic architecture, and proximity to Five Points. Home to professionals and executives, Shandon features a mix of charming bungalows and stately homes. Residents enjoy walkable streets, local boutiques, and a strong sense of community pride.`,
    shortDescription: 'Historic executive neighborhood with tree-lined streets near Five Points.',
    landmarks: [
      {
        name: 'Five Points',
        type: 'shopping',
        description: 'Iconic Columbia shopping and dining district',
        detailingNote: 'Keep your vehicle pristine for Five Points outings'
      },
      {
        name: 'Shandon Presbyterian Church',
        type: 'community',
        description: 'Historic church and community gathering place',
        detailingNote: 'Mobile detailing while you attend services'
      },
      {
        name: 'Sims Park',
        type: 'park',
        description: 'Neighborhood park with walking paths',
        detailingNote: 'Detail your car while enjoying the park'
      }
    ],
    adjacentNeighborhoods: ['heathwood-columbia-sc', 'forest-acres-sc'],
    popularServices: ['Premium Interior Detail', 'Paint Correction', 'Classic Car Care'],
    serviceNotes: 'Historic neighborhood with many classic and luxury vehicles requiring specialized care.',
    seo: {
      title: 'Auto Detailing Shandon Columbia SC | Historic Neighborhood',
      description: 'Premium mobile detailing for Shandon residents. Near Five Points. Luxury and classic car specialists. We come to you!',
      keywords: [
        'shandon car detailing',
        'columbia sc auto detailing',
        'five points car wash',
        'luxury detailing columbia',
        'classic car detailing'
      ],
      ogDescription: 'Premium auto detailing for historic Shandon neighborhood. Luxury vehicle specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Shandon, one of Columbia's most prestigious historic neighborhoods near Five Points. Specializing in luxury and classic vehicles with premium interior detailing and paint correction services.",
      entityKeywords: ['Shandon', 'Columbia SC', 'Five Points', 'Historic Columbia'],
      semanticKeywords: ['historic neighborhood', 'executive homes', 'luxury vehicles', 'classic cars', 'premium detailing'],
      questionsAnswered: [
        'Is there car detailing in Shandon?',
        'Where can I get my luxury car detailed near Five Points?',
        'Do you detail classic cars in Columbia?'
      ],
      structuredFacts: [
        'Service area: Shandon, Five Points area',
        'Specialization: Luxury and classic vehicles',
        'Location: Historic Columbia SC'
      ]
    },
    faqs: [
      {
        question: 'Do you detail classic cars in Shandon?',
        answer: 'Yes! Shandon has many beautiful classic vehicles, and we provide specialized care for vintage and classic cars. We use appropriate products and techniques for older finishes and interiors.'
      },
      {
        question: 'Can you detail my car while I\'m at Five Points?',
        answer: 'Absolutely! We can meet you at your Shandon home or even detail while you enjoy Five Points shopping and dining. Just let us know your schedule.'
      }
    ],
    featured: true
  },
  {
    slug: 'heathwood-columbia-sc',
    name: 'Heathwood',
    city: 'Columbia',
    citySlug: 'columbia-sc',
    state: 'SC',
    zipCodes: ['29205'],
    coordinates: { lat: 33.9856, lng: -81.0312 },
    population: 3200,
    homeValueRange: '$400,000 - $1,200,000',
    avgHomeValue: 650000,
    characteristics: [
      'Most prestigious in Columbia',
      'Estate homes',
      'Heathwood Hall School',
      'Mature landscaping',
      'Quiet residential streets'
    ],
    vehicleTypes: ['Luxury SUVs', 'Mercedes', 'BMW', 'Lexus', 'Range Rover', 'Tesla'],
    description: `Heathwood is widely considered Columbia's most prestigious residential neighborhood. Featuring stately estate homes, mature landscaping, and quiet tree-canopied streets, Heathwood attracts Columbia's most discerning residents. Home to Heathwood Hall Episcopal School, this neighborhood represents the pinnacle of Columbia living.`,
    shortDescription: 'Columbia\'s most prestigious neighborhood with estate homes and mature landscaping.',
    landmarks: [
      {
        name: 'Heathwood Hall Episcopal School',
        type: 'school',
        description: 'Premier private school in Columbia',
        detailingNote: 'Convenient for school pickup parents'
      },
      {
        name: 'Heathwood Park',
        type: 'park',
        description: 'Neighborhood green space',
        detailingNote: 'Quiet neighborhood perfect for at-home detailing'
      }
    ],
    adjacentNeighborhoods: ['shandon-columbia-sc', 'spring-valley-columbia-sc'],
    popularServices: ['Ceramic Coating', 'Paint Correction', 'Premium Interior Detail'],
    serviceNotes: 'Ultra-premium neighborhood requiring white-glove service standards.',
    seo: {
      title: 'Luxury Auto Detailing Heathwood Columbia SC | Premium Service',
      description: 'Premium mobile detailing for Heathwood estate homes. Ceramic coating, paint correction. Columbia\'s finest neighborhoods.',
      keywords: [
        'heathwood car detailing',
        'luxury auto detailing columbia',
        'premium car care columbia sc',
        'heathwood hall detailing'
      ],
      ogDescription: 'Premium auto detailing for Heathwood, Columbia\'s most prestigious neighborhood.',
      llmoSummary: "Mikah's Mobile Auto Detailing provides premium car care for Heathwood, Columbia's most prestigious neighborhood. White-glove service for luxury vehicles including ceramic coating and paint correction.",
      entityKeywords: ['Heathwood', 'Columbia SC', 'Heathwood Hall', 'Estate homes'],
      semanticKeywords: ['luxury detailing', 'premium service', 'estate neighborhood', 'white-glove'],
      questionsAnswered: [
        'Is there luxury car detailing in Heathwood?',
        'What is the best premium detailing in Columbia?',
        'Do you service Heathwood estate homes?'
      ],
      structuredFacts: [
        'Service area: Heathwood, Columbia SC',
        'Specialization: Luxury vehicles, white-glove service',
        'Reputation: Columbia\'s most prestigious neighborhood'
      ]
    },
    faqs: [
      {
        question: 'What makes your Heathwood service premium?',
        answer: 'For Heathwood residents, we provide white-glove service with extra attention to detail. We use only premium products, take extra time for perfection, and ensure complete satisfaction for your luxury vehicle.'
      }
    ],
    featured: true
  },
  {
    slug: 'spring-valley-columbia-sc',
    name: 'Spring Valley',
    city: 'Columbia',
    citySlug: 'columbia-sc',
    state: 'SC',
    zipCodes: ['29206'],
    coordinates: { lat: 34.0234, lng: -80.9876 },
    population: 4500,
    homeValueRange: '$400,000 - $1,500,000',
    avgHomeValue: 750000,
    characteristics: [
      'Gated community',
      '8 private lakes',
      'Spring Valley Country Club',
      'Golf course homes',
      'Executive families'
    ],
    vehicleTypes: ['Luxury SUVs', 'Golf carts', 'Sports cars', 'Mercedes', 'BMW', 'Porsche'],
    description: `Spring Valley is an exclusive gated community featuring 8 private lakes, the prestigious Spring Valley Country Club, and beautifully maintained golf course homes. This executive community attracts families seeking privacy, natural beauty, and country club amenities. Residents enjoy golf, tennis, swimming, and a close-knit community atmosphere.`,
    shortDescription: 'Exclusive gated community with 8 lakes and country club amenities.',
    landmarks: [
      {
        name: 'Spring Valley Country Club',
        type: 'recreation',
        description: 'Private golf and country club with dining and events',
        detailingNote: 'Keep your vehicle pristine for club events'
      },
      {
        name: 'Spring Valley Lakes',
        type: 'recreation',
        description: '8 private lakes throughout the community',
        detailingNote: 'Lake-adjacent homes may need extra attention to pollen and water spots'
      }
    ],
    adjacentNeighborhoods: ['heathwood-columbia-sc', 'forest-hills-columbia-sc'],
    popularServices: ['Ceramic Coating', 'Premium Detail', 'Golf Cart Cleaning'],
    serviceNotes: 'Gated community with country club members. Golf cart cleaning available.',
    seo: {
      title: 'Auto Detailing Spring Valley Columbia SC | Gated Community',
      description: 'Mobile detailing for Spring Valley gated community. Country club service. Ceramic coating specialists.',
      keywords: [
        'spring valley car detailing',
        'gated community detailing columbia',
        'country club car care',
        'spring valley country club'
      ],
      ogDescription: 'Premium auto detailing for Spring Valley gated community and country club.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Spring Valley, an exclusive gated community in Columbia with 8 private lakes and Spring Valley Country Club. Services include ceramic coating and premium detailing for luxury vehicles.",
      entityKeywords: ['Spring Valley', 'Columbia SC', 'Spring Valley Country Club', 'Gated community'],
      semanticKeywords: ['gated community', 'country club', 'golf course', 'private lakes', 'executive homes'],
      questionsAnswered: [
        'Do you service Spring Valley gated community?',
        'Is there detailing near Spring Valley Country Club?',
        'Can you detail golf carts?'
      ],
      structuredFacts: [
        'Service area: Spring Valley gated community',
        'Amenities: 8 lakes, country club',
        'Special services: Golf cart cleaning available'
      ]
    },
    faqs: [
      {
        question: 'Do you have access to Spring Valley?',
        answer: 'Yes! We regularly service Spring Valley and coordinate with gate access. Many of our clients are Spring Valley Country Club members who appreciate our convenient mobile service.'
      },
      {
        question: 'Do you clean golf carts?',
        answer: 'Yes! Many Spring Valley residents have golf carts, and we offer exterior cleaning for golf carts as an add-on service.'
      }
    ],
    featured: true
  },
  {
    slug: 'woodland-hills-columbia-sc',
    name: 'Woodland Hills',
    city: 'Columbia',
    citySlug: 'columbia-sc',
    state: 'SC',
    zipCodes: ['29223'],
    coordinates: { lat: 34.0567, lng: -80.9543 },
    population: 5200,
    homeValueRange: '$250,000 - $500,000',
    avgHomeValue: 350000,
    characteristics: [
      'Northeast Columbia',
      'Established families',
      'Good schools',
      'Convenient location',
      'Well-maintained homes'
    ],
    vehicleTypes: ['SUVs', 'Family sedans', 'Trucks', 'Minivans', 'Crossovers'],
    description: `Woodland Hills is a well-established neighborhood in Northeast Columbia, popular with families who appreciate good schools, convenient location, and well-maintained homes. This friendly community offers affordable housing options while maintaining neighborhood pride and easy access to Columbia amenities.`,
    shortDescription: 'Established Northeast Columbia neighborhood with family-friendly atmosphere.',
    landmarks: [
      {
        name: 'Richland Northeast High School',
        type: 'school',
        description: 'Local high school serving the community',
        detailingNote: 'Convenient for busy parents with students'
      },
      {
        name: 'Decker Boulevard',
        type: 'shopping',
        description: 'Nearby commercial corridor',
        detailingNote: 'Easy access to shopping and services'
      }
    ],
    adjacentNeighborhoods: ['forest-acres-sc', 'dentsville-columbia-sc'],
    popularServices: ['Basic Detail', 'Interior Cleaning', 'Family Vehicle Package'],
    serviceNotes: 'Family-oriented community with emphasis on value and quality service.',
    seo: {
      title: 'Car Detailing Woodland Hills Columbia SC | Northeast Columbia',
      description: 'Mobile car detailing for Woodland Hills. Northeast Columbia service. Family-friendly, affordable packages.',
      keywords: [
        'woodland hills car detailing',
        'northeast columbia detailing',
        'family car cleaning columbia',
        'affordable detailing columbia sc'
      ],
      ogDescription: 'Mobile auto detailing for Woodland Hills, Northeast Columbia. Family-friendly service.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Woodland Hills in Northeast Columbia. Family-friendly service with affordable packages for this established residential community.",
      entityKeywords: ['Woodland Hills', 'Columbia SC', 'Northeast Columbia', 'Richland County'],
      semanticKeywords: ['family neighborhood', 'northeast columbia', 'affordable detailing', 'established community'],
      questionsAnswered: [
        'Is there car detailing in Woodland Hills?',
        'What is affordable detailing in Northeast Columbia?',
        'Do you service Northeast Columbia?'
      ],
      structuredFacts: [
        'Service area: Woodland Hills, Northeast Columbia',
        'Community type: Family-oriented, established',
        'Pricing: Affordable packages available'
      ]
    },
    faqs: [
      {
        question: 'Do you offer affordable packages for families?',
        answer: 'Yes! Our Basic Detail Package at $225 is perfect for family vehicles. We also offer multi-vehicle discounts for households with multiple cars.'
      }
    ],
    featured: false
  },
  {
    slug: 'lake-forest-columbia-sc',
    name: 'Lake Forest',
    city: 'Columbia',
    citySlug: 'columbia-sc',
    state: 'SC',
    zipCodes: ['29206'],
    coordinates: { lat: 34.0123, lng: -80.9678 },
    population: 3800,
    homeValueRange: '$275,000 - $450,000',
    avgHomeValue: 340000,
    characteristics: [
      'Lake community',
      'Family-friendly',
      'Community pool',
      'Near Forest Acres',
      'Established neighborhood'
    ],
    vehicleTypes: ['SUVs', 'Family sedans', 'Trucks', 'Crossovers'],
    description: `Lake Forest is a welcoming community near Forest Acres, featuring lake views, a community pool, and family-friendly atmosphere. This established neighborhood offers quality homes at accessible prices while providing convenient access to Forest Acres shopping and dining.`,
    shortDescription: 'Family-friendly lake community near Forest Acres with community amenities.',
    landmarks: [
      {
        name: 'Lake Forest Community Pool',
        type: 'recreation',
        description: 'Neighborhood pool and gathering area',
        detailingNote: 'Detail your car while the family swims'
      },
      {
        name: 'Trenholm Plaza',
        type: 'shopping',
        description: 'Nearby Forest Acres shopping center',
        detailingNote: 'Convenient location near shopping'
      }
    ],
    adjacentNeighborhoods: ['forest-acres-sc', 'woodland-hills-columbia-sc'],
    popularServices: ['Basic Detail', 'Interior Deep Clean', 'Exterior Wash & Wax'],
    serviceNotes: 'Family community with community amenities. Standard service packages popular.',
    seo: {
      title: 'Car Detailing Lake Forest Columbia SC | Near Forest Acres',
      description: 'Mobile car detailing for Lake Forest community. Near Forest Acres. Family-friendly service.',
      keywords: [
        'lake forest car detailing',
        'forest acres area detailing',
        'columbia sc car wash',
        'family car detailing'
      ],
      ogDescription: 'Mobile auto detailing for Lake Forest near Forest Acres. Family-friendly service.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Lake Forest, a family-friendly lake community near Forest Acres in Columbia, SC. Standard detail packages and interior cleaning for family vehicles.",
      entityKeywords: ['Lake Forest', 'Columbia SC', 'Forest Acres', 'Trenholm Plaza'],
      semanticKeywords: ['lake community', 'family neighborhood', 'community pool', 'forest acres area'],
      questionsAnswered: [
        'Is there car detailing in Lake Forest?',
        'Do you service the Forest Acres area?',
        'What detailing is near Trenholm Plaza?'
      ],
      structuredFacts: [
        'Service area: Lake Forest, near Forest Acres',
        'Community type: Family-friendly, lake community',
        'Nearby: Trenholm Plaza shopping'
      ]
    },
    faqs: [
      {
        question: 'Do you service the Forest Acres area?',
        answer: 'Yes! We serve Lake Forest and all surrounding Forest Acres neighborhoods. Our mobile unit covers the entire area including Trenholm Plaza vicinity.'
      }
    ],
    featured: false
  }
];

// Columbia City Hub Data
export const columbiaCity: City = {
  slug: 'columbia-sc',
  name: 'Columbia',
  state: 'SC',
  description: `Columbia, South Carolina is the state capital and largest city, offering diverse neighborhoods from historic Shandon to exclusive Spring Valley. As the heart of the Midlands, Columbia features excellent schools, cultural attractions, and strong community values. From downtown professionals to suburban families, Columbia residents represent every lifestyle.

Mikah's Mobile Auto Detailing proudly serves all Columbia neighborhoods with professional, convenient mobile service. Whether you're in a historic bungalow or a gated estate, we bring our fully-equipped mobile unit directly to your location.`,
  shortDescription: 'State capital with diverse neighborhoods from historic to exclusive gated communities.',
  coordinates: { lat: 34.0007, lng: -81.0348 },
  population: 136632,
  neighborhoods: [
    'shandon-columbia-sc',
    'heathwood-columbia-sc',
    'spring-valley-columbia-sc',
    'woodland-hills-columbia-sc',
    'lake-forest-columbia-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing Columbia SC | All Neighborhoods Served',
    description: 'Professional mobile car detailing throughout Columbia SC. Serving Shandon, Heathwood, Spring Valley, Five Points & more. 5-star rated.',
    keywords: [
      'auto detailing columbia sc',
      'mobile car detailing columbia',
      'car detailing near me columbia',
      'five points car detailing',
      'columbia ceramic coating',
      'paint correction columbia sc'
    ],
    ogDescription: 'Columbia\'s trusted mobile auto detailing service. All neighborhoods served. 5-star rated.',
    llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services throughout Columbia, South Carolina. Serving all neighborhoods including Shandon, Heathwood, Spring Valley, Woodland Hills, and Lake Forest. From historic neighborhoods to gated communities. IDA certified with 5.0 star rating.",
    entityKeywords: [
      'Columbia SC',
      'Shandon',
      'Heathwood',
      'Spring Valley',
      'Five Points',
      'Forest Acres',
      'State Capital'
    ],
    semanticKeywords: [
      'mobile car detailing',
      'historic neighborhood',
      'gated community',
      'luxury detailing',
      'ceramic coating'
    ],
    questionsAnswered: [
      'Where can I get my car detailed in Columbia SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in Columbia?',
      'Is there mobile detailing near Five Points?',
      'What is the best car detailing in Columbia?'
    ],
    structuredFacts: [
      'Service area: All Columbia SC neighborhoods',
      'Neighborhoods: Shandon, Heathwood, Spring Valley, Woodland Hills, Lake Forest',
      'Specialization: Historic and luxury neighborhoods',
      'Rating: 5.0 stars, IDA Certified'
    ]
  },
  faqs: [
    {
      question: 'What Columbia neighborhoods do you serve?',
      answer: 'We serve all Columbia neighborhoods including Shandon, Heathwood, Spring Valley, Woodland Hills, Lake Forest, Five Points area, Forest Acres, and all surrounding communities. Our mobile service reaches every corner of Columbia!'
    },
    {
      question: 'Do you service gated communities in Columbia?',
      answer: 'Absolutely! We regularly service Spring Valley and other gated communities. We coordinate with gate access and meet all community standards.'
    },
    {
      question: 'Do you specialize in luxury vehicles?',
      answer: 'Yes! Many Columbia neighborhoods like Heathwood and Shandon have luxury and classic vehicles. We provide specialized care with premium products and white-glove service.'
    }
  ]
};

// West Columbia Neighborhoods
export const westColumbiaNeighborhoods: Neighborhood[] = [
  {
    slug: 'triangle-city-west-columbia-sc',
    name: 'Triangle City',
    city: 'West Columbia',
    citySlug: 'west-columbia-sc',
    state: 'SC',
    zipCodes: ['29169'],
    coordinates: { lat: 33.9932, lng: -81.0732 },
    population: 6200,
    homeValueRange: '$180,000 - $350,000',
    avgHomeValue: 245000,
    characteristics: [
      'Historic downtown area',
      'Small-town charm',
      'Walkable streets',
      'Local businesses',
      'Community events'
    ],
    vehicleTypes: ['Trucks', 'SUVs', 'Sedans', 'Work vehicles', 'Family cars'],
    description: `Triangle City is the historic heart of West Columbia, known for its small-town charm and walkable downtown area. This established neighborhood features a mix of historic homes and renovated properties. Residents enjoy local businesses, community events at the Riverwalk, and easy access to both downtown Columbia and the greater Midlands area.`,
    shortDescription: 'Historic downtown West Columbia with small-town charm and walkable streets.',
    landmarks: [
      {
        name: 'West Columbia Riverwalk',
        type: 'park',
        description: 'Scenic riverside walking and biking trail',
        detailingNote: 'Detail your car while enjoying the Riverwalk'
      },
      {
        name: 'Meeting Street District',
        type: 'shopping',
        description: 'Local shops and restaurants',
        detailingNote: 'Keep your vehicle pristine for downtown outings'
      },
      {
        name: 'West Columbia City Hall',
        type: 'government',
        description: 'Historic municipal building',
        detailingNote: 'Professional appearance for city business'
      }
    ],
    adjacentNeighborhoods: ['brookland-west-columbia-sc', 'state-street-west-columbia-sc'],
    popularServices: ['Full Detail', 'Interior Cleaning', 'Fleet Service'],
    serviceNotes: 'Historic neighborhood with diverse vehicle types benefiting from regular maintenance detailing.',
    seo: {
      title: 'Auto Detailing Triangle City West Columbia SC | Downtown Area',
      description: 'Mobile detailing for Triangle City residents. Historic downtown West Columbia. We come to you! Call for free quote.',
      keywords: [
        'triangle city car detailing',
        'west columbia downtown detailing',
        'triangle city mobile wash',
        'west columbia auto detailing',
        'detailing near riverwalk'
      ],
      ogDescription: 'Professional mobile detailing in Triangle City, West Columbia. Historic downtown area served.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Triangle City in historic downtown West Columbia, SC. Professional mobile service for all vehicle types. Near the Riverwalk and Meeting Street District. IDA certified with convenient at-home service.",
      entityKeywords: [
        'Triangle City',
        'West Columbia',
        'Downtown West Columbia',
        'Riverwalk',
        'Meeting Street'
      ],
      semanticKeywords: [
        'mobile car detailing',
        'historic downtown',
        'community service',
        'local business'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Triangle City West Columbia?',
        'Where can I get my car detailed in downtown West Columbia?',
        'Do you serve the Riverwalk area?'
      ],
      structuredFacts: [
        'Location: Triangle City, West Columbia SC',
        'Service type: Mobile detailing at your location',
        'Area: Historic downtown, near Riverwalk',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide mobile detailing in Triangle City?',
        answer: 'Yes! We provide full mobile detailing service throughout Triangle City and downtown West Columbia. We bring all equipment to your home or business.'
      },
      {
        question: 'Can you detail my car near the Riverwalk?',
        answer: 'Absolutely! We serve all areas near the West Columbia Riverwalk. Many customers enjoy a walk while we detail their vehicle.'
      }
    ],
    featured: false
  },
  {
    slug: 'brookland-west-columbia-sc',
    name: 'Brookland',
    city: 'West Columbia',
    citySlug: 'west-columbia-sc',
    state: 'SC',
    zipCodes: ['29169', '29170'],
    coordinates: { lat: 33.9856, lng: -81.0834 },
    population: 5800,
    homeValueRange: '$200,000 - $400,000',
    avgHomeValue: 285000,
    characteristics: [
      'Established neighborhood',
      'Family-oriented',
      'Tree-lined streets',
      'Near Congaree River',
      'Community parks'
    ],
    vehicleTypes: ['SUVs', 'Minivans', 'Trucks', 'Family sedans', 'Boats/trailers'],
    description: `Brookland is an established family neighborhood in West Columbia known for its tree-lined streets and proximity to the Congaree River. The area features well-maintained homes and a strong sense of community. Residents enjoy outdoor recreation, local parks, and convenient access to both West Columbia amenities and downtown Columbia.`,
    shortDescription: 'Established family neighborhood with tree-lined streets near the Congaree River.',
    landmarks: [
      {
        name: 'Congaree River',
        type: 'park',
        description: 'River access for fishing and kayaking',
        detailingNote: 'Post-river trip vehicle cleaning available'
      },
      {
        name: 'Brookland Park',
        type: 'park',
        description: 'Neighborhood park with playground',
        detailingNote: 'Detail your car while kids play'
      },
      {
        name: 'Saluda Shoals Park',
        type: 'park',
        description: 'Large regional park nearby',
        detailingNote: 'Keep your vehicle clean after outdoor adventures'
      }
    ],
    adjacentNeighborhoods: ['triangle-city-west-columbia-sc', 'riverland-park-west-columbia-sc'],
    popularServices: ['Family Vehicle Detail', 'SUV Cleaning', 'Boat/Trailer Wash'],
    serviceNotes: 'Family-oriented area with many SUVs and outdoor recreation vehicles needing regular cleaning.',
    seo: {
      title: 'Auto Detailing Brookland West Columbia SC | Family Neighborhood',
      description: 'Mobile detailing for Brookland families. Near Congaree River. SUV and family vehicle specialists. We come to you!',
      keywords: [
        'brookland car detailing',
        'west columbia family detailing',
        'brookland mobile wash',
        'suv detailing west columbia',
        'congaree river area detailing'
      ],
      ogDescription: 'Professional mobile detailing in Brookland, West Columbia. Family vehicle specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Brookland neighborhood in West Columbia, SC. Specializing in family vehicles and SUVs. Near Congaree River and Saluda Shoals Park. Convenient mobile service at your home.",
      entityKeywords: [
        'Brookland',
        'West Columbia',
        'Congaree River',
        'Saluda Shoals',
        'Family neighborhood'
      ],
      semanticKeywords: [
        'family vehicle detailing',
        'suv cleaning',
        'mobile service',
        'outdoor adventure'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Brookland West Columbia?',
        'Do you clean SUVs and family vehicles?',
        'Can you detail my car near Saluda Shoals?'
      ],
      structuredFacts: [
        'Location: Brookland, West Columbia SC',
        'Specialty: Family vehicles, SUVs',
        'Nearby: Congaree River, Saluda Shoals Park',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you detail family vehicles in Brookland?',
        answer: 'Yes! We specialize in family vehicles, SUVs, and minivans. We understand the unique cleaning needs of families with children and pets.'
      },
      {
        question: 'Can you clean my boat or trailer?',
        answer: 'Absolutely! Many Brookland residents enjoy the Congaree River. We offer boat and trailer cleaning services to keep your recreational equipment in great shape.'
      }
    ],
    featured: false
  },
  {
    slug: 'state-street-west-columbia-sc',
    name: 'State Street',
    city: 'West Columbia',
    citySlug: 'west-columbia-sc',
    state: 'SC',
    zipCodes: ['29169'],
    coordinates: { lat: 33.9945, lng: -81.0656 },
    population: 4500,
    homeValueRange: '$150,000 - $300,000',
    avgHomeValue: 215000,
    characteristics: [
      'Central corridor',
      'Mixed residential/commercial',
      'Convenient location',
      'Easy highway access',
      'Growing area'
    ],
    vehicleTypes: ['Sedans', 'Trucks', 'Work vehicles', 'Commuter cars', 'Economy vehicles'],
    description: `The State Street corridor is a central West Columbia area offering convenient access to I-26 and downtown Columbia. This growing neighborhood features a mix of residential homes and local businesses. Residents appreciate the practical location, affordable housing, and quick commute to employment centers throughout the Midlands.`,
    shortDescription: 'Central West Columbia corridor with convenient highway access and affordable homes.',
    landmarks: [
      {
        name: 'I-26 Access',
        type: 'transport',
        description: 'Quick interstate access',
        detailingNote: 'Keep your commuter vehicle in top shape'
      },
      {
        name: 'State Street Shops',
        type: 'shopping',
        description: 'Local retail and services',
        detailingNote: 'Mobile service while you shop nearby'
      },
      {
        name: 'West Columbia Fire Station',
        type: 'community',
        description: 'Community safety center',
        detailingNote: 'Fleet service available for local businesses'
      }
    ],
    adjacentNeighborhoods: ['triangle-city-west-columbia-sc', 'sunset-blvd-west-columbia-sc'],
    popularServices: ['Basic Detail', 'Commuter Package', 'Fleet Service'],
    serviceNotes: 'Central location with many commuter vehicles and work trucks needing regular maintenance cleaning.',
    seo: {
      title: 'Auto Detailing State Street West Columbia SC | Central Location',
      description: 'Mobile detailing for State Street area. Central West Columbia. Commuter and work vehicle specialists. We come to you!',
      keywords: [
        'state street car detailing',
        'west columbia central detailing',
        'state street mobile wash',
        'commuter car detailing',
        'work truck cleaning west columbia'
      ],
      ogDescription: 'Professional mobile detailing on State Street, West Columbia. Convenient central location.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves the State Street corridor in West Columbia, SC. Convenient central location near I-26. Specializing in commuter vehicles and work trucks. Mobile service at your home or business.",
      entityKeywords: [
        'State Street',
        'West Columbia',
        'I-26 corridor',
        'Central West Columbia'
      ],
      semanticKeywords: [
        'commuter detailing',
        'work vehicle cleaning',
        'convenient service',
        'mobile detailing'
      ],
      questionsAnswered: [
        'Is there mobile detailing near State Street?',
        'Do you clean work trucks?',
        'Can you detail my commuter car?'
      ],
      structuredFacts: [
        'Location: State Street, West Columbia SC',
        'Specialty: Commuter and work vehicles',
        'Access: Near I-26',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you offer fleet services on State Street?',
        answer: 'Yes! We offer fleet detailing services for local businesses along State Street. Volume discounts available for regular fleet maintenance.'
      },
      {
        question: 'Can you detail my work truck?',
        answer: 'Absolutely! We specialize in work trucks and commercial vehicles. We can handle the tough cleaning jobs that come with work vehicles.'
      }
    ],
    featured: false
  },
  {
    slug: 'sunset-blvd-west-columbia-sc',
    name: 'Sunset Boulevard',
    city: 'West Columbia',
    citySlug: 'west-columbia-sc',
    state: 'SC',
    zipCodes: ['29169', '29172'],
    coordinates: { lat: 33.9878, lng: -81.0923 },
    population: 7200,
    homeValueRange: '$175,000 - $350,000',
    avgHomeValue: 255000,
    characteristics: [
      'Major commercial corridor',
      'Suburban residential',
      'Shopping centers',
      'Restaurant row',
      'Family homes'
    ],
    vehicleTypes: ['SUVs', 'Trucks', 'Sedans', 'Family vehicles', 'Luxury cars'],
    description: `Sunset Boulevard is West Columbia's major commercial and residential corridor, featuring a mix of shopping centers, restaurants, and established suburban neighborhoods. Families appreciate the convenient access to retail, dining, and services while enjoying quiet residential streets just off the main boulevard.`,
    shortDescription: 'Major commercial corridor with suburban neighborhoods and convenient shopping.',
    landmarks: [
      {
        name: 'Sunset Boulevard Shopping',
        type: 'shopping',
        description: 'Major retail and dining destination',
        detailingNote: 'Detail your car while you shop'
      },
      {
        name: 'Lexington Medical Center West',
        type: 'medical',
        description: 'Regional healthcare facility',
        detailingNote: 'Service available for healthcare workers'
      },
      {
        name: 'Airport Boulevard',
        type: 'transport',
        description: 'Connection to Columbia Metropolitan Airport',
        detailingNote: 'Pre-travel and post-travel detailing'
      }
    ],
    adjacentNeighborhoods: ['state-street-west-columbia-sc', 'riverland-park-west-columbia-sc'],
    popularServices: ['Full Detail', 'Interior Deep Clean', 'Pre-Travel Detail'],
    serviceNotes: 'Busy corridor with diverse vehicle types, many families and professionals.',
    seo: {
      title: 'Auto Detailing Sunset Boulevard West Columbia SC | Shopping Area',
      description: 'Mobile detailing for Sunset Boulevard area. Major West Columbia corridor. Family and professional vehicle specialists.',
      keywords: [
        'sunset boulevard car detailing',
        'west columbia shopping area detailing',
        'sunset blvd mobile wash',
        'family car detailing west columbia',
        'lexington medical center area detailing'
      ],
      ogDescription: 'Professional mobile detailing on Sunset Boulevard, West Columbia. Convenient shopping area.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Sunset Boulevard corridor in West Columbia, SC. Major shopping and residential area. Near Lexington Medical Center. Convenient mobile service for families and professionals.",
      entityKeywords: [
        'Sunset Boulevard',
        'West Columbia',
        'Lexington Medical Center',
        'Airport Boulevard',
        'Shopping district'
      ],
      semanticKeywords: [
        'shopping area detailing',
        'family vehicle service',
        'convenient location',
        'professional service'
      ],
      questionsAnswered: [
        'Is there mobile detailing near Sunset Boulevard?',
        'Do you serve the Lexington Medical Center area?',
        'Can you detail my car while I shop?'
      ],
      structuredFacts: [
        'Location: Sunset Boulevard, West Columbia SC',
        'Nearby: Shopping, Lexington Medical Center, Airport',
        'Specialty: Family and professional vehicles',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you serve the Sunset Boulevard shopping area?',
        answer: 'Yes! We serve all areas along Sunset Boulevard. We can detail your vehicle at home or even while you shop at nearby centers.'
      },
      {
        question: 'Do you offer services near Lexington Medical Center?',
        answer: 'Absolutely! We serve healthcare workers and patients in the Lexington Medical Center West area. Convenient scheduling around shifts available.'
      }
    ],
    featured: false
  },
  {
    slug: 'riverland-park-west-columbia-sc',
    name: 'Riverland Park',
    city: 'West Columbia',
    citySlug: 'west-columbia-sc',
    state: 'SC',
    zipCodes: ['29169'],
    coordinates: { lat: 33.9789, lng: -81.0756 },
    population: 4800,
    homeValueRange: '$225,000 - $425,000',
    avgHomeValue: 315000,
    characteristics: [
      'Newer development',
      'Modern homes',
      'Young professionals',
      'Near Cayce border',
      'River access'
    ],
    vehicleTypes: ['New SUVs', 'Luxury sedans', 'Electric vehicles', 'Sports cars', 'Trucks'],
    description: `Riverland Park is a growing neighborhood in West Columbia featuring newer homes and modern amenities. Popular with young professionals and growing families, this area offers contemporary living with easy access to the Congaree River and nearby Cayce. Residents enjoy newer construction, well-maintained streets, and a vibrant community atmosphere.`,
    shortDescription: 'Growing neighborhood with modern homes popular with young professionals.',
    landmarks: [
      {
        name: 'Congaree River Access',
        type: 'park',
        description: 'River recreation and kayaking',
        detailingNote: 'Post-adventure vehicle cleaning'
      },
      {
        name: 'Cayce Riverwalk',
        type: 'park',
        description: 'Nearby walking and biking trails',
        detailingNote: 'Keep your vehicle pristine for outdoor activities'
      },
      {
        name: '12 Mile Creek Greenway',
        type: 'park',
        description: 'Nature trail and outdoor recreation',
        detailingNote: 'Detail your car while enjoying nature'
      }
    ],
    adjacentNeighborhoods: ['brookland-west-columbia-sc', 'sunset-blvd-west-columbia-sc'],
    popularServices: ['Premium Detail', 'Ceramic Coating', 'New Car Protection'],
    serviceNotes: 'Newer neighborhood with many new vehicles and young professionals interested in premium services.',
    seo: {
      title: 'Auto Detailing Riverland Park West Columbia SC | Modern Neighborhood',
      description: 'Premium mobile detailing for Riverland Park. Newer West Columbia neighborhood. Ceramic coating and paint protection specialists.',
      keywords: [
        'riverland park car detailing',
        'west columbia new homes detailing',
        'riverland park mobile wash',
        'premium detailing west columbia',
        'ceramic coating near cayce'
      ],
      ogDescription: 'Premium mobile detailing in Riverland Park, West Columbia. Modern neighborhood specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Riverland Park in West Columbia, SC. Growing neighborhood with newer homes. Specializing in premium services including ceramic coating and paint protection. Near Congaree River and Cayce border.",
      entityKeywords: [
        'Riverland Park',
        'West Columbia',
        'Cayce border',
        'Congaree River',
        'Modern neighborhood'
      ],
      semanticKeywords: [
        'premium detailing',
        'ceramic coating',
        'new vehicle protection',
        'young professional'
      ],
      questionsAnswered: [
        'Is there premium detailing in Riverland Park?',
        'Do you offer ceramic coating in West Columbia?',
        'Can you protect my new car?'
      ],
      structuredFacts: [
        'Location: Riverland Park, West Columbia SC',
        'Specialty: Premium services, ceramic coating',
        'Demographics: Young professionals, new homes',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you offer ceramic coating in Riverland Park?',
        answer: 'Yes! Ceramic coating is one of our most popular services in Riverland Park. We offer professional-grade ceramic protection perfect for new vehicles.'
      },
      {
        question: 'Can you protect my new car from the elements?',
        answer: 'Absolutely! We offer new car protection packages including ceramic coating, paint protection film consultation, and interior protection treatments.'
      }
    ],
    featured: false
  }
];

// West Columbia City Hub Data
export const westColumbiaCity: City = {
  slug: 'west-columbia-sc',
  name: 'West Columbia',
  state: 'SC',
  description: `West Columbia, South Carolina is a charming city just across the river from downtown Columbia. Known for its historic Triangle City downtown, growing neighborhoods, and convenient access to the Congaree River, West Columbia offers affordable living with big-city amenities nearby. From established neighborhoods to newer developments, West Columbia serves a diverse community.

Mikah's Mobile Auto Detailing proudly serves all West Columbia neighborhoods with professional, convenient mobile service. Whether you're in historic Triangle City or growing Riverland Park, we bring our fully-equipped mobile unit directly to your location.`,
  shortDescription: 'Charming river city with historic downtown and growing neighborhoods.',
  coordinates: { lat: 33.9932, lng: -81.0732 },
  population: 17782,
  neighborhoods: [
    'triangle-city-west-columbia-sc',
    'brookland-west-columbia-sc',
    'state-street-west-columbia-sc',
    'sunset-blvd-west-columbia-sc',
    'riverland-park-west-columbia-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing West Columbia SC | All Neighborhoods Served',
    description: 'Professional mobile car detailing throughout West Columbia SC. Serving Triangle City, Brookland, Sunset Blvd & more. 5-star rated.',
    keywords: [
      'auto detailing west columbia sc',
      'mobile car detailing west columbia',
      'car detailing near me west columbia',
      'triangle city car detailing',
      'west columbia ceramic coating',
      'paint correction west columbia sc'
    ],
    ogDescription: 'West Columbia\'s trusted mobile auto detailing service. All neighborhoods served. 5-star rated.',
    llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services throughout West Columbia, South Carolina. Serving all neighborhoods including Triangle City, Brookland, State Street, Sunset Boulevard, and Riverland Park. From historic downtown to newer developments. IDA certified with 5.0 star rating.",
    entityKeywords: [
      'West Columbia SC',
      'Triangle City',
      'Brookland',
      'Sunset Boulevard',
      'Riverwalk',
      'Congaree River'
    ],
    semanticKeywords: [
      'mobile car detailing',
      'historic downtown',
      'river city',
      'family neighborhood',
      'ceramic coating'
    ],
    questionsAnswered: [
      'Where can I get my car detailed in West Columbia SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in West Columbia?',
      'Is there mobile detailing near Triangle City?',
      'What is the best car detailing in West Columbia?'
    ],
    structuredFacts: [
      'Service area: All West Columbia SC neighborhoods',
      'Neighborhoods: Triangle City, Brookland, State Street, Sunset Blvd, Riverland Park',
      'Specialization: Historic and growing neighborhoods',
      'Rating: 5.0 stars, IDA Certified'
    ]
  },
  faqs: [
    {
      question: 'What West Columbia neighborhoods do you serve?',
      answer: 'We serve all West Columbia neighborhoods including Triangle City, Brookland, State Street, Sunset Boulevard, Riverland Park, and all surrounding communities. Our mobile service reaches every corner of West Columbia!'
    },
    {
      question: 'Do you service areas near the Riverwalk?',
      answer: 'Absolutely! We regularly service homes near the West Columbia Riverwalk and Congaree River areas. Many customers enjoy a walk while we detail their vehicle.'
    },
    {
      question: 'Is West Columbia in your service area?',
      answer: 'Yes! West Columbia is a core part of our service area. We provide the same great mobile detailing service to West Columbia as we do to Columbia, Lexington, and Irmo.'
    }
  ]
};

// Blythewood Neighborhoods
export const blythewoodNeighborhoods: Neighborhood[] = [
  {
    slug: 'cobblestone-park-blythewood-sc',
    name: 'Cobblestone Park',
    city: 'Blythewood',
    citySlug: 'blythewood-sc',
    state: 'SC',
    zipCodes: ['29016'],
    coordinates: { lat: 34.1847, lng: -80.9712 },
    population: 4200,
    homeValueRange: '$400,000 - $900,000',
    avgHomeValue: 625000,
    characteristics: [
      'Golf course community',
      'Luxury homes',
      'Gated sections',
      'Executive professionals',
      'Country club amenities'
    ],
    vehicleTypes: ['Luxury SUVs', 'Mercedes', 'BMW', 'Lexus', 'Porsche', 'Golf carts'],
    description: `Cobblestone Park is Blythewood's premier golf course community featuring luxury homes and country club amenities. This upscale neighborhood attracts executives and professionals who appreciate fine living. Residents enjoy the championship golf course, clubhouse, and beautifully landscaped grounds. Homes range from elegant single-family residences to custom-built estates.`,
    shortDescription: 'Premier golf course community with luxury homes and country club amenities.',
    landmarks: [
      {
        name: 'Cobblestone Park Golf Club',
        type: 'recreation',
        description: 'Championship golf course and clubhouse',
        detailingNote: 'Keep your vehicle pristine for the clubhouse'
      },
      {
        name: 'Community Clubhouse',
        type: 'community',
        description: 'Social hub with dining and events',
        detailingNote: 'Premium detailing for club events'
      },
      {
        name: 'Walking Trails',
        type: 'park',
        description: 'Scenic paths throughout the community',
        detailingNote: 'Detail your car while enjoying the grounds'
      }
    ],
    adjacentNeighborhoods: ['preserve-doko-meadows-blythewood-sc', 'longtown-blythewood-sc'],
    popularServices: ['Premium Detail', 'Ceramic Coating', 'Paint Correction', 'Luxury Car Care'],
    serviceNotes: 'Upscale golf community with primarily luxury vehicles requiring specialized premium care.',
    seo: {
      title: 'Auto Detailing Cobblestone Park Blythewood SC | Golf Community',
      description: 'Premium mobile detailing for Cobblestone Park residents. Luxury vehicle specialists. Golf course community. We come to you!',
      keywords: [
        'cobblestone park car detailing',
        'blythewood golf community detailing',
        'cobblestone park mobile wash',
        'luxury car detailing blythewood',
        'golf course community detailing'
      ],
      ogDescription: 'Premium mobile detailing in Cobblestone Park, Blythewood. Luxury vehicle specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Cobblestone Park golf community in Blythewood, SC. Specializing in luxury vehicles including Mercedes, BMW, Lexus, and Porsche. Premium ceramic coating and paint correction. White-glove service for discerning residents.",
      entityKeywords: [
        'Cobblestone Park',
        'Blythewood',
        'Golf course community',
        'Luxury homes',
        'Country club'
      ],
      semanticKeywords: [
        'luxury car detailing',
        'premium service',
        'ceramic coating',
        'executive vehicles'
      ],
      questionsAnswered: [
        'Is there luxury car detailing in Cobblestone Park?',
        'Do you serve golf communities in Blythewood?',
        'Can you detail my Mercedes at home?'
      ],
      structuredFacts: [
        'Location: Cobblestone Park, Blythewood SC',
        'Community type: Golf course community',
        'Specialty: Luxury vehicles, ceramic coating',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide luxury car detailing in Cobblestone Park?',
        answer: 'Yes! We specialize in luxury vehicles and serve many Cobblestone Park residents. Our premium services include ceramic coating, paint correction, and white-glove interior care.'
      },
      {
        question: 'Can you work with gated community access?',
        answer: 'Absolutely! We regularly service gated communities. Simply provide gate access and we coordinate arrival seamlessly.'
      }
    ],
    featured: true
  },
  {
    slug: 'preserve-doko-meadows-blythewood-sc',
    name: 'The Preserve at Doko Meadows',
    city: 'Blythewood',
    citySlug: 'blythewood-sc',
    state: 'SC',
    zipCodes: ['29016'],
    coordinates: { lat: 34.1923, lng: -80.9845 },
    population: 3100,
    homeValueRange: '$350,000 - $650,000',
    avgHomeValue: 485000,
    characteristics: [
      'Newer development',
      'Family-friendly',
      'Modern homes',
      'Walking trails',
      'Community amenities'
    ],
    vehicleTypes: ['SUVs', 'Luxury sedans', 'Trucks', 'Family vehicles', 'Electric vehicles'],
    description: `The Preserve at Doko Meadows is a sought-after newer development in Blythewood featuring modern homes and excellent community amenities. Popular with young professionals and growing families, this neighborhood offers walking trails, open spaces, and a strong sense of community. Residents appreciate the newer construction, energy-efficient homes, and proximity to excellent schools.`,
    shortDescription: 'Sought-after newer development with modern homes and family amenities.',
    landmarks: [
      {
        name: 'Doko Meadows Park',
        type: 'park',
        description: 'Community green space and walking trails',
        detailingNote: 'Detail your car while enjoying the park'
      },
      {
        name: 'Blythewood High School',
        type: 'school',
        description: 'Top-rated high school nearby',
        detailingNote: 'Convenient service for busy parents'
      },
      {
        name: 'Community Pool',
        type: 'recreation',
        description: 'Neighborhood pool and pavilion',
        detailingNote: 'Summer detailing while at the pool'
      }
    ],
    adjacentNeighborhoods: ['cobblestone-park-blythewood-sc', 'creekside-blythewood-sc'],
    popularServices: ['Family Vehicle Detail', 'SUV Cleaning', 'New Car Protection'],
    serviceNotes: 'Newer community with many new vehicles and families interested in maintaining their investment.',
    seo: {
      title: 'Auto Detailing Preserve at Doko Meadows Blythewood SC',
      description: 'Mobile detailing for Doko Meadows residents. Modern Blythewood neighborhood. Family vehicle specialists. We come to you!',
      keywords: [
        'doko meadows car detailing',
        'preserve blythewood detailing',
        'doko meadows mobile wash',
        'family car detailing blythewood',
        'new home community detailing'
      ],
      ogDescription: 'Professional mobile detailing in The Preserve at Doko Meadows, Blythewood.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves The Preserve at Doko Meadows in Blythewood, SC. Modern community with newer homes. Specializing in family vehicles and SUVs. New car protection packages available. Convenient mobile service.",
      entityKeywords: [
        'Doko Meadows',
        'The Preserve',
        'Blythewood',
        'Newer development',
        'Family community'
      ],
      semanticKeywords: [
        'family vehicle detailing',
        'new car protection',
        'suv cleaning',
        'modern homes'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Doko Meadows?',
        'Do you serve The Preserve in Blythewood?',
        'Can you protect my new car?'
      ],
      structuredFacts: [
        'Location: The Preserve at Doko Meadows, Blythewood SC',
        'Community type: Newer family development',
        'Specialty: Family vehicles, new car protection',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you offer new car protection in Doko Meadows?',
        answer: 'Yes! Many Doko Meadows residents have newer vehicles. We offer ceramic coating, paint protection, and interior protection to keep your investment looking new.'
      },
      {
        question: 'Can you detail family vehicles with car seats?',
        answer: 'Absolutely! We specialize in family vehicles and carefully work around car seats. We can also clean and sanitize car seats as part of our service.'
      }
    ],
    featured: false
  },
  {
    slug: 'creekside-blythewood-sc',
    name: 'Creekside',
    city: 'Blythewood',
    citySlug: 'blythewood-sc',
    state: 'SC',
    zipCodes: ['29016'],
    coordinates: { lat: 34.1756, lng: -80.9623 },
    population: 2800,
    homeValueRange: '$300,000 - $500,000',
    avgHomeValue: 385000,
    characteristics: [
      'Established neighborhood',
      'Wooded lots',
      'Family-oriented',
      'Good schools',
      'Quiet streets'
    ],
    vehicleTypes: ['SUVs', 'Trucks', 'Sedans', 'Family vehicles', 'Boats'],
    description: `Creekside is an established family neighborhood in Blythewood known for its wooded lots and quiet, tree-lined streets. This community attracts families who appreciate larger lots, mature landscaping, and excellent access to top-rated Blythewood schools. Residents enjoy a peaceful suburban lifestyle with convenient access to I-77 and Columbia.`,
    shortDescription: 'Established family neighborhood with wooded lots and quiet streets.',
    landmarks: [
      {
        name: 'Blythewood Elementary',
        type: 'school',
        description: 'Nearby elementary school',
        detailingNote: 'Convenient service for school parents'
      },
      {
        name: 'Doko Manor Park',
        type: 'park',
        description: 'Nearby community park',
        detailingNote: 'Detail while kids enjoy the park'
      },
      {
        name: 'I-77 Access',
        type: 'transport',
        description: 'Quick interstate access',
        detailingNote: 'Keep your commuter vehicle clean'
      }
    ],
    adjacentNeighborhoods: ['preserve-doko-meadows-blythewood-sc', 'muller-road-blythewood-sc'],
    popularServices: ['Full Detail', 'SUV Cleaning', 'Boat Cleaning'],
    serviceNotes: 'Established family area with diverse vehicles including boats and recreational equipment.',
    seo: {
      title: 'Auto Detailing Creekside Blythewood SC | Family Neighborhood',
      description: 'Mobile detailing for Creekside residents. Established Blythewood neighborhood. Family vehicle specialists. We come to you!',
      keywords: [
        'creekside car detailing',
        'creekside blythewood detailing',
        'creekside mobile wash',
        'family car detailing blythewood',
        'established neighborhood detailing'
      ],
      ogDescription: 'Professional mobile detailing in Creekside, Blythewood. Family neighborhood specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Creekside neighborhood in Blythewood, SC. Established family community with wooded lots. Specializing in family vehicles, SUVs, and boat cleaning. Convenient mobile service.",
      entityKeywords: [
        'Creekside',
        'Blythewood',
        'Established neighborhood',
        'Family community',
        'Wooded lots'
      ],
      semanticKeywords: [
        'family vehicle detailing',
        'suv cleaning',
        'established community',
        'mobile service'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Creekside Blythewood?',
        'Do you clean boats and trailers?',
        'Can you detail my SUV at home?'
      ],
      structuredFacts: [
        'Location: Creekside, Blythewood SC',
        'Community type: Established family neighborhood',
        'Specialty: Family vehicles, SUVs, boats',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide mobile detailing in Creekside?',
        answer: 'Yes! We serve all of Creekside neighborhood with full mobile detailing. We bring all equipment to your driveway.'
      },
      {
        question: 'Can you clean my boat?',
        answer: 'Absolutely! Many Creekside residents have boats for Lake Murray. We offer boat and trailer cleaning services.'
      }
    ],
    featured: false
  },
  {
    slug: 'muller-road-blythewood-sc',
    name: 'Muller Road',
    city: 'Blythewood',
    citySlug: 'blythewood-sc',
    state: 'SC',
    zipCodes: ['29016'],
    coordinates: { lat: 34.1634, lng: -80.9534 },
    population: 3500,
    homeValueRange: '$275,000 - $475,000',
    avgHomeValue: 365000,
    characteristics: [
      'Growing area',
      'Mix of new and established',
      'Convenient location',
      'Near shopping',
      'Easy commute'
    ],
    vehicleTypes: ['SUVs', 'Trucks', 'Sedans', 'Commuter cars', 'Work vehicles'],
    description: `The Muller Road area is a growing section of Blythewood featuring a mix of newer developments and established homes. Popular with commuters, this area offers convenient access to I-77 and downtown Columbia while maintaining Blythewood's suburban charm. Residents enjoy nearby shopping, restaurants, and excellent schools.`,
    shortDescription: 'Growing area with convenient location and easy commute access.',
    landmarks: [
      {
        name: 'Blythewood Town Center',
        type: 'shopping',
        description: 'Local shopping and dining',
        detailingNote: 'Detail while you shop nearby'
      },
      {
        name: 'I-77 Interchange',
        type: 'transport',
        description: 'Major interstate access',
        detailingNote: 'Keep your commuter car clean'
      },
      {
        name: 'Blythewood Farms',
        type: 'shopping',
        description: 'Shopping center nearby',
        detailingNote: 'Convenient service for busy schedules'
      }
    ],
    adjacentNeighborhoods: ['creekside-blythewood-sc', 'longtown-blythewood-sc'],
    popularServices: ['Basic Detail', 'Commuter Package', 'Truck Cleaning'],
    serviceNotes: 'Growing area with many commuters and work vehicles benefiting from regular maintenance.',
    seo: {
      title: 'Auto Detailing Muller Road Blythewood SC | Convenient Location',
      description: 'Mobile detailing for Muller Road area. Growing Blythewood neighborhood. Commuter and truck specialists. We come to you!',
      keywords: [
        'muller road car detailing',
        'muller road blythewood detailing',
        'muller road mobile wash',
        'commuter car detailing blythewood',
        'truck cleaning blythewood'
      ],
      ogDescription: 'Professional mobile detailing in Muller Road area, Blythewood. Convenient location.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves the Muller Road area in Blythewood, SC. Growing community with convenient I-77 access. Specializing in commuter vehicles and trucks. Flexible scheduling for busy professionals.",
      entityKeywords: [
        'Muller Road',
        'Blythewood',
        'I-77 corridor',
        'Growing area',
        'Commuter friendly'
      ],
      semanticKeywords: [
        'commuter car detailing',
        'truck cleaning',
        'convenient service',
        'flexible scheduling'
      ],
      questionsAnswered: [
        'Is there mobile detailing near Muller Road?',
        'Do you clean work trucks?',
        'Can you detail my car before my commute?'
      ],
      structuredFacts: [
        'Location: Muller Road, Blythewood SC',
        'Convenience: Near I-77, shopping',
        'Specialty: Commuter cars, trucks',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you serve the Muller Road area?',
        answer: 'Yes! We serve all areas along Muller Road and nearby neighborhoods. Convenient access to I-77 makes this a quick trip for our mobile unit.'
      },
      {
        question: 'Can you work around my commute schedule?',
        answer: 'Absolutely! We offer flexible scheduling including early morning and evening appointments for busy commuters.'
      }
    ],
    featured: false
  },
  {
    slug: 'longtown-blythewood-sc',
    name: 'Longtown',
    city: 'Blythewood',
    citySlug: 'blythewood-sc',
    state: 'SC',
    zipCodes: ['29016'],
    coordinates: { lat: 34.2012, lng: -80.9423 },
    population: 2400,
    homeValueRange: '$450,000 - $1,200,000',
    avgHomeValue: 725000,
    characteristics: [
      'Estate properties',
      'Large acreage',
      'Equestrian friendly',
      'Privacy',
      'Exclusive'
    ],
    vehicleTypes: ['Luxury SUVs', 'Trucks', 'Farm vehicles', 'Horse trailers', 'Range Rovers', 'Mercedes'],
    description: `Longtown is Blythewood's most exclusive area featuring estate properties on large acreage. This equestrian-friendly community attracts discerning residents who value privacy, space, and country living with city convenience. Properties often include horse facilities, private ponds, and custom-built homes. Longtown represents the pinnacle of Blythewood living.`,
    shortDescription: 'Exclusive estate properties with large acreage and equestrian facilities.',
    landmarks: [
      {
        name: 'Longtown Farms',
        type: 'community',
        description: 'Historic farming community',
        detailingNote: 'Estate service for large properties'
      },
      {
        name: 'Private Equestrian Facilities',
        type: 'recreation',
        description: 'Horse farms and stables',
        detailingNote: 'We clean horse trailers and farm vehicles'
      },
      {
        name: 'Rural Blythewood',
        type: 'community',
        description: 'Scenic country setting',
        detailingNote: 'Private estate detailing service'
      }
    ],
    adjacentNeighborhoods: ['cobblestone-park-blythewood-sc', 'muller-road-blythewood-sc'],
    popularServices: ['Premium Estate Detail', 'Ceramic Coating', 'Horse Trailer Cleaning', 'Fleet Service'],
    serviceNotes: 'Exclusive estate area with luxury vehicles and equestrian equipment requiring specialized care.',
    seo: {
      title: 'Auto Detailing Longtown Blythewood SC | Estate Properties',
      description: 'Premium mobile detailing for Longtown estates. Luxury vehicle and horse trailer specialists. Exclusive Blythewood area. We come to you!',
      keywords: [
        'longtown car detailing',
        'longtown blythewood detailing',
        'estate property detailing',
        'luxury car detailing blythewood',
        'horse trailer cleaning blythewood'
      ],
      ogDescription: 'Premium mobile detailing for Longtown estates, Blythewood. Luxury and equestrian specialists.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Longtown estate properties in Blythewood, SC. Exclusive area with large acreage and equestrian facilities. Specializing in luxury vehicles, horse trailers, and estate fleet service. White-glove premium care.",
      entityKeywords: [
        'Longtown',
        'Blythewood',
        'Estate properties',
        'Equestrian',
        'Luxury homes'
      ],
      semanticKeywords: [
        'estate detailing',
        'luxury service',
        'horse trailer cleaning',
        'premium care'
      ],
      questionsAnswered: [
        'Is there premium detailing in Longtown?',
        'Do you clean horse trailers?',
        'Can you service estate properties?'
      ],
      structuredFacts: [
        'Location: Longtown, Blythewood SC',
        'Property type: Estate properties, acreage',
        'Specialty: Luxury vehicles, horse trailers',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide estate service in Longtown?',
        answer: 'Yes! We specialize in estate properties and can service multiple vehicles, horse trailers, and farm equipment on your Longtown property.'
      },
      {
        question: 'Can you clean horse trailers?',
        answer: 'Absolutely! We offer horse trailer cleaning services for Longtown equestrian residents. We understand the unique cleaning needs of equestrian equipment.'
      }
    ],
    featured: false
  }
];

// Blythewood City Hub Data
export const blythewoodCity: City = {
  slug: 'blythewood-sc',
  name: 'Blythewood',
  state: 'SC',
  description: `Blythewood, South Carolina is one of the most desirable communities in the Midlands, known for its excellent schools, upscale neighborhoods, and country club living. From the prestigious Cobblestone Park golf community to the estate properties of Longtown, Blythewood attracts discerning residents who appreciate quality living.

Mikah's Mobile Auto Detailing proudly serves all Blythewood neighborhoods with premium mobile service. Whether you're in a golf course community or an estate property, we bring our fully-equipped mobile unit directly to your location with white-glove service.`,
  shortDescription: 'Upscale community with golf courses, estates, and excellent schools.',
  coordinates: { lat: 34.1846, lng: -80.9739 },
  population: 27000,
  neighborhoods: [
    'cobblestone-park-blythewood-sc',
    'preserve-doko-meadows-blythewood-sc',
    'creekside-blythewood-sc',
    'muller-road-blythewood-sc',
    'longtown-blythewood-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing Blythewood SC | All Neighborhoods Served',
    description: 'Premium mobile car detailing throughout Blythewood SC. Serving Cobblestone Park, Doko Meadows, Longtown & more. Luxury vehicle specialists. 5-star rated.',
    keywords: [
      'auto detailing blythewood sc',
      'mobile car detailing blythewood',
      'car detailing near me blythewood',
      'cobblestone park car detailing',
      'blythewood ceramic coating',
      'luxury car detailing blythewood'
    ],
    ogDescription: 'Blythewood\'s trusted mobile auto detailing service. Luxury vehicle specialists. All neighborhoods served. 5-star rated.',
    llmoSummary: "Mikah's Mobile Auto Detailing provides premium car detailing services throughout Blythewood, South Carolina. Serving all neighborhoods including Cobblestone Park, The Preserve at Doko Meadows, Creekside, Muller Road, and Longtown estates. Luxury vehicle and equestrian specialists. IDA certified with 5.0 star rating.",
    entityKeywords: [
      'Blythewood SC',
      'Cobblestone Park',
      'Doko Meadows',
      'Longtown',
      'Golf community',
      'Estate properties'
    ],
    semanticKeywords: [
      'luxury car detailing',
      'premium service',
      'golf community',
      'estate detailing',
      'ceramic coating'
    ],
    questionsAnswered: [
      'Where can I get luxury car detailing in Blythewood SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in Blythewood?',
      'Is there premium mobile detailing in Cobblestone Park?',
      'What is the best car detailing in Blythewood?'
    ],
    structuredFacts: [
      'Service area: All Blythewood SC neighborhoods',
      'Neighborhoods: Cobblestone Park, Doko Meadows, Creekside, Muller Road, Longtown',
      'Specialization: Luxury vehicles, estates, equestrian',
      'Rating: 5.0 stars, IDA Certified'
    ]
  },
  faqs: [
    {
      question: 'What Blythewood neighborhoods do you serve?',
      answer: 'We serve all Blythewood neighborhoods including Cobblestone Park, The Preserve at Doko Meadows, Creekside, Muller Road area, Longtown estates, and all surrounding communities. Our mobile service reaches every corner of Blythewood!'
    },
    {
      question: 'Do you specialize in luxury vehicles?',
      answer: 'Absolutely! Blythewood has many luxury vehicles and we specialize in premium care for Mercedes, BMW, Lexus, Porsche, and other high-end vehicles. Our IDA certification ensures the highest standards.'
    },
    {
      question: 'Can you service estate properties and horse trailers?',
      answer: 'Yes! We regularly service Longtown estate properties with multiple vehicles, horse trailers, and farm equipment. We understand the unique needs of equestrian residents.'
    }
  ]
};

// Cayce Neighborhoods
export const cayceNeighborhoods: Neighborhood[] = [
  {
    slug: 'cayce-downtown-cayce-sc',
    name: 'Downtown Cayce',
    city: 'Cayce',
    citySlug: 'cayce-sc',
    state: 'SC',
    zipCodes: ['29033'],
    coordinates: { lat: 33.9657, lng: -81.0712 },
    population: 3800,
    homeValueRange: '$150,000 - $300,000',
    avgHomeValue: 215000,
    characteristics: [
      'Historic downtown',
      'Local businesses',
      'Walkable area',
      'Community events',
      'Affordable homes'
    ],
    vehicleTypes: ['Sedans', 'Trucks', 'SUVs', 'Work vehicles', 'Classic cars'],
    description: `Downtown Cayce is the historic heart of the city, featuring local businesses, community events, and affordable homes. This walkable area maintains its small-town charm while being just minutes from downtown Columbia. Residents enjoy local restaurants, shops, and a strong sense of community pride.`,
    shortDescription: 'Historic downtown with local businesses and community charm.',
    landmarks: [
      {
        name: 'Cayce City Hall',
        type: 'government',
        description: 'Municipal center and community hub',
        detailingNote: 'Professional appearance for city business'
      },
      {
        name: 'State Street',
        type: 'shopping',
        description: 'Main street with local shops',
        detailingNote: 'Keep your car pristine for downtown visits'
      },
      {
        name: 'Cayce Historical Museum',
        type: 'culture',
        description: 'Local history and exhibits',
        detailingNote: 'Detail your classic car for museum events'
      }
    ],
    adjacentNeighborhoods: ['riverwalk-district-cayce-sc', 'guignard-park-cayce-sc'],
    popularServices: ['Full Detail', 'Basic Wash', 'Interior Cleaning'],
    serviceNotes: 'Historic downtown area with diverse vehicle types and affordable service needs.',
    seo: {
      title: 'Auto Detailing Downtown Cayce SC | Historic District',
      description: 'Mobile detailing for Downtown Cayce residents. Historic district. We come to you! Call for free quote.',
      keywords: [
        'downtown cayce car detailing',
        'cayce historic district detailing',
        'cayce mobile wash',
        'state street car detailing',
        'cayce auto detailing'
      ],
      ogDescription: 'Professional mobile detailing in Downtown Cayce. Historic district served.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Downtown Cayce, SC. Historic district with local businesses. Affordable mobile service for all vehicle types. Convenient at-home detailing.",
      entityKeywords: [
        'Downtown Cayce',
        'Cayce',
        'Historic district',
        'State Street',
        'Cayce City Hall'
      ],
      semanticKeywords: [
        'mobile car detailing',
        'historic downtown',
        'affordable service',
        'local business'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Downtown Cayce?',
        'Do you serve the historic district?',
        'What is car detailing near State Street?'
      ],
      structuredFacts: [
        'Location: Downtown Cayce, SC',
        'Service type: Mobile detailing',
        'Area: Historic district',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide mobile detailing in Downtown Cayce?',
        answer: 'Yes! We serve all of Downtown Cayce with full mobile detailing service. We bring all equipment to your home or business.'
      },
      {
        question: 'Are your services affordable?',
        answer: 'Absolutely! We offer competitive pricing starting at $225 for full details. No hidden fees and mobile service is included.'
      }
    ],
    featured: false
  },
  {
    slug: 'riverwalk-district-cayce-sc',
    name: 'Riverwalk District',
    city: 'Cayce',
    citySlug: 'cayce-sc',
    state: 'SC',
    zipCodes: ['29033'],
    coordinates: { lat: 33.9589, lng: -81.0645 },
    population: 4200,
    homeValueRange: '$175,000 - $350,000',
    avgHomeValue: 255000,
    characteristics: [
      'Near Riverwalk trails',
      'Outdoor recreation',
      'Growing area',
      'Young professionals',
      'River access'
    ],
    vehicleTypes: ['SUVs', 'Trucks', 'Kayak carriers', 'Bikes on racks', 'Adventure vehicles'],
    description: `The Riverwalk District is a growing area of Cayce near the popular 12 Mile Creek and Cayce Riverwalk trails. Popular with outdoor enthusiasts and young professionals, this neighborhood offers easy access to walking, biking, and kayaking. Residents appreciate the blend of nature and convenience.`,
    shortDescription: 'Growing area near Riverwalk trails with outdoor recreation access.',
    landmarks: [
      {
        name: 'Cayce Riverwalk',
        type: 'park',
        description: '12 Mile Creek trail system',
        detailingNote: 'Post-adventure vehicle cleaning'
      },
      {
        name: 'Congaree River',
        type: 'park',
        description: 'River access for kayaking',
        detailingNote: 'Clean up after river trips'
      },
      {
        name: 'Timmerman Trail',
        type: 'park',
        description: 'Popular biking and walking trail',
        detailingNote: 'Detail while you enjoy the trails'
      }
    ],
    adjacentNeighborhoods: ['cayce-downtown-cayce-sc', 'airport-blvd-cayce-sc'],
    popularServices: ['SUV Cleaning', 'Interior Deep Clean', 'Adventure Vehicle Wash'],
    serviceNotes: 'Active outdoor community with vehicles often needing post-recreation cleaning.',
    seo: {
      title: 'Auto Detailing Riverwalk District Cayce SC | Outdoor Recreation',
      description: 'Mobile detailing for Riverwalk District. Near Cayce trails. SUV and adventure vehicle specialists. We come to you!',
      keywords: [
        'riverwalk cayce car detailing',
        'cayce riverwalk detailing',
        'suv cleaning cayce',
        'adventure vehicle wash',
        '12 mile creek area detailing'
      ],
      ogDescription: 'Professional mobile detailing in Riverwalk District, Cayce. Outdoor recreation area.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves the Riverwalk District in Cayce, SC. Near 12 Mile Creek trails and Congaree River. Specializing in SUVs and adventure vehicles. Post-recreation cleaning available.",
      entityKeywords: [
        'Riverwalk District',
        'Cayce',
        '12 Mile Creek',
        'Congaree River',
        'Timmerman Trail'
      ],
      semanticKeywords: [
        'adventure vehicle cleaning',
        'suv detailing',
        'outdoor recreation',
        'post-trip cleaning'
      ],
      questionsAnswered: [
        'Is there mobile detailing near Cayce Riverwalk?',
        'Do you clean adventure vehicles?',
        'Can you detail my SUV after kayaking?'
      ],
      structuredFacts: [
        'Location: Riverwalk District, Cayce SC',
        'Nearby: 12 Mile Creek, Congaree River',
        'Specialty: SUVs, adventure vehicles',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you clean muddy vehicles after trail use?',
        answer: 'Yes! We specialize in post-adventure cleaning. Whether you\'ve been on the trails or kayaking, we can restore your vehicle to pristine condition.'
      },
      {
        question: 'Can you detail my SUV with bike racks?',
        answer: 'Absolutely! We work around roof racks, bike carriers, and kayak mounts. We can clean and protect your adventure gear too.'
      }
    ],
    featured: false
  },
  {
    slug: 'airport-blvd-cayce-sc',
    name: 'Airport Boulevard',
    city: 'Cayce',
    citySlug: 'cayce-sc',
    state: 'SC',
    zipCodes: ['29033', '29170'],
    coordinates: { lat: 33.9534, lng: -81.0823 },
    population: 5500,
    homeValueRange: '$160,000 - $320,000',
    avgHomeValue: 235000,
    characteristics: [
      'Commercial corridor',
      'Near airport',
      'Mixed use',
      'Easy access',
      'Growing development'
    ],
    vehicleTypes: ['Sedans', 'Trucks', 'Work vehicles', 'Rental returns', 'Commuter cars'],
    description: `The Airport Boulevard corridor connects Cayce to Columbia Metropolitan Airport and features a mix of commercial and residential properties. This convenient location attracts commuters, travelers, and local workers. The area continues to grow with new development and easy access to I-26 and I-77.`,
    shortDescription: 'Commercial corridor near airport with convenient access.',
    landmarks: [
      {
        name: 'Columbia Metropolitan Airport',
        type: 'transport',
        description: 'Regional airport nearby',
        detailingNote: 'Pre-travel and post-travel detailing'
      },
      {
        name: 'I-26/I-77 Interchange',
        type: 'transport',
        description: 'Major highway access',
        detailingNote: 'Convenient for commuters'
      },
      {
        name: 'Airport Boulevard Shopping',
        type: 'shopping',
        description: 'Retail and dining options',
        detailingNote: 'Detail while you shop nearby'
      }
    ],
    adjacentNeighborhoods: ['riverwalk-district-cayce-sc', 'springdale-cayce-sc'],
    popularServices: ['Basic Detail', 'Pre-Travel Clean', 'Fleet Service'],
    serviceNotes: 'Commercial area with many commuters and travelers needing convenient service.',
    seo: {
      title: 'Auto Detailing Airport Boulevard Cayce SC | Near Airport',
      description: 'Mobile detailing for Airport Boulevard area. Near Columbia Airport. Pre-travel cleaning specialists. We come to you!',
      keywords: [
        'airport boulevard car detailing',
        'cayce airport area detailing',
        'columbia airport car wash',
        'pre-travel detailing',
        'airport blvd mobile wash'
      ],
      ogDescription: 'Professional mobile detailing on Airport Boulevard, Cayce. Near Columbia Airport.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Airport Boulevard in Cayce, SC. Near Columbia Metropolitan Airport. Pre-travel and post-travel cleaning. Convenient for commuters and travelers.",
      entityKeywords: [
        'Airport Boulevard',
        'Cayce',
        'Columbia Airport',
        'I-26',
        'Commercial corridor'
      ],
      semanticKeywords: [
        'pre-travel detailing',
        'commuter service',
        'convenient location',
        'airport area'
      ],
      questionsAnswered: [
        'Is there mobile detailing near Columbia Airport?',
        'Can you detail my car before a trip?',
        'Do you serve Airport Boulevard?'
      ],
      structuredFacts: [
        'Location: Airport Boulevard, Cayce SC',
        'Nearby: Columbia Metropolitan Airport',
        'Specialty: Pre-travel, commuter service',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Can you detail my car before I travel?',
        answer: 'Yes! We offer pre-travel detailing perfect for long trips or picking up guests. Your car will be spotless when you need it.'
      },
      {
        question: 'Do you offer fleet services for businesses?',
        answer: 'Absolutely! Many businesses on Airport Boulevard use our fleet services. Volume discounts available for regular maintenance.'
      }
    ],
    featured: false
  },
  {
    slug: 'springdale-cayce-sc',
    name: 'Springdale',
    city: 'Cayce',
    citySlug: 'cayce-sc',
    state: 'SC',
    zipCodes: ['29170'],
    coordinates: { lat: 33.9612, lng: -81.1045 },
    population: 3200,
    homeValueRange: '$140,000 - $280,000',
    avgHomeValue: 195000,
    characteristics: [
      'Small-town feel',
      'Affordable homes',
      'Close-knit community',
      'Family-friendly',
      'Quiet streets'
    ],
    vehicleTypes: ['Trucks', 'SUVs', 'Sedans', 'Family vehicles', 'Work trucks'],
    description: `Springdale is a small, close-knit community within the greater Cayce area known for its affordable homes and family-friendly atmosphere. This quiet neighborhood maintains a small-town feel while offering easy access to the greater Columbia metro area. Residents appreciate the strong sense of community and affordable living.`,
    shortDescription: 'Close-knit community with affordable homes and small-town feel.',
    landmarks: [
      {
        name: 'Springdale Town Hall',
        type: 'government',
        description: 'Local municipal center',
        detailingNote: 'Community-focused service'
      },
      {
        name: 'Platt Springs Road',
        type: 'transport',
        description: 'Main thoroughfare',
        detailingNote: 'Convenient access for mobile service'
      },
      {
        name: 'Local Parks',
        type: 'park',
        description: 'Neighborhood green spaces',
        detailingNote: 'Detail while enjoying the park'
      }
    ],
    adjacentNeighborhoods: ['airport-blvd-cayce-sc', 'guignard-park-cayce-sc'],
    popularServices: ['Basic Detail', 'Interior Cleaning', 'Truck Wash'],
    serviceNotes: 'Affordable community appreciating value-focused detailing services.',
    seo: {
      title: 'Auto Detailing Springdale Cayce SC | Affordable Service',
      description: 'Mobile detailing for Springdale residents. Affordable pricing. Family vehicle specialists. We come to you!',
      keywords: [
        'springdale car detailing',
        'springdale cayce detailing',
        'affordable car detailing cayce',
        'family car wash springdale',
        'truck cleaning springdale'
      ],
      ogDescription: 'Professional mobile detailing in Springdale, Cayce. Affordable family service.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Springdale in Cayce, SC. Close-knit community with affordable homes. Family vehicle specialists. Value-focused pricing with quality service.",
      entityKeywords: [
        'Springdale',
        'Cayce',
        'Small town',
        'Family community',
        'Affordable living'
      ],
      semanticKeywords: [
        'affordable detailing',
        'family vehicle service',
        'small-town community',
        'value pricing'
      ],
      questionsAnswered: [
        'Is there affordable detailing in Springdale?',
        'Do you serve the Springdale area?',
        'Can you clean family vehicles?'
      ],
      structuredFacts: [
        'Location: Springdale, Cayce SC',
        'Community type: Small-town, family-friendly',
        'Specialty: Affordable family service',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you offer affordable detailing in Springdale?',
        answer: 'Yes! We offer competitive pricing for all Springdale residents. Our basic detail starts at $225 with no hidden fees or travel charges.'
      },
      {
        question: 'Can you clean my work truck?',
        answer: 'Absolutely! We clean all types of trucks and work vehicles. We understand the unique needs of work trucks and can handle tough cleaning jobs.'
      }
    ],
    featured: false
  },
  {
    slug: 'guignard-park-cayce-sc',
    name: 'Guignard Park',
    city: 'Cayce',
    citySlug: 'cayce-sc',
    state: 'SC',
    zipCodes: ['29033'],
    coordinates: { lat: 33.9723, lng: -81.0534 },
    population: 3500,
    homeValueRange: '$165,000 - $325,000',
    avgHomeValue: 245000,
    characteristics: [
      'Established neighborhood',
      'Tree-lined streets',
      'Near Congaree River',
      'Family homes',
      'Community pride'
    ],
    vehicleTypes: ['SUVs', 'Sedans', 'Trucks', 'Family vehicles', 'Boats'],
    description: `Guignard Park is an established residential neighborhood in Cayce known for its tree-lined streets and proximity to the Congaree River. This family-friendly area features well-maintained homes and a strong sense of community. Residents enjoy easy access to outdoor recreation and the amenities of the greater Cayce area.`,
    shortDescription: 'Established neighborhood with tree-lined streets near the river.',
    landmarks: [
      {
        name: 'Guignard Park',
        type: 'park',
        description: 'Neighborhood park and green space',
        detailingNote: 'Detail your car while enjoying the park'
      },
      {
        name: 'Congaree River Access',
        type: 'park',
        description: 'Nearby river recreation',
        detailingNote: 'Post-boating vehicle cleaning'
      },
      {
        name: 'Knox Abbott Drive',
        type: 'transport',
        description: 'Main neighborhood thoroughfare',
        detailingNote: 'Convenient service access'
      }
    ],
    adjacentNeighborhoods: ['cayce-downtown-cayce-sc', 'springdale-cayce-sc'],
    popularServices: ['Full Detail', 'Family Vehicle Clean', 'Boat Cleaning'],
    serviceNotes: 'Established family area with diverse vehicles including recreational boats.',
    seo: {
      title: 'Auto Detailing Guignard Park Cayce SC | Established Neighborhood',
      description: 'Mobile detailing for Guignard Park residents. Established Cayce neighborhood. Family vehicle specialists. We come to you!',
      keywords: [
        'guignard park car detailing',
        'guignard cayce detailing',
        'established neighborhood detailing',
        'family car cleaning cayce',
        'boat cleaning cayce'
      ],
      ogDescription: 'Professional mobile detailing in Guignard Park, Cayce. Established neighborhood.',
      llmoSummary: "Mikah's Mobile Auto Detailing serves Guignard Park in Cayce, SC. Established neighborhood near Congaree River. Family vehicle and boat cleaning specialists. Tree-lined streets with community pride.",
      entityKeywords: [
        'Guignard Park',
        'Cayce',
        'Congaree River',
        'Established neighborhood',
        'Knox Abbott Drive'
      ],
      semanticKeywords: [
        'family vehicle detailing',
        'established community',
        'boat cleaning',
        'tree-lined streets'
      ],
      questionsAnswered: [
        'Is there mobile detailing in Guignard Park?',
        'Do you clean boats in Cayce?',
        'Can you detail family vehicles?'
      ],
      structuredFacts: [
        'Location: Guignard Park, Cayce SC',
        'Neighborhood type: Established residential',
        'Specialty: Family vehicles, boats',
        'Rating: 5.0 stars, IDA Certified'
      ]
    },
    faqs: [
      {
        question: 'Do you provide mobile detailing in Guignard Park?',
        answer: 'Yes! We serve all of Guignard Park with full mobile detailing. We bring all equipment directly to your driveway.'
      },
      {
        question: 'Can you clean my boat?',
        answer: 'Absolutely! Many Guignard Park residents enjoy the Congaree River. We offer boat and trailer cleaning services.'
      }
    ],
    featured: false
  }
];

// Cayce City Hub Data
export const cayceCity: City = {
  slug: 'cayce-sc',
  name: 'Cayce',
  state: 'SC',
  description: `Cayce, South Carolina is a charming city along the Congaree River, known for its outdoor recreation, historic downtown, and affordable living. From the popular Riverwalk trails to established family neighborhoods, Cayce offers small-town charm with easy access to the Columbia metro area.

Mikah's Mobile Auto Detailing proudly serves all Cayce neighborhoods with professional, convenient mobile service. Whether you're near the Riverwalk or in historic downtown, we bring our fully-equipped mobile unit directly to your location.`,
  shortDescription: 'Riverside city with outdoor recreation and small-town charm.',
  coordinates: { lat: 33.9657, lng: -81.0712 },
  population: 13599,
  neighborhoods: [
    'cayce-downtown-cayce-sc',
    'riverwalk-district-cayce-sc',
    'airport-blvd-cayce-sc',
    'springdale-cayce-sc',
    'guignard-park-cayce-sc'
  ],
  seo: {
    title: 'Mobile Auto Detailing Cayce SC | All Neighborhoods Served',
    description: 'Professional mobile car detailing throughout Cayce SC. Serving Downtown, Riverwalk, Springdale & more. 5-star rated.',
    keywords: [
      'auto detailing cayce sc',
      'mobile car detailing cayce',
      'car detailing near me cayce',
      'cayce riverwalk detailing',
      'cayce ceramic coating',
      'springdale car detailing'
    ],
    ogDescription: 'Cayce\'s trusted mobile auto detailing service. All neighborhoods served. 5-star rated.',
    llmoSummary: "Mikah's Mobile Auto Detailing provides professional car detailing services throughout Cayce, South Carolina. Serving all neighborhoods including Downtown, Riverwalk District, Airport Boulevard, Springdale, and Guignard Park. River city with outdoor recreation. IDA certified with 5.0 star rating.",
    entityKeywords: [
      'Cayce SC',
      'Downtown Cayce',
      'Riverwalk',
      'Springdale',
      'Congaree River',
      'Columbia Airport'
    ],
    semanticKeywords: [
      'mobile car detailing',
      'riverside city',
      'outdoor recreation',
      'affordable service',
      'adventure vehicle'
    ],
    questionsAnswered: [
      'Where can I get my car detailed in Cayce SC?',
      'What neighborhoods does Mikah\'s Mobile Detailing serve in Cayce?',
      'Is there mobile detailing near Cayce Riverwalk?',
      'What is the best car detailing in Cayce?'
    ],
    structuredFacts: [
      'Service area: All Cayce SC neighborhoods',
      'Neighborhoods: Downtown, Riverwalk, Airport Blvd, Springdale, Guignard Park',
      'Specialization: Adventure vehicles, family service',
      'Rating: 5.0 stars, IDA Certified'
    ]
  },
  faqs: [
    {
      question: 'What Cayce neighborhoods do you serve?',
      answer: 'We serve all Cayce neighborhoods including Downtown Cayce, Riverwalk District, Airport Boulevard, Springdale, Guignard Park, and all surrounding communities. Our mobile service reaches every corner of Cayce!'
    },
    {
      question: 'Do you serve areas near the Riverwalk?',
      answer: 'Absolutely! We regularly service homes near the Cayce Riverwalk and 12 Mile Creek trails. We specialize in post-adventure cleaning for outdoor enthusiasts.'
    },
    {
      question: 'Is Cayce in your service area?',
      answer: 'Yes! Cayce is a core part of our service area. We provide the same great mobile detailing service to Cayce as we do to Columbia, West Columbia, and all surrounding areas.'
    }
  ]
};

// Helper functions
export const getNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  const allNeighborhoods = [...irmoNeighborhoods, ...lexingtonNeighborhoods, ...columbiaNeighborhoods, ...westColumbiaNeighborhoods, ...blythewoodNeighborhoods, ...cayceNeighborhoods];
  return allNeighborhoods.find(n => n.slug === slug);
};

export const getNeighborhoodsByCity = (citySlug: string): Neighborhood[] => {
  const allNeighborhoods = [...irmoNeighborhoods, ...lexingtonNeighborhoods, ...columbiaNeighborhoods, ...westColumbiaNeighborhoods, ...blythewoodNeighborhoods, ...cayceNeighborhoods];
  return allNeighborhoods.filter(n => n.citySlug === citySlug);
};

export const getAdjacentNeighborhoods = (slug: string): Neighborhood[] => {
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return [];

  return neighborhood.adjacentNeighborhoods
    .map(adjSlug => getNeighborhoodBySlug(adjSlug))
    .filter((n): n is Neighborhood => n !== undefined);
};

export const getFeaturedNeighborhoods = (citySlug?: string): Neighborhood[] => {
  const allNeighborhoods = [...irmoNeighborhoods, ...lexingtonNeighborhoods, ...columbiaNeighborhoods, ...westColumbiaNeighborhoods, ...blythewoodNeighborhoods, ...cayceNeighborhoods];
  let featured = allNeighborhoods.filter(n => n.featured);
  if (citySlug) {
    featured = featured.filter(n => n.citySlug === citySlug);
  }
  return featured;
};

export const getCityBySlug = (slug: string): City | undefined => {
  if (slug === 'irmo-sc') return irmoCity;
  if (slug === 'lexington-sc') return lexingtonCity;
  if (slug === 'columbia-sc') return columbiaCity;
  if (slug === 'west-columbia-sc') return westColumbiaCity;
  if (slug === 'blythewood-sc') return blythewoodCity;
  if (slug === 'cayce-sc') return cayceCity;
  return undefined;
};

// All cities
export const cities: City[] = [irmoCity, lexingtonCity, columbiaCity, westColumbiaCity, blythewoodCity, cayceCity];

// All neighborhoods
export const neighborhoods: Neighborhood[] = [...irmoNeighborhoods, ...lexingtonNeighborhoods, ...columbiaNeighborhoods, ...westColumbiaNeighborhoods, ...blythewoodNeighborhoods, ...cayceNeighborhoods];
