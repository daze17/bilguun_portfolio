import "../global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/utils";
import { pickProperties } from "@/utils/pick_properties";

import { baseUrl } from "../sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bilguun | Portfolio",
    template: "%s Bilguun | Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "antialiased mx-auto mt-0",
          "text-black bg-primary dark:text-white dark:bg-primary-dark"
        )}
      >
        <NextIntlClientProvider
          messages={pickProperties(messages, {
            index: true,
            navigation: true,
          })}
        >
          <ThemeProvider>
            <main className={cn("flex-auto min-w-0 flex flex-col md:px-0")}>
              <div className={cn("min-h-screen")}>
                <Navbar />
                <div className="w-full">{children}</div>
                <Footer />
              </div>
              <Toaster />
            </main>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
