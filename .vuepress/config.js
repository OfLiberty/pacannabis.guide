module.exports = {
  title: 'PA Cannabis Guide',
  description: 'Guiding patients with locally available cannabis products',
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

