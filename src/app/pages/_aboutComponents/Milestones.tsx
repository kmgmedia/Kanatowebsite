import { milestones } from "./data";

export function Milestones() {
  return (
    <section className="py-20" style={{ backgroundColor: "#123A6F" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
          >
            Our Journey
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
              color: "#fff",
            }}
          >
            Key Milestones
          </h2>
        </div>
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{ backgroundColor: "rgba(242,107,33,0.3)", transform: "translateX(-50%)" }}
          />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="flex-1 hidden lg:block" />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{ backgroundColor: "#F26B21" }}
                >
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {m.year}
                  </span>
                </div>
                <div
                  className="flex-1 p-5 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="text-xs uppercase tracking-wider mb-1 block"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21" }}
                  >
                    {m.year}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}
                  >
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
