import { COMPANY, SITE_URL } from "../../constants/company";

const SITE_LOGO = `${SITE_URL}/kanato-logo.png`;

export const LOCAL_BUSINESS_SCHEMA = {
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
  priceRange: "NGN",
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
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Electrical Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mechanical Installation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Civil Engineering Works" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Maintenance & Servicing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Telecom Infrastructure Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Power & Energy Solutions" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Supply of Engineering Materials",
        },
      },
    ],
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
};
