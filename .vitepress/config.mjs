import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  exclude: ["README.md"],
  title: "Macrame - Documentation",
  description: "Documentation for the macro button panel app called Macrame.",
  themeConfig: {
    siteTitle: "Macrame",
    logo: "/assets/img/Macrame-Logo-gradient.svg",
    footer: {
      message: "Licensed under the GNU GPLv3 <a href='license'>license</a>",
      copyright: "Copyright © 2025-present <a href='https://github.com/JaxxMoss'>Jesse Malotaux</a>",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/docs/getting-started/installation" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/docs/getting-started/installation" },
          { text: "What is Macrame?", link: "/docs/getting-started/what-is" },
        ],
      },
      {
        text: "Devices",
        items: [{ text: "Linking devices", link: "/docs/devices/linking" }],
      },
      {
        text: "Panels",
        items: [
          { text: "Usage", link: "/docs/panels/usage" },
          { text: "Linking macros", link: "/docs/panels/linking-macros" },
          { text: "Creation", link: "/docs/panels/creation" },
        ],
      },
      {
        text: "Macros",
        items: [
          { text: "Usage", link: "/docs/macros/usage" },
          { text: "Recording", link: "/docs/macros/recording" },
          { text: "Editing", link: "/docs/macros/editing" },
        ],
      },
      {
        text: "About",
        items: [
          { text: "Creator", link: "/docs/about/creator" },
          { text: "License", link: "/license" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  }
});
