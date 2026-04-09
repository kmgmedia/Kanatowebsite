import { Phone, Mail, MessageCircle } from "lucide-react";

export const HERO_IMG =
  "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const serviceOptions = [
  "Civil Engineering Works",
  "Electrical Installation",
  "Mechanical Installation",
  "Maintenance & Servicing",
  "Supply of Engineering Materials",
  "Telecom Infrastructure Support",
  "Power & Energy Solutions",
  "Multiple Services",
  "Other",
];

export const contactChannels = [
  {
    icon: Phone,
    title: "Call Us",
    description: "08096691601 / 08033201366",
    href: "tel:08096691601",
    bgColor: "rgba(18,58,111,0.1)",
    iconColor: "#123A6F",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "kanato4reel@yahoo.com",
    href: "mailto:kanato4reel@yahoo.com",
    bgColor: "rgba(242,107,33,0.1)",
    iconColor: "#F26B21",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with our team",
    href: "https://wa.me/2348096691601",
    bgColor: "rgba(37,211,102,0.1)",
    iconColor: "#25D366",
    external: true,
  },
];

export const whyChoosePoints = [
  "Free, no-obligation project consultation",
  "Detailed quote within 24 hours",
  "Professional assessment by our engineers",
  "Transparent pricing, no hidden costs",
  "33+ years of engineering expertise",
  "Nationwide project delivery",
];

export const budgetRanges = [
  { value: "Below ₦1M", label: "Below ₦1,000,000" },
  { value: "₦1M - ₦5M", label: "₦1,000,000 – ₦5,000,000" },
  { value: "₦5M - ₦20M", label: "₦5,000,000 – ₦20,000,000" },
  { value: "₦20M - ₦50M", label: "₦20,000,000 – ₦50,000,000" },
  { value: "Above ₦50M", label: "Above ₦50,000,000" },
  { value: "To be determined", label: "To be determined" },
];
