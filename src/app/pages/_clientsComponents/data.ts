import { Building2, Radio, Shield, Users, Zap } from "lucide-react";
import { optimizeCloudinaryImage } from "../../../lib/cloudinary";

export const clientsHeroImage =
  optimizeCloudinaryImage(
    "https://res.cloudinary.com/ds2h3iwys/image/upload/v1779057754/Kanato_Website/Home%20Page/2_Office_Complex___Alfa_202605172340_vh7jfq.jpg",
  );

export const clientStats = [
  { value: "30+", label: "Corporate Clients" },
  { value: "33+", label: "Years of Service" },
  { value: "5+", label: "Industry Sectors" },
  { value: "100+", label: "Projects Delivered" },
] as const;

export const clientSectors = [
  {
    icon: Building2,
    sector: "Real Estate & Construction",
    clients: [
      "Clockwise Dev. Ltd.",
      "Wauline & Clockwise Ltd.",
      "Wadmus Const. Ltd.",
      "Sabkay Nig. Ltd.",
      "Primal Concept Ltd.",
      "Four Star Nigeria Ltd.",
      "Pentorise Ltd.",
      "Cennic Ltd.",
      "Francis Alimekhena",
      "Lawyer Tunde Seriki",
      "Mr. Ezekor",
      "Mr. Ayobami",
    ],
  },
  {
    icon: Zap,
    sector: "Power & Energy",
    clients: [
      "Ikeja Electric",
      "Eko Disco",
      "Income Electrix Limited",
      "A.E.E. Nig. Ltd.",
      "Afolabi Nig. Ltd.",
      "M.T.I. Ltd.",
      "Mass Telecom Innovation Ltd.",
      "Trusnet Limited",
      "Tuag Nig. Ltd.",
    ],
  },
  {
    icon: Radio,
    sector: "Telecommunications",
    clients: [
      "MTN Nigeria",
      "Etisalat Nigeria",
      "Mass Telecom Innovation Ltd.",
      "Servtek",
      "ATB Technology",
      "Asteral Ltd.",
    ],
  },
  {
    icon: Shield,
    sector: "Financial & Corporate",
    clients: [
      "Union Bank Plc",
      "Union Homes Plc",
      "Ecobank Nigeria",
      "Nestle Foods Nigeria",
    ],
  },
  {
    icon: Users,
    sector: "Government & Institutions",
    clients: [
      "Ikeja Local Government",
      "Lagos State Government (LASG)",
      "Siktob Nig. Ltd./LASG",
    ],
  },
] as const;

export const allClients = [
  { name: "Union Bank Plc", category: "Financial" },
  { name: "Union Homes Plc", category: "Financial" },
  { name: "Nestle Foods Nigeria", category: "Corporate" },
  { name: "MTN Nigeria", category: "Telecom" },
  { name: "Etisalat Nigeria", category: "Telecom" },
  { name: "Ecobank Nigeria", category: "Financial" },
  { name: "Ikeja Local Government", category: "Government" },
  { name: "Lagos State Government", category: "Government" },
  { name: "Clockwise Dev. Ltd.", category: "Construction" },
  { name: "Wauline & Clockwise Ltd.", category: "Construction" },
  { name: "Mass Telecom Innovation Ltd.", category: "Telecom" },
  { name: "Trusnet Limited", category: "Power" },
  { name: "Ikeja Electric", category: "Power" },
  { name: "Eko Disco", category: "Power" },
  { name: "Income Electrix Limited", category: "Power" },
  { name: "Primal Concept Ltd.", category: "Construction" },
  { name: "Sabkay Nig. Ltd.", category: "Construction" },
  { name: "Pentorise Ltd.", category: "Construction" },
  { name: "ATB Technology", category: "Telecom" },
  { name: "Cennic Ltd.", category: "Construction" },
  { name: "Siktob Nig. Ltd.", category: "Government" },
  { name: "Tuag Nig. Ltd.", category: "Engineering" },
  { name: "Asteral Ltd.", category: "Engineering" },
  { name: "Wadmus Const. Ltd.", category: "Construction" },
  { name: "M.T.I. Ltd.", category: "Power" },
  { name: "Servtek", category: "Telecom" },
  { name: "A.E.E. Nig. Ltd.", category: "Power" },
  { name: "Afolabi Nig. Ltd.", category: "Power" },
  { name: "Four Star Nigeria Ltd.", category: "Construction" },
  { name: "Export Logistics Apapa", category: "Logistics" },
  { name: "Soleem Engineering Ltd.", category: "Engineering" },
  { name: "Sister Galardis", category: "Private" },
] as const;

export const categoryColors: Record<string, { bg: string; text: string }> = {
  Financial: { bg: "#EFF6FF", text: "#1D4ED8" },
  Corporate: { bg: "#F0FDF4", text: "#15803D" },
  Telecom: { bg: "#FFF7ED", text: "#C2410C" },
  Government: { bg: "#FDF4FF", text: "#7E22CE" },
  Construction: { bg: "#F0FDF4", text: "#166534" },
  Power: { bg: "#FFFBEB", text: "#B45309" },
  Engineering: { bg: "#EFF6FF", text: "#1E40AF" },
  Logistics: { bg: "#F5F3FF", text: "#6D28D9" },
  Private: { bg: "#F9FAFB", text: "#374151" },
};
