import { parseFrontmatter } from "app/utils";
import fs from "fs";
import path from "path";

import { baseUrl } from "@/sitemap";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getWorkPosts(locale: string) {
  // Use path.resolve to get the absolute path, starting from the project root
  const postsDir = path.resolve(
    process.cwd(),
    "app",
    "[locale]",
    "work",
    "posts",
    locale
  );

  // Check if directory exists before trying to read it
  if (!fs.existsSync(postsDir)) {
    console.warn(`Directory not found: ${postsDir}`);
    return [];
  }

  return getMDXData(postsDir);
}
