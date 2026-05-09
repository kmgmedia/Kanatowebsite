// ============================================================
// EmailJS Configuration for Kanato Engineering Resources
// ------------------------------------------------------------
// HOW TO SET UP:
// 1. Go to https://www.emailjs.com and create a free account.
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy the Service ID.
// 3. Create TWO Email Templates (one for Contact, one for Quote):
//      Contact template variables : {{from_name}}, {{from_email}},
//                                   {{phone}}, {{subject}}, {{message}}
//      Quote template variables   : {{from_name}}, {{company_name}},
//                                   {{from_email}}, {{phone}},
//                                   {{service_type}}, {{project_location}},
//                                   {{budget}}, {{description}}
// 4. Copy each Template ID and paste in your .env.local file.
// 5. Go to Account → API Keys and copy your Public Key to .env.local.
// ============================================================

export const EMAILJS_CONFIG = {
  /** Your EmailJS Public Key  –  Account > API Keys */
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",

  /** Service ID  –  Email Services > your connected service */
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",

  /** Template ID for the Contact Us page form */
  CONTACT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || "",

  /** Template ID for the Request a Quote page form */
  QUOTE_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || "",
};


