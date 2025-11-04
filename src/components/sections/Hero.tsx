import Button from "../ui/Button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* 3D Layered Shadow Name */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white shadow-3d">
            DJ Neill
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Full-Stack Software
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            Engineer
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto">
          Turning ideas into seamless digital experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
