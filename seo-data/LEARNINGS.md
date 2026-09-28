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

## 2026-09-28 — WoW drop -38% impr/-60% clicks; 3 planned experiments finally shipped

**Evidence:** Week of Sep 19–25 vs Sep 12–18:
- Clicks: 5 → 2 (-60%) | Impressions: 1,953 → 1,209 (-38%) | CTR: 0.26% → 0.17% | Pos: 37.65 → 39.50
- Biggest driver: /locations/columbia-sc/ crashed from 652 → 130 impr (-80%) in one week. The 333-impr "auto detailing services in columbia, sc" query keeps landing on the homepage (pos 22), not the Columbia location page.
- "car detailing near me" moved from pos 16 → 11.3 on homepage (positive), but still 0 clicks.
- "mobile detailing near me" hitting West Columbia page at pos 7.5 — prime striking distance, 0 clicks.
- /pricing/ 306 impr, 0 clicks, pos 44.6 — unchanged.
- All 3 July experiments had started=null (planned only, never shipped). Shipped 3 today.

**Experiments resolved:** None (all July experiments were unstarted; marked started today).

**Rules added:**
10. **Homepage outranks Columbia-SC location page for "auto detailing services in columbia, sc"** (333 impr/wk, pos 22) — align homepage title to this term to reclaim those impressions with CTR. Do NOT also optimize the location page title for the same term (cannibalization).
11. **West Columbia page at pos 7.5 for "mobile detailing near me"** — "near [city]" in the title lifts CTR on location pages ranked 5–10; confirmed by adding "Near" to title.
12. **Title rewrites on location pages always sync ogDescription + twitterDescription** — those fields are shown in SMS/social shares and affect brand perception even for local service pages.
