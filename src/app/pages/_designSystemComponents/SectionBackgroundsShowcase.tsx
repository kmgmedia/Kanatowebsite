import { SectionHeader, Divider } from "./helpers";

export function SectionBackgroundsShowcase() {
  return (
    <>
      <SectionHeader
        label="Foundation"
        title="Section Backgrounds & Layout"
        desc="The alternating section background pattern and layout tokens used across all pages."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Section BG order */}
        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>
            Section Background Rotation
          </h3>
          <div className="flex flex-col gap-2">
            {[
              { section: "Hero / Page Header", hex: "rgba(12,40,80,0.92)" },
              { section: "Trust / Stats Bar", hex: "#123A6F" },
              { section: "About / Why Choose", hex: "#F5F7FA" },
              { section: "Services / Industries", hex: "#FFFFFF" },
              { section: "Footer main", hex: "#0d2d57" },
              { section: "Footer CTA strip", hex: "#F26B21" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid #F5F7FA" }}>
                <div
                  className="w-8 h-8 rounded shrink-0 border"
                  style={{ backgroundColor: row.hex, borderColor: "#E5E7EB" }}
                />
                <div>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>
                    {row.section}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>{row.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout tokens */}
        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>
            Layout Tokens
          </h3>
          <div className="space-y-3">
            {[
              { label: "Container max-width", value: "max-w-7xl (1280px)" },
              { label: "Container padding", value: "px-4 lg:px-6" },
              { label: "Section padding (standard)", value: "py-20 (80px)" },
              { label: "Section padding (compact)", value: "py-16 (64px)" },
              { label: "Border radius (card)", value: "rounded-lg (8px)" },
              { label: "Border radius (pill)", value: "rounded-full" },
            ].map((t) => (
              <div key={t.label} className="flex items-center justify-between gap-4 pb-2" style={{ borderBottom: "1px solid #F5F7FA" }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>
                  {t.label}
                </p>
                <span className="px-2 py-1 rounded text-xs shrink-0" style={{ backgroundColor: "rgba(18,58,111,0.08)", color: "#123A6F", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  {t.value}
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
