import { Helmet } from "react-helmet-async";
import { COMPANY, SITE_URL } from "../../constants/company";
import { LOCAL_BUSINESS_SCHEMA } from "../seo/schema";

const SITE_LOGO = `${SITE_URL}/kanato-logo.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object;
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  path = "",
  schema,
  ogImage,
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const image = ogImage ?? SITE_LOGO;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
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
      <meta name="twitter:url" content={canonicalUrl} />

      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content={`${COMPANY.geo.lat};${COMPANY.geo.lng}`} />
      <meta name="ICBM" content={`${COMPANY.geo.lat}, ${COMPANY.geo.lng}`} />

      <script type="application/ld+json">
        {JSON.stringify(LOCAL_BUSINESS_SCHEMA)}
      </script>

      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
}
