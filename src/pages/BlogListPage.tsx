import BlogNavigation from "../components/blog/BlogNavigation";
import BlogCard from "../components/blog/BlogCard";
import Footer from "../components/Footer";
import type { BlogPost } from "../types";

type PostModule = {
  frontmatter: Omit<BlogPost, "slug">;
};

const modules = import.meta.glob<PostModule>("../content/blog/*/index.mdx", {
  eager: true,
});

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.match(/\/([^/]+)\/index\.mdx$/)?.[1] ?? "";
    return { slug, ...mod.frontmatter };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <BlogNavigation />
      <main className="max-w-4xl w-full mx-auto px-6 py-16 flex-1">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Blog</h1>
          <p className="text-slate-400 text-lg">
            Thoughts on software, algorithms, and the craft of development.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-500">No posts yet — check back soon.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
