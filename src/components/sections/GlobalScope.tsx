import { motion } from "motion/react";
import { globalScopeHighlights } from "../../data/globalScope";
import SectionTitle from "../ui/SectionTitle";

export default function GlobalScope() {
  return (
    <section id="global-scope" className="py-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTitle
            title="Localhost: Earth"
            subtitle="This is my 'Global Scope'. A collection of moments spent building the social infrastructure that makes tech worth it. No compilers, just community."
          />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {globalScopeHighlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-24`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <motion.div
                  className="polaroid-wrapper mx-auto md:mx-0"
                  whileHover="hover"
                >
                  <motion.div
                    className="polaroid group"
                    style={{
                      rotate: index % 2 === 0 ? -3 : 3,
                    }}
                    variants={{
                      hover: {
                        rotate: 0,
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    <div className="polaroid-inner">
                      <div className="polaroid-image aspect-4/3 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 + 0.3,
                  }}
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${item.accent} shadow-lg shadow-blue-500/20`}
                >
                  <item.Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xl text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-slate-700 animate-pulse" />
                  <span>active_connection: community_v1.0.0</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
