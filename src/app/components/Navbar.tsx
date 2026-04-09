import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";

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
        backgroundColor: scrolled ? "#0d2d57" : "rgba(18, 58, 111, 0.97)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Top bar */}
      <div style={{ backgroundColor: "#F26B21" }} className="py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white text-xs font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            RC 666713 | Est. 23rd July 1991
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:08096691601"
              className="text-white text-xs font-medium flex items-center gap-1 hover:text-orange-100 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={12} />
              08096691601
            </a>
            <a
              href="mailto:kanato4reel@yahoo.com"
              className="text-white text-xs font-medium hover:text-orange-100 transition-colors"
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
        <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
          <span
            className="text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}
          >
            KANATO
          </span>
          <span
            className="leading-none"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "0.6rem",
              color: "#F26B21",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Engineering Resources Nig. Ltd.
          </span>
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
                  color: isActive ? "#F26B21" : "rgba(255,255,255,0.9)",
                  borderBottom: isActive ? "2px solid #F26B21" : "2px solid transparent",
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
              backgroundColor: "#F26B21",
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
          style={{ backgroundColor: "#123A6F", borderTop: "1px solid rgba(255,255,255,0.1)" }}
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
                    color: isActive ? "#F26B21" : "rgba(255,255,255,0.9)",
                    backgroundColor: isActive ? "rgba(242,107,33,0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/request-quote"
              className="mt-3 px-5 py-3 rounded text-sm font-semibold text-center transition-all"
              style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
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
