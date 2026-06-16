import { coreValues } from "./data";

export function CoreValues() {
  return (
    <section className="kanato-section-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            What Drives Us
          </p>
          <h2 className="kanato-compact-section-title kanato-secondary-text font-extrabold">
            Our Core Values
          </h2>
          <div className="kanato-divider-primary mx-auto mt-4 h-1 w-16 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 p-6 transition-all hover:border-[var(--color-accent-light)] hover:shadow-md"
            >
              <div className="kanato-icon-tile-secondary mb-4 flex h-11 w-11 items-center justify-center rounded">
                <value.icon size={20} className="kanato-icon-secondary" />
              </div>
              <h3 className="kanato-secondary-text mb-2 text-[0.95rem] font-bold">
                {value.title}
              </h3>
              <p className="kanato-muted-text text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
