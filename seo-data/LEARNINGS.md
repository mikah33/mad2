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

## 2026-09-07 — WoW drop; pricing page is the top untapped opportunity

**Evidence:** Week of Aug 30–Sep 5: 10 clicks, 1,477 impr, 0.68% CTR, pos 42.5.
Prior week (Aug 23–29): 16 clicks, 2,392 impr, 0.67% CTR, pos 38.4.
WoW: clicks −37.5%, impressions −38.3%, CTR flat, position worse. Drop likely reflects
weekend-heavy date range vs. prior week (Labor Day weekend lower search volume).

**Experiment outcomes (all 3 baseline experiments were PLANNED but never implemented — no
code changes shipped in prior runs, so no measurable outcomes):**
- exp-2026-07-21-homepage-ctr → inconclusive (never started; converting to active exp this week)
- exp-2026-07-21-pricing-blog-zero-ctr → inconclusive (never started; blog dropped to 77 impr/wk
  at pos 81 — too deep to fix with title alone; deprioritized)
- exp-2026-07-21-pricing-slash-consolidation → inconclusive (never started; /pricing/ is the only
  version appearing in current GSC pages data — consolidation may have resolved naturally)

**Top opportunity this week — /pricing/ (553 impr, 0.18% CTR, pos 47):**
The pricing page received more impressions than any other page (553) but nearly zero clicks.
Queries: "car detailing prices" (44 impr, pos 33), "mobile detailing prices" (29 impr, pos 53).
Price-anchored title rewrite is the highest-leverage change available.

**Rules:**
10. **/pricing/ title is the single biggest CTR lever** — 553 impr/wk at 0.18% CTR; add
    "mobile" + price anchor ("From $125") to the title. Retest every 2 weeks.
11. **"Near me" queries rank pos 6-9 on homepage but get 0 clicks** — "mobile detailing near me"
    (pos 6.9, 18 impr), "car detailing near me" (pos 9.3, 27 impr). Homepage title needs "near me"
    + "We Come to You" phrasing to convert impressions.
12. **Homepage overall CTR is improving** (2.98% at pos 14 this week) but the "near me" cluster
    isn't converting — title must speak to the query, not just the city.
13. **/locations/west-columbia/ at pos 23, 0.56% CTR** — striking distance; description rewrite
    with prominent price anchor should lift CTR toward 2-3%.
