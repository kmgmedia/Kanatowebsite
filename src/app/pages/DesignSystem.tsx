import {
  Zap,
  Building2,
  Settings,
  Wrench,
  Package,
  Radio,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Award,
  Users,
  MapPin,
  Shield,
  Download,
  Phone,
  Mail,
  Menu,
  X,
  AlertCircle,
  Info,
  AlertTriangle,
} from "lucide-react";

// ─── COLOR PALETTES ────────────────────────────────────────────────────────────

const primaryColors = [
  { shade: "50",  hex: "#E8EEF7", rgb: "232, 238, 247" },
  { shade: "100", hex: "#C6D4E9", rgb: "198, 212, 233" },
  { shade: "200", hex: "#9FB8D8", rgb: "159, 184, 216" },
  { shade: "300", hex: "#6E96C1", rgb: "110, 150, 193" },
  { shade: "400", hex: "#4A7BB2", rgb: "74, 123, 178" },
  { shade: "500", hex: "#123A6F", rgb: "18, 58, 111", base: true },
  { shade: "600", hex: "#0f3260", rgb: "15, 50, 96" },
  { shade: "700", hex: "#0d2d57", rgb: "13, 45, 87" },
  { shade: "800", hex: "#0a2347", rgb: "10, 35, 71" },
  { shade: "900", hex: "#071a35", rgb: "7, 26, 53" },
];

const secondaryColors = [
  { shade: "50",  hex: "#FEF0E7", rgb: "254, 240, 231" },
  { shade: "100", hex: "#FDD9C0", rgb: "253, 217, 192" },
  { shade: "200", hex: "#FBC095", rgb: "251, 192, 149" },
  { shade: "300", hex: "#F8A469", rgb: "248, 164, 105" },
  { shade: "400", hex: "#F47D3A", rgb: "244, 125, 58" },
  { shade: "500", hex: "#F26B21", rgb: "242, 107, 33", base: true },
  { shade: "600", hex: "#D45C18", rgb: "212, 92, 24" },
  { shade: "700", hex: "#B54D14", rgb: "181, 77, 20" },
  { shade: "800", hex: "#963E10", rgb: "150, 62, 16" },
  { shade: "900", hex: "#772F0C", rgb: "119, 47, 12" },
];

const textColors = [
  { shade: "50",  hex: "#F9FAFB", rgb: "249, 250, 251" },
  { shade: "100", hex: "#F3F4F6", rgb: "243, 244, 246" },
  { shade: "200", hex: "#E5E7EB", rgb: "229, 231, 235" },
  { shade: "300", hex: "#D1D5DB", rgb: "209, 213, 219" },
  { shade: "400", hex: "#9CA3AF", rgb: "156, 163, 175" },
  { shade: "500", hex: "#6B7280", rgb: "107, 114, 128", base: true },
  { shade: "600", hex: "#4B5563", rgb: "75, 85, 99" },
  { shade: "700", hex: "#374151", rgb: "55, 65, 81" },
  { shade: "800", hex: "#1F2937", rgb: "31, 41, 55" },
  { shade: "900", hex: "#111827", rgb: "17, 24, 39" },
];

const neutralColors = [
  { shade: "50",  hex: "#FAFAFA", rgb: "250, 250, 250" },
  { shade: "100", hex: "#F5F7FA", rgb: "245, 247, 250" },
  { shade: "200", hex: "#EAECF0", rgb: "234, 236, 240" },
  { shade: "300", hex: "#D1D5DB", rgb: "209, 213, 219" },
  { shade: "400", hex: "#B0B7C3", rgb: "176, 183, 195" },
  { shade: "500", hex: "#8A94A6", rgb: "138, 148, 166", base: true },
  { shade: "600", hex: "#6B7280", rgb: "107, 114, 128" },
  { shade: "700", hex: "#4B5563", rgb: "75, 85, 99" },
  { shade: "800", hex: "#374151", rgb: "55, 65, 81" },
  { shade: "900", hex: "#1F2937", rgb: "31, 41, 55" },
];

const feedbackColors = [
  { shade: "50",  hex: "#F0FDF4", rgb: "240, 253, 244" },
  { shade: "100", hex: "#DCFCE7", rgb: "220, 252, 231" },
  { shade: "200", hex: "#BBF7D0", rgb: "187, 247, 208" },
  { shade: "300", hex: "#86EFAC", rgb: "134, 239, 172" },
  { shade: "400", hex: "#4ADE80", rgb: "74, 222, 128" },
  { shade: "500", hex: "#22C55E", rgb: "34, 197, 94", base: true },
  { shade: "600", hex: "#16A34A", rgb: "22, 163, 74" },
  { shade: "700", hex: "#15803D", rgb: "21, 128, 61" },
  { shade: "800", hex: "#166534", rgb: "22, 101, 52" },
  { shade: "900", hex: "#14532D", rgb: "20, 83, 45" },
];

const errorColors = [
  { shade: "50",  hex: "#FEF2F2", rgb: "254, 242, 242" },
  { shade: "100", hex: "#FEE2E2", rgb: "254, 226, 226" },
  { shade: "200", hex: "#FECACA", rgb: "254, 202, 202" },
  { shade: "300", hex: "#FCA5A5", rgb: "252, 165, 165" },
  { shade: "400", hex: "#F87171", rgb: "248, 113, 113" },
  { shade: "500", hex: "#EF4444", rgb: "239, 68, 68", base: true },
  { shade: "600", hex: "#DC2626", rgb: "220, 38, 38" },
  { shade: "700", hex: "#B91C1C", rgb: "185, 28, 28" },
  { shade: "800", hex: "#991B1B", rgb: "153, 27, 27" },
  { shade: "900", hex: "#7F1D1D", rgb: "127, 29, 29" },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

function ColorSwatch({ shade, hex, rgb, base }: { shade: string; hex: string; rgb: string; base?: boolean }) {
  const light = isLight(hex);
  return (
    <div className="flex items-stretch rounded overflow-hidden" style={{ border: base ? "2px solid #F26B21" : "1px solid #E5E7EB", minHeight: "44px" }}>
      <div className="w-12 shrink-0" style={{ backgroundColor: hex }} />
      <div className="px-3 py-2 flex-1 flex flex-col justify-center" style={{ backgroundColor: "#fff" }}>
        <div className="flex items-center gap-1.5">
          <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#1F2937" }}>
            {shade}
          </span>
          {base && (
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", backgroundColor: "#F26B21", color: "#fff", padding: "1px 5px", borderRadius: "2px", fontWeight: 600 }}>
              BASE
            </span>
          )}
        </div>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#6B7280" }}>{hex}</span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", color: "#9CA3AF" }}>rgb({rgb})</span>
      </div>
      <div className="w-8 shrink-0 flex items-center justify-center" style={{ backgroundColor: hex }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.55rem", color: light ? "#374151" : "#fff", fontWeight: 600 }}>
          {shade}
        </span>
      </div>
    </div>
  );
}

function PaletteColumn({ title, colors }: { title: string; colors: typeof primaryColors }) {
  return (
    <div className="min-w-0">
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#9CA3AF", marginBottom: "4px" }}>{title}</p>
      <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#1F2937", marginBottom: "12px" }}>{title}</h3>
      <div className="flex flex-col gap-1.5">
        {colors.map((c) => (
          <ColorSwatch key={c.shade} {...c} />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mb-10">
      <p className="uppercase tracking-widest text-xs mb-2" style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}>{label}</p>
      <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#123A6F", marginBottom: desc ? "8px" : "0" }}>{title}</h2>
      {desc && <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "0.9rem", maxWidth: "560px" }}>{desc}</p>}
      <div className="w-12 h-1 rounded mt-4" style={{ backgroundColor: "#F26B21" }} />
    </div>
  );
}

function Divider() {
  return <div className="my-16" style={{ borderTop: "1px solid #E5E7EB" }} />;
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export function DesignSystem() {
  return (
    <div style={{ backgroundColor: "#F5F7FA", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: "#0d2d57", paddingTop: "100px", paddingBottom: "60px" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4" style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}>
            <span style={{ fontFamily: "Inter, sans-serif", color: "#F26B21", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Design System</span>
          </div>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
            Kanato Engineering <span style={{ color: "#F26B21" }}>Style Guide</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", maxWidth: "560px", fontSize: "0.975rem" }}>
            All colors, typography, buttons, cards, badges, form elements, and UI patterns used across the Kanato Engineering website.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: "Brand Colors", value: "2 palettes" },
              { label: "Typography", value: "2 fonts" },
              { label: "Button Variants", value: "5 styles" },
              { label: "Card Types", value: "6 types" },
              { label: "Form Elements", value: "4 inputs" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#F26B21" }}>{s.value}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">

        {/* ── 1. COLOR PALETTES ── */}
        <SectionHeader label="Foundation" title="Color Palettes" desc="Full 10-shade palettes for every color category used in the design system." />

        <div className="overflow-x-auto pb-4">
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(6, minmax(180px, 1fr))", minWidth: "1100px" }}>
            <PaletteColumn title="Primary-color" colors={primaryColors} />
            <PaletteColumn title="Secondery-color" colors={secondaryColors} />
            <PaletteColumn title="Text-color" colors={textColors} />
            <PaletteColumn title="Neutral-color" colors={neutralColors} />
            <PaletteColumn title="Feedback-color" colors={feedbackColors} />
            <PaletteColumn title="Error-color" colors={errorColors} />
          </div>
        </div>

        <Divider />

        {/* ── 2. TYPOGRAPHY ── */}
        <SectionHeader label="Foundation" title="Typography" desc="Montserrat for headings and Inter for body text — the two typefaces used throughout the site." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Montserrat */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#123A6F", fontSize: "1rem" }}>Montserrat — Headings</h3>
              <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: "rgba(18,58,111,0.08)", color: "#123A6F", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Display / Heading</span>
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
                    color: "#123A6F",
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
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#123A6F", fontSize: "1rem" }}>Inter — Body & UI</h3>
              <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: "rgba(242,107,33,0.1)", color: "#F26B21", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Body / UI</span>
            </div>
            <div className="space-y-5">
              {[
                { label: "Body Large", size: "clamp(1rem, 2vw, 1.15rem)", weight: 400, color: "#4B5563", sample: "We deliver dependable electrical, mechanical, and civil engineering solutions backed by experience." },
                { label: "Body Regular", size: "1rem", weight: 400, color: "#4B5563", sample: "Kanato Engineering Resources Nigeria Limited was incorporated in 1991." },
                { label: "Body Small", size: "0.875rem", weight: 400, color: "#6B7280", sample: "Suite 7, Carol Plaza, 29-39 Alimosho Road, Iyana Ipaja, Lagos." },
                { label: "UI Medium (semibold)", size: "0.875rem", weight: 600, color: "#374151", sample: "Request a Quote" },
                { label: "UI Small", size: "0.875rem", weight: 500, color: "#F26B21", sample: "Learn more →" },
                { label: "Caption / Meta", size: "0.75rem", weight: 400, color: "#9CA3AF", sample: "Client: Union Bank Plc · Lagos · 2001" },
                { label: "Micro / Footer", size: "0.75rem", weight: 400, color: "rgba(255,255,255,0.4)", bg: "#0d2d57", sample: "© 2025 Kanato Engineering Resources Nig. Ltd. All rights reserved." },
                { label: "Tag / Badge", size: "0.75rem", weight: 600, color: "#F26B21", upper: true, sample: "Telecom Infrastructure" },
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

        {/* ── 3. BUTTONS ── */}
        <SectionHeader label="Components" title="Buttons" desc="All button variants used across the site with size scales and state styles." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Button Variants */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "20px" }}>Variants</h3>
            <div className="flex flex-col gap-5">
              {/* Primary Orange */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Primary CTA (Orange)</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:opacity-90" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    Request a Quote <ArrowRight size={18} />
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    Work With Us <ArrowRight size={16} />
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    Get a Quote
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { label: "BG", value: "#F26B21" },
                    { label: "Text", value: "#FFFFFF" },
                    { label: "Hover", value: "opacity 0.9" },
                    { label: "Radius", value: "4px (rounded)" },
                    { label: "Font", value: "Inter 600" },
                  ].map((p) => (
                    <span key={p.label} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "#F5F7FA", fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                      <strong style={{ color: "#374151" }}>{p.label}:</strong> {p.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Secondary Blue */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Secondary (Blue)</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:opacity-90" style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    Learn More <ArrowRight size={18} />
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    About Us <ArrowRight size={16} />
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    Explore
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { label: "BG", value: "#123A6F" },
                    { label: "Text", value: "#FFFFFF" },
                    { label: "Hover", value: "opacity 0.9" },
                  ].map((p) => (
                    <span key={p.label} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "#F5F7FA", fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                      <strong style={{ color: "#374151" }}>{p.label}:</strong> {p.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outline Ghost */}
              <div className="rounded-lg p-4" style={{ backgroundColor: "#123A6F" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Outline / Ghost (on dark bg)</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    View Our Services
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    See Projects
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { label: "BG", value: "transparent" },
                    { label: "Border", value: "2px solid rgba(255,255,255,0.6)" },
                    { label: "Hover", value: "rgba(255,255,255,0.1)" },
                  ].map((p) => (
                    <span key={p.label} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "rgba(255,255,255,0.1)", fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}>
                      <strong style={{ color: "#fff" }}>{p.label}:</strong> {p.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inverse */}
              <div className="rounded-lg p-4" style={{ backgroundColor: "#F26B21" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Inverse (White on Orange — Footer CTA)</p>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm transition-all hover:opacity-90" style={{ backgroundColor: "#fff", color: "#F26B21", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  Request a Quote
                </button>
              </div>

              {/* Download */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Download Button</p>
                <a className="inline-flex items-center gap-2 px-4 py-2.5 rounded transition-all hover:opacity-90" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600 }}>
                  <Download size={14} /> Download Company Profile
                </a>
              </div>
            </div>
          </div>

          {/* Button States & Sizes */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "20px" }}>Size Scale & States</h3>

            {/* Sizes */}
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Size Scale (Orange Primary)</p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { label: "XL", px: "px-10 py-5", size: "1.05rem", desc: "px-10 py-5 · Hero CTA" },
                { label: "LG", px: "px-8 py-4", size: "1rem", desc: "px-8 py-4 · Section CTA" },
                { label: "MD", px: "px-6 py-3", size: "0.875rem", desc: "px-6 py-3 · General" },
                { label: "SM", px: "px-5 py-2.5", size: "0.875rem", desc: "px-5 py-2.5 · Navbar" },
                { label: "XS", px: "px-4 py-2", size: "0.8rem", desc: "px-4 py-2 · Tags" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", width: "24px" }}>{s.label}</span>
                  <button
                    className={`inline-flex items-center gap-2 ${s.px} rounded transition-all hover:opacity-90`}
                    style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: s.size }}
                  >
                    Request a Quote
                  </button>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF" }}>{s.desc}</span>
                </div>
              ))}
            </div>

            {/* States */}
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>States</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded text-sm" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Default</button>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#6B7280" }}>Normal state</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded text-sm" style={{ backgroundColor: "#D45C18", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Hover</button>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#6B7280" }}>opacity: 0.9 · BG: #D45C18</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded text-sm flex items-center gap-2 opacity-60 cursor-not-allowed" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }} disabled>
                  Disabled
                </button>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#6B7280" }}>opacity: 0.6 · cursor: not-allowed</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 rounded text-sm flex items-center gap-2" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Loading…
                </button>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#6B7280" }}>Loading state · spinner icon</span>
              </div>
            </div>

            {/* Icon combinations */}
            <div className="mt-8">
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Icon Combinations</p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  Get Started <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90" style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  <Download size={16} /> Download
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90" style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  <Phone size={16} /> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 4. BADGES & LABELS ── */}
        <SectionHeader label="Components" title="Badges & Labels" desc="Eyebrow labels, category tags, status badges, and accent chips used across all pages." />

        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Eyebrow / Section Labels */}
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Eyebrow / Section Labels</p>
              <div className="flex flex-col gap-4">
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "4px" }}>On light bg</p>
                  <p className="uppercase tracking-widest text-xs" style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}>What We Do</p>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "4px" }}>Hero badge (pill)</p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded" style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}>
                    <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>Established 1991 · RC 666713</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "4px" }}>On dark bg (hero badge)</p>
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#123A6F" }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded" style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}>
                      <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>Get a Quote</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "4px" }}>Specs</p>
                  <div className="flex flex-col gap-1">
                    {["BG: rgba(242,107,33,0.2)", "Border: 1px solid rgba(242,107,33,0.4)", "Text: #F26B21", "Font: Inter · text-xs · uppercase", "Padding: px-4 py-1.5", "Radius: rounded"].map(s => (
                      <span key={s} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#6B7280" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Category & Year Tags */}
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Category & Year Tags</p>
              <div className="flex flex-col gap-4">
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "6px" }}>Project year badge</p>
                  <span className="px-3 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}>2013</span>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "6px" }}>Category label (project card)</p>
                  <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>Telecom Infrastructure</span>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "6px" }}>Client pill (clients page)</p>
                  <span className="px-5 py-3 rounded-full text-sm font-medium border inline-block" style={{ fontFamily: "Inter, sans-serif", color: "#374151", borderColor: "#D1D5DB", backgroundColor: "#fff" }}>
                    Union Bank Plc
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "6px" }}>Nav active indicator</p>
                  <div className="inline-flex items-center px-4 py-2 rounded text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21", borderBottom: "2px solid #F26B21", fontWeight: 500 }}>
                    Services
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginBottom: "6px" }}>Accent divider line</p>
                  <div className="w-16 h-1 rounded" style={{ backgroundColor: "#F26B21" }} />
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginTop: "4px" }}>w-16 h-1 rounded · #F26B21</p>
                </div>
              </div>
            </div>

            {/* Status / Feedback */}
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Status & Feedback Badges</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Success", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.25)", text: "#22C55E", icon: CheckCircle },
                  { label: "Error", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.25)", text: "#EF4444", icon: AlertCircle },
                  { label: "Warning", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)", text: "#CA8A04", icon: AlertTriangle },
                  { label: "Info", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.25)", text: "#3B82F6", icon: Info },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                    <s.icon size={15} style={{ color: s.text, marginTop: "1px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: s.text }}>{s.label}</p>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: s.text, opacity: 0.8 }}>Sample message for {s.label.toLowerCase()} state</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 5. CARDS ── */}
        <SectionHeader label="Components" title="Cards" desc="All card types and their specifications — service, project, industry, contact, sidebar, and dark cards." />

        {/* Service Cards */}
        <div className="mb-6">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Service Cards (White bg · hover lift + shadow)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "Electrical Installation", desc: "Electrical wiring, panel installation, power distribution, lighting systems, and equipment setup." },
              { icon: Settings, title: "Mechanical Installation", desc: "Mechanical systems setup, equipment installation, piping support, and building mechanical works." },
              { icon: Building2, title: "Civil Engineering Works", desc: "Structural works, site preparation, building support, and construction-related engineering services." },
            ].map((s, i) => (
              <div key={i} className="group p-7 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer" style={{ borderColor: "#E5E7EB", backgroundColor: "#fff" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-orange-500" style={{ backgroundColor: "rgba(18,58,111,0.1)" }}>
                  <s.icon size={22} className="transition-colors group-hover:text-white" style={{ color: "#123A6F" }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "1rem" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>
                  Learn more <ChevronRight size={14} />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["BG: #FFFFFF", "Border: 1px solid #E5E7EB", "Padding: p-7", "Radius: rounded-lg", "Hover: -translate-y-1 + shadow-xl", "Icon box: 48×48px · bg rgba(18,58,111,0.1) → hover #F26B21", "Title: Montserrat 700 1rem #123A6F", "Body: Inter 400 text-sm #6B7280", "Link: Inter 500 text-sm #F26B21"].map(s => (
              <span key={s} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB", fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="mb-6">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Project Cards (White bg · image top · hover scale)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Union Bank Head Office Renovation", client: "Union Bank Plc (via Tuag Nig. Ltd.)", category: "Civil & Electrical Works", location: "40 Marina, Lagos", year: "2001", color: "#4B5563" },
              { title: "Nestle Foods Office Complex", client: "Nestle Foods Nigeria, Ilupeju", category: "Extension & Renovation", location: "Ilupeju, Lagos", year: "2005", color: "#374151" },
              { title: "MTN/Etisalat Telecom Site Build", client: "Servtek / ATB Technology", category: "Telecom Infrastructure", location: "Lagos State", year: "2010", color: "#1F2937" },
            ].map((p, i) => (
              <div key={i} className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative overflow-hidden flex items-end" style={{ height: "160px", backgroundColor: p.color }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Building2 size={60} style={{ color: "#fff" }} />
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}>{p.year}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>{p.category}</div>
                  <h3 className="mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p className="text-xs mb-1" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>Client: {p.client}</p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                    <MapPin size={11} /><span style={{ fontFamily: "Inter, sans-serif" }}>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Image: 200px height object-cover", "Hover: scale-105 on image", "Year badge: #F26B21 · absolute top-left", "Category: Inter text-xs uppercase #F26B21", "Title: Montserrat 700 0.95rem #123A6F", "Body: Inter text-xs #6B7280 / #9CA3AF"].map(s => (
              <span key={s} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB", fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Industry + Dark + Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Industry */}
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Industry Card (bordered · hover orange)</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: Building2, label: "Residential & Housing", desc: "Duplexes, flats, and estate developments" },
                { icon: Radio, label: "Telecommunications", desc: "Mast installation and power-to-site" },
                { icon: Shield, label: "Government Projects", desc: "Public infrastructure and electrification" },
              ].map((ind, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-lg border transition-all hover:border-orange-400 hover:shadow-md cursor-pointer bg-white" style={{ borderColor: "#E5E7EB" }}>
                  <div className="w-11 h-11 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,107,33,0.1)" }}>
                    <ind.icon size={20} style={{ color: "#F26B21" }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem" }}>{ind.label}</h3>
                    <p className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark / Glass Contact Card */}
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Contact Info Card (dark glass · on dark bg)</p>
            <div className="rounded-xl p-5 mb-3" style={{ backgroundColor: "#0d2d57" }}>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, title: "Call Us", lines: ["08096691601", "08033201366"] },
                  { icon: Mail, title: "Email Us", lines: ["kanato4reel@yahoo.com"] },
                  { icon: MapPin, title: "Head Office", lines: ["Suite 7, Carol Plaza,", "29-39 Alimosho Road, Lagos"] },
                  { icon: MapPin, title: "Branch Office", lines: ["10, Oyewole Close,", "Baruwa B/Stop, Ipaja, Lagos"] },
                ].map((card, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                    <div className="w-9 h-9 rounded flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(242,107,33,0.2)" }}>
                      <card.icon size={16} style={{ color: "#F26B21" }} />
                    </div>
                    <h3 className="mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#fff" }}>{card.title}</h3>
                    {card.lines.map((l) => <p key={l} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>{l}</p>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose / Sidebar Card */}
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Why Choose Card (dark blue · sidebar)</p>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#123A6F" }}>
              <h3 className="mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>Why Request From Kanato?</h3>
              <div className="space-y-3">
                {[
                  "Free, no-obligation project consultation",
                  "Detailed quote within 24 hours",
                  "Professional assessment by engineers",
                  "Transparent pricing, no hidden costs",
                  "33+ years of engineering expertise",
                  "Nationwide project delivery",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#F26B21" }} />
                    <span className="text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-xl p-5 text-center" style={{ backgroundColor: "#F26B21" }}>
              <p className="text-3xl font-black mb-1" style={{ fontFamily: "Montserrat, sans-serif", color: "#fff" }}>24hrs</p>
              <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}>Average quote response time</p>
            </div>
          </div>
        </div>

        {/* Trust Bar / Stats */}
        <div className="mb-6">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>Stats / Trust Bar (on primary blue)</p>
          <div className="rounded-xl p-8" style={{ backgroundColor: "#123A6F" }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, value: "33+", label: "Years of Experience" },
                { icon: Users, value: "100+", label: "Projects Delivered" },
                { icon: MapPin, value: "Nigeria", label: "Nationwide Coverage" },
                { icon: Shield, value: "RC 666713", label: "Fully Registered" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,107,33,0.2)" }}>
                    <stat.icon size={22} style={{ color: "#F26B21" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#fff" }}>{stat.value}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Icon box: 48×48px · rgba(242,107,33,0.2)", "Icon: 22px · #F26B21", "Value: Montserrat 700 1.35rem white", "Label: Inter text-sm rgba(255,255,255,0.65)"].map(s => (
              <span key={s} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB", fontFamily: "Inter, sans-serif", color: "#6B7280" }}>{s}</span>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 6. ICON BOXES ── */}
        <SectionHeader label="Components" title="Icon Boxes" desc="Icon container sizes, background fills, and color combinations used throughout the site." />

        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Large (48×48) — Service Card", size: 48, iconSize: 22,
                variants: [
                  { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Default" },
                  { bg: "#F26B21", icon: "#fff", label: "Hover" },
                  { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Orange tint" },
                ],
              },
              {
                label: "Medium (44×44) — Industry Card", size: 44, iconSize: 20,
                variants: [
                  { bg: "rgba(242,107,33,0.1)", icon: "#F26B21", label: "Orange light" },
                  { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Blue light" },
                  { bg: "#123A6F", icon: "#fff", label: "Solid blue" },
                ],
              },
              {
                label: "Small (40×40) — Contact / Sidebar", size: 40, iconSize: 18,
                variants: [
                  { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Orange warm" },
                  { bg: "rgba(18,58,111,0.1)", icon: "#123A6F", label: "Blue cool" },
                  { bg: "rgba(37,211,102,0.1)", icon: "#25D366", label: "WhatsApp" },
                ],
              },
              {
                label: "XSmall (36×36) — Trust Bar", size: 36, iconSize: 16,
                variants: [
                  { bg: "rgba(242,107,33,0.2)", icon: "#F26B21", label: "Award" },
                  { bg: "rgba(18,58,111,0.15)", icon: "#123A6F", label: "Blue" },
                  { bg: "rgba(239,68,68,0.1)", icon: "#EF4444", label: "Error" },
                ],
              },
            ].map((group, gi) => (
              <div key={gi}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>{group.label}</p>
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
                        <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>{v.label}</p>
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

        {/* ── 7. FORM ELEMENTS ── */}
        <SectionHeader label="Components" title="Form Elements" desc="All input, select, textarea, and form layout styles used in Contact and Request Quote pages." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "20px" }}>Input Fields</h3>
            <div className="space-y-5">
              {/* Default */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Text Input (default)</p>
                <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>Full Name *</label>
                <input type="text" placeholder="John Adeyemi" className="w-full px-4 py-3 rounded border text-sm outline-none" style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginTop: "4px" }}>Border: 1px solid #D1D5DB · Padding: px-4 py-3 · Radius: rounded · Font: Inter text-sm</p>
              </div>
              {/* Focus */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Text Input (focus state)</p>
                <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>Email Address *</label>
                <input type="email" defaultValue="john@company.com" className="w-full px-4 py-3 rounded border text-sm outline-none ring-2" style={{ fontFamily: "Inter, sans-serif", borderColor: "#123A6F", color: "#1F2937", boxShadow: "0 0 0 2px rgba(18,58,111,0.2)" }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF", marginTop: "4px" }}>Focus: ring-2 · border #123A6F · shadow rgba(18,58,111,0.2)</p>
              </div>
              {/* Select */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Select Dropdown</p>
                <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>Type of Service Needed *</label>
                <select className="w-full px-4 py-3 rounded border text-sm outline-none" style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}>
                  <option>Electrical Installation</option>
                  <option>Civil Engineering Works</option>
                  <option>Mechanical Installation</option>
                </select>
              </div>
              {/* Textarea */}
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Textarea</p>
                <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>Project Description *</label>
                <textarea rows={3} placeholder="Please describe your project — scope, timeline, special requirements..." className="w-full px-4 py-3 rounded border text-sm outline-none resize-none" style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }} />
              </div>
            </div>
          </div>

          {/* Form Layout + Error + Success */}
          <div className="flex flex-col gap-6">
            {/* Error state */}
            <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>Error & Validation States</h3>
              <div className="space-y-4">
                <div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Error Input</p>
                  <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>Phone Number *</label>
                  <input type="tel" defaultValue="invalid" className="w-full px-4 py-3 rounded border text-sm outline-none" style={{ fontFamily: "Inter, sans-serif", borderColor: "#EF4444", color: "#1F2937", boxShadow: "0 0 0 2px rgba(239,68,68,0.15)" }} />
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#EF4444", marginTop: "4px" }}>Please enter a valid phone number.</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
                  <AlertCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                  <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#EF4444" }}>Failed to submit your request. Please try again or reach us at kanato4reel@yahoo.com.</p>
                </div>
              </div>
            </div>

            {/* Success state */}
            <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>Success State (Post-Submit)</h3>
              <div className="rounded-xl p-8 text-center" style={{ border: "1px solid #E5E7EB" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
                  <CheckCircle size={32} style={{ color: "#22C55E" }} />
                </div>
                <h2 className="mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#123A6F", fontSize: "1.2rem" }}>Quote Request Submitted!</h2>
                <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "0.875rem" }}>Our engineering team will respond within 24 hours.</p>
                <a href="tel:08096691601" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21", fontWeight: 600, fontSize: "0.875rem" }}>08096691601</a>
              </div>
            </div>

            {/* Form container spec */}
            <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "12px" }}>Form Container Specs</h3>
              <div className="flex flex-col gap-2">
                {[
                  "Container BG: #FFFFFF",
                  "Container border: 1px solid #E5E7EB",
                  "Container radius: rounded-xl",
                  "Container padding: p-8",
                  "Label: Inter 600 text-sm #374151",
                  "Input padding: px-4 py-3",
                  "Input radius: rounded",
                  "Input border: 1px solid #D1D5DB",
                  "Input focus ring: rgba(18,58,111,0.2)",
                  "Section bg: #F5F7FA",
                  "Submit btn: #F26B21 · full width · py-4",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F26B21" }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#6B7280" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 8. NAVIGATION ── */}
        <SectionHeader label="Components" title="Navigation" desc="Navbar structure, states, mobile menu, and footer layout with all their specs." />

        {/* Navbar preview */}
        <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid #E5E7EB" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", padding: "12px 16px", backgroundColor: "#F5F7FA", borderBottom: "1px solid #E5E7EB" }}>Navbar — Default state (scrolled = #0d2d57 + box-shadow)</p>
          <div style={{ backgroundColor: "rgba(18, 58, 111, 0.97)" }}>
            <div style={{ backgroundColor: "#F26B21" }} className="py-1.5 px-4">
              <div className="max-w-4xl mx-auto flex justify-between items-center">
                <span className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>RC 666713 | Est. 23rd July 1991</span>
                <div className="flex items-center gap-4">
                  <span className="text-white text-xs flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}><Phone size={11} /> 08096691601</span>
                  <span className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif" }}>kanato4reel@yahoo.com</span>
                </div>
              </div>
            </div>
            <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between py-4">
              <div className="flex flex-col">
                <span className="text-white" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>KANATO</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.6rem", color: "#F26B21", letterSpacing: "0.12em", textTransform: "uppercase" }}>Engineering Resources Nig. Ltd.</span>
              </div>
              <div className="hidden lg:flex items-center gap-1">
                {["Home", "About Us", "Services", "Projects", "Clients", "Contact"].map((link, i) => (
                  <span key={link} className="px-4 py-2 text-sm rounded" style={{ fontFamily: "Inter, sans-serif", color: i === 2 ? "#F26B21" : "rgba(255,255,255,0.9)", borderBottom: i === 2 ? "2px solid #F26B21" : "2px solid transparent", fontWeight: 500 }}>{link}</span>
                ))}
                <span className="ml-4 px-5 py-2.5 rounded text-sm font-semibold" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}>Request a Quote</span>
              </div>
              <button className="lg:hidden text-white p-2"><Menu size={24} /></button>
            </nav>
          </div>
          {/* Mobile menu */}
          <div style={{ backgroundColor: "#123A6F", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-1">
              {["Home", "About Us", "Services"].map((link, i) => (
                <span key={link} className="px-4 py-3 text-sm rounded" style={{ fontFamily: "Inter, sans-serif", color: i === 2 ? "#F26B21" : "rgba(255,255,255,0.9)", backgroundColor: i === 2 ? "rgba(242,107,33,0.1)" : "transparent", fontWeight: 500 }}>{link}</span>
              ))}
              <span className="mt-3 px-5 py-3 rounded text-sm font-semibold text-center" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}>Request a Quote</span>
            </div>
          </div>
        </div>

        {/* Navbar specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              title: "Top Bar", specs: [
                "BG: #F26B21",
                "Text: white · text-xs · Inter",
                "Height: py-1.5 (≈32px)",
                "Hidden on mobile",
                "Content: RC number + phone + email",
              ]
            },
            {
              title: "Main Nav", specs: [
                "BG default: rgba(18,58,111,0.97)",
                "BG scrolled: #0d2d57",
                "Shadow scrolled: 0 2px 20px rgba(0,0,0,0.3)",
                "Max-w-7xl · px-4 lg:px-6 · py-4",
                "Position: fixed top-0 z-50",
                "Links: Inter 500 text-sm",
                "Active: #F26B21 + border-bottom 2px",
                "CTA: #F26B21 bg · white text",
              ]
            },
            {
              title: "Mobile Menu", specs: [
                "BG: #123A6F",
                "Border-top: rgba(255,255,255,0.1)",
                "Active item bg: rgba(242,107,33,0.1)",
                "Active text: #F26B21",
                "Hamburger: Menu/X · 24px · white",
                "Closes on route change",
              ]
            },
          ].map((col) => (
            <div key={col.title} className="bg-white rounded-xl p-5" style={{ border: "1px solid #E5E7EB" }}>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.85rem", marginBottom: "10px" }}>{col.title}</h4>
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

        {/* ── 9. SECTION BACKGROUNDS ── */}
        <SectionHeader label="Foundation" title="Section Backgrounds & Layout" desc="The alternating section background pattern and layout tokens used across all pages." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Section BG order */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>Section Background Rotation</h3>
            <div className="flex flex-col gap-2">
              {[
                { section: "Hero / Page Header", bg: "Dark blue overlay on image", hex: "rgba(12,40,80,0.92) → rgba(18,58,111,0.85)" },
                { section: "Trust / Stats Bar", bg: "#123A6F", hex: "#123A6F" },
                { section: "About / Why Choose (alt)", bg: "#F5F7FA", hex: "#F5F7FA" },
                { section: "Services / Industries", bg: "#FFFFFF", hex: "#FFFFFF" },
                { section: "Why Choose / CTA sections", bg: "#123A6F", hex: "#123A6F" },
                { section: "Projects / Clients preview", bg: "#F5F7FA", hex: "#F5F7FA" },
                { section: "Footer main", bg: "#0d2d57", hex: "#0d2d57" },
                { section: "Footer CTA strip", bg: "#F26B21", hex: "#F26B21" },
                { section: "Footer bottom bar", bg: "#0a2347", hex: "#0a2347" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid #F5F7FA" }}>
                  <div className="w-8 h-8 rounded shrink-0 border" style={{ backgroundColor: row.hex.includes("rgba") ? "#0d2d57" : row.hex, borderColor: "#E5E7EB" }} />
                  <div>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>{row.section}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>{row.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Layout tokens */}
          <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>Layout Tokens</h3>
            <div className="space-y-5">
              {[
                { label: "Container max-width", value: "max-w-7xl (1280px)", note: "All sections" },
                { label: "Container padding", value: "px-4 lg:px-6", note: "Horizontal gutter" },
                { label: "Section padding (standard)", value: "py-20 (80px)", note: "Most sections" },
                { label: "Section padding (compact)", value: "py-16 (64px)", note: "Clients, compact" },
                { label: "Section padding (tight)", value: "py-10 (40px)", note: "Trust bar" },
                { label: "Card gap (grid)", value: "gap-5 to gap-6", note: "Consistent spacing" },
                { label: "Column grid", value: "1 → 2 → 3–4 cols", note: "Responsive breakpoints" },
                { label: "Heading margin-bottom", value: "mb-14 (56px)", note: "Section header spacing" },
                { label: "CTA section padding", value: "py-16 to py-20", note: "Bottom CTA sections" },
                { label: "Border radius (card)", value: "rounded-lg (8px)", note: "Standard cards" },
                { label: "Border radius (pill)", value: "rounded-full", note: "Client chips" },
                { label: "Border radius (badge)", value: "rounded (4px)", note: "Buttons, tags" },
              ].map((t) => (
                <div key={t.label} className="flex items-start justify-between gap-4 pb-3" style={{ borderBottom: "1px solid #F5F7FA" }}>
                  <div>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#374151" }}>{t.label}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6rem", color: "#9CA3AF" }}>{t.note}</p>
                  </div>
                  <span className="px-2 py-1 rounded text-xs shrink-0" style={{ backgroundColor: "rgba(18,58,111,0.08)", color: "#123A6F", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── 10. FOOTER PREVIEW ── */}
        <SectionHeader label="Components" title="Footer" desc="Footer structure, column layout, contact section, CTA strip, and bottom bar." />

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", padding: "12px 16px", backgroundColor: "#F5F7FA", borderBottom: "1px solid #E5E7EB" }}>Footer Preview</p>
          <footer style={{ backgroundColor: "#0d2d57" }}>
            <div className="max-w-4xl mx-auto px-4 py-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <span className="block" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff" }}>KANATO</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.58rem", color: "#F26B21", letterSpacing: "0.12em", textTransform: "uppercase" }}>Engineering Resources Nig. Ltd.</span>
                  <p className="text-sm leading-relaxed mt-4 mb-4" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}>A wholly indigenous engineering company delivering dependable solutions since 1991.</p>
                  <a className="inline-flex items-center gap-2 px-4 py-2.5 rounded" style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600 }}>
                    <Download size={14} /> Download Company Profile
                  </a>
                </div>
                <div>
                  <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}>Quick Links</h4>
                  <ul className="space-y-2">
                    {["Home", "About Us", "Services", "Projects", "Contact Us"].map((l) => (
                      <li key={l}><span className="flex items-center gap-2 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}><ArrowRight size={11} />{l}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}>Our Services</h4>
                  <ul className="space-y-2">
                    {["Electrical Installation", "Mechanical Installation", "Civil Engineering Works", "Telecom Infrastructure"].map((s) => (
                      <li key={s}><span className="flex items-center gap-2 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}><ArrowRight size={11} />{s}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}>Contact Us</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2"><MapPin size={14} style={{ color: "#F26B21", marginTop: "2px", flexShrink: 0 }} /><p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>Suite 7, Carol Plaza, Iyana Ipaja, Lagos.</p></div>
                    <div className="flex gap-2"><Phone size={14} style={{ color: "#F26B21", flexShrink: 0 }} /><p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>08096691601</p></div>
                    <div className="flex gap-2"><Mail size={14} style={{ color: "#F26B21", flexShrink: 0 }} /><p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>kanato4reel@yahoo.com</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#F26B21" }} className="py-4 px-4">
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm font-medium text-white" style={{ fontFamily: "Inter, sans-serif" }}>Need a trusted engineering partner for your next project?</p>
                <span className="px-6 py-2.5 rounded text-sm font-semibold" style={{ backgroundColor: "#fff", color: "#F26B21", fontFamily: "Inter, sans-serif" }}>Request a Quote</span>
              </div>
            </div>
            <div className="py-4 px-4 text-center" style={{ backgroundColor: "#0a2347", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} Kanato Engineering Resources Nig. Ltd. All rights reserved. | RC 666713</p>
            </div>
          </footer>
        </div>

        {/* Footer Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[
            { title: "Main Footer", specs: ["BG: #0d2d57", "Padding: py-16", "Grid: 1→2→4 cols · gap-10", "Column heading: Montserrat 700 · text-sm · uppercase · tracking-widest · white #fff", "Links: Inter text-sm · rgba(255,255,255,0.6)", "Link hover: text-orange-400", "Icon accent: #F26B21"] },
            { title: "CTA Strip", specs: ["BG: #F26B21", "Padding: py-6", "Layout: flex row (sm+) · justify-between", "Text: Inter text-sm · white · font-medium", "Button: #fff bg · #F26B21 text · px-6 py-2.5 · rounded · Inter 600"] },
            { title: "Bottom Bar", specs: ["BG: #0a2347", "Border-top: 1px solid rgba(255,255,255,0.05)", "Padding: py-4", "Text: Inter text-xs · rgba(255,255,255,0.4)", "Content: Copyright + RC number"] },
          ].map((col) => (
            <div key={col.title} className="bg-white rounded-xl p-5" style={{ border: "1px solid #E5E7EB" }}>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.85rem", marginBottom: "10px" }}>{col.title}</h4>
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

      </div>
    </div>
  );
}
