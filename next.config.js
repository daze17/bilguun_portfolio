// next.config.js
const withNextIntl = require("next-intl/plugin")();
const path = require("path");

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        search: "",
      },
    ],
  },
  // outputFileTracingRoot: path.join(__dirname),
});
