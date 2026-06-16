import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CTAAction {
  href: string;
  label: string;
}

interface PageCTAProps {
  title: string;
  description: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  eyebrow?: string;
  backgroundClassName?: string;
}

export function PageCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  eyebrow,
  backgroundClassName = "bg-secondary",
}: PageCTAProps) {
  return (
    <section className={`py-16 ${backgroundClassName}`}>
      <div className="max-w-4xl mx-auto px-4 text-center lg:px-6">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="kanato-cta-title mb-5 font-extrabold text-white">
          {title}
        </h2>

        <p className="mx-auto mb-8 max-w-[500px] text-white/70">
          {description}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to={primaryAction.href}
            className="inline-flex items-center justify-center gap-2 rounded bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            {primaryAction.label}
            <ArrowRight size={16} />
          </Link>

          {secondaryAction ? (
            <Link
              to={secondaryAction.href}
              className="inline-flex items-center justify-center gap-2 rounded border-2 border-white/50 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
