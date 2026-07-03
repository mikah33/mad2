# GA4 Tracking System — Setup & Reference

Last updated: 2026-07-03. Property: **G-RYC8XZ9D02** · Ads: AW-16694998422 · GTM: GTM-WBS8H6B2

## What was broken before this change

The site only ran `gtag('config', 'AW-16694998422')` — the Google **Ads** tag.
Every custom event in code (`scroll_depth`, `section_view`, `phone_call_click`,
`text_message_click`, `book_click`, `contact`, …) was sent ONLY to the Ads tag,
which ignores non-conversion events. **They never reached GA4.** GA4 only got
the page_views that GTM fired itself. `index.html` now also runs
`gtag('config', 'G-RYC8XZ9D02', { send_page_view: false })`, so all events land
in GA4.

## Event reference (what the site now sends)

### Page + engagement
| Event | Params | Answers |
|---|---|---|
| `page_view` | page_path, page_title | Visitors page by page (fired per SPA route by PageViewTracker) |
| `scroll_depth` | percent_scrolled (25/50/75/100), page_path | How far down each page people get |
| `section_view` | section_id, page_path | Which sections were ever seen (≥50% visible) |
| `section_time` | section_id, **seconds**, page_path | How LONG each section was actually on screen (timer pauses when tab hidden; flushed on exit/route change) |

### Buttons / CTAs
| Event | Params | Answers |
|---|---|---|
| `cta_click` | cta_text, cta_type (phone/sms/email/link/outbound_link/button), link_url, section_id, page_path | Every button & link click on the site, by exact label and location |
| `phone_call_click` | source, value $275 | Any tel: link click (delegated site-wide + explicit sources: hero, nav, contact, trust_badges, sticky_button, booking_form) |
| `text_message_click` | source, value $275 | Any sms: link click |
| `contact` | method (phone/sms), source | GA4 recommended contact event |
| `book_click` | source | "Book Online" intent clicks |
| `select_service` | form_id, service_name | Which package card people pick (cards are divs, so cta_click can't see them) |

### Booking funnel (form_id = `booking_main` on /book, `booking_specials` on the specials landing page, `lead_form_quote` for the quote form)
| Event | Params | Answers |
|---|---|---|
| `booking_step_view` | form_id, step_number 1–5, step_name | Where in the 5-step funnel people get to. Steps: 1 package_selection, 2 last_detail_timing, 3 cleanliness_level, 4 vehicle_type, 5 contact_details |
| `form_field_start` | form_id, field_name, step_number | Which contact field each person reached (first keystroke per field) |
| `booking_submit_attempt` | form_id | Submit button pressed |
| `booking_submit_success` / `booking_submit_error` | form_id, error_message | Did the webhook accept it |
| `booking_abandon` | form_id, last_step_number, last_step_name, last_field, abandon_reason (page_exit / tab_hidden / route_change) | **Exactly where people drop off** |
| `booking_resume` | form_id, step_number | They hid the tab but came back — net these against tab_hidden abandons |
| `generate_lead` | value $200 | The real lead conversion (Thank-You page, or inline for the quote form) |

Tip: add `data-ga-label="..."` to any button/link to control its reported
`cta_click` text; add `data-ga-section="..."` to any wrapper to give it
section view/dwell tracking even without a `<section id>`.

## One-time GA4 console setup (required — do these)

### 1. Register custom dimensions/metrics
Admin → Data display → Custom definitions → **Create custom dimension**
(all Event-scoped; "Event parameter" must match exactly):

| Dimension name | Event parameter |
|---|---|
| Source | `source` |
| Section ID | `section_id` |
| Percent Scrolled | `percent_scrolled` |
| CTA Text | `cta_text` |
| CTA Type | `cta_type` |
| Link URL | `link_url` |
| Form ID | `form_id` |
| Step Name | `step_name` |
| Step Number | `step_number` |
| Field Name | `field_name` |
| Last Step Name | `last_step_name` |
| Last Field | `last_field` |
| Abandon Reason | `abandon_reason` |
| Service Name | `service_name` |
| Method | `method` |

Then **Create custom metric**: name "Section Seconds", event parameter
`seconds`, unit Standard. (Sum of Section Seconds per Section ID = total dwell.)

Note: dimensions only populate from the day you register them.

### 2. Mark key events
Admin → Data display → Events → toggle "Mark as key event" for:
`generate_lead`, `phone_call_click`, `text_message_click`,
`booking_submit_success`.

### 3. Build the drop-off funnel
Explore → **Funnel exploration**:
- Step 1–5: event `booking_step_view` with condition `step_number` = 1 … 5
- Step 6: `booking_submit_success`
- Breakdown: `Form ID` (compare /book vs specials). Turn on "Show elapsed time".
This shows the exact % lost between every step. Cross-check with
`booking_abandon` broken down by `last_step_name` and `last_field`.

### 4. Useful explorations to save
- **Section dwell**: Free form; rows = Section ID + Page path; values = Section Seconds (sum) + event count of `section_view`.
- **Button performance**: Free form; rows = CTA Text + Page path; filter event = `cta_click`; values = event count.
- **Contact source**: rows = Source; filter events `phone_call_click`, `text_message_click`.
- **Page-by-page**: Reports → Engagement → Pages & screens already gives views, users, and average engagement time per page out of the box.

### 5. Check for double page_views (important)
GTM's GA4 tag still sends its own page_view on first load. After deploying,
open GA4 **DebugView** (or Realtime), load the site, and count `page_view`
events per navigation:
- If you see **2 per initial load**: in GTM, edit the GA4/Google tag for
  G-RYC8XZ9D02 and untick "Send a page view event", or pause it entirely
  (the site now sends everything directly).
- Also: Admin → Data streams → web stream → Enhanced measurement → gear →
  turn **off** "Page changes based on browser history events" (the SPA sends
  its own route-change page_views).

### 6. Verify events flow
Deploy, then visit the site with `?debug_mode=1`… easiest: install the
"Google Analytics Debugger" Chrome extension, browse the site, and watch
DebugView: scroll a page (scroll_depth, section_view, section_time on exit),
click buttons (cta_click), step through /book (booking_step_view 1→5), type
into a field (form_field_start), close the tab mid-form (booking_abandon).

## Known caveats
- `section_time` fires on exit/hide via beacon; very abrupt mobile kills can
  occasionally lose the last flush. Totals are slightly conservative.
- `booking_abandon` with reason `tab_hidden` can be a temporary switch-away;
  `booking_resume` fires if they return — subtract resumes for true abandons.
- The quote form (`lead_form_quote`) now fires `generate_lead` + the Google
  Ads "Submit lead form" conversion inline on success (it never redirected to
  the Thank-You page, so those leads were previously uncounted anywhere).
- Consent Mode defaults to denied then auto-grants for non-EU (`isEU=false`
  in index.html) — unchanged.
