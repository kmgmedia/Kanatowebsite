import { CheckCircle } from "lucide-react";
import { SectionHeader, Divider } from "./helpers";

export function FormElementsShowcase() {
  return (
    <>
      <SectionHeader
        label="Components"
        title="Form Elements"
        desc="All input, select, textarea, and form layout styles used in Contact and Request Quote pages."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-white rounded-xl p-8" style={{ border: "1px solid #E5E7EB" }}>
          <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "20px" }}>
            Input Fields
          </h3>
          <div className="space-y-5">
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Text Input (default)
              </p>
              <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Adeyemi"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Text Input (focus state)
              </p>
              <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Email Address *
              </label>
              <input
                type="email"
                defaultValue="john@company.com"
                className="w-full px-4 py-3 rounded border text-sm outline-none ring-2"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#123A6F", color: "#1F2937", boxShadow: "0 0 0 2px rgba(18,58,111,0.2)" }}
              />
            </div>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Select Dropdown
              </p>
              <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Type of Service Needed *
              </label>
              <select className="w-full px-4 py-3 rounded border text-sm outline-none" style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}>
                <option>Electrical Installation</option>
                <option>Civil Engineering Works</option>
                <option>Mechanical Installation</option>
              </select>
            </div>
            <div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Textarea
              </p>
              <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Project Description *
              </label>
              <textarea
                rows={3}
                placeholder="Please describe your project..."
                className="w-full px-4 py-3 rounded border text-sm outline-none resize-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
          </div>
        </div>

        {/* Error & Success States */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>
              Error & Validation States
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Phone Number *
              </label>
              <input
                type="tel"
                defaultValue="invalid"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#EF4444", color: "#1F2937", boxShadow: "0 0 0 2px rgba(239,68,68,0.15)" }}
              />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#EF4444", marginTop: "4px" }}>
                Please enter a valid phone number.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "16px" }}>
              Success State (Post-Submit)
            </h3>
            <div className="rounded-xl p-8 text-center" style={{ border: "1px solid #E5E7EB" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
                <CheckCircle size={32} style={{ color: "#22C55E" }} />
              </div>
              <h2 className="mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#123A6F", fontSize: "1.2rem" }}>
                Quote Request Submitted!
              </h2>
              <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", fontSize: "0.875rem" }}>
                Our engineering team will respond within 24 hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6" style={{ border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem", marginBottom: "12px" }}>
              Form Container Specs
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "Container BG: #FFFFFF",
                "Label: Inter 600 text-sm #374151",
                "Input padding: px-4 py-3",
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
    </>
  );
}
