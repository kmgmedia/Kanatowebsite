import { CheckCircle, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { serviceOptions, budgetRanges } from "./data";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectLocation: string;
  budget: string;
  description: string;
}

interface QuoteFormProps {
  submitted: boolean;
  sending: boolean;
  error: string;
  form: FormState;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onReset: () => void;
}

export function QuoteForm({
  submitted,
  sending,
  error,
  form,
  onSubmit,
  onChange,
  onReset,
}: QuoteFormProps) {
  if (submitted) {
    return (
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
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            color: "#3B52A5",
            fontSize: "1.5rem",
          }}
        >
          Quote Request Submitted!
        </h2>
        <p
          className="mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            maxWidth: "400px",
            margin: "0 auto 1.5rem",
          }}
        >
          Thank you, <strong>{form.fullName}</strong>. Our engineering team has
          received your request and will respond within 24 hours.
        </p>
        <p
          className="text-sm mb-8"
          style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
        >
          For urgent inquiries, call us directly at{" "}
          <a
            href="tel:08096691601"
            style={{ color: "#2FA84F", fontWeight: 600 }}
          >
            08096691601
          </a>
        </p>
        <button
          onClick={onReset}
          className="px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
          style={{
            backgroundColor: "#3B52A5",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-xl p-8 shadow-sm"
      style={{ border: "1px solid #E5E7EB" }}
    >
      <h2
        className="mb-2"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          color: "#3B52A5",
          fontSize: "1.25rem",
        }}
      >
        Project Quote Request
      </h2>
      <p
        className="mb-7 text-sm"
        style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
      >
        All fields marked with * are required.
      </p>

      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <div
            className="flex items-start gap-3 p-4 rounded-lg"
            style={{
              backgroundColor: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
            }}
          >
            <AlertCircle
              size={16}
              className="shrink-0 mt-0.5"
              style={{ color: "#EF4444" }}
            />
            <p
              className="text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "#EF4444" }}
            >
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
              onChange={onChange}
              placeholder="John Adeyemi"
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all focus:ring-2"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: "#1F2937",
              }}
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
              onChange={onChange}
              placeholder="XYZ Construction Ltd."
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: "#1F2937",
              }}
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
              onChange={onChange}
              placeholder="john@company.com"
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: "#1F2937",
              }}
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
              onChange={onChange}
              placeholder="0800 000 0000"
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: "#1F2937",
              }}
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
              onChange={onChange}
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: form.serviceType ? "#1F2937" : "#9CA3AF",
              }}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
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
              onChange={onChange}
              placeholder="Lagos, Abuja, Ibadan..."
              className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#D1D5DB",
                color: "#1F2937",
              }}
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
            onChange={onChange}
            className="w-full px-4 py-3 rounded border text-sm outline-none transition-all"
            style={{
              fontFamily: "Inter, sans-serif",
              borderColor: "#D1D5DB",
              color: form.budget ? "#1F2937" : "#9CA3AF",
            }}
          >
            <option value="">Select a budget range...</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
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
            onChange={onChange}
            placeholder="Please describe your project — scope, timeline, special requirements..."
            className="w-full px-4 py-3 rounded border text-sm outline-none transition-all resize-none"
            style={{
              fontFamily: "Inter, sans-serif",
              borderColor: "#D1D5DB",
              color: "#1F2937",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full py-4 rounded text-sm font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "#2FA84F",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
          }}
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
  );
}


