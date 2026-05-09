import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { whyPoints } from "./data";

export function WhyChoose() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: "#3B52A5" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="uppercase tracking-widest text-xs mb-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#2FA84F",
                fontWeight: 600,
              }}
            >
              Why Choose Us
            </p>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.25,
                color: "#fff",
              }}
            >
              Why Clients Trust Kanato for Critical Engineering Projects
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.975rem",
              }}
            >
              We deliver dependable electrical, mechanical, and civil
              engineering solutions backed by experience, professionalism, and
              quality workmanship. Our track record speaks for itself.
            </p>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#2FA84F",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Work With Us
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#2FA84F" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


