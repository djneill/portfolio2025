import { motion } from "motion/react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-32 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUpVariants}
        >
          <SectionTitle
            title="My Projects"
            subtitle="A showcase of my recent work and side projects"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectRevealCard
              key={`${project.id}-${project.title}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRevealCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        rotateY: isLeft ? -8 : 8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotateY: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ transformPerspective: 1000 }}
      className="h-full"
    >
      <div className="h-full">
        <ProjectCard project={project} />
      </div>
    </motion.div>
  );
}
