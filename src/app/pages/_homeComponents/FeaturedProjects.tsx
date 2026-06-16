import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { featuredProjects } from "./data";

export function FeaturedProjects() {
  return (
    <section className="kanato-section-soft py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-14 text-center">
          <p className="kanato-eyebrow mb-3 text-xs uppercase tracking-widest">
            Our Work
          </p>
          <h2 className="kanato-section-title">Selected Projects</h2>
          <div className="kanato-divider-primary mx-auto mt-4 h-1 w-16 rounded" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="kanato-button-primary absolute left-3 top-3 rounded px-3 py-1 text-xs font-semibold">
                  {project.year}
                </div>
              </div>
              <div className="p-5">
                <div className="kanato-primary-text mb-2 text-xs uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="kanato-secondary-text mb-2 text-[0.95rem] font-bold">
                  {project.title}
                </h3>
                <p className="kanato-muted-text mb-1 text-xs">
                  Client: {project.client}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin size={11} />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="kanato-button-secondary inline-flex items-center gap-2 rounded px-8 py-4 text-sm font-semibold transition-all hover:opacity-90"
          >
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
