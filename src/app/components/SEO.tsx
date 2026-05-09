import { Helmet } from "react-helmet-async";

// ─── Site-wide defaults ────────────────────────────────────────────────────────
const SITE_NAME = "Kanato Engineering Resources Nig. Ltd.";
const SITE_URL  = "https://www.kanato-engineering.com"; // ← replace with your real domain
const SITE_LOGO = `${SITE_URL}/kanato-logo.png`;

// ─── Local Business JSON-LD (appears on every page) ───────────────────────────
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: SITE_NAME,
  alternateName: "Kanato Engineering",
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_LOGO,
  description:
    "Kanato Engineering Resources Nigeria Limited is a wholly indigenous engineering company incorporated in 1991, specialising in Electrical, Mechanical, and Civil engineering services across Nigeria.",
  foundingDate: "1991",
  identifier: "RC 666713",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10, Oyewole Close, Baruwa B/Stop",
    addressLocality: "Ipaja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+234-809-669-1601",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+234-803-320-1366",
      contactType: "sales",
      areaServed: "NG",
    },
  ],
  email: "kanato4reel@yahoo.com",
  sameAs: [],
  priceRange: "₦₦",
  currenciesAccepted: "NGN",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mechanical Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Engineering Works" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & Servicing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Telecom Infrastructure Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power & Energy Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply of Engineering Materials" } },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
};

// ─── Props ─────────────────────────────────────────────────────────────────────
interface SEOProps {
  /** Browser tab title (will be appended with " | Kanato Engineering") */
  title: string;
  /** Short description — ideally 140–160 characters */
  description: string;
  /** Canonical URL path, e.g. "/about" */
  path?: string;
  /** Extra JSON-LD schema for this specific page (optional) */
  schema?: object;
  /** Open Graph image URL (defaults to site OG image) */
  ogImage?: string;
}

export function SEO({ title, description, path = "", schema, ogImage }: SEOProps) {
  const fullTitle   = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const image       = ogImage ?? SITE_LOGO;

  return (
    <Helmet>
      {/* ── Primary ──────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph (Facebook / LinkedIn / WhatsApp preview) ── */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_NG" />

      {/* ── Twitter Card ─────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── Geo / Local SEO ──────────────────────────────────── */}
      <meta name="geo.region"   content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content="6.6012;3.2890" />
      <meta name="ICBM"         content="6.6012, 3.2890" />

      {/* ── Local Business JSON-LD (on every page) ───────────── */}
      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
      </script>

      {/* ── Page-specific JSON-LD (optional) ─────────────────── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}



