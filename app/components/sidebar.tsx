"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/utils";

import { Button } from "./ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Record<string, { name: string }>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-primary dark:bg-primary-dark p-4 shadow-lg transition-transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-col space-y-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={cn(
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2",
                  isActive && "font-semibold"
                )}
                onClick={onClose}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
