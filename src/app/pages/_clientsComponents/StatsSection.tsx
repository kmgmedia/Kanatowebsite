import { clientStats } from "./data";

export function StatsSection() {
  return (
    <section className="bg-secondary py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {clientStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
