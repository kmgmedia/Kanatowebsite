import { milestones } from "./data";

export function Milestones() {
  return (
    <section className="kanato-section-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            Our Journey
          </p>
          <h2 className="kanato-compact-section-title font-extrabold text-white">
            Key Milestones
          </h2>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-accent/30 lg:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 lg:block" />
                <div className="kanato-button-primary z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                  <span className="kanato-heading-font text-xs font-bold text-white">
                    {m.year}
                  </span>
                </div>
                <div className="flex-1 rounded-lg bg-white/10 p-5">
                  <span className="kanato-primary-text mb-1 block text-xs uppercase tracking-wider">
                    {m.year}
                  </span>
                  <p className="text-sm leading-relaxed text-white/80">
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
