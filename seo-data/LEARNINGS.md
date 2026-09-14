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

## 2026-09-14 — Critical 6-week ranking decline; all July experiments were never executed

**Evidence:**
- WoW (Sep 5–11 vs Aug 30–Sep 5): clicks 10→4 (−60%), impr 1,477→1,336 (−10%), CTR 0.677%→0.299% (−56%), pos 42.5→48.9 (−6.4 pts).
- 6-week trend: catastrophic decline. Aug 2–8: 25 clicks/2,413 impr/pos 25.6 → Sep 5–11: 4 clicks/1,336 impr/pos 48.9.
- All 3 July experiments had `started: null` — NONE were ever deployed. No baseline change has been made to the site since the July baseline was recorded.
- Homepage: ranks pos 9 for "car detailing near me", "mobile detailing near me", "detailing near me" but generated 0 clicks from 43 combined impressions. Title "Mobile Car Detailing Columbia SC | Mikah's Auto Detailing" lacks price anchor.
- /pricing/ page: position collapsed from ~17.4 (Jul baseline) to 51.3 — 417 impr/wk with 0 clicks.
- Location pages (Lexington SC, West Columbia): ~100 impr/wk each at pos 26.5 with 0 clicks. Titles (77–79 chars) were too long and ended with brand name.
- Sitemap: GSC shows 119 submitted / 0 indexed — NEEDS HUMAN INVESTIGATION.
- Blog /car-detailing-prices-value-breakdown/: 104 impr/wk at pos 26.5, 0 clicks. Title/meta needs update but blocked (src/data/blog.ts is off-limits for the SEO agent).

**Experiments resolved this cycle:** None — all July experiments had no start date.

**Rules:**
10. **All planned experiments must be executed the same week they are created.** `started: null` = value = zero. A plan that ships nothing cannot be measured.
11. **Titles without price anchors at pos 8–10 generate 0 clicks.** Always include "From $X" + "We Come to You" in titles for service and location pages.
12. **Removing the brand-name suffix from location page titles** frees ~25 chars for benefit content — do this for all location pages systematically.
13. **6-week sustained ranking decline (pos 25→49) requires human review.** Could be: Google algo update, /pricing/ URL split still unresolved, or a technical regression from the large Sep 13 content update (97 files changed). Flag immediately — do NOT paper over a technical problem with title rewrites alone.
14. **Blog title updates MUST be done by Mikah** (src/data/blog.ts is off-limits). Leave a standing note in experiments.json outcome field and raise in the weekly report issue.
15. **/pricing/ page regression** (pos 17→51) may be the URL-split experiment (exp-2026-07-21-pricing-slash-consolidation) never being executed. Canonical fix should be top priority for Mikah.
