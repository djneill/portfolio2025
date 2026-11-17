import SectionTitle from "../ui/SectionTitle";
import { motion } from "motion/react";

export default function About() {
  const techStack = [
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "C#", icon: "cs" },
    { name: ".NET", icon: "dotnet" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "next" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MySQL", icon: "mysql" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Git", icon: "git" },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeFromLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeFromRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-4 bg-slate-900/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUpVariants}
        >
          <SectionTitle title="About Me" />
        </motion.div>

        <div className="grid gap-10 items-center md:grid-cols-[15rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative isolate w-60 lg:w-72 max-w-full mx-auto group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeFromLeftVariants}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 -z-10 rounded-3xl bg-linear-to-br from-cyan-500 to-blue-500 blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-300"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-cyan-400/20"
            />
            <div className="relative rounded-3xl border border-slate-700 bg-slate-800 p-2 shadow-xl shadow-slate-950/30">
              <img
                src="/images/conferences/headShot.webp"
                alt="DJ Neill"
                width={1086}
                height={1448}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeFromRightVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hi, I'm DJ Neill
            </h3>
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                A passionate full-stack software engineer with a focus for
                building beautiful, functional, and user-friendly applications.
                I love working with modern technologies and frameworks to create
                seamless digital experiences.
              </p>
              <p>
                With expertise in both frontend and backend development, I bring
                ideas to life through clean code and thoughtful design. I'm
                always eager to learn new technologies and take on challenging
                projects.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                My Tech Stack
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="relative transition-transform duration-300 group-hover:scale-110">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.icon}&theme=dark`}
                        alt={tech.name}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 relative z-10"
                      />
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-cyan-400 transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
