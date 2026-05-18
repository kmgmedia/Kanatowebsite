import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { COMPANY } from "../../constants/company";
import { PageCTA } from "../components/marketing/PageCTA";
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(form: ContactFormState): string {
  if (form.name.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }

  if (!EMAIL_RE.test(form.email)) {
    return "Please enter a valid email address.";
  }

  if (form.subject.trim().length < 3) {
    return "Please enter a subject (at least 3 characters).";
  }

  if (form.message.trim().length < 10) {
    return "Please describe how we can help you (at least 10 characters).";
  }

  return "";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateContactForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

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
          to_name: COMPANY.shortName,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      setSubmitted(true);
      trackEvent("contact_form_submit", "engagement", "Contact Us");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("[Contact form]", message);
      setError(
        `Failed to send your message. Please try again or reach us directly at ${COMPANY.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError("");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch with Kanato Engineering"
        description={`Contact ${COMPANY.name} - call ${COMPANY.phone.primary}, email ${COMPANY.email}, or visit our head office at ${COMPANY.addresses.headOffice.full} We respond within hours.`}
        path="/contact"
      />
      <HeroSection />
      <ContactInfoCards />

      <section className="py-20 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
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

      <PageCTA
        title="Need an Immediate Quote?"
        description="Use our quote request form for a detailed project assessment."
        primaryAction={{ href: "/request-quote", label: "Get a Quote" }}
      />
    </div>
  );
}
