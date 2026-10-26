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

## 2026-10-26 — Impression drop, CTR improvement; July planned experiments never shipped

**Evidence:**
- WoW (Oct 10-16 → Oct 17-23): Clicks flat (5→5). Impressions -25.7% (1,797→1,335). CTR +34.5% (0.278%→0.374%). Avg position worsened aggregate (27.9→39.1) but homepage specifically improved (pos 17.3→16.0).
- The impression drop is consistent across all pages (homepage: 263→106, /columbia-sc/: 289→134, /west-columbia/: 161→108). Likely Google volatility / index churn rather than a penalty.
- "car detailing near me" (the #1 volume term, 880/mo): homepage ranks pos 6.5 with 57 impr this week — but 0 clicks. Price anchors and benefit copy are missing from the homepage title.
- /locations/lexington-sc/: 99 impr, 0 clicks, pos 16.2. Title already has "We Come to You" but no price anchor in title or meta.
- /blog/car-detailing-prices-value-breakdown/: 161 impr, 0 clicks, pos 54.7. Title targets "near me" but page content/queries are about "car detailing prices/cost" — title-query mismatch.
- All 3 July 2026 planned experiments (homepage-ctr, pricing-blog-zero-ctr, pricing-slash-consolidation) had started=null; never shipped. Marking all inconclusive.

**Experiments resolved this cycle:**
- exp-2026-07-21-homepage-ctr: inconclusive (never started). Superseded by exp-2026-10-26-homepage-ctr.
- exp-2026-07-21-pricing-blog-zero-ctr: inconclusive (never started). Superseded by exp-2026-10-26-blog-prices-title.
- exp-2026-07-21-pricing-slash-consolidation: inconclusive (never started). No change to /pricing/ this cycle; deferred.

**Rules:**
10. **Homepage title must include "near me" phrasing and a price anchor** — ranking pos 6.5 for "car detailing near me" with 0 CTR means the SERP snippet isn't compelling. "From $225" + "5.0★" in the title should convert impressions to clicks.
11. **Location page metas need price anchors** — Lexington at pos 16, 99 impr, 0 clicks shows a compelling title alone isn't enough; the meta description needs "From $150" + "same-day available" to trigger click intent.
12. **Blog posts must match query intent in title** — "car detailing prices" cluster drives 150+ impr/wk to the prices post, but the title says "near me: what it should cost" — misaligned. Re-title to match price-intent queries.
13. **Impression volatility ≠ trend signal** — a single-week 25% impression drop with flat clicks may be index churn. Wait 2+ weeks before concluding a structural problem.
