import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { HERO_BG } from "./data";

export function HeroSection() {
  return (
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
  );
}
