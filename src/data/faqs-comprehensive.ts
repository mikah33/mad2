/**
 * Comprehensive FAQ System for Mikahs Auto Detailing
 * Optimized for long-tail keywords and local SEO
 */

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
  relatedServices?: string[];
  schemaMarkup?: object;
}

export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
}

export const faqCategories: FAQCategory[] = [
  { id: 'General Detailing', name: 'General Detailing', icon: '🚗' },
  { id: 'Mobile Detailing', name: 'Mobile Detailing', icon: '🚐' },
  { id: 'Interior Detailing', name: 'Interior Detailing', icon: '🧽' },
  { id: 'Exterior Detailing', name: 'Exterior Detailing', icon: '✨' },
  { id: 'Ceramic Coating', name: 'Ceramic Coating', icon: '🛡️' },
  { id: 'Pricing & Packages', name: 'Pricing & Packages', icon: '💰' },
  { id: 'Scheduling & Service Area', name: 'Scheduling & Service Area', icon: '📅' },
  { id: 'Maintenance & Care', name: 'Maintenance & Care', icon: '🔧' }
];

export const faqs: FAQ[] = [
  // General Detailing (10 questions)
  {
    id: 'gen-1',
    category: 'General Detailing',
    question: 'What is the difference between car detailing and a regular car wash?',
    answer: 'Car detailing is a comprehensive, multi-step process that thoroughly cleans, restores, and protects every surface of your vehicle inside and out. Unlike a basic car wash that only removes surface dirt, professional detailing includes paint correction, interior deep cleaning, leather conditioning, engine bay cleaning, and protective treatments. At Mikahs Auto Detailing in Columbia SC, our detailing services take 2-4 hours compared to 15 minutes for a car wash, resulting in showroom-quality results that last for months.',
    keywords: ['car detailing vs car wash', 'difference between detailing and washing', 'what is car detailing', 'Columbia SC'],
    relatedServices: ['interior-detailing', 'exterior-detailing']
  },
  {
    id: 'gen-2',
    category: 'General Detailing',
    question: 'How long does a full car detailing take?',
    answer: 'A complete car detailing service typically takes 3-5 hours depending on your vehicle\'s size and condition. Our basic packages take about 2-3 hours, while premium services with paint correction and ceramic coating can take 5-8 hours. At Mikahs Auto Detailing, we serve Columbia, Lexington, and surrounding areas with mobile service, so you can continue your day while we detail your vehicle at your location. We never rush the process to ensure exceptional results.',
    keywords: ['how long car detailing takes', 'detailing time', 'mobile detailing Columbia SC'],
    relatedServices: ['mobile-detailing', 'packages']
  },
  {
    id: 'gen-3',
    category: 'General Detailing',
    question: 'How often should I get my car professionally detailed?',
    answer: 'Most vehicles benefit from professional detailing every 3-4 months to maintain optimal condition. However, frequency depends on usage and environment. Daily drivers in Columbia SC exposed to pollen, humidity, and sun should be detailed quarterly. Garage-kept vehicles or those driven occasionally can go 6 months between details. Regular detailing prevents damage accumulation, maintains resale value, and keeps your car looking new. We offer maintenance packages with discounted rates for recurring customers.',
    keywords: ['how often detail car', 'car detailing frequency', 'maintenance schedule Columbia SC'],
    relatedServices: ['maintenance-packages']
  },
  {
    id: 'gen-4',
    category: 'General Detailing',
    question: 'Is car detailing worth the cost?',
    answer: 'Absolutely! Professional detailing is an investment that pays dividends. Regular detailing can increase your vehicle\'s resale value by $500-$2,000 and prevents costly damage from neglect. Our Columbia SC customers report that proper detailing extends paint life, prevents interior wear, and maintains that new car feeling. When you consider that paint correction can cost $800-$1,500 to fix oxidation and scratches that regular detailing prevents, the $150-$300 quarterly investment is minimal for long-term protection.',
    keywords: ['is car detailing worth it', 'detailing value', 'resale value Columbia SC'],
    relatedServices: ['packages', 'ceramic-coating']
  },
  {
    id: 'gen-5',
    category: 'General Detailing',
    question: 'What products do you use for car detailing?',
    answer: 'We use only professional-grade products from trusted brands like Chemical Guys, Meguiar\'s Pro Line, and Adams Polishes. Our Columbia SC detailing service includes pH-balanced soaps, clay bar treatments, dual-action polishers, premium microfiber towels, and industry-leading sealants and coatings. We avoid harsh chemicals that damage surfaces and select products specifically formulated for South Carolina\'s climate—protecting against humidity, UV rays, and pollen. All products are safe for all vehicle finishes including clear coats, chrome, and plastics.',
    keywords: ['car detailing products', 'professional detailing chemicals', 'Columbia SC detailing'],
    relatedServices: ['exterior-detailing', 'ceramic-coating']
  },
  {
    id: 'gen-6',
    category: 'General Detailing',
    question: 'Do you detail trucks and SUVs?',
    answer: 'Yes! We specialize in detailing all vehicle types including trucks, SUVs, vans, and luxury vehicles throughout Columbia and Lexington SC. Larger vehicles require additional time and materials, reflected in our pricing structure. We\'re experienced with lifted trucks, work trucks with heavy dirt accumulation, family SUVs with child-related messes, and everything in between. Our mobile service means we bring professional detailing to your location, whether residential or commercial.',
    keywords: ['truck detailing Columbia SC', 'SUV detailing', 'large vehicle detailing'],
    relatedServices: ['mobile-detailing', 'pricing']
  },
  {
    id: 'gen-7',
    category: 'General Detailing',
    question: 'Can you remove scratches from my car?',
    answer: 'Yes, we can remove or significantly reduce most scratches through our paint correction services. Light scratches, swirl marks, and oxidation are typically 90-100% removable using multi-stage polishing techniques. Deeper scratches that penetrate the clear coat may require touch-up paint or professional body shop repair. During our Columbia SC mobile detailing service, we assess your paint condition and recommend the appropriate correction level. Most customers see dramatic improvement with our two-stage polish treatment.',
    keywords: ['remove car scratches Columbia SC', 'paint correction', 'scratch removal detailing'],
    relatedServices: ['exterior-detailing', 'paint-correction']
  },
  {
    id: 'gen-8',
    category: 'General Detailing',
    question: 'What is paint correction and do I need it?',
    answer: 'Paint correction is a multi-step process that removes imperfections like swirl marks, scratches, oxidation, and water spots through precision machine polishing. You might need it if your paint looks dull, has visible swirls under light, or feels rough to the touch. Most vehicles in Columbia SC over 2 years old benefit from paint correction due to our intense sun and environmental contaminants. The process restores clarity and depth to paint, often making 5-year-old cars look brand new. We typically recommend it before ceramic coating application.',
    keywords: ['what is paint correction', 'paint correction Columbia SC', 'swirl mark removal'],
    relatedServices: ['exterior-detailing', 'ceramic-coating']
  },
  {
    id: 'gen-9',
    category: 'General Detailing',
    question: 'Do you offer fleet detailing services?',
    answer: 'Yes! We provide comprehensive fleet detailing services for businesses throughout Columbia, Lexington, and surrounding SC areas. Whether you have 3 vehicles or 30, we offer volume discounts and flexible scheduling to minimize downtime. Our mobile service means we come to your location during off-hours if needed. Fleet detailing maintains professional appearance, protects company assets, and can be tax-deductible as business maintenance. We serve construction companies, real estate agencies, medical practices, and any business with company vehicles.',
    keywords: ['fleet detailing Columbia SC', 'business car detailing', 'commercial detailing services'],
    relatedServices: ['mobile-detailing', 'commercial-packages']
  },
  {
    id: 'gen-10',
    category: 'General Detailing',
    question: 'What is the best time of year to detail my car?',
    answer: 'While car detailing is beneficial year-round, spring and fall are optimal times in Columbia SC. Spring detailing removes winter grime and prepares your vehicle for summer sun exposure. Fall detailing protects against winter moisture and prepares paint for cooler months. However, don\'t wait—detailing provides benefits whenever performed. Summer detailing combats UV damage and pollen, while winter detailing removes road salt and protects against moisture. We recommend quarterly detailing regardless of season for optimal protection.',
    keywords: ['best time detail car', 'seasonal car detailing Columbia SC', 'when to detail car'],
    relatedServices: ['maintenance-packages', 'exterior-detailing']
  },

  // Mobile Detailing (8 questions)
  {
    id: 'mob-1',
    category: 'Mobile Detailing',
    question: 'How much does mobile car detailing cost in Columbia SC?',
    answer: 'Mobile car detailing in Columbia SC typically ranges from $150-$400 depending on vehicle size and service level. Our basic packages start at $150 for sedans, $175 for SUVs, and $200 for trucks. Premium packages with paint correction and ceramic coating range from $300-$600. Mobile service includes the same quality as shop detailing but with added convenience—no travel time or waiting. We serve Columbia, Lexington, Irmo, Forest Acres, and surrounding areas with no additional travel fees within 20 miles.',
    keywords: ['mobile car detailing cost Columbia SC', 'car detailing prices', 'mobile detailing Columbia'],
    relatedServices: ['pricing', 'packages']
  },
  {
    id: 'mob-2',
    category: 'Mobile Detailing',
    question: 'Do you detail cars at my home in Lexington SC?',
    answer: 'Yes! We provide full mobile detailing services to residential locations throughout Lexington, SC. Our mobile unit comes fully equipped with water, power, and professional equipment—we just need a driveway or parking area. You can remain home, work remotely, or run errands while we transform your vehicle. We serve all Lexington neighborhoods including Lake Murray, Oak Grove, Red Bank, and surrounding areas. Most services take 2-4 hours and you\'ll receive text updates throughout the process.',
    keywords: ['mobile detailing Lexington SC', 'at-home car detailing', 'residential mobile detailing'],
    relatedServices: ['mobile-detailing', 'service-area']
  },
  {
    id: 'mob-3',
    category: 'Mobile Detailing',
    question: 'What do I need to provide for mobile detailing?',
    answer: 'Nothing! Our mobile detailing unit is completely self-contained with water tanks, generators, and all necessary equipment. We only need access to a flat surface like a driveway, parking lot, or street parking. For interior detailing, we just need your vehicle unlocked. We bring everything else—power, water, cleaning products, tools, and expertise. Many Columbia SC customers leave their keys in a lockbox and go about their day. We handle everything from setup to cleanup, leaving no mess behind.',
    keywords: ['mobile detailing requirements', 'what\'s needed for mobile detailing', 'Columbia SC mobile service'],
    relatedServices: ['mobile-detailing', 'service-details']
  },
  {
    id: 'mob-4',
    category: 'Mobile Detailing',
    question: 'Can you detail my car at work?',
    answer: 'Absolutely! Workplace detailing is one of our most popular services in Columbia SC. We detail vehicles at offices, medical practices, retail locations, and any workplace with parking. Simply coordinate with your employer, provide us with parking details, and leave your keys with reception or in a lockbox. Your car will be showroom-ready when you finish work. Many Columbia businesses encourage this perk for employees. We\'re professional, quiet, and leave no mess—just a beautifully detailed vehicle.',
    keywords: ['car detailing at work Columbia SC', 'office mobile detailing', 'workplace car detailing'],
    relatedServices: ['mobile-detailing', 'commercial-service']
  },
  {
    id: 'mob-5',
    category: 'Mobile Detailing',
    question: 'Do you offer same-day mobile car detailing?',
    answer: 'Yes, we offer same-day service based on availability! Call or text us before noon and we\'ll do our best to accommodate same-day requests in Columbia, Lexington, and nearby areas. Last-minute needs happen—business meetings, vehicle sales, special events—and we understand the urgency. While we recommend scheduling 2-3 days ahead for best availability, we maintain flexibility for emergency detailing. Same-day service may have limited package options but we\'ll work to meet your timeline and expectations.',
    keywords: ['same-day car detailing Columbia SC', 'emergency mobile detailing', 'last-minute detailing'],
    relatedServices: ['mobile-detailing', 'scheduling']
  },
  {
    id: 'mob-6',
    category: 'Mobile Detailing',
    question: 'What areas do you serve around Columbia SC?',
    answer: 'We provide mobile detailing throughout the Greater Columbia area including Columbia, Lexington, Irmo, Forest Acres, Cayce, West Columbia, Blythewood, Chapin, and Lake Murray communities. Our standard service radius is 20 miles from downtown Columbia with no travel fees. We\'ll travel farther for premium packages or fleet services. Popular service areas include Lake Murray Shores, Harbison, Sandhills, Shandon, Rosewood, and Five Points neighborhoods. Contact us to confirm service availability in your specific location.',
    keywords: ['mobile detailing service area Columbia SC', 'where do you detail cars', 'Lexington car detailing'],
    relatedServices: ['service-area', 'mobile-detailing']
  },
  {
    id: 'mob-7',
    category: 'Mobile Detailing',
    question: 'Is mobile detailing as good as shop detailing?',
    answer: 'Yes! Mobile detailing provides identical quality to shop services because we use the same professional equipment, products, and techniques. The only difference is location—we come to you. Our mobile unit features commercial-grade extractors, dual-action polishers, pressure washers, and water filtration systems. Many customers prefer mobile service because vehicles aren\'t exposed to shop dust or other cars. Plus, the convenience factor is unmatched. Our Columbia SC mobile detailing delivers the same exceptional results you\'d receive at any premium detail shop.',
    keywords: ['mobile vs shop detailing', 'mobile detailing quality', 'Columbia SC mobile service'],
    relatedServices: ['mobile-detailing', 'service-comparison']
  },
  {
    id: 'mob-8',
    category: 'Mobile Detailing',
    question: 'How do I schedule mobile detailing service?',
    answer: 'Scheduling is easy! Call, text, or use our online booking system at MikahsAutoDetailing.com. Provide your location in the Columbia SC area, vehicle type, preferred date/time, and desired service level. We\'ll confirm availability within 24 hours (usually much faster). You can book 1-2 weeks ahead for best availability or request same-day service. We send reminder texts 24 hours before and when we\'re en route. Payment is accepted via card, Venmo, or cash upon completion. First-time customers receive 10% off!',
    keywords: ['schedule mobile detailing Columbia SC', 'book car detailing', 'mobile detailing appointment'],
    relatedServices: ['scheduling', 'booking']
  },

  // Interior Detailing (8 questions)
  {
    id: 'int-1',
    category: 'Interior Detailing',
    question: 'What is included in interior car detailing?',
    answer: 'Our comprehensive interior detailing includes thorough vacuuming of carpets, seats, and trunk; steam cleaning or shampooing of all upholstery and floor mats; leather cleaning and conditioning; dashboard, console, and door panel cleaning and protection; window cleaning inside; air vent detailing; cup holder cleaning; and odor elimination treatment. We address every surface from headliner to pedals. For Columbia SC vehicles, we pay special attention to pollen removal and humidity-related issues. The result is a like-new interior that looks, feels, and smells fresh.',
    keywords: ['interior car detailing includes', 'what\'s in interior detail', 'Columbia SC interior cleaning'],
    relatedServices: ['interior-detailing', 'packages']
  },
  {
    id: 'int-2',
    category: 'Interior Detailing',
    question: 'Can you remove pet hair from my car interior?',
    answer: 'Absolutely! Pet hair removal is one of our specialties. We use a combination of specialized tools including rubber brushes, pet hair stones, shop vacuums with HEPA filters, and compressed air to extract embedded pet hair from carpets, seats, and crevices. Even heavily shed interiors come clean. Many Columbia SC pet owners are amazed at the transformation. We also apply fabric protectant to make future cleaning easier and can add ozone treatment to eliminate pet odors. Let us know about pets when booking so we allocate appropriate time.',
    keywords: ['remove pet hair from car Columbia SC', 'pet hair detailing', 'dog hair car cleaning'],
    relatedServices: ['interior-detailing', 'odor-removal']
  },
  {
    id: 'int-3',
    category: 'Interior Detailing',
    question: 'How do you remove stains from car seats?',
    answer: 'We use professional-grade extraction equipment and specialized cleaners formulated for automotive upholstery. The process involves pre-treating stains, applying hot water extraction (like a carpet cleaner but designed for cars), agitating fibers, and extracting moisture with powerful suction. Most common stains—coffee, soda, food, dirt, grease—are 90-100% removable. Set-in stains may require multiple treatments. For leather seats, we use pH-balanced cleaners that won\'t damage the finish. Columbia SC customers with children or delivery drivers love our stain removal expertise.',
    keywords: ['remove car seat stains Columbia SC', 'upholstery stain removal', 'car seat cleaning'],
    relatedServices: ['interior-detailing', 'deep-cleaning']
  },
  {
    id: 'int-4',
    category: 'Interior Detailing',
    question: 'Do you clean leather car seats?',
    answer: 'Yes! Leather requires special care and we\'re experts at leather cleaning and conditioning. We use pH-balanced leather cleaners that remove dirt and oils without drying or cracking the material. After cleaning, we apply premium conditioners that restore moisture, prevent cracking, and provide UV protection—essential in South Carolina\'s sun. The process makes leather soft, supple, and protects against premature aging. We service all leather types including standard, perforated, and exotic leathers found in luxury vehicles throughout Columbia and Lexington.',
    keywords: ['leather car seat cleaning Columbia SC', 'leather conditioning', 'luxury car interior detailing'],
    relatedServices: ['interior-detailing', 'leather-care']
  },
  {
    id: 'int-5',
    category: 'Interior Detailing',
    question: 'Can you remove smoke smell from my car?',
    answer: 'Yes! Smoke odor removal is challenging but achievable with professional techniques. Our process includes deep shampooing all fabric surfaces, wiping down all hard surfaces with degreasing agents, replacing cabin air filter, and finishing with ozone treatment that destroys odor molecules at the molecular level. The ozone generator runs for 1-2 hours after detailing. Most smoke odors are 90-95% eliminated. Heavy smokers may need repeat treatments. Many Columbia SC customers preparing vehicles for sale use our smoke removal service to increase value.',
    keywords: ['remove smoke smell from car Columbia SC', 'cigarette odor removal', 'ozone treatment car'],
    relatedServices: ['interior-detailing', 'odor-removal']
  },
  {
    id: 'int-6',
    category: 'Interior Detailing',
    question: 'How long does interior detailing take?',
    answer: 'Interior-only detailing typically takes 2-3 hours depending on vehicle size and condition. A well-maintained sedan might take 2 hours while a neglected SUV with pet hair and stains could take 3-4 hours. We never rush the process—thorough cleaning requires adequate time. During our Columbia SC mobile service, we provide time estimates during booking and send progress updates. You can go about your day while we work. If you need your car by a specific time, let us know and we\'ll schedule accordingly.',
    keywords: ['interior detailing time', 'how long interior cleaning takes', 'Columbia SC mobile detailing'],
    relatedServices: ['interior-detailing', 'scheduling']
  },
  {
    id: 'int-7',
    category: 'Interior Detailing',
    question: 'Do you clean car floor mats?',
    answer: 'Yes! Floor mats receive thorough cleaning regardless of material. Carpet mats are extracted with hot water and shampooed, then air-dried or blow-dried. Rubber mats are pressure-washed, scrubbed, and dressed with protectant. We clean mats separately from the vehicle for best results. Heavily soiled mats from Columbia SC\'s clay soil and pollen get special attention. If mats are beyond restoration, we\'ll recommend replacement. Properly cleaned mats not only look better but last longer and contribute to overall interior freshness.',
    keywords: ['car floor mat cleaning Columbia SC', 'floor mat detailing', 'rubber mat cleaning'],
    relatedServices: ['interior-detailing', 'carpet-cleaning']
  },
  {
    id: 'int-8',
    category: 'Interior Detailing',
    question: 'Can you detail my car if the interior is really dirty?',
    answer: 'Absolutely! We specialize in heavily soiled interiors. Construction workers, landscapers, families with kids, pet owners, and delivery drivers throughout Columbia SC trust us with their dirtiest vehicles. Extreme dirt just requires more time and attention—we\'re equipped and experienced to handle it. We might recommend our deep cleaning package which includes additional extraction passes, stronger pre-treatments, and extra time. There\'s no judgment, only professional service. We\'ve transformed interiors that looked beyond hope into like-new condition.',
    keywords: ['very dirty car interior detailing Columbia SC', 'extreme car cleaning', 'heavily soiled vehicle'],
    relatedServices: ['interior-detailing', 'deep-cleaning']
  },

  // Exterior Detailing (8 questions)
  {
    id: 'ext-1',
    category: 'Exterior Detailing',
    question: 'What is included in exterior car detailing?',
    answer: 'Complete exterior detailing includes multi-stage hand washing with pH-balanced soap, clay bar treatment to remove bonded contaminants, tire and wheel cleaning with acid-free cleaners, wheel well cleaning, door jamb detailing, trim restoration, window cleaning, and application of premium wax or sealant. We also clean exhaust tips, badges, and grilles. For Columbia SC vehicles, we focus heavily on pollen, tree sap, and bug removal. The result is a deep, glossy shine with protection lasting 2-3 months.',
    keywords: ['exterior car detailing includes', 'outside car cleaning', 'Columbia SC exterior detail'],
    relatedServices: ['exterior-detailing', 'packages']
  },
  {
    id: 'ext-2',
    category: 'Exterior Detailing',
    question: 'What is clay bar treatment and do I need it?',
    answer: 'Clay bar treatment removes bonded contaminants that washing can\'t eliminate—industrial fallout, rail dust, brake dust, tree sap, and tar. The clay literally pulls contamination from paint pores. You need it if your paint feels rough or gritty when you run your hand across it. Most Columbia SC vehicles benefit from clay bar every 6-12 months due to environmental exposure. The treatment leaves paint glass-smooth, which improves wax adhesion and enhances gloss. It\'s essential before paint correction or ceramic coating.',
    keywords: ['clay bar treatment Columbia SC', 'what is clay bar', 'paint decontamination'],
    relatedServices: ['exterior-detailing', 'paint-correction']
  },
  {
    id: 'ext-3',
    category: 'Exterior Detailing',
    question: 'How do you clean wheels and tires?',
    answer: 'We use a comprehensive wheel cleaning process starting with acid-free wheel cleaners that dissolve brake dust without damaging finishes. Each wheel is scrubbed with dedicated brushes—including lug nut brushes and wheel barrel brushes for inner surfaces. Tires are degreased, scrubbed, and dressed with professional tire shine. We clean wheel wells to remove packed dirt and debris. Special attention goes to chrome, painted, or ceramic-coated wheels. Columbia SC customers appreciate that clean wheels dramatically improve overall appearance and we protect all wheel types.',
    keywords: ['wheel cleaning Columbia SC', 'tire detailing', 'brake dust removal'],
    relatedServices: ['exterior-detailing', 'wheel-care']
  },
  {
    id: 'ext-4',
    category: 'Exterior Detailing',
    question: 'Can you remove water spots from my car?',
    answer: 'Yes! Water spots form when mineral-rich water dries on paint, leaving deposits that etch the surface. Light water spots respond to clay bar and polish. Moderate spots require compound and polish. Severe etching needs wet sanding and multi-stage correction. Most Columbia SC water spots are light to moderate and 90-100% removable with our paint correction service. We finish with sealant or ceramic coating to prevent future spotting. Regular maintenance and proper drying techniques help prevent water spots from forming.',
    keywords: ['remove water spots Columbia SC', 'water spot removal detailing', 'paint correction'],
    relatedServices: ['exterior-detailing', 'paint-correction']
  },
  {
    id: 'ext-5',
    category: 'Exterior Detailing',
    question: 'What type of wax do you use?',
    answer: 'We use professional-grade carnauba paste wax or synthetic polymer sealants depending on your preference and needs. Carnauba provides warm, deep gloss with 2-3 month protection—ideal for show cars and enthusiasts. Synthetic sealants offer superior durability (3-6 months) and UV protection—perfect for Columbia SC\'s intense sun. Premium packages include ceramic spray sealants lasting 6-12 months. We discuss options during booking based on your priorities—appearance, protection level, or longevity. All products are safe for all paint types.',
    keywords: ['car wax types Columbia SC', 'what wax is best', 'paint protection options'],
    relatedServices: ['exterior-detailing', 'paint-protection']
  },
  {
    id: 'ext-6',
    category: 'Exterior Detailing',
    question: 'Do you restore faded plastic trim?',
    answer: 'Yes! Faded, grey plastic trim is completely restorable. We use professional trim restoration products that penetrate the plastic and restore original black color. The treatment lasts 6-12 months depending on sun exposure. For severe fading, we may use heat restoration techniques. Many Columbia SC customers are amazed seeing their grey trim return to deep black. This service applies to bumpers, door handles, mirror housings, and window trim. Restored trim dramatically improves your vehicle\'s overall appearance and can look better than new.',
    keywords: ['restore faded trim Columbia SC', 'plastic trim restoration', 'black trim renewal'],
    relatedServices: ['exterior-detailing', 'trim-restoration']
  },
  {
    id: 'ext-7',
    category: 'Exterior Detailing',
    question: 'Can you remove tree sap from my car?',
    answer: 'Absolutely! Tree sap is common in Columbia SC and can damage paint if left untreated. We use specialized solvents that dissolve sap without harming clear coat. Fresh sap removes easily; older, hardened sap requires more time and careful work. After removal, we polish the area to restore gloss and apply sealant for protection. Prevention is key—park away from trees when possible and detail regularly. If you notice sap, bring your car in promptly. The longer sap sits, the harder it becomes to remove without paint damage.',
    keywords: ['remove tree sap Columbia SC', 'tree sap removal car', 'paint contamination'],
    relatedServices: ['exterior-detailing', 'paint-correction']
  },
  {
    id: 'ext-8',
    category: 'Exterior Detailing',
    question: 'Do you detail headlights?',
    answer: 'Yes! Headlight restoration is included in premium packages or available as an add-on. Oxidized, yellowed, or hazy headlights are sanded with progressively finer grits, polished to clarity, and sealed with UV-resistant coating. The process restores up to 90% of original clarity, dramatically improving appearance and nighttime visibility. South Carolina\'s intense UV exposure causes rapid headlight oxidation—most vehicles over 5 years old need restoration. Clear headlights also pass inspection requirements and increase resale value. The transformation is dramatic and immediate.',
    keywords: ['headlight restoration Columbia SC', 'restore foggy headlights', 'headlight cleaning'],
    relatedServices: ['exterior-detailing', 'headlight-restoration']
  },

  // Ceramic Coating (8 questions)
  {
    id: 'cer-1',
    category: 'Ceramic Coating',
    question: 'How long does ceramic coating last in South Carolina?',
    answer: 'Professional ceramic coatings last 2-5 years in South Carolina\'s climate with proper maintenance. Entry-level coatings provide 2-3 years of protection while premium nano-ceramic coatings last 5+ years. South Carolina\'s intense UV exposure, humidity, and pollen challenge coatings more than moderate climates, so proper installation and maintenance are crucial. At Mikahs Auto Detailing, we use professional-grade coatings with proven durability in our climate. Regular washing and annual inspections extend coating life. Most Columbia customers see 3-4 years from mid-tier coatings with basic maintenance.',
    keywords: ['ceramic coating durability South Carolina', 'how long ceramic coating lasts', 'Columbia SC ceramic coating'],
    relatedServices: ['ceramic-coating', 'paint-protection']
  },
  {
    id: 'cer-2',
    category: 'Ceramic Coating',
    question: 'What is ceramic coating and is it worth it?',
    answer: 'Ceramic coating is a liquid polymer that chemically bonds to paint, creating a protective layer that\'s harder than clear coat. Benefits include extreme gloss, hydrophobic properties (water beads and rolls off), protection from UV rays, chemical resistance, easier cleaning, and scratch resistance. For Columbia SC vehicles exposed to intense sun, pollen, and environmental contaminants, ceramic coating is absolutely worth the investment. While professional application costs $500-$1,500, you save on frequent waxing, paint correction, and potential damage. Most customers recoup costs through reduced maintenance and increased resale value.',
    keywords: ['what is ceramic coating', 'ceramic coating worth it Columbia SC', 'paint protection benefits'],
    relatedServices: ['ceramic-coating', 'packages']
  },
  {
    id: 'cer-3',
    category: 'Ceramic Coating',
    question: 'How much does ceramic coating cost in Columbia SC?',
    answer: 'Ceramic coating costs in Columbia SC range from $500-$1,500 depending on vehicle size, coating quality, and preparation required. Sedans typically start at $600, SUVs at $800, and trucks at $900. This includes full paint correction, decontamination, coating application (usually 2 layers), and 24-hour cure time. Premium coatings with longer warranties cost more. DIY kits cost $50-$100 but lack professional preparation and application expertise, resulting in inferior results. Professional application at Mikahs Auto Detailing includes warranty, proper prep, and expertise that DIY cannot match.',
    keywords: ['ceramic coating cost Columbia SC', 'ceramic coating price', 'professional coating cost'],
    relatedServices: ['ceramic-coating', 'pricing']
  },
  {
    id: 'cer-4',
    category: 'Ceramic Coating',
    question: 'Do I need paint correction before ceramic coating?',
    answer: 'Yes! Paint correction is essential before ceramic coating because the coating locks in whatever is underneath—including scratches, swirl marks, and oxidation. Ceramic coating enhances gloss and depth, so imperfections become more visible, not less. We always perform at minimum a single-stage polish, and most Columbia SC vehicles benefit from two-stage correction. This removes 80-95% of defects, creating a flawless canvas. Skipping correction means paying premium prices for coating over imperfect paint. Our coating packages include necessary correction for optimal results.',
    keywords: ['paint correction before ceramic coating', 'prepare for ceramic coating Columbia SC', 'coating prep'],
    relatedServices: ['paint-correction', 'ceramic-coating']
  },
  {
    id: 'cer-5',
    category: 'Ceramic Coating',
    question: 'Can I wash my car normally after ceramic coating?',
    answer: 'Yes, but with some adjustments. Wait 7 days before the first wash to allow full curing. After that, use pH-neutral car soap (not dish soap or harsh chemicals) and soft microfiber mitts or wash pads. Avoid automatic car washes with harsh brushes. Touchless washes or hand washing are best. The beauty of ceramic coating is that it makes washing easier—dirt doesn\'t stick as readily. Most Columbia SC customers find they can wash less frequently and cleaning takes half the time. We provide detailed maintenance instructions with every coating service.',
    keywords: ['wash car after ceramic coating', 'ceramic coating maintenance Columbia SC', 'care after coating'],
    relatedServices: ['ceramic-coating', 'maintenance']
  },
  {
    id: 'cer-6',
    category: 'Ceramic Coating',
    question: 'Does ceramic coating prevent scratches?',
    answer: 'Ceramic coating provides scratch resistance but not scratch-proof protection. The coating is harder than clear coat (9H hardness vs 4H), so it resists minor scratches from washing, light contact, and environmental factors better than unprotected paint. However, it won\'t prevent key scratches, shopping cart dings, or rock chips. Think of it as a sacrificial layer that protects your clear coat. Combined with paint protection film on high-impact areas, you get maximum protection. Many Columbia SC customers add PPF to front bumpers and hoods, then ceramic coat the entire vehicle.',
    keywords: ['does ceramic coating prevent scratches', 'ceramic coating scratch resistance', 'paint protection Columbia SC'],
    relatedServices: ['ceramic-coating', 'paint-protection-film']
  },
  {
    id: 'cer-7',
    category: 'Ceramic Coating',
    question: 'Can ceramic coating be removed?',
    answer: 'Yes, but it requires professional removal. Ceramic coating bonds chemically to paint, so removal involves polishing with compound and cutting pads—essentially paint correction that removes the coating layer by layer. This is why proper application matters—poorly applied coating creates high spots and requires aggressive removal that removes clear coat. Professional application at Mikahs Auto Detailing in Columbia SC ensures even application that, if removal is ever needed, comes off cleanly. Most customers keep coating until reapplication time (3-5 years) rather than removing it.',
    keywords: ['remove ceramic coating', 'ceramic coating removal Columbia SC', 'can coating be removed'],
    relatedServices: ['ceramic-coating', 'paint-correction']
  },
  {
    id: 'cer-8',
    category: 'Ceramic Coating',
    question: 'What is the difference between ceramic coating and wax?',
    answer: 'Ceramic coating and wax differ fundamentally. Wax is a sacrificial layer that sits on paint, providing 1-3 months of protection and requiring frequent reapplication. Ceramic coating chemically bonds to paint, creating a semi-permanent layer lasting 2-5 years. Coating provides superior protection against UV, chemicals, and contaminants, plus hydrophobic properties that far exceed wax. However, coating costs 10-20 times more upfront. For Columbia SC\'s harsh climate, coating makes sense for long-term ownership while wax works for budget-conscious customers or those who detail frequently.',
    keywords: ['ceramic coating vs wax', 'difference coating and wax', 'paint protection comparison Columbia SC'],
    relatedServices: ['ceramic-coating', 'exterior-detailing']
  },

  // Pricing & Packages (8 questions)
  {
    id: 'pri-1',
    category: 'Pricing & Packages',
    question: 'How much does car detailing cost in Columbia SC?',
    answer: 'Car detailing in Columbia SC ranges from $150-$600 depending on vehicle size, condition, and service level. Basic packages (wash, interior vacuum, windows) start at $150 for sedans. Mid-tier packages with full interior and exterior detailing run $250-$350. Premium services including paint correction and ceramic coating cost $400-$600+. We offer transparent pricing with no hidden fees. Mobile service is included at no extra charge within 20 miles. First-time customers receive 10% off, and we offer package discounts for regular maintenance. Exact pricing provided during booking.',
    keywords: ['car detailing cost Columbia SC', 'detailing prices', 'how much is car detailing'],
    relatedServices: ['pricing', 'packages']
  },
  {
    id: 'pri-2',
    category: 'Pricing & Packages',
    question: 'Do you offer any discounts or package deals?',
    answer: 'Yes! We offer several ways to save: 10% off for first-time customers, 15% discount when you book 3 or more services in advance (quarterly maintenance plan), fleet discounts for 3+ vehicles, referral bonounts ($25 credit when referred customer books), seasonal promotions throughout the year, and add-on discounts when bundling services. Columbia SC customers who commit to quarterly detailing save 15-20% annually compared to one-off services. We also offer bundled packages (interior + exterior + coating) with built-in savings. Check our website or call for current promotions.',
    keywords: ['car detailing discounts Columbia SC', 'detailing package deals', 'save on detailing'],
    relatedServices: ['pricing', 'packages', 'promotions']
  },
  {
    id: 'pri-3',
    category: 'Pricing & Packages',
    question: 'What is your most popular detailing package?',
    answer: 'Our "Complete Detail Package" is most popular with Columbia SC customers. It includes full interior deep cleaning with extraction, complete exterior wash and clay bar treatment, tire and wheel detailing, trim restoration, and 6-month sealant protection. Priced at $275 for sedans, $325 for SUVs, and $375 for trucks, it provides exceptional value with comprehensive coverage inside and out. Most customers choose this quarterly for maintenance. The package takes 3-4 hours and leaves vehicles looking showroom-new. We customize based on condition—heavily soiled vehicles may need deep cleaning add-on.',
    keywords: ['best car detailing package Columbia SC', 'popular detailing service', 'full detail package'],
    relatedServices: ['packages', 'full-detail']
  },
  {
    id: 'pri-4',
    category: 'Pricing & Packages',
    question: 'Do you charge extra for heavily soiled vehicles?',
    answer: 'Yes, heavily soiled vehicles may incur additional charges due to extra time and materials required. Our standard packages assume normal wear and neglect—regular use, light dirt, minor stains. However, extreme conditions (pet hair throughout, severe staining, excessive mud, smoke residue) require 1-3 additional hours. We assess condition during booking or upon arrival and discuss any additional charges before proceeding. Most Columbia SC customers appreciate the transparency. Additional charges typically run $50-$100. We never surprise you with unexpected costs.',
    keywords: ['extra charge dirty car Columbia SC', 'heavily soiled vehicle cost', 'additional detailing fees'],
    relatedServices: ['pricing', 'deep-cleaning']
  },
  {
    id: 'pri-5',
    category: 'Pricing & Packages',
    question: 'Is there a difference in price for SUVs and trucks?',
    answer: 'Yes, larger vehicles cost more due to increased surface area, time, and materials. Our pricing structure: sedans and coupes are base price, SUVs and crossovers are +$50, full-size trucks and vans are +$75-100, and oversized vehicles (Suburbans, Expeditions, crew-cab trucks) are +$100-150. For example, our Complete Detail is $275 for sedans, $325 for SUVs, and $375 for trucks. Size directly impacts time (3 hours vs 4-5 hours) and product usage. Columbia SC customers find the pricing fair and proportional to vehicle size.',
    keywords: ['SUV detailing cost Columbia SC', 'truck detailing price', 'large vehicle pricing'],
    relatedServices: ['pricing', 'vehicle-types']
  },
  {
    id: 'pri-6',
    category: 'Pricing & Packages',
    question: 'Can I get just interior or just exterior detailing?',
    answer: 'Absolutely! We offer interior-only and exterior-only packages for customers with specific needs. Interior-only detailing starts at $125 (perfect for new cars or when exterior is fine). Exterior-only starts at $100 (great for maintained interiors or quick refresh). Many Columbia SC customers alternate—interior in summer (AC season) and exterior in spring/fall. Some prefer interior quarterly and exterior twice yearly. We customize to your needs and budget. Bundling interior + exterior saves 10-15% versus separate services, but we never push services you don\'t need.',
    keywords: ['interior only detailing Columbia SC', 'exterior only car cleaning', 'partial detailing'],
    relatedServices: ['interior-detailing', 'exterior-detailing', 'packages']
  },
  {
    id: 'pri-7',
    category: 'Pricing & Packages',
    question: 'Do you offer maintenance packages for regular customers?',
    answer: 'Yes! Our maintenance packages provide the best value for regular detailing. The Quarterly Maintenance Plan includes 4 complete details per year (every 3 months) at 15% discount—effectively getting one service free. You choose specific months and we send reminders. The Monthly Maintenance Plan offers basic detail monthly at 20% off regular pricing, perfect for daily drivers and luxury vehicles. Columbia SC customers love the convenience, priority scheduling, and guaranteed availability. Packages lock in rates for one year regardless of future price increases. Commitment is optional—pause or cancel anytime.',
    keywords: ['detailing maintenance packages Columbia SC', 'regular car detailing plan', 'recurring detailing discount'],
    relatedServices: ['maintenance-packages', 'pricing']
  },
  {
    id: 'pri-8',
    category: 'Pricing & Packages',
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, Amex, Discover), debit cards, Venmo, Zelle, Apple Pay, and cash. Payment is due upon service completion. For mobile service in Columbia SC, we process cards via Square—fast, secure, and contactless. You receive an itemized receipt via email immediately. For fleet and commercial accounts, we offer net-30 invoicing terms after account setup. No checks accepted. First-time customers can pay however is most convenient. We also offer Venmo and Zelle for customers who prefer peer-to-peer payment.',
    keywords: ['car detailing payment methods Columbia SC', 'how to pay for detailing', 'detailing payment options'],
    relatedServices: ['payment', 'booking']
  },

  // Scheduling & Service Area (6 questions)
  {
    id: 'sch-1',
    category: 'Scheduling & Service Area',
    question: 'How far in advance should I book car detailing?',
    answer: 'We recommend booking 3-7 days in advance for best availability, especially during spring and fall (peak seasons in Columbia SC). However, we often accommodate same-day and next-day requests depending on schedule. Weekends fill fastest, so book 1-2 weeks ahead for Saturday/Sunday service. Weekday availability is generally better with 2-3 day notice. For special events or vehicle sales, book as early as possible. We maintain flexibility and will always try to accommodate urgent needs. Premium services requiring 5+ hours should be booked at least one week ahead.',
    keywords: ['book car detailing in advance Columbia SC', 'schedule detailing appointment', 'when to book detailing'],
    relatedServices: ['scheduling', 'booking']
  },
  {
    id: 'sch-2',
    category: 'Scheduling & Service Area',
    question: 'What are your service hours?',
    answer: 'We operate Monday through Saturday, 8:00 AM to 6:00 PM, with flexible scheduling for mobile service. Most appointments start between 9 AM and 3 PM to allow completion during daylight hours. For Columbia SC workplace detailing, we can start as early as 7:30 AM or work until 7 PM by arrangement. Sunday appointments are available for premium packages ($50 premium). We avoid detailing during rain or extreme heat (above 95°F) for quality reasons. Holiday schedules vary—contact us for availability. Emergency/rush service may be available outside normal hours.',
    keywords: ['car detailing hours Columbia SC', 'when is detailing available', 'service schedule'],
    relatedServices: ['scheduling', 'hours']
  },
  {
    id: 'sch-3',
    category: 'Scheduling & Service Area',
    question: 'Do you detail cars in the rain?',
    answer: 'Generally no. Rain interferes with exterior detailing, prevents proper drying, and affects product performance. However, we can perform interior-only detailing during rain, and our mobile unit provides some weather protection for quick exterior work. For Columbia SC\'s afternoon thunderstorms, we monitor weather closely and may adjust start times. If rain begins during service, we move to interior work and complete exterior after weather clears. We\'ll contact you if weather requires rescheduling. Your satisfaction matters more than our schedule—we won\'t rush or compromise quality due to weather.',
    keywords: ['car detailing in rain Columbia SC', 'weather and detailing', 'rain delay detailing'],
    relatedServices: ['scheduling', 'weather-policy']
  },
  {
    id: 'sch-4',
    category: 'Scheduling & Service Area',
    question: 'What is your cancellation policy?',
    answer: 'We understand plans change. Cancel or reschedule up to 24 hours before your appointment with no penalty—simply call, text, or email. Cancellations within 24 hours incur a $50 fee to compensate for lost scheduling opportunities (waived for emergencies or severe weather). No-shows are charged 50% of the scheduled service. Columbia SC customers appreciate that we honor the same policy—if we must cancel or reschedule for any reason, you receive 10% off your next service. We communicate proactively about any schedule changes.',
    keywords: ['car detailing cancellation policy Columbia SC', 'reschedule detailing', 'missed appointment fee'],
    relatedServices: ['scheduling', 'policies']
  },
  {
    id: 'sch-5',
    category: 'Scheduling & Service Area',
    question: 'Can you detail my car while I am at work in Columbia?',
    answer: 'Absolutely! Workplace detailing is one of our most popular services. Simply provide your workplace address, parking location, and key access method (drop-off with reception, lockbox, door code). We arrive at the scheduled time, text you when starting and finishing, and leave your key as instructed. Your vehicle is ready when you leave work. We serve offices throughout Columbia including downtown, Harbison, Sandhill, and Fort Jackson areas. Many employers encourage this benefit. The ultimate convenience—productive workday, detailed vehicle.',
    keywords: ['car detailing at work Columbia SC', 'workplace mobile detailing', 'detail car while working'],
    relatedServices: ['mobile-detailing', 'workplace-service']
  },
  {
    id: 'sch-6',
    category: 'Scheduling & Service Area',
    question: 'Do you travel to Lake Murray for mobile detailing?',
    answer: 'Yes! We regularly service Lake Murray communities including Ballentine, Chapin, Irmo, Lexington, and lakefront properties. The Lake Murray area is within our standard 20-mile service radius from Columbia with no travel fees. We detail at homes, marinas, storage facilities, and offices throughout the Lake Murray region. Many lake residents appreciate mobile service since they don\'t need to drive to Columbia for detailing. Boat detailing is also available for lake enthusiasts. Standard rates apply regardless of specific Lake Murray location.',
    keywords: ['mobile detailing Lake Murray SC', 'car detailing Chapin SC', 'Lake Murray area service'],
    relatedServices: ['service-area', 'mobile-detailing']
  },

  // Maintenance & Care (6 questions)
  {
    id: 'mai-1',
    category: 'Maintenance & Care',
    question: 'How do I maintain my car between detailing appointments?',
    answer: 'Between professional detailings, maintain your Columbia SC vehicle with weekly washing using quality car soap, immediate removal of bird droppings and bug splatter (they etch paint), regular vacuuming of interior, wiping dashboards with microfiber cloths, keeping floor mats clean, and parking in shade when possible. Avoid automatic car washes with harsh brushes—use touchless or hand wash. Apply quick detailer spray after washing for extra shine. These simple habits extend detailing results from 3 months to 4-6 months, saving money and keeping your car looking great year-round.',
    keywords: ['maintain car between details Columbia SC', 'car care tips', 'keep car clean between detailing'],
    relatedServices: ['maintenance', 'care-tips']
  },
  {
    id: 'mai-2',
    category: 'Maintenance & Care',
    question: 'What should I do immediately after detailing?',
    answer: 'After professional detailing, avoid washing for 48 hours to allow sealants and coatings to cure (7 days for ceramic coating). Park in a garage or shaded area if possible. Don\'t use automatic car washes for at least one week. Avoid parking under trees to prevent sap and bird droppings. For interior, avoid smoking, eating, or heavy use for 24 hours to let fabrics fully dry. Most Columbia SC customers receive detailed care instructions after service. Following these guidelines maximizes your investment and extends results. We\'re always available if questions arise.',
    keywords: ['after car detailing care', 'post-detailing instructions Columbia SC', 'care after detail'],
    relatedServices: ['maintenance', 'aftercare']
  },
  {
    id: 'mai-3',
    category: 'Maintenance & Care',
    question: 'How often should I wash my car in South Carolina?',
    answer: 'In South Carolina\'s climate, wash your vehicle every 1-2 weeks. Spring requires weekly washing due to pollen accumulation. Summer demands frequent washing to remove bug splatter and bird droppings that bake onto paint in heat. Fall needs regular washing for leaves and tree debris. Winter is slightly more forgiving but salt spray near the coast requires attention. Columbia SC\'s high pollen counts make washing critical—yellow pollen contains acids that damage clear coat. More frequent washing between quarterly professional detailing maintains appearance and protection.',
    keywords: ['how often wash car South Carolina', 'car washing frequency Columbia SC', 'wash schedule'],
    relatedServices: ['maintenance', 'exterior-care']
  },
  {
    id: 'mai-4',
    category: 'Maintenance & Care',
    question: 'Can I use automatic car washes after detailing?',
    answer: 'We strongly recommend avoiding automatic brush car washes after professional detailing. The harsh brushes create micro-scratches and swirl marks that diminish your detail investment. Touchless automatic washes are acceptable but not ideal—they use harsh chemicals that degrade wax and sealants faster. Best practice: hand washing or professional detailing. If you must use automatic washes, choose touchless and apply wax every month. Columbia SC has several quality hand-wash facilities. For ceramic-coated vehicles, automatic washes will void warranty. Protect your investment with proper washing techniques.',
    keywords: ['automatic car wash after detailing', 'car wash safety Columbia SC', 'protect detail work'],
    relatedServices: ['maintenance', 'washing-guidelines']
  },
  {
    id: 'mai-5',
    category: 'Maintenance & Care',
    question: 'What products should I use to clean my car at home?',
    answer: 'Use pH-neutral car wash soap (never dish soap—it strips wax), two-bucket wash method with grit guards, high-quality microfiber wash mitts and drying towels, wheel-specific cleaners, glass cleaner without ammonia (safe for tint), interior cleaner appropriate for your surfaces (leather vs fabric), and quick detailer spray for touch-ups. Avoid household products—they damage automotive finishes. Columbia SC customers can purchase professional products from us or quality auto parts stores. Invest in good microfiber towels—cheap towels scratch paint. Proper products protect your detailing investment.',
    keywords: ['best car cleaning products', 'home car wash products Columbia SC', 'what to use cleaning car'],
    relatedServices: ['maintenance', 'products']
  },
  {
    id: 'mai-6',
    category: 'Maintenance & Care',
    question: 'How do I protect my car from South Carolina sun damage?',
    answer: 'South Carolina\'s intense UV exposure causes rapid paint fading, clear coat oxidation, and interior cracking. Protect your vehicle by parking in garages or shade whenever possible, using windshield sunshades, applying UV-protectant interior dressing, maintaining wax or sealant protection (reapply every 3 months), considering ceramic coating for superior UV protection, and regular detailing that removes contaminants before they bond. Window tinting provides significant interior protection. Columbia SC customers with garage parking maintain superior paint condition compared to street-parked vehicles. UV damage is cumulative and irreversible—prevention is critical.',
    keywords: ['protect car from sun South Carolina', 'UV protection Columbia SC', 'prevent sun damage car'],
    relatedServices: ['maintenance', 'paint-protection', 'ceramic-coating']
  }
];

/**
 * Get FAQs by category
 */
export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

/**
 * Search FAQs by keyword
 */
export const searchFAQs = (searchTerm: string): FAQ[] => {
  const term = searchTerm.toLowerCase();
  return faqs.filter(faq =>
    faq.question.toLowerCase().includes(term) ||
    faq.answer.toLowerCase().includes(term) ||
    faq.keywords.some(keyword => keyword.toLowerCase().includes(term))
  );
};

/**
 * Generate Schema.org FAQPage markup with comprehensive LocalBusiness and Service schema
 */
export const generateFAQSchema = (faqList: FAQ[] = faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Auto Detailing FAQs - Columbia SC",
    "description": "Comprehensive answers to all your mobile auto detailing questions in Columbia, Lexington, and Irmo SC",
    "url": "https://mikahsmobiledetailingsc.com/faq",
    "image": {
      "@type": "ImageObject",
      "url": "https://mikahsmobiledetailingsc.com/exterior1.jpg",
      "name": "Professional mobile auto detailing service",
      "description": "Mobile car detailing service in Columbia SC showing professional results",
      "contentUrl": "https://mikahsmobiledetailingsc.com/exterior1.jpg",
      "width": "1200",
      "height": "630",
      "creator": {
        "@type": "Person",
        "name": "Mikah Albertson"
      },
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Mikah's Auto Detailing"
      },
      "copyrightNotice": "© 2024 Mikah's Auto Detailing. All rights reserved.",
      "creditText": "Photo by Mikah's Auto Detailing",
      "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
    },
    "about": {
      "@type": "Service",
      "name": "Mobile Auto Detailing Services",
      "serviceType": "Mobile Car Detailing",
      "areaServed": [
        {
          "@type": "City",
          "name": "Columbia",
          "sameAs": "https://en.wikipedia.org/wiki/Columbia,_South_Carolina"
        },
        {
          "@type": "City",
          "name": "Lexington",
          "sameAs": "https://en.wikipedia.org/wiki/Lexington,_South_Carolina"
        },
        {
          "@type": "City",
          "name": "Irmo",
          "sameAs": "https://en.wikipedia.org/wiki/Irmo,_South_Carolina"
        }
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mikah's Auto Detailing",
        "image": "https://mikahsmobiledetailingsc.com/exterior1.jpg",
        "telephone": "(803) 667-8731",
        "priceRange": "$$",
        "url": "https://mikahsmobiledetailingsc.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Columbia",
          "addressRegion": "SC",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0007",
          "longitude": "-81.0348"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/mikahsautodetailing",
          "https://www.instagram.com/mikahsautodetailing"
        ]
      }
    },
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Get related FAQs based on keywords
 */
export const getRelatedFAQs = (currentFAQ: FAQ, limit: number = 3): FAQ[] => {
  const related = faqs.filter(faq => {
    if (faq.id === currentFAQ.id) return false;

    // Check for keyword overlap
    const keywordOverlap = faq.keywords.some(keyword =>
      currentFAQ.keywords.includes(keyword)
    );

    // Check for same category
    const sameCategory = faq.category === currentFAQ.category;

    return keywordOverlap || sameCategory;
  });

  return related.slice(0, limit);
};

export default faqs;
