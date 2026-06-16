import { Link } from "react-router";
import { HERO_IMG } from "./data";

export function HeroSection() {
  return (
    <section className="kanato-page-hero relative flex items-center">
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
          <span className="text-white">About Us</span>
        </nav>
        <div className="kanato-primary-badge mb-4 inline-flex items-center gap-2 rounded px-4 py-1.5">
          <span className="kanato-primary-text text-xs uppercase tracking-widest">
            About Kanato
          </span>
        </div>
        <h1 className="kanato-page-title max-w-[700px] text-white">
          An Indigenous Engineering Company Built on{" "}
          <span className="kanato-primary-text">Experience & Integrity</span>
        </h1>
      </div>
    </section>
  );
}
