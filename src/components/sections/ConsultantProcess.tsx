import { motion } from "motion/react";
import { FiSearch, FiPenTool } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import SectionTitle from "../ui/SectionTitle";

const steps = [
    {
        title: "Discovery",
        description:
            "I don't just write code. I ask the right questions to align technical choices with business goals.",
        icon: FiSearch,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
    },
    {
        title: "Architecture",
        description:
            "Building for scale from day one, selecting the right stack for long-term maintainability.",
        icon: FiPenTool,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
    },
    {
        title: "Delivery",
        description:
            "Consistent communication, automated testing, and zero-downtime deployments.",
        icon: IoRocketOutline,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
    },
];

export default function ConsultantProcess() {
    return (
        <section id="process" className="pt-32 pb-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <SectionTitle
                        title="The Consultant Process"
                        subtitle="Reducing client anxiety through a transparent, proven workflow."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center -mt-6 mb-12"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                            Available for New Projects
                        </span>
                    </div>
                </motion.div>

                <div className="relative mt-20">
                    {/* Connector Line (Desktop) */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                        className="absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 hidden md:block"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Circle */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0, rotate: -10 },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: index * 0.2 + 0.3
                                            }
                                        }
                                    }}
                                    className={`relative z-20 w-24 h-24 rounded-full ${step.bg} border-2 ${step.border} flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-black/20`}
                                >
                                    <step.icon className={`w-10 h-10 ${step.color}`} />
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: index * 0.2 + 0.6
                                            }
                                        }
                                    }}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed max-w-sm">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/20 rounded-full blur-[120px] -z-1" />
        </section>
    );
}
