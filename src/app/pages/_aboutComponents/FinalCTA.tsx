import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <h2
          className="mb-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            color: "#123A6F",
          }}
        >
          Ready to Work with a Trusted Engineering Partner?
        </h2>
        <p
          className="mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#6B7280",
            maxWidth: "450px",
            margin: "0 auto 2rem",
          }}
        >
          Let's discuss your project and deliver the engineering solution your
          needs deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/request-quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: "#F26B21",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Request a Quote
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all"
            style={{
              backgroundColor: "#fff",
              color: "#123A6F",
              border: "1px solid #123A6F",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
