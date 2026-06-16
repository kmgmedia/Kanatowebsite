import { stats } from "./data";

export function TrustBar() {
  return (
    <section className="kanato-section-secondary py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="kanato-primary-badge flex h-12 w-12 shrink-0 items-center justify-center rounded">
                <stat.icon size={22} className="kanato-icon-primary" />
              </div>
              <div>
                <div className="kanato-heading-font text-[1.35rem] font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/65">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
