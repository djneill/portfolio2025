import { useState, useEffect } from "react";
import { FiUser, FiBriefcase, FiMail, FiUsers } from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "About", href: "about", icon: FiUser },
  { label: "View My Work", href: "projects", icon: FiBriefcase },
  { label: "Contact", href: "contact", icon: FiMail },
  { label: "Community", href: "conferences", icon: FiUsers },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact", "conferences"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              DJ Neill
            </button>

            {/* Nav Links */}
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors relative group cursor-pointer ${
                    activeSection === item.href
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-4 left-0 right-0 h-0.5 bg-cyan-400 transition-opacity ${
                      activeSection === item.href ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom (Window Tabs Style) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Backdrop blur container */}
        <div className="bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/50">
          <div className="flex items-center justify-around px-2 pb-safe">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 relative transition-all ${
                    isActive ? "text-cyan-400" : "text-slate-400"
                  }`}
                >
                  {/* Window tab top border effect */}
                  <div
                    className={`absolute top-0 left-2 right-2 h-0.5 rounded-b-full transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                        : "bg-transparent"
                    }`}
                  />

                  {/* Icon with background effect for active state */}
                  <div
                    className={`relative transition-all ${
                      isActive ? "transform -translate-y-1" : ""
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full" />
                    )}
                    <Icon className="w-5 h-5 relative z-10" />
                  </div>

                  {/* Label */}
                  <span
                    className={`text-[10px] mt-1 font-medium transition-all ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {item.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer for desktop to prevent content from going under fixed nav */}
      <div className="hidden md:block h-16" />
    </>
  );
}
