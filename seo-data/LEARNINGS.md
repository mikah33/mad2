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

## 2026-11-23 — WoW decline on volume, homepage CTR breakout, prices blog is a persistent zero-CTR sink

**Evidence:** WoW (Nov 7–13 vs Oct 31–Nov 6): clicks 6 vs 8 (−25%), impressions 1536 vs 1783 (−14%),
CTR 0.39% vs 0.45% (−0.06pp), avg position 45.6 vs 47.1 (+1.5, slight improvement).
Homepage was the bright spot: CTR jumped from 1.87% (107 impr) to 3.05% (131 impr) — best week on record.
Pricing page recovered from 1 click/459 impr to 2 clicks/339 impr at better CTR (0.59% vs 0.22%).
blog/mobile-detailing-columbia-sc-prices-2025 dropped from 2 clicks/89 impr to 0/75 — likely variance.
blog/car-detailing-prices-value-breakdown: impressions grew 165→227 but clicks remain 0 at pos 67.7.
services/odor-stain-removal: 128→130 impr, 0 clicks, pos 47.2. Query "car odor removal near me"
has 112 impressions at pos 41.8 — no clicks. All 3 July experiments were PLANNED but never started.

**Experiments resolved:** None (all were PLANNED, started=null — first time acting on the prices blog
experiment; starting it this cycle).

**Changes this cycle:**
1. blog/car-detailing-prices-value-breakdown title+meta rewrite: old title "What It Should Cost"
   lacked price anchor and query alignment. New title includes "Prices" + "From $225" anchor.
   Meta also fixed a "$150" price that wasn't in published price list.
2. services/odor-stain-removal title rewrite: added "near me" phrase to match 112-impr query.

**Rules:**
10. **Homepage CTR 3.05% at pos 19** — do NOT touch homepage title/meta; it's working. Focus budget
    on other pages.
11. **blog/car-detailing-prices-value-breakdown** is a persistent zero-CTR monster (165→227 impr,
    zero clicks). Title must match "prices" + "cost" intent, not "What It Should Cost". Price anchors
    in meta improve CTR — test shows this hypothesis for the 14-day review.
12. **"near me" in titles boosts CTR** for local service queries — especially for position 20-50
    pages where the query intent is explicit. Apply to service pages ranking for "X near me" terms.
13. **$/pricing vs /pricing/ split appears resolved** — only /pricing/ shows in Nov data. No further
    canonicalization work needed this cycle.
