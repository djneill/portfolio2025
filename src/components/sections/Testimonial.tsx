import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="py-12 bg-slate-900/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl"
        >
          {/* Polaroid Image */}
          <div className="shrink-0 w-full md:w-1/3 flex justify-center">
            <div className="polaroid-wrapper -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/blueThumbTack.png"
                alt="thumbtack"
                className="thumbtack w-12"
              />
              <div className="polaroid">
                <div className="polaroid-inner">
                  <div className="polaroid-image">
                    <img
                      src="/images/testimonial/selfATX.jpg"
                      alt="DJ and colleagues"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="polaroid-caption font-handwriting text-slate-800 text-xl">
                    Dallas Devs 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="grow">
            <div className="mb-6">
              <span className="text-6xl text-cyan-500/30 font-serif leading-none select-none">
                “
              </span>
            </div>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 italic">
              DJ quickly stood out for his technical skills in ASP.NET,
              TypeScript, and React, and his ability to apply them to real-world
              projects. He delivered a high-quality apartment management portal
              and consistently contributed strong ideas in team settings.
            </p>
            <div className="flex flex-col">
              <span className="text-cyan-400 font-bold text-lg">
                Naomi Carrigan
              </span>
              <span className="text-slate-400">
                Admin Team, Dallas Software Developers (2025 Cohort)
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
