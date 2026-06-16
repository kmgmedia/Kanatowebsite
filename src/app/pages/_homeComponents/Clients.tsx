import { clients } from "./data";

export function Clients() {
  return (
    <section className="kanato-section-soft py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            Our Clients
          </p>
          <h2 className="kanato-compact-section-title kanato-secondary-text font-extrabold">
            Trusted by Organizations and Institutions
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client, i) => (
            <div
              key={i}
              className="kanato-grey-border rounded-full border bg-white px-5 py-3 text-sm font-medium text-gray-700 transition-all hover:border-[var(--color-secondary-light)]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
