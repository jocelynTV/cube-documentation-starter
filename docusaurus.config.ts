import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Cube",
  tagline: "Cube Documentation",
  favicon:
    "https://jocelyntv.github.io/cube-ant-design-dashboard/icons/icon-48x48.png",

  // Set the production url of your site here
  url: "https://jocelyntv.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jocelynTV", // Usually your GitHub org/user name.
  projectName: "cube-documentation-starter", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "architecture",
        path: "architecture",
        routeBasePath: "architecture",
        sidebarPath: "./sidebars.ts",
        // ... other options
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: null,
        },
        blog: {
          sortPosts: "ascending",
          blogSidebarTitle: "Table of Content",
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: null,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Cube",
      logo: {
        alt: "Cube Documentation",
        src: "https://jocelyntv.github.io/cube-ant-design-dashboard/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {to: "/architecture/overview", label: "Architecture", position: "left"},
        {
          href: "https://github.com/jocelynTV/cube-ant-design-dashboard",
          label: "Github",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © 2024 Cube by JocelynTV`,
    },
    prism: {
      additionalLanguages: ["powershell"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
