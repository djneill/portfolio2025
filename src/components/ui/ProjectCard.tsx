import { useState } from "react";
import type { Project } from "../../types";
import Button from "./Button";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const languages = project.languages.split(", ");
  const hasRepoLink = project.repoLink && project.repoLink.trim() !== "";

  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden bg-slate-900 flex-shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-center mb-3">
          <Badge>{project.tag}</Badge>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors text-center">
          {project.title}
        </h3>

        <div className="mb-4 flex-grow">
          <p className={`text-slate-400 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {project.description}
          </p>
          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-1 transition-colors"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>

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

        <div className="flex gap-3 mt-auto">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.link, "_blank")}
          >
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => hasRepoLink && window.open(project.repoLink, "_blank")}
            disabled={!hasRepoLink}
            className={!hasRepoLink ? "opacity-50 cursor-not-allowed border-slate-600 text-slate-500 hover:bg-transparent hover:text-slate-500" : ""}
          >
            {hasRepoLink ? "GitHub" : "Private Repo"}
          </Button>
        </div>
      </div>
    </div>
  );
}
