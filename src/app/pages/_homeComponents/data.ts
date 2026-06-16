import {
  Zap,
  Building2,
  Settings,
  Wrench,
  Package,
  Radio,
  Award,
  Users,
  MapPin,
  Shield,
} from "lucide-react";
import { optimizeCloudinaryImage } from "../../../lib/cloudinary";

export const HERO_BG =
  optimizeCloudinaryImage(
    "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778807759/Kanato_Website/Home%20Page/Ultra-realistic_Nigerian_engineering_and_construction_202605150157_nvxcku.jpg",
  );

export const ABOUT_IMG = "/about-engineering-team.jpeg";

export const stats = [
  { icon: Award, value: "33+", label: "Years of Experience" },
  { icon: Users, value: "100+", label: "Projects Delivered" },
  { icon: MapPin, value: "Nigeria", label: "Nationwide Coverage" },
  { icon: Shield, value: "RC 666713", label: "Fully Registered" },
];

export const services = [
  {
    icon: Zap,
    title: "Electrical Installation",
    description:
      "Electrical wiring, panel installation, power distribution, lighting systems, and equipment setup.",
    path: "/services",
  },
  {
    icon: Settings,
    title: "Mechanical Installation",
    description:
      "Mechanical systems setup, equipment installation, piping support, and building mechanical works.",
    path: "/services",
  },
  {
    icon: Building2,
    title: "Civil Engineering Works",
    description:
      "Structural works, site preparation, building support, and construction-related engineering services.",
    path: "/services",
  },
  {
    icon: Wrench,
    title: "Maintenance & Servicing",
    description:
      "Routine maintenance, inspection, and servicing for all engineering systems and infrastructure.",
    path: "/services",
  },
  {
    icon: Package,
    title: "Supply of Materials",
    description:
      "Sales and supply of quality electrical, mechanical, and civil engineering materials.",
    path: "/services",
  },
  {
    icon: Radio,
    title: "Telecom Infrastructure",
    description:
      "Installation, build, and support for telecom masts, towers, and power-to-site projects.",
    path: "/services",
  },
];

export const whyPoints = [
  "Over 33 years of continuous industry experience since 1991",
  "Skilled and professional engineering workforce",
  "Strong commitment to quality, safety, and standards",
  "Reliable and timely project delivery",
  "Corporate, industrial, and residential project expertise",
  "Trusted by organizations across multiple sectors",
  "Nationwide coverage across Nigeria",
  "Professionalism and integrity at every stage",
];

export const featuredProjects = [
  {
    title: "Union Bank Head Office Renovation",
    client: "Union Bank Plc (via Tuag Nig. Ltd.)",
    category: "Civil & Electrical Works",
    location: "40 Marina, Lagos",
    year: "2001",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778808057/Kanato_Website/Home%20Page/Ultra-realistic_corporate_building_renovation_project_202605150220_pp6mad.jpg",
  },
  {
    title: "Nestle Foods Office Complex",
    client: "Nestle Foods Nigeria, Ilupeju",
    category: "Extension & Renovation",
    location: "Ilupeju, Lagos",
    year: "2005",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778808158/Kanato_Website/Home%20Page/Ultra-realistic_industrial_renovation_and_facility_202605150222_gllypm.jpg",
  },
  {
    title: "MTN/Etisalat Telecom Site Build",
    client: "Servtek / ATB Technology",
    category: "Telecom Infrastructure",
    location: "Lagos State",
    year: "2010",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778808373/Kanato_Website/Home%20Page/Ultra-realistic_Nigerian_telecom_infrastructure_construction_202605150225_jxwfoq.jpg",
  },
  {
    title: "Rural Electrification – Ijedodo",
    client: "A.E.E. Nig. Ltd.",
    category: "Electrical Works",
    location: "Ijedodo, Lagos",
    year: "2003",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057503/Kanato_Website/Home%20Page/Rural_Electrification___Ijedodo_Prompt__202605172338_vdpoqq.jpg",
  },
  {
    title: "Street Light Electrification",
    client: "Siktob Nig. Ltd./LASG",
    category: "Civil & Electrical Works",
    location: "Jimoh Ajao, Lagos",
    year: "2013",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058508/Kanato_Website/Home%20Page/Photorealistic__recommended___Photorealistic_engineering_photo_202605172352_zhouhr.jpg",
  },
  {
    title: "8-Wing Duplex Complex",
    client: "Pentorise Ltd.",
    category: "Civil Engineering",
    location: "Arepo, Ogun State",
    year: "2011",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056817/Kanato_Website/Home%20Page/8_Wing_Duplex___Arepo_Prompt__202605172326_zykmlk.jpg",
  },
];

export const industries = [
  {
    icon: Building2,
    label: "Residential & Housing",
    desc: "Duplexes, flats, and estate developments",
  },
  {
    icon: Settings,
    label: "Commercial Buildings",
    desc: "Office complexes and business facilities",
  },
  {
    icon: Radio,
    label: "Telecommunications",
    desc: "Mast installation and power-to-site",
  },
  {
    icon: Zap,
    label: "Financial Institutions",
    desc: "Banks and corporate office upgrades",
  },
  {
    icon: Shield,
    label: "Government Projects",
    desc: "Public infrastructure and electrification",
  },
  {
    icon: Package,
    label: "Industrial Facilities",
    desc: "Manufacturing and industrial complexes",
  },
];

export const clients = [
  "Union Bank Plc",
  "Nestle Foods Nigeria",
  "MTN Nigeria",
  "Etisalat Nigeria",
  "Ecobank Nigeria",
  "Ikeja Electric",
  "Eko Disco",
  "Ikeja Local Govt.",
  "Mass Telecom Innovation",
  "Trusnet Limited",
  "Clockwise Dev. Ltd.",
  "Pentorise Ltd.",
  "ATB Technology",
  "Cennic Ltd.",
  "Siktob Nig. Ltd.",
  "Tuag Nig. Ltd.",
  "Primal Concept Ltd.",
  "Four Star Nigeria Ltd",
];
