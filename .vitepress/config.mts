import { defineConfig } from 'vitepress';
import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Notes",
  description: "",

  ignoreDeadLinks: true,
  lastUpdated: false,
  cleanUrls: true,
  sitemap: { hostname: 'https://notes.oinam.com' },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: '/oinam-logo.svg' },
    siteTitle: 'Notes',
    search: { provider: 'local' },

    lastUpdated: {
      text: 'Last Edit',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Oinam.com', link: 'https://oinam.com/' },
    ],

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar({
      documentRootPath: '/',
      scanStartPath: null,
      useTitleFromFileHeading: true,
      hyphenToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: true,
      includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      excludeFiles: ['README.md'],
      excludeFolders: ['node_modules'],
      debugPrint: false
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oinam/notes/' },
      { icon: 'twitter', link: 'https://twitter.com/oinam/' },
      { icon: 'instagram', link: 'https://www.instagram.com/oinam/' },
    ]
  }
})
