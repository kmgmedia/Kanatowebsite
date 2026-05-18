export const COMPANY_PROFILE = {
  title: "Kanato Engineering Resources Nig. Ltd.",
  registration: "RC 666713",
  established: "23rd July 1991",
  tagline:
    "Reliable Electrical, Mechanical & Civil Engineering Solutions Since 1991",
  logo: "./public/kanato-logo.png",
  heroImages: [
    "./public/images/street-light.jpg",
    "./public/images/telecom-mast.jpg",
    "./public/images/building-project.jpg",
    "./public/images/transformer-installation.jpg",
  ],
  about: {
    heading: "About Kanato",
    text:
      "Kanato Engineering Resources Nigeria Limited is a wholly indigenous engineering company incorporated on the 23rd of July 1991 with registration number RC 666713. For over three decades, we have delivered dependable Electrical, Mechanical, Civil, Power, and Telecom infrastructure solutions to corporate, government, and private clients across Nigeria.",
    highlights: [
      "33+ Years of Experience",
      "100+ Projects Delivered",
      "Nationwide Coverage",
      "Fully Registered RC 666713",
    ],
    image: "./public/about-engineering-team.jpeg",
  },
  visionMission: {
    vision:
      "To provide excellent Electrical, Mechanical, and Civil installation and servicing through a professional team - becoming a trusted engineering partner recognized for delivering efficient and reliable solutions across Nigeria and West Africa.",
    mission:
      "To uphold integrity and professionalism in the daily discharge of our services - bringing the dreams of our clients to reality through quality workmanship, innovation, and unwavering commitment to excellence.",
    values: [
      "Integrity",
      "Professionalism",
      "Quality",
      "Safety",
      "Reliability",
      "Client Commitment",
    ],
    icons: [
      "integrity.png",
      "professionalism.png",
      "quality.png",
      "safety.png",
      "reliability.png",
      "commitment.png",
    ],
  },
  process: [
    { step: "Consultation", icon: "handshake.png" },
    { step: "Assessment", icon: "blueprint.png" },
    { step: "Execution", icon: "tools.png" },
    { step: "Delivery", icon: "checkmark.png" },
  ],
  services: [
    {
      title: "Civil Engineering Works",
      image: "./public/images/civil-project.jpg",
      points: [
        "Structural and building support works",
        "Site preparation and earthworks",
        "Construction and reinforcement works",
        "Foundation and concrete works",
        "Fencing and perimeter security",
        "Renovation and finishing works",
      ],
    },
    {
      title: "Electrical Installation",
      image: "./public/images/electrical-installation.jpg",
      points: [
        "Electrical wiring and cabling",
        "Panel board and switchgear installation",
        "Power distribution systems",
        "Lighting systems and controls",
        "Transformer installation and positioning",
        "Street light electrification",
      ],
    },
    {
      title: "Mechanical Installation",
      image: "./public/images/mechanical-installation.jpg",
      points: [
        "Mechanical systems setup and commissioning",
        "Equipment installation and positioning",
        "Piping and conduit support systems",
        "Machinery installation and anchoring",
        "System testing and validation",
      ],
    },
    {
      title: "Maintenance & Servicing",
      image: "./public/images/maintenance.jpg",
      points: [
        "Routine preventive maintenance",
        "Electrical system inspection and servicing",
        "Mechanical system maintenance",
        "Sub-station renovation and maintenance",
        "Emergency repair and response",
      ],
    },
    {
      title: "Supply of Engineering Materials",
      image: "./public/images/material-supply.jpg",
      points: [
        "Electrical cables and conductors",
        "Panels and switchgear",
        "Mechanical components and fittings",
        "Construction materials and tools",
        "Safety and protective equipment",
      ],
    },
    {
      title: "Telecom & Infrastructure Support",
      image: "./public/images/telecom-infrastructure.jpg",
      points: [
        "Telecom mast and tower installation",
        "Power-to-site provisioning",
        "MTN and Etisalat site builds",
        "Transformer installation for telecom sites",
        "Infrastructure support and maintenance",
      ],
    },
    {
      title: "Power & Energy Solutions",
      image: "./public/images/power-energy.jpg",
      points: [
        "Sub-station construction and renovation",
        "Transformer installation and relocation",
        "Power distribution infrastructure",
        "Standby power system support",
        "Energy infrastructure upgrade",
      ],
    },
  ],
  projects: [
    {
      title: "Union Bank Head Office Renovation",
      client: "Tuag Nig. Ltd.",
      category: "Civil & Electrical",
      location: "40 Marina, Lagos",
      year: 2001,
      image: "./public/images/union-bank.jpg",
    },
    {
      title: "Nestle Foods Office Complex Renovation",
      client: "Nestle Foods Nigeria",
      category: "Civil & Electrical",
      location: "Ilupeju, Lagos",
      year: 2005,
      image: "./public/images/nestle-office.jpg",
    },
    {
      title: "MTN/Etisalat Telecom Site Build",
      client: "Servtek",
      category: "Telecom",
      location: "Lagos State",
      year: 2010,
      image: "./public/images/mtn-site.jpg",
    },
  ],
  clients: [
    "Union Bank Plc",
    "Nestle Foods Nigeria",
    "MTN Nigeria",
    "Etisalat Nigeria",
    "Ecobank Nigeria",
    "Ikeja Local Government",
    "Mass Telecom Innovation",
    "Pentorise Ltd.",
    "Trusnet Limited",
    "Siktob Nig. Ltd.",
    "Tuag Nig. Ltd.",
  ],
  contact: {
    headOffice: "10, Oyewole Close, Baruwa B/Stop, Ipaja, Lagos.",
    branchOffice: "Suite 7, Carol Plaza, 29-39 Alimosho Road, Iyana Ipaja, Lagos.",
    phone: ["08096691601", "08033201366"],
    email: "kanato4reel@yahoo.com",
  },
};

export const COMPANY = {
  name: COMPANY_PROFILE.title,
  shortName: COMPANY_PROFILE.title,
  rc: COMPANY_PROFILE.registration,
  founded: COMPANY_PROFILE.established,
  description: COMPANY_PROFILE.about.text,
  phone: "08096691601 / 08033201366",
  email: COMPANY_PROFILE.contact.email,
  headOffice: COMPANY_PROFILE.contact.headOffice,
  branchOffice: COMPANY_PROFILE.contact.branchOffice,
};

export const SERVICES = [
  {
    title: "Civil Engineering Works",
    points: [
      "Structural and building support works",
      "Site preparation, earthworks, fencing, and foundation works",
      "Residential and commercial construction",
    ],
  },
  {
    title: "Electrical Installation",
    points: [
      "Wiring, cabling, switchgear, and panel board installation",
      "Lighting systems, power distribution, and transformer works",
      "Street light and rural electrification projects",
    ],
  },
  {
    title: "Mechanical Installation",
    points: [
      "Equipment installation and positioning",
      "Piping, conduit support, and mechanical system commissioning",
      "Industrial equipment and building mechanical systems",
    ],
  },
  {
    title: "Maintenance & Servicing",
    points: [
      "Preventive and emergency maintenance",
      "Sub-station renovation and electrical servicing",
      "Long-term service agreements and refurbishments",
    ],
  },
  {
    title: "Supply of Engineering Materials",
    points: [
      "Electrical cables, panels, and switchgear",
      "Mechanical components, fittings, and tools",
      "Project-specific material procurement and delivery",
    ],
  },
  {
    title: "Telecom & Power Solutions",
    points: [
      "Telecom mast and tower installation",
      "Power-to-site provisioning and BTS site preparation",
      "Sub-station construction, transformer installation, and energy infrastructure",
    ],
  },
];

export const CLIENTS = [
  "Union Bank Plc",
  "Ecobank Nigeria",
  "MTN Nigeria",
  "Etisalat Nigeria",
  "Lagos State Government (LASG)",
  "Ikeja Local Government",
  "Nestle Foods Nigeria",
  "Pentorise Ltd.",
  "Trusnet Limited",
  "A.E.E. Nig. Ltd.",
];

export const PROJECTS = [
  {
    title: "2 Office Complex - Alfa Beach",
    client: "Sister Galardis",
    category: "Civil",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057754/Kanato_Website/Home%20Page/2_Office_Complex___Alfa_202605172340_vh7jfq.jpg",
  },
  {
    title: "Street Light Electrification - G.R.A.",
    client: "Ikeja Local Government",
    category: "Electrical",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058508/Kanato_Website/Home%20Page/Photorealistic__recommended___Photorealistic_engineering_photo_202605172352_zhouhr.jpg",
  },
  {
    title: "Transformer Installation - Power to Site",
    client: "Trusnet Limited",
    category: "Power",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779059000/Kanato_Website/Home%20Page/Prompt___Transformer_installation_for_power_202605180003_cxqqij.jpg",
  },
  {
    title: "Rural Electrification - Ijedodo",
    client: "A.E.E. Nig. Ltd.",
    category: "Electrical",
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057503/Kanato_Website/Home%20Page/Rural_Electrification___Ijedodo_Prompt__202605172338_vdpoqq.jpg",
  },
];
