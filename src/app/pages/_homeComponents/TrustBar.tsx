import { stats } from "./data";

export function TrustBar() {
  return (
    <section style={{ backgroundColor: "#123A6F" }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(242,107,33,0.2)" }}
              >
                <stat.icon size={22} style={{ color: "#F26B21" }} />
              </div>
              <div>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
