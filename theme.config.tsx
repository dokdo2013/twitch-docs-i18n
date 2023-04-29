import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Twitch API Docs i18n</span>,
  project: {
    link: "https://github.com/dokdo2013/twitch-docs-i18n",
  },
  docsRepositoryBase: "https://github.com/dokdo2013/twitch-docs-i18n",
  footer: {
    text: "Copyright © 2023 Twitch Docs i18n, Hyeon Woo Jo. Built with Nextra",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ko", text: "한국어" },
  ],
};

export default config;
