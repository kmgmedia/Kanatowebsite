import { Calendar, Filter, MapPin } from "lucide-react";

interface Project {
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  image: string;
  imageUrl?: string;
}

interface ProjectsGridSectionProps {
  categories: readonly string[];
  activeFilter: string;
  filteredProjects: readonly Project[];
  onFilterChange: (category: string) => void;
}

export function ProjectsGridSection({
  categories,
  activeFilter,
  filteredProjects,
  onFilterChange,
}: ProjectsGridSectionProps) {
  return (
    <section className="bg-grey-light py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <div className="mr-2 flex items-center gap-2">
            <Filter size={16} className="text-slate-500" />
            <span className="text-sm font-medium text-slate-500">Filter:</span>
          </div>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange(category)}
              className="rounded-full border px-4 py-2 text-sm font-medium transition-all"
              style={{
                backgroundColor:
                  activeFilter === category ? "#3B52A5" : "#FFFFFF",
                color: activeFilter === category ? "#FFFFFF" : "#374151",
                borderColor:
                  activeFilter === category ? "#3B52A5" : "#D1D5DB",
              }}
            >
              {category}
            </button>
          ))}

          <span className="ml-auto text-sm text-slate-500">
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const imageSource = project.imageUrl ?? project.image;

            return (
              <article
                key={`${project.title}-${project.year}`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <img
                    src={imageSource}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-sm font-bold text-secondary">
                    {project.title}
                  </h3>

                  <p className="mb-3 text-xs text-slate-500">
                    Client: {project.client}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={11} />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
