module.exports = {
  title: 'PA Cannabis Guide',
  description: 'Guiding PA patients through cannabis products, services, and news',
  head: [
    // ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Blog', link: '/blog/' },
    ],
    lastUpdated: 'Last Updated',
    sidebar: {
      '/guide/': [
        '',     /* /foo/ */
        'getting-certified',  /* /foo/one.html */
        'dispensories',
      ],

      '/tools/': [
        '',      /* /bar/ */
        'find-practitioners', /* /bar/three.html */
      ],

      // fallback
      // '/': [
      //   '',        /* / */
      //   'contact', /* /contact.html */
      //   'about'    /* /about.html */
      // ]
      serviceWorker: {
        updatePopup: true // Boolean | Object, default to undefined.
        // If set to true, the default text config will be: 
        // updatePopup: { 
        //    message: "New content is available.", 
        //    buttonText: "Refresh" 
        // }
      }
    },
    plugins: {
      plugins: ['@vuepress/blog'] ,
      '@vuepress/pwa': {
         serviceWorker: true,
        //  popupComponent: 'MySWUpdatePopup',
         updatePopup: true
      },
      '@vuepress/google-analytics': {
        ga: 'UA-129734946-2'
      }
    },
    docsRepo: 'OfLiberty/pacannabis.guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
  },
}

