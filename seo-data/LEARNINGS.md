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

## 2026-08-10 — CTR doubles, blog cannibalization confirmed

**Evidence:**
WoW (Jul 26–Aug 1 vs Aug 2–Aug 8): Clicks 13→25 (+92%), Impressions 2,718→2,413 (−11%), CTR 0.48%→1.04% (+117%), Pos 29.4→25.6 (+3.8). Previous commits (e10e6bea, 89e824b7) drove organic improvement — homepage at pos 13.0, 2.8% CTR. /pricing/ canonical consolidated (no bare /pricing in GSC pages this week).

**Experiments resolved:**
- exp-2026-07-21-homepage-ctr → INCONCLUSIVE: never logged a baseline/shipped date; homepage improved organically via prior commits. No action needed now — homepage title already strong.
- exp-2026-07-21-pricing-slash-consolidation → WON: /pricing (no slash) no longer appears in GSC pages section; canonical redirect from commit 89e824b7 succeeded. Lesson: canonical/redirect fixes do consolidate ranking signals; apply same pattern to other split pages.
- exp-2026-07-21-pricing-blog-zero-ctr → SHIPPING TODAY (see new exp-2026-08-10-blog-price-title below).

**Critical new finding:**
Blog post /blog/car-detailing-prices-value-breakdown/ ranks pos 2.2 for "car detailing near me" — 171 impressions, 0 clicks. It is the #1 ranked organic result for the site's highest-volume local keyword, but it's a price guide. Users searching "near me" want a local service page, not an article. Title/meta contained "Columbia SC" signals that caused Google to treat it as a local landing page. Fix: rewrite title/meta to pure informational/cost-guide intent (remove location signals from title and meta).

**Rules:**
10. **Blog post cannibalization via local signals**: A blog post with "Columbia SC" in title/meta can rank for "near me" queries and steal impressions at 0% CTR. Always strip location signals from national/informational blog titles and meta descriptions — let /pricing and location pages own local intent.
11. **"near me" at pos 2 ≠ clicks if intent mismatch**: Pos 2.2 with 171 impr and 0 clicks proves that ranking high for a query is worthless if your page doesn't match intent. Measure CTR by query×page, not just position.
12. **Location page CTR at pos < 10 must use "We Come to You" + price anchor**: /locations/irmo-sc/ was at pos 7.9, 56 impr, 0 clicks with generic title "Auto Detailing Services Irmo SC". Mobile + price anchor titles (e.g. "Mobile Detailing Irmo SC | From $100 · We Come to You") are required for any location page in pos 4-10.
