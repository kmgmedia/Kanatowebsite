import { coreValues } from "./data";

export function CoreValues() {
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
            What Drives Us
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
              color: "#3B52A5",
            }}
          >
            Our Core Values
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded"
            style={{ backgroundColor: "#2FA84F" }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border transition-all hover:shadow-md hover:border-[var(--color-accent-light)]"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div
                className="w-11 h-11 rounded flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(59,82,165,0.08)" }}
              >
                <value.icon size={20} style={{ color: "#3B52A5" }} />
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#3B52A5",
                  fontSize: "0.95rem",
                }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


