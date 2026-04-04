import { Link } from "react-router";
import { ArrowRight, Building2, Zap, Radio, Shield, Users } from "lucide-react";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://images.unsplash.com/photo-1770927423634-14778e8a0fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc1MTEwNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const clientSectors = [
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
];

const allClients = [
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
];

const categoryColors: Record<string, { bg: string; text: string }> = {
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

export function Clients() {
  return (
    <div>
      <SEO
        title="Our Clients — Trusted by Corporations, Banks & Government Bodies"
        description="Kanato Engineering has served 30+ clients including Union Bank, Nestle Foods Nigeria, MTN, Etisalat, Ecobank, Lagos State Government, and many more across multiple sectors since 1991."
        path="/clients"
      />
      {/* HERO */}
      <section className="relative flex items-center" style={{ paddingTop: "110px", paddingBottom: "80px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,40,80,0.95) 0%, rgba(18,58,111,0.85) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Clients</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>
              Our Clients
            </span>
          </div>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              maxWidth: "700px",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Trusted by Organizations &{" "}
            <span style={{ color: "#F26B21" }}>Institutions Across Nigeria</span>
          </h1>
          <p
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.75)", maxWidth: "560px" }}
          >
            Our client portfolio spans over three decades and includes leading corporations, financial institutions, telecom companies, government agencies, and private developers.
          </p>
        </div>
      </section>

      {/* TRUST STATS */}
      <section style={{ backgroundColor: "#123A6F" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "30+", label: "Corporate Clients" },
              { val: "33+", label: "Years of Service" },
              { val: "5+", label: "Industry Sectors" },
              { val: "100+", label: "Projects Delivered" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-white mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "2rem" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-sm"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY SECTOR */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              By Sector
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#123A6F",
              }}
            >
              Clients Across Multiple Industries
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSectors.map((sector, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-all"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center"
                    style={{ backgroundColor: "rgba(18,58,111,0.08)" }}
                  >
                    <sector.icon size={18} style={{ color: "#123A6F" }} />
                  </div>
                  <h3
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem" }}
                  >
                    {sector.sector}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {sector.clients.map((client, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F26B21" }} />
                      <span
                        className="text-sm"
                        style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                      >
                        {client}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL CLIENTS WALL */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Full Client List
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#123A6F",
              }}
            >
              Organizations We Have Served
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allClients.map((client, i) => {
              const colors = categoryColors[client.category] || { bg: "#F9FAFB", text: "#374151" };
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all hover:shadow-md"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: colors.bg,
                    color: colors.text,
                    borderColor: "transparent",
                  }}
                >
                  {client.name}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: "rgba(0,0,0,0.05)", fontSize: "0.65rem" }}
                  >
                    {client.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#123A6F" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", color: "#fff" }}
          >
            Join Our Growing List of Satisfied Clients
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", maxWidth: "450px", margin: "0 auto 2rem" }}
          >
            Partner with Kanato Engineering for your next project and experience the difference that professionalism, integrity, and experience makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold hover:bg-white/10 transition-all"
              style={{ border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}