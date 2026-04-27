import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import Testimonial from "../components/sections/Testimonial";
import About from "../components/sections/About";
import Clients from "../components/sections/Clients";
import Conferences from "../components/sections/Conferences";
import GlobalScope from "../components/sections/GlobalScope";
import Projects from "../components/sections/Projects";
import ConsultantProcess from "../components/sections/ConsultantProcess";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
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
      <Footer />
    </div>
  );
}
