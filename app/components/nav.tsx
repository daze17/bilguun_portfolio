"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/utils";

import { DarkModeToggle } from "./dark_mode_toggle";
import { LanguageSwitcher } from "./language_switcher";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = {
    "/": {
      name: `🏠 ${t("navbar.home")}`,
    },
    "/about": {
      name: `👋 ${t("navbar.about")}`,
    },
    "/work": {
      name: `🎨 ${t("navbar.work")}`,
    },
    "/blog": {
      name: `📰 ${t("navbar.blog")}`,
    },
    "/album": {
      name: `📷 ${t("navbar.album")}`,
    },
    "/contact": {
      name: `📧 ${t("navbar.contact")}`,
    },
  };

  return (
    <aside className="top-0 z-50 tracking-tight w-full flex justify-center mx-auto lg:fixed bg-primary dark:bg-primary-dark">
      {/* DESKTOP VERSION */}
      <nav
        className={cn(
          "hidden",
          "md:flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative",
        )}
        id="nav"
      >
        <div className="flex flex-row space-x-0 pr-10 gap-3">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={cn(
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1",
                  isActive && "font-semibold",
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div>
          <LanguageSwitcher />
          <DarkModeToggle />
        </div>
      </nav>

      {/* MOBILE VERSION */}
      <nav
        className={cn(
          "md:hidden",
          "flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-full",
        )}
        id="nav"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
        <div>
          <LanguageSwitcher />
          <DarkModeToggle />
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navItems={navItems}
      />
    </aside>
  );
};
