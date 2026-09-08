/**
 * THE service ladder — single source of truth for package names, prices,
 * framing, and scope. Every surface (funnel, pricing page, service pages,
 * card grids, schema, GHL payloads) reads from here. If a price or name
 * changes, it changes HERE and nowhere else.
 *
 * Structure (2026-08 restructure):
 *   Levels 1-3 grade INTERIOR condition; Premium is the exterior
 *   protection upgrade on Level 2, not a fourth condition step.
 *   - Level 1 is GATED: only customers we've detailed in the last 90 days.
 *   - Level 2 is the default for anyone new (the old Factory Reset, minus
 *     the trim redye, which moved up into Premium).
 *   - Level 3 is interior-focused remediation with a basic exterior wash —
 *     no polish, no coatings, paint work always quoted separately.
 */

export interface LevelOffer {
  id: string;
  /** Ladder label, e.g. "Level 2" */
  level: string;
  /** Display name, e.g. "Full Reset" */
  name: string;
  /** level + name for headings */
  fullName: string;
  price: number;
  /** One-line sales framing */
  frame: string;
  shortDescription: string;
  /** Who this rung is for — shown under the price */
  audience: string;
  includesInterior: string[];
  includesExterior: string[];
  /** Level 1 only: eligibility requirement */
  gated?: boolean;
  eligibility?: string;
  popular?: boolean;
  /** Funnel slug (/book?service=<slug>) */
  slug: string;
  duration: string;
}

export const LEVEL_OFFERS: LevelOffer[] = [
  {
    id: 'level-1',
    level: 'Level 1',
    name: 'Maintenance Detail',
    fullName: 'Level 1 Maintenance Detail',
    price: 225,
    frame: 'Keeping it where we got it.',
    shortDescription: 'Full interior & exterior maintenance clean with wax protection',
    audience: 'Repeat customers — detailed by us within the last 90 days',
    gated: true,
    eligibility: 'Book the same vehicle by day 90 after its last completed detail; service must take place by day 97. Eligibility is verified against our records.',
    includesInterior: [
      'Full interior wipe down',
      'Conditioner + UV protection on all surfaces',
      'Full vacuum & disinfection of cloth surfaces',
      'Glass cleaning',
      'Door jambs cleaned and waxed',
    ],
    includesExterior: [
      'Wheels decontaminated from brake dust',
      'Foam contact wash (bugs, sap and tar removed)',
      'Layer of wax for protection',
      'Trim and tires dressed',
    ],
    slug: 'level-1-maintenance',
    duration: '2-3 hours',
  },
  {
    id: 'level-2',
    level: 'Level 2',
    name: 'Full Reset',
    fullName: 'Level 2 Full Reset',
    price: 375,
    frame: 'We’ll get your vehicle back to a level where we can maintenance clean it for you.',
    shortDescription: 'Deep reset — shampoo & extraction, stain removal, engine bay',
    audience: 'The standard for any vehicle we haven’t detailed recently',
    popular: true,
    includesInterior: [
      'Full interior wipe down',
      'Conditioner + UV protection on all surfaces',
      'Full vacuum & disinfection of cloth areas',
      'Light stain removal',
      'Upholstery and floor mat shampoo & extraction',
      'Glass cleaned, door jambs cleaned and waxed',
    ],
    includesExterior: [
      'Foam contact wash (removes bugs, tar, sap)',
      'Brake dust removal from wheels',
      'Layer of wax for protection',
      'Trim and tires dressed',
      'Engine bay detailed',
    ],
    slug: 'level-2-reset',
    duration: '3-5 hours',
  },
  {
    id: 'level-2-premium',
    level: 'Level 2 Premium',
    name: 'Reset + Protect',
    fullName: 'Level 2 Premium — Reset + Protect',
    price: 675,
    frame: 'Reset the car, then lock the finish in.',
    shortDescription: 'Full Reset plus 1-step polish, headlight & windshield ceramic coatings, trim redye',
    audience: 'For keepers — everything in Level 2 plus lasting exterior protection',
    includesInterior: [
      'Everything in the Level 2 Full Reset interior',
    ],
    includesExterior: [
      'Everything in the Level 2 Full Reset exterior',
      '1-step machine polish (removes light swirls, restores gloss)',
      'Headlight ceramic coating',
      'Windshield ceramic coating',
      'Black trim restored / redyed',
    ],
    slug: 'level-2-premium',
    duration: '5-7 hours',
  },
  {
    id: 'level-3',
    level: 'Level 3',
    name: 'Disaster Detail',
    fullName: 'Level 3 Disaster Detail',
    price: 650,
    frame: 'Some cars need rescuing before they can be maintained.',
    shortDescription: 'Interior rescue — heavy pet hair, set-in stains, old food, odor — plus a basic exterior wash',
    audience: 'Heavy interior neglect — food, pet hair, stains, years since the last clean',
    includesInterior: [
      'Everything in the Level 2 Full Reset interior',
      'Heavy pet hair removal',
      'Set-in stain treatment & hot water extraction',
      'Deep steam clean of all surfaces',
      'Odor treatment',
      'Full trash-out and reset of neglected interiors',
    ],
    includesExterior: [
      'Basic exterior wash — foam wash, wheels, trim and tires dressed',
      'No polish or coatings — paint work is always a separate quote',
    ],
    slug: 'level-3-disaster',
    duration: '5-8 hours',
  },
];

export const getOfferById = (id: string): LevelOffer | undefined =>
  LEVEL_OFFERS.find((o) => o.id === id);

export const getOfferBySlug = (slug: string): LevelOffer | undefined =>
  LEVEL_OFFERS.find((o) => o.slug === slug);

/** Legacy funnel slugs still linked around the site and in old ads. */
export const LEGACY_SLUG_MAP: Record<string, string> = {
  'basic-detail': 'level-2-reset',
  'factory-reset': 'level-2-reset',
  'full-detail': 'level-2-reset',
  'mobile-detailing': 'level-2-reset',
  'interior-detailing': 'interior-detail',
  'exterior-detailing': 'exterior-detail',
};

/** Formatted price, e.g. "$375" */
export const fmtPrice = (o: LevelOffer): string => `$${o.price}`;
