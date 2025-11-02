import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my recent work and side projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
