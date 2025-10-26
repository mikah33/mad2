# Location Pages - Quick Reference Card

## 🚀 Get Started in 5 Minutes

### 1. Import What You Need
```typescript
import { LocationPage } from './src/components/location/LocationPage';
import { locations } from './src/data/locations';
```

### 2. Update Business Info
```typescript
const businessInfo = {
  name: 'Mikahs Auto Detailing',
  phone: '(803) 555-0123',          // ← CHANGE THIS
  streetAddress: '123 Main St',      // ← CHANGE THIS
  postalCode: '29201',               // ← CHANGE THIS
  image: 'https://yoursite.com/logo.jpg',  // ← CHANGE THIS
  website: 'https://yoursite.com',   // ← CHANGE THIS
  socialLinks: ['facebook.com/...'], // ← CHANGE THIS
};
```

### 3. Use the Component
```typescript
const location = locations[0]; // Columbia
<LocationPage location={location} businessInfo={businessInfo} pricingTiers={pricing} />
```

## 📁 File Locations

| What | Where |
|------|-------|
| **Components** | `/src/components/location/*.tsx` |
| **Location Data** | `/src/data/locations.ts` |
| **Types** | `/src/types/location.ts` |
| **Examples** | `/examples/location-page-example.tsx` |
| **Full Guide** | `/docs/location-pages-usage.md` |
| **Summary** | `/docs/LOCATION-PAGES-SUMMARY.md` |

## 🗺️ Available Locations (10)

1. Columbia (columbia)
2. Lexington (lexington)
3. Irmo (irmo)
4. West Columbia (west-columbia)
5. Cayce (cayce)
6. Forest Acres (forest-acres)
7. Dentsville (dentsville)
8. Blythewood (blythewood)
9. Chapin (chapin)
10. Elgin (elgin)

## 🛠️ Common Tasks

### Add Google Maps API Key
```typescript
// In src/components/location/ServiceAreaMap.tsx
const mapUrl = `...&key=YOUR_API_KEY_HERE&...`
```

### Change Color Scheme
```typescript
// Find and replace:
'bg-blue-600'   → 'bg-purple-600'
'text-blue-600' → 'text-purple-600'
'blue-900'      → 'purple-900'
```

### Add New Location
```typescript
// In src/data/locations.ts or create new file
{
  city: 'Camden',
  slug: 'camden',
  coordinates: { latitude: 34.2465, longitude: -80.6070 },
  // ... see template in docs/remaining-locations-data.md
}
```

### Update Pricing
```typescript
const pricingTiers = [
  {
    name: 'Essential Services',
    services: [
      {
        name: 'Express Wash',
        price: '$49',
        duration: '45 min',
        features: ['Hand wash', 'Tire shine', '...'],
      },
    ],
  },
];
```

## ✅ Pre-Launch Checklist

**Must Update**:
- [ ] Business phone number
- [ ] Business address
- [ ] Google Maps API key
- [ ] Website URL
- [ ] Social media links
- [ ] Service prices

**Should Update**:
- [ ] Replace template testimonials
- [ ] Add real business photos
- [ ] Customize color scheme
- [ ] Update meta descriptions
- [ ] Add analytics tracking

**Nice to Have**:
- [ ] Add more locations
- [ ] Include photo galleries
- [ ] Set up online booking
- [ ] Add live chat

## 🔍 Testing URLs

```
/locations/columbia
/locations/lexington
/locations/irmo
/locations/west-columbia
/locations/cayce
/locations/forest-acres
/locations/dentsville
/locations/blythewood
/locations/chapin
/locations/elgin
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Pages Created | 10 |
| Words per Page | 800-1200 |
| Components | 4 |
| Total Code Lines | ~2,500 |
| Total Content | ~10,000 words |
| Locations Remaining | 8 |

## 🎯 SEO Quick Wins

1. ✅ Schema.org markup included
2. ✅ Mobile responsive
3. ✅ Fast loading (static)
4. ✅ Local keywords integrated
5. ✅ Internal linking
6. ✅ Unique content per page

## 🚨 Common Issues & Fixes

### Maps Don't Show
**Fix**: Add Google Maps API key in ServiceAreaMap.tsx

### TypeScript Errors
**Fix**: Run `npm install` to get dependencies

### Images Not Loading
**Fix**: Update image URLs in businessInfo

### Colors Look Wrong
**Fix**: Verify Tailwind CSS is configured

### Pages Not Found (404)
**Fix**: Set up routing correctly (see examples)

## 📞 Quick Support

| Issue | Solution |
|-------|----------|
| **How to use?** | Read `/docs/location-pages-usage.md` |
| **Examples?** | Check `/examples/location-page-example.tsx` |
| **Add location?** | Use template in `/docs/remaining-locations-data.md` |
| **Types?** | See `/src/types/location.ts` |
| **Styling?** | All components use Tailwind CSS |

## 🔗 Important Links

- **Implementation**: `/docs/location-pages-usage.md`
- **Complete Summary**: `/docs/LOCATION-PAGES-SUMMARY.md`
- **Template**: `/docs/remaining-locations-data.md`
- **Examples**: `/examples/location-page-example.tsx`
- **Structure**: `/PROJECT-STRUCTURE.md`

## 💻 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Format code
npx prettier --write "src/**/*.{ts,tsx}"

# View structure
tree src/ -L 3
```

## 🎨 Customization Points

**Easy** (5 min):
- Business info
- Phone number
- Colors

**Medium** (30 min):
- Pricing structure
- Service descriptions
- Map API key

**Advanced** (2+ hours):
- Add new locations
- Custom styling
- New sections

## 📈 Next Steps

1. **Today**: Update business info and test one page
2. **This Week**: Deploy 10 completed locations
3. **This Month**: Complete remaining 8 locations
4. **Ongoing**: Gather real reviews, update content

## 🏆 Success Metrics to Track

- Organic search traffic per location
- Phone calls from location pages
- Booking conversion rate
- Average time on page
- Bounce rate per location

---

## 🆘 Need Help?

1. Check the example file: `/examples/location-page-example.tsx`
2. Read the full guide: `/docs/location-pages-usage.md`
3. Review component source: `/src/components/location/`
4. Inspect type definitions: `/src/types/location.ts`

**Remember**: All components are fully typed with TypeScript. Your IDE will help guide you!

---

**Quick Start Time**: ~10 minutes
**Full Deployment Time**: ~2-4 hours
**Complete All 18 Locations**: ~2-3 days

✨ **You've got this!** ✨
