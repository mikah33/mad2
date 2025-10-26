# Remaining Location Data Template

To complete all 18 locations, you need to create data for these remaining cities:

## Cities to Add

1. **St. Andrews** - West Columbia area suburb
2. **Seven Oaks** - Northeast Columbia/Irmo area
3. **Arcadia Lakes** - Small town near Forest Acres
4. **Hopkins** - Rural community south of Columbia
5. **Lugoff** - Northeast of Columbia, near Camden
6. **Camden** - Historic city northeast of Columbia
7. **Sumter** - Larger city east of Columbia
8. **Newberry** - Historic town northwest of Columbia
9. **Batesburg-Leesville** - Twin cities west of Lexington

## Template for New Locations

```typescript
{
  city: 'City Name',
  state: 'SC',
  slug: 'city-name',
  coordinates: {
    latitude: 0.0000,  // Get from Google Maps
    longitude: -0.0000
  },
  county: 'County Name',
  population: 0,  // Look up current population
  description: '2-3 sentence description highlighting key features',
  landmarks: [
    {
      name: 'Landmark Name',
      type: 'Category (Shopping/Recreation/Historic/etc)',
      description: 'Why this matters to residents',
    },
    // Add 5-6 landmarks
  ],
  neighborhoods: [
    'Neighborhood 1',
    'Neighborhood 2',
    // Add 4-8 neighborhoods
  ],
  serviceArea: {
    city: 'City Name',
    radius: 10,  // Adjust based on city size
    zipCodes: ['29XXX', '29YYY'],
  },
  uniqueContent: {
    intro: `
      800+ word introduction that includes:
      - Welcome and service area description
      - Local driving patterns and challenges
      - Specific environmental factors (humidity, pollen, red clay, etc.)
      - How vehicle usage patterns affect maintenance needs
      - Mobile service convenience message
    `,
    whyChooseUs: `
      200+ words explaining:
      - Specific local environmental challenges
      - How your service addresses these challenges
      - Specialized techniques or products for this area
      - Understanding of local lifestyle and vehicle needs
    `,
    localExpertise: `
      150+ words covering:
      - Team's local knowledge
      - Specific experience in this community
      - Understanding of local roads, parking, conditions
      - Examples of local vehicle challenges solved
    `,
    communityInvolvement: `
      150+ words about:
      - Local partnerships
      - Community support
      - Special programs for local groups
      - Commitment to the community
    `,
  },
  testimonials: [
    {
      name: 'First Last',
      location: 'Neighborhood, City',
      rating: 5,
      text: 'Detailed testimonial mentioning specific service and local context',
      date: '2024-MM-DD',
      service: 'Service Name',
    },
    // Add 3 testimonials per location
  ],
  faqs: [
    {
      question: 'Location-specific question?',
      answer: 'Detailed answer addressing local concerns and conditions',
    },
    // Add 5-6 FAQs per location
  ],
  metaTitle: 'Car Detailing [City] SC | [Unique Modifier] | Mikahs Auto Detailing',
  metaDescription: '[City] SEO description with services, areas served, unique value prop. Under 160 chars.',
  nearbyLocations: [
    'Nearby City 1',
    'Nearby City 2',
    // Add 4-6 nearby cities
  ],
}
```

## Research Checklist for Each Location

- [ ] Get accurate GPS coordinates from Google Maps
- [ ] Find current population statistics
- [ ] Research 5-6 prominent local landmarks
- [ ] Identify main neighborhoods or districts
- [ ] Look up all zip codes for the area
- [ ] Identify nearby cities (within 15-20 miles)
- [ ] Research local environmental factors (lakes, rivers, industry, etc.)
- [ ] Understand commute patterns (to Columbia, other cities)
- [ ] Note any military installations nearby
- [ ] Identify main commercial corridors
- [ ] Research local schools and community centers
- [ ] Note any unique local characteristics

## Content Writing Guidelines

### Intro Section (800+ words)
- **Paragraph 1**: Welcome and city overview, mention business name
- **Paragraph 2**: Local lifestyle and vehicle usage patterns
- **Paragraph 3**: Environmental challenges specific to area
- **Paragraph 4**: How your service fits into community
- **Paragraph 5**: Convenience and service area coverage

### Why Choose Us (200+ words)
- Identify 3-4 specific local challenges
- Explain your solutions for each
- Mention specialized products or techniques
- Connect to local lifestyle and needs

### Local Expertise (150+ words)
- Demonstrate intimate knowledge of area
- Give specific examples of local conditions
- Mention neighborhoods and landmarks
- Show experience with local vehicle types

### Community Involvement (150+ words)
- List partnerships and sponsorships
- Mention special programs (military, student, senior)
- Show commitment to local economy
- Encourage supporting local businesses

## FAQ Guidelines

Each location should have 5-6 FAQs that address:

1. **Service Area Coverage**: "Do you serve all areas of [City]?"
2. **Local Challenge**: "How do you handle [specific local issue like lake exposure, red clay, etc.]?"
3. **Unique Offering**: "Do you offer [relevant service for this area]?"
4. **Scheduling/Convenience**: Mobile service, timing, booking
5. **Pricing/Packages**: What's recommended for this area
6. **Special Programs**: Military discounts, fleet services, etc.

## Testimonial Guidelines

Each location needs 3 testimonials:

1. **Different neighborhoods**: Represent various parts of city
2. **Different services**: Basic wash, full detail, specialty service
3. **Different customer types**: Family, professional, military, etc.
4. **Specific details**: Mention local landmarks, conditions, results
5. **Authentic voice**: Sound like real people
6. **Recent dates**: Within last 3-4 months

## Local Keyword Integration

Naturally include these keywords:
- "car detailing in [City]"
- "[City] auto detailing"
- "mobile detailing [City]"
- Neighborhood names
- Landmark names
- "[City], SC"
- Local features (lake, river, base, university, etc.)

## SEO Title & Description Formulas

### Meta Title (under 60 characters)
- Pattern 1: "Car Detailing [City] SC | [Modifier] | [Business]"
- Pattern 2: "[Service] [City] SC | [Unique Value] | [Business]"
- Pattern 3: "[City] SC Auto Detailing | [Benefit] | [Business]"

### Meta Description (under 160 characters)
- Mention city name
- Include primary service
- Mention 1-2 neighborhoods or landmarks
- Include call to action
- Add unique value proposition

Example: "Professional mobile car detailing in [City], SC. Serving [Neighborhood] & [Landmark area]. [Specialty]. Book online or call today!"

## Geo-Coordinates

Find accurate coordinates:
1. Go to Google Maps
2. Search for city hall or main landmark
3. Right-click on the location
4. First number is latitude, second is longitude
5. Use 4 decimal places for precision

## Validation Checklist

Before adding a new location, verify:
- [ ] All required fields completed
- [ ] No duplicate content from other locations
- [ ] Unique content totals 800+ words
- [ ] All local references are accurate
- [ ] Coordinates are correct (test in Google Maps)
- [ ] Zip codes are valid for that city
- [ ] Nearby locations exist in dataset
- [ ] Testimonial dates are recent
- [ ] FAQ questions are location-specific
- [ ] Meta title under 60 characters
- [ ] Meta description under 160 characters
- [ ] No spelling or grammar errors
- [ ] Local keywords naturally integrated
