import { Link } from "react-router";
import { Phone, Mail, MapPin, ArrowRight, Download } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { BrandLogo } from "./BrandLogo";

// ============================================================
// Corporate Profile PDF Download
// ------------------------------------------------------------
// 1. Place your PDF file inside the /public folder of the project,
//    e.g. /public/kanato-corporate-profile.pdf
// 2. The href below will then serve it at the correct URL.
// ============================================================
const CORPORATE_PROFILE_PDF = "/kanato-corporate-profile.pdf";
const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: MusicNoteIcon,
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-secondary-dark)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link to="/" aria-label="Kanato Engineering home" className="inline-flex">
                <BrandLogo onDark imageClassName="h-14" />
              </Link>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
            >
              Delivering trusted electrical, mechanical, and civil solutions since 1991.
            </p>
            <div
              className="flex items-center gap-2 text-xs mb-5"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}
            >
              <span>RC 666713</span>
              <span>|</span>
              <span>Est. 1991</span>
            </div>
            <div className="mb-5">
              <p
                className="mb-3 text-xs uppercase tracking-[0.22em]"
                style={{ fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.5)", fontWeight: 700 }}
              >
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "#fff",
                    }}
                  >
                    <social.icon fontSize="small" />
                  </a>
                ))}
              </div>
            </div>

            {/* Corporate Profile Download */}
            <a
              href={CORPORATE_PROFILE_PDF}
              download="Kanato-Engineering-Corporate-Profile.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
              }}
            >
              <Download size={14} />
              Download Company Profile
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Clients", path: "/clients" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                  >
                    <ArrowRight size={12} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Electrical Installation",
                "Mechanical Installation",
                "Civil Engineering Works",
                "Maintenance & Servicing",
                "Material Supply",
                "Telecom Infrastructure",
                "Power/Energy Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                  >
                    <ArrowRight size={12} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#fff" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent)" }}
                />
                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, color: "var(--color-accent)" }}
                  >
                    Head Office
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                  >
                    10, Oyewole Close, Baruwa B/Stop, Ipaja, Lagos.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent)" }}
                />
                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, color: "var(--color-accent)" }}
                  >
                    Branch Office
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                  >
                    Suite 7, Carol Plaza, 29-39 Alimosho Road, Alimosho, Iyana Ipaja, Lagos.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }} />
                <div className="space-y-1">
                  {["08096691601", "08033201366"].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-sm transition-colors hover:text-white"
                      style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }} />
                <a
                  href="mailto:kanato4reel@yahoo.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
                >
                  kanato4reel@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ backgroundColor: "var(--color-accent)" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white text-sm font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Need a trusted engineering partner for your next project?
          </p>
          <Link
            to="/request-quote"
            className="px-6 py-2.5 rounded text-sm font-semibold transition-all hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#fff", color: "var(--color-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="py-4 px-4 text-center"
        style={{ backgroundColor: "var(--color-secondary-deep)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.4)" }}
        >
          © {new Date().getFullYear()} Kanato Engineering Resources Nig. Ltd. All rights reserved. | RC 666713
        </p>
      </div>
    </footer>
  );
}


