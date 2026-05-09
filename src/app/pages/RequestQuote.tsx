import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../lib/emailjs.config";
import { trackEvent } from "../../hooks/useAnalytics";
import { SEO } from "../components/SEO";
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
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

  const handleReset = () => {
    setSubmitted(false);
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
        title="Request a Quote — Free Engineering Project Assessment"
        description="Request a free, no-obligation engineering quote from Kanato Engineering. We cover Electrical, Mechanical, Civil, Telecom, Power & Energy projects. Get a detailed response within 24 hours."
        path="/request-quote"
      />

      <HeroSection />

      {/* FORM + INFO */}
      <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* FORM */}
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

            {/* SIDEBAR INFO */}
            <div>
              <SidebarInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


