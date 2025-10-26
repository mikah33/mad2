import { LocationData } from '../types/location';

export const locations: LocationData[] = [
  {
    city: 'Columbia',
    state: 'SC',
    slug: 'columbia',
    coordinates: { latitude: 34.0007, longitude: -81.0348 },
    county: 'Richland',
    population: 137300,
    description:
      'The capital city of South Carolina, home to the University of South Carolina and a thriving automotive community.',
    landmarks: [
      {
        name: 'State House',
        type: 'Government',
        description:
          'Historic capitol building and center of Columbia\'s downtown area',
      },
      {
        name: 'Five Points',
        type: 'Entertainment District',
        description: 'Popular shopping and dining destination for vehicle owners',
      },
      {
        name: 'University of South Carolina',
        type: 'Education',
        description:
          'Major university bringing thousands of car-owning students and faculty',
      },
      {
        name: 'Colonial Life Arena',
        type: 'Entertainment',
        description: 'Premier event venue attracting visitors from across the region',
      },
      {
        name: 'Riverbanks Zoo',
        type: 'Attraction',
        description:
          'Popular family destination requiring parking and vehicle maintenance',
      },
      {
        name: 'Fort Jackson',
        type: 'Military Base',
        description:
          'Large military installation with thousands of service members and vehicles',
      },
    ],
    neighborhoods: [
      'Downtown',
      'The Vista',
      'Five Points',
      'Forest Acres',
      'Shandon',
      'Rosewood',
      'Elmwood Park',
      'Heathwood',
      'Eau Claire',
      'Lake Katherine',
    ],
    serviceArea: {
      city: 'Columbia',
      radius: 15,
      zipCodes: [
        '29201',
        '29203',
        '29204',
        '29205',
        '29206',
        '29209',
        '29210',
        '29223',
      ],
    },
    uniqueContent: {
      intro:
        "Welcome to Mikahs Auto Detailing, Columbia's premier destination for professional car care services. As South Carolina's capital city, Columbia is home to thousands of vehicles navigating our historic streets, from the bustling downtown corridors near the State House to the tree-lined avenues of Shandon and Forest Acres. Whether you're a University of South Carolina gamecock fan keeping your ride pristine for tailgates, a Fort Jackson service member maintaining your vehicle's appearance, or a downtown professional who demands excellence, we understand the unique needs of Columbia drivers. Our locally-owned business has been serving the Columbia community for years, building relationships one satisfied customer at a time.",
      whyChooseUs:
        "Columbia's climate presents unique challenges for vehicle maintenance. Our hot, humid summers can fade paint and damage interiors, while pollen from our abundant trees creates a constant coating on vehicles. The clay-heavy soil around Columbia can be particularly difficult to remove from wheel wells and undercarriages. At Mikahs Auto Detailing, we've developed specialized techniques specifically designed for Columbia's environmental conditions. We use premium ceramic coatings that stand up to South Carolina's intense UV rays, and our interior treatments protect against the humidity that can cause mold and mildew. When you choose us, you're choosing a team that understands what Columbia vehicle owners face every day.",
      localExpertise:
        "Our team members live and work in Columbia, so we know the local roads and conditions intimately. From the stop-and-go traffic on I-126 that builds up brake dust, to the tree sap that falls on vehicles parked near the USC Horseshoe, to the red clay that gets tracked into interiors at Riverbanks Zoo - we've seen it all and know how to handle it. We've detailed vehicles that commute daily to Fort Jackson, cars that park in the Vista for nightlife, and SUVs that navigate the tight streets of Five Points. This local expertise means we can anticipate problems before they become serious issues.",
      communityInvolvement:
        "We're proud members of the Columbia community and actively support local organizations. We provide discounted services for USC students and faculty, offer special rates for Fort Jackson military personnel, and partner with local businesses in the Vista and Five Points districts. We sponsor youth sports teams at local parks and contribute to community events at the State House. When you choose Mikahs Auto Detailing, you're supporting a local business that reinvests in making Columbia an even better place to live.",
    },
    testimonials: [
      {
        name: 'James Patterson',
        location: 'Downtown Columbia',
        rating: 5,
        text: "Outstanding service! My car looks brand new after their full detail. They picked it up from my office near the State House and returned it the same day. The attention to detail was incredible - they even cleaned areas I didn't know were dirty.",
        date: '2024-01-15',
        service: 'Premium Detail Package',
      },
      {
        name: 'Sarah Mitchell',
        location: 'Forest Acres',
        rating: 5,
        text: 'As a USC professor, I need my car to look professional but never have time for detailing. Mikahs solved this perfectly - mobile service that comes to campus. The ceramic coating has kept my car looking great for months.',
        date: '2024-02-20',
        service: 'Ceramic Coating',
      },
      {
        name: 'Michael Chen',
        location: 'Shandon',
        rating: 5,
        text: 'Best detailing service in Columbia! They got all the tree sap off my car from parking in Shandon, and the interior looks incredible. Fair pricing and excellent work. Highly recommend to all Columbia residents.',
        date: '2024-03-10',
        service: 'Exterior Detail',
      },
    ],
    faqs: [
      {
        question: 'Do you serve all neighborhoods in Columbia, SC?',
        answer:
          'Yes! We serve all Columbia neighborhoods including Downtown, The Vista, Five Points, Shandon, Forest Acres, Rosewood, and surrounding areas. We offer both mobile detailing (we come to you) and drop-off services at our location.',
      },
      {
        question: 'How do Columbia\'s weather conditions affect my car?',
        answer:
          "Columbia's hot, humid climate and heavy pollen can damage your vehicle's paint and interior. Our detailing services include UV protection, ceramic coatings, and treatments specifically designed to combat South Carolina's environmental challenges. Regular detailing helps prevent long-term damage.",
      },
      {
        question: 'Do you offer discounts for USC students or military personnel?',
        answer:
          'Yes! We offer special discounted rates for University of South Carolina students and faculty, as well as military personnel from Fort Jackson. Please mention your affiliation when booking to receive your discount.',
      },
      {
        question: 'How long does a full detail take in Columbia?',
        answer:
          'A complete detail typically takes 3-5 hours depending on the vehicle size and condition. We offer mobile service throughout Columbia, so you can continue with your day while we work on your vehicle at your home, office, or campus location.',
      },
      {
        question: 'What areas of Columbia do you cover?',
        answer:
          'We cover all of Columbia and within a 15-mile radius, including Downtown, The Vista, Five Points, Shandon, Forest Acres, Rosewood, Elmwood Park, and surrounding areas. We also serve nearby cities like West Columbia, Cayce, and Irmo.',
      },
      {
        question: 'Can you remove red clay stains common in Columbia?',
        answer:
          "Absolutely! Columbia's red clay soil is notorious for staining vehicles. We have specialized cleaning solutions and techniques specifically designed to remove clay from paint, wheels, and undercarriages without damaging your vehicle's finish.",
      },
    ],
    metaTitle: 'Professional Car Detailing in Columbia, SC | Mikahs Auto Detailing',
    metaDescription:
      "Columbia's #1 rated auto detailing service. Premium car care for USC, Fort Jackson, Downtown & all Columbia neighborhoods. Mobile service available. Book now!",
    nearbyLocations: [
      'West Columbia',
      'Cayce',
      'Forest Acres',
      'Irmo',
      'Lexington',
      'Dentsville',
    ],
  },
  {
    city: 'Lexington',
    state: 'SC',
    slug: 'lexington',
    coordinates: { latitude: 33.9816, longitude: -81.2362 },
    county: 'Lexington',
    population: 23568,
    description:
      'Growing suburban community known for excellent schools and family-friendly atmosphere.',
    landmarks: [
      {
        name: 'Lexington Medical Center',
        type: 'Healthcare',
        description:
          'Major regional medical facility serving the Midlands area',
      },
      {
        name: 'Lake Murray',
        type: 'Recreation',
        description:
          'Popular recreational lake requiring frequent vehicle cleaning',
      },
      {
        name: 'Lexington Town Square',
        type: 'Shopping',
        description: 'Downtown shopping district with local businesses',
      },
      {
        name: 'Old Mill Antique Mall',
        type: 'Shopping',
        description: 'Popular destination attracting visitors from across the region',
      },
      {
        name: 'Virginia Hylton Park',
        type: 'Recreation',
        description: 'Community park with sports facilities and playgrounds',
      },
    ],
    neighborhoods: [
      'Downtown Lexington',
      'Lake Murray Estates',
      'White Knoll',
      'Carolina Springs',
      'Oak Grove',
      'Red Bank',
    ],
    serviceArea: {
      city: 'Lexington',
      radius: 12,
      zipCodes: ['29072', '29073'],
    },
    uniqueContent: {
      intro:
        "Mikahs Auto Detailing is proud to serve the thriving community of Lexington, SC. As one of the fastest-growing areas in the Midlands, Lexington is home to families, professionals, and retirees who take pride in their vehicles. Whether you're driving to Lake Murray for a weekend of boating, commuting to Lexington Medical Center, or shopping in the historic downtown square, your vehicle faces unique challenges from lake water splashes, highway grime from I-20, and the pollen that blankets the area each spring. Our mobile detailing service brings professional care right to your driveway in neighborhoods like White Knoll, Carolina Springs, and Oak Grove, making it convenient for busy Lexington residents to maintain their vehicles.",
      whyChooseUs:
        "Lexington residents love the lake life, but spending time at Lake Murray means your vehicle is exposed to harsh sun reflection off the water, boat trailer grime, and the dust from unpaved access roads. Our detailing services are specifically designed to address these challenges. We offer paint protection that stands up to prolonged sun exposure, undercarriage cleaning to remove lake residue and road salt from winter lake trips, and specialized interior treatments that eliminate that musty lake smell. Many of our customers are families with active lifestyles - soccer practice at Virginia Hylton Park, trips to the Columbia area, weekend lake excursions - and they need a detailing service that understands how their lifestyle impacts their vehicle.",
      localExpertise:
        "Our team understands Lexington's rapid growth and development. We know that commuting from White Knoll to Columbia means your car collects interstate grime daily. We understand that parking under the oak trees downtown means dealing with sap and bird droppings. We've detailed boats, RVs, and vehicles for hundreds of Lake Murray enthusiasts. This local knowledge allows us to recommend maintenance schedules tailored to your specific driving patterns and parking situations in Lexington.",
      communityInvolvement:
        'We actively support Lexington schools and youth sports programs, offering special fundraising partnerships with local organizations. We provide corporate detailing packages for businesses along Sunset Boulevard and discounted fleet services for medical professionals at Lexington Medical Center. When you choose our services, you support a business committed to making Lexington an even better place to live.',
    },
    testimonials: [
      {
        name: 'Robert Davidson',
        location: 'White Knoll, Lexington',
        rating: 5,
        text: 'Fantastic service! They detailed both my truck and my boat trailer after a summer at Lake Murray. Everything looks showroom new. The convenience of mobile service in White Knoll made this so easy.',
        date: '2024-02-05',
        service: 'Boat & Vehicle Detail',
      },
      {
        name: 'Jennifer Harris',
        location: 'Downtown Lexington',
        rating: 5,
        text: 'As a busy mom with three kids, my SUV was a disaster. Mikahs transformed it completely! They removed all the stains, got rid of odors, and made it look brand new. Worth every penny.',
        date: '2024-03-15',
        service: 'Interior Deep Clean',
      },
      {
        name: 'Tom Anderson',
        location: 'Carolina Springs',
        rating: 5,
        text: 'Professional, punctual, and perfectionist - exactly what I wanted. My BMW has never looked better. The paint correction they did removed years of swirl marks. Highly recommend to all Lexington residents.',
        date: '2024-01-28',
        service: 'Paint Correction & Ceramic Coating',
      },
    ],
    faqs: [
      {
        question: 'Do you provide mobile detailing throughout Lexington?',
        answer:
          'Yes! We bring our professional detailing service directly to your home or office anywhere in Lexington, including White Knoll, Carolina Springs, Oak Grove, and all surrounding neighborhoods. All we need is access to water and electricity.',
      },
      {
        question: 'Can you clean vehicles that have been to Lake Murray?',
        answer:
          'Absolutely! Lake Murray is beautiful but can be tough on vehicles. We specialize in removing lake water spots, algae, boat launch grime, and the specific dirt and residue that comes from spending time at the lake. We also detail boats and trailers.',
      },
      {
        question: 'How does Lexington\'s location affect my vehicle?',
        answer:
          "Lexington's proximity to Lake Murray means higher humidity and more water exposure. The commute to Columbia on I-20 exposes vehicles to more highway grime and road debris. We address both issues with specialized treatments including humidity-resistant interior protection and thorough undercarriage cleaning.",
      },
      {
        question: 'Do you offer services for medical professionals at Lexington Medical Center?',
        answer:
          'Yes! We offer special rates and convenient scheduling for Lexington Medical Center staff. We can detail your vehicle during your shift, so it\'s ready when you finish work.',
      },
      {
        question: 'What makes your service different in Lexington?',
        answer:
          "We're locals who understand Lexington's unique vehicle care needs - from lake-related issues to the challenges of our growing community. We use products and techniques specifically chosen for South Carolina's climate and Lexington's lifestyle.",
      },
    ],
    metaTitle:
      'Car Detailing Lexington SC | Mobile Auto Detailing | Mikahs Auto Detailing',
    metaDescription:
      'Professional mobile car detailing in Lexington, SC. Serving White Knoll, Lake Murray & all of Lexington County. Premium service, local expertise. Book today!',
    nearbyLocations: [
      'Columbia',
      'West Columbia',
      'Cayce',
      'Irmo',
      'Chapin',
      'Batesburg-Leesville',
    ],
  },
  {
    city: 'Irmo',
    state: 'SC',
    slug: 'irmo',
    coordinates: { latitude: 34.0859, longitude: -81.1837 },
    county: 'Lexington/Richland',
    population: 12097,
    description:
      'Lakeside community offering suburban living with easy access to Lake Murray.',
    landmarks: [
      {
        name: 'Lake Murray',
        type: 'Recreation',
        description: 'One of the largest lakes in the Southeast',
      },
      {
        name: 'Saluda Shoals Park',
        type: 'Recreation',
        description: 'Riverside park with extensive outdoor activities',
      },
      {
        name: 'Harbison State Forest',
        type: 'Nature',
        description: 'Natural area with hiking and biking trails',
      },
      {
        name: 'Columbiana Centre',
        type: 'Shopping',
        description: 'Major shopping mall serving the northwest Columbia area',
      },
      {
        name: 'Lake Murray Dam',
        type: 'Historic Site',
        description: 'Engineering landmark and popular gathering spot',
      },
    ],
    neighborhoods: [
      'Lake Murray Shores',
      'Friarsgate',
      'Harbison',
      'Seven Oaks',
      'Ballentine',
      'Dutch Fork',
    ],
    serviceArea: {
      city: 'Irmo',
      radius: 10,
      zipCodes: ['29063', '29212'],
    },
    uniqueContent: {
      intro:
        "Irmo's location on Lake Murray makes it a paradise for water sports enthusiasts, but it also means vehicles face unique challenges. At Mikahs Auto Detailing, we understand that Irmo residents live an active, outdoor lifestyle. Your vehicle isn't just transportation - it's your partner for weekend lake adventures, trips to Saluda Shoals Park, and daily commutes to Columbia. Whether you're pulling a boat to the lake, hiking at Harbison State Forest, or shopping at Columbiana Centre, your vehicle works hard. We provide the professional care it deserves, with mobile service throughout Irmo, Harbison, Ballentine, and surrounding Lake Murray communities.",
      whyChooseUs:
        "Living near Lake Murray is wonderful, but the combination of water exposure, intense sun reflection, and outdoor activities creates specific vehicle maintenance needs. Salt air from the lake can accelerate paint oxidation. Boat ramp grit gets into every crevice. Sun glare off the water intensifies UV damage. At Mikahs Auto Detailing, we've developed specialized processes for Irmo's lake community. Our ceramic coatings provide superior protection against water spots and oxidation. Our undercarriage cleaning removes lake residue that can cause rust. Our interior treatments eliminate musty odors and protect against the humidity that comes with lakeside living. We're not just detailers - we're fellow Lake Murray residents who understand your lifestyle.",
      localExpertise:
        "We know Irmo inside and out. We understand that parking near the Lake Murray Dam means dealing with bird droppings and tree sap. We know that the dirt roads in some lake neighborhoods create a constant battle against dust. We've detailed vehicles that spend every summer weekend at Saluda Shoals, trucks that haul boats dozens of times each season, and family SUVs that shuttle kids to Dutch Fork schools. This intimate local knowledge means we can anticipate problems and provide solutions before minor issues become major headaches.",
      communityInvolvement:
        'Mikahs Auto Detailing is committed to the Irmo community. We partner with Lake Murray marinas and boat dealers, sponsor local youth water sports teams, and support Harbison area businesses. We offer special packages for boat owners and RV enthusiasts who make Irmo their home base. We also provide fleet services for local businesses and discounted rates for residents who refer their neighbors.',
    },
    testimonials: [
      {
        name: 'David Martinez',
        location: 'Lake Murray Shores',
        rating: 5,
        text: "Best detailing service on Lake Murray! They cleaned my boat and truck in one appointment. Got rid of all the water spots and that lake smell. They understand what lake life does to vehicles. I'll never use anyone else.",
        date: '2024-03-01',
        service: 'Boat & Vehicle Package',
      },
      {
        name: 'Amanda Foster',
        location: 'Harbison, Irmo',
        rating: 5,
        text: 'Mobile service was perfect for our busy family. They came to our house in Harbison and detailed both cars while we were home. The kids loved watching through the window. Both vehicles look incredible!',
        date: '2024-02-18',
        service: 'Two-Vehicle Package',
      },
      {
        name: 'Kevin Wright',
        location: 'Ballentine',
        rating: 5,
        text: 'Exceptional work! My truck was filthy from boat launches all summer. They did a complete detail including undercarriage, and it looks better than when I bought it. The ceramic coating was worth the investment.',
        date: '2024-01-22',
        service: 'Full Detail with Ceramic Coating',
      },
    ],
    faqs: [
      {
        question: 'Do you serve all Lake Murray areas around Irmo?',
        answer:
          'Yes! We provide mobile detailing service throughout Irmo and the entire Lake Murray area, including Harbison, Ballentine, Seven Oaks, Lake Murray Shores, and all lakeside communities. We come directly to your home or boat dock.',
      },
      {
        question: 'Can you detail boats as well as vehicles?',
        answer:
          'Absolutely! We specialize in boat detailing for Lake Murray residents. We clean hulls, polish fiberglass, detail interiors, and can handle everything from small fishing boats to large cruisers. We also detail jet skis and pontoon boats.',
      },
      {
        question: 'How does lake exposure affect my vehicle?',
        answer:
          'Lake exposure can cause water spots, oxidation, and accelerated paint deterioration. The humidity and salt air near Lake Murray also affect interiors. Our services include protective treatments specifically designed to combat these lake-related issues.',
      },
      {
        question: 'What\'s the best time of year to detail my boat and vehicle?',
        answer:
          'We recommend detailing in spring before lake season begins, mid-summer to address accumulated damage, and fall to prepare for winter storage. However, we provide service year-round and can accommodate your specific schedule.',
      },
      {
        question: 'Do you clean boat trailers too?',
        answer:
          'Yes! Boat trailer cleaning and detailing is available as an add-on service. We remove algae, clean the frame, and treat metal surfaces to prevent rust - especially important for trailers regularly submerged at Lake Murray boat launches.',
      },
    ],
    metaTitle:
      'Irmo SC Car Detailing | Lake Murray Auto & Boat Detailing | Mikahs',
    metaDescription:
      'Professional car & boat detailing in Irmo, SC. Lake Murray specialists serving Harbison, Ballentine & all lakeside communities. Mobile service available!',
    nearbyLocations: [
      'Columbia',
      'Lexington',
      'Chapin',
      'Ballentine',
      'Little Mountain',
      'Prosperity',
    ],
  },
  {
    city: 'West Columbia',
    state: 'SC',
    slug: 'west-columbia',
    coordinates: { latitude: 33.9935, longitude: -81.074 },
    county: 'Lexington',
    population: 17719,
    description:
      'Riverfront city across from Columbia with growing dining and entertainment scene.',
    landmarks: [
      {
        name: 'Congaree River',
        type: 'Natural Feature',
        description: 'Scenic river with walking trails and recreation',
      },
      {
        name: 'West Columbia Riverwalk',
        type: 'Recreation',
        description:
          'Popular riverside park and amphitheater for events and exercise',
      },
      {
        name: 'Brookland-West Columbia High School',
        type: 'Education',
        description: 'Historic high school serving the community',
      },
      {
        name: 'Meeting Street',
        type: 'Dining District',
        description: 'Growing restaurant and entertainment destination',
      },
      {
        name: 'State Street',
        type: 'Commercial',
        description: 'Main business corridor with shops and services',
      },
    ],
    neighborhoods: [
      'Downtown West Columbia',
      'Cayce-West Columbia',
      'New Brookland',
      'Airport',
      'Springdale',
      'Guignard Park',
    ],
    serviceArea: {
      city: 'West Columbia',
      radius: 10,
      zipCodes: ['29169', '29170', '29171'],
    },
    uniqueContent: {
      intro:
        "West Columbia has transformed into one of the Midlands' most exciting communities, and Mikahs Auto Detailing is here to serve this growing city. Whether you're enjoying dinner at one of Meeting Street's trendy restaurants, exercising along the Riverwalk, or commuting across the river to Columbia, your vehicle deserves professional care. The combination of river proximity, urban development, and the mix of residential and commercial areas creates unique challenges for vehicle maintenance. Tree pollen from the riverbank, construction dust from new developments, and everyday city grime can take a toll on your car's appearance. Our mobile detailing service brings professional care to your driveway in neighborhoods throughout West Columbia, from the historic areas near State Street to the newer developments near the airport.",
      whyChooseUs:
        "West Columbia's location along the Congaree River and its proximity to Columbia means vehicles face exposure from multiple environments - river humidity, urban pollution, and suburban elements all in one area. Our detailing services address these combined challenges. We use treatments that protect against moisture-related issues common near the river, while also handling the brake dust and grime that comes from city driving. Many West Columbia residents commute to Columbia, driving across the Gervais Street or Blossom Street bridges daily, accumulating more wear than typical suburban drivers. We understand this and recommend maintenance schedules that match your specific driving patterns and environmental exposure.",
      localExpertise:
        "Our team knows West Columbia's streets intimately. We understand that parking near the Riverwalk means dealing with tree sap and bird droppings from the abundant riverside trees. We know that living near the airport flight path means more air pollution settling on vehicles. We've detailed cars parked in the Meeting Street district, family vehicles from Brookland neighborhoods, and commercial vehicles from the State Street business corridor. This local knowledge helps us provide targeted solutions rather than generic service.",
      communityInvolvement:
        'We actively support West Columbia businesses and community organizations. We partner with Meeting Street restaurants and shops, sponsor Riverwalk events, and offer special rates for Brookland-West Columbia High School staff and students. We provide fleet services for local businesses along State Street and Airport Boulevard. When you choose Mikahs Auto Detailing, you support a business committed to West Columbia\'s continued growth and success.',
    },
    testimonials: [
      {
        name: 'Lisa Thompson',
        location: 'Meeting Street Area',
        rating: 5,
        text: "Incredible attention to detail! My car was covered in tree sap from parking near the Riverwalk. They removed every bit of it and applied a protective coating. Now I park there without worry. Best detailing service in West Columbia!",
        date: '2024-02-28',
        service: 'Exterior Detail with Sealant',
      },
      {
        name: 'Marcus Johnson',
        location: 'Springdale',
        rating: 5,
        text: 'As a Realtor showing properties all over West Columbia and Columbia, my car is my office. Mikahs keeps it looking professional with regular detailing. They work around my schedule and the results are always perfect.',
        date: '2024-03-12',
        service: 'Monthly Maintenance Package',
      },
      {
        name: 'Patricia Williams',
        location: 'Airport Area',
        rating: 5,
        text: 'They detailed my SUV and removed years of accumulated grime. The interior smells fresh, the exterior shines, and the whole experience was convenient with their mobile service. Highly recommend to all West Columbia residents!',
        date: '2024-01-30',
        service: 'Complete Interior & Exterior Detail',
      },
    ],
    faqs: [
      {
        question: 'Do you provide service throughout West Columbia?',
        answer:
          'Yes! We serve all West Columbia neighborhoods including the Meeting Street district, Springdale, Airport area, New Brookland, and all areas along the Riverwalk. Our mobile service comes directly to your location.',
      },
      {
        question: 'How does proximity to the Congaree River affect my vehicle?',
        answer:
          'The river creates higher humidity levels that can affect interiors and promote mold growth. It also means more exposure to river-related debris and increased bird activity. Our detailing services include treatments specifically designed to protect against humidity and environmental factors common in riverside locations.',
      },
      {
        question: 'Can you detail my vehicle while I dine on Meeting Street?',
        answer:
          'Absolutely! Many of our customers enjoy scheduling their detail during dinner or shopping trips. As long as we can access your vehicle and you\'ll be within a few hours, we can coordinate the timing perfectly.',
      },
      {
        question: 'Do you offer services for businesses along State Street?',
        answer:
          'Yes! We provide fleet detailing services for West Columbia businesses. Whether you have company vehicles, a car dealership, or a business that relies on vehicle appearance, we can create a custom maintenance plan with scheduled service and business pricing.',
      },
      {
        question: 'What makes your service ideal for West Columbia?',
        answer:
          "We understand West Columbia's unique position - part urban, part suburban, with river proximity adding environmental factors. We've tailored our services and product selection to address these specific conditions, providing protection and care that generic detailing services might miss.",
      },
    ],
    metaTitle:
      'West Columbia SC Car Detailing | Riverwalk Area Auto Detail | Mikahs',
    metaDescription:
      'Professional auto detailing in West Columbia, SC. Serving Meeting Street, Riverwalk, Springdale & all neighborhoods. Mobile service available. Book now!',
    nearbyLocations: [
      'Columbia',
      'Cayce',
      'Lexington',
      'Irmo',
      'South Congaree',
      'Pine Ridge',
    ],
  },
  {
    city: 'Cayce',
    state: 'SC',
    slug: 'cayce',
    coordinates: { latitude: 33.9682, longitude: -81.0745 },
    county: 'Lexington',
    population: 13964,
    description:
      'Historic city along the Congaree River known for parks and water access.',
    landmarks: [
      {
        name: 'Cayce Riverwalk',
        type: 'Recreation',
        description:
          'Scenic walking and biking trail along the Congaree River',
      },
      {
        name: 'Cayce Historical Museum',
        type: 'Culture',
        description: 'Museum showcasing local history and heritage',
      },
      {
        name: 'Timmerman Trail',
        type: 'Recreation',
        description: 'Popular trail system for outdoor enthusiasts',
      },
      {
        name: 'Guignard Park',
        type: 'Recreation',
        description: 'Community park with sports facilities',
      },
      {
        name: 'Knox Abbott Drive',
        type: 'Commercial',
        description: 'Main commercial corridor with shops and restaurants',
      },
    ],
    neighborhoods: [
      'Downtown Cayce',
      'Avenues',
      'Dixiana',
      'River Club',
      'Naples',
      'Frink',
    ],
    serviceArea: {
      city: 'Cayce',
      radius: 10,
      zipCodes: ['29033', '29172'],
    },
    uniqueContent: {
      intro:
        "Cayce's rich history and riverside location make it a special place to call home, and at Mikahs Auto Detailing, we're proud to serve this community. From the historic downtown district to the growing Dixiana development, from the Riverwalk trails to Knox Abbott Drive businesses, Cayce residents lead active lives that depend on reliable vehicles. The combination of river proximity, abundant green spaces, and Cayce's position as a commuter city to Columbia creates unique vehicle maintenance needs. Whether you're mountain biking on the Timmerman Trail and your vehicle gets coated in trail dust, enjoying riverside activities that expose your car to humidity, or simply commuting to work across the Blossom Street Bridge, your vehicle works hard for you. We bring professional detailing service directly to your location throughout Cayce, making it convenient to keep your vehicle in pristine condition.",
      whyChooseUs:
        "Cayce's location along the Congaree River means your vehicle faces constant exposure to high humidity, which can damage interiors and promote mildew growth. The tree-lined streets that make Cayce beautiful also drop sap, pollen, and debris on vehicles year-round. The red clay soil common in the area becomes a persistent problem during rainy seasons, coating vehicles and getting into every crevice. At Mikahs Auto Detailing, we've developed specific solutions for these Cayce-area challenges. Our interior treatments include anti-microbial applications perfect for the humid environment. Our paint protection stands up to tree sap and pollen. Our undercarriage cleaning removes that persistent red clay before it causes rust or damage. We're not a generic detailing service - we're Cayce specialists who understand your local conditions.",
      localExpertise:
        "Our team lives and works in the Cayce area, so we intimately understand the local environment. We know that parking near the Riverwalk means dealing with riverside trees and their byproducts. We understand that the Timmerman Trail is beloved by outdoor enthusiasts whose vehicles accumulate specific types of dirt and debris. We've detailed vehicles from every Cayce neighborhood, from historic downtown to the newest Dixiana developments. This deep local knowledge allows us to anticipate issues and provide preventive care, not just reactive cleaning.",
      communityInvolvement:
        'Mikahs Auto Detailing is committed to supporting Cayce community organizations and businesses. We sponsor local youth sports teams that play at Guignard Park, partner with Knox Abbott Drive merchants, and support events at the Cayce Riverwalk. We offer special rates for Cayce city employees, teachers at local schools, and first responders. When you choose our service, you support a business invested in making Cayce an even better place to live and work.',
    },
    testimonials: [
      {
        name: 'Brian Anderson',
        location: 'Avenues, Cayce',
        rating: 5,
        text: 'Outstanding work! My truck was covered in red clay from construction sites. They got it completely clean, including the undercarriage. The attention to detail was impressive. Definitely the best detailing service in Cayce.',
        date: '2024-03-05',
        service: 'Heavy-Duty Truck Detail',
      },
      {
        name: 'Emily Rodriguez',
        location: 'Dixiana',
        rating: 5,
        text: 'The mobile service was so convenient! They came to our house in Dixiana and detailed both our cars while we were home. Both vehicles look brand new. Professional, friendly, and thorough. Highly recommend!',
        date: '2024-02-14',
        service: 'Two-Vehicle Detail Package',
      },
      {
        name: 'Michael Stevens',
        location: 'Downtown Cayce',
        rating: 5,
        text: "As a small business owner on Knox Abbott Drive, first impressions matter. Mikahs keeps my company vehicles looking professional with their regular maintenance program. Reliable, quality service I can count on.",
        date: '2024-01-25',
        service: 'Fleet Maintenance Package',
      },
    ],
    faqs: [
      {
        question: 'Do you serve all areas of Cayce?',
        answer:
          'Yes! We provide mobile detailing service throughout Cayce, including Downtown, the Avenues, Dixiana, Naples, and all surrounding neighborhoods. We come directly to your home or business location.',
      },
      {
        question: 'How does living near the Congaree River affect my vehicle?',
        answer:
          'The river creates higher humidity levels that can affect vehicle interiors, promoting mold and mildew growth. It also means more tree debris and biological material. Our services include humidity-resistant treatments and anti-microbial applications specifically designed for riverside environments.',
      },
      {
        question: 'Can you remove the red clay that gets all over my car?',
        answer:
          "Absolutely! Cayce's red clay soil is challenging but not impossible to remove. We use specialized cleaning agents and techniques that safely remove clay from paint, wheels, wheel wells, and undercarriages without damaging your vehicle's finish.",
      },
      {
        question: 'Do you offer services for the Riverwalk and Timmerman Trail areas?',
        answer:
          'Yes! Many of our Cayce customers live near these recreation areas. We understand the specific types of debris and dirt that accumulate from parking near trails and green spaces, and we tailor our services accordingly.',
      },
      {
        question: 'What packages do you recommend for Cayce residents?',
        answer:
          'For Cayce residents, we typically recommend our Complete Detail with protective coating to guard against humidity, plus seasonal undercarriage cleanings to remove accumulated clay and river-related debris. We can create a custom maintenance schedule based on your specific location and vehicle use.',
      },
    ],
    metaTitle:
      'Car Detailing Cayce SC | Riverwalk Area Auto Detailing | Mikahs',
    metaDescription:
      'Professional car detailing in Cayce, SC. Serving Dixiana, Riverwalk, Knox Abbott Drive & all Cayce neighborhoods. Mobile service. Book online today!',
    nearbyLocations: [
      'West Columbia',
      'Columbia',
      'Lexington',
      'South Congaree',
      'Pine Ridge',
      'Gaston',
    ],
  },
];

export const pricingTiers: any[] = [
  {
    name: 'Essential Services',
    services: [
      {
        name: 'Express Exterior Wash',
        description: 'Hand wash, dry, and tire shine',
        price: '$49',
        duration: '45 min',
        features: [
          'Hand wash exterior',
          'Wheel cleaning',
          'Tire shine',
          'Windows cleaned',
          'Quick dry and inspect',
        ],
      },
      {
        name: 'Interior Detail',
        description: 'Complete interior cleaning and protection',
        price: '$99',
        duration: '2 hours',
        features: [
          'Vacuum all surfaces',
          'Leather/fabric treatment',
          'Dashboard and console detailing',
          'Door jambs cleaned',
          'Air freshener application',
        ],
      },
    ],
  },
  {
    name: 'Premium Packages',
    services: [
      {
        name: 'Complete Detail',
        description: 'Full interior and exterior restoration',
        price: '$199',
        duration: '4 hours',
        features: [
          'Everything in Express Exterior',
          'Everything in Interior Detail',
          'Paint sealant application',
          'Engine bay cleaning',
          'Headlight restoration',
          'Pet hair removal',
        ],
      },
      {
        name: 'Ceramic Coating',
        description: 'Ultimate paint protection',
        price: '$599+',
        duration: 'Full day',
        features: [
          'Paint correction',
          'Multi-layer ceramic coating',
          '3-5 year protection',
          'Hydrophobic finish',
          'UV protection',
          'Enhanced gloss and depth',
        ],
      },
    ],
  },
];
