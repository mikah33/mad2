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

## 2026-08-17 — Click drop -32% WoW; "car detailing near me" position collapsed; 3 title rewrites shipped

**Evidence:** 7d Aug 9-15 vs Aug 2-8: clicks 17 vs 25 (-32%), impressions 2,397 vs 2,413 (flat), CTR 0.71% vs 1.04% (-32%), avg pos 26.9 vs 25.6 (worse). Root cause: "car detailing near me" dropped from pos 3.5 (224 impr) → pos 9.3 (38 impr) week-over-week — likely Google position volatility; no site changes between those two weeks (all 3 prior experiments still had started=null, meaning nothing was deployed). The /pricing/ page is the highest-impression page (1,047 impr) at a weak 0.4% CTR, pos 20.3. Blog post /mobile-detailing-columbia-sc-prices-2025/ has 113 impressions at pos 16.7 but 0 clicks — "2025" in the title is stale (it's Aug 2026). Blog /car-detailing-prices-value-breakdown/ has 435 impressions, 0 clicks, pos 58.8 — too deep to click, queued as future work.

**Experiments resolved:** None. All 3 experiments from the 2026-07-21 baseline had status=open but started=null (planned, never shipped). No outcomes to log.

**Rules (new this week):**
10. **Position volatility is real**: "car detailing near me" went from pos 3.5 → 9.3 week-over-week without any site change. Don't over-react; keep title targeting the query and let rankings stabilize. If it stays below pos 7 for two consecutive cycles, escalate (check for new local competitors, manually inspect SERP).
11. **Stale year in titles kills CTR**: A "2025" year in a blog post title in August 2026 will suppress CTR. Always update year tokens when a new calendar year starts, or when a blog post URL has an explicit year in the slug that differs from current year.
12. **Price anchors in title work for the pricing page**: /pricing/ has 1,047 impressions/week at 0.4% CTR — a title without dollar amounts ("Price List") vs. one that shows ("Exterior $125 · Full Detail $225") is the key test. Hypothesis: price in title pre-qualifies the click and lifts CTR. Watch for 14-day result.
