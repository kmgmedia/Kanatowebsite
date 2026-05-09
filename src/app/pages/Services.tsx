import { Link } from "react-router";
import { Zap, Building2, Settings, Wrench, Package, Radio, Power, ArrowRight, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcG93ZXIlMjBwYW5lbCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc1MjExMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    id: "civil",
    icon: Building2,
    title: "Civil Engineering Works",
    tagline: "Building solid foundations across Nigeria",
    description:
      "Our civil engineering services cover the full spectrum of construction and structural works. From site preparation and earthworks to building support, structural reinforcement, and finishing works — our team executes projects with precision and professional standards.",
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
      "https://images.unsplash.com/photo-1568552562455-0109d65ab46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3NTIxMTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwcG93ZXIlMjBwYW5lbCUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc1MjExMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBlcXVpcG1lbnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc1MjExMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Servicing",
    tagline: "Keeping your engineering systems at peak performance",
    description:
      "Proper maintenance is critical for the longevity and safety of engineering systems. Kanato provides routine and emergency maintenance services for all types of electrical, mechanical, and civil systems — ensuring operational continuity for our clients.",
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
      "https://images.unsplash.com/photo-1709804250377-27ce2d57209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMHNlcnZpY2luZyUyMGZhY2lsaXR5JTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzc1MjExMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzc1MjExMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwdG93ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMG1hc3R8ZW58MXx8fHwxNzc1MjExMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      "https://images.unsplash.com/photo-1758866572399-7ff95ba69562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN1YnN0YXRpb24lMjB0cmFuc2Zvcm1lciUyMGVsZWN0cmljaXR5fGVufDF8fHx8MTc3NTIxMTM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We discuss your project scope, requirements, and timeline in detail." },
  { step: "02", title: "Assessment", desc: "Our engineers assess the site and develop a detailed project plan." },
  { step: "03", title: "Execution", desc: "We mobilize our team and begin execution with precision and care." },
  { step: "04", title: "Delivery", desc: "Project is completed, tested, and handed over to your satisfaction." },
];

export function Services() {
  return (
    <div>
      <SEO
        title="Engineering Services — Electrical, Mechanical, Civil & More"
        description="Kanato Engineering offers 7 integrated services: Electrical Installation, Mechanical Installation, Civil Engineering Works, Maintenance & Servicing, Material Supply, Telecom Infrastructure, and Power & Energy Solutions across Nigeria."
        path="/services"
      />
      {/* HERO */}
      <section className="relative flex items-center" style={{ paddingTop: "110px", paddingBottom: "80px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,45,97,0.95) 0%, rgba(59,82,165,0.85) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(47,168,79,0.2)", border: "1px solid rgba(47,168,79,0.4)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#2FA84F" }}>
              Our Services
            </span>
          </div>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              maxWidth: "650px",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Integrated Engineering Services for{" "}
            <span style={{ color: "#2FA84F" }}>Every Project Scale</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              fontSize: "1rem",
            }}
          >
            We provide electrical, mechanical, civil, and infrastructure engineering services designed to support construction, power, maintenance, and technical project delivery across Nigeria.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-14" style={{ backgroundColor: "#2FA84F" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-4xl font-black leading-none opacity-30 shrink-0"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "#fff" }}
                >
                  {step.step}
                </span>
                <div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
                style={i % 2 !== 0 ? { direction: "rtl" } : {}}
              >
                <div style={i % 2 !== 0 ? { direction: "ltr" } : {}}>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(59,82,165,0.08)" }}
                  >
                    <service.icon size={22} style={{ color: "#3B52A5" }} />
                  </div>
                  <p
                    className="uppercase tracking-widest text-xs mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#2FA84F", fontWeight: 600 }}
                  >
                    {service.tagline}
                  </p>
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                      color: "#3B52A5",
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4B5563", fontSize: "0.975rem" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.scope.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#2FA84F" }} />
                        <span className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "#2FA84F", color: "#fff", fontFamily: "Inter, sans-serif" }}
                  >
                    Request This Service
                    <ArrowRight size={15} />
                  </Link>
                </div>
                <div style={i % 2 !== 0 ? { direction: "ltr" } : {}}>
                  <div className="rounded-lg overflow-hidden shadow-xl" style={{ height: "360px" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#3B52A5" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#fff",
            }}
          >
            Ready to Get Started on Your Engineering Project?
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", maxWidth: "450px", margin: "0 auto 2rem" }}
          >
            Contact our team today for a professional consultation and project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#2FA84F", color: "#fff", fontFamily: "Inter, sans-serif" }}
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

