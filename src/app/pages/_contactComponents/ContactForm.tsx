import { CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";

interface ContactFormProps {
  submitted: boolean;
  sending: boolean;
  error: string;
  form: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onReset: () => void;
}

export function ContactForm({
  submitted,
  sending,
  error,
  form,
  onSubmit,
  onChange,
  onReset,
}: ContactFormProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm" style={{ border: "1px solid #E5E7EB" }}>
      <h2
        className="mb-2"
        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "1.25rem" }}
      >
        Send Us a Message
      </h2>
      <p
        className="mb-7 text-sm"
        style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
      >
        We typically respond within a few hours on business days.
      </p>

      {submitted ? (
        <div className="text-center py-10">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "rgba(34,197,94,0.1)" }}
          >
            <CheckCircle size={32} style={{ color: "#22C55E" }} />
          </div>
          <h3
            className="mb-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F" }}
          >
            Message Sent!
          </h3>
          <p
            className="text-sm mb-5"
            style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
          >
            Thank you for reaching out. We'll be in touch shortly.
          </p>
          <button
            onClick={onReset}
            className="px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90"
            style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
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
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Your Name *
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                placeholder="John Adeyemi"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="080 0000 0000"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
                Subject *
              </label>
              <input
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={onChange}
                placeholder="e.g. Electrical Installation Inquiry"
                className="w-full px-4 py-3 rounded border text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 rounded border text-sm outline-none resize-none"
              style={{ fontFamily: "Inter, sans-serif", borderColor: "#D1D5DB", color: "#1F2937" }}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3.5 rounded text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            {sending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
