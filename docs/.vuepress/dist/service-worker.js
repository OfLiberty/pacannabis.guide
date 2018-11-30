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
    "revision": "e3ff54eabf36417d7b92f477befcbf0d"
  },
  {
    "url": "assets/css/0.styles.74333c1e.css",
    "revision": "8ae5566fba3fd794f195687471ce1ea5"
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
    "url": "assets/js/11.84258234.js",
    "revision": "704ee39335b66a1e6889e6a37336f180"
  },
  {
    "url": "assets/js/12.13ecf3b8.js",
    "revision": "3c6bc9841aee15b7fc15c24c158b86e5"
  },
  {
    "url": "assets/js/13.fe07cd80.js",
    "revision": "bc498511c886decbb07e68632ba3c9e5"
  },
  {
    "url": "assets/js/14.f094c809.js",
    "revision": "5e21b4b3e76e3f8c55c41c516fe33e15"
  },
  {
    "url": "assets/js/15.af5ca64a.js",
    "revision": "ad6fb49af2767ca174de258a819c59c8"
  },
  {
    "url": "assets/js/16.27d7bb27.js",
    "revision": "5754e9865272ec06fa8f3754ad0a8b54"
  },
  {
    "url": "assets/js/17.5ff6b6bc.js",
    "revision": "e49c3c995990224d3ff205d684918b05"
  },
  {
    "url": "assets/js/18.4e512896.js",
    "revision": "8f191b1f7ce3bdd9c84e685c99c6f620"
  },
  {
    "url": "assets/js/19.6932cfcd.js",
    "revision": "d56d5ca3c646117d5bb7dbcc3805cf97"
  },
  {
    "url": "assets/js/20.a98aa288.js",
    "revision": "c2a61ea93caa22db480d9fb2de3cede7"
  },
  {
    "url": "assets/js/21.23d89a67.js",
    "revision": "adc82b475d0583298d430ff05ebe6e33"
  },
  {
    "url": "assets/js/22.89cd675b.js",
    "revision": "06e41cc38bc3e90c10d37af58714c262"
  },
  {
    "url": "assets/js/23.af80b13b.js",
    "revision": "4c8cdf523fdac731823f688afd0917cb"
  },
  {
    "url": "assets/js/24.8dc95ab2.js",
    "revision": "e77022e9b30cf956945d7265f7eeabc7"
  },
  {
    "url": "assets/js/25.b6177b78.js",
    "revision": "65b9984cc746aa5ea0c28cf065cf6aed"
  },
  {
    "url": "assets/js/26.33c7be8c.js",
    "revision": "43b04b23f4ee3acc5c75be220db91a00"
  },
  {
    "url": "assets/js/27.94638dd3.js",
    "revision": "a43e6045f72b876460ccd3eb9f16e569"
  },
  {
    "url": "assets/js/28.e8146689.js",
    "revision": "1440b7753bea4e9e371093116c81a5f1"
  },
  {
    "url": "assets/js/29.0ce602ee.js",
    "revision": "d94d605dae1df222e89c89a8a5a7bbfe"
  },
  {
    "url": "assets/js/3.2531ed59.js",
    "revision": "4e2133a70ab7353d5016a31ef0e51deb"
  },
  {
    "url": "assets/js/30.7ed54b05.js",
    "revision": "58fb2f5d61f5c45d49ef9185dbd959e0"
  },
  {
    "url": "assets/js/31.68614ed7.js",
    "revision": "bb819b9e8505022124b0c13c72e6a871"
  },
  {
    "url": "assets/js/32.7f00e70d.js",
    "revision": "5583a96a8497faa6e55e44048abaa626"
  },
  {
    "url": "assets/js/33.e290b506.js",
    "revision": "41f43f18db47aa9ace894e3074173a01"
  },
  {
    "url": "assets/js/34.c7ffc2d1.js",
    "revision": "821866fc308e20ec34b94899191f5b2f"
  },
  {
    "url": "assets/js/35.9826b382.js",
    "revision": "133e661392b1a302ab9fe52c612cde23"
  },
  {
    "url": "assets/js/36.f6f37198.js",
    "revision": "0a0bf13b95a2e65965ff1bdf310b3def"
  },
  {
    "url": "assets/js/37.d7c14898.js",
    "revision": "8b00eb29353cf3ae33fee035c0b1fef1"
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
    "url": "assets/js/4.7ac80b15.js",
    "revision": "fbe99750b8aa6c5dc7e698622a6615c2"
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
    "url": "assets/js/app.49e5a1ea.js",
    "revision": "4eb8a7c6204a4c97f278613dbb53b2f5"
  },
  {
    "url": "assets/js/vendors~notification.0bbc411b.js",
    "revision": "855b475a9fd2df08a854a5e62f8f965b"
  },
  {
    "url": "blog/2018/11/25/download-pwa-mobile.html",
    "revision": "c057b3169a9902ee556dbc54a71a66fe"
  },
  {
    "url": "blog/index.html",
    "revision": "0868c40b0477f63b4480477b6b48bafd"
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
    "revision": "6c7b8a51fdce093781f1f04b294312ca"
  },
  {
    "url": "guide/dispensaries/columbia-care/index.html",
    "revision": "258f635c099206e4a5c43ba9234eb2ee"
  },
  {
    "url": "guide/dispensaries/cresco-yeltrah/index.html",
    "revision": "caeba0a73c344d20b522b76d5409606a"
  },
  {
    "url": "guide/dispensaries/cure-pennsylvania/index.html",
    "revision": "b2f0bb20ca2a4cb430bdd44d75614386"
  },
  {
    "url": "guide/dispensaries/harvest-of-reading/index.html",
    "revision": "74786a32c0f78ecbc8838055aeb5d7a3"
  },
  {
    "url": "guide/dispensaries/herbology/index.html",
    "revision": "65a7e8629a0edd29d3f5acbca376554a"
  },
  {
    "url": "guide/dispensaries/ilera-healthcare/index.html",
    "revision": "d5c52812ed8ea742101bf9c1556e1bbe"
  },
  {
    "url": "guide/dispensaries/index.html",
    "revision": "054010ddff8ccb76496c955640acdd9c"
  },
  {
    "url": "guide/dispensaries/justice-grown/index.html",
    "revision": "74417ce119fb01c4582f211aea01d554"
  },
  {
    "url": "guide/dispensaries/keystone-canna-remedies/index.html",
    "revision": "b19eb7ecec077e4bee1b0fb6aad2db5b"
  },
  {
    "url": "guide/dispensaries/keystone-center-of-integrative-wellness/index.html",
    "revision": "bb914eb431e75dbe83d8df8ac60b7931"
  },
  {
    "url": "guide/dispensaries/keystone-shops/index.html",
    "revision": "2fb83e0fb1dbf889c45636f3e635db6a"
  },
  {
    "url": "guide/dispensaries/knox-medical/index.html",
    "revision": "9e3ba2911752f610ec4b400cf333afcc"
  },
  {
    "url": "guide/dispensaries/liberty/index.html",
    "revision": "e3277129bb5cb3f1156b7f70aa277c9c"
  },
  {
    "url": "guide/dispensaries/maitri-medicinals/index.html",
    "revision": "b526970bedfed50fada98f80588e4d0f"
  },
  {
    "url": "guide/dispensaries/mission-pennsylvania-ii/index.html",
    "revision": "0b720ccf69ce9b09ce034b94fba5da97"
  },
  {
    "url": "guide/dispensaries/natures-medicines/index.html",
    "revision": "763e04d12fab08900c6128dd6f3f146e"
  },
  {
    "url": "guide/dispensaries/organic-remedies--enola/index.html",
    "revision": "b22da768fc8d6f10a1bfbd8d5c3f5d49"
  },
  {
    "url": "guide/dispensaries/restore-integrative-wellness-center/index.html",
    "revision": "2dbaac002859de1ccf8f6434fb4b7f38"
  },
  {
    "url": "guide/dispensaries/rise/index.html",
    "revision": "40058e1cc73ca05df7016f293488b419"
  },
  {
    "url": "guide/dispensaries/solevo/index.html",
    "revision": "2b9d52c529b7833e49e6525c9f1ce9aa"
  },
  {
    "url": "guide/dispensaries/terravida-holistic-centers/index.html",
    "revision": "906e0c6a80713bd41614f2e5dd02dc5d"
  },
  {
    "url": "guide/dispensaries/the-healing-center/index.html",
    "revision": "0fcb6951a34a9368357b6e41d3fcf20b"
  },
  {
    "url": "guide/getting-certified.html",
    "revision": "0ee7a8fb7711dd9f91412a08eae185a1"
  },
  {
    "url": "guide/index.html",
    "revision": "97deeb846f7eecda3d36176ad93af9e5"
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
    "revision": "7d886140047fae7fb84b84022cd2f097"
  },
  {
    "url": "tools/find-practitioners.html",
    "revision": "9cdf2f72250bd0050ca62b6a94a49102"
  },
  {
    "url": "tools/index.html",
    "revision": "b3019b8b1c63d99ed765c29ae977c22b"
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
