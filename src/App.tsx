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
      <footer className="bg-slate-950 py-8 border-t border-slate-800 mb-14 sm:mb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2018 - {new Date().getFullYear()} DJ Neill. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
