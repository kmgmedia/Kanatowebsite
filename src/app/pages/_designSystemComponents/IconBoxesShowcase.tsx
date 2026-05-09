import { Zap } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function IconBoxesShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Icon Boxes"
        desc="Icon container sizes, background fills, and color combinations used throughout the site."
      />

      <div
        className="bg-white rounded-xl p-8"
        style={{ border: "1px solid #E5E7EB" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Large (48×48) — Service Card",
              size: 48,
              iconSize: 22,
              variants: [
                {
                  bg: "rgba(59,82,165,0.1)",
                  icon: "#3B52A5",
                  label: "Default",
                },
                { bg: "#2FA84F", icon: "#fff", label: "Hover" },
                {
                  bg: "rgba(47,168,79,0.2)",
                  icon: "#2FA84F",
                  label: "Orange tint",
                },
              ],
            },
            {
              label: "Medium (44×44) — Industry Card",
              size: 44,
              iconSize: 20,
              variants: [
                {
                  bg: "rgba(47,168,79,0.1)",
                  icon: "#2FA84F",
                  label: "Orange light",
                },
                {
                  bg: "rgba(59,82,165,0.1)",
                  icon: "#3B52A5",
                  label: "Blue light",
                },
                { bg: "#3B52A5", icon: "#fff", label: "Solid blue" },
              ],
            },
            {
              label: "Small (40×40) — Contact / Sidebar",
              size: 40,
              iconSize: 18,
              variants: [
                {
                  bg: "rgba(47,168,79,0.2)",
                  icon: "#2FA84F",
                  label: "Orange warm",
                },
                {
                  bg: "rgba(59,82,165,0.1)",
                  icon: "#3B52A5",
                  label: "Blue cool",
                },
                {
                  bg: "rgba(37,211,102,0.1)",
                  icon: "#25D366",
                  label: "WhatsApp",
                },
              ],
            },
            {
              label: "XSmall (36×36) — Trust Bar",
              size: 36,
              iconSize: 16,
              variants: [
                { bg: "rgba(47,168,79,0.2)", icon: "#2FA84F", label: "Award" },
                { bg: "rgba(59,82,165,0.15)", icon: "#3B52A5", label: "Blue" },
                { bg: "rgba(239,68,68,0.1)", icon: "#EF4444", label: "Error" },
              ],
            },
          ].map((group, gi) => (
            <div key={gi}>
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
                {group.label}
              </p>
              <div className="flex flex-col gap-4">
                {group.variants.map((v, vi) => (
                  <div key={vi} className="flex items-center gap-3">
                    <div
                      className="rounded flex items-center justify-center shrink-0"
                      style={{
                        width: group.size,
                        height: group.size,
                        backgroundColor: v.bg,
                      }}
                    >
                      <Zap size={group.iconSize} style={{ color: v.icon }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.72rem",
                          color: "#374151",
                        }}
                      >
                        {v.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.6rem",
                          color: "#9CA3AF",
                        }}
                      >
                        bg: {v.bg}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.6rem",
                          color: "#9CA3AF",
                        }}
                      >
                        icon: {v.icon}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />
    </>
  );
}


