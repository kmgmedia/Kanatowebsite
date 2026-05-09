import { contactCards } from "./data";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "TikTok", href: "https://tiktok.com", icon: MusicNoteIcon },
];

export function ContactInfoCards() {
  return (
    <section style={{ backgroundColor: "#3B52A5" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(47,168,79,0.2)" }}
              >
                <card.icon size={18} style={{ color: "#2FA84F" }} />
              </div>
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#fff",
                }}
              >
                {card.title}
              </h3>
              <div className="space-y-0.5">
                {card.lines.map((line, j) =>
                  card.href ? (
                    <a
                      key={j}
                      href={card.href}
                      className="block text-sm transition-colors hover:text-[var(--color-primary-light)]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={j}
                      className="text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {line}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-8 rounded-2xl px-5 py-4 sm:px-6"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="text-xs uppercase tracking-[0.22em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.55)", fontWeight: 700 }}
              >
                Social Media
              </p>
              <p
                className="mt-1 text-sm"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.72)" }}
              >
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "rgba(47,168,79,0.18)", color: "#fff" }}
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


