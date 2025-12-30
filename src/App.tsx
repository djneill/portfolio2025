import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import Testimonial from "./components/sections/Testimonial";
import About from "./components/sections/About";
import Clients from "./components/sections/Clients";
import Conferences from "./components/sections/Conferences";
import GlobalScope from "./components/sections/GlobalScope";
import Projects from "./components/sections/Projects";
import ConsultantProcess from "./components/sections/ConsultantProcess";
import Contact from "./components/sections/Contact";
import { FiChevronUp } from "react-icons/fi";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navigation />
      <Hero />
      <Testimonial />
      <About />
      <Clients />
      <GlobalScope />
      <Conferences />
      <Projects />
      <ConsultantProcess />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800 mb-14 sm:mb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2018 - {new Date().getFullYear()} DJ Neill. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer relative"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Back to Top</span>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <FiChevronUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
}
