import type { ComponentType } from "react";
import { useParams, Link } from "react-router";
import BlogNavigation from "../components/blog/BlogNavigation";
import BlogLayout from "../components/blog/BlogLayout";
import Footer from "../components/Footer";
import type { BlogPost } from "../types";

type PostModule = {
  default: ComponentType;
  frontmatter: Omit<BlogPost, "slug">;
};

const modules = import.meta.glob<PostModule>("../content/blog/*/index.mdx", {
  eager: true,
});

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const entry = Object.entries(modules).find(([path]) =>
    path.includes(`/${slug}/index.mdx`)
  );

  if (!entry) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4 text-lg">Post not found.</p>
          <Link
            to="/blog"
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const [, mod] = entry;
  const Post = mod.default;

  return (
    <div className="min-h-screen bg-slate-900">
      <BlogNavigation />
      <BlogLayout frontmatter={{ ...mod.frontmatter, slug: slug! }}>
        <Post />
      </BlogLayout>
      <Footer />
    </div>
  );
}
