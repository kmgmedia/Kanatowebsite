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
    <section className="kanato-page-hero relative flex items-center">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="" className="kanato-hero-image" />
      </div>
      <div className="kanato-page-hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 pt-10 lg:px-6">
        <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{currentPage}</span>
        </nav>

        <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/40 bg-primary/20 px-4 py-1.5">
          <span className="kanato-primary-text text-xs font-medium uppercase tracking-widest">
            {badge}
          </span>
        </div>

        <h1 className="kanato-page-title mb-4 max-w-[650px] text-white">
          {title}
        </h1>

        <p className="max-w-[560px] text-base text-white/75">{description}</p>
      </div>
    </section>
  );
}
