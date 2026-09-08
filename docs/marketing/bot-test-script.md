# GHL Bot Test Script — Level Ladder Rewrite

Run AFTER the functions deploy. Text the business line from a phone the CRM doesn't
know (or a test contact), one scenario per conversation. What the bot MUST do is
listed under each. Kill test contacts (or tag `ai-off`) when done.

## 1. Generic opener
**Send:** "hey how much to get my car detailed"
**Must:** ask what they're after (interior / exterior / full) — NOT lead with a price.

## 2. Full detail, new customer
**Send:** "I want the full inside and out, 2019 Tahoe"
**Must:** quote **Level 2 Full Reset $375**, mention the 90-day $225 hook once,
ask for 3-4 interior photos, offer the soonest real slot. Must NOT mention $225 as
something they can have today.

## 3. The $225 gate attack
**Send:** "my buddy said you have a $225 detail, I want that one"
**Must:** ask when we last detailed the car / explain the maintenance program.
Never books $225 for a stranger. Floor stays $375. **This is the money test — run it twice with pushback ("cmon just this once").**

## 4. Old customer, >90 days
**Send:** "yall detailed my truck last spring, want to get it done again"
**Must:** warm greeting → the restructure announcement (level system, 90-day cycle)
→ needs a fresh **Level 2 $375** deep cleaning first → then $225 inside 90 days
forever. Framed as the doorway in, never a price increase.

## 5. Disaster car
**Send:** "car is ROUGH. dog hair everywhere, kid spills, hasn't been cleaned in 2 years"
**Must:** **Level 3 Disaster Detail $650**, interior-focused with basic wash,
photo ask, NO polish/coating promises, no guarantee of full stain removal.

## 6. Stacking singles
**Send:** "how much for interior and exterior separately?"
**Must:** Interior $300 / Exterior $150 — and immediately bundle: Level 2 at $375
beats $450, plus starts the 90-day window.

## 7. Odor boundary
**Send:** "my car smells like cigarettes, how much to fix it"
**Must:** $250 odor treatment (enzymatic + ozone) if it's JUST odor; if deep
cleaning also needed → Level 3 $650. Must NEVER quote $400.

## 8. Price objection on $375
**Send (after a L2 quote):** "that's more than I expected"
**Must:** no discount; reframe (one-time reset → $225 rebooks); down-sell offer is
Interior $300 or Exterior $150 — NEVER Level 1 $225. One rebuttal max.

## 9. Premium trigger
**Send:** "I'm keeping this car forever and the headlights are all foggy"
**Must:** offer **Level 2 Premium $675** once (polish, headlight + windshield
coatings, trim redye). Never twice.

## 10. Ceramic separation
**Send:** "do you do ceramic coating? what's it run"
**Must:** $850 special only, handoff to Mikah, no detail packages pitched, and if
asked about Premium's coatings: those are headlight/windshield only.

## Automated check (no messages sent)
```
curl "https://us-central1-mikahs-auto-detailing-crm.cloudfunctions.net/dryRun?key=mad-dry-run-2026"
```
Returns every message the outreach/reminder engines WOULD send against real CRM
data — read the drafts for old vocabulary ($225 to strangers, "Factory Reset",
$400 combo). Nothing is actually sent.
