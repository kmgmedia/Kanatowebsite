import type { ComponentType } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { COMPANY } from "../../../constants/company";

interface ContactChannel {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  href: string;
  bgColor: string;
  iconColor: string;
  external?: boolean;
}

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

export const contactChannels: ContactChannel[] = [
  {
    icon: Phone,
    title: "Call Us",
    description: `${COMPANY.phone.primary} / ${COMPANY.phone.secondary}`,
    href: `tel:${COMPANY.phone.primary}`,
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with our team",
    href: `https://wa.me/${COMPANY.phone.whatsapp}`,
    bgColor: "bg-whatsapp/10",
    iconColor: "text-whatsapp",
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
