import Link from "next/link";
import { ModeToggle } from "./dark_mode_toggle";

const navItems = {
  "/": {
    name: "🏠 home",
  },
  // "/about": {
  //   name: "👋 about",
  // },
  "/work": {
    name: "🎨 work",
  },
  "/blog": {
    name: "📰 blog",
  },
  "/album": {
    name: "📷 album",
  },
  "/contact": {
    name: "📧 contact",
  },
};

export const Navbar: React.FC = () => {
  return (
    <aside className="top-0 z-50 tracking-tight w-full flex justify-center mx-auto lg:fixed bg-white dark:bg-black">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row space-x-0 pr-10 gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1"
              >
                {name}
              </Link>
            );
          })}
          {/* <ModeToggle /> */}
        </div>
      </nav>
    </aside>
  );
};
