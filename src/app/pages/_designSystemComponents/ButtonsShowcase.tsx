import { ArrowRight, Download, Phone } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function ButtonsShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Buttons"
        desc="All button variants used across the site with size scales and state styles."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Button Variants */}
        <div
          className="bg-white rounded-xl p-8"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#123A6F",
              fontSize: "0.9rem",
              marginBottom: "20px",
            }}
          >
            Variants
          </h3>
          <div className="flex flex-col gap-5">
            {/* Primary Orange */}
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.65rem",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                Primary CTA (Orange)
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#F26B21",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Request a Quote <ArrowRight size={18} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#F26B21",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Work With Us <ArrowRight size={16} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#F26B21",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
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
                  <span
                    key={p.label}
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      backgroundColor: "#F5F7FA",
                      fontFamily: "Inter, sans-serif",
                      color: "#6B7280",
                    }}
                  >
                    <strong style={{ color: "#374151" }}>{p.label}:</strong>{" "}
                    {p.value}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Blue */}
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.65rem",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                Secondary (Blue)
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#123A6F",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Learn More <ArrowRight size={18} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#123A6F",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  About Us <ArrowRight size={16} />
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#123A6F",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Explore
                </button>
              </div>
            </div>

            {/* Outline Ghost */}
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: "#123A6F" }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                Outline / Ghost (on dark bg)
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded text-base transition-all hover:bg-white/10"
                  style={{
                    border: "2px solid rgba(255,255,255,0.6)",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  View Our Services
                </button>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm transition-all hover:bg-white/10"
                  style={{
                    border: "2px solid rgba(255,255,255,0.6)",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  See Projects
                </button>
              </div>
            </div>

            {/* Download */}
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.65rem",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                Download Button
              </p>
              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#F26B21",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                }}
              >
                <Download size={14} /> Download Company Profile
              </a>
            </div>
          </div>
        </div>

        {/* Button States & Sizes */}
        <div
          className="bg-white rounded-xl p-8"
          style={{ border: "1px solid #E5E7EB" }}
        >
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#123A6F",
              fontSize: "0.9rem",
              marginBottom: "20px",
            }}
          >
            Size Scale & States
          </h3>

          {/* Sizes */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.65rem",
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "10px",
            }}
          >
            Size Scale (Orange Primary)
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {[
              {
                label: "XL",
                px: "px-10 py-5",
                size: "1.05rem",
                desc: "px-10 py-5 · Hero CTA",
              },
              {
                label: "LG",
                px: "px-8 py-4",
                size: "1rem",
                desc: "px-8 py-4 · Section CTA",
              },
              {
                label: "MD",
                px: "px-6 py-3",
                size: "0.875rem",
                desc: "px-6 py-3 · General",
              },
              {
                label: "SM",
                px: "px-5 py-2.5",
                size: "0.875rem",
                desc: "px-5 py-2.5 · Navbar",
              },
              {
                label: "XS",
                px: "px-4 py-2",
                size: "0.8rem",
                desc: "px-4 py-2 · Tags",
              },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.65rem",
                    color: "#9CA3AF",
                    width: "24px",
                  }}
                >
                  {s.label}
                </span>
                <button
                  className={`inline-flex items-center gap-2 ${s.px} rounded transition-all hover:opacity-90`}
                  style={{
                    backgroundColor: "#F26B21",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: s.size,
                  }}
                >
                  Request a Quote
                </button>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.65rem",
                    color: "#9CA3AF",
                  }}
                >
                  {s.desc}
                </span>
              </div>
            ))}
          </div>

          {/* States */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.65rem",
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "10px",
            }}
          >
            States
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <button
                className="px-6 py-3 rounded text-sm"
                style={{
                  backgroundColor: "#F26B21",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Default
              </button>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  color: "#6B7280",
                }}
              >
                Normal state
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="px-6 py-3 rounded text-sm"
                style={{
                  backgroundColor: "#D45C18",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Hover
              </button>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  color: "#6B7280",
                }}
              >
                opacity: 0.9 · BG: #D45C18
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="px-6 py-3 rounded text-sm flex items-center gap-2 opacity-60 cursor-not-allowed"
                style={{
                  backgroundColor: "#F26B21",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
                disabled
              >
                Disabled
              </button>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  color: "#6B7280",
                }}
              >
                opacity: 0.6 · cursor: not-allowed
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="px-6 py-3 rounded text-sm flex items-center gap-2"
                style={{
                  backgroundColor: "#F26B21",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Loading…
              </button>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  color: "#6B7280",
                }}
              >
                Loading state · spinner icon
              </span>
            </div>
          </div>

          {/* Icon combinations */}
          <div className="mt-8">
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.65rem",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "10px",
              }}
            >
              Icon Combinations
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90"
                style={{
                  backgroundColor: "#F26B21",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Get Started <ArrowRight size={16} />
              </button>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90"
                style={{
                  backgroundColor: "#123A6F",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                <Download size={16} /> Download
              </button>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm hover:opacity-90"
                style={{
                  backgroundColor: "#123A6F",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                <Phone size={16} /> Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </>
  );
}
