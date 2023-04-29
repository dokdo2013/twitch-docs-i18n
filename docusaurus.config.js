// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Twitch Docs i18n",
  tagline: "The internationalization of Twitch Developer Document",
  url: "https://twitch-docs-i18n.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dokdo2013", // Usually your GitHub org/user name.
  projectName: "twitch-docs-i18n", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ko: {
        label: "한국어",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/dokdo2013/twitch-docs-i18n/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Twitch Docs i18n",
        logo: {
          alt: "Twitch Docs i18n Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "API/overview",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "Eventsub/intro",
            position: "left",
            label: "EventSub",
          },
          {
            type: "doc",
            docId: "Chat & Chatbot/intro",
            position: "left",
            label: "Chat",
          },
          {
            type: "doc",
            docId: "Authentication/intro",
            position: "left",
            label: "Auth",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/dokdo2013/twitch-docs-i18n",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Twitch Docs i18n, Hyeon Woo Jo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
