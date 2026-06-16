import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { COMPANY } from "../../constants/company";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll lock + focus trap + Escape key when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("kanato-scroll-lock");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("kanato-scroll-lock");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 motion-reduce:transition-none ${
        scrolled ? "navbar-scrolled" : "navbar-default"
      }`}
    >
      {/* Top bar */}
      <div className="bg-accent py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white text-xs font-medium">
            {COMPANY.rc} | Est. {COMPANY.founded}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone.primary}`}
              className="text-white text-xs font-medium flex items-center gap-1 transition-colors hover:text-white/80"
            >
              <Phone size={12} />
              {COMPANY.phone.primary}
            </a>
            <a
              href={`mailto:${COMPANY.emailMailto}`}
              className="text-white text-xs font-medium transition-colors hover:text-white/80"
            >
              {COMPANY.emailDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={() => setIsOpen(false)} aria-label={`${COMPANY.shortName} home`}>
          <BrandLogo onDark imageClassName="h-9 sm:h-11" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded border-b-2 ${
                  isActive
                    ? "text-primary-light border-accent"
                    : "text-white/90 border-transparent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/request-quote"
            className="ml-4 px-5 py-2.5 rounded text-sm font-semibold bg-primary text-white transition-all hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        {isOpen ? (
          <button
            ref={toggleRef}
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            aria-expanded="true"
            aria-controls="mobile-menu"
          >
            <X size={24} />
          </button>
        ) : (
          <button
            ref={toggleRef}
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden bg-secondary border-t border-white/10"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "text-primary-light bg-primary/10"
                      : "text-white/90 bg-transparent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/request-quote"
              className="mt-3 px-5 py-3 rounded text-sm font-semibold text-center bg-primary text-white transition-all hover:opacity-90"
            >
              Request a Quote
            </Link>
            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href={`tel:${COMPANY.phone.primary}`}
                className="flex items-center gap-2 text-xs text-white/70"
              >
                <Phone size={12} />
                {COMPANY.phone.primary}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
