import { Link } from "react-router";
import { Phone, Mail, MapPin, ArrowRight, Download } from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { BrandLogo } from "./BrandLogo";
import { COMPANY } from "../../constants/company";

const CORPORATE_PROFILE_PDF = "/kanato-corporate-profile.pdf";

const socialLinks = [
  { label: "Facebook", href: COMPANY.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: COMPANY.social.instagram, icon: InstagramIcon },
  { label: "TikTok", href: COMPANY.social.tiktok, icon: MusicNoteIcon },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "Electrical Installation",
  "Mechanical Installation",
  "Civil Engineering Works",
  "Maintenance & Servicing",
  "Material Supply",
  "Telecom Infrastructure",
  "Power/Energy Solutions",
];

export function Footer() {
  return (
    <footer className="bg-secondary-dark">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link to="/" aria-label={`${COMPANY.shortName} home`} className="inline-flex">
                <BrandLogo onDark imageClassName="h-14" />
              </Link>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-white/60">
              Delivering trusted electrical, mechanical, and civil solutions since 1991.
            </p>
            <div className="flex items-center gap-2 text-xs mb-5 text-white/40">
              <span>{COMPANY.rc}</span>
              <span>|</span>
              <span>Est. {COMPANY.foundingYear}</span>
            </div>
            <div className="mb-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] font-heading font-bold text-white/50">
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white transition-all hover:-translate-y-0.5"
                  >
                    <social.icon fontSize="small" />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={CORPORATE_PROFILE_PDF}
              download="Kanato-Engineering-Corporate-Profile.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-primary text-white text-[0.78rem] font-semibold transition-all hover:opacity-90"
            >
              <Download size={14} />
              Download Company Profile
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-5 text-sm uppercase tracking-widest font-heading font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
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
            <h4 className="text-white mb-5 text-sm uppercase tracking-widest font-heading font-bold">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
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
            <h4 className="text-white mb-5 text-sm uppercase tracking-widest font-heading font-bold">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-xs mb-1 uppercase tracking-wider font-heading font-semibold text-accent">
                    Head Office
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">
                    {COMPANY.addresses.headOffice.full}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-xs mb-1 uppercase tracking-wider font-heading font-semibold text-accent">
                    Branch Office
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">
                    {COMPANY.addresses.branch.full}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5 text-accent" />
                <div className="space-y-1">
                  {[COMPANY.phone.primary, COMPANY.phone.secondary].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="shrink-0 mt-0.5 text-accent" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-accent py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-medium">
            Need a trusted engineering partner for your next project?
          </p>
          <Link
            to="/request-quote"
            className="px-6 py-2.5 rounded text-sm font-semibold bg-white text-secondary transition-all hover:opacity-90 whitespace-nowrap"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 px-4 text-center bg-secondary-deep border-t border-white/[0.05]">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. | {COMPANY.rc}
        </p>
      </div>
    </footer>
  );
}
