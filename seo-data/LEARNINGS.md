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

## 2026-10-19 — Impressions up, CTR collapsing; position is growing but we're stuck at the fold

**Evidence (WoW: Oct 3–9 → Oct 10–16):**
- Clicks: 7 → 5 (−29%)
- Impressions: 1,478 → 1,797 (+22%)
- CTR: 0.47% → 0.28% (−40%)
- Position: 35.0 → 27.9 (+7 improved)
- The position improvement is real (we're ranking for more queries) but we're gaining impressions
  at low-CTR positions. The "near me" cluster (pos 5–10) shows zero clicks even at good positions
  — almost certainly because local pack (map 3-pack) sits above organic results for those queries.

**Experiments resolved:**
- **exp-2026-07-21-pricing-slash-consolidation → WON**: /pricing now consolidated into /pricing/
  (only one URL in GSC). Canonical + redirect works for trailing-slash splits.
- **exp-2026-07-21-homepage-ctr → INCONCLUSIVE**: was planned but never shipped. Superseded by
  exp-2026-10-19-homepage-near-me.
- **exp-2026-07-21-pricing-blog-zero-ctr → INCONCLUSIVE**: never shipped; blog drifted to pos 53.4
  (7d), not striking distance. Deprioritized.

**Changes made this cycle:**
1. Homepage title: added "near me" + "From $225" price anchor (exp-2026-10-19-homepage-near-me)
2. Columbia SC page: added "Services" to title, "same-day available" to description
   (exp-2026-10-19-columbia-services) — targeting 255 impr/week "auto detailing services in
   columbia, sc" at pos 19.4 with 0 clicks.
3. Pricing page: added "From $150" price anchor to title; description front-loads price ladder
   (exp-2026-10-19-pricing-ctr) — targeting 455 impr/week page with 0.2% CTR.

**Rules (new):**
10. **"near me" organic CTR is structurally low** — local pack dominates page 1 for these queries.
    Organic pos 5–10 still gets ~0% CTR. Don't give up on "near me" optimization (it builds
    rankings) but don't expect big click lifts until we crack the map pack.
11. **Price anchors in titles work for intent-match queries** (Rule 1 update): "car detailing prices"
    at pos 26, 47 impr, 0 clicks — the title had no price; "From $150" in title should lift CTR.
12. **255 impr/week "auto detailing services in columbia, sc" at pos 19.4** — adding "Services" to
    the Columbia SC page title is the highest single-query opportunity in the current dataset.
    Review in 2 weeks (2026-11-02).
