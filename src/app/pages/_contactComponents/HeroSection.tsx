import { Link } from "react-router";
import { HERO_IMG } from "./data";

export function HeroSection() {
  return (
    <section
      className="relative flex items-center"
      style={{ paddingTop: "110px", paddingBottom: "70px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(12,40,80,0.95) 0%, rgba(18,58,111,0.85) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10 w-full">
        <nav
          className="flex items-center gap-2 text-xs mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </nav>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
          style={{
            backgroundColor: "rgba(242,107,33,0.2)",
            border: "1px solid rgba(242,107,33,0.4)",
          }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}
          >
            Get in Touch
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
          Let's Discuss Your{" "}
          <span style={{ color: "#F26B21" }}>Engineering Project</span>
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "520px",
          }}
        >
          Reach our team directly. We're available to answer your questions,
          provide technical guidance, and discuss project requirements.
        </p>
      </div>
    </section>
  );
}
