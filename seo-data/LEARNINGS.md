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

## 2026-11-16 — WoW: clicks -25%, impressions -14%; homepage CTR climbing; executing July backlog

**Evidence:**
- Prior week (Oct 31–Nov 6): 8 clicks · 1,783 impr · 0.45% CTR · pos 47.1
- Current week (Nov 7–13):   6 clicks · 1,536 impr · 0.39% CTR · pos 45.6
- **Homepage improved**: 2→4 clicks, CTR 1.87%→3.05% (position slipped 13.4→19.0 — normal weekly variance or competing pages climbing; monitor)
- **/pricing/**: position improved 47.2→39.3 significantly; CTR lifted 0.22%→0.59%; impressions dropped 459→339
- **/blog/car-detailing-prices-value-breakdown/**: impressions +38% WoW (165→227), position slowly improving (73.3→67.7), still 0 clicks — zero-CTR monster still not fixed
- Location pages (cayce, irmo, lexington) had clicks last week but 0 this week — normal variance for single-click pages at pos 5–18
- Key zero-CTR opportunity: "car odor removal near me" at 112 impr, pos 42, 0 clicks — no "near me" in odor page title
- All 3 planned July experiments had `started: null` — changes were never committed to the repo; executing blog prices rewrite today

**Experiments resolved:**
- **exp-2026-07-21-pricing-slash-consolidation → INCONCLUSIVE**: never executed; GSC now only shows /pricing/ (not /pricing without slash), so the dual-URL impression split appears to have self-resolved without intervention.

**Rules:**
10. **Execute before the next plan**: planned experiments with `started: null` for 4+ weeks should either be executed or dropped; they block new experiments on the same pages and cost impressions every day they sit idle.
11. **Blog prices page impressions are growing fast** (+38% WoW) — the page is indexing and climbing, but zero CTR. Title/meta rewrite is the highest-ROI move: add "cost near me" and a price anchor.
12. **Odor removal "near me" is a rising keyword**: 112 impr/wk at pos 42 with 0 clicks. The existing odor page title lacks "near me" language — add it; don't create a new page.
13. **Homepage CTR at 3% is healthy** at pos 19 this week. No changes needed; monitor for 2 more weeks.
