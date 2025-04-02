import { getBlogPosts } from "@/[locale]/blog/utils";
import { getWorkPosts } from "@/[locale]/work/utils";

export const baseUrl = "https://bilguun-portfolio.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts("en").map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let works = getWorkPosts("en").map((post) => ({
    url: `${baseUrl}/en/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
