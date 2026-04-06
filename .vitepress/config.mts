import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Bloxbind Documentation",
  description:
    "Welcome to the Bloxbind documentation where we will go over how to setup and configure Bloxbind for your community.",
  sitemap: {
    hostname: 'https://docs.bloxbind.com',
    lastmodDateOnly: false
  },
  themeConfig: {
    siteTitle: "Bloxbind Documentation",
    editLink: {
      pattern: "https://github.com/bloxbind/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "Getting Started", link: "/" },
          { text: "FAQ", link: "/faq/" },
          { text: "Changelog", link: "/changelog/" },
        ],
      },
      {
        text: "Settings",
        collapsed: false,
        items: [
          { text: "Naming Scheme", link: "/naming/" },
          { text: "Auto Verification", link: "/autoverif/" },
          { text: "Role Links", link: "/rolelinks/" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/bloxbind/docs" }],
  },
});
