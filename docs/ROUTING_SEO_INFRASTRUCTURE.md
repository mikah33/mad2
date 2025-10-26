# Routing & SEO Infrastructure

## Overview
This document describes the multi-page routing structure and SEO infrastructure created for the Mikah's Auto Detailing website.

## Installed Dependencies
- `react-router-dom`: Client-side routing
- `react-helmet-async`: Dynamic meta tags and SEO

## Directory Structure

```
src/
├── routes/
│   └── AppRouter.tsx              # Main routing configuration
├── components/
│   ├── seo/
│   │   ├── SEOHead.tsx           # Dynamic meta tags component
│   │   ├── StructuredData.tsx    # Schema.org generators
│   │   ├── Breadcrumbs.tsx       # Breadcrumb navigation with schema
│   │   └── index.ts              # Barrel export
│   └── Layout.tsx                 # Page layout wrapper
├── data/
│   ├── business.ts               # Business information
│   ├── services.ts               # Service definitions
│   ├── locations.ts              # Location data
│   ├── blog.ts                   # Blog post data
│   ├── faqs.ts                   # FAQ data
│   └── index.ts                  # Barrel export
└── pages/
    ├── HomePage.tsx              # Home page
    ├── ServicesPage.tsx          # Services listing
    ├── ServiceDetailPage.tsx    # Individual service pages
    ├── LocationsPage.tsx         # Locations listing
    ├── LocationDetailPage.tsx   # Individual location pages
    ├── blog/
    │   ├── BlogPage.tsx         # Blog listing
    │   └── BlogPostPage.tsx     # Individual blog posts
    ├── FAQPage.tsx              # FAQ page
    ├── ContactPage.tsx          # Contact page
    └── NotFoundPage.tsx         # 404 page

public/
├── robots.txt                    # Search engine directives
├── sitemap.xml                   # XML sitemap (to be dynamically generated)
└── seo/
    ├── llm.txt                  # LLM context (brief)
    └── llm-full.txt             # LLM context (detailed)
```

## Routing Structure

### Routes Configured

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Main landing page |
| `/services` | ServicesPage | Services listing |
| `/services/:serviceSlug` | ServiceDetailPage | Individual service pages |
| `/locations` | LocationsPage | Locations listing |
| `/locations/:locationSlug` | LocationDetailPage | City-specific pages |
| `/blog` | BlogPage | Blog listing |
| `/blog/:postSlug` | BlogPostPage | Individual blog posts |
| `/faq` | FAQPage | FAQ page |
| `/contact` | ContactPage | Contact page |
| `*` | NotFoundPage | 404 error page |

## SEO Components

### 1. SEOHead Component
Dynamic meta tags component supporting:
- Title and description
- Keywords
- Canonical URLs
- Open Graph tags (Facebook)
- Twitter Cards
- Schema.org structured data
- No-index control

### 2. Structured Data Generators

#### LocalBusiness Schema
```typescript
generateLocalBusinessSchema(business: BusinessInfo)
```
- Used for: Home page, location pages
- Includes: Address, phone, hours, geo coordinates, ratings

#### Service Schema
```typescript
generateServiceSchema(service: ServiceInfo, business: BusinessInfo)
```
- Used for: Service detail pages
- Includes: Service type, provider info, pricing, area served

#### FAQ Schema
```typescript
generateFAQSchema(faqs: FAQItem[])
```
- Used for: FAQ page
- Includes: Questions and answers in schema format

#### BlogPosting Schema
```typescript
generateBlogPostSchema(post: BlogPostInfo, business: BusinessInfo)
```
- Used for: Blog post pages
- Includes: Headline, author, publish dates, images

#### Breadcrumb Schema
```typescript
generateBreadcrumbSchema(breadcrumbs: Array<{name, url}>)
```
- Used for: All pages with navigation hierarchy
- Automatically includes Home as first item

### 3. Breadcrumbs Component
Navigation component with automatic schema generation:
```tsx
<Breadcrumbs items={[
  { name: 'Services', url: '/services' },
  { name: 'Ceramic Coating', url: '/services/ceramic-coating' }
]} />
```

## Data Management

### Business Information (`/src/data/business.ts`)
Centralized business data:
- Company details
- Contact information
- Hours of operation
- Social media links
- Service areas
- Certifications

### Services (`/src/data/services.ts`)
Service definitions with:
- Name, slug, category
- Descriptions and features
- Pricing information
- Duration
- Featured/popular flags

Helper functions:
- `getServiceBySlug(slug: string)`
- `getFeaturedServices()`
- `getServicesByCategory(category)`
- `getPopularServices()`

### Locations (`/src/data/locations.ts`)
Location data including:
- City, state, slug
- Zip codes
- Neighborhoods
- Coordinates
- Service radius

Helper functions:
- `getLocationBySlug(slug: string)`
- `getFeaturedLocations()`
- `getLocationsByState(state)`

### Blog Posts (`/src/data/blog.ts`)
Blog content structure:
- Title, slug, excerpt
- Author, dates
- Category, tags
- Images, read time

Helper functions:
- `getBlogPostBySlug(slug: string)`
- `getFeaturedPosts()`
- `getPostsByCategory(category)`
- `getPostsByTag(tag)`
- `getRecentPosts(limit)`

### FAQs (`/src/data/faqs.ts`)
FAQ content with:
- Questions and answers
- Categories
- Ordering

Helper functions:
- `getFAQsByCategory(category)`
- `getAllFAQs()`

## Static SEO Files

### robots.txt
- Allows all crawlers
- Sitemap reference
- Ready for restrictions as needed

### sitemap.xml
- Template structure created
- Needs dynamic generation for all routes
- Includes priority and change frequency

### llm.txt & llm-full.txt
Context files for AI assistants:
- Business overview
- Services and pricing
- Contact information
- FAQs
- Key features

## Usage Examples

### Adding SEO to a New Page

```tsx
import { SEOHead } from '@/components/seo';
import { Breadcrumbs } from '@/components/seo';
import { generateServiceSchema } from '@/components/seo';

export const MyPage = () => {
  const schema = generateServiceSchema({...});

  return (
    <>
      <SEOHead
        title="Page Title"
        description="Page description"
        keywords="relevant, keywords"
        canonical="https://example.com/page"
        schema={schema}
      />

      <Breadcrumbs items={[
        { name: 'Parent', url: '/parent' },
        { name: 'Current', url: '/parent/current' }
      ]} />

      <div>
        {/* Page content */}
      </div>
    </>
  );
};
```

### Creating a Dynamic Route

1. Add data to appropriate data file
2. Create page component with SEO
3. Add route to AppRouter.tsx
4. Update sitemap.xml

## Next Steps (Content Phase)

1. Write actual page content for each route
2. Generate dynamic sitemap from data files
3. Add real images and optimize
4. Create Header/Footer components
5. Implement contact forms
6. Add analytics tracking
7. Create blog content
8. Optimize for Core Web Vitals

## Benefits of This Structure

1. **SEO-Optimized**: Every page has proper meta tags and structured data
2. **Maintainable**: Centralized data management
3. **Scalable**: Easy to add new locations, services, or blog posts
4. **Type-Safe**: Full TypeScript support
5. **Dynamic**: Routes generated from data
6. **Search-Friendly**: Schema.org markup on all pages
7. **Fast Navigation**: Client-side routing with React Router

## Testing the Infrastructure

```bash
# Start dev server
npm run dev

# Test routes
# - http://localhost:5173/
# - http://localhost:5173/services
# - http://localhost:5173/services/ceramic-coating
# - http://localhost:5173/locations/phoenix-az
# - http://localhost:5173/blog
# - http://localhost:5173/faq
# - http://localhost:5173/contact

# Build for production
npm run build

# Preview production build
npm run preview
```

## Important Notes

- All pages are placeholder shells awaiting content
- Update `businessInfo` in `/src/data/business.ts` with real information
- Add actual coordinates to location data
- Replace phone numbers, emails, and addresses
- Generate proper sitemap dynamically
- Add real images to public directory
- Update social media links
- Configure analytics in production
