import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "linear-gradient(90deg, rgba(18,26,56,0.98) 0%, rgba(30,45,97,0.97) 52%, rgba(44,63,129,0.96) 100%)"
          : "linear-gradient(90deg, rgba(15,24,53,0.94) 0%, rgba(30,45,97,0.93) 55%, rgba(59,82,165,0.9) 100%)",
        boxShadow: scrolled ? "0 12px 30px rgba(8,14,33,0.32)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--color-accent)" }} className="py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white text-xs font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            RC 666713 | Est. 23rd July 1991
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:08096691601"
              className="text-white text-xs font-medium flex items-center gap-1 transition-colors hover:text-white/80"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={12} />
              08096691601
            </a>
            <a
              href="mailto:kanato4reel@yahoo.com"
              className="text-white text-xs font-medium transition-colors hover:text-white/80"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              kanato4reel@yahoo.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="Kanato Engineering home">
          <BrandLogo onDark imageClassName="h-9 sm:h-11" />
        </Link>

        {/* Desktop Links */}
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
                className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive ? "var(--color-primary-light)" : "rgba(255,255,255,0.9)",
                  borderBottom: isActive ? "2px solid var(--color-accent)" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/request-quote"
            className="ml-4 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden"
          style={{ backgroundColor: "var(--color-secondary)", borderTop: "1px solid rgba(255,255,255,0.1)" }}
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
                  className="px-4 py-3 text-sm font-medium rounded transition-colors"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: isActive ? "var(--color-primary-light)" : "rgba(255,255,255,0.9)",
                    backgroundColor: isActive ? "rgba(var(--color-primary-rgb), 0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/request-quote"
              className="mt-3 px-5 py-3 rounded text-sm font-semibold text-center transition-all"
              style={{ backgroundColor: "var(--color-primary)", color: "#fff", fontFamily: "Inter, sans-serif" }}
            >
              Request a Quote
            </Link>
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <a
                href="tel:08096691601"
                className="flex items-center gap-2 text-xs text-white/70"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Phone size={12} />
                08096691601
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


