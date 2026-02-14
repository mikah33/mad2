# SEO Fix Implementation Plan

**Target Search Term:** "auto detailing services in columbia, sc"
**Website:** mikahsmobiledetailingsc.com
**Codebase:** React + TypeScript + Vite (~/mad2)

---

## Executive Summary

This plan addresses 5 critical SEO issues and integrates new media from `/Users/mikahalbertson/Downloads/mad2 pcs/`. The site uses React with react-helmet-async for SEO, so fixes go in TSX components, not static HTML.

---

## Issue Analysis

### 1. Missing Meta Descriptions
**Root Cause:** SEOHead component exists and works, but some pages don't pass descriptions or the index.html fallback doesn't match page-specific content.
**Fix:** Ensure all page components pass proper `description` props to SEOHead, optimized for "auto detailing services in columbia, sc".

### 2. No Visible H1 Tags
**Root Cause:** H1 tags exist in components but may not be rendering due to CSS, conditional logic, or layout issues.
**Fix:** Audit each page component to ensure H1 is visible and contains target keywords.

### 3. Images Lack Alt Text
**Root Cause:** Images in `<img>` and `<picture>` elements missing alt attributes.
**Fix:** Add descriptive, keyword-rich alt text to all images, including new media files.

### 4. Blog Not Rendering
**Root Cause:** BlogPage.tsx imports from `../../data/blog` which has 48 posts. Need to verify router includes blog routes and data is loading.
**Fix:** Check router.tsx for blog routes, verify blog data exports, test blog page rendering.

### 5. Thin Location Content
**Root Cause:** Location pages use templates with limited unique content (~400-500 words visible).
**Fix:** Expand LocationColumbiaPage.tsx and other location pages with 800+ words of unique, locally-relevant content.

---

## New Media Files to Integrate

From `/Users/mikahalbertson/Downloads/mad2 pcs/`:

| File | Type | Suggested Use |
|------|------|---------------|
| IMG_9335 2.HEIC | Image | Convert to WebP, add to gallery |
| IMG_9365 2.jpg | Image | Add to gallery/services |
| IMG_9391.MOV | Video | Add to gallery or service page |
| IMG_9392.MOV | Video | Add to gallery or service page |
| IMG_9469 2.MOV | Video | Add to gallery or service page |
| IMG_9480.jpg | Image | Add to gallery/services |
| IMG_9481.jpg | Image | Add to gallery/services |
| IMG_9572.HEIC | Image | Convert to WebP, add to gallery |
| IMG_9578.HEIC | Image | Convert to WebP, add to gallery |

---

## Implementation Tasks

### Phase 1: Meta Descriptions (Critical)

**Files to modify:**
- `src/pages/HomePage.tsx` - ✅ Already has description
- `src/pages/ServicesPage.tsx` - Add/verify description
- `src/pages/MobileDetailingPage.tsx` - Add/verify description
- `src/pages/CeramicCoatingPage.tsx` - Add/verify description
- `src/pages/InteriorDetailingPage.tsx` - Add/verify description
- `src/pages/ExteriorDetailingPage.tsx` - Add/verify description
- `src/pages/LocationColumbiaPage.tsx` - ✅ Already has description
- `src/pages/LocationLexingtonPage.tsx` - Add/verify description
- `src/pages/LocationIrmoPage.tsx` - Add/verify description
- `src/pages/PricingPage.tsx` - Add/verify description
- `src/pages/GalleryPage.tsx` - Add/verify description
- `src/pages/ContactPage.tsx` - Add/verify description
- `src/pages/blog/BlogPage.tsx` - ✅ Already has description

**Target keyword integration:**
All descriptions should include variations of:
- "auto detailing services in columbia, sc"
- "mobile auto detailing columbia sc"
- "car detailing columbia sc"

### Phase 2: H1 Tag Fixes (Critical)

**Verify/fix H1 in each page:**
- HomePage: "Mobile Auto Detailing in Columbia & Lexington SC"
- ServicesPage: "Auto Detailing Services Columbia SC"
- LocationColumbiaPage: "Columbia Detailing | Auto Detail Columbia, SC"
- All service pages need keyword-rich H1s

**Pattern to follow:**
```tsx
<h1 className="text-4xl md:text-5xl font-bold mb-6">
  Auto Detailing Services Columbia SC
</h1>
```

### Phase 3: Image Alt Text (Critical)

**Create image data file with proper alt text:**

```tsx
// src/data/images.ts - Add/update entries
export const galleryImages = [
  {
    src: '/exterior1.jpg',
    alt: 'Professional exterior auto detailing service Columbia SC - ceramic coating application',
    title: 'Exterior Detailing Columbia SC'
  },
  {
    src: '/interior1.jpg',
    alt: 'Interior car detailing Columbia SC - leather conditioning and deep cleaning',
    title: 'Interior Detailing Service'
  },
  // Add new images from mad2 pcs folder
  {
    src: '/gallery/IMG_9480.jpg',
    alt: 'Mobile auto detailing services Columbia SC - professional results',
    title: 'Mobile Detailing Results'
  },
  // ... etc
];
```

**Components to update:**
- `src/pages/GalleryPage.tsx`
- `src/pages/HomePage.tsx` - hero image
- `src/components/RecentProjects.tsx`
- All service page images

### Phase 4: Blog Rendering Fix (Critical)

**Investigation steps:**
1. Check `src/router.tsx` for blog routes
2. Verify `src/data/blog.ts` exports correctly
3. Check `BlogPage.tsx` imports
4. Test navigation to /blog

**Likely fix:**
```tsx
// In router.tsx, ensure blog routes are included:
{
  path: '/blog',
  element: <BlogPage />
},
{
  path: '/blog/:slug',
  element: <BlogPostPage />
}
```

### Phase 5: Location Content Expansion (High)

**Expand LocationColumbiaPage.tsx with:**

1. **Local context section (200+ words)**
   - Columbia landmarks (State House, USC, Riverbanks Zoo)
   - Local driving conditions affecting car care
   - Weather impact on vehicles

2. **Service area details (200+ words)**
   - Specific neighborhoods with descriptions
   - Distance/travel radius
   - Popular service locations

3. **Local testimonials section**
   - Columbia-specific reviews
   - Neighborhood mentions

4. **Community involvement**
   - Local partnerships
   - Events served

### Phase 6: Media Integration (Medium)

**Process new media files:**

1. Convert HEIC to WebP:
```bash
# Use ImageMagick or similar
convert IMG_9335\ 2.HEIC -quality 85 IMG_9335.webp
convert IMG_9572.HEIC -quality 85 IMG_9572.webp
convert IMG_9578.HEIC -quality 85 IMG_9578.webp
```

2. Optimize JPGs:
```bash
# Compress and convert to WebP
convert IMG_9365\ 2.jpg -quality 85 IMG_9365.webp
convert IMG_9480.jpg -quality 85 IMG_9480.webp
convert IMG_9481.jpg -quality 85 IMG_9481.webp
```

3. Process videos for web:
```bash
# Convert MOV to MP4 for web
ffmpeg -i IMG_9391.MOV -c:v libx264 -crf 23 -c:a aac video1.mp4
ffmpeg -i IMG_9392.MOV -c:v libx264 -crf 23 -c:a aac video2.mp4
ffmpeg -i IMG_9469\ 2.MOV -c:v libx264 -crf 23 -c:a aac video3.mp4
```

4. Copy to public folder:
```bash
cp *.webp ~/mad2/public/gallery/
cp *.mp4 ~/mad2/public/videos/
```

5. Update gallery data with new images

---

## Target Keyword Optimization

**Primary:** "auto detailing services in columbia, sc"

**Integration points:**
- Homepage H1 and meta description
- Services page title and content
- Location Columbia page throughout
- Blog posts targeting this term
- Image alt text
- Internal link anchor text

**Secondary keywords:**
- mobile auto detailing columbia sc
- car detailing services columbia sc
- professional auto detailing columbia
- best auto detailing columbia sc

---

## File Change Summary

| File | Changes |
|------|---------|
| `src/pages/HomePage.tsx` | Update H1, verify meta, add alt text |
| `src/pages/ServicesPage.tsx` | Add SEOHead with proper meta |
| `src/pages/LocationColumbiaPage.tsx` | Expand content 400+ words |
| `src/pages/LocationLexingtonPage.tsx` | Expand content |
| `src/pages/GalleryPage.tsx` | Add alt text, integrate new images |
| `src/router.tsx` | Verify blog routes |
| `src/data/images.ts` | Add new gallery images with alt |
| `src/data/gallery.ts` | Create/update with new media |
| `public/gallery/` | Add new optimized images |
| `public/videos/` | Add new optimized videos |

---

## Deployment Steps

1. Process and copy new media files
2. Make all code changes
3. Run `npm run build`
4. Test locally with `npm run preview`
5. Verify all pages have:
   - Unique meta description
   - Visible H1 tag
   - All images have alt text
   - Blog renders with posts
6. Deploy to Netlify

---

## Success Metrics

- [ ] All pages have unique meta descriptions (100%)
- [ ] All pages have visible H1 with target keywords
- [ ] All images have descriptive alt text
- [ ] Blog page displays 48 posts
- [ ] Location pages have 800+ words each
- [ ] New media files integrated (4 images, 3 videos)
- [ ] Target "auto detailing services in columbia, sc" in key locations

---

## Agent Assignments

| Task | Agent Type | Priority |
|------|------------|----------|
| Meta descriptions | coder | Critical |
| H1 tag fixes | coder | Critical |
| Image alt text | coder | Critical |
| Blog route fix | researcher + coder | Critical |
| Location content | researcher + coder | High |
| Media processing | coder (bash) | Medium |
| Gallery integration | coder | Medium |
| Testing | tester | High |
| Final review | reviewer | High |

