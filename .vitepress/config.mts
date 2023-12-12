import { defineConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Oinam Notes",
  description: "",

  ignoreDeadLinks: true,
  lastUpdated: false,
  cleanUrls: true,
  sitemap: { hostname: 'https://notes.oinam.com' },

  srcExclude: [ 'README.md' ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: '/oinam-logo.svg' },
    siteTitle: 'Notes',
    search: { provider: 'local' },

    lastUpdated: {
      text: 'Edited',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Oinam.com', link: 'https://oinam.com/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oinam/notes/' },
      { icon: 'twitter', link: 'https://twitter.com/oinam/' },
      { icon: 'instagram', link: 'https://www.instagram.com/oinam/' },
    ],

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar({
      // documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile  : true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: true,
      // collapseDepth: 2,
      sortMenusByName: true,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusOrderByDescending: false,
      sortMenusOrderNumerically: true,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      excludeFiles: ['README.md'],
      excludeFolders: ['node_modules', 'public'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: true,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),
    
  }
})