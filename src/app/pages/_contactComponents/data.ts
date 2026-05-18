import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "../../../constants/company";

export const HERO_IMG =
  "https://res.cloudinary.com/ds2h3iwys/image/upload/v1778807759/Kanato_Website/Home%20Page/Ultra-realistic_Nigerian_engineering_and_construction_202605150157_nvxcku.jpg";

export const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [COMPANY.phone.primary, COMPANY.phone.secondary],
    href: `tel:${COMPANY.phone.primary}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [COMPANY.email],
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    title: "Head Office",
    lines: COMPANY.addresses.headOffice.lines,
    href: null,
  },
  {
    icon: MapPin,
    title: "Branch Office",
    lines: COMPANY.addresses.branch.lines,
    href: null,
  },
] as const;

export const officeHours = [
  { day: "Monday - Friday", time: COMPANY.hours.weekdays.label },
  { day: "Saturday", time: COMPANY.hours.saturday.label },
  { day: "Sunday", time: "Closed" },
];

export const whatsappConfig = {
  href: `https://wa.me/${COMPANY.phone.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`,
  title: "Chat on WhatsApp",
  subtitle: "Get a fast response from our team",
};
