import { Link } from "react-router";
import { FiArrowLeft, FiBookOpen } from "react-icons/fi";

export default function BlogNavigation() {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <FiArrowLeft className="w-4 h-4" />
            DJ Neill
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-cyan-400 font-semibold text-sm"
          >
            <FiBookOpen className="w-4 h-4" />
            Blog
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/50">
          <div className="flex items-center justify-around px-2 py-2">
            <Link
              to="/"
              className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors py-1"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span className="text-[10px] font-medium">Portfolio</span>
            </Link>
            <Link
              to="/blog"
              className="flex flex-col items-center gap-1 text-cyan-400 py-1"
            >
              <FiBookOpen className="w-5 h-5" />
              <span className="text-[10px] font-medium">Blog</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Desktop spacer */}
      <div className="hidden md:block h-16" />
    </>
  );
}
