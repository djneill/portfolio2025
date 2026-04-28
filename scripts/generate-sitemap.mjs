import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const blogDir = path.join(projectRoot, "src", "content", "blog");
const publicDir = path.join(projectRoot, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const siteUrl = (process.env.SITE_URL ?? "https://djneill.com").replace(/\/+$/, "");

function extractDateFromFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    return null;
  }

  const dateMatch = frontmatterMatch[1].match(
    /^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?\s*$/m
  );

  return dateMatch?.[1] ?? null;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function getBlogPosts() {
  const entries = await readdir(blogDir, { withFileTypes: true }).catch(() => []);
  const posts = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const slug = entry.name;
    const mdxPath = path.join(blogDir, slug, "index.mdx");
    const content = await readFile(mdxPath, "utf8").catch(() => null);

    if (!content) {
      continue;
    }

    posts.push({
      slug,
      lastmod: extractDateFromFrontmatter(content),
    });
  }

  return posts.sort((a, b) => a.slug.localeCompare(b.slug));
}

function buildSitemapXml(entries) {
  const urls = entries
    .map(
      ({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  const posts = await getBlogPosts();
  const today = new Date().toISOString().slice(0, 10);
  const datedPosts = posts
    .map((post) => post.lastmod)
    .filter((value) => typeof value === "string");
  const latestBlogDate =
    datedPosts.sort((a, b) => a.localeCompare(b)).at(-1) ?? today;

  const entries = [
    {
      loc: `${siteUrl}/`,
      lastmod: latestBlogDate,
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      loc: `${siteUrl}/blog`,
      lastmod: latestBlogDate,
      changefreq: "weekly",
      priority: "0.8",
    },
    ...posts.map((post) => ({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: post.lastmod ?? today,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  await mkdir(publicDir, { recursive: true });
  await writeFile(sitemapPath, buildSitemapXml(entries), "utf8");
  console.log(`Generated sitemap with ${entries.length} URLs at ${sitemapPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
