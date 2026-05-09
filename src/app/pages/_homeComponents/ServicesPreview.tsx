import { Link } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "./data";

export function ServicesPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#2FA84F",
              fontWeight: 600,
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "#3B52A5",
            }}
          >
            Our Core Engineering Services
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded"
            style={{ backgroundColor: "#2FA84F" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-7 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: "#E5E7EB", backgroundColor: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors group-hover:bg-[var(--color-primary)]"
                style={{ backgroundColor: "rgba(59,82,165,0.1)" }}
              >
                <service.icon
                  size={22}
                  className="transition-colors group-hover:text-white"
                  style={{ color: "#3B52A5" }}
                />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  color: "#3B52A5",
                  fontSize: "1rem",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
              >
                {service.description}
              </p>
              <Link
                to={service.path}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ fontFamily: "Inter, sans-serif", color: "#2FA84F" }}
              >
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "#3B52A5",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}


