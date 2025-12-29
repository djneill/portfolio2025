import { motion, AnimatePresence } from "motion/react";
import { FaTerminal, FaLightbulb, FaExchangeAlt, FaCheckCircle, FaTimes } from "react-icons/fa";
import type { ProjectDeepDive } from "../../types";

interface ProjectDeepDiveModalProps {
    isOpen: boolean;
    onClose: () => void;
    deepDive?: ProjectDeepDive;
    projectTitle: string;
}

export default function ProjectDeepDiveModal({
    isOpen,
    onClose,
    deepDive,
    projectTitle,
}: ProjectDeepDiveModalProps) {
    if (!deepDive) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none p-4"
                    >
                        <div className="bg-[#0a0f1e] border border-slate-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto">
                            {/* Header */}
                            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-[#0d1425]">
                                <div className="flex items-center gap-2">
                                    <FaTerminal className="text-cyan-400" />
                                    <span className="text-slate-200 font-bold uppercase tracking-wider text-sm">
                                        Decision Log: {projectTitle}
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-white transition-colors p-1"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto p-6 space-y-8">
                                {/* Challenge */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            The Challenge
                                        </h4>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed pl-11">
                                        {deepDive.challenge}
                                    </p>
                                </div>

                                {/* Trade-off */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                            <FaExchangeAlt className="text-yellow-500 text-xs" />
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            The Trade-off
                                        </h4>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed pl-11">
                                        {deepDive.tradeOff}
                                    </p>
                                </div>

                                {/* Decision */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <FaCheckCircle className="text-blue-500 text-xs" />
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            The Decision
                                        </h4>
                                    </div>
                                    <p className="text-white font-medium leading-relaxed pl-11">
                                        {deepDive.decision}
                                    </p>
                                </div>

                                {/* Why */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <FaLightbulb className="text-emerald-500 text-xs" />
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            Why?
                                        </h4>
                                    </div>
                                    <p className="text-slate-400 italic leading-relaxed pl-11">
                                        "{deepDive.why}"
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-[#0d1425] border-t border-slate-800 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
                                >
                                    Close Log
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
