import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { featuredProjects } from "./data";

export function FeaturedProjects() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#F26B21", fontWeight: 600 }}
          >
            Our Work
          </p>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "#123A6F",
            }}
          >
            Selected Projects
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded" style={{ backgroundColor: "#F26B21" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold"
                  style={{ backgroundColor: "#F26B21", color: "#fff", fontFamily: "Inter, sans-serif" }}
                >
                  {project.year}
                </div>
              </div>
              <div className="p-5">
                <div
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F26B21" }}
                >
                  {project.category}
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#123A6F", fontSize: "0.95rem" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs mb-1"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
                >
                  Client: {project.client}
                </p>
                <div className="flex items-center gap-1 text-xs" style={{ color: "#9CA3AF" }}>
                  <MapPin size={11} />
                  <span style={{ fontFamily: "Inter, sans-serif" }}>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#123A6F", color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
