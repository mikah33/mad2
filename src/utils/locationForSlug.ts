/**
 * Maps a blog-post slug to the location page it should link to.
 *
 * Why: 25+ Columbia and 6 Lexington blog posts rank for the same city queries
 * as the /locations pages but (until 2026-07) contained zero links to them —
 * classic cannibalization. Every city post now casts an internal-link "vote"
 * for its location page with an exact-match anchor.
 *
 * Order matters: 'west-columbia' must be checked before 'columbia'.
 */
export interface BlogLocation {
  path: string;
  city: string;
}

const CITY_MAP: Array<{ match: string; loc: BlogLocation }> = [
  { match: 'west-columbia', loc: { path: '/locations/west-columbia/', city: 'West Columbia SC' } },
  { match: 'lexington', loc: { path: '/locations/lexington-sc/', city: 'Lexington SC' } },
  { match: 'columbia', loc: { path: '/locations/columbia-sc/', city: 'Columbia SC' } },
  { match: 'irmo', loc: { path: '/locations/irmo-sc/', city: 'Irmo SC' } },
  { match: 'cayce', loc: { path: '/locations/cayce-sc/', city: 'Cayce SC' } },
  { match: 'blythewood', loc: { path: '/locations/blythewood-sc/', city: 'Blythewood SC' } },
  { match: 'chapin', loc: { path: '/locations/chapin-sc/', city: 'Chapin SC' } },
];

export function locationForSlug(slug: string): BlogLocation | null {
  for (const { match, loc } of CITY_MAP) {
    if (slug.includes(match)) return loc;
  }
  return null;
}

/** Static HTML version of the CTA block, for the prerendered blog pages. */
export function locationCtaHtml(slug: string): string {
  const loc = locationForSlug(slug);
  if (!loc) return '';
  return `<section><h2>Mobile Car Detailing in ${loc.city}</h2><p>We detail cars, trucks, and SUVs at homes and offices across ${loc.city} — no travel fees, and you get a quote by text within minutes. See local pricing, availability, and the neighborhoods we cover on our <a href="${loc.path}">mobile car detailing ${loc.city}</a> page.</p></section>`;
}
