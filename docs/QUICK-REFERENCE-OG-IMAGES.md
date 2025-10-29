# OG Images Quick Reference

## Quick Image Lookup

| Page Route | OG Image |
|------------|----------|
| / | mclarens-og.jpg |
| /services | logo.jpg |
| /services/interior-detailing | interior1.jpg |
| /services/exterior-detailing | exterior1.jpg |
| /services/ceramic-coating | mclarens.jpg |
| /services/paint-correction | exterior2.jpg |
| /services/full-detail | interior1.jpg |
| /services/mobile-detailing | exterior1.jpg |
| /locations | exterior3.jpg |
| /locations/columbia-sc | exterior1.jpg |
| /locations/lexington-sc | exterior2.jpg |
| /locations/irmo-sc | mclarens.jpg |
| /locations/cayce-sc | interior1.jpg |
| /contact | logo.jpg |
| /faq | exterior4.jpg |
| /faq/ceramic-coating | mclarens.jpg |
| /faq/mobile-detailing | exterior5.jpg |
| /resources | exterior6.jpg |

## Quick Commands

```bash
# Build with OG images
npm run build

# Verify all OG images
./scripts/verify-og-images.sh

# Check specific page
grep "og:image" dist/services/ceramic-coating/index.html

# Test social preview
# Facebook: https://developers.facebook.com/tools/debug/
# Twitter: https://cards-dev.twitter.com/validator
```

## Image Specs

- Dimensions: 1200x630px
- Format: JPG
- Location: /public/
- Aspect Ratio: 1.91:1

## Edit OG Images

File: `/scripts/generate-all-pages-html.ts`

```typescript
const ogImageMap: Record<string, { image: string; width: number; height: number }> = {
  'your-route': { image: 'your-image.jpg', width: 1200, height: 630 },
};
```

Then run: `npm run build`
