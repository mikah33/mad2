import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * GHL / LeadConnector chat widget loader.
 *
 * A2P 10DLC compliance requires that the SMS chat widget and any phone/SMS-collecting
 * form NEVER appear on the same page ("Multiple Opt-ins" rejection). Our booking funnel
 * pages already collect a phone number (with an SMS consent checkbox), so we load the
 * chat widget ONLY on form-free pages. The GHL compliance scanner loads each URL with a
 * headless browser and executes JS, so runtime injection is detected the same as a static
 * <script> tag — while letting us keep the widget off our funnel pages.
 */
const WIDGET_ID = '6a409c08af23a3deea5ba64d';
const SCRIPT_ID = 'lc-chat-widget-loader';
const HIDE_STYLE_ID = 'lc-chat-widget-hide';

// Pages that contain a phone/SMS-collecting form — the widget must NOT load here.
const EXACT_FORM_PATHS = new Set([
  '/book',
  '/review-us',
  '/lp',
  '/lp-specials',
  '/auto-detailing-services-columbia-sc',
]);

function pageHasForm(pathname: string): boolean {
  if (EXACT_FORM_PATHS.has(pathname)) return true;
  if (pathname.startsWith('/book')) return true; // /book, /book/thank-you
  if (pathname.startsWith('/neighborhoods/')) return true; // NeighborhoodPage
  const seg = pathname.split('/').filter(Boolean);
  if (seg[0] === 'locations' && seg.length >= 3) return true; // /locations/:city/:neighborhood
  return false;
}

const GHLChatWidget = () => {
  const { pathname } = useLocation();
  const formPage = pageHasForm(pathname);

  useEffect(() => {
    // Inject the widget loader once, only when first landing on a form-free page.
    if (!formPage && !document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://widgets.leadconnectorhq.com/loader.js';
      s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      s.setAttribute('data-widget-id', WIDGET_ID);
      s.setAttribute('data-source', 'WEB_USER');
      document.body.appendChild(s);
    }

    // For client-side (SPA) navigation: hide the widget on form pages so it never
    // co-exists with a phone form, even after the script has already loaded.
    let style = document.getElementById(HIDE_STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement('style');
      style.id = HIDE_STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = formPage
      ? 'chat-widget,[id^="lc_text-widget"],iframe[src*="leadconnectorhq"]{display:none !important;}'
      : '';
  }, [formPage]);

  return null;
};

export default GHLChatWidget;
