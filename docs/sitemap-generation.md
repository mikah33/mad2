# Sitemap Generation System

This project includes an automated sitemap generation system that dynamically creates a `sitemap.xml` file based on your website's data sources.

## Overview

The sitemap generation script automatically includes:
- Homepage
- All service pages (from `src/data/services.ts`)
- All location pages (from `src/data/locations.ts`)
- Blog listing page
- Blog posts (when available)
- FAQ page
- Contact page

## Usage

### Manual Generation

Generate the sitemap manually at any time:

```bash
npm run generate-sitemap
```

### Automatic Generation

The sitemap is automatically regenerated before each build:

```bash
npm run build  # Automatically runs generate-sitemap first
```

## File Structure

```
/scripts/generate-sitemap.ts  # Sitemap generation script
/public/sitemap.xml            # Generated sitemap
/public/robots.txt             # Search engine directives
```

## Sitemap Configuration

### Priority Levels

- **1.0**: Homepage (highest priority)
- **0.9**: Services and location pages
- **0.8**: Blog pages and contact
- **0.7**: FAQ and other pages

### Change Frequencies

- **Weekly**: Homepage, blog listing
- **Monthly**: Services, locations, FAQ, contact
- **Monthly**: Individual blog posts

### Last Modified Dates

The script automatically uses the current date for `lastmod` values. Future enhancements could include:
- Git commit dates for individual pages
- File modification times
- Manual date tracking for blog posts

## Adding New URLs

### Service Pages

New service pages are automatically included when you add them to `/src/data/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: 'svc-007',
    name: 'New Service',
    slug: 'new-service',
    // ... other properties
  },
];
```

### Location Pages

New location pages are automatically included when you add them to `/src/data/locations.ts`:

```typescript
export const locations: Location[] = [
  {
    id: 'loc-004',
    city: 'Mesa',
    state: 'Arizona',
    slug: 'mesa-az',
    // ... other properties
  },
];
```

### Blog Posts

To add blog posts to the sitemap, update the `blogPosts` array in `/scripts/generate-sitemap.ts`:

```typescript
const blogPosts = [
  { slug: 'ceramic-coating-guide', date: '2025-10-23' },
  { slug: 'interior-detailing-tips', date: '2025-10-15' },
];
```

**Future Enhancement**: Create a blog data file similar to `services.ts` and `locations.ts` for automatic blog post tracking.

## robots.txt

The `robots.txt` file references the sitemap and controls search engine crawling:

```
User-agent: *
Allow: /
Sitemap: https://mikahsautodetailing.com/sitemap.xml
```

## SEO Benefits

1. **Faster Indexing**: Search engines discover new pages more quickly
2. **Complete Coverage**: Ensures all pages are known to search engines
3. **Priority Signals**: Helps search engines understand page importance
4. **Update Frequency**: Indicates how often pages change
5. **Canonical URLs**: Establishes the correct URL for each page

## Validation

Validate your sitemap after generation:

1. **Online Tools**:
   - [Google Search Console](https://search.google.com/search-console)
   - [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

2. **Manual Check**:
   - Ensure all URLs are absolute (include domain)
   - Verify XML syntax is valid
   - Check that priorities sum to reasonable values
   - Confirm all URLs are accessible (200 status codes)

## Deployment

### Before Deployment

1. Run the sitemap generator:
   ```bash
   npm run generate-sitemap
   ```

2. Verify the output:
   ```bash
   cat public/sitemap.xml
   ```

### After Deployment

1. Submit sitemap to Google Search Console:
   - Go to Sitemaps section
   - Add URL: `https://mikahsautodetailing.com/sitemap.xml`

2. Submit to Bing Webmaster Tools:
   - Similar process to Google

3. Monitor indexing status regularly

## Troubleshooting

### Script Fails to Run

Check that dependencies are installed:
```bash
npm install
```

### Missing URLs

1. Verify data files are properly imported in `generate-sitemap.ts`
2. Check that data arrays contain the expected items
3. Ensure slug values match your routing configuration

### Build Errors

If the prebuild script causes issues, you can disable it temporarily:
```json
{
  "scripts": {
    "build": "npm run generate-sitemap && tsc && vite build"
  }
}
```

## Future Enhancements

1. **Blog Integration**: Create a blog posts data file
2. **Image Sitemap**: Add image URLs for better image search indexing
3. **Video Sitemap**: If adding video content
4. **Alternate Languages**: Multi-language support (hreflang)
5. **Dynamic Dates**: Use Git history or file modification times
6. **Sitemap Index**: Split into multiple sitemaps if URL count exceeds 50,000

## Related Documentation

- [SEO Best Practices](./seo-best-practices.md)
- [Routing Configuration](./routing.md)
- [Blog System](./blog-system.md)
