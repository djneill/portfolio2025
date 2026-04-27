import { motion, AnimatePresence } from "motion/react";
import { FaTimes } from "react-icons/fa";
import type { Project } from "../../types";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none p-4"
          >
            <div className="bg-[#0a0f1e] border border-slate-800 rounded-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto">
              {/* Image */}
              <div className="relative h-48 shrink-0 overflow-hidden bg-slate-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1e] to-transparent opacity-70" />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors bg-slate-950/60 rounded-full p-1.5"
                >
                  <FaTimes size={12} />
                </button>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-[#0d1425] border-t border-slate-800 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
