import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { COMPANY } from "../../constants/company";
import { SEO } from "../components/SEO";
import { PAGE_METADATA } from "../seo/pageMetadata";
import { HeroSection } from "./_requestQuoteComponents/HeroSection";
import { QuoteForm } from "./_requestQuoteComponents/QuoteForm";
import { SidebarInfo } from "./_requestQuoteComponents/SidebarInfo";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-().]{10,}$/;

function validateQuoteForm(form: FormState): string {
  if (form.fullName.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }

  if (!EMAIL_RE.test(form.email)) {
    return "Please enter a valid email address.";
  }

  if (!PHONE_RE.test(form.phone)) {
    return "Please enter a valid phone number (at least 10 digits).";
  }

  if (!form.serviceType) {
    return "Please select the type of service you need.";
  }

  if (form.projectLocation.trim().length < 3) {
    return "Please enter your project location.";
  }

  if (form.description.trim().length < 20) {
    return "Please describe your project (at least 20 characters).";
  }

  return "";
}

export function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectLocation: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateQuoteForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

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
          to_name: COMPANY.shortName,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      setSubmitted(true);
      trackEvent("quote_form_submit", "engagement", "Request a Quote");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("[Quote form]", message);
      setError(
        `Failed to submit your request. Please try again or reach us directly at ${COMPANY.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError("");
    setForm({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceType: "",
      projectLocation: "",
      budget: "",
      description: "",
    });
  };

  return (
    <div>
      <SEO
        title={PAGE_METADATA.requestQuote.title}
        description={PAGE_METADATA.requestQuote.description}
        path={PAGE_METADATA.requestQuote.path}
      />

      <HeroSection />

      <section className="py-20 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <QuoteForm
                submitted={submitted}
                sending={sending}
                error={error}
                form={form}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onReset={handleReset}
              />
            </div>
            <div>
              <SidebarInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
