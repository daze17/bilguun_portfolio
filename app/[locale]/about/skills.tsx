import { FaAws, FaGhost } from "react-icons/fa";
import {
  SiApple,
  SiBun,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMarkdown,
  SiMysql,
  SiNeovim,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiObsidian,
  SiPnpm,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiZedindustries,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { cn } from "@/utils";

const groupedSkills = {
  Languages: [
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Golang", icon: <SiGo />, color: "#00ADD8" },
  ],
  "Experience With": [
    { name: "Next.js", icon: <SiNextdotjs />, color: "hsl(var(--background))" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "hsl(var(--background))",
    },
    { name: "MySQL", icon: <SiMysql />, color: "hsl(var(--background))" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "hsl(var(--background))",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#007ACC",
    },
  ],
  Other: [
    { name: "Markdown", icon: <SiMarkdown />, color: "hsl(var(--background))" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "pnpm", icon: <SiPnpm />, color: "#F77620" },
    { name: "Bun", icon: <SiBun />, color: "#FF9900" },
    { name: "jQuery", icon: <SiJquery />, color: "#0769AD" },
    { name: "Nginx", icon: <SiNginx />, color: "#009639" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Docker", icon: <SiDocker />, color: "#007ACC" },
  ],
  Tools: [
    { name: "VSCode/Cursor", icon: <VscVscode />, color: "#007ACC" },
    { name: "Zed", icon: <SiZedindustries />, color: "hsl(var(--background))" },
    { name: "Ghostty", icon: <FaGhost />, color: "hsl(var(--background))" },
    { name: "Neovim", icon: <SiNeovim />, color: "#57A143" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Obsidian", icon: <SiObsidian />, color: "#7C3AED" },
  ],
  "Operating Systems": [
    { name: "Ubuntu", icon: <SiUbuntu />, color: "#E95420" },
    { name: "macOS", icon: <SiApple />, color: "hsl(var(--background))" },
  ],
};

const SkillSection: React.FC = () => {
  return (
    <section className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🚀 Skills</h2>
      <div className="space-y-4">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 ",
                    "cursor-pointer rounded-md border border-neutral-300 bg-neutral-100 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md",
                    "dark:bg-neutral-900",
                  )}
                >
                  <span
                    className={cn("text-xl")}
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillSection;
