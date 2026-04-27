import { Link } from "react-router";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import type { BlogPost } from "../../types";

interface BlogLayoutProps {
  frontmatter: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ frontmatter, children }: BlogLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm mb-10"
      >
        <FiArrowLeft className="w-4 h-4" />
        All posts
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
          {frontmatter.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <FiCalendar className="w-4 h-4" />
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {frontmatter.readTime && (
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4" />
              {frontmatter.readTime}
            </span>
          )}
        </div>

        {frontmatter.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs bg-slate-700 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12" />

      <article className="prose prose-invert prose-cyan max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-code:text-cyan-300 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0">
        {children}
      </article>
    </main>
  );
}
