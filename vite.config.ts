import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { COMPANY, SITE_URL } from "./src/constants/company";
import { INDEXABLE_PAGES, PAGE_METADATA, type PageMetadata } from "./src/app/seo/pageMetadata";

const SITE_LOGO = `${SITE_URL}/kanato-logo.png`;
const STATIC_PAGES = Object.values(PAGE_METADATA).filter((page) => page.path !== "/404");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildHeadMarkup(page: PageMetadata) {
  const fullTitle = `${page.title} | ${COMPANY.name}`;
  const canonicalUrl = `${SITE_URL}${page.path}`;
  const robotsContent = page.noindex ? "noindex, nofollow" : "index, follow";
  const localBusinessSchema = JSON.stringify({
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
      ...COMPANY.phone.intl.numbers.map((telephone, index) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: index === 0 ? "customer service" : "sales",
        areaServed: "NG",
        ...(index === 0 ? { availableLanguage: "English" } : {}),
      })),
    ],
    email: COMPANY.emails,
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
          itemOffered: { "@type": "Service", name: "Telecom Infrastructure Support" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Power & Energy Solutions" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Supply of Engineering Materials" },
        },
      ],
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
  }).replaceAll("<", "\\u003c");

  return [
    `<title>${escapeHtml(fullTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="${robotsContent}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${SITE_LOGO}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:site_name" content="${escapeHtml(COMPANY.name)}" />`,
    `<meta property="og:locale" content="en_NG" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${SITE_LOGO}" />`,
    `<meta name="twitter:url" content="${canonicalUrl}" />`,
    `<meta name="geo.region" content="NG-LA" />`,
    `<meta name="geo.placename" content="Lagos, Nigeria" />`,
    `<meta name="geo.position" content="${COMPANY.geo.lat};${COMPANY.geo.lng}" />`,
    `<meta name="ICBM" content="${COMPANY.geo.lat}, ${COMPANY.geo.lng}" />`,
    `<script type="application/ld+json">${localBusinessSchema}</script>`,
  ].join("\n      ");
}

function applyPageHead(html: string, page: PageMetadata) {
  const titlePattern = /<title>[\s\S]*?<\/title>/i;
  const descriptionPattern = /<meta\s+name="description"[\s\S]*?\/>/i;
  const robotsPattern = /<meta\s+name="robots"[\s\S]*?\/>/i;
  const canonicalPattern = /<link\s+rel="canonical"[\s\S]*?\/>/i;
  const openGraphPattern = /<meta\s+property="og:[^"]+"[\s\S]*?\/>\s*/gi;
  const twitterPattern = /<meta\s+name="twitter:[^"]+"[\s\S]*?\/>\s*/gi;
  const geoPattern = /<meta\s+name="(?:geo\.region|geo\.placename|geo\.position|ICBM)"[\s\S]*?\/>\s*/gi;
  const jsonLdPattern = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi;

  const cleanedHtml = html
    .replace(titlePattern, "")
    .replace(descriptionPattern, "")
    .replace(robotsPattern, "")
    .replace(canonicalPattern, "")
    .replace(openGraphPattern, "")
    .replace(twitterPattern, "")
    .replace(geoPattern, "")
    .replace(jsonLdPattern, "");

  return cleanedHtml.replace("</head>", `      ${buildHeadMarkup(page)}\n    </head>`);
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = INDEXABLE_PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq ?? "monthly"}</changefreq>
    <priority>${page.priority ?? "0.8"}</priority>
  </url>`,
  ).join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>
`;
}

function spaFallbackPlugin() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexFile = path.join(distDir, "index.html");
      const notFoundFile = path.join(distDir, "404.html");

      if (!fs.existsSync(indexFile)) {
        return;
      }

      const builtIndexHtml = fs.readFileSync(indexFile, "utf8");
      const homepageHtml = applyPageHead(builtIndexHtml, PAGE_METADATA.home);

      fs.writeFileSync(indexFile, homepageHtml);
      fs.writeFileSync(notFoundFile, applyPageHead(homepageHtml, PAGE_METADATA.notFound));

      for (const page of STATIC_PAGES.filter((entry) => entry.path !== "/")) {
        const routeDir = path.join(distDir, page.path.replace(/^\//, ""));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), applyPageHead(homepageHtml, page));
      }

      fs.writeFileSync(path.join(distDir, "sitemap.xml"), buildSitemap());
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("@emailjs")) {
            return "email";
          }

          if (id.includes("lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
