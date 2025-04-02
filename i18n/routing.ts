import type { Locale } from "date-fns";
import { enUS, mn } from "date-fns/locale";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const dateFnsLocaleMap: Record<Locales, Locale> = {
  en: enUS,
  mn: mn,
};

export const locales = ["en", "mn"] as const;
export const jsIntlLocaleMap = {
  en: "en-US",
  mn: "mn-MN",
};
export type Locales = (typeof locales)[number];

export const localeNames: { code: Locales; isoCode: string; name: string }[] = [
  { code: "en", isoCode: "en", name: "English" },
  { code: "mn", isoCode: "mn", name: "Mongolian" },
];
export const defaultLocale = "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: defaultLocale,
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
