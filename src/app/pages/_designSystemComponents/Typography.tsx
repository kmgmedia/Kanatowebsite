import { SectionHeader, Divider } from "./helpers";

export function Typography() {
  return (
    <>
      <SectionHeader
        label="Foundation"
        title="Typography"
        desc="Montserrat for headings and Inter for body text — the two typefaces used throughout the site."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Montserrat */}
        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <div className="flex items-center justify-between mb-6">
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#3B52A5", fontSize: "1rem" }}>
              Montserrat — Headings
            </h3>
            <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: "rgba(59,82,165,0.08)", color: "#3B52A5", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Display / Heading
            </span>
          </div>
          <div className="space-y-5">
            {[
              { label: "Display / Hero H1", size: "clamp(2.2rem, 5vw, 3.8rem)", weight: 800, sample: "Engineering Excellence" },
              { label: "Page H1", size: "clamp(2rem, 4vw, 3rem)", weight: 800, sample: "About Kanato" },
              { label: "Section H2", size: "clamp(1.6rem, 3vw, 2.4rem)", weight: 800, sample: "Our Services" },
              { label: "Sub H2", size: "clamp(1.5rem, 2.5vw, 2.1rem)", weight: 800, sample: "Key Milestones" },
              { label: "Card H3", size: "1.1rem", weight: 700, sample: "Electrical Installation" },
              { label: "Small H3", size: "0.95rem", weight: 700, sample: "Why Request From Kanato?" },
              { label: "Label H4", size: "0.85rem", weight: 700, sample: "Call Us" },
              { label: "Eyebrow", size: "0.75rem", weight: 600, sample: "ESTABLISHED 1991 · RC 666713", upper: true },
            ].map((t, i) => (
              <div key={i} className="pb-5" style={{ borderBottom: i < 7 ? "1px solid #F5F7FA" : "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t.label} · {typeof t.size === "string" ? t.size : ""} · weight {t.weight}
                </p>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: t.weight,
                  fontSize: t.size,
                  color: "#3B52A5",
                  lineHeight: 1.2,
                  textTransform: t.upper ? "uppercase" : undefined,
                  letterSpacing: t.upper ? "0.12em" : undefined,
                }}>
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Inter */}
        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <div className="flex items-center justify-between mb-6">
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#3B52A5", fontSize: "1rem" }}>
              Inter — Body & UI
            </h3>
            <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: "rgba(47,168,79,0.1)", color: "#2FA84F", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Body / UI
            </span>
          </div>
          <div className="space-y-5">
            {[
              { label: "Body Large", size: "clamp(1rem, 2vw, 1.15rem)", weight: 400, color: "#4B5563", sample: "We deliver dependable electrical, mechanical, and civil engineering solutions backed by experience." },
              { label: "Body Regular", size: "1rem", weight: 400, color: "#4B5563", sample: "Kanato Engineering Resources Nigeria Limited was incorporated in 1991." },
              { label: "Body Small", size: "0.875rem", weight: 400, color: "#6B7280", sample: "10, Oyewole Close, Baruwa B/Stop, Ipaja, Lagos." },
              { label: "UI Medium (semibold)", size: "0.875rem", weight: 600, color: "#374151", sample: "Request a Quote" },
              { label: "UI Small", size: "0.875rem", weight: 500, color: "#2FA84F", sample: "Learn more →" },
              { label: "Caption / Meta", size: "0.75rem", weight: 400, color: "#9CA3AF", sample: "Client: Union Bank Plc · Lagos · 2001" },
              { label: "Micro / Footer", size: "0.75rem", weight: 400, color: "rgba(255,255,255,0.4)", bg: "#2C3F81", sample: "© 2025 Kanato Engineering Resources Nig. Ltd. All rights reserved." },
              { label: "Tag / Badge", size: "0.75rem", weight: 600, color: "#2FA84F", upper: true, sample: "Telecom Infrastructure" },
            ].map((t, i) => (
              <div key={i} className="rounded-lg p-3 pb-4" style={{ borderBottom: i < 7 ? "1px solid #F5F7FA" : "none", backgroundColor: t.bg || "transparent" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: t.bg ? "rgba(255,255,255,0.4)" : "#9CA3AF", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t.label} · {t.size} · weight {t.weight}
                </p>
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: t.weight,
                  fontSize: t.size,
                  color: t.color,
                  lineHeight: 1.5,
                  textTransform: t.upper ? "uppercase" : undefined,
                  letterSpacing: t.upper ? "0.08em" : undefined,
                }}>
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
}


