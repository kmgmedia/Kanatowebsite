import { Zap, Settings, Building2, CheckCircle } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function CardsShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Cards"
        desc="All card types and their specifications — service, project, industry, and sidebar cards."
      />

      <div className="mb-6">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "12px",
          }}
        >
          Service Cards (White bg · hover lift + shadow)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Zap,
              title: "Electrical Installation",
              desc: "Electrical wiring, panel installation, power distribution, lighting systems, and equipment setup.",
            },
            {
              icon: Settings,
              title: "Mechanical Installation",
              desc: "Mechanical systems setup, equipment installation, piping support, and building mechanical works.",
            },
            {
              icon: Building2,
              title: "Civil Engineering Works",
              desc: "Structural works, site preparation, building support, and construction-related engineering services.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="group p-7 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              style={{ borderColor: "#E5E7EB", backgroundColor: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-orange-500"
                style={{ backgroundColor: "rgba(18,58,111,0.1)" }}
              >
                <s.icon
                  size={22}
                  className="transition-colors group-hover:text-white"
                  style={{ color: "#123A6F" }}
                />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#123A6F",
                  fontSize: "1rem",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "12px",
          }}
        >
          "Why Choose" Sidebar Card (dark blue)
        </p>
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: "#123A6F", maxWidth: "320px" }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#fff",
            }}
          >
            Why Request From Kanato?
          </h3>
          <div className="space-y-3">
            {[
              "Free, no-obligation consultation",
              "Detailed quote within 24 hours",
              "Professional assessment",
              "Transparent pricing",
              "33+ years expertise",
              "Nationwide delivery",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#F26B21" }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
}
