import { useState } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { SEO } from "../components/SEO";

const HERO_IMG =
  "https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3JrZXJzJTIwc2l0ZXxlbnwxfHx8fDE3NzUyMTEzODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          subject: form.subject,
          message: form.message,
          to_name: "Kanato Engineering Resources",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      setSubmitted(true);
      trackEvent("contact_form_submit", "engagement", "Contact Us");
    } catch {
      setError(
        "Failed to send your message. Please try again or reach us directly at kanato4reel@yahoo.com.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us — Get in Touch with Kanato Engineering"
        description="Contact Kanato Engineering Resources Nig. Ltd. — call 08096691601, email kanato4reel@yahoo.com, or visit our office at Suite 7, Carol Plaza, Iyana Ipaja, Lagos. We respond within hours."
        path="/contact"
      />
      {/* HERO */}
      <section className="relative flex items-center" style={{ paddingTop: "110px", paddingBottom: "70px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,40,80,0.95) 0%, rgba(18,58,111,0.85) 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded mb-4"
            style={{ backgroundColor: "rgba(242,107,33,0.2)", border: "1px solid rgba(242,107,33,0.4)" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}>
              Get in Touch
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
            Let's Discuss Your{" "}
            <span style={{ color: "#F26B21" }}>Engineering Project</span>
          </h1>
          <p
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.75)", maxWidth: "520px" }}
          >
            Reach our team directly. We're available to answer your questions, provide technical guidance, and discuss project requirements.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ backgroundColor: "#123A6F" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["08096691601", "08033201366", "08023945686", "08055799998"],
                href: "tel:08096691601",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["kanato4reel@yahoo.com"],
                href: "mailto:kanato4reel@yahoo.com",
              },
              {
                icon: MapPin,
                title: "Head Office",
                lines: ["Suite 7, Carol Plaza,", "29-39 Alimosho Road,", "Iyana Ipaja, Lagos."],
                href: null,
              },
              {
                icon: MapPin,
                title: "Branch Office",
                lines: ["10, Oyewole Close,", "Baruwa B/Stop,", "Ipaja, Lagos."],
                href: null,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(242,107,33,0.2)" }}
                >
                  <card.icon size={18} style={{ color: "#F26B21" }} />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}
                >
                  {card.title}
                </h3>
                <div className="space-y-0.5">
                  {card.lines.map((line, j) =>
                    card.href ? (
                      <a
                        key={j}
                        href={card.href}
                        className="block text-sm transition-colors hover:text-orange-300"
                        style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)" }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={j}
                        className="text-sm"
                        style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)" }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* CONTACT FORM */}
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
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90"
                    style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                      onChange={handleChange}
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

            {/* ADDITIONAL INFO */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden shadow-sm"
                style={{ height: "300px", border: "1px solid #E5E7EB" }}
              >
                <iframe
                  title="Kanato Engineering Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.648!2d3.2890!3d6.6012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9216dffe2d71%3A0x9e5fef6b7b1e9c45!2sAlimosho%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Business hours */}
              <div
                className="bg-white rounded-xl p-6 shadow-sm"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} style={{ color: "#123A6F" }} />
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.9rem" }}>
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}>{h.day}</span>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: h.day === "Sunday" ? "#EF4444" : "#123A6F",
                          fontWeight: 600,
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2348096691601?text=Hello%20Kanato%20Engineering%2C%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Chat on WhatsApp
                  </p>
                  <p
                    className="text-white/80 text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Get a fast response from our team
                  </p>
                </div>
                <ArrowRight size={18} className="text-white ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#123A6F" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#fff" }}
          >
            Need an Immediate Quote?
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", maxWidth: "400px", margin: "0 auto 2rem" }}
          >
            Use our quote request form for a detailed project assessment.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            Request a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}