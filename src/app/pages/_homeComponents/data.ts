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

export const HERO_BG =
  "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const ABOUT_IMG =
  "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

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
      "https://images.unsplash.com/photo-1770927423634-14778e8a0fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc1MTEwNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Nestle Foods Office Complex",
    client: "Nestle Foods Nigeria, Ilupeju",
    category: "Extension & Renovation",
    location: "Ilupeju, Lagos",
    year: "2005",
    image:
      "https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzc1MjExMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "MTN/Etisalat Telecom Site Build",
    client: "Servtek / ATB Technology",
    category: "Telecom Infrastructure",
    location: "Lagos State",
    year: "2010",
    image:
      "https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwdG93ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMG1hc3R8ZW58MXx8fHwxNzc1MjExMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Rural Electrification – Ijedodo",
    client: "A.E.E. Nig. Ltd.",
    category: "Electrical Works",
    location: "Ijedodo, Lagos",
    year: "2003",
    image:
      "https://images.unsplash.com/photo-1758866572399-7ff95ba69562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN1YnN0YXRpb24lMjB0cmFuc2Zvcm1lciUyMGVsZWN0cmljaXR5fGVufDF8fHx8MTc3NTIxMTM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Street Light Electrification",
    client: "Siktob Nig. Ltd./LASG",
    category: "Civil & Electrical Works",
    location: "Jimoh Ajao, Lagos",
    year: "2013",
    image:
      "https://images.unsplash.com/photo-1654762550505-7c58277e0fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwaW5mcmFzdHJ1Y3R1cmUlMjBwcm9qZWN0JTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "8-Wing Duplex Complex",
    client: "Pentorise Ltd.",
    category: "Civil Engineering",
    location: "Arepo, Ogun State",
    year: "2011",
    image:
      "https://images.unsplash.com/photo-1760119097393-e022c73027d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcmVzaWRlbnRpYWwlMjBob3VzaW5nJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzc1MjExMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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


