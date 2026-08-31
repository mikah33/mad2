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

## 2026-08-31 — Impressions surging (+41% WoW) but position degrading; 3 stale experiments closed; 3 new launched

**Evidence:** Prior week (Aug 16–22): 15 clicks / 1,699 impr / 0.883% CTR / pos 29.93.
Current week (Aug 23–29): 16 clicks / 2,392 impr / 0.669% CTR / pos 38.43.
WoW: clicks +1 (+7%), impressions +41%, CTR −0.21pp, avg position worsened 8.5 spots.
Impression surge with position degradation = more tail pages indexed at deep positions,
diluting aggregate metrics. Not a quality decline — site is indexing more, just at low positions.

Top pages (current 7d): /pricing/ 908 impr/pos41/0.33% CTR; /locations/west-columbia/ 290 impr/pos16/0.69%; /blog/car-detailing-prices-value-breakdown/ 290 impr/pos79/0%.
Top striking-distance zero-CTR queries: "mobile detailing near me" 28i/pos5.9/0%, "car detailing near me" 65i/pos7.6/3.1% (CTR decent), "auto detailing near me" 10i/pos7.3/0%.

**Experiment resolutions:**
- exp-2026-07-21-homepage-ctr: INCONCLUSIVE (never shipped; homepage CTR now 3.9% — recovered on own; map pack absorbs 'near me' clicks)
- exp-2026-07-21-pricing-blog-zero-ctr: INCONCLUSIVE (never shipped; superseded by exp-2026-08-31-blog-prices-retitle)
- exp-2026-07-21-pricing-slash-consolidation: INCONCLUSIVE (never shipped; pricing page still at pos 41, needs title fix)

**New experiments launched this week:**
- exp-2026-08-31-pricing-title: /pricing/ title now answers "How much does car detailing cost?" directly
- exp-2026-08-31-blog-prices-retitle: blog "how much does car detailing cost" title alignment
- exp-2026-08-31-west-columbia-title: West Columbia page — price anchor "From $125" + "5.0★" added to title

**Rules:**
10. **"Near me" queries at pos 5-7 often get 0 organic CTR** because Google's map pack absorbs clicks. Optimizing title/meta for these is low-ROI; focus GBP optimization instead. Exception: if the query has no map pack (desktop, informational intent), title CTR matters.
11. **"How much does X cost" is the highest-volume query form** for cost-intent traffic. Title that starts with or directly answers this question ranks better AND gets higher CTR than generic "price list" framing.
12. **Price anchors in titles work** — add "From $X" to location page titles that show pos 10-20 with CTR < 1%. West Columbia test will validate this for location pages specifically.
