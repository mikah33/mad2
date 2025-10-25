export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  category: 'tips' | 'guides' | 'news' | 'maintenance' | 'reviews';
  tags: string[];
  image?: string;
  featured?: boolean;
  readTime?: number; // minutes
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'How Often Should You Detail Your Car?',
    slug: 'how-often-detail-your-car',
    excerpt: 'Learn the optimal frequency for detailing your vehicle to maintain its appearance and value',
    author: 'Mikah',
    datePublished: '2024-01-15',
    category: 'maintenance',
    tags: ['maintenance', 'detailing', 'car care'],
    featured: true,
    readTime: 5
  },
  {
    id: 'blog-002',
    title: 'Ceramic Coating vs. Wax: Which is Better?',
    slug: 'ceramic-coating-vs-wax',
    excerpt: 'Compare the benefits and drawbacks of ceramic coating versus traditional wax',
    author: 'Mikah',
    datePublished: '2024-01-20',
    category: 'guides',
    tags: ['ceramic coating', 'wax', 'paint protection'],
    featured: true,
    readTime: 7
  },
  {
    id: 'blog-003',
    title: 'Top 10 Car Detailing Mistakes to Avoid',
    slug: 'car-detailing-mistakes-to-avoid',
    excerpt: 'Common detailing errors that can damage your vehicle and how to prevent them',
    author: 'Mikah',
    datePublished: '2024-02-01',
    category: 'tips',
    tags: ['tips', 'mistakes', 'car care'],
    readTime: 6
  },
  // Add more blog posts as needed
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
