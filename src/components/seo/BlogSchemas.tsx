import { BlogPost } from '../../data/blog';

const baseUrl = 'https://mikahsmobiledetailingsc.com';

export interface BlogPostSchemaOptions {
  includePublisher?: boolean;
  includeAuthor?: boolean;
  includeBreadcrumbs?: boolean;
}

/**
 * Generate comprehensive BlogPosting schema for individual blog posts
 */
export const generateBlogPostingSchema = (
  post: BlogPost,
  options: BlogPostSchemaOptions = {}
) => {
  const {
    includePublisher = true,
    includeAuthor = true,
    includeBreadcrumbs = false
  } = options;

  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.image || `${baseUrl}/exterior1.jpg`;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: post.imageAlt || post.title
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    ...(includeAuthor && {
      author: {
        '@type': 'Person',
        name: post.author,
        ...(post.authorJobTitle && { jobTitle: post.authorJobTitle })
      }
    }),
    ...(includePublisher && {
      publisher: {
        '@type': 'Organization',
        name: "Mikah's Auto Detailing",
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
          width: 512,
          height: 512
        }
      }
    }),
    ...(post.wordCount && { wordCount: post.wordCount }),
    ...(post.readTime && {
      timeRequired: `PT${post.readTime}M`
    }),
    inLanguage: 'en-US',
    articleSection: post.category,
    keywords: post.tags.join(', '),
    url: postUrl
  };

  return schema;
};

/**
 * Generate Article schema (alternative to BlogPosting)
 */
export const generateArticleSchema = (post: BlogPost) => {
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.image || `${baseUrl}/exterior1.jpg`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': postUrl,
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorJobTitle || 'Professional Auto Detailer'
    },
    publisher: {
      '@type': 'Organization',
      name: "Mikah's Auto Detailing",
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    mainEntityOfPage: postUrl,
    articleSection: post.category,
    keywords: post.tags
  };
};

/**
 * Generate Blog/Collection schema for blog listing page
 */
export const generateBlogCollectionSchema = (posts: BlogPost[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog`,
    name: "Mikah's Auto Detailing Blog",
    description: 'Expert auto detailing tips, guides, and advice for vehicle care in Columbia, SC',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: "Mikah's Auto Detailing",
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      '@id': `${baseUrl}/blog/${post.slug}`,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      author: {
        '@type': 'Person',
        name: post.author
      },
      url: `${baseUrl}/blog/${post.slug}`,
      image: post.image || `${baseUrl}/exterior1.jpg`
    })),
    inLanguage: 'en-US'
  };
};

/**
 * Generate ItemList schema for blog listing
 */
export const generateBlogItemListSchema = (posts: BlogPost[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        '@id': `${baseUrl}/blog/${post.slug}`,
        name: post.title,
        headline: post.title,
        description: post.excerpt,
        url: `${baseUrl}/blog/${post.slug}`,
        image: post.image || `${baseUrl}/exterior1.jpg`,
        datePublished: post.datePublished,
        author: {
          '@type': 'Person',
          name: post.author
        }
      }
    }))
  };
};

/**
 * Generate WebPage schema with breadcrumbs for blog post
 */
export const generateBlogWebPageSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/blog/${post.slug}`,
    url: `${baseUrl}/blog/${post.slug}`,
    name: post.title,
    description: post.excerpt,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${baseUrl}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `${baseUrl}/blog/${post.slug}`
        }
      ]
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${baseUrl}/blog`,
      name: "Mikah's Auto Detailing Blog"
    }
  };
};

/**
 * Generate complete schema array for blog post page
 */
export const generateCompleteBlogPostSchema = (post: BlogPost) => {
  return [
    generateBlogPostingSchema(post),
    generateBlogWebPageSchema(post)
  ];
};

export default {
  generateBlogPostingSchema,
  generateArticleSchema,
  generateBlogCollectionSchema,
  generateBlogItemListSchema,
  generateBlogWebPageSchema,
  generateCompleteBlogPostSchema
};
