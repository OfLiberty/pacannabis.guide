module.exports = {
  title: 'PA Cannabis Guide',
  description: 'Guiding PA patients through cannabis products, services, and news',
  plugins: ['@vuepress/pwa'],
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
    },

    docsRepo: 'OfLiberty/pacannabis.guide',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }
  }
}

