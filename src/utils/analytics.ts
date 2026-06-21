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
  phone_call: '', // TODO: create "Phone Call Click" action, paste label here
  text_message: '', // TODO: create "Text/SMS Click" action, paste label here
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

  // --- Section visibility ---
  let observer: IntersectionObserver | null = null;
  const seenSections = new Set<string>();
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const id = el.id || el.dataset.gaSection || '';
          if (id && !seenSections.has(id)) {
            seenSections.add(id);
            ga4('section_view', { section_id: id, page_path: pagePath });
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

  return () => {
    window.removeEventListener('scroll', onScroll);
    observer?.disconnect();
  };
}
