export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  noindex?: boolean;
}

export const PAGE_METADATA = {
  home: {
    title: "Reliable Electrical, Mechanical & Civil Engineering Services",
    description:
      "Kanato Engineering Resources Nig. Ltd. - a wholly indigenous Nigerian engineering company since 1991, delivering electrical, mechanical, and civil engineering solutions across Nigeria. RC 666713.",
    path: "/",
    changefreq: "monthly",
    priority: "1.0",
  },
  about: {
    title: "About Us - 33+ Years of Indigenous Engineering Excellence",
    description:
      "Learn about Kanato Engineering Resources Nig. Ltd. - incorporated in 1991, RC 666713. A wholly indigenous Nigerian engineering company built on integrity, professionalism, and 33+ years of experience.",
    path: "/about",
    changefreq: "yearly",
    priority: "0.8",
  },
  services: {
    title: "Engineering Services - Electrical, Mechanical, Civil & More",
    description:
      "Kanato Engineering offers 7 integrated services: Electrical Installation, Mechanical Installation, Civil Engineering Works, Maintenance & Servicing, Material Supply, Telecom Infrastructure, and Power & Energy Solutions across Nigeria.",
    path: "/services",
    changefreq: "monthly",
    priority: "0.9",
  },
  projects: {
    title: "Projects - Engineering Work Delivered Across Nigeria Since 1991",
    description:
      "Browse 27+ completed engineering projects by Kanato Engineering - civil construction, electrical installations, telecom infrastructure, power solutions and more for top Nigerian corporations and government bodies.",
    path: "/projects",
    changefreq: "monthly",
    priority: "0.8",
  },
  clients: {
    title: "Our Clients - Trusted by Corporations, Banks & Government Bodies",
    description:
      "Kanato Engineering has served 30+ clients including Union Bank, Nestle Foods Nigeria, MTN, Etisalat, Ecobank, Lagos State Government, and many more across multiple sectors since 1991.",
    path: "/clients",
    changefreq: "yearly",
    priority: "0.7",
  },
  contact: {
    title: "Contact Us - Get in Touch with Kanato Engineering",
    description:
      "Contact Kanato Engineering Resources Nig. Ltd. - call 08096691601, email kanato4reel@yahoo.com, or visit our head office at 10, Oyewole Close, Baruwa B/Stop, Ipaja, Lagos. We respond within hours.",
    path: "/contact",
    changefreq: "yearly",
    priority: "0.8",
  },
  requestQuote: {
    title: "Request a Quote - Free Engineering Project Assessment",
    description:
      "Request a free, no-obligation engineering quote from Kanato Engineering. We cover Electrical, Mechanical, Civil, Telecom, Power & Energy projects. Get a detailed response within 24 hours.",
    path: "/request-quote",
    changefreq: "yearly",
    priority: "0.9",
  },
  designSystem: {
    title: "Design System - Complete Style Guide",
    description:
      "Kanato Engineering Style Guide. Complete color palettes, typography, components, and design specifications used across the website.",
    path: "/design-system",
    noindex: true,
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist on the Kanato Engineering website.",
    path: "/404",
    noindex: true,
  },
} satisfies Record<string, PageMetadata>;

export const INDEXABLE_PAGES = Object.values(PAGE_METADATA).filter(
  (page) => !page.noindex,
);
