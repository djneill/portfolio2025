import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 auto-rows-fr">
          {projects.map((project, index) => (
            <Tilt3DCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tilt3DCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "center center"],
  });

  const isLeft = index % 2 === 0;
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isLeft ? -25 : 25, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        rotateY,
        transformPerspective: 1000,
      }}
      className="h-full"
    >
      <div className="h-full">
        <ProjectCard project={project} />
      </div>
    </motion.div>
  );
}
