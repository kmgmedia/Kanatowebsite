import { SectionHeading } from "../../components/marketing/SectionHeading";
import { clientSectors } from "./data";

export function SectorsSection() {
  return (
    <section className="bg-grey-light py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="By Sector"
          title="Clients Across Multiple Industries"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientSectors.map((sector) => (
            <article
              key={sector.sector}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary/8">
                  <sector.icon size={18} className="text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-secondary">
                  {sector.sector}
                </h3>
              </div>

              <ul className="space-y-2">
                {sector.clients.map((client) => (
                  <li key={client} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-slate-700">{client}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
