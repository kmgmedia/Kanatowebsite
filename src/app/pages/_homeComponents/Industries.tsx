import { industries } from "./data";

export function Industries() {
  return (
    <section className="kanato-section-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            Sectors
          </p>
          <h2 className="kanato-section-title">Industries We Serve</h2>
          <div className="kanato-divider-primary mx-auto mt-4 h-1 w-16 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 transition-all hover:border-[var(--color-accent)] hover:shadow-md"
            >
              <div className="kanato-icon-tile-primary flex h-11 w-11 shrink-0 items-center justify-center rounded">
                <ind.icon size={20} className="kanato-icon-primary" />
              </div>
              <div>
                <h3 className="kanato-secondary-text mb-1 text-[0.9rem] font-bold">
                  {ind.label}
                </h3>
                <p className="kanato-muted-text text-xs leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
