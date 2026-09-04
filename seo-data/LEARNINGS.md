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

## 2026-08-24 — Impressions dropped -29% WoW; /pricing/ hit hardest; blog prices page is striking distance

**Evidence:** WoW (Aug 9–15 → Aug 16–22): clicks 17→15 (-12%), impr 2,397→1,699 (-29%), CTR 0.71%→0.88% (+17% relative), pos 26.9→29.9 (worsened). Biggest drops: /pricing/ (1,047→569 impr, pos 20→29), /blog/car-detailing-prices-value-breakdown/ (435→237 impr, pos 59→71). Homepage held steady: 7 clicks both weeks, CTR improved 2.05%→3.20%, pos improved 13.87→12.37. /locations/west-columbia/ gained impressions (159→202) but CTR dropped from 1.26% to 0.50% as position improved to pos 16.69.

**Experiment closures:** All three 2026-07-21 experiments had started=null (never shipped). Closing them:
- exp-2026-07-21-homepage-ctr: **Shipped this cycle** (started 2026-08-24). Never actually deployed; finally implementing now.
- exp-2026-07-21-pricing-blog-zero-ctr: **Inconclusive** — never shipped; /blog/car-detailing-prices-value-breakdown/ now at pos 71 (too deep for title-only fix). Superseded by mobile-prices-2025 blog opportunity.
- exp-2026-07-21-pricing-slash-consolidation: **Inconclusive** — canonical fix was already deployed 2026-07-09 outside experiments; /pricing/ dropped pos 20→29 this week (likely algorithm fluctuation not canonicalization).

**Rules:**
10. **Blog title years matter**: "2025" in titles is becoming stale in 2026; update to 2026 for "cost/price" queries where freshness influences CTR.
11. **"how much does X cost" queries convert differently**: /blog/mobile-detailing-columbia-sc-prices-2025/ ranks pos 3–11 for multiple "how much" queries but gets 0 CTR — title must directly answer the question ("$100–$999+") not just label the topic.
12. **Price anchors work**: Use "From $100" / "From $200" in meta descriptions for location pages — corrects the "$200" floor shown on West Columbia page that undersells the entry price.
13. **/pricing/ impression drops are volatile**: Page lost 54% impressions WoW; avoid heavy changes until it stabilizes. Monitor position recovery before experimenting further.
14. **Sitemap shows 0 indexed**: GSC sitemap report shows 119 submitted / 0 indexed — flagged for human review. Pages ARE appearing in GSC, so may be a reporting artifact. Needs manual verification.
