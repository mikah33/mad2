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

## 2026-09-21 — WoW: impressions up 46%, position improved 11pts; 3 stale PLANNED experiments cleared

**Evidence:**
- Week Sep 5–11: 4 clicks, 1,336 impr, 0.30% CTR, avg pos 48.88
- Week Sep 12–18: 5 clicks, 1,953 impr, 0.26% CTR, avg pos 37.65
- WoW: +1 click (+25%), +617 impr (+46%), position improved 11.2 pts (major gain)
- CTR dipped slightly (0.30% → 0.26%) despite position gains — confirms titles are the bottleneck
- Top zero-CTR pages: /locations/columbia-sc/ (652 impr, 0.15% CTR), homepage (580 impr, 0.17% CTR), /pricing/ (444 impr, 0% CTR)
- Dominant zero-click query: "auto detailing services in columbia, sc" — 455 impr, 0 clicks, pos 32.7

**Experiments resolved:**
- exp-2026-07-21-homepage-ctr: INCONCLUSIVE — never shipped (started=null); plans from July 2026 never executed. "car detailing near me" moved from pos 7→16.2 but CTR improved baseline was 1.06%, current is 2.44% (improvement despite no change — organic ranking fluctuation).
- exp-2026-07-21-pricing-blog-zero-ctr: INCONCLUSIVE — never shipped. Blog page now 38 impr/wk at pos 83 (was 2011/28d at pos 45) — performance worsened significantly without intervention. Zero-CTR blog problem persists.
- exp-2026-07-21-pricing-slash-consolidation: INCONCLUSIVE — never shipped. /pricing/ now 444 impr/wk at pos 41.9 (was 6 clicks/2743 impr 28d at pos 17.4) — position degraded badly. Needs title/meta fix urgently.

**Actions taken this cycle:**
1. LocationColumbiaPage.tsx — title now matches "auto detailing services in columbia, sc" dominant query
2. PricingPage.tsx — removed stale "2026" year; added price anchor "Exterior From $150 · We Come to You"
3. HomePage.tsx — added "Near Me" to title to match dominant query intent; added "We Come to You" framing

**Rules:**
10. **CTR is the bottleneck even when position improves** — position improved 11 pts WoW but CTR still dropped. Meta titles must match the dominant GSC query verbatim or near-verbatim. ("auto detailing services in columbia, sc" had 455 impr, 0 clicks — the old title did not contain "services".)
11. **Don't let planned experiments sit unshipped** — the July 21 batch was never executed. If an experiment has started=null after 30+ days, mark inconclusive and re-plan with current data.
12. **Year-based title tokens ("2026") decay** — remove from production titles; use price anchors ("From $150") and differentiators ("We Come to You") instead. Price anchors are durable.
13. **Blog page for pricing terms is declining** — /blog/car-detailing-prices-value-breakdown/ went from 2011 impr (Jul baseline) to 38 impr/wk now at pos 83. Do not invest in blog content for this term; /pricing/ page is the better vehicle.
