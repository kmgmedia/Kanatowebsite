import { CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { serviceCards } from "./data";

export function ServiceDetailsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="space-y-20">
          {serviceCards.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
              >
                <div className={isReversed ? "lg:order-2" : undefined}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/8">
                    <service.icon size={22} className="text-secondary" />
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    {service.tagline}
                  </p>

                  <h2 className="mb-4 text-[clamp(1.4rem,2.5vw,1.9rem)] leading-[1.3] text-secondary">
                    {service.title}
                  </h2>

                  <p className="mb-6 text-[0.975rem] leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                  >
                    Request This Service
                  </Link>
                </div>

                <div className={isReversed ? "lg:order-1" : undefined}>
                  <div className="h-[360px] overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
