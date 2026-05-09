import { useEffect } from "react";
import { useLocation } from "react-router";

// ============================================================
// Google Analytics 4 (GA4) — Kanato Engineering Resources
// ------------------------------------------------------------
// HOW TO SET UP:
// 1. Go to https://analytics.google.com and create a GA4 property.
// 2. Under Admin > Data Streams, add a Web stream for your domain.
// 3. Copy the Measurement ID (format: G-XXXXXXXXXX).
// 4. Replace "G-XXXXXXXXXX" below with your real Measurement ID.
// ============================================================

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

// Extend Window type to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/** Injects the GA4 <script> tag once into <head> */
function loadGAScript(measurementId: string) {
  if (document.getElementById("ga4-script")) return;

  // Initialise dataLayer before the script loads
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

/**
 * Hook — call once in Root.tsx.
 * • Loads the GA4 script on mount.
 * • Sends a page_view event on every route change.
 */
export function useAnalytics() {
  const { pathname } = useLocation();

  // Load script once
  useEffect(() => {
    if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return; // skip placeholder
    loadGAScript(GA_MEASUREMENT_ID);
  }, []);

  // Track page views on navigation
  useEffect(() => {
    if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);
}

/**
 * Optional helper — track custom GA4 events anywhere in the app.
 *
 * @example
 * trackEvent("quote_form_submit", "engagement", "Request a Quote");
 */
export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number,
) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}


