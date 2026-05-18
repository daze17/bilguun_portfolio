import { Mail } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FaGithub } from "react-icons/fa";

import { cn } from "@/utils";

import { ContactForm } from "./contact_form";

const ContactPage: React.Page = async () => {
  const t = await getTranslations();

  return (
    <section className="min-h-[calc(100dvh-210px)] antialiased mx-auto max-w-5xl px-4 sm:px-6 lg:py-12">
      <header className="flex flex-col gap-3 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {t("contact.title")}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {t("contact_form.description")}
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-3">
        <aside className="lg:col-span-1 flex flex-col gap-3">
          <a
            href="https://github.com/daze17"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex items-center gap-3 p-4 rounded-lg",
              "border border-neutral-200 dark:border-neutral-800",
              "bg-neutral-50/50 dark:bg-neutral-900/50",
              "hover:border-neutral-300 dark:hover:border-neutral-700",
              "hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors",
            )}
          >
            <span
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-md",
                "bg-neutral-100 dark:bg-neutral-800",
                "text-neutral-700 dark:text-neutral-300",
              )}
            >
              <FaGithub className="w-5 h-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                GitHub
              </span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                @daze17
              </span>
            </span>
          </a>

          <Link
            href="#contact-form"
            className={cn(
              "group flex items-center gap-3 p-4 rounded-lg",
              "border border-neutral-200 dark:border-neutral-800",
              "bg-neutral-50/50 dark:bg-neutral-900/50",
              "hover:border-neutral-300 dark:hover:border-neutral-700",
              "hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors",
            )}
          >
            <span
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-md",
                "bg-neutral-100 dark:bg-neutral-800",
                "text-neutral-700 dark:text-neutral-300",
              )}
            >
              <Mail className="w-5 h-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Email
              </span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                Use the form
              </span>
            </span>
          </Link>
        </aside>

        <div id="contact-form" className="lg:col-span-2 scroll-mt-20">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
