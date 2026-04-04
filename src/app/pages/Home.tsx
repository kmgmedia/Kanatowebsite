import { Link } from "react-router";
import {
  Zap,
  Building2,
  Settings,
  Wrench,
  Package,
  Radio,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Award,
  Users,
  MapPin,
  Shield,
} from "lucide-react";
import { SEO } from "../components/SEO";

const HERO_BG =
  "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { icon: Award, value: "33+", label: "Years of Experience" },
  { icon: Users, value: "100+", label: "Projects Delivered" },
  { icon: MapPin, value: "Nigeria", label: "Nationwide Coverage" },
  { icon: Shield, value: "RC 666713", label: "Fully Registered" },
];

const services = [
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

const whyPoints = [
  "Over 33 years of continuous industry experience since 1991",
  "Skilled and professional engineering workforce",
  "Strong commitment to quality, safety, and standards",
  "Reliable and timely project delivery",
  "Corporate, industrial, and residential project expertise",
  "Trusted by organizations across multiple sectors",
  "Nationwide coverage across Nigeria",
  "Professionalism and integrity at every stage",
];

const featuredProjects = [
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

const industries = [
  { icon: Building2, label: "Residential & Housing", desc: "Duplexes, flats, and estate developments" },
  { icon: Settings, label: "Commercial Buildings", desc: "Office complexes and business facilities" },
  { icon: Radio, label: "Telecommunications", desc: "Mast installation and power-to-site" },
  { icon: Zap, label: "Financial Institutions", desc: "Banks and corporate office upgrades" },
  { icon: Shield, label: "Government Projects", desc: "Public infrastructure and electrification" },
  { icon: Package, label: "Industrial Facilities", desc: "Manufacturing and industrial complexes" },
];

const clients = [
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

export function Home() {
  return (
    <div>
      <SEO
        title="Reliable Electrical, Mechanical & Civil Engineering Services"
        description="Kanato Engineering Resources Nig. Ltd. — a wholly indigenous Nigerian engineering company since 1991, delivering electrical, mechanical, and civil engineering solutions across Nigeria. RC 666713."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home — Kanato Engineering Resources Nig. Ltd.",
          url: "https://www.kanato-engineering.com",
          description: "Kanato Engineering Resources Nigeria Limited provides dependable electrical, mechanical, and civil engineering services across Nigeria since 1991.",
        }}
      />
      {/* SECTION 1 — HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ paddingTop: "120px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(12,40,80,0.92) 0%, rgba(18,58,111,0.85) 50%, rgba(12,40,80,0.75) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6"
              style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}
            >
              <span
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}
              >
                Established 1991 · RC 666713
              </span>
            </div>
            <h1
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.15,
                color: "#fff",
              }}
            >
              <span style={{ color: "#fff" }}>Reliable Electrical, Mechanical &{" "}</span>
              <span style={{ color: "#F26B21" }}>Civil Engineering</span>
              <span style={{ color: "#fff" }}> Solutions</span>
            </h1>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
              }}
            >
              Kanato Engineering Resources Nig. Ltd. provides dependable electrical, mechanical, and
              civil engineering services with a strong commitment to quality, safety, and
              professionalism across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:bg-white/10"
                style={{
                  border: "2px solid rgba(255,255,255,0.6)",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="w-px h-12"
            style={{ background: "linear-gradient(to bottom, rgba(242,107,33,0.8), transparent)" }}
          />
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section style={{ backgroundColor: "#123A6F" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(242,107,33,0.2)" }}
                >
                  <stat.icon size={22} style={{ color: "#F26B21" }} />
                </div>
                <div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.35rem" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.65)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT PREVIEW */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-4"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
              >
                About Kanato
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  color: "#123A6F",
                  lineHeight: 1.25,
                }}
              >
                Engineering Solutions Backed by Over 30 Years of Experience
              </h2>
              <p
                className="mb-4 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}
              >
                Kanato Engineering Resources Nigeria Limited was incorporated on the 23rd of July
                1991 as a distinct engineering company specialising in Electrical, Mechanical, and
                Civil services — RC 666713.
              </p>
              <p
                className="mb-6 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}
              >
                As a wholly indigenous engineering company, we engage in Electrical & Mechanical
                Installation, Sales, Supply, Construction, and Service/Maintenance. Our dynamic,
                resourceful, and experienced professionals uphold integrity and professionalism in
                every project we undertake.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{ height: "420px" }}
              >
                <img
                  src={ABOUT_IMG}
                  alt="Kanato Engineering Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 rounded-lg p-5 shadow-xl hidden md:block"
                style={{ backgroundColor: "#F26B21" }}
              >
                <p
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  1991
                </p>
                <p
                  className="text-white/80 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Year Founded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES PREVIEW */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#123A6F",
              }}
            >
              Our Core Engineering Services
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-7 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "#E5E7EB", backgroundColor: "#fff" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-orange-500"
                  style={{ backgroundColor: "rgba(18,58,111,0.1)" }}
                >
                  <service.icon
                    size={22}
                    className="transition-colors group-hover:text-white"
                    style={{ color: "#123A6F" }}
                  />
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "1rem" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Explore All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE KANATO */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: "#123A6F" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
              >
                Why Choose Us
              </p>
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.25,
                  color: "#fff",
                }}
              >
                Why Clients Trust Kanato for Critical Engineering Projects
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.975rem" }}
              >
                We deliver dependable electrical, mechanical, and civil engineering solutions backed
                by experience, professionalism, and quality workmanship. Our track record speaks for
                itself.
              </p>
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
              >
                Work With Us
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#F26B21" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED PROJECTS */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Our Work
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#123A6F",
              }}
            >
              Selected Projects
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold"
                    style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
                  >
                    {project.year}
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="text-xs uppercase tracking-wider mb-2"
                    style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}
                  >
                    {project.category}
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.95rem" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                  >
                    Client: {project.client}
                  </p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                    <MapPin size={11} />
                    <span style={{ fontFamily: "Inter, sans-serif" }}>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              See All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDUSTRIES */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Sectors
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#123A6F",
              }}
            >
              Industries We Serve
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-lg border transition-all hover:border-orange-400 hover:shadow-md"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div
                  className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(242,107,33,0.1)" }}
                >
                  <ind.icon size={20} style={{ color: "#F26B21" }} />
                </div>
                <div>
                  <h3
                    className="mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem" }}
                  >
                    {ind.label}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLIENTS */}
      <section className="py-16" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Our Clients
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "#123A6F",
              }}
            >
              Trusted by Organizations and Institutions
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-full text-sm font-medium border transition-all hover:border-blue-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#374151",
                  borderColor: "#D1D5DB",
                  backgroundColor: "#fff",
                }}
              >
                {client}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ fontFamily: "Inter, sans-serif", color: "#123A6F" }}
            >
              View all clients <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#123A6F" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F26B21 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F26B21 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p
            className="uppercase tracking-widest text-xs mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
          >
            Get Started
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              lineHeight: 1.25,
              color: "#fff",
            }}
          >
            Need a Trusted Engineering Partner for Your Next Project?
          </h2>
          <p
            className="mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto 2rem",
            }}
          >
            Let's discuss your project requirements and deliver the right engineering solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:bg-white/10"
              style={{
                border: "2px solid rgba(255,255,255,0.5)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}