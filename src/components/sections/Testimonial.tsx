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
          className="flex flex-col md:flex-row items-center gap-12 bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-xl"
        >
          {/* Polaroid Image */}
          <div className="shrink-0 w-full md:w-1/3 flex justify-center">
            <motion.div
              className="polaroid-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover="hover"
            >
              {/* Thumbtack */}
              <motion.div
                className="thumbtack"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                    ease: "backOut",
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                variants={{
                  hover: {
                    y: -5,
                    scale: 1.05,
                  },
                }}
              >
                <img
                  src="/images/blueThumbTack.png"
                  alt="thumbtack"
                  loading="lazy"
                  decoding="async"
                  className="w-12"
                />
              </motion.div>

              {/* Polaroid */}
              <motion.div
                className="polaroid"
                style={{
                  rotate: -2,
                }}
                variants={{
                  hover: {
                    rotate: 0,
                    scale: 1.05,
                    y: -5,
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.3)",
                    zIndex: 10,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="polaroid-inner">
                  <div className="polaroid-image">
                    <img
                      src="/images/testimonial/selfATX.webp"
                      alt="DJ and colleagues"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="polaroid-caption font-handwriting text-slate-800 text-xl">
                    Dallas Devs 2025
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full pointer-events-none"></div>
    </section>
  );
}
