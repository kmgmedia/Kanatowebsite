import type { ReactNode } from "react";
import { Link } from "react-router";

interface PageHeroProps {
  backgroundImage: string;
  badge: string;
  title: ReactNode;
  description: string;
  currentPage: string;
}

export function PageHero({
  backgroundImage,
  badge,
  title,
  description,
  currentPage,
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center"
      style={{ paddingTop: "110px", paddingBottom: "80px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,45,97,0.95) 0%, rgba(59,82,165,0.85) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
        <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{currentPage}</span>
        </nav>

        <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/40 bg-primary/20 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {badge}
          </span>
        </div>

        <h1
          className="mb-4 max-w-[650px] text-white"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>

        <p className="max-w-[560px] text-base text-white/75">{description}</p>
      </div>
    </section>
  );
}
