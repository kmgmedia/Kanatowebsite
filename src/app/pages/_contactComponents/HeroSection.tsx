import { Link } from "react-router";
import { HERO_IMG } from "./data";

export function HeroSection() {
  return (
    <section className="kanato-compact-hero relative flex items-center">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="kanato-hero-image" />
      </div>
      <div className="kanato-page-hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-10 lg:px-6">
        <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </nav>
        <div className="kanato-primary-badge mb-4 inline-flex items-center gap-2 rounded px-4 py-1.5">
          <span className="text-xs uppercase tracking-widest text-primary">
            Get in Touch
          </span>
        </div>
        <h1 className="kanato-page-title mb-4 max-w-[650px] text-white">
          Let's Discuss Your{" "}
          <span className="kanato-primary-text">Engineering Project</span>
        </h1>
        <p className="kanato-page-copy">
          Reach our team directly. We're available to answer your questions,
          provide technical guidance, and discuss project requirements.
        </p>
      </div>
    </section>
  );
}
