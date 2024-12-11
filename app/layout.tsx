import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { cn } from "./utils";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "./components/ui/theme-provider";

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
    <html
      lang="en"
      className={cn(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased mx-auto mt-0">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <div className="h-screen flex flex-col">
            {/* <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            > */}
            <Navbar />
            <div className={cn("w-full")}>{children}</div>
            <Footer />
            {/* </ThemeProvider> */}
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
