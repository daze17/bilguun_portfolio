import { fileURLToPath } from "node:url";

import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin();

await jiti.import("./app/env");

export default withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
});
