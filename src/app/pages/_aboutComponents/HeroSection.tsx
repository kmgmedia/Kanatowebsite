import { Link } from "react-router";
import { HERO_IMG } from "./data";

export function HeroSection() {
  return (
    <section className="relative flex items-center" style={{ paddingTop: "110px", paddingBottom: "80px" }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,40,80,0.93) 0%, rgba(18,58,111,0.82) 100%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10 w-full">
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
  );
}
