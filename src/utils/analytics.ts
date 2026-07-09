/**
 * Centralized analytics + conversion tracking for Mikah's Auto Detailing.
 *
 * One place that fires THREE things for every meaningful action:
 *   1. Google Analytics 4 (GA4) events   -> behavioural reporting / Key Events
 *   2. Google Ads conversions            -> bidding & ROAS (separate label per action)
 *   3. Meta (Facebook) Pixel events      -> Meta ads
 *
 * Why this file exists: previously the form submission AND every call/text button
 * all fired the SAME Google Ads label (.../TihGCPrb_9sZEJbr5Zg-), so phone/text
 * clicks were being counted as "Submit lead form". Each action now has its own
 * GA4 event and its own Google Ads label.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
    gtag_report_conversion?: (url?: string) => void;
    __contactLinkTrackingInstalled?: boolean;
  }
}

/** Google Ads account ("AW-") id. */
const ADS_ID = 'AW-16694998422';

/**
 * GA4 measurement id. Configured directly in index.html (gtag) so that every
 * ga4() event below actually reaches GA4 — GTM (GTM-WBS8H6B2) also contains
 * this property but only handles its own page_view tags.
 */
export const GA4_ID = 'G-RYC8XZ9D02';

/**
 * Google Ads conversion LABELS, one per action.
 *
 * `lead_form` already exists in the Google Ads account ("Submit lead form").
 * `phone_call` and `text_message` need NEW conversion actions created in
 * Google Ads (Goals -> Conversions -> + New). After creating each one, paste
 * its label below (the part after "AW-16694998422/").
 *
 * Until a label is filled in, the GA4 + Meta events still fire correctly; only
 * the Google Ads conversion is skipped (so nothing is ever mislabeled).
 */
const ADS_LABELS: Record<'lead_form' | 'phone_call' | 'text_message', string> = {
  lead_form: 'TihGCPrb_9sZEJbr5Zg-', // existing "Submit lead form" action
  phone_call: '', // intentionally empty: phone calls are tracked via Google's "calls from website" action ("Booking Page Phone Calls") using phone_conversion_number in index.html. A click-based label here would double-count.
  text_message: 'qcEACPCj9MMcEJbr5Zg-', // "Text Message Click" website conversion action (created 2026-06-22)
};

/** Default conversion values (USD). */
const VALUES = {
  lead_form: 200,
  phone_call: 275,
  text_message: 275,
};

/** Prevent the same action from double-firing (e.g. delegated listener + onClick). */
const lastFired: Record<string, number> = {};
function shouldFire(key: string, windowMs = 1500): boolean {
  const now = Date.now();
  if (lastFired[key] && now - lastFired[key] < windowMs) return false;
  lastFired[key] = now;
  return true;
}

function ga4(event: string, params: Record<string, any> = {}): void {
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
}

function meta(event: string, params: Record<string, any> = {}): void {
  if (typeof window.fbq === 'function') window.fbq('track', event, params);
}

/** Fire a Google Ads conversion for the given action, if its label is configured. */
function adsConversion(
  key: keyof typeof ADS_LABELS,
  value: number,
  extra: Record<string, any> = {}
): void {
  const label = ADS_LABELS[key];
  if (typeof window.gtag === 'function' && label) {
    window.gtag('event', 'conversion', {
      send_to: `${ADS_ID}/${label}`,
      value,
      currency: 'USD',
      ...extra,
    });
  }
}

/* ------------------------------------------------------------------ */
/* Macro conversion: booking form submitted (fires on the Thank-You page) */
/* ------------------------------------------------------------------ */

export interface LeadData {
  email?: string;
  phone?: string;
  fullName?: string;
}

/**
 * Call this ONCE, on the Thank-You page, after a successful booking submission.
 * Fires the single source-of-truth lead conversion. If `lead` is provided, sets
 * Enhanced Conversions data (Google hashes it client-side automatically).
 */
export function trackLeadSubmit(lead?: LeadData): void {
  if (!shouldFire('lead_form')) return;

  // Enhanced Conversions: improves Google Ads match rate. gtag hashes this for us.
  if (lead && typeof window.gtag === 'function' && (lead.email || lead.phone)) {
    const names = (lead.fullName || '').trim().split(/\s+/);
    window.gtag('set', 'user_data', {
      email: lead.email || undefined,
      phone_number: lead.phone || undefined,
      address: names.length
        ? { first_name: names[0], last_name: names.slice(1).join(' ') || undefined }
        : undefined,
    });
  }

  // GA4 recommended event for a generated lead.
  ga4('generate_lead', { currency: 'USD', value: VALUES.lead_form, method: 'booking_form' });
  // Google Ads conversion.
  adsConversion('lead_form', VALUES.lead_form);
  // Meta Pixel.
  meta('Lead', { content_name: 'Booking Form', content_category: 'Booking', value: VALUES.lead_form, currency: 'USD' });
}

/* ------------------------------------------------------------------ */
/* Micro conversions: phone call click + text/SMS click                */
/* ------------------------------------------------------------------ */

export function trackPhoneClick(source = 'unknown'): void {
  if (!shouldFire('phone_call:' + source, 1200)) return;
  ga4('phone_call_click', { source, value: VALUES.phone_call, currency: 'USD' });
  ga4('contact', { method: 'phone', source }); // GA4 recommended "contact" event
  adsConversion('phone_call', VALUES.phone_call);
  meta('Lead', { content_name: 'Phone Call', content_category: 'Contact', value: VALUES.phone_call, currency: 'USD' });
}

export function trackTextClick(source = 'unknown'): void {
  if (!shouldFire('text_message:' + source, 1200)) return;
  ga4('text_message_click', { source, value: VALUES.text_message, currency: 'USD' });
  ga4('contact', { method: 'sms', source });
  adsConversion('text_message', VALUES.text_message);
  meta('Lead', { content_name: 'Text Message', content_category: 'Contact', value: VALUES.text_message, currency: 'USD' });
}

/**
 * "Book Online" intent click (navigates to the booking page). A soft/secondary
 * signal, NOT the lead conversion — the real lead fires on the Thank-You page.
 */
export function trackBookingClick(source = 'unknown'): void {
  if (!shouldFire('book_click:' + source, 1200)) return;
  ga4('book_click', { source });
}

/* ------------------------------------------------------------------ */
/* Ad click-id capture (gclid/gbraid/wbraid) for Offline Conversions   */
/* ------------------------------------------------------------------ */

const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid'];
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

/**
 * Capture Google/Meta ad click IDs from the URL and persist them for 90 days.
 * Lets booked jobs be tied back to the original ad click (Offline Conversion
 * Import). Call once on first page load.
 */
export function captureClickIds(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of CLICK_ID_KEYS) {
      const val = params.get(key);
      if (val) setCookie('mad_' + key, val, 90);
    }
    // First-touch attribution: UTMs, entry landing page, and referrer.
    for (const key of UTM_KEYS) {
      const val = params.get(key);
      if (val && !getCookie('mad_' + key)) setCookie('mad_' + key, val, 90);
    }
    if (!getCookie('mad_landing_page')) {
      setCookie('mad_landing_page', window.location.pathname + window.location.search, 90);
    }
    if (!getCookie('mad_referrer') && document.referrer) {
      setCookie('mad_referrer', document.referrer, 90);
    }
  } catch {
    /* ignore */
  }
}

/** Returns any stored ad click IDs (e.g. { gclid: '...' }) for form payloads. */
export function getClickIds(): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof document === 'undefined') return out;
  for (const key of CLICK_ID_KEYS) {
    const v = getCookie('mad_' + key);
    if (v) out[key] = v;
  }
  return out;
}

/**
 * Returns lead-source info for the form payload so n8n / your notifications
 * know exactly where a lead came from: the page they submitted on, the page
 * they first landed on, the referrer, and any UTM parameters.
 */
export function getLeadSource(): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof window === 'undefined') return out;
  out.submit_page = window.location.pathname + window.location.search;
  const lp = getCookie('mad_landing_page');
  if (lp) out.landing_page = lp;
  const ref = getCookie('mad_referrer');
  if (ref) out.referrer = ref;
  for (const key of UTM_KEYS) {
    const v = getCookie('mad_' + key);
    if (v) out[key] = v;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Auto-tracking for every tel:/sms: link on the site                  */
/* ------------------------------------------------------------------ */

/**
 * Installs ONE delegated click listener that catches every <a href="tel:">
 * and <a href="sms:"> click site-wide, so any call/text link is tracked even
 * if its component doesn't wire up an onClick. Idempotent. Dedupe in the
 * track* helpers prevents double-counting with explicit handlers.
 */
export function installContactLinkTracking(): void {
  if (typeof document === 'undefined' || window.__contactLinkTrackingInstalled) return;
  window.__contactLinkTrackingInstalled = true;

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackPhoneClick('link');
      else if (href.startsWith('sms:')) trackTextClick('link');
    },
    { capture: true }
  );
}

/* ------------------------------------------------------------------ */
/* Scroll depth + section view tracking ("what part of pages people view") */
/* ------------------------------------------------------------------ */

const SCROLL_MILESTONES = [25, 50, 75, 100];

/**
 * Tracks how far down a page users scroll (25/50/75/100%) and which on-page
 * sections (`<section id="...">`) actually enter the viewport. Returns a
 * cleanup function. Call once per page/route.
 */
export function trackPageEngagement(pagePath: string): () => void {
  if (typeof window === 'undefined') return () => {};

  // --- Scroll depth ---
  const firedMilestones = new Set<number>();
  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.min(100, ((window.scrollY || doc.scrollTop) / scrollable) * 100);
    for (const m of SCROLL_MILESTONES) {
      if (percent >= m && !firedMilestones.has(m)) {
        firedMilestones.add(m);
        ga4('scroll_depth', { percent_scrolled: m, page_path: pagePath });
      }
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Section visibility + dwell time ---
  // section_view fires once when a section first becomes >=50% visible.
  // section_time fires with the accumulated visible seconds when the section
  // leaves the viewport, the tab is hidden, or the user leaves the page —
  // so GA4 can answer "how long do people actually look at each section".
  let observer: IntersectionObserver | null = null;
  const seenSections = new Set<string>();
  const currentlyVisible = new Set<string>();
  const visibleSince = new Map<string, number>();
  const dwellMs = new Map<string, number>();

  const closeInterval = (id: string) => {
    const since = visibleSince.get(id);
    if (since !== undefined) {
      dwellMs.set(id, (dwellMs.get(id) || 0) + (Date.now() - since));
      visibleSince.delete(id);
    }
  };

  /** Report accumulated dwell per section (>=1s) and reset the counters. */
  const flushSectionTime = () => {
    for (const id of currentlyVisible) closeInterval(id);
    for (const [id, ms] of dwellMs) {
      const seconds = Math.round(ms / 1000);
      if (seconds >= 1) {
        ga4('section_time', {
          section_id: id,
          seconds,
          page_path: pagePath,
          transport_type: 'beacon',
        });
      }
    }
    dwellMs.clear();
  };

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const id = el.id || el.dataset.gaSection || '';
          if (!id) continue;
          if (entry.isIntersecting) {
            currentlyVisible.add(id);
            if (document.visibilityState === 'visible') visibleSince.set(id, Date.now());
            if (!seenSections.has(id)) {
              seenSections.add(id);
              ga4('section_view', { section_id: id, page_path: pagePath });
            }
          } else {
            currentlyVisible.delete(id);
            closeInterval(id);
          }
        }
      },
      { threshold: 0.5 }
    );
    // Observe after layout settles (SPA content renders async).
    setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('section[id], [data-ga-section]')
        .forEach((el) => observer?.observe(el));
    }, 600);
  }

  // Pause dwell timers while the tab is hidden; flush on real page exit.
  const onVisibility = () => {
    if (document.visibilityState === 'hidden') {
      flushSectionTime();
    } else {
      const now = Date.now();
      for (const id of currentlyVisible) visibleSince.set(id, now);
    }
  };
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', flushSectionTime);

  return () => {
    window.removeEventListener('scroll', onScroll);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', flushSectionTime);
    flushSectionTime(); // report dwell for the page being navigated away from
    observer?.disconnect();
  };
}

/* ------------------------------------------------------------------ */
/* Universal CTA / button click tracking                               */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    __ctaTrackingInstalled?: boolean;
  }
}

/**
 * One delegated listener that fires `cta_click` for EVERY <a> and <button>
 * click site-wide, with the button text, type, destination, and the section
 * it lives in. Answers "which exact buttons get clicked, where". Specific
 * events (phone_call_click / text_message_click) still fire separately.
 *
 * Add data-ga-label="..." to any element to override the reported text.
 */
export function installCtaClickTracking(): void {
  if (typeof document === 'undefined' || window.__ctaTrackingInstalled) return;
  window.__ctaTrackingInstalled = true;

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.('a[href], button') as HTMLElement | null;
      if (!el) return;

      const isLink = el.tagName === 'A';
      const href = isLink ? el.getAttribute('href') || '' : '';
      let ctaType = 'button';
      if (href.startsWith('tel:')) ctaType = 'phone';
      else if (href.startsWith('sms:')) ctaType = 'sms';
      else if (href.startsWith('mailto:')) ctaType = 'email';
      else if (isLink) {
        ctaType =
          href.startsWith('http') && !href.includes(window.location.hostname)
            ? 'outbound_link'
            : 'link';
      }

      const text = (el.getAttribute('data-ga-label') || el.textContent || '')
        .trim()
        .replace(/\s+/g, ' ')
        .slice(0, 60);

      const sectionEl = el.closest('section[id], [data-ga-section]') as HTMLElement | null;
      const sectionId = sectionEl?.id || sectionEl?.dataset.gaSection || '';

      // Skip empty icon-only clicks with no label, and rapid double-fires.
      if (!text && !href) return;
      if (!shouldFire('cta:' + (text || href), 800)) return;

      ga4('cta_click', {
        cta_text: text || '(icon)',
        cta_type: ctaType,
        link_url: href ? href.slice(0, 100) : undefined,
        section_id: sectionId || undefined,
        page_path: window.location.pathname,
      });
    },
    { capture: true }
  );
}

/* ------------------------------------------------------------------ */
/* Booking funnel: step views, field interactions, submits, drop-off   */
/* ------------------------------------------------------------------ */

interface FunnelState {
  formId: string;
  step: number;
  stepName: string;
  lastField: string;
  started: boolean;
  submitted: boolean;
}

const funnel: FunnelState = {
  formId: '',
  step: 0,
  stepName: '',
  lastField: '',
  started: false,
  submitted: false,
};

const seenFunnelSteps = new Set<string>();
const seenFormFields = new Set<string>();
let abandonInstalled = false;
let abandonFired = false;

/**
 * Fire when a funnel step becomes visible/active. Deduped per step, so use
 * step_number in a GA4 Funnel Exploration to see exactly where people drop.
 */
export function trackFunnelStep(formId: string, step: number, stepName: string): void {
  funnel.formId = formId;
  funnel.step = step;
  funnel.stepName = stepName;
  funnel.started = true;
  const key = `${formId}:${step}`;
  if (seenFunnelSteps.has(key)) return;
  seenFunnelSteps.add(key);
  const params = {
    form_id: formId,
    step_number: step,
    step_name: stepName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  };
  ga4('booking_step_view', params);
  // Also fire a per-step event name (booking_step_1..5): GA4 funnel reports
  // work on event names immediately, without waiting for custom dimensions.
  ga4(`booking_step_${step}`, params);
}

/**
 * Fire on the first interaction with each form field (call from onChange).
 * Shows which exact field people stall on inside the contact step.
 */
export function trackFieldInteraction(formId: string, fieldName: string): void {
  funnel.lastField = fieldName;
  const key = `${formId}:${fieldName}`;
  if (seenFormFields.has(key)) return;
  seenFormFields.add(key);
  ga4('form_field_start', {
    form_id: formId,
    field_name: fieldName,
    step_number: funnel.step,
  });
}

export function trackFormSubmitAttempt(formId: string): void {
  ga4('booking_submit_attempt', { form_id: formId });
}

export function trackFormSubmitResult(formId: string, ok: boolean, errorMessage?: string): void {
  if (ok) {
    funnel.submitted = true; // suppresses the abandon event on redirect
    ga4('booking_submit_success', { form_id: formId });
  } else {
    ga4('booking_submit_error', {
      form_id: formId,
      error_message: (errorMessage || 'unknown').slice(0, 100),
    });
  }
}

/**
 * Fire `booking_abandon` with the furthest step + last touched field when a
 * user who started the funnel leaves without submitting. If they come back
 * to the tab, `booking_resume` fires so abandons can be netted out.
 */
export function installFunnelAbandonTracking(): void {
  if (typeof window === 'undefined' || abandonInstalled) return;
  abandonInstalled = true;

  const flush = (reason: string) => {
    if (abandonFired || !funnel.started || funnel.submitted) return;
    abandonFired = true;
    ga4('booking_abandon', {
      form_id: funnel.formId,
      last_step_number: funnel.step,
      last_step_name: funnel.stepName,
      last_field: funnel.lastField || undefined,
      abandon_reason: reason,
      page_path: window.location.pathname,
      transport_type: 'beacon',
    });
  };

  window.addEventListener('pagehide', () => flush('page_exit'));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flush('tab_hidden');
    } else if (abandonFired && !funnel.submitted && funnel.started) {
      abandonFired = false; // re-arm; they came back
      ga4('booking_resume', {
        form_id: funnel.formId,
        step_number: funnel.step,
        step_name: funnel.stepName,
      });
    }
  });
}

/** Call from a funnel component's unmount to catch SPA route-away drop-offs. */
export function flushFunnelAbandon(reason: string): void {
  if (abandonFired || !funnel.started || funnel.submitted) return;
  abandonFired = true;
  ga4('booking_abandon', {
    form_id: funnel.formId,
    last_step_number: funnel.step,
    last_step_name: funnel.stepName,
    last_field: funnel.lastField || undefined,
    abandon_reason: reason,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

/** Service-package card selection (the cards are divs, so cta_click misses them). */
export function trackServiceSelect(formId: string, serviceName: string): void {
  if (!shouldFire('service_select:' + serviceName, 800)) return;
  ga4('select_service', { form_id: formId, service_name: serviceName });
}

/**
 * Fired when the combined vehicle/condition step is submitted. Carries the
 * 1-10 dirtiness slider score so GA4 can answer "how dirty are the cars of
 * people who convert vs. abandon".
 */
export function trackVehicleDetails(formId: string, dirtinessScore: number, vehicle: string): void {
  if (!shouldFire('vehicle_details:' + formId, 1200)) return;
  ga4('booking_vehicle_details', {
    form_id: formId,
    dirtiness_score: dirtinessScore,
    vehicle: vehicle.slice(0, 60),
  });
}

/** Fired once when the SMS-consent "Text message preferences" expander is opened. */
export function trackSmsPrefsOpen(formId: string): void {
  if (!shouldFire('sms_prefs_open:' + formId, 60000)) return;
  ga4('sms_prefs_open', { form_id: formId });
}
