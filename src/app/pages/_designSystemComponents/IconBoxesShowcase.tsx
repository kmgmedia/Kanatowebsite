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

      <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Large (48×48) — Service Card",
              size: 48,
              iconSize: 22,
              variants: [
                { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Default" },
                { bg: "#F26B21", icon: "#fff", label: "Hover" },
                { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Orange tint" },
              ],
            },
            {
              label: "Medium (44×44) — Industry Card",
              size: 44,
              iconSize: 20,
              variants: [
                { bg: "rgba(242,107,33,0.1)", icon: "#F26B21", label: "Orange light" },
                { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Blue light" },
                { bg: "#123A6F", icon: "#fff", label: "Solid blue" },
              ],
            },
            {
              label: "Small (40×40) — Contact / Sidebar",
              size: 40,
              iconSize: 18,
              variants: [
                { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Orange warm" },
                { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Blue cool" },
                { bg: "rgba(37,211,102,0.1)", icon: "#25D366", label: "WhatsApp" },
              ],
            },
            {
              label: "XSmall (36×36) — Trust Bar",
              size: 36,
              iconSize: 16,
              variants: [
                { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Award" },
                { bg: "rgba(18,58,111,0.15)", icon: "#123A6F", label: "Blue" },
                { bg: "rgba(239,68,68,0.1)", icon: "#EF4444", label: "Error" },
              ],
            },
          ].map((group, gi) => (
            <div key={gi}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                {group.label}
              </p>
              <div className="flex flex-col gap-4">
                {group.variants.map((v, vi) => (
                  <div key={vi} className="flex items-center gap-3">
                    <div
                      className="rounded flex items-center justify-center shrink-0"
                      style={{ width: group.size, height: group.size, backgroundColor: v.bg }}
                    >
                      <Zap size={group.iconSize} style={{ color: v.icon }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>
                        {v.label}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>bg: {v.bg}</p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>icon: {v.icon}</p>
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
