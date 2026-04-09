import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const HERO_IMG = "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["08096691601", "08033201366", "08023945686", "08055799998"],
    href: "tel:08096691601",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["kanato4reel@yahoo.com"],
    href: "mailto:kanato4reel@yahoo.com",
  },
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Suite 7, Carol Plaza,", "29-39 Alimosho Road,", "Iyana Ipaja, Lagos."],
    href: null,
  },
  {
    icon: MapPin,
    title: "Branch Office",
    lines: ["10, Oyewole Close,", "Baruwa B/Stop,", "Ipaja, Lagos."],
    href: null,
  },
];

export const officeHours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const whatsappConfig = {
  href: "https://wa.me/2348096691601?text=Hello%20Kanato%20Engineering%2C%20I%20would%20like%20to%20make%20an%20inquiry.",
  title: "Chat on WhatsApp",
  subtitle: "Get a fast response from our team",
};
