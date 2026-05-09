import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ABOUT_IMG } from "./data";

export function AboutPreview() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="uppercase tracking-widest text-xs mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#2FA84F",
                fontWeight: 600,
              }}
            >
              About Kanato
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#3B52A5",
                lineHeight: 1.25,
              }}
            >
              Engineering Solutions Backed by Over 30 Years of Experience
            </h2>
            <p
              className="mb-4 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}
            >
              Kanato Engineering Resources Nigeria Limited was incorporated on
              the 23rd of July 1991 as a distinct engineering company
              specialising in Electrical, Mechanical, and Civil services — RC
              666713.
            </p>
            <p
              className="mb-6 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#4B5563" }}
            >
              As a wholly indigenous engineering company, we engage in
              Electrical & Mechanical Installation, Sales, Supply, Construction,
              and Service/Maintenance. Our dynamic, resourceful, and experienced
              professionals uphold integrity and professionalism in every
              project we undertake.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#3B52A5",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ height: "420px" }}
            >
              <img
                src={ABOUT_IMG}
                alt="Kanato Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 rounded-lg p-5 shadow-xl hidden md:block"
              style={{ backgroundColor: "#2FA84F" }}
            >
              <p
                className="text-white text-2xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                1991
              </p>
              <p
                className="text-white/80 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Year Founded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


