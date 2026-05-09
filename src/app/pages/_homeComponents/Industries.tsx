import { industries } from "./data";

export function Industries() {
  return (
    <section className="py-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#2FA84F",
              fontWeight: 600,
            }}
          >
            Sectors
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "#3B52A5",
            }}
          >
            Industries We Serve
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded"
            style={{ backgroundColor: "#2FA84F" }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-lg border transition-all hover:border-[var(--color-accent)] hover:shadow-md"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div
                className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(47,168,79,0.1)" }}
              >
                <ind.icon size={20} style={{ color: "#2FA84F" }} />
              </div>
              <div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    color: "#3B52A5",
                    fontSize: "0.9rem",
                  }}
                >
                  {ind.label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
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


