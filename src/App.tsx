import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Clients from "./components/sections/Clients";
import Conferences from "./components/sections/Conferences";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Clients />
      <Conferences />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
