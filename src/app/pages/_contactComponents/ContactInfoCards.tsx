import { Facebook, Instagram, Music2 } from "lucide-react";
import { COMPANY } from "../../../constants/company";
import { contactCards } from "./data";

const socialLinks = [
  { label: "Facebook", href: COMPANY.social.facebook, icon: Facebook },
  { label: "Instagram", href: COMPANY.social.instagram, icon: Instagram },
  { label: "TikTok", href: COMPANY.social.tiktok, icon: Music2 },
];

export function ContactInfoCards() {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.title} className="rounded-xl bg-white/[0.08] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary/20">
                <card.icon size={18} className="text-primary" />
              </div>
              <h3 className="mb-3 text-[0.85rem] font-bold text-white">
                {card.title}
              </h3>
              <div className="space-y-0.5">
                {card.lines.map((line) =>
                  card.href ? (
                    <a
                      key={line}
                      href={card.href}
                      className="block text-sm text-white/70 transition-colors hover:text-primary-light"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-white/70">
                      {line}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/[0.08] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Social Media
              </p>
              <p className="mt-1 text-sm text-white/[0.72]">
                Follow Kanato for updates and project highlights.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/[0.18] text-white transition-all hover:-translate-y-0.5"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
