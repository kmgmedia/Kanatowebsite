import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { HERO_BG } from "./data";

export function HeroSection() {
  return (
    <section className="kanato-home-hero relative flex min-h-screen items-center">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="kanato-hero-image" />
      </div>
      <div className="kanato-home-hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6">
        <div className="max-w-3xl">
          <div className="kanato-accent-badge mb-6 inline-flex items-center gap-2 rounded px-4 py-2">
            <span className="kanato-accent-eyebrow text-xs uppercase tracking-widest">
              Established 1991 - RC 666713
            </span>
          </div>
          <h1 className="kanato-home-title mb-6 text-white">
            <span>Reliable Electrical, Mechanical & </span>
            <span className="kanato-primary-text">Civil Engineering</span>
            <span> Solutions</span>
          </h1>
          <p className="kanato-home-copy mb-8 leading-relaxed">
            Kanato Engineering Resources Nig. Ltd. provides dependable
            electrical, mechanical, and civil engineering services with a strong
            commitment to quality, safety, and professionalism across Nigeria.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-quote"
              className="kanato-button-primary inline-flex items-center justify-center gap-2 rounded px-8 py-4 text-base font-semibold transition-all hover:opacity-90"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="kanato-button-outline-light inline-flex items-center justify-center gap-2 rounded px-8 py-4 text-base font-semibold transition-all hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="kanato-scroll-line h-12 w-px" />
      </div>
    </section>
  );
}
