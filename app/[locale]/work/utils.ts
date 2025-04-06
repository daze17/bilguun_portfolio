import { parseFrontmatter } from "app/utils";
import fs from "fs";
import path from "path";

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
  // Try different possible paths for the posts directory
  const possiblePaths = [
    // Standard path
    path.join(process.cwd(), "app", "[locale]", "work", "posts", locale),
    // Vercel path (if the app directory is at the root)
    path.join(process.cwd(), "app", "work", "posts", locale),
    // Vercel path (if the app directory is inside a subdirectory)
    path.join(
      process.cwd(),
      "app",
      "..",
      "app",
      "[locale]",
      "work",
      "posts",
      locale
    ),
  ];

  // Try each path until we find one that exists
  for (const dir of possiblePaths) {
    if (fs.existsSync(dir)) {
      console.log(`Found work posts directory at: ${dir}`);
      return getMDXData(dir);
    }
  }

  // If none of the paths exist, log a warning and return an empty array
  console.warn(`No work posts directory found for locale: ${locale}`);
  return [];
}
