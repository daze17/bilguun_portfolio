import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/utils";

import { baseUrl } from "./sitemap";

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

const RootLayout: React.Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body
        className={cn(
          "antialiased mx-auto mt-0 bg-primary dark:bg-primary-dark",
          "text-black bg-primary dark:text-white dark:bg-primary-dark",
        )}
      >
        <main className={cn("flex-auto min-w-0 flex flex-col md:px-0")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className={cn("min-h-screen")}>
              <Navbar />
              <div className="w-full">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
