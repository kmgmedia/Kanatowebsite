import { Building2, Package, Power, Radio, Settings, Wrench, Zap } from "lucide-react";

export const servicesHeroImage =
  "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058508/Kanato_Website/Home%20Page/Photorealistic__recommended___Photorealistic_engineering_photo_202605172352_zhouhr.jpg";

export const serviceCards = [
  {
    id: "civil",
    icon: Building2,
    title: "Civil Engineering Works",
    tagline: "Building solid foundations across Nigeria",
    description:
      "Our civil engineering services cover the full spectrum of construction and structural works. From site preparation and earthworks to building support, structural reinforcement, and finishing works, our team executes projects with precision and professional standards.",
    scope: [
      "Structural and building support works",
      "Site preparation and earthworks",
      "Construction and reinforcement works",
      "Foundation and concrete works",
      "Fencing and perimeter security",
      "Renovation and finishing works",
      "Residential and commercial construction",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056817/Kanato_Website/Home%20Page/8_Wing_Duplex___Arepo_Prompt__202605172326_zykmlk.jpg",
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Installation",
    tagline: "Powering infrastructure with precision and safety",
    description:
      "We deliver comprehensive electrical installation services for residential, commercial, industrial, and institutional projects. From complete electrical wiring to complex power distribution systems, our certified electricians ensure safe, code-compliant installations.",
    scope: [
      "Electrical wiring and cabling",
      "Panel board and switchgear installation",
      "Power distribution systems",
      "Lighting systems and controls",
      "Transformer installation and positioning",
      "Street light electrification",
      "Rural electrification projects",
      "Industrial electrical setups",
    ],
    image: servicesHeroImage,
  },
  {
    id: "mechanical",
    icon: Settings,
    title: "Mechanical Installation",
    tagline: "Efficient mechanical systems for modern facilities",
    description:
      "Our mechanical engineering team handles the installation and commissioning of mechanical systems for buildings and industrial facilities. We work with precision to ensure systems are installed efficiently and perform reliably over the long term.",
    scope: [
      "Mechanical systems setup and commissioning",
      "Equipment installation and positioning",
      "Piping and conduit support systems",
      "Machinery installation and anchoring",
      "Building mechanical systems",
      "Industrial equipment support",
      "System testing and validation",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779053145/Kanato_Website/Home%20Page/Union_Bank_Head_Office_Renovation_202605172225_tjithx.jpg",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Servicing",
    tagline: "Keeping your engineering systems at peak performance",
    description:
      "Proper maintenance is critical for the longevity and safety of engineering systems. Kanato provides routine and emergency maintenance services for all types of electrical, mechanical, and civil systems, ensuring operational continuity for our clients.",
    scope: [
      "Routine preventive maintenance",
      "Electrical system inspection and servicing",
      "Mechanical system maintenance",
      "Sub-station renovation and maintenance",
      "Emergency repair and response",
      "Long-term service agreements",
      "System upgrades and refurbishment",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779058085/Kanato_Website/Home%20Page/Nestle_Foods_Office_Complex_Renovation_202605172347_a3w7rm.jpg",
  },
  {
    id: "supply",
    icon: Package,
    title: "Supply of Engineering Materials",
    tagline: "Quality materials delivered to your project site",
    description:
      "Kanato sources and supplies quality electrical, mechanical, and civil engineering materials. Our relationships with top-tier suppliers and distributors allow us to provide clients with the right materials at competitive prices, ensuring project continuity.",
    scope: [
      "Electrical cables and conductors",
      "Electrical panels and switchgear",
      "Mechanical components and fittings",
      "Construction materials and tools",
      "Transformer and power equipment",
      "Safety and protective equipment",
      "Project-specific material procurement",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779056393/Kanato_Website/Home%20Page/MTN_Sub_Station___Seme_202605172319_yzxppt.jpg",
  },
  {
    id: "telecom",
    icon: Radio,
    title: "Telecom & Infrastructure Support",
    tagline: "Powering the nation's telecom backbone",
    description:
      "We have extensive experience in the installation and support of telecommunications infrastructure. Our team has successfully executed numerous telecom mast, tower, and power-to-site projects for major networks across Nigeria.",
    scope: [
      "Telecom mast and tower installation",
      "Power-to-site provisioning",
      "MTN and Etisalat site builds",
      "Transformer installation for telecom sites",
      "Site civil and electrical works",
      "Infrastructure support and maintenance",
      "BTS site preparation",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779055794/Kanato_Website/Home%20Page/MTN_Etisalat_Telecom_Site_Build_Prompt__202605172309_wswwty.jpg",
  },
  {
    id: "power",
    icon: Power,
    title: "Power & Energy Solutions",
    tagline: "Reliable power delivery for every project scale",
    description:
      "From sub-station construction to transformer relocation and energy infrastructure, Kanato handles complex power engineering projects for banks, government bodies, and corporate organizations across Nigeria.",
    scope: [
      "Sub-station construction and renovation",
      "Transformer installation and relocation",
      "Power distribution infrastructure",
      "Electrical sub-station maintenance",
      "Standby power system support",
      "Energy infrastructure upgrade",
      "HV/LV system works",
    ],
    image:
      "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779059000/Kanato_Website/Home%20Page/Prompt___Transformer_installation_for_power_202605180003_cxqqij.jpg",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your project scope, requirements, and timeline in detail.",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "Our engineers assess the site and develop a detailed project plan.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We mobilize our team and begin execution with precision and care.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Project is completed, tested, and handed over to your satisfaction.",
  },
] as const;
