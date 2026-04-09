import { Menu } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function NavigationShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Navigation"
        desc="Navbar structure, states, mobile menu, and footer CTA section specifications."
      />

      <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid #E5E7EB" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", padding: "12px 16px", backgroundColor: "#F5F7FA", borderBottom: "1px solid #E5E7EB" }}>
          Navbar Preview
        </p>
        <div style={{ backgroundColor: "rgba(18, 58, 111, 0.97)" }}>
          <div style={{ backgroundColor: "#F26B21" }} className="py-1.5 px-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <span className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>RC 666713 | Est. 23rd July 1991</span>
              <span className="text-white text-xs flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>08096691601</span>
            </div>
          </div>
          <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between py-4">
            <div className="flex flex-col">
              <span className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
                KANATO
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.6rem", color: "#F26B21", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Engineering Resources
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-1">
              {["Home", "About Us", "Services"].map((link, i) => (
                <span key={link} className="px-4 py-2 text-sm rounded" style={{ fontFamily: "Inter, sans-serif", color: i === 1 ? "#F26B21" : "rgba(255,255,255,0.9)", borderBottom: i === 1 ? "2px solid #F26B21" : "2px solid transparent", fontWeight: 500 }}>
                  {link}
                </span>
              ))}
              <span className="ml-4 px-5 py-2.5 rounded text-sm font-semibold" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}>
                Request
              </span>
            </div>
            <button className="lg:hidden text-white p-2">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </div>

      {/* Navbar specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          {
            title: "Top Bar",
            specs: ["BG: #F26B21", "Text: white · text-xs · Inter", "Height: py-1.5", "Content: RC · phone"],
          },
          {
            title: "Main Nav",
            specs: ["BG: rgba(18,58,111,0.97)", "Position: fixed top-0 z-50", "Links: Inter 500 text-sm", "Active: #F26B21 + border-bottom"],
          },
          {
            title: "Mobile Menu",
            specs: ["BG: #123A6F", "Active bg: rgba(242,107,33,0.1)", "Active text: #F26B21", "Closes on route"],
          },
        ].map((col) => (
          <div key={col.title} className="bg-white rounded-xl p-5" style={{ border: "1px solid #E5E7EB" }}>
            <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.85rem", marginBottom: "10px" }}>
              {col.title}
            </h4>
            <div className="flex flex-col gap-1.5">
              {col.specs.map((s) => (
                <div key={s} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: "#F26B21" }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#6B7280" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </>
  );
}
