# Sitemap Usage Guide

Quick reference for managing your website's sitemap.

## Quick Commands

```bash
# Generate sitemap manually
npm run generate-sitemap

# Build project (automatically generates sitemap)
npm run build

# Development mode (sitemap not regenerated)
npm run dev
```

## What Gets Included

The sitemap automatically includes:

### ✅ Automatically Added
- Homepage
- `/services` - All service pages from `services.ts`
- `/locations` - All location pages from `locations.ts`
- `/blog` - Blog listing page
- `/faq` - FAQ page
- `/contact` - Contact page

### ⏳ Manual Addition Required
- Individual blog posts (edit `scripts/generate-sitemap.ts`)

## Adding New Content

### New Service

1. Add to `/src/data/services.ts`:
   ```typescript
   {
     id: 'svc-007',
     name: 'New Service Name',
     slug: 'new-service-name',
     category: 'specialty',
     // ... other fields
   }
   ```

2. Regenerate sitemap:
   ```bash
   npm run generate-sitemap
   ```

### New Location

1. Add to `/src/data/locations.ts`:
   ```typescript
   {
     id: 'loc-004',
     city: 'Mesa',
     state: 'Arizona',
     slug: 'mesa-az',
     zipCodes: ['85201'],
     // ... other fields
   }
   ```

2. Regenerate sitemap:
   ```bash
   npm run generate-sitemap
   ```

### New Blog Post

1. Edit `/scripts/generate-sitemap.ts`:
   ```typescript
   const blogPosts = [
     { slug: 'your-blog-post-slug', date: '2025-10-23' },
     // Add more blog posts here
   ];
   ```

2. Regenerate sitemap:
   ```bash
   npm run generate-sitemap
   ```

## Submitting to Search Engines

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Navigate to "Sitemaps" in the left menu
4. Enter: `sitemap.xml`
5. Click "Submit"

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Select your site
3. Go to "Sitemaps"
4. Enter: `https://mikahsautodetailing.com/sitemap.xml`
5. Click "Submit"

## Verification

### Check Sitemap Format

```bash
# View entire sitemap
cat public/sitemap.xml

# Count URLs
grep -c "<url>" public/sitemap.xml

# Check for errors
npm run generate-sitemap
```

### Online Validators

- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Search Console](https://search.google.com/search-console) - Use "URL Inspection" tool

## Priority & Frequency Reference

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | Weekly |
| Services | 0.9 | Monthly |
| Locations | 0.9 | Monthly |
| Blog Posts | 0.8 | Monthly |
| Blog Listing | 0.8 | Weekly |
| Contact | 0.8 | Monthly |
| FAQ | 0.7 | Monthly |

## Troubleshooting

### Sitemap Not Updating

```bash
# Delete old sitemap
rm public/sitemap.xml

# Regenerate
npm run generate-sitemap
```

### Missing Pages

1. Check data files (`services.ts`, `locations.ts`)
2. Verify slug names match routes
3. Ensure data is exported correctly
4. Check for TypeScript errors

### Build Errors

If prebuild hook causes issues:

```json
// package.json - temporarily remove prebuild
{
  "scripts": {
    "build": "tsc && vite build"
  }
}
```

Then manually run:
```bash
npm run generate-sitemap
npm run build
```

## Best Practices

1. **Regenerate after content changes**
   ```bash
   npm run generate-sitemap
   ```

2. **Commit sitemap to git**
   ```bash
   git add public/sitemap.xml
   git commit -m "Update sitemap"
   ```

3. **Check after deployment**
   - Visit: `https://mikahsautodetailing.com/sitemap.xml`
   - Verify all URLs are accessible

4. **Monitor in Search Console**
   - Check indexing status weekly
   - Review coverage reports
   - Fix any errors reported

## Automated Workflow

The sitemap is part of your build process:

```bash
npm run build
# 1. Runs npm run generate-sitemap (prebuild hook)
# 2. Compiles TypeScript
# 3. Builds with Vite
# 4. Outputs to dist/ with updated sitemap.xml
```

## Next Steps

After setting up your sitemap:

1. ✅ Submit to Google Search Console
2. ✅ Submit to Bing Webmaster Tools
3. ✅ Set up Google Analytics
4. ✅ Monitor indexing status
5. ✅ Create blog content regularly
6. ✅ Update services/locations as needed

## Support

For issues or questions:
- Check documentation: `/docs/sitemap-generation.md`
- Review script: `/scripts/generate-sitemap.ts`
- Test locally: `npm run generate-sitemap`
