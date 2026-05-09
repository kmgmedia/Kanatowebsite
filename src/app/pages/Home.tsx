import { SEO } from "../components/SEO";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "./_homeComponents/HeroSection";
import { TrustBar } from "./_homeComponents/TrustBar";
import { AboutPreview } from "./_homeComponents/AboutPreview";
import { ServicesPreview } from "./_homeComponents/ServicesPreview";
import { WhyChoose } from "./_homeComponents/WhyChoose";
import { FeaturedProjects } from "./_homeComponents/FeaturedProjects";
import { Industries } from "./_homeComponents/Industries";
import { Clients } from "./_homeComponents/Clients";

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

      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <WhyChoose />
      <FeaturedProjects />
      <Industries />
      <Clients />

      {/* FINAL CTA SECTION */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#3B52A5" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #FFA323 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2FA84F 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p
            className="uppercase tracking-widest text-xs mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFA323", fontWeight: 600 }}
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
              style={{ backgroundColor: "#2FA84F", color: "#fff", fontFamily: "Inter, sans-serif" }}
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



