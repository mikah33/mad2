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

## 2026-08-03 — Avg position dropped sharply; all three Jul-21 experiments never shipped

**Evidence:** Week Jul 19–25 vs Jul 26–Aug 1:
- Clicks: 12 → 13 (+8%) ✓
- Impressions: 2,853 → 2,718 (−4.7%)
- CTR: 0.421% → 0.478% (+0.06pp) ✓
- Avg position: 19.78 → 29.38 (+9.6 pos drop) ✗ alarming

All three Jul-21 experiments had `started: null` — they were PLANNED but never executed by the agent. Pricing /pricing vs /pricing/ canonical split is resolved (commit 89e824b7, Jul 9; only /pricing/ shows in GSC pages now). Marking that experiment won.

Page-level highlights:
- /pricing/: 912 impr / 0.11% CTR / pos 24.5 — biggest impression sink, essentially zero CTR
- /blog/car-detailing-prices-value-breakdown/: 551 impr / 0% CTR / pos 57.6 — dropped from pos 28.5 the prior week (−29 pos!); ranking collapse, not just CTR failure
- /blog/mobile-detailing-columbia-sc-prices-2025/: 149 impr / 0% CTR / pos 16 — page 2 with zero clicks; title says "2025" in 2026
- Homepage: 441 impr / 1.36% CTR / pos 18 — impressions grew +34% WoW but position worsened (10.7 → 18)
- "mobile detailing near me": pos 4.9, 22 impr, 0 clicks — top-5 with zero CTR, leaving clicks on the table
- "auto detailing services in columbia, sc": 190 impr / pos 22.8 — new top query, but /auto-detailing-services-columbia-sc/ only shows 6 impr; homepage is likely absorbing it

**Rules:**
10. **Stale year in title kills CTR instantly.** Any title containing "2025" in 2026 will show searchers an outdated result and they will skip it even at position 10–20. Audit all blog titles annually in Q1.
11. **The /pricing/ page is the site's biggest CTR waste** (912 impr/wk at pos 24, 0.11% CTR). Every week without a title/meta change there is a week of lost clicks. Prioritize it.
12. **Position drops of >20 spots on a blog post signal ranking collapse**, not CTR failure; a meta rewrite alone won't recover it. Investigate: is a stronger national competitor now outranking the page? Cross-link from /pricing and other ranked pages to rebuild authority.
13. **Homepage impressions growing (+34% WoW) but position worsening (10.7→18)** means Google is showing the page for more queries at lower positions. Add "near me" to the title to capture high-intent users even at mid-page positions.
