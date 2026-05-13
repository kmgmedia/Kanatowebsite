const missing: string[] = [];

function requireEnv(key: string): string {
  const value = import.meta.env[key] as string | undefined;
  if (!value) missing.push(key);
  return value ?? "";
}

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: requireEnv("VITE_EMAILJS_PUBLIC_KEY"),
  SERVICE_ID: requireEnv("VITE_EMAILJS_SERVICE_ID"),
  CONTACT_TEMPLATE_ID: requireEnv("VITE_EMAILJS_CONTACT_TEMPLATE_ID"),
  QUOTE_TEMPLATE_ID: requireEnv("VITE_EMAILJS_QUOTE_TEMPLATE_ID"),
};

if (import.meta.env.DEV && missing.length > 0) {
  console.warn(
    `[EmailJS] Missing environment variable(s): ${missing.join(", ")}.\n` +
      "Copy .env.example to .env and fill in your EmailJS credentials.\n" +
      "Form submissions will fail until these are set.",
  );
}
