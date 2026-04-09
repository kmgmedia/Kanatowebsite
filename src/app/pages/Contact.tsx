import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { SEO } from "../components/SEO";
import { HeroSection } from "./_contactComponents/HeroSection";
import { ContactInfoCards } from "./_contactComponents/ContactInfoCards";
import { ContactForm } from "./_contactComponents/ContactForm";
import { MapAndInfo } from "./_contactComponents/MapAndInfo";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<ContactFormState>({
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

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <SEO
        title="Contact Us — Get in Touch with Kanato Engineering"
        description="Contact Kanato Engineering Resources Nig. Ltd. — call 08096691601, email kanato4reel@yahoo.com, or visit our office at Suite 7, Carol Plaza, Iyana Ipaja, Lagos. We respond within hours."
        path="/contact"
      />
      <HeroSection />
      <ContactInfoCards />
      
      {/* FORM + MAP */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm
              submitted={submitted}
              sending={sending}
              error={error}
              form={form}
              onSubmit={handleSubmit}
              onChange={handleChange}
              onReset={handleReset}
            />
            <MapAndInfo />
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
          <a
            href="/request-quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            Get a Quote →
          </a>
        </div>
      </section>
    </div>
  );
}
