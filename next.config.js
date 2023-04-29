const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
  },
  // trailingSlash: true,
});
