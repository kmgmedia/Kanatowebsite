import { Link } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "./data";

export function ServicesPreview() {
  return (
    <section className="kanato-section-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            What We Do
          </p>
          <h2 className="kanato-section-title">
            Our Core Engineering Services
          </h2>
          <div className="kanato-divider-primary mx-auto mt-4 h-1 w-16 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="kanato-card group rounded-lg border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="kanato-icon-tile-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:bg-[var(--color-primary)]">
                <service.icon
                  size={22}
                  className="kanato-icon-secondary transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="kanato-secondary-text mb-3 text-base font-bold">
                {service.title}
              </h3>
              <p className="kanato-muted-text mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="kanato-primary-text inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="kanato-button-secondary inline-flex items-center gap-2 rounded px-8 py-4 text-sm font-semibold transition-all hover:opacity-90"
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
