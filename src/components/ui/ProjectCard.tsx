import type { Project } from "../../types";
import Badge from "./Badge";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const languages = project.languages.split(", ");

  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge>{project.tag}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
            >
              {lang.trim()}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.link, "_blank")}
          >
            {project.linkText}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.repoLink, "_blank")}
          >
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}
