import { useState } from "react";
import { PageCTA } from "../components/marketing/PageCTA";
import { PageHero } from "../components/marketing/PageHero";
import { SEO } from "../components/SEO";
import { ProjectsGridSection } from "./_projectsComponents/ProjectsGridSection";
import {
  projectCards,
  projectCategories,
  projectsHeroImage,
} from "./_projectsComponents/data";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectCards
      : projectCards.filter((project) =>
          project.category.includes(activeFilter),
        );

  return (
    <div>
      <SEO
        title="Projects - Engineering Work Delivered Across Nigeria Since 1991"
        description="Browse 27+ completed engineering projects by Kanato Engineering - civil construction, electrical installations, telecom infrastructure, power solutions and more for top Nigerian corporations and government bodies."
        path="/projects"
      />

      <PageHero
        backgroundImage={projectsHeroImage}
        badge="Our Work"
        currentPage="Projects"
        title={
          <>
            Projects Delivered Across{" "}
            <span className="text-primary">Nigeria Since 1991</span>
          </>
        }
        description="Engineering companies sell with proof, not adjectives. Explore our track record of successfully delivered projects for corporate, government, and private clients."
      />

      <ProjectsGridSection
        categories={projectCategories}
        activeFilter={activeFilter}
        filteredProjects={filteredProjects}
        onFilterChange={setActiveFilter}
      />

      <PageCTA
        title="Ready to Add Your Project to Our Track Record?"
        description="Contact us today to discuss your engineering project requirements."
        primaryAction={{ href: "/request-quote", label: "Request a Quote" }}
      />
    </div>
  );
}
