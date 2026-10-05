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

## 2026-10-05 — Strong WoW click recovery; 3 title experiments launched

**Evidence:**
- WoW totals: clicks 2 → 9 (+350%), impressions 1,209 → 1,483 (+23%), CTR 0.17% → 0.61%, position 39.5 → 38.7.
- Homepage driving recovery: 4 clicks this week (3.36% CTR, pos 17.7). Query "car detailing near me" ranks pos 7.6 with 18 impr but still 0 clicks → title not converting.
- /services/full-detail/ is the highest-impression zero-click page: 374 impr, 0 clicks, pos 25.1. "car detailing service" alone is 66 impr at pos 13.5 — pure CTR failure on a near-top-10 query.
- Blog /car-detailing-prices-value-breakdown/: fell to pos 63.6 (was 45.4 baseline), impressions 112/wk (was ~500/wk). Title "Car Detailing Near Me: What It Should Cost" cannibalizes the homepage for 'near me' intent; redirected to price-answer framing.
- All 3 prior experiments (exp-2026-07-21-*) had started=null — they were planned but never shipped. No experiment data to analyze; organic movement only.

**Rules:**
10. **"car detailing service" (pos 13.5, 66 impr/wk) is a high-value CTR gap** — /services/full-detail/ owns that query but its title ("Full Car Detail...") doesn't match the search term. Align title to query before adding content.
11. **Blog titles must not use "near me" phrasing** — that cannibalizes the homepage for the site's #1 term. Blog titles belong to informational/cost queries; use price anchors and year tags instead.
12. **Prior experiments that were planned but never started should be re-evaluated** — baseline numbers drift; refresh baseline from current 7d GSC before setting review_after.
