import { clients } from "../../data/clients";
import SectionTitle from "../ui/SectionTitle";

export default function Clients() {
  // Triple the array for seamless infinite scroll - shows all logos before looping
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-32 bg-slate-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Companies I've Worked With"
          subtitle="Trusted by leading companies to deliver exceptional results"
        />

        {/* Horizontal scrolling container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800/30 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling logos - now supports user scrolling */}
          <div className="overflow-x-auto scrollbar-hide scroll-smooth">
            <div className="flex animate-scroll md:animate-scroll-desktop">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="shrink-0 mx-8 w-56 h-28 flex items-center justify-center"
                >
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 w-full h-full flex items-center justify-center group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
