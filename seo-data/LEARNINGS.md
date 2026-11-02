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

## 2026-11-02 — WoW +60% clicks; all 3 July experiments finally shipping

**Evidence:** Week Oct 24–30: 8 clicks, 1,513 impr, 0.53% CTR, pos 46.7.
Prior week Oct 17–23: 5 clicks, 1,335 impr, 0.37% CTR, pos 39.1.
WoW: clicks +60%, impr +13%, CTR +0.16pp. Avg position dropped 39.1→46.7 — more new low-ranked pages in the index, not a regression on existing pages.

Experiment resolutions:
- **exp-2026-07-21-pricing-slash-consolidation** (inconclusive): /pricing (no trailing slash) no longer in pages data; /pricing/ now 5 clicks, 569 impr vs baseline of ~6 clicks, 2,743 impr (28d). Canonical fix was deployed 2026-07-09 per LEARNINGS rule 6 but never formally started as experiment — marking inconclusive; no clean baseline window.
- **exp-2026-07-21-homepage-ctr and exp-2026-07-21-pricing-blog-zero-ctr**: Both planned in July 2026 but never shipped. Shipping now (2026-11-02).

Key findings:
- /locations/columbia-sc/ is the biggest zero-CTR page: 231 impr, 0 clicks, pos 39.4. Title said "Auto Detailing" while queries say "car detailing columbia sc" — term mismatch.
- Blog pricing post worsened in position (45→74) — "near me" in title signals local intent for what are informational "how much" queries; mismatch hurts ranking.
- Homepage still striking distance: "car detailing near me" pos 8.2, "detailing near me" pos 7.25, "auto detailing near me" pos 5.8 — but 0 clicks because title has no "near me" signal and no price anchor.
- "car odor removal near me" (104 impr/wk, pos 54.2) is a growing opportunity for /services/odor-stain-removal/ — deferred (page already at >100 impr but pos too deep for quick CTR win this week).

**Rules:**
10. **Columbia SC title must say "Car Detailing" not "Auto Detailing"**: every query landing on /locations/columbia-sc/ uses "car detailing columbia sc" — "Auto" is a relevance mismatch costing clicks.
11. **Blog pricing posts need informational-intent titles**: national "how much does car detailing cost" queries are non-local; "near me" in the title repels those searchers. Use year + "price breakdown" framing.
12. **Ship planned experiments within 2 weeks of planning** — 3.5-month delay on July 2026 experiments meant zero data collection for 15 weeks. Plan → implement in the same weekly cycle or the next one at the latest.
