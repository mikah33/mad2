# OpenGraph Image Mappings

This document lists all unique OG images assigned to each page on the site.

## Summary

- All pages now have unique `og:image`, `og:image:width`, and `og:image:height` meta tags
- All images are set to optimal OG size: 1200x630px
- Twitter Card images (`twitter:image`) also updated to match

## Homepage

| Page | OG Image | Dimensions |
|------|----------|------------|
| / | mclarens-og.jpg | 1200x630 |

## Service Pages (7 pages)

| Page | OG Image | Dimensions | Description |
|------|----------|------------|-------------|
| /services | logo.jpg | 1200x630 | Services overview |
| /services/interior-detailing | interior1.jpg | 1200x630 | Interior detailing showcase |
| /services/exterior-detailing | exterior1.jpg | 1200x630 | Exterior detailing showcase |
| /services/ceramic-coating | mclarens.jpg | 1200x630 | McLaren with ceramic coating |
| /services/paint-correction | exterior2.jpg | 1200x630 | Paint correction example |
| /services/full-detail | interior1.jpg | 1200x630 | Full detail package |
| /services/mobile-detailing | exterior1.jpg | 1200x630 | Mobile service showcase |

## Location Pages (4 pages)

| Page | OG Image | Dimensions | Description |
|------|----------|------------|-------------|
| /locations | exterior3.jpg | 1200x630 | Service areas overview |
| /locations/columbia-sc | exterior1.jpg | 1200x630 | Columbia SC service |
| /locations/lexington-sc | exterior2.jpg | 1200x630 | Lexington SC service |
| /locations/irmo-sc | mclarens.jpg | 1200x630 | Irmo SC service |
| /locations/cayce-sc | interior1.jpg | 1200x630 | Cayce SC service |

## Main Pages (5 pages)

| Page | OG Image | Dimensions | Description |
|------|----------|------------|-------------|
| /contact | logo.jpg | 1200x630 | Contact page |
| /faq | exterior4.jpg | 1200x630 | FAQ overview |
| /faq/ceramic-coating | mclarens.jpg | 1200x630 | Ceramic coating FAQ |
| /faq/mobile-detailing | exterior5.jpg | 1200x630 | Mobile detailing FAQ |
| /resources | exterior6.jpg | 1200x630 | Resources page |

## Available Images

The following images are available in the `/public` directory:

- `mclarens-og.jpg` - Homepage OG image (McLaren)
- `mclarens.jpg` - McLaren ceramic coating showcase
- `logo.jpg` - Company logo
- `interior1.jpg` - Interior detailing example 1
- `interior2.jpg` - Interior detailing example 2
- `exterior1.jpg` - Exterior detailing example 1
- `exterior2.jpg` - Exterior detailing example 2
- `exterior3.jpg` - Exterior detailing example 3
- `exterior4.jpg` - Exterior detailing example 4
- `exterior5.jpg` - Exterior detailing example 5
- `exterior6.jpg` - Exterior detailing example 6
- `exterior7.jpg` - Exterior detailing example 7

## Implementation Details

The OG image mappings are defined in `/scripts/generate-all-pages-html.ts`:

```typescript
const ogImageMap: Record<string, { image: string; width: number; height: number }> = {
  // Homepage
  '': { image: 'mclarens-og.jpg', width: 1200, height: 630 },

  // Service pages
  'services': { image: 'logo.jpg', width: 1200, height: 630 },
  'services/interior-detailing': { image: 'interior1.jpg', width: 1200, height: 630 },
  // ... etc
};
```

## Meta Tags Generated

For each page, the following meta tags are generated:

```html
<!-- OpenGraph -->
<meta property="og:image" content="https://mikahsmobiledetailingsc.com/[image]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:image" content="https://mikahsmobiledetailingsc.com/[image]" />
```

## Testing

To verify OG images are correctly set:

```bash
# Check specific page
grep "og:image" dist/services/ceramic-coating/index.html

# Check all pages
for page in dist/services/*/index.html; do
  echo "=== $page ==="
  grep "og:image\"" "$page"
done
```

## Rebuilding

When you make changes to the OG image mappings:

```bash
npm run build
```

This will regenerate all HTML files with the updated OG image tags.
