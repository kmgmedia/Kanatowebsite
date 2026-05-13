import type { FormEvent, ChangeEvent } from "react";
import { CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  submitted: boolean;
  sending: boolean;
  error: string;
  form: ContactFormState;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onReset: () => void;
}

const inputClass =
  "w-full px-4 py-3 rounded border border-grey-border text-sm text-gray-800 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass = "block text-xs font-semibold mb-1.5 text-gray-700";

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
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
      <h2 className="mb-2 font-heading font-bold text-secondary text-xl">
        Send Us a Message
      </h2>
      <p className="mb-7 text-sm text-muted">
        We typically respond within a few hours on business days.
      </p>

      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-success" />
          </div>
          <h3 className="mb-2 font-heading font-bold text-secondary">
            Message Sent!
          </h3>
          <p className="text-sm mb-5 text-muted">
            Thank you for reaching out. We'll be in touch shortly.
          </p>
          <button
            onClick={onReset}
            className="px-5 py-2.5 rounded text-sm font-semibold bg-secondary text-white hover:opacity-90"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
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
              <label htmlFor="contact-name" className={labelClass}>
                Your Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                value={form.name}
                onChange={onChange}
                placeholder="John Adeyemi"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email Address *
              </label>
              <input
                id="contact-email"
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
              <label htmlFor="contact-phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="080 0000 0000"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className={labelClass}>
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                minLength={3}
                value={form.subject}
                onChange={onChange}
                placeholder="e.g. Electrical Installation Inquiry"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="How can we help you?"
              className={`${inputClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3.5 rounded text-sm font-semibold bg-primary text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
