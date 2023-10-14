import { defineConfig } from 'vitepress';

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oinam/notes/' },
      { icon: 'twitter', link: 'https://twitter.com/oinam/' },
      { icon: 'instagram', link: 'https://www.instagram.com/oinam/' },
    ],

    // Sidebar: START -------------------------------------
    sidebar: [
      {
        text: 'Awesome',
        collapsed: false,
        items: [
          { text: 'Articles', link: '/awesome/articles' },
          { text: 'Bookmarks', link: '/awesome/bookmarks' },
          { text: 'Fun', link: '/awesome/fun' },
          { text: 'Video', link: '/awesome/video' },
        ],
      },
      {
        text: 'Digital',
        link: '/digital/',
        collapsed: false,
        items: [
          { text: 'Apple', link: '/digital/apple' },
          { text: 'Email', link: '/digital/email' },
          { text: 'Linux', link: '/digital/linux' },
          { text: 'macOS', link: '/digital/macos' },
        ],
      },
      {
        text: 'Earth',
        collapsed: true,
        items: [
          { text: 'Agriculture', link: '/earth/agriculture' },
        ],
      },
      {
        text: 'India',
        link: '/india/',
        collapsed: true,
        items: [
        ],
      },
      {
        text: 'Internet',
        link: '/internet/',
        collapsed: false,
        items: [
          { text: 'Email Etiquette', link: '/internet/email-etiquette' },
          { text: 'Internet Etiquette', link: '/internet/internet-etiquette' },
        ],
      },
      {
        text: 'Life',
        collapsed: true,
        items: [
          { text: 'Privacy', link: '/life/privacy' },
          { text: 'Go Bag', link: '/life/go-bag' },
          { text: 'Silence', link: '/life/silence' },
          { text: 'Slow is Smooth; Smooth is Fast', link: '/life/slow-is-smooth-smooth-is-fast' },
        ],
      },
      {
        text: 'Parenting',
        collapsed: true,
        items: [
          { text: '10 Life Skills to Teach Your Child by Age 10', link: '/parenting/10-life-skills-to-teach-your-child-by-age-10' },
          { text: 'Daughters', link: '/tmpl/daughters' },
          { text: 'Digital Literacy', link: '/tmpl/digital-literacy' },
          { text: 'Kid\'s Online', link: '/tmpl/kids-online' },
        ],
      },
      {
        text: 'Photography',
        link: '/photography/',
        collapsed: true,
        items: [
          
        ],
      },
      {
        text: 'Play',
        collapsed: true,
        items: [
          { text: 'Chess', link: '/play/chess' },
          { text: 'Rubik\'s Cube', link: '/play/rubiks-cube' },
        ],
      },
      {
        text: 'Technology',
        collapsed: true,
        items: [
          { text: 'HTML', link: '/technology/html' },
          { text: 'LaTeX', link: '/technology/latex' },
          { text: 'Markdown', link: '/technology/markdown' },
          { text: 'Pandoc', link: '/technology/pandoc' },
          { text: 'Password', link: '/technology/password' },
          { text: 'Raspberry Pi', link: '/technology/raspberry-pi' },
          { text: 'SpreadSheet', link: '/technology/spreadsheet' },
          { text: 'Text', link: '/technology/text' },
          { text: 'Wi-Fi', link: '/technology/wi-fi' },
        ],
      },
      {
        text: 'Writing',
        collapsed: true,
        items: [
          { text: 'BLUF', link: '/writing/bluf' },
          { text: 'Newsletter', link: '/writing/newsletter' },
          { text: 'Rule of Three', link: '/writing/rule-of-three' },
          { text: 'Express Not Impress', link: '/writing/write-to-express-not-to-impress' },
          { text: 'Writing in Business', link: '/writing/writing-business' },
        ],
      },
      
    ]
    // Sidebar: END --------------------------------------

  }
})