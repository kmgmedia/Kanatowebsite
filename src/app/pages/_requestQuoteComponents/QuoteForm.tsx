import type { FormEvent, ChangeEvent } from "react";
import { CheckCircle, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { serviceOptions, budgetRanges } from "./data";
import { COMPANY } from "../../../constants/company";

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
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onReset: () => void;
}

const inputClass =
  "w-full px-4 py-3 rounded border border-grey-border text-sm text-gray-800 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass = "block text-sm font-semibold mb-1.5 text-gray-700";

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
      <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-200">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-success" />
        </div>
        <h2 className="mb-3 font-heading font-extrabold text-secondary text-2xl">
          Quote Request Submitted!
        </h2>
        <p className="text-muted max-w-sm mx-auto mb-6">
          Thank you, <strong>{form.fullName}</strong>. Our engineering team has
          received your request and will respond within 24 hours.
        </p>
        <p className="text-sm text-muted mb-8">
          For urgent inquiries, call us directly at{" "}
          <a href={`tel:${COMPANY.phone.primary}`} className="text-primary font-semibold">
            {COMPANY.phone.primary}
          </a>
        </p>
        <button
          onClick={onReset}
          className="px-6 py-3 rounded text-sm font-semibold bg-secondary text-white transition-all hover:opacity-90"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
      <h2 className="mb-2 font-heading font-bold text-secondary text-xl">
        Project Quote Request
      </h2>
      <p className="mb-7 text-sm text-muted">All fields marked with * are required.</p>

      <form onSubmit={onSubmit} className="space-y-6" noValidate>
        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="flex items-start gap-3 p-4 rounded-lg bg-error/[0.08] border border-error/25"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-error" />
            <p className="text-sm text-error">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-fullName" className={labelClass}>Full Name *</label>
            <input
              id="quote-fullName"
              name="fullName"
              type="text"
              required
              minLength={2}
              value={form.fullName}
              onChange={onChange}
              placeholder="John Adeyemi"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="quote-companyName" className={labelClass}>Company Name</label>
            <input
              id="quote-companyName"
              name="companyName"
              type="text"
              value={form.companyName}
              onChange={onChange}
              placeholder="XYZ Construction Ltd."
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="quote-email" className={labelClass}>Email Address *</label>
            <input
              id="quote-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
              placeholder="john@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className={labelClass}>Phone Number *</label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={onChange}
              placeholder="0800 000 0000"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="quote-serviceType" className={labelClass}>Type of Service Needed *</label>
            <select
              id="quote-serviceType"
              name="serviceType"
              required
              value={form.serviceType}
              onChange={onChange}
              className={`${inputClass} ${!form.serviceType ? "text-gray-400" : "text-gray-800"}`}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-projectLocation" className={labelClass}>Project Location *</label>
            <input
              id="quote-projectLocation"
              name="projectLocation"
              type="text"
              required
              value={form.projectLocation}
              onChange={onChange}
              placeholder="Lagos, Abuja, Ibadan..."
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-budget" className={labelClass}>Estimated Project Budget (Optional)</label>
          <select
            id="quote-budget"
            name="budget"
            value={form.budget}
            onChange={onChange}
            className={`${inputClass} ${!form.budget ? "text-gray-400" : "text-gray-800"}`}
          >
            <option value="">Select a budget range...</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-description" className={labelClass}>Project Description *</label>
          <textarea
            id="quote-description"
            name="description"
            required
            minLength={20}
            rows={5}
            value={form.description}
            onChange={onChange}
            placeholder="Please describe your project — scope, timeline, special requirements..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full py-4 rounded text-sm font-semibold bg-primary text-white transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
