# GEO / LLMO Gap Analysis — mikahsmobiledetailingsc.com

Analyzed: 2026-07-03

## GEO Readiness Score: 42/100

| Platform | Score | Why |
|---|---|---|
| Google AI Overviews | 60/100 | Google renders JS, so rankings + structured content carry over. The /pricing 2026 answer block is AIO-ready. |
| ChatGPT (GPTBot) | 25/100 | GPTBot does not execute JavaScript → sees ZERO body content. No Reddit/Wikipedia entity presence. |
| Perplexity | 25/100 | Same empty-body problem; Perplexity leans on Reddit (46.7% of citations) where the brand has no presence. |

## Critical gaps (ranked by impact)

### 1. AI crawlers see an EMPTY site (CRITICAL)
Every page serves `<div id="root"></div>` with 0 words of body text. Non-JS
crawlers (GPTBot, ClaudeBot, PerplexityBot) can only read:
- `<head>` meta (title/description — fixed 2026-07-03)
- JSON-LD schema (business facts, FAQs on some pages)

The only real "content" AI can quote is the FAQPage schema (e.g. 7 Q&As on the
prices blog post). Everything else — the pricing tables, the 2026 cost answer,
all 46 article bodies — is invisible.

**Fixes, in order of effort:**
- a) Populate `articleBody` in BlogPosting schema (currently EMPTY — the full
  text already exists in `src/content/blog/*.json`; one generator change).
- b) Inject real static HTML content into the prerendered `<body>` for the
  top pages (pricing table, cost answer block, service descriptions) via the
  existing generator scripts. React replaces it on hydration.
- c) Full build-time SSR (renderToString / vite prerender) — the complete fix.

### 2. No llms.txt (fake 200)
`/llms.txt` returns the SPA homepage HTML (soft-200), not a real file.
Create `public/llms.txt` (Netlify will serve the static file over the SPA
fallback) with: business summary, service+price list, service areas, key page
links, phone. This is the single cheapest LLMO win.

### 3. Empty articleBody + stale dates
- `BlogPosting.articleBody` = 0 chars on all 46 posts.
- `dateModified` shows 2024-03-15 on posts updated in 2026 — freshness is a
  known AI-citation signal. Wire `dateModified` to real update dates.

### 4. Near-zero brand/entity footprint (highest long-term leverage)
Brand mentions correlate ~3× more strongly with AI citations than backlinks
(Ahrefs, Dec 2025). Current presence:
- Facebook page: ✅ (facebook.com/MikahsDetailing)
- Reddit: ❌ none found (Perplexity's #1 citation source)
- YouTube: ❌ none found (strongest correlation, ~0.737)
- Wikipedia/Wikidata: ❌ (not realistic for a local detailer — skip)
- LinkedIn: ❌

**Actions (human tasks):** post before/after Shorts to a YouTube channel
(content already exists in the gallery); participate genuinely in r/Columbia
and r/AutoDetailing threads; keep Google Business Profile reviews flowing —
local AI answers lean heavily on GBP + review corpus.

### 5. No multi-modal / interactive assets
No video embeds, no calculator. A simple "detailing cost calculator"
(vehicle size + condition + service → price estimate) would be a unique,
citable tool no local competitor has — and content with multi-modal elements
sees ~156% higher AI selection rates.

## What's already GOOD for GEO
- robots.txt: `User-agent: * / Allow: /` — every AI crawler allowed ✅
- Rich JSON-LD entity data (LocalBusiness/AutomotiveBusiness, offers, FAQs) ✅
- /pricing now has a snippet-format direct answer + comparison table
  (exactly the 40–60-word answer pattern AIO extracts) ✅
- Question-based H2s and FAQ blocks on money pages ✅
- Author byline + bio on blog posts ✅

## Priority order
1. Real `llms.txt` (30 min, permanent)
2. `articleBody` in blog schema (1 line-ish generator change → 46 pages of AI-readable text)
3. Static content injection for top pages' `<body>` (prerender upgrade)
4. Fix `dateModified` freshness
5. YouTube Shorts + Reddit presence (ongoing, human)
6. Cost calculator page (unique citable asset)
