module.exports = {
  title: 'PA Cannabis Guide',
  description: 'Handbook guiding PA patients through cannabis products, services, and news',
  head: [
    ['link', { rel: 'shortcut icon', href: `/favicons/favicon.ico` }],
    ['link', { rel: 'icon', type:"image/png", sizes:"16x16", href: `/favicons/favicon-16x16.png` }],
    ['link', { rel: 'icon', type:"image/png", sizes:"32x32", href: `/favicons/favicon-32x32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/favicons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#1a7b00' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1a7b00' }]
  ],
  plugins: {
    plugins: ['@vuepress/blog'] ,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true,
    },
    '@vuepress/google-analytics': {
      ga: 'UA-129734946-2'
    },
  },
  ga: 'UA-129734946-2',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Blog', link: '/blog/' },
    ],
    lastUpdated: 'Last Updated',
    sidebar: {  
      '/guide/': [
        '',   
        'getting-certified',
        'dispensaries/',
      ],

      '/tools/': [
        '',    
        'find-practitioners',
        'find-dispensaries',
      ],

      '/blog/': [
        '',    
        '2018-11-25--download-the-guide-mobile',
      ],
    },
    docsRepo: 'OfLiberty/pacannabis.guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    serviceWorker: {
      updatePopup: true,
      updatePopup: { 
         message: "New content is available.", 
         buttonText: "Refresh" 
      }
    }
  },
}

