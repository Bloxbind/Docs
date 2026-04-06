import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bloxbind Documentation",
  description: "Welcome to the Bloxbind documentation where we will go over how to setup and configure Bloxbind for your community.",
  themeConfig: {
    siteTitle: "Bloxbind Documentation",

    editLink: {
      pattern: 'https://github.com/bloxbind/main/edit/dev/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Changelog', link: '/changelog/' }
        ]
      },
      {
        text: 'Settings',
        items: [
          { text: 'Naming Scheme', link: '/naming/' },
          { text: 'Auto Verification', link: '/autoverif/' },
          { text: 'Role Links', link: '/rolelinks/' },

        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bloxbind/docs' }
    ]
  }
})