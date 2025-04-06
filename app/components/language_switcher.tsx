"use client";

import { LanguagesIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Link, localeNames, usePathname } from "../../i18n/routing";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/react-dropdown-menu";

export const LanguageSwitcher: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem] stroke-2 scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-primary dark:bg-primary-dark"
      >
        {localeNames.map(({ code, name }) => (
          <Link
            href={{
              pathname,
              query: Object.fromEntries(searchParams.entries()),
            }}
            locale={code}
            key={code}
          >
            <DropdownMenuItem>{name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
