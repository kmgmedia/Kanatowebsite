import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { whyPoints } from "./data";

export function WhyChoose() {
  return (
    <section className="kanato-section-secondary relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
              Why Choose Us
            </p>
            <h2 className="kanato-section-title mb-6 leading-tight text-white">
              Why Clients Trust Kanato for Critical Engineering Projects
            </h2>
            <p className="mb-8 text-[0.975rem] leading-relaxed text-white/70">
              We deliver dependable electrical, mechanical, and civil
              engineering solutions backed by experience, professionalism, and
              quality workmanship. Our track record speaks for itself.
            </p>
            <Link
              to="/request-quote"
              className="kanato-button-primary inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-all hover:opacity-90"
            >
              Work With Us
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="kanato-icon-primary mt-0.5 shrink-0"
                />
                <span className="text-sm leading-relaxed text-white/80">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
