import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
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
            Our Purpose
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
              color: "#3B52A5",
            }}
          >
            Vision & Mission
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-lg shadow-sm"
            style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB" }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(47,168,79,0.1)" }}
            >
              <Eye size={26} style={{ color: "#2FA84F" }} />
            </div>
            <h3
              className="mb-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#3B52A5",
                fontSize: "1.15rem",
              }}
            >
              Our Vision
            </h3>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}
            >
              To provide excellent service of Electrical, Mechanical, and Civil
              Installation and Servicing through a professional team — becoming
              a trusted engineering partner recognized for delivering efficient
              and reliable solutions across Nigeria and West Africa.
            </p>
          </div>
          <div
            className="p-8 rounded-lg shadow-sm"
            style={{ backgroundColor: "#3B52A5", border: "1px solid #3B52A5" }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(47,168,79,0.2)" }}
            >
              <Target size={26} style={{ color: "#2FA84F" }} />
            </div>
            <h3
              className="mb-3 text-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#fff",
              }}
            >
              Our Mission
            </h3>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              To uphold integrity and professionalism in the daily discharge of
              our products and services — to bring the dreams of our clients to
              reality through quality workmanship, innovation, and unwavering
              commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


