import { clients } from "./data";

export function Clients() {
  return (
    <section className="py-16" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#2FA84F",
              fontWeight: 600,
            }}
          >
            Our Clients
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              color: "#3B52A5",
            }}
          >
            Trusted by Organizations and Institutions
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((client, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-full text-sm font-medium border transition-all hover:border-[var(--color-secondary-light)]"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#374151",
                borderColor: "#D1D5DB",
                backgroundColor: "#fff",
              }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


