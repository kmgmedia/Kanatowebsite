import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://images.unsplash.com/photo-1734184451009-e21cacf54f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGluZnJhc3RydWN0dXJlJTIwTmlnZXJpYXxlbnwxfHx8fDE3NzUyMTEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const serviceOptions = [
  "Civil Engineering Works",
  "Electrical Installation",
  "Mechanical Installation",
  "Maintenance & Servicing",
  "Supply of Engineering Materials",
  "Telecom Infrastructure Support",
  "Power & Energy Solutions",
  "Multiple Services",
  "Other",
];

export function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectLocation: "",
    budget: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.QUOTE_TEMPLATE_ID,
        {
          from_name: form.fullName,
          company_name: form.companyName || "Not provided",
          from_email: form.email,
          phone: form.phone,
          service_type: form.serviceType,
          project_location: form.projectLocation,
          budget: form.budget || "Not specified",
          description: form.description,
          to_name: "Kanato Engineering Resources",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      setSubmitted(true);
      trackEvent("quote_form_submit", "engagement", "Request a Quote");
    } catch {
      setError(
        "Failed to submit your request. Please try again or reach us directly at kanato4reel@yahoo.com.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <SEO
        title="Request a Quote — Free Engineering Project Assessment"
        description="Request a free, no-obligation engineering quote from Kanato Engineering. We cover Electrical, Mechanical, Civil, Telecom, Power & Energy projects. Get a detailed response within 24 hours."
        path="/request-quote"
      />
      {/* HERO */}
      <section className="relative flex items-center" style={{ paddingTop: "110px", paddingBottom: "70px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,40,80,0.95) 0%, rgba(18,58,111,0.85) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Request a Quote</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>
              Get a Quote
            </span>
          </div>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              maxWidth: "650px",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Tell Us About Your{" "}
            <span style={{ color: "#F26B21" }}>Engineering Project</span>
          </h1>
          <p
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.75)", maxWidth: "520px" }}
          >
            Fill out the form below and our engineering team will review your requirements and respond within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* FORM */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="bg-white rounded-xl p-12 text-center shadow-sm"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "rgba(34,197,94,0.1)" }}
                  >
                    <CheckCircle size={40} style={{ color: "#22C55E" }} />
                  </div>
                  <h2
                    className="mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#123A6F", fontSize: "1.5rem" }}
                  >
                    Quote Request Submitted!
                  </h2>
                  <p
                    className="mb-6"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", maxWidth: "400px", margin: "0 auto 1.5rem" }}
                  >
                    Thank you, <strong>{form.fullName}</strong>. Our engineering team has received your request and will respond within 24 hours.
                  </p>
                  <p
                    className="text-sm mb-8"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                  >
                    For urgent inquiries, call us directly at{" "}
                    <a href="tel:08096691601" style={{ color: "#F26B21", fontWeight: 600 }}>
                      08096691601
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ fullName: "", companyName: "", email: "", phone: "", serviceType: "", projectLocation: "", budget: "", description: "" });
                    }}
                    className="px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <div
                  className="bg-white rounded-xl p-8 shadow-sm"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  <h2
                    className="mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "1.25rem" }}
                  >
                    Project Quote Request
                  </h2>
                  <p
                    className="mb-7 text-sm"
                    style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                  >
                    All fields marked with * are required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div
                        className="flex items-start gap-3 p-4 rounded-lg"
                        style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
                      >
                        <AlertCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                        <p className="text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#EF4444" }}>
                          {error}
                        </p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Full Name *
                        </label>
                        <input
                          name="fullName"
                          type="text"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="John Adeyemi"
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all focus:ring-2"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Company Name
                        </label>
                        <input
                          name="companyName"
                          type="text"
                          value={form.companyName}
                          onChange={handleChange}
                          placeholder="XYZ Construction Ltd."
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Phone Number *
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0800 000 0000"
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                        />
                      </div>

                      {/* Service Type */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Type of Service Needed *
                        </label>
                        <select
                          name="serviceType"
                          required
                          value={form.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: form.serviceType ? "#1F2937" : "#9CA3AF" }}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Project Location */}
                      <div>
                        <label
                          className="block text-sm font-semibold mb-1.5"
                          style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                        >
                          Project Location *
                        </label>
                        <input
                          name="projectLocation"
                          type="text"
                          required
                          value={form.projectLocation}
                          onChange={handleChange}
                          placeholder="Lagos, Abuja, Ibadan..."
                          className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                          style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                      >
                        Estimated Project Budget (Optional)
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
                        style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: form.budget ? "#1F2937" : "#9CA3AF" }}
                      >
                        <option value="">Select a budget range...</option>
                        <option value="Below ₦1M">Below ₦1,000,000</option>
                        <option value="₦1M - ₦5M">₦1,000,000 – ₦5,000,000</option>
                        <option value="₦5M - ₦20M">₦5,000,000 – ₦20,000,000</option>
                        <option value="₦20M - ₦50M">₦20,000,000 – ₦50,000,000</option>
                        <option value="Above ₦50M">Above ₦50,000,000</option>
                        <option value="To be determined">To be determined</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1.5"
                        style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                      >
                        Project Description *
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Please describe your project — scope, timeline, special requirements..."
                        className="w-full px-4 py-3 rounded border text-sm outline-none transition-all resize-none"
                        style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 rounded text-sm font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
                    >
                      {sending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Quote Request
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* SIDEBAR INFO */}
            <div className="space-y-6">
              {/* Quick contact */}
              <div
                className="bg-white rounded-xl p-6 shadow-sm"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <h3
                  className="mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.95rem" }}
                >
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:08096691601"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(18,58,111,0.1)" }}
                    >
                      <Phone size={16} style={{ color: "#123A6F" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif", color: "#374151" }}>
                        Call Us
                      </p>
                      <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                        08096691601 / 08033201366
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:kanato4reel@yahoo.com"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(242,107,33,0.1)" }}
                    >
                      <Mail size={16} style={{ color: "#F26B21" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif", color: "#374151" }}>
                        Email Us
                      </p>
                      <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                        kanato4reel@yahoo.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/2348096691601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(37,211,102,0.1)" }}
                    >
                      <MessageCircle size={16} style={{ color: "#25D366" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif", color: "#374151" }}>
                        WhatsApp
                      </p>
                      <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}>
                        Chat with our team
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Why choose */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "#123A6F" }}
              >
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}
                >
                  Why Request From Kanato?
                </h3>
                <div className="space-y-3">
                  {[
                    "Free, no-obligation project consultation",
                    "Detailed quote within 24 hours",
                    "Professional assessment by our engineers",
                    "Transparent pricing, no hidden costs",
                    "33+ years of engineering expertise",
                    "Nationwide project delivery",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: "#F26B21" }} />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.8)" }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div
                className="rounded-xl p-5 text-center"
                style={{ backgroundColor: "#F26B21" }}
              >
                <p
                  className="text-white text-3xl font-black mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  24hrs
                </p>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Average quote response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}