import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

export default function About() {
  const techStack = [
    "JavaScript",
    "TypeScript",
    "C#",
    ".NET",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="py-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center group">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <img
                src="/images/conferences/headShot.webp"
                alt="Profile"
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* About Text */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Hi, I'm John Doe
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
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
