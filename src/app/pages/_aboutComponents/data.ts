import { CheckCircle, Heart, Target, Users } from "lucide-react";

export const HERO_IMG =
  "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778807759/Kanato_Website/Home%20Page/Ultra-realistic_Nigerian_engineering_and_construction_202605150157_nvxcku.jpg";

export const CIVIL_IMG =
  "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779060108/Kanato_Website/Home%20Page/Prompt___Corporate_engineering_company_profile_202605180020_ardr12.jpg";

export const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and ethical conduct in all our dealings.",
  },
  {
    icon: CheckCircle,
    title: "Professionalism",
    desc: "Our team brings technical excellence and disciplined work ethic to every project.",
  },
  {
    icon: Target,
    title: "Quality",
    desc: "We deliver work that meets and exceeds client expectations and industry standards.",
  },
  {
    icon: Users,
    title: "Safety",
    desc: "The safety of our team, clients, and communities is paramount in everything we do.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    desc: "Clients can count on us for consistent, timely, and dependable project delivery.",
  },
  {
    icon: Heart,
    title: "Client Commitment",
    desc: "We are dedicated to turning the vision and dreams of our clients into reality.",
  },
] as const;

export const milestones = [
  {
    year: "1991",
    event: "Founded as Kanato Engineering Resources Nig. Ltd. - RC 666713",
  },
  {
    year: "1992",
    event:
      "Completed electrification of G.R.A. Ikeja street lights for Ikeja Local Govt.",
  },
  {
    year: "2001",
    event: "Handled Union Bank Head Office renovation at 40 Marina, Lagos",
  },
  {
    year: "2003",
    event: "Rural electrification project at Ijedodo with AEE Nigeria Ltd.",
  },
  {
    year: "2005",
    event: "Extension of Nestle Foods Nigeria office complex, Ilupeju",
  },
  {
    year: "2006",
    event:
      "Multiple transformer installations for Mass Telecom Innovation Ltd.",
  },
  {
    year: "2010",
    event: "MTN/Etisalat telecom site build projects across Lagos",
  },
  {
    year: "2013",
    event: "Street light electrification for LASG - Jimoh Ajao and environs",
  },
] as const;
