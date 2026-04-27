import { Link } from "react-router";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import type { BlogPost } from "../../types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 hover:bg-slate-800 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
          {post.title}
        </h2>
        <FiArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-all group-hover:translate-x-1 shrink-0 mt-0.5" />
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {post.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <FiCalendar className="w-3.5 h-3.5" />
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        {post.readTime && (
          <span className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        )}
      </div>

      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs bg-slate-700 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
