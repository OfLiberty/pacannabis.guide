module.exports = {
  title: 'PA Cannabis Guide',
  description: 'Handbook guiding PA patients through cannabis products, services, and news',
  head: [
    ['meta', { property: 'og:title', content: 'PA Cannabis Guide'}],
    ['meta', { property: 'og:description', content: 'Handbook guiding PA patients through cannabis products, services, and news'}],
    ['meta', { property: 'og:image', content: 'https://pacannabis.guide/images/open-graph.png'}],
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
    ['meta', { name: 'msapplication-TileColor', content: '#1a7b00' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin: 'anonymous' }],
    // ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",  crossorigin: 'anonymous' }],
  ],
  themeConfig: {
    serviceWorker: {
      updatePopup: true,
    },
    search: true,
    searchMaxSuggestions: 10,
    // displayAllHeaders: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      // {
      //   text: 'Products',
      //   items: [
      //     { text: 'Find a Practitioner', link: '/tools/find-practitioners' },
      //     { text: 'Find a Dispensary', link: '/tools/find-dispensaries' }
      //   ]
      // },
      // { text: 'Resources', link: '/resources/' },
      { text: 'Blog', link: '/blog/' },
    ],
    lastUpdated: 'Last Updated',
    sidebar: {
      '/guide/': [
        '',   
        'getting-certified',
        'dispensaries/',
        'cannabis',
      ],

      // '/tools/': [
      //   '',    
      //   'find-practitioners',
      // ],

      '/blog/': [
        '',    
        '2018-11-25--download-pwa-mobile',
      ],
    },
    docsRepo: 'OfLiberty/pacannabis.guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', false],
    ['@vuepress/notification', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-129734946-2'
    }],
    // ['register-components', {
    //     components: [
    //       {
    //         name: 'dispensary',
    //         path: './components/Dispensary.vue'
    //       }
    //     ]
    // }]
  ],
  markdown: {
    externalLinks: { permalinkBefore: false }
  },
  ga: 'UA-129734946-2',
  impactWireless: 'https://influencepays.clickfunnels.com/influencer-back-office',
}

