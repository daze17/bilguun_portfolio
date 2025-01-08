import "./global.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { cn } from "@/utils";

import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import { ThemeProvider } from "./components/ui/theme-provider";
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
      <body className="antialiased mx-auto mt-0">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div
              className={cn(
                "min-h-screen",
                "text-black bg-white dark:text-white dark:bg-black",
              )}
            >
              <Navbar />
              <div className="w-full">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
