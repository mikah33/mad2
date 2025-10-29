# Quick Fix Guide - Schema Duplication

## 🎯 GOAL
Remove duplicate Organization/LocalBusiness schema from homepage

## ⏱️ TIME ESTIMATE
10 minutes

---

## 🔧 OPTION 1: Keep LocalBusiness Only (RECOMMENDED)

**Best for:** Mobile detailing business (no physical storefront to visit)

### Step 1: Edit App.tsx
**File:** `/Users/mikahalbertson/mad2/src/App.tsx`

**Remove lines 14-53:**
```typescript
// DELETE THIS ENTIRE SECTION:
import { generateLocalBusinessSchema } from './components/seo/StructuredData'
import { generateOrganizationSchema } from './components/seo/OrganizationSchema'
import { businessInfo } from './data/business'
import { reviews, aggregateRating } from './data/reviews'

// ... in component ...

const localBusinessSchema = generateLocalBusinessSchema(
  businessInfo,
  aggregateRating,
  reviews
)

const organizationSchema = generateOrganizationSchema({
  name: businessInfo.name,
  legalName: businessInfo.legalName,
  description: businessInfo.description,
  url: 'https://mikahsmobiledetailingsc.com',
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: businessInfo.address,
  foundingDate: '2020',
  socialMedia: businessInfo.socialMedia
})

const schemas = [localBusinessSchema, organizationSchema]
```

**Replace with:**
```typescript
// LocalBusiness schema is already in static HTML via generate-all-pages-html.ts
// No need to add schemas in React App.tsx
```

### Step 2: Update Helmet Section
**In same file, around line 82-85:**

**Before:**
```typescript
<Helmet>
  {/* ... meta tags ... */}
  <script type="application/ld+json">
    {JSON.stringify(schemas)}
  </script>
</Helmet>
```

**After:**
```typescript
<Helmet>
  {/* ... meta tags ... */}
  {/* Schema is in static HTML - no need to add here */}
</Helmet>
```

### Step 3: Rebuild & Test
```bash
npm run build
bash scripts/audit-schema-duplicates.sh
```

**Expected Result:**
```
1. HOMEPAGE AUDIT
-------------------
Total schemas: 1
LocalBusiness: 1
Organization: 0
✅ Homepage looks OK
```

---

## 🔧 OPTION 2: Keep Organization Only

**Best for:** Brand-focused website (less service-location emphasis)

### Step 1: Edit generate-all-pages-html.ts
**File:** `/Users/mikahalbertson/mad2/scripts/generate-all-pages-html.ts`

**Around line 58, modify the loop:**

**Before:**
```typescript
routes.forEach(route => {
  const routePath = route.path;
  // ...
  const schemaScript = `<script type="application/ld+json">
    ${JSON.stringify(enhancedSchema, null, 2)}
  </script>`;
  html = html.replace('</head>', `${schemaScript}\n  </head>`);
```

**After:**
```typescript
routes.forEach(route => {
  const routePath = route.path;

  // Only add LocalBusiness schema to non-homepage routes
  if (routePath !== '') {
    const schemaScript = `<script type="application/ld+json">
      ${JSON.stringify(enhancedSchema, null, 2)}
    </script>`;
    html = html.replace('</head>', `${schemaScript}\n  </head>`);
  }
```

### Step 2: Rebuild & Test
```bash
npm run build
bash scripts/audit-schema-duplicates.sh
```

**Expected Result:**
```
1. HOMEPAGE AUDIT
-------------------
Total schemas: 1
LocalBusiness: 0
Organization: 1
✅ Homepage looks OK
```

---

## 📊 WHICH OPTION TO CHOOSE?

### Choose LocalBusiness (Option 1) if:
- ✅ You're a mobile service business
- ✅ You serve specific geographic areas (Columbia, Lexington, Irmo, Cayce)
- ✅ You want to appear in "near me" searches
- ✅ You have service area information
- ✅ You want Google Maps integration

**Recommendation:** ⭐ **Choose this** for Mikah's Auto Detailing

### Choose Organization (Option 2) if:
- ❌ You're primarily a brand/company site
- ❌ Location/service area is less important
- ❌ You don't need "near me" SEO

---

## ✅ VERIFICATION CHECKLIST

After making changes:

- [ ] Run `npm run build`
- [ ] Run `bash scripts/audit-schema-duplicates.sh`
- [ ] Check audit shows 0 issues
- [ ] Test homepage in Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Verify schema shows up correctly
- [ ] Deploy to production
- [ ] Monitor Google Search Console for errors (check in 7-14 days)

---

## 🆘 IF SOMETHING BREAKS

### Rollback Plan
```bash
git checkout src/App.tsx  # If you edited App.tsx
# OR
git checkout scripts/generate-all-pages-html.ts  # If you edited this

npm run build
```

### Get Help
1. Review `/docs/CRITICAL-SCHEMA-DUPLICATION-AUDIT-REPORT.md`
2. Review `/docs/SCHEMA-AUDIT-SUMMARY.md`
3. Check build logs for errors
4. Test in development: `npm run dev`

---

## 📈 EXPECTED RESULTS

### Immediate (After Deploy)
- ✅ Schema validation passes in Google Rich Results Test
- ✅ No duplicate schemas on homepage
- ✅ Cleaner HTML output

### Within 1-2 Weeks
- ✅ Google Search Console errors clear
- ✅ Better indexing of homepage
- ✅ Potential slight ranking improvements

### Long-term
- ✅ More accurate Google Business Profile integration
- ✅ Better "near me" search visibility
- ✅ Cleaner schema markup across site

---

## 🎉 DONE!

That's it! Simple one-file edit, rebuild, and you're clean.

**Questions?** Review the full audit reports in `/docs/` directory.
