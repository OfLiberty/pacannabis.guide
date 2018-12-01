/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "386102f943c4428046c0a641258e6151"
  },
  {
    "url": "assets/css/0.styles.67f2a135.css",
    "revision": "c7def556d985eba1e7f74a5024df1924"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.488c7e59.js",
    "revision": "d7e8da3484b1a196ca3c4b41b7dfdf3d"
  },
  {
    "url": "assets/js/11.56174f80.js",
    "revision": "b1f5e831ac85c45815c961d24c4f3240"
  },
  {
    "url": "assets/js/12.13ecf3b8.js",
    "revision": "3c6bc9841aee15b7fc15c24c158b86e5"
  },
  {
    "url": "assets/js/13.e1c89970.js",
    "revision": "6a0920d179a5d12d9c2163c19c2a80ca"
  },
  {
    "url": "assets/js/14.41fa137d.js",
    "revision": "52102a981821db885003b9fb4bb826c6"
  },
  {
    "url": "assets/js/15.af5ca64a.js",
    "revision": "ad6fb49af2767ca174de258a819c59c8"
  },
  {
    "url": "assets/js/16.b7bde785.js",
    "revision": "ca2613a32211b62db65fd022a10289b3"
  },
  {
    "url": "assets/js/17.c408f7fe.js",
    "revision": "09842138bf110404aacdad3388562af6"
  },
  {
    "url": "assets/js/18.0de33547.js",
    "revision": "bba0a8dc61989e4c47d6e1f1ed9d29ba"
  },
  {
    "url": "assets/js/19.986ce3c7.js",
    "revision": "ef995b327184158575b2d2a3c3c41eeb"
  },
  {
    "url": "assets/js/20.078f5b01.js",
    "revision": "c88dfd48f9ef028ab5a9c6b98bbbabc4"
  },
  {
    "url": "assets/js/21.f4835932.js",
    "revision": "685a75c172d874c0f2d39874405da31a"
  },
  {
    "url": "assets/js/22.558c163a.js",
    "revision": "a01c396ebbd4ff237db3d9ffaecd077e"
  },
  {
    "url": "assets/js/23.148c3508.js",
    "revision": "ff391b7087d4bc224f1b8b3f1de89498"
  },
  {
    "url": "assets/js/24.247f1fc8.js",
    "revision": "a5fb38d2990d9b2938407e55007de0b7"
  },
  {
    "url": "assets/js/25.beb29ba3.js",
    "revision": "b8e06f51d4f65b018acac19ae78c4ee2"
  },
  {
    "url": "assets/js/26.c51d9598.js",
    "revision": "576d1505c943aa5dc67a6d3276b9f3c4"
  },
  {
    "url": "assets/js/27.cbdd3c68.js",
    "revision": "cdd7045117b94a825f0ced8d20895f0e"
  },
  {
    "url": "assets/js/28.658121f8.js",
    "revision": "a7f825744c85927ccd94b54877deb04f"
  },
  {
    "url": "assets/js/29.e7838905.js",
    "revision": "d84e9d40ef6b274cfb4b6461c1d769bb"
  },
  {
    "url": "assets/js/3.2531ed59.js",
    "revision": "4e2133a70ab7353d5016a31ef0e51deb"
  },
  {
    "url": "assets/js/30.8f5299f7.js",
    "revision": "c44145c3374173975517fc01e4621f38"
  },
  {
    "url": "assets/js/31.1c0eefa2.js",
    "revision": "221a397b6b00cd6ecb49db7e4bb29d41"
  },
  {
    "url": "assets/js/32.93f210a3.js",
    "revision": "f0747e1e9624ad1aec3da5d8f262b97c"
  },
  {
    "url": "assets/js/33.532e1d20.js",
    "revision": "773139fe623c81008e5d6e0ea2f4257f"
  },
  {
    "url": "assets/js/34.45f471e1.js",
    "revision": "23163743806a3b1566a19020ccec5ad5"
  },
  {
    "url": "assets/js/35.70c64c53.js",
    "revision": "447a518a11e8e656b113483690117aa9"
  },
  {
    "url": "assets/js/36.6ec41fab.js",
    "revision": "ffb02be7af96e9380fb9d9ef33c0136a"
  },
  {
    "url": "assets/js/37.64400042.js",
    "revision": "c759a7727b7da6f63d91371378445e23"
  },
  {
    "url": "assets/js/38.69b8897e.js",
    "revision": "042c67b9146fcd35e4d9c222ec5365cd"
  },
  {
    "url": "assets/js/39.ae7861d0.js",
    "revision": "99f1f15bd266f646b2a483f6e572f65c"
  },
  {
    "url": "assets/js/4.b4aa9676.js",
    "revision": "00a7b8214c616f1b8f6262c3c6b36aaa"
  },
  {
    "url": "assets/js/40.d583dfa0.js",
    "revision": "57abc31b9314bad00f13238b9b235570"
  },
  {
    "url": "assets/js/5.59be8cd5.js",
    "revision": "eea2e18b5263bf223242c41b4a0e0547"
  },
  {
    "url": "assets/js/6.9e4e68d6.js",
    "revision": "c771c956a10ab105c9ed9970a321c37e"
  },
  {
    "url": "assets/js/7.f5be1d31.js",
    "revision": "652ead423b0f021a4842a40c792ce1b9"
  },
  {
    "url": "assets/js/8.d9b4585a.js",
    "revision": "08185893e8577b35c516caa658ea6be0"
  },
  {
    "url": "assets/js/9.95ecb6e8.js",
    "revision": "35f14d46f4c1679ae9bfaeb1788e11ac"
  },
  {
    "url": "assets/js/app.39baf7d1.js",
    "revision": "e3ed27fc04bb89b5b55f6c14fa8492dc"
  },
  {
    "url": "assets/js/vendors~notification.0bbc411b.js",
    "revision": "855b475a9fd2df08a854a5e62f8f965b"
  },
  {
    "url": "blog/2018/11/25/download-pwa-mobile.html",
    "revision": "3149f3e837e86ea8f5b6a6cf62724b6d"
  },
  {
    "url": "blog/index.html",
    "revision": "5bf6992ca10661f8e1dfc2baf33f22de"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "c3680c17e774e4d1c10fe64f644d94d7"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "414acc73aa9fae8d7b7de82561d3dabc"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "7dfe217b59019b149d4cff7f6047da1e"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "402677ee46240713df577f99d3adaffd"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "c9aa7e2eb7d03a288332e213776ab1d4"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "f6bc293fe1a7f290d49ed0b5feda4296"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "6504be8b40da7425a0458b4de20ca02c"
  },
  {
    "url": "google092f2d756e081b9b.html",
    "revision": "2defac518b84f7d90ecb656938fcad2e"
  },
  {
    "url": "guide/dispensaries/beyond-hello/index.html",
    "revision": "33cb73414b96c389ee0fb404663c4142"
  },
  {
    "url": "guide/dispensaries/columbia-care/index.html",
    "revision": "e898c4122f2f47351d5dbcf989af03fe"
  },
  {
    "url": "guide/dispensaries/cresco-yeltrah/index.html",
    "revision": "2a3c99b91b5349b314cdf729f8fbfe7c"
  },
  {
    "url": "guide/dispensaries/cure-pennsylvania/index.html",
    "revision": "21ef9e71efd25049b6f0ae501370ec55"
  },
  {
    "url": "guide/dispensaries/harvest-of-reading/index.html",
    "revision": "e6515e1fbeb8d59d2dc86b6a2d205205"
  },
  {
    "url": "guide/dispensaries/herbology/index.html",
    "revision": "f07c04b59494f8ba4c3bd56956d887bf"
  },
  {
    "url": "guide/dispensaries/ilera-healthcare/index.html",
    "revision": "1301bf78c2499d0c5a8594ec584c7094"
  },
  {
    "url": "guide/dispensaries/index.html",
    "revision": "acfaa56c89c1c5c6f4d0175399000b7e"
  },
  {
    "url": "guide/dispensaries/justice-grown/index.html",
    "revision": "e97a676f4913dadf078dbc7547e3d6c6"
  },
  {
    "url": "guide/dispensaries/keystone-canna-remedies/index.html",
    "revision": "c9c2e22899a828631d6dbbbd962a3976"
  },
  {
    "url": "guide/dispensaries/keystone-center-of-integrative-wellness/index.html",
    "revision": "2f8df90920d9154ffeb73793ef1bcf43"
  },
  {
    "url": "guide/dispensaries/keystone-shops/index.html",
    "revision": "12c2f2115b0ef6441152d1b981a7f9a0"
  },
  {
    "url": "guide/dispensaries/knox-medical/index.html",
    "revision": "25e2ff79008838a1b73fb8ffae804863"
  },
  {
    "url": "guide/dispensaries/liberty/index.html",
    "revision": "f3519786c6a3625ff902b3163c72d8c8"
  },
  {
    "url": "guide/dispensaries/maitri-medicinals/index.html",
    "revision": "07adbdf6850360ce2bf92920f6658ae0"
  },
  {
    "url": "guide/dispensaries/mission-pennsylvania-ii/index.html",
    "revision": "23a730851cd25dd4d27559c542331ffd"
  },
  {
    "url": "guide/dispensaries/natures-medicines/index.html",
    "revision": "b8792b31cb88a5af536e963fe12d85cc"
  },
  {
    "url": "guide/dispensaries/organic-remedies/index.html",
    "revision": "4d5d46c11ae0fb5471a895a9f3ec7c15"
  },
  {
    "url": "guide/dispensaries/restore-integrative-wellness-center/index.html",
    "revision": "5a7ee3d6581b3834602e69da28447b66"
  },
  {
    "url": "guide/dispensaries/rise/index.html",
    "revision": "fa91f9eba7421f0051d7bf4d3239a56a"
  },
  {
    "url": "guide/dispensaries/solevo/index.html",
    "revision": "b66f5e9dc1eb2e6f3951deb2024b1980"
  },
  {
    "url": "guide/dispensaries/terravida-holistic-centers/index.html",
    "revision": "b18a7f87d33a8789c0900b0acafd0f9d"
  },
  {
    "url": "guide/dispensaries/the-healing-center/index.html",
    "revision": "90cc1732b58488cb1574c8cbb5269b31"
  },
  {
    "url": "guide/getting-certified.html",
    "revision": "644bdfb6dfae737ed341ca7bfb9920e3"
  },
  {
    "url": "guide/index.html",
    "revision": "197fec0b7830c33a1d98ca0dda519c22"
  },
  {
    "url": "images/hero.png",
    "revision": "42e7bce7e747a3b96870dc9ca5219cc8"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "985d95060a85afe5a564f59073c9d2ba"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0557c14d1978701e84b7a803e3695b73"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "a3502545417ca920861be4a164410f9b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d57601b6c07c95c94e0629c91a28614e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8012868089e4df2091b60b3bef154076"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "f570d03901225c7774e7bca19e8f89ae"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "cc246dfdd9b75dfa2c9336d752bc69d6"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a107fe2d66d5bcf6a9e95f717aee1107"
  },
  {
    "url": "images/install-pwa--1--orgiginal.png",
    "revision": "8f41b0197f3ff854a84878a27f6c12eb"
  },
  {
    "url": "images/install-pwa--1.png",
    "revision": "0fdcb7ca671c586ef30a349e33885316"
  },
  {
    "url": "images/install-pwa--2--original.png",
    "revision": "3942334b4f88ecf9694976e51d9907e9"
  },
  {
    "url": "images/install-pwa--2.png",
    "revision": "bc968bc4cccd655a7830ce33d35e20cc"
  },
  {
    "url": "images/install-pwa--3.png",
    "revision": "6e30a8fc7126d67ddf6d2120fe38a2d3"
  },
  {
    "url": "images/install-pwa--4.png",
    "revision": "8245fa834cf54a528bd314d0ed73ce2b"
  },
  {
    "url": "images/install-pwa--5.png",
    "revision": "0d703f6b58e543ea0f1787518fcc8c7d"
  },
  {
    "url": "index.html",
    "revision": "5ce33573fa69f5e0f333a9ccbad739c6"
  },
  {
    "url": "tools/find-practitioners.html",
    "revision": "47cc7eebb42d6502ac53b78f9af131ce"
  },
  {
    "url": "tools/index.html",
    "revision": "b2f95ccc57bf948d7187081d4c3bf6c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
