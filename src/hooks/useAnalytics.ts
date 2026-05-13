import { useEffect } from "react";
import { useLocation } from "react-router";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function loadGAScript(measurementId: string) {
  if (document.getElementById("ga4-script")) return;

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
 * Loads the GA4 script on mount and sends a page_view on every route change.
 * Set VITE_GA_MEASUREMENT_ID in your .env file to enable tracking.
 */
export function useAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      if (import.meta.env.DEV) {
        console.warn(
          "[Analytics] VITE_GA_MEASUREMENT_ID is not set. Tracking is disabled.",
        );
      }
      return;
    }
    loadGAScript(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);
}

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
