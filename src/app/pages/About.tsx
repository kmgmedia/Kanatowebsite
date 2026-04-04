import { Link } from "react-router";
import { ArrowRight, CheckCircle, Target, Eye, Heart, Users } from "lucide-react";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const CIVIL_IMG =
  "https://images.unsplash.com/photo-1568552562455-0109d65ab46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3NTIxMTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080";

const coreValues = [
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
];

const milestones = [
  { year: "1991", event: "Founded as Kanato Engineering Resources Nig. Ltd. — RC 666713" },
  { year: "1992", event: "Completed electrification of G.R.A. Ikeja street lights for Ikeja Local Govt." },
  { year: "2001", event: "Handled Union Bank Head Office renovation at 40 Marina, Lagos" },
  { year: "2003", event: "Rural electrification project at Ijedodo with AEE Nigeria Ltd." },
  { year: "2005", event: "Extension of Nestle Foods Nigeria office complex, Ilupeju" },
  { year: "2006", event: "Multiple transformer installations for Mass Telecom Innovation Ltd." },
  { year: "2010", event: "MTN/Etisalat telecom site build projects across Lagos" },
  { year: "2013", event: "Street light electrification for LASG — Jimoh Ajao and environs" },
];

export function About() {
  return (
    <div>
      <SEO
        title="About Us — 33+ Years of Indigenous Engineering Excellence"
        description="Learn about Kanato Engineering Resources Nig. Ltd. — incorporated in 1991, RC 666713. A wholly indigenous Nigerian engineering company built on integrity, professionalism, and 33+ years of experience."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Kanato Engineering Resources Nig. Ltd.",
          url: "https://www.kanato-engineering.com/about",
          description: "Kanato Engineering Resources Nigeria Limited was incorporated on 23rd July 1991. We specialise in Electrical, Mechanical, and Civil engineering services across Nigeria.",
        }}
      />
      {/* HERO BANNER */}
      <section
        className="relative flex items-center"
        style={{ paddingTop: "110px", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(12,40,80,0.93) 0%, rgba(18,58,111,0.82) 100%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>
              About Kanato
            </span>
          </div>
          <h1
            className="text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              maxWidth: "700px",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            An Indigenous Engineering Company Built on{" "}
            <span style={{ color: "#F26B21" }}>Experience & Integrity</span>
          </h1>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-4"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
              >
                The Company
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                  color: "#123A6F",
                  lineHeight: 1.3,
                }}
              >
                Over Three Decades of Dependable Engineering
              </h2>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                Kanato Engineering Resources Nigeria Limited was incorporated on the 23rd of July
                1991 as a distinct engineering company with reference for Electrical, Mechanical, and
                Civil services, with registration number 666713.
              </p>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                As a wholly indigenous engineering company, Kanato engages in Electrical &
                Mechanical Installation, Sales, Supply, Construction, and Service/Maintenance. Our
                dynamic, resourceful, and experienced professionals have consistently translated
                designs into affordable reality — turning the dreams and visions of our clients into
                tangible results.
              </p>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                Our years of professionalism and integrity have made us distinct among our
                contemporaries. We do not only provide safety installations but ensure aesthetic
                values are upheld. We have covered nearly all states in Nigeria and continue to
                expand our reach.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                The team comprises accomplished professionals who came together to uphold integrity
                and professionalism. We maintain strong relationships with construction companies,
                financiers, suppliers, and distributors of electrical materials — all managed to the
                benefit of our clients and the environment.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl" style={{ height: "460px" }}>
                <img src={CIVIL_IMG} alt="Kanato Engineering Works" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-lg p-6 shadow-xl hidden md:block"
                style={{ backgroundColor: "#123A6F", maxWidth: "200px" }}
              >
                <p
                  className="text-white text-3xl font-extrabold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  33+
                </p>
                <p
                  className="text-white/70 text-xs mt-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Years of Engineering Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Our Purpose
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#123A6F",
              }}
            >
              Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="p-8 rounded-lg shadow-sm"
              style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB" }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(242,107,33,0.1)" }}
              >
                <Eye size={26} style={{ color: "#F26B21" }} />
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "1.15rem" }}
              >
                Our Vision
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}>
                To provide excellent service of Electrical, Mechanical, and Civil Installation and
                Servicing through a professional team — becoming a trusted engineering partner
                recognized for delivering efficient and reliable solutions across Nigeria and West Africa.
              </p>
            </div>
            <div
              className="p-8 rounded-lg shadow-sm"
              style={{ backgroundColor: "#123A6F", border: "1px solid #123A6F" }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(242,107,33,0.2)" }}
              >
                <Target size={26} style={{ color: "#F26B21" }} />
              </div>
              <h3
                className="mb-3 text-white"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff" }}
              >
                Our Mission
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.75)" }}>
                To uphold integrity and professionalism in the daily discharge of our products and
                services — to bring the dreams of our clients to reality through quality workmanship,
                innovation, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              What Drives Us
            </p>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#123A6F",
              }}
            >
              Our Core Values
            </h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border transition-all hover:shadow-md hover:border-orange-300"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div
                  className="w-11 h-11 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(18,58,111,0.08)" }}
                >
                  <value.icon size={20} style={{ color: "#123A6F" }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.95rem" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY MILESTONES */}
      <section className="py-20" style={{ backgroundColor: "#123A6F" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
            >
              Our Journey
            </p>
            <h2
              className="text-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                color: "#fff",
              }}
            >
              Key Milestones
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ backgroundColor: "rgba(242,107,33,0.3)", transform: "translateX(-50%)" }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden lg:block" />
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{ backgroundColor: "#F26B21" }}
                  >
                    <span
                      className="text-white text-xs font-bold"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <div
                    className="flex-1 p-5 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="text-xs uppercase tracking-wider mb-1 block"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21" }}
                    >
                      {m.year}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}
                    >
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              color: "#123A6F",
            }}
          >
            Ready to Work with a Trusted Engineering Partner?
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", maxWidth: "450px", margin: "0 auto 2rem" }}
          >
            Let's discuss your project and deliver the engineering solution your needs deserve.
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
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all"
              style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}