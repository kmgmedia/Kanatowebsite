import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "../../../constants/company";

export const HERO_IMG =
  "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

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
  { day: "Monday – Friday", time: COMPANY.hours.weekdays.label },
  { day: "Saturday", time: COMPANY.hours.saturday.label },
  { day: "Sunday", time: "Closed" },
];

export const whatsappConfig = {
  href: `https://wa.me/${COMPANY.phone.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`,
  title: "Chat on WhatsApp",
  subtitle: "Get a fast response from our team",
};
