# SEO Learnings — mikahsmobiledetailingsc.com

Append-only. The weekly SEO agent MUST read this file before making changes and MUST append
one dated entry per run: what was measured, what worked, what didn't, and what rule to follow
going forward. Never delete entries; supersede them with newer dated entries.

Format: `## YYYY-MM-DD — <headline>` followed by **Evidence:** and **Rule:** lines.

---

## 2026-07-21 — Baseline: what we know going in (seeded by Claude Code session)

**Evidence:** 28-day GSC (Jun 23–Jul 21): 55 clicks, 11,368 impressions, 0.48% CTR, avg pos 21.6.
Clicks trending up (~1/day → ~2.9/day in July). Keyword Planner (Columbia SC DMA) pulled 2026-07-21
into `seo-data/keyword-planner.json`.

**Rules:**
1. **CTR is the site-wide weak point** (0.48% overall, 1.06% on homepage at pos 13). Prefer
   title/meta rewrites on pages that already rank (pos ≤ 20) over new content.
2. **"near me" cluster is the prize** (880/mo + variants). Homepage is pos ~7 for
   "car detailing near me" — protect and optimize it; never de-optimize the homepage title.
3. **"mobile detailing" is growing +40% YoY with Low competition** — use "mobile" phrasing in
   titles and H1s ("We Come to You").
4. **"auto detailing columbia sc" is broken**: 76 impr, 0 clicks, pos 34 despite a dedicated
   page (/auto-detailing-services-columbia-sc/ gets only 12 impr). Homepage outranks it. Fix
   internal linking/canonical intent before writing new content for this term.
5. **Zero-CTR monster**: /blog/car-detailing-prices-value-breakdown/ has 2,011 impr, 0 clicks,
   pos 45. One good rewrite beats 3 new posts.
6. **/pricing vs /pricing/ still split** (2,743 vs 1,270 impr). Trailing-slash canonicals were
   deployed 2026-07-09; verify Google has consolidated before further pricing work.
7. **Declining topics — don't invest**: interior cleaning (-50% YoY), car detailing services
   (-65% YoY), ceramic coating searches (-33% YoY locally, but keep pages: $999+ ticket).
8. **Repo gotcha:** any new page/route MUST be added to `scripts/generate-all-pages-html.ts`
   or crawlers get homepage-clone HTML (prerender bug class, fixed 2026-07-04).
9. Blog = national/informational "cost" queries; /pricing = local price list. Cross-link, never
   compete.

---

## 2026-11-09 — WoW flat clicks but impressions surging; 3 planned experiments finally shipping

**Evidence:** Week Oct 31–Nov 6: 8 clicks / 1,783 impr / 0.45% CTR / pos 47.1.
Prior week (Oct 24–30): 8 clicks / 1,513 impr / 0.53% CTR / pos 46.7.
WoW: clicks flat (0%), impressions +18%, CTR -0.08pp, position +0.4 (slight degradation).
More pages are ranking at deeper positions, inflating impressions without adding clicks — CTR optimization
is still the lever.

**Experiment review:** All 3 experiments from 2026-07-21 had `started: null` (planned but never shipped).
No outcomes to score. Shipping 2 of the 3 this week:
- exp-2026-07-21-pricing-blog-zero-ctr: blog post still at 165 impr, 0 clicks, pos 73.3 (degraded
  from pos 45 baseline). Title "Car Detailing Near Me: What It Should Cost" competes directly with
  the homepage for "near me" queries but ranks 60 positions lower. Pivoting to cost/pricing queries.
- exp-2026-07-21-homepage-ctr: homepage improved organically from pos 18.9 → 13.4 (nice). CTR is
  1.87%, just under 2%. Description still uses "$375" not in the brief's price-anchor list. Fixing.

**New this week:**
- /locations/lexington-sc/ impressions doubled (41 → 93), pos improved to 16.9, only 1.1% CTR.
  Striking-distance opportunity — adding new experiment.
- /blog/mobile-detailing-columbia-sc-prices-2025/ earned its first 2 clicks (pos 38.7, 2.2% CTR).
  Positive sign — do not interfere.
- /pricing/ page position: 50.9 (prior week) vs 47.2 (this week), baseline was pos 17–24. This
  page has fallen dramatically. The exp-2026-07-21-pricing-slash-consolidation was about canonical
  — leaving that for a future dedicated run with deeper investigation.

**Rules:**
10. **Blog titles must NOT compete with homepage for "near me"** — if the blog post's title contains
    "near me" and it ranks worse than the homepage for those queries, rename the title to target
    informational/cost queries instead (e.g., "prices", "cost breakdown", "how much does X cost").
11. **Price anchors must come from the approved list** (Exterior from $100, Interior from $200,
    Basic $225, Factory Reset $400, Paint Correction from $599, Ceramic from $999). Do not
    use $150, $350, $375, $675, or any price not in this list in meta copy.
12. **Lexington page is in striking distance** (pos ~17, 93 impr/wk). Lead with "mobile" +
    price anchor + "We Come to You" in the description to lift CTR from 1.1% toward 3%+.
