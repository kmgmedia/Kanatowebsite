import { SectionHeading } from "../../components/marketing/SectionHeading";
import { allClients, categoryColors } from "./data";

export function ClientsWallSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="Full Client List"
          title="Organizations We Have Served"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {allClients.map((client) => {
            const colors = categoryColors[client.category] ?? {
              bg: "#F9FAFB",
              text: "#374151",
            };

            return (
              <div
                key={client.name}
                className="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all hover:shadow-md"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  borderColor: "transparent",
                }}
              >
                {client.name}
                <span
                  className="rounded px-1.5 py-0.5 text-xs"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    fontSize: "0.65rem",
                  }}
                >
                  {client.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
