import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="kanato-section-soft py-16">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2 className="kanato-compact-section-title kanato-secondary-text mb-4 font-extrabold">
          Ready to Work with a Trusted Engineering Partner?
        </h2>
        <p className="kanato-muted-text mx-auto mb-8 max-w-[450px]">
          Let's discuss your project and deliver the engineering solution your
          needs deserve.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/request-quote"
            className="kanato-button-primary inline-flex items-center justify-center gap-2 rounded px-8 py-4 text-sm font-semibold transition-all hover:opacity-90"
          >
            Request a Quote
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="kanato-secondary-border kanato-secondary-text inline-flex items-center justify-center gap-2 rounded border bg-white px-8 py-4 text-sm font-semibold transition-all"
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
