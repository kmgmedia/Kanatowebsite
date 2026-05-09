import { CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function BadgesShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Badges & Labels"
        desc="Eyebrow labels, category tags, status badges, and accent chips used across all pages."
      />

      <div
        className="bg-white rounded-xl p-8"
        style={{ border: "1px solid #E5E7EB" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Eyebrow / Section Labels */}
          <div>
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
              Eyebrow / Section Labels
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  On light bg
                </p>
                <p
                  className="uppercase tracking-widest text-xs"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#2FA84F",
                    fontWeight: 600,
                  }}
                >
                  What We Do
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  Hero badge (pill)
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded"
                  style={{
                    backgroundColor: "rgba(47,168,79,0.2)",
                    border: "1px solid rgba(47,168,79,0.4)",
                  }}
                >
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#2FA84F",
                    }}
                  >
                    Established 1991 · RC 666713
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Category & Year Tags */}
          <div>
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
              Category & Year Tags
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "6px",
                  }}
                >
                  Project year badge
                </p>
                <span
                  className="px-3 py-1 rounded text-xs font-semibold"
                  style={{
                    backgroundColor: "#2FA84F",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  2013
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "6px",
                  }}
                >
                  Category label (project card)
                </p>
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: "Inter, sans-serif", color: "#2FA84F" }}
                >
                  Telecom Infrastructure
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "6px",
                  }}
                >
                  Client pill (clients page)
                </p>
                <span
                  className="px-5 py-3 rounded-full text-sm font-medium border inline-block"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#374151",
                    borderColor: "#D1D5DB",
                    backgroundColor: "#fff",
                  }}
                >
                  Union Bank Plc
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginBottom: "6px",
                  }}
                >
                  Accent divider line
                </p>
                <div
                  className="w-16 h-1 rounded"
                  style={{ backgroundColor: "#2FA84F" }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    color: "#9CA3AF",
                    marginTop: "4px",
                  }}
                >
                  w-16 h-1 rounded · #2FA84F
                </p>
              </div>
            </div>
          </div>

          {/* Status / Feedback */}
          <div>
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
              Status & Feedback Badges
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Success",
                  bg: "rgba(34,197,94,0.1)",
                  border: "rgba(34,197,94,0.25)",
                  text: "#22C55E",
                  icon: CheckCircle,
                },
                {
                  label: "Error",
                  bg: "rgba(239,68,68,0.08)",
                  border: "rgba(239,68,68,0.25)",
                  text: "#EF4444",
                  icon: AlertCircle,
                },
                {
                  label: "Warning",
                  bg: "rgba(234,179,8,0.1)",
                  border: "rgba(234,179,8,0.3)",
                  text: "#CA8A04",
                  icon: AlertTriangle,
                },
                {
                  label: "Info",
                  bg: "rgba(59,130,246,0.08)",
                  border: "rgba(59,130,246,0.25)",
                  text: "#3B82F6",
                  icon: Info,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: s.bg,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  <s.icon
                    size={15}
                    style={{ color: s.text, marginTop: "1px", flexShrink: 0 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        color: s.text,
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.65rem",
                        color: s.text,
                        opacity: 0.8,
                      }}
                    >
                      Sample message for {s.label.toLowerCase()} state
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
}


