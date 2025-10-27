export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  authorJobTitle?: string;
  datePublished: string;
  dateModified?: string;
  category: 'tips' | 'guides' | 'news' | 'maintenance' | 'reviews';
  tags: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  readTime?: number; // minutes
  wordCount?: number;
}

const baseUrl = 'https://mikahsmobiledetailingsc.com';
const defaultImage = `${baseUrl}/exterior1.jpg`;

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'The Ultimate Guide to Mobile Car Detailing in Columbia SC',
    slug: 'ultimate-guide-mobile-car-detailing-columbia-sc',
    excerpt: 'Everything you need to know about mobile car detailing in Columbia, SC - from services offered to pricing and scheduling',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-10',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['mobile detailing', 'Columbia SC', 'car care guide'],
    image: defaultImage,
    imageAlt: 'Mobile car detailing service in Columbia SC',
    featured: true,
    readTime: 7,
    wordCount: 1800
  },
  {
    id: 'blog-002',
    title: 'How Often Should You Detail Your Car in South Carolina?',
    slug: 'how-often-detail-car-south-carolina',
    excerpt: 'Learn the optimal frequency for detailing your vehicle to maintain its appearance and value in South Carolina\'s climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-15',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['maintenance', 'detailing frequency', 'car care', 'Columbia SC'],
    image: defaultImage,
    imageAlt: 'Professional car detailing maintenance schedule',
    featured: true,
    readTime: 8,
    wordCount: 2400
  },
  {
    id: 'blog-003',
    title: 'Ceramic Coating vs. Wax: Which is Better for South Carolina?',
    slug: 'ceramic-coating-vs-wax-south-carolina',
    excerpt: 'Compare the benefits and drawbacks of ceramic coating versus traditional wax for South Carolina\'s hot and humid climate',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-01-20',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['ceramic coating', 'wax', 'paint protection', 'Columbia SC'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Ceramic coating vs wax comparison on vehicle',
    featured: true,
    readTime: 9,
    wordCount: 2200
  },
  {
    id: 'blog-004',
    title: 'Interior Car Detailing: The Complete Guide',
    slug: 'interior-car-detailing-complete-guide',
    excerpt: 'Complete guide to interior detailing including upholstery cleaning, leather conditioning, and odor removal',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-01',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['interior detailing', 'upholstery', 'cleaning', 'Columbia SC'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional interior car detailing service',
    readTime: 8,
    wordCount: 2100
  },
  {
    id: 'blog-005',
    title: 'Preparing Your Car for Summer in South Carolina',
    slug: 'prepare-car-summer-south-carolina',
    excerpt: 'Essential summer car care tips for South Carolina\'s intense heat and humidity',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-15',
    dateModified: '2025-10-26',
    category: 'maintenance',
    tags: ['summer care', 'South Carolina', 'heat protection', 'seasonal detailing'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Summer car care preparation in South Carolina',
    featured: true,
    readTime: 7,
    wordCount: 1950
  },
  {
    id: 'blog-006',
    title: 'Best Car Detailing in Lexington SC',
    slug: 'best-car-detailing-lexington-sc',
    excerpt: 'Discover why Lexington SC residents choose professional mobile detailing for their vehicles',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-10',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['Lexington SC', 'mobile detailing', 'local services'],
    image: `${baseUrl}/exterior4.jpg`,
    imageAlt: 'Car detailing service in Lexington SC',
    readTime: 6,
    wordCount: 1750
  },
  {
    id: 'blog-007',
    title: 'Paint Correction: Before and After Guide',
    slug: 'paint-correction-before-after-guide',
    excerpt: 'Learn about paint correction, its benefits, and see dramatic before and after results',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-18',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['paint correction', 'restoration', 'before and after', 'Columbia SC'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Paint correction process showing before and after',
    readTime: 9,
    wordCount: 2350
  },
  {
    id: 'blog-008',
    title: 'Mobile vs Shop Detailing: Comparison',
    slug: 'mobile-vs-shop-detailing-comparison',
    excerpt: 'Compare mobile detailing vs traditional shop detailing to find the best option for your needs',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-02-25',
    dateModified: '2025-10-26',
    category: 'guides',
    tags: ['mobile detailing', 'comparison', 'convenience', 'Columbia SC'],
    image: `${baseUrl}/exterior6.jpg`,
    imageAlt: 'Mobile detailing vs shop detailing comparison',
    readTime: 7,
    wordCount: 1850
  },
  {
    id: 'blog-009',
    title: 'Car Detailing Prices: Value Breakdown',
    slug: 'car-detailing-prices-value-breakdown',
    excerpt: 'Understand car detailing pricing and what you get for your money in Columbia SC',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-15',
    category: 'tips',
    tags: ['pricing', 'value', 'detailing costs', 'Columbia SC'],
    image: defaultImage,
    imageAlt: 'Car detailing price breakdown and value guide',
    readTime: 6,
    wordCount: 1650
  },
  {
    id: 'blog-010',
    title: 'What to Expect from Professional Auto Detailing',
    slug: 'what-expect-professional-auto-detailing',
    excerpt: 'Complete guide to what happens during a professional auto detailing service',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-03-20',
    category: 'guides',
    tags: ['professional detailing', 'what to expect', 'process', 'Columbia SC'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional auto detailing process explained',
    readTime: 8,
    wordCount: 2050
  },
  {
    id: 'blog-011',
    title: 'How to Maintain Your Car Between Details',
    slug: 'maintain-car-between-details',
    excerpt: 'Tips and tricks to keep your car looking great between professional detailing sessions',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-01',
    category: 'maintenance',
    tags: ['car maintenance', 'DIY tips', 'between details', 'Columbia SC'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Car maintenance tips between detailing sessions',
    readTime: 7,
    wordCount: 1900
  },
  {
    id: 'blog-012',
    title: 'Signs Your Car Needs Detailing',
    slug: 'signs-your-car-needs-detailing',
    excerpt: 'Learn to recognize the warning signs that your vehicle needs professional detailing',
    author: 'Mikah',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-04-10',
    category: 'tips',
    tags: ['car care', 'detailing signs', 'maintenance', 'Columbia SC'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Warning signs your car needs professional detailing',
    readTime: 6,
    wordCount: 1700
  },
  // New Ceramic Coating Blog Posts
  {
    id: 'blog-014',
    title: 'Auto Ceramic Coating vs Paint Protection Film: Which is Better?',
    slug: '02-ceramic-coating-vs-ppf',
    excerpt: 'Compare ceramic coating and paint protection film to determine which option provides the best protection for your vehicle in South Carolina.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-08',
    category: 'guides',
    tags: ['ceramic coating', 'paint protection film', 'auto ceramic coating', 'car protection'],
    image: `${baseUrl}/exterior4.jpg`,
    imageAlt: 'Comparison of ceramic coating vs PPF protection',
    readTime: 9,
    wordCount: 1750
  },
  {
    id: 'blog-015',
    title: 'How Long Does Ceramic Coating Last in South Carolina?',
    slug: '03-ceramic-coating-longevity-south-carolina',
    excerpt: 'Learn about ceramic coating longevity in South Carolina\'s climate and what factors affect how long your coating will last.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-15',
    category: 'guides',
    tags: ['ceramic coating', 'car ceramic coating', 'vehicle ceramic coating', 'automotive ceramic coating'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Long-lasting ceramic coating protection in South Carolina',
    readTime: 9,
    wordCount: 1700
  },
  {
    id: 'blog-016',
    title: 'Professional Ceramic Coating: What to Expect',
    slug: '04-professional-ceramic-coating-what-to-expect',
    excerpt: 'Complete walkthrough of the professional ceramic coating process from consultation to delivery, including each step and timeframe.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-22',
    category: 'guides',
    tags: ['professional ceramic coating', 'ceramic coating service', 'ceramic paint coating'],
    image: `${baseUrl}/exterior6.jpg`,
    imageAlt: 'Professional ceramic coating application process',
    featured: true,
    readTime: 10,
    wordCount: 1850
  },
  {
    id: 'blog-017',
    title: 'Is Ceramic Coating Worth It? Cost vs Benefits Analysis',
    slug: '05-ceramic-coating-cost-benefit-analysis',
    excerpt: 'Detailed financial analysis of ceramic coating with real ROI calculations and 5-year cost comparisons for different vehicle types.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-29',
    category: 'guides',
    tags: ['ceramic paint coating', 'automotive ceramic coating', 'auto ceramic coating', 'cost analysis'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Ceramic coating cost benefit analysis',
    readTime: 10,
    wordCount: 1900
  },
  {
    id: 'blog-018',
    title: 'Ceramic Coating Maintenance: Complete Care Guide',
    slug: '06-ceramic-coating-maintenance-guide',
    excerpt: 'Step-by-step maintenance instructions, product recommendations, common mistakes to avoid, and seasonal care tips for ceramic coated vehicles.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-12-06',
    category: 'maintenance',
    tags: ['ceramic detailing', 'car detailing ceramic coating', 'ceramic coating maintenance'],
    image: `${baseUrl}/exterior1.jpg`,
    imageAlt: 'Maintaining ceramic coated vehicle',
    readTime: 9,
    wordCount: 1800
  },
  // New Mobile Detailing Blog Posts
  {
    id: 'blog-019',
    title: 'Finding the Best Car Detailing Near Me in Columbia SC',
    slug: '01-best-car-detailing-near-me-columbia-sc',
    excerpt: 'Searching for car detailing near me in Columbia SC? This comprehensive guide helps you find the best local detailing services and make informed decisions.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-01',
    category: 'guides',
    tags: ['car detailing near me', 'car detailing columbia sc', 'auto detailing near me', 'mobile car detailing'],
    image: `${baseUrl}/exterior7.jpg`,
    imageAlt: 'Professional car detailing service in Columbia SC',
    featured: true,
    readTime: 9,
    wordCount: 1650
  },
  {
    id: 'blog-020',
    title: 'Mobile Car Detailing Columbia SC: Complete Service Guide',
    slug: '02-mobile-car-detailing-columbia-sc-guide',
    excerpt: 'Complete guide to mobile car detailing services in Columbia SC, including what to expect, pricing, and benefits of mobile detailing.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-08',
    category: 'guides',
    tags: ['mobile car detailing columbia sc', 'mobile detailing columbia sc', 'mobile auto detailing'],
    image: `${baseUrl}/interior2.jpg`,
    imageAlt: 'Mobile car detailing service in Columbia SC',
    featured: true,
    readTime: 9,
    wordCount: 1700
  },
  {
    id: 'blog-021',
    title: 'Why Choose Mobile Auto Detailing Over Traditional Shops',
    slug: '03-mobile-auto-detailing-vs-traditional-shops',
    excerpt: 'Compare mobile auto detailing with traditional shop detailing to discover which option best fits your needs and lifestyle.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-15',
    category: 'guides',
    tags: ['mobile auto detailing', 'auto detailing mobile', 'mobile car detailing'],
    image: `${baseUrl}/exterior1.jpg`,
    imageAlt: 'Mobile auto detailing convenience',
    readTime: 9,
    wordCount: 1800
  },
  {
    id: 'blog-022',
    title: 'Complete Auto Detailing Services in Columbia SC',
    slug: '04-auto-detailing-services-columbia-sc',
    excerpt: 'Comprehensive overview of professional auto detailing services available in Columbia SC, from basic packages to premium treatments.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-22',
    category: 'guides',
    tags: ['auto detailing columbia sc', 'car detailing services', 'professional auto detailing'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Complete auto detailing services Columbia SC',
    readTime: 9,
    wordCount: 1750
  },
  {
    id: 'blog-023',
    title: 'Interior Car Detailing: Deep Cleaning Your Vehicle',
    slug: '05-interior-car-detailing-deep-cleaning',
    excerpt: 'Complete guide to professional interior car detailing, including upholstery cleaning, stain removal, and odor elimination.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-11-29',
    category: 'guides',
    tags: ['interior car detailing near me', 'vehicle interior cleaning', 'car interior deep cleaning'],
    image: `${baseUrl}/interior1.jpg`,
    imageAlt: 'Professional interior car detailing',
    readTime: 9,
    wordCount: 1700
  },
  {
    id: 'blog-024',
    title: 'How Often Should You Detail Your Car in South Carolina?',
    slug: '06-how-often-should-you-detail-your-car',
    excerpt: 'Learn the optimal car detailing frequency for South Carolina\'s climate to maintain your vehicle\'s appearance and protect its value.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2024-12-15',
    category: 'maintenance',
    tags: ['car detailing services', 'automotive detailing', 'car detailing frequency'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Car detailing maintenance schedule',
    readTime: 9,
    wordCount: 1800
  },
  // New Car Wash & Detailing Blog Posts
  {
    id: 'blog-025',
    title: 'Car Wash vs Auto Detailing Columbia SC: What\'s the Difference?',
    slug: 'car-wash-vs-detailing-columbia-sc',
    excerpt: 'Understand the key differences between car wash and professional auto detailing in Columbia SC. Learn which service is right for your vehicle\'s needs.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-15',
    category: 'guides',
    tags: ['car wash columbia sc', 'auto detailing columbia sc', 'car wash vs detailing', 'mobile detailing columbia sc', 'professional car detailing'],
    image: `${baseUrl}/exterior1.jpg`,
    imageAlt: 'Car wash vs professional auto detailing comparison Columbia SC',
    featured: true,
    readTime: 12,
    wordCount: 2400
  },
  {
    id: 'blog-026',
    title: 'The Ultimate Guide to Mobile Car Wash Services in Lexington SC',
    slug: 'mobile-car-wash-lexington-sc-guide',
    excerpt: 'Complete guide to mobile car wash and detailing services in Lexington SC. Learn about service areas, pricing, and why mobile detailing is perfect for Lake Murray residents.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-18',
    category: 'guides',
    tags: ['car wash lexington sc', 'mobile car detailing', 'car detailing lexington sc', 'auto detailing lexington sc', 'mobile detailing'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Mobile car wash service in Lexington SC',
    featured: true,
    readTime: 11,
    wordCount: 2200
  },
  {
    id: 'blog-027',
    title: 'Professional Car Detailing Columbia SC: Complete Service Guide',
    slug: 'professional-car-detailing-columbia-sc-guide',
    excerpt: 'Everything you need to know about professional car detailing in Columbia SC, from service packages to pricing and maintenance schedules.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-20',
    category: 'guides',
    tags: ['professional car detailing', 'car detailing columbia sc', 'auto detailing services', 'car detailing service', 'interior detailing'],
    image: `${baseUrl}/exterior3.jpg`,
    imageAlt: 'Professional car detailing service in Columbia SC',
    featured: true,
    readTime: 10,
    wordCount: 2000
  },
  {
    id: 'blog-028',
    title: 'Finding the Best Car Detailing Near Me: Columbia & Lexington Guide',
    slug: 'finding-best-car-detailing-near-me',
    excerpt: 'How to find the best car detailing services near you in Columbia and Lexington SC. Tips for evaluating quality, pricing, and choosing between mobile vs shop detailing.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-22',
    category: 'guides',
    tags: ['car detailing near me', 'auto detailing near me', 'mobile detailing near me', 'car detail shops near me', 'vehicle detailing'],
    image: `${baseUrl}/exterior4.jpg`,
    imageAlt: 'Finding the best car detailing services near me',
    readTime: 10,
    wordCount: 1900
  },
  // New "Near Me" Search Query Blog Posts
  {
    id: 'blog-029',
    title: 'Ceramic Coating Near Me Columbia SC: Complete Guide to Finding Quality Service',
    slug: 'ceramic-coating-near-me-columbia-sc',
    excerpt: 'Searching for ceramic coating near me in Columbia SC? Learn how to identify quality installers, avoid marketing hype, and get professional ceramic coating that lasts.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-25',
    category: 'guides',
    tags: ['ceramic coating near me', 'ceramic coating columbia sc', 'car ceramic coating', 'auto ceramic coating', 'professional ceramic coating'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Professional ceramic coating service Columbia SC',
    featured: true,
    readTime: 13,
    wordCount: 2500
  },
  {
    id: 'blog-030',
    title: 'Car Detailing Near Me Columbia SC: How to Find Quality Service',
    slug: 'car-detailing-near-me-columbia-sc',
    excerpt: 'Complete guide to finding quality car detailing near me in Columbia, Lexington, and Irmo SC. Learn what professional detailing includes and how to avoid common pitfalls.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-26',
    category: 'guides',
    tags: ['car detailing near me', 'auto detailing columbia sc', 'car detailing columbia sc', 'professional car detailing', 'mobile car detailing'],
    image: `${baseUrl}/exterior6.jpg`,
    imageAlt: 'Quality car detailing service near me Columbia SC',
    featured: true,
    readTime: 12,
    wordCount: 2300
  },
  {
    id: 'blog-031',
    title: 'Mobile Detailing Near Me Columbia SC: Professional Service Guide',
    slug: 'mobile-detailing-near-me-columbia-sc',
    excerpt: 'Finding professional mobile detailing near me in Columbia SC? This guide covers what to expect, how to verify quality, and why mobile detailing offers superior convenience.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-27',
    category: 'guides',
    tags: ['mobile detailing near me', 'mobile car detailing', 'mobile auto detailing', 'car detailing columbia sc', 'mobile detailing service'],
    image: `${baseUrl}/exterior1.jpg`,
    imageAlt: 'Professional mobile detailing service near me',
    featured: true,
    readTime: 12,
    wordCount: 2400
  },
  {
    id: 'blog-032',
    title: 'Auto Detailing Near Me Columbia SC: Complete Service Guide',
    slug: 'auto-detailing-near-me-columbia-sc',
    excerpt: 'Comprehensive guide to finding quality auto detailing near me in Columbia, Lexington, and Irmo. Compare mobile vs shop services and understand what professional detailing includes.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-28',
    category: 'guides',
    tags: ['auto detailing near me', 'car detailing near me', 'professional auto detailing', 'auto detailing columbia sc', 'vehicle detailing'],
    image: `${baseUrl}/exterior2.jpg`,
    imageAlt: 'Professional auto detailing service near me Columbia SC',
    featured: true,
    readTime: 12,
    wordCount: 2350
  },
  {
    id: 'blog-033',
    title: 'Mobile Detailing Columbia SC: Complete Pricing and Service Guide',
    slug: 'mobile-detailing-columbia-sc-prices-guide',
    excerpt: 'Understanding mobile detailing Columbia SC prices helps you choose quality service. Mikah\'s Auto Detailing provides transparent pricing from $150-600 with professional mobile convenience.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-29',
    category: 'guides',
    tags: ['mobile detailing columbia sc', 'mobile detailing prices', 'mobile car detailing columbia sc', 'mobile detailing cost', 'best mobile detailing columbia sc'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Mobile detailing service pricing Columbia SC',
    featured: true,
    readTime: 12,
    wordCount: 2100
  },
  {
    id: 'blog-034',
    title: 'Full Service Car Wash vs Detailing Columbia SC: Complete Comparison',
    slug: 'full-service-car-wash-vs-detailing-columbia-sc',
    excerpt: 'Choosing between full service car wash and professional detailing Columbia SC affects vehicle value and appearance. Mikah\'s Auto Detailing explains the critical differences.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-30',
    category: 'guides',
    tags: ['car wash vs detailing', 'full service car wash columbia sc', 'car detailing columbia sc', 'professional detailing'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Car wash versus professional detailing comparison',
    featured: true,
    readTime: 13,
    wordCount: 2200
  },
  {
    id: 'blog-035',
    title: 'Mobile Car Detailing Lexington SC: Complete Service Guide',
    slug: 'mobile-car-detailing-lexington-sc-complete-guide',
    excerpt: 'Mobile car detailing Lexington SC brings professional service to Lake Murray area. Mikah\'s Auto Detailing serves all of Lexington County with shop-quality results at your location.',
    author: 'Mikah Albertson',
    authorJobTitle: 'Professional Auto Detailer',
    datePublished: '2025-01-31',
    category: 'guides',
    tags: ['mobile car detailing lexington sc', 'lexington car detailing', 'lake murray detailing', 'mobile detailing lexington'],
    image: `${baseUrl}/exterior5.jpg`,
    imageAlt: 'Mobile car detailing Lexington SC service',
    featured: true,
    readTime: 12,
    wordCount: 2000
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, limit);
};
