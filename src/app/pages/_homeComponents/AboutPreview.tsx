import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ABOUT_IMG } from "./data";

export function AboutPreview() {
  return (
    <section className="kanato-section-soft py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kanato-eyebrow mb-4 text-xs uppercase tracking-widest">
              About Kanato
            </p>
            <h2 className="kanato-section-title mb-6 leading-tight">
              Engineering Solutions Backed by Over 30 Years of Experience
            </h2>
            <p className="kanato-charcoal-text mb-4 leading-relaxed">
              Kanato Engineering Resources Nigeria Limited was incorporated on
              the 23rd of July 1991 as a distinct engineering company
              specialising in Electrical, Mechanical, and Civil services - RC
              666713.
            </p>
            <p className="kanato-charcoal-text mb-6 leading-relaxed">
              As a wholly indigenous engineering company, we engage in
              Electrical & Mechanical Installation, Sales, Supply, Construction,
              and Service/Maintenance. Our dynamic, resourceful, and experienced
              professionals uphold integrity and professionalism in every
              project we undertake.
            </p>
            <Link
              to="/about"
              className="kanato-button-secondary inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="h-[420px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Kanato Engineering Team"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="kanato-button-primary absolute -bottom-5 -left-5 hidden rounded-lg p-5 shadow-xl md:block">
              <p className="kanato-heading-font text-2xl font-bold text-white">
                1991
              </p>
              <p className="text-xs text-white/80">Year Founded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
