import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  srcExclude: ['**/README.md'],
  srcDir: "docs",
  title: "Macrame - Documentation",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  description: "Documentation for the macro button panel app called Macrame.",
  themeConfig: {
    siteTitle: "Macrame",
    logo: "/Macrame-Logo-gradient.svg",
    footer: {
      message: "Licensed under the GNU GPLv3 <a href='license'>license</a>",
      copyright: "Copyright © 2025-present <a href='https://github.com/JaxxMoss'>Jesse Malotaux</a>",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/getting-started/installation" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/getting-started/installation" },
          { text: "What is Macrame?", link: "/getting-started/what-is" },
          { text: "FAQ", link: "/getting-started/faq" },
          { text: "Support", link: "/getting-started/support" },
        ],
      },
      {
        text: "Devices",
        items: [{ text: "Linking devices", link: "/devices/linking" }],
      },
      {
        text: "Panels",
        items: [
          { text: "Usage", link: "/panels/usage" },
          { text: "Linking macros", link: "/panels/linking-macros" },
          { text: "Creation", link: "/panels/creation" },
        ],
      },
      {
        text: "Macros",
        items: [
          { text: "Usage", link: "/macros/usage" },
          { text: "Recording", link: "/macros/recording" },
          { text: "Editing", link: "/macros/editing" },
        ],
      },
      {
        text: "About",
        items: [
          { text: "Creator", link: "/about/creator" },
          { text: "License", link: "//license" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "/https://github.com/macrame-app/macrame" },
    ],
  }
});
