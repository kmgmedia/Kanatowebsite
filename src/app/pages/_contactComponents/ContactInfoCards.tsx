import { contactCards } from "./data";
import { COMPANY } from "../../../constants/company";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const socialLinks = [
  { label: "Facebook", href: COMPANY.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: COMPANY.social.instagram, icon: InstagramIcon },
  { label: "TikTok", href: COMPANY.social.tiktok, icon: MusicNoteIcon },
];

export function ContactInfoCards() {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <div key={i} className="rounded-xl p-5 bg-white/[0.08]">
              <div className="w-10 h-10 rounded flex items-center justify-center mb-4 bg-primary/20">
                <card.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-white mb-3 font-heading font-bold text-[0.85rem]">
                {card.title}
              </h3>
              <div className="space-y-0.5">
                {card.lines.map((line, j) =>
                  card.href ? (
                    <a
                      key={j}
                      href={card.href}
                      className="block text-sm text-white/70 transition-colors hover:text-primary-light"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-sm text-white/70">
                      {line}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl px-5 py-4 sm:px-6 bg-white/[0.08]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] font-heading font-bold text-white/55">
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
                  <social.icon fontSize="small" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
