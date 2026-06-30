import { useState } from "react";
import type { Project } from "../../types";
import {
  FaTerminal,
  FaChevronDown,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import ProjectDeepDiveModal from "./ProjectDeepDiveModal";
import ProjectDetailModal from "./ProjectDetailModal";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const languages = project.languages.split(", ");
  const hasRepoLink = project.repoLink && project.repoLink.trim() !== "";

  return (
    <div className="group bg-[#0d1425] rounded-xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-cyan-500/30 flex flex-col h-full shadow-lg">
      {/* Windows Style Header */}
      <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-4 border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="grow bg-[#0d1425] rounded-md h-6 flex items-center px-3 text-[10px] text-slate-500 font-mono overflow-hidden whitespace-nowrap">
          {project.link.replace("https://", "").replace("www.", "")}
        </div>
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1425] to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
            {project.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <div className="mb-6 grow">
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <button
            onClick={() => setIsDetailOpen(true)}
            className="mt-2 text-xs text-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Read more
          </button>
        </div>

        <div className="h-px bg-slate-800/50 w-full mb-6" />

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-1 bg-slate-800/80 text-slate-400 border border-slate-700/50 rounded-md font-medium"
            >
              {lang.trim()}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-4 mb-4">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.link, "_blank")}
            className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaExternalLinkAlt size={12} />
            Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              hasRepoLink && window.open(project.repoLink, "_blank")
            }
            disabled={!hasRepoLink}
            className={`flex-1 flex items-center justify-center gap-2 ${
              !hasRepoLink
                ? "opacity-50 cursor-not-allowed border-slate-700 text-slate-500 hover:bg-transparent hover:text-slate-500 hover:scale-100"
                : "cursor-pointer"
            }`}
          >
            <FaGithub size={14} />
            {hasRepoLink ? "GitHub" : "Private"}
          </Button>
        </div>

        {/* Technical Deep Dive Button */}
        {project.deepDive && (
          <button
            onClick={() => setIsDeepDiveOpen(true)}
            className="w-full cursor-pointer group/btn py-3 px-4 rounded-lg bg-[#141d2e] border border-slate-700/50 text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1a2333] hover:border-cyan-500/30 hover:text-white transition-all duration-300"
          >
            <FaTerminal className="text-cyan-500 group-hover/btn:scale-110 transition-transform " />
            Technical Deep Dive
            <FaChevronDown
              className="text-slate-500 group-hover/btn:translate-y-0.5 transition-transform"
              size={10}
            />
          </button>
        )}
      </div>

      <ProjectDeepDiveModal
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
        deepDive={project.deepDive}
        projectTitle={project.title}
      />
      <ProjectDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        project={project}
      />
    </div>
  );
}
