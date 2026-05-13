import { Helmet } from "react-helmet-async";
import { COMPANY, SITE_URL } from "../../constants/company";

const SITE_LOGO = `${SITE_URL}/kanato-logo.png`;

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_LOGO,
  description: COMPANY.description,
  foundingDate: COMPANY.foundingYear,
  identifier: COMPANY.rc,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.addresses.headOffice.street,
    addressLocality: COMPANY.addresses.headOffice.city,
    addressRegion: COMPANY.addresses.headOffice.state,
    addressCountry: "NG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone.intl.primary,
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phone.intl.secondary,
      contactType: "sales",
      areaServed: "NG",
    },
  ],
  email: COMPANY.email,
  sameAs: [],
  priceRange: "₦₦",
  currenciesAccepted: "NGN",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: COMPANY.hours.weekdays.opens,
      closes: COMPANY.hours.weekdays.closes,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: COMPANY.hours.saturday.opens,
      closes: COMPANY.hours.saturday.closes,
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
  areaServed: { "@type": "Country", name: "Nigeria" },
};

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object;
  ogImage?: string;
}

export function SEO({ title, description, path = "", schema, ogImage }: SEOProps) {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const image = ogImage ?? SITE_LOGO;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content={`${COMPANY.geo.lat};${COMPANY.geo.lng}`} />
      <meta name="ICBM" content={`${COMPANY.geo.lat}, ${COMPANY.geo.lng}`} />

      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
      </script>

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
