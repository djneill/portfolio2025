import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { heroData } from "../../data/hero";

//TODO: Fix toast on mobile, scroll mouse center, floating icons on mobile & desktop position
const FloatingShapes = () => {
  const shapes = [
    {
      type: "{ }",
      className:
        "top-10 left-10 sm:top-20 sm:left-20 text-cyan-400 text-6xl float-slow",
    },
    {
      type: "< >",
      className: "top-20 right-70 text-blue-400 text-7xl float-medium",
    },
    {
      type: "[ ]",
      className: "top-1/4 right-10 text-purple-400 text-5xl float-fast",
    },
    {
      type: "( )",
      className: "bottom-1/3 right-20 text-indigo-400 text-6xl float-slow",
    },
    // Icon images
    {
      type: "image",
      className: "top-1/2 left-[15%] float-medium",
      image: "/images/hero/guitar.png",
      alt: "guitar",
    },
    {
      type: "image",
      className: "bottom-[55%] right-[20%] float-slow",
      image: "/images/hero/electric-guitar-music-instrument.png",
      alt: "Electric guitar",
    },
    {
      type: "image",
      className: "bottom-[10%] left-[10%] float-fast",
      image: "/images/hero/game.png",
      alt: "Game controller",
    },
    {
      type: "image",
      className: "bottom-[15%] left-[30%] float-medium",
      image: "/images/hero/pickleball.png",
      alt: "Pickleball paddle",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.className} font-bold select-none ${
            shape.image ? "opacity-40" : "opacity-50"
          }`}
        >
          {shape.image ? (
            <img
              src={shape.image}
              alt={shape.alt}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain drop-shadow-lg"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            />
          ) : (
            shape.type
          )}
        </div>
      ))}
    </div>
  );
};

const Toast = ({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-8 right-8 bg-red-500/90 backdrop-blur-md text-white px-6 py-4 rounded-lg shadow-2xl border border-red-400 z-50 transition-all duration-300 ${
        show ? "translate-x-0 opacity-100" : "translate-x-96 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <div className="font-bold text-sm">SYSTEM ERROR</div>
          <div className="text-sm">{message}</div>
        </div>
      </div>
    </div>
  );
};

const CodeTerminal = () => {
  const [coffee, setCoffee] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const { personality } = heroData;

  const handleCoffeeToggle = () => {
    if (coffee) {
      setShowToast(true);
      setTimeout(() => {
        setCoffee(false);
      }, 100);
      setTimeout(() => {
        setCoffee(true);
      }, 3100);
    }
  };

  return (
    <>
      <Toast
        message="Coffee = false; System Failure!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <div
        className="terminal-window max-w-2xl mx-auto mt-16 reveal-text"
        style={{ animationDelay: "1s" }}
      >
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="text-slate-400 text-xs ml-2">developer.ts</span>
        </div>
        <div className="terminal-content">
          <div>
            <span className="code-keyword">const</span>{" "}
            <span className="code-variable">dev</span> = {"{"}
          </div>
          <div className="pl-4">
            <span className="code-variable">name</span>:{" "}
            <span className="code-string">"{personality.name}"</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">status</span>:{" "}
            <span className="code-string">"{personality.status}"</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">bugsFixed</span>:{" "}
            <span className="code-number">{personality.bugsFixed}</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">coffeeConsumed</span>:{" "}
            <span className="code-number">{personality.coffeeConsumed}</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">linesOfCode</span>:{" "}
            <span className="code-number">{personality.linesOfCode}</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">codeQuality</span>:{" "}
            <span className="code-string">"{personality.codeQuality}"</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">currentMood</span>:{" "}
            <span className="code-string">"{personality.currentMood}"</span>,
          </div>
          <div className="pl-4">
            <span className="code-variable">debugMode</span>:{" "}
            <span className="code-boolean">
              {String(personality.debugMode)}
            </span>
            ,
          </div>
          <div className="pl-4">
            <span className="code-variable">deployedOnFriday</span>:{" "}
            <span className="code-boolean">
              {String(personality.deployedOnFriday)}
            </span>
            , <span className="code-comment">// Never again...</span>
          </div>
          <div className="pl-4">
            <span className="code-variable">isHirable</span>: () ={">"}{" "}
            <span className="code-boolean">true</span>,
          </div>
          <div className="pl-4 flex items-center gap-2">
            <span className="code-variable">coffee</span>:
            <button
              onClick={handleCoffeeToggle}
              className={`w-10 h-5 rounded-full transition-all duration-300 relative ${
                coffee
                  ? "bg-cyan-500 shadow-lg shadow-cyan-500/50"
                  : "bg-red-500 shadow-lg shadow-red-500/50"
              }`}
              title="Toggle coffee (try turning it off!)"
            >
              <div
                className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${
                  coffee ? "left-6" : "left-1"
                }`}
              />
            </button>
            <span className="code-boolean">{String(coffee)}</span>
          </div>
          <div>{"};"}</div>
          <div className="mt-4">
            <span className="code-keyword">while</span> (dev.
            <span className="code-variable">coffeeConsumed</span> {">"}{" "}
            <span className="code-number">0</span>) {"{"}
          </div>
          <div className="pl-4">
            dev.<span className="code-variable">status</span> ={" "}
            <span className="code-string">"Writing clean code"</span>;
          </div>
          <div className="pl-4">
            dev.<span className="code-variable">bugsFixed</span>++;
          </div>
          <div>{"};"}</div>
        </div>
      </div>
    </>
  );
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16 pb-20 bg-[#040d36]"
    >
      <FloatingShapes />

      {/* Central cyan/teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2) 0%, rgba(20, 184, 166, 0.1) 25%, transparent 60%)`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center py-10 rounded-3xl">
        {/* 3D Layered Shadow Name with stagger reveal */}
        <div className="mb-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white shadow-3d reveal-text cursor-default"
            style={{ animationDelay: "0.2s" }}
          >
            {heroData.name}
          </h1>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 reveal-text"
          style={{ animationDelay: "0.4s" }}
        >
          Full-Stack Software
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 hover:neon-glow transition-all duration-500 cursor-default">
            {heroData.title.split(" ").pop()}
          </span>
        </h2>

        <p
          className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto reveal-text"
          style={{ animationDelay: "0.6s" }}
        >
          {heroData.description}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-text mb-12 "
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            variant="primary"
            size="lg"
            className="shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="backdrop-blur-sm cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <CodeTerminal />

        {/* Improved Scroll indicator */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
          onClick={() => scrollToSection("about")}
        >
          <span className="block text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-start justify-center p-1 group-hover:border-cyan-500 transition-colors">
            <div className="w-1.5 h-3 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
