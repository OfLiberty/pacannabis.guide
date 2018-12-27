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
    "revision": "150741d2bc137eea5a00098b820e29fc"
  },
  {
    "url": "assets/css/0.styles.56d8a6ec.css",
    "revision": "ac6b107234f1c46cfdcc278e5ad149dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77499db3.js",
    "revision": "97ba9a6ffc611bbf651023159f60a4e3"
  },
  {
    "url": "assets/js/11.d18948de.js",
    "revision": "aa9e3f448e8e8c2574f3bbe846262146"
  },
  {
    "url": "assets/js/12.b24be53a.js",
    "revision": "0e04bf95614b900c9e3af89d7efd2d39"
  },
  {
    "url": "assets/js/13.76320cd5.js",
    "revision": "782c40c8a09994ecd8919ee4f0e398c7"
  },
  {
    "url": "assets/js/14.6231bc81.js",
    "revision": "b573c3cec16ff4d200028de7a426c3ba"
  },
  {
    "url": "assets/js/15.9a70eac1.js",
    "revision": "cc461be360928c4f2fbd7c82abcdf1e2"
  },
  {
    "url": "assets/js/16.610f338c.js",
    "revision": "d5aba92d2a6a3f642d190e52ddf3afcf"
  },
  {
    "url": "assets/js/17.e35e9d09.js",
    "revision": "ae2f6354a73123735971f6dca83dfc4e"
  },
  {
    "url": "assets/js/18.4682742d.js",
    "revision": "a84206e88179391fee7b5192bcbcd6e4"
  },
  {
    "url": "assets/js/19.d0d675e6.js",
    "revision": "e34422427356f5f2becf190f9aa57c61"
  },
  {
    "url": "assets/js/20.35522b7a.js",
    "revision": "18adb3f5efe78daaa2ddbe290542b6a4"
  },
  {
    "url": "assets/js/21.663d3e21.js",
    "revision": "ff8f1dad20e9efa5f0012830fb98a416"
  },
  {
    "url": "assets/js/22.9413c05b.js",
    "revision": "7aeae2f2117efa5fddfb8558018b8c9e"
  },
  {
    "url": "assets/js/23.448e250e.js",
    "revision": "32ae83ec439b358c8a8f3ae8b0dd01dd"
  },
  {
    "url": "assets/js/24.90122891.js",
    "revision": "45bfd9edce67a4c930311cb50287272e"
  },
  {
    "url": "assets/js/25.033eb443.js",
    "revision": "f7202af5d2d3046a2a9f8527e548558d"
  },
  {
    "url": "assets/js/26.5008d101.js",
    "revision": "09b4d802c9ad0a265d545b2a8e92249b"
  },
  {
    "url": "assets/js/27.f794d3e2.js",
    "revision": "37a43e9e1f114853871ac9965079b386"
  },
  {
    "url": "assets/js/28.d999e15f.js",
    "revision": "e09b4fc3b2fe0fd7edc5e73fdc812ab5"
  },
  {
    "url": "assets/js/29.020debc6.js",
    "revision": "8b4dbb8649040901e7795dce0ce0506d"
  },
  {
    "url": "assets/js/3.e942d54a.js",
    "revision": "b77b3ce095bc58262cf428f03459c880"
  },
  {
    "url": "assets/js/30.41699cb8.js",
    "revision": "a65b53165e5b3501a3380a5119fa7de4"
  },
  {
    "url": "assets/js/31.e046ac02.js",
    "revision": "43b50af3c5fd35df54fbf517c51b700c"
  },
  {
    "url": "assets/js/32.467f0615.js",
    "revision": "6f0ba5c4b6c145920d621f2bf8301e0e"
  },
  {
    "url": "assets/js/33.36ec56c5.js",
    "revision": "82b11f1173e100fb9de20b8fc2f14cd6"
  },
  {
    "url": "assets/js/34.c1350788.js",
    "revision": "708b2d3bc6101221868b1f7c8ca290c0"
  },
  {
    "url": "assets/js/35.da598301.js",
    "revision": "d1706a4c87f56d84fc34702fcca0294a"
  },
  {
    "url": "assets/js/36.ed3c73f9.js",
    "revision": "c8f65ef8f0b54ed5e3f3f9a47aaa5672"
  },
  {
    "url": "assets/js/37.96099227.js",
    "revision": "e5546fb33a93f0d372a3ab8cc2885d4c"
  },
  {
    "url": "assets/js/38.eedd6eda.js",
    "revision": "afa4b081386b358c331635395a788219"
  },
  {
    "url": "assets/js/39.c9e00157.js",
    "revision": "632cd1a41c6aa07a00c7c36d88747c5f"
  },
  {
    "url": "assets/js/4.eb481509.js",
    "revision": "458f921c6e83148ace413569cd1fb74a"
  },
  {
    "url": "assets/js/40.344addc2.js",
    "revision": "8cceafa40b4fbe05fc03abc04360ee94"
  },
  {
    "url": "assets/js/41.15300316.js",
    "revision": "5e300ed1de05ac1fcdc9d9f2f2df4583"
  },
  {
    "url": "assets/js/42.51bd529d.js",
    "revision": "fa315513202d20bf6b09f220264d1d6b"
  },
  {
    "url": "assets/js/43.eeb53f68.js",
    "revision": "2891ade87e6e301fb910b4d8b0534dde"
  },
  {
    "url": "assets/js/44.b7ff7b5e.js",
    "revision": "f700fcdb360df97a1a634c7ec19fe79a"
  },
  {
    "url": "assets/js/45.5acb5736.js",
    "revision": "b5bfe7e5c1cdba9b05e9858d32123e00"
  },
  {
    "url": "assets/js/46.fe8826bf.js",
    "revision": "a035b6b03149c21d0d2b6cadd2df50ce"
  },
  {
    "url": "assets/js/47.228ec244.js",
    "revision": "f477feb5b4050eb013c275f80070934d"
  },
  {
    "url": "assets/js/48.3230ec3e.js",
    "revision": "d686d1c9adb6116c4e7e467681fbacee"
  },
  {
    "url": "assets/js/49.9306d588.js",
    "revision": "8c610b197e994e8223b15314ba6a3b8f"
  },
  {
    "url": "assets/js/5.4eb9d299.js",
    "revision": "111026bd658ed817e13216f79610334e"
  },
  {
    "url": "assets/js/50.f0b08919.js",
    "revision": "053f7a3ced38d60dfa99442c1b0fbf3f"
  },
  {
    "url": "assets/js/51.b1ec72dd.js",
    "revision": "0886e55d15fd31c288ae447cdeb7cf1e"
  },
  {
    "url": "assets/js/52.ce695aed.js",
    "revision": "2bdc7321e90aa2668fe28c5f28243629"
  },
  {
    "url": "assets/js/53.ceb5f96c.js",
    "revision": "5379c624f8dc5438aae7598c9a287274"
  },
  {
    "url": "assets/js/54.ebb51cde.js",
    "revision": "e8cd2ddb24301b5cc5ccf5d103189d53"
  },
  {
    "url": "assets/js/55.79f2bc34.js",
    "revision": "40d650f0cc8693f5d30e07cd585d1671"
  },
  {
    "url": "assets/js/56.b41b9d19.js",
    "revision": "9d15696ff2cdb666a610d97825fb95f6"
  },
  {
    "url": "assets/js/57.5886f137.js",
    "revision": "00094297c58b9e8db7eb33e783731cc9"
  },
  {
    "url": "assets/js/58.ca7e2a28.js",
    "revision": "56a0ba826629a101edafe39c37da05de"
  },
  {
    "url": "assets/js/59.b5f7d0c9.js",
    "revision": "b522c80f68dd2237036cd5698aded0a1"
  },
  {
    "url": "assets/js/6.8909c4ed.js",
    "revision": "3eba843c3137ac28b601e83578740fe7"
  },
  {
    "url": "assets/js/60.e56389e9.js",
    "revision": "66d466080ce40b3eaea99b643815d079"
  },
  {
    "url": "assets/js/61.650f1a5e.js",
    "revision": "3913ff96c8de01abc4b1ec75949787f3"
  },
  {
    "url": "assets/js/62.96c29513.js",
    "revision": "18171a32162084f0ca2bb4bc0b35119b"
  },
  {
    "url": "assets/js/63.745ddab0.js",
    "revision": "0a5f41df0ce169a5eb3bc0d91e6ee22e"
  },
  {
    "url": "assets/js/64.fd4cde3c.js",
    "revision": "0368f4fcd0f34f712fca4714b5b80e37"
  },
  {
    "url": "assets/js/65.d2e0e529.js",
    "revision": "c762a0a48b3b8e48905ef5dce603ab72"
  },
  {
    "url": "assets/js/66.5ffa6219.js",
    "revision": "5c2ce85e58e71beea7de911b56f1f28a"
  },
  {
    "url": "assets/js/67.bfff9557.js",
    "revision": "826533aef674509262941db622dbe196"
  },
  {
    "url": "assets/js/68.825c1db6.js",
    "revision": "bb4c1c885102bf6c92eb41e2136442cd"
  },
  {
    "url": "assets/js/69.fc3ad7b8.js",
    "revision": "6176a07487ba2f3eedcc87bde1909793"
  },
  {
    "url": "assets/js/7.f79152bb.js",
    "revision": "18fc85f58f1806ce597414e269c840d2"
  },
  {
    "url": "assets/js/70.6722fd58.js",
    "revision": "f7a2b3e9ab7cade538dc520a2c4f6bc8"
  },
  {
    "url": "assets/js/71.a3365a41.js",
    "revision": "f1d982ef80ea8a6af8f9bcfbcef257fe"
  },
  {
    "url": "assets/js/72.df740508.js",
    "revision": "f13af93afb47842f5f2e3af8e6a8f187"
  },
  {
    "url": "assets/js/73.1e9a8219.js",
    "revision": "51a70d143214ce22fe1162c163b6d54e"
  },
  {
    "url": "assets/js/74.a2d78c58.js",
    "revision": "b1bcf49ca62c440f45718d0837ed2ce7"
  },
  {
    "url": "assets/js/75.f6fd8410.js",
    "revision": "cec1366582632e4a484f351999a1b47f"
  },
  {
    "url": "assets/js/76.9c230900.js",
    "revision": "cce38092e669d870805d70b88c54abbd"
  },
  {
    "url": "assets/js/77.7735da03.js",
    "revision": "acc00446c93f0708c64d6a5c0ea5d81a"
  },
  {
    "url": "assets/js/78.05f1006a.js",
    "revision": "69739e17c35f1703f3690d56bce68b0d"
  },
  {
    "url": "assets/js/79.d1dcc8ef.js",
    "revision": "ca8b553e792d582433055edcfe9fb183"
  },
  {
    "url": "assets/js/8.3d58f2b3.js",
    "revision": "df4aae86405dcdd3af075460397bef32"
  },
  {
    "url": "assets/js/80.4ffd4b76.js",
    "revision": "dcb17c1bca789e80444c96935c75cc6b"
  },
  {
    "url": "assets/js/81.981741d4.js",
    "revision": "edb75f767c6d51f1f1ad9c0593187343"
  },
  {
    "url": "assets/js/82.55f22c9b.js",
    "revision": "a78c306f65683cab63fe48e08cd7de04"
  },
  {
    "url": "assets/js/9.9c18446e.js",
    "revision": "62fafcc6b3d46b49793a24e1cd63211d"
  },
  {
    "url": "assets/js/app.f018e6dc.js",
    "revision": "d4e346982546c31206af309f0be2a032"
  },
  {
    "url": "assets/js/vendors~notification.fa42f689.js",
    "revision": "59144b91820dd09c5da2ed5aa1855b1f"
  },
  {
    "url": "blog/2018/11/25/download-pwa-mobile.html",
    "revision": "822367e08e433e1c733bc792d8b8c10e"
  },
  {
    "url": "blog/2018/11/25/download-pwa-mobile/index.html",
    "revision": "14ec3564f831318f4cc3cca9c33cb0bb"
  },
  {
    "url": "blog/2018/12/10/pennsylvania-cannabis-festival/index.html",
    "revision": "3bf8d26e49b5056ca1810f19724a79bf"
  },
  {
    "url": "blog/2018/12/16/alpha-v0.4/index.html",
    "revision": "c352c882d64b71a4a84efb37dab6a642"
  },
  {
    "url": "blog/index.html",
    "revision": "d319aa109382deda40a86562ffde8fe3"
  },
  {
    "url": "entireweb.html",
    "revision": "cd3d81facde2611437d740b976586a72"
  },
  {
    "url": "es/blog/2018/11/25/download-pwa-mobile/index.html",
    "revision": "a571caa52ac906b93b295c3a6d56730f"
  },
  {
    "url": "es/blog/2018/12/10/pennsylvania-cannabis-festival/index.html",
    "revision": "a6b01648eaf7a2cc0ab4b1a19dfc4769"
  },
  {
    "url": "es/blog/2018/12/16/alpha-v0.4/index.html",
    "revision": "c5c2ff0f742e879cd1b3239ffcb4081a"
  },
  {
    "url": "es/blog/index.html",
    "revision": "9b96e8b5a9a9c1a005039a0d6ec0df05"
  },
  {
    "url": "es/faqs/index.html",
    "revision": "89bde27c8107a6dd64a1dbbf1959ce31"
  },
  {
    "url": "es/guide/cannabis/index.html",
    "revision": "4a5c98a9e5f6645f6523efa9b8c7bef1"
  },
  {
    "url": "es/guide/dispensaries/beyond-hello/index.html",
    "revision": "840c2a6fc8f70d899fb3ccbedeba592b"
  },
  {
    "url": "es/guide/dispensaries/columbia-care/index.html",
    "revision": "e612591a4b68da117c1e18a259a52dd6"
  },
  {
    "url": "es/guide/dispensaries/cresco-yeltrah/index.html",
    "revision": "9e13847de7cb952c17e991465322fd7a"
  },
  {
    "url": "es/guide/dispensaries/cure-pennsylvania/index.html",
    "revision": "a9bd424d673e7786b9ca557c9dd79cfb"
  },
  {
    "url": "es/guide/dispensaries/harvest-of-reading/index.html",
    "revision": "aab563f8a5c58a1379a746db38406463"
  },
  {
    "url": "es/guide/dispensaries/herbology/index.html",
    "revision": "2383d51cba86470223741fc6fa0cdd0a"
  },
  {
    "url": "es/guide/dispensaries/ilera-healthcare/index.html",
    "revision": "5d40b4d1b2fadb5927cbc056d3ddbe3c"
  },
  {
    "url": "es/guide/dispensaries/index.html",
    "revision": "726b20d44fad40e9938add9b6c613969"
  },
  {
    "url": "es/guide/dispensaries/justice-grown/index.html",
    "revision": "466da55a0e0a7ad6a656c1ec395fbc26"
  },
  {
    "url": "es/guide/dispensaries/keystone-canna-remedies/index.html",
    "revision": "f9b32b937a3615700d50ae5bb55df2c2"
  },
  {
    "url": "es/guide/dispensaries/keystone-center-of-integrative-wellness/index.html",
    "revision": "7620a2a9bf3c49cedebde4ddec9d911a"
  },
  {
    "url": "es/guide/dispensaries/keystone-shops/index.html",
    "revision": "20a4472a2608f7fcc3d48fb4a2501612"
  },
  {
    "url": "es/guide/dispensaries/knox-medical/index.html",
    "revision": "cdcb2d29f661b4bf9e76512994d17e82"
  },
  {
    "url": "es/guide/dispensaries/liberty/index.html",
    "revision": "61ab60b2d226bca4b9b2599465ec3c1d"
  },
  {
    "url": "es/guide/dispensaries/maitri-medicinals/index.html",
    "revision": "b62529bd69c37d7bcb20e47dcdfe7e1e"
  },
  {
    "url": "es/guide/dispensaries/mission-pennsylvania-ii/index.html",
    "revision": "9a492e89d6e025e23b0a0168c160c7c7"
  },
  {
    "url": "es/guide/dispensaries/natures-medicines/index.html",
    "revision": "c8af17c1b0e395b20ab81ca47e31f466"
  },
  {
    "url": "es/guide/dispensaries/organic-remedies/index.html",
    "revision": "a21d1740db75a4139644b18411890aa9"
  },
  {
    "url": "es/guide/dispensaries/restore-integrative-wellness-center/index.html",
    "revision": "da66d35bf75742d3160e33fb525cc244"
  },
  {
    "url": "es/guide/dispensaries/rise/index.html",
    "revision": "efa47524a825b6cf68034dd6c1c79ccf"
  },
  {
    "url": "es/guide/dispensaries/solevo/index.html",
    "revision": "e64dde41a0fe0c8598631de163d19562"
  },
  {
    "url": "es/guide/dispensaries/terravida-holistic-centers/index.html",
    "revision": "89775bd979ca6dd2ff98dd028bb47f15"
  },
  {
    "url": "es/guide/dispensaries/the-healing-center/index.html",
    "revision": "47d6d407c8f698d21a031a47498b8f98"
  },
  {
    "url": "es/guide/getting-certified/index.html",
    "revision": "d119b3f39b44a76b0e21ae1847f6a8a4"
  },
  {
    "url": "es/guide/index.html",
    "revision": "a76b70a156161dbf26788e22bfa61b4f"
  },
  {
    "url": "es/guide/tools/index.html",
    "revision": "25fc43b415f5db20fb7954a3d048aa89"
  },
  {
    "url": "es/index.html",
    "revision": "d853c305c2ccbcc9a9ffe219b1033adf"
  },
  {
    "url": "es/share/index.html",
    "revision": "a88b3444604946ba6ffed57057228dab"
  },
  {
    "url": "faqs/index.html",
    "revision": "52bdbcf05e1566343e2dc9b7d1cbe279"
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
    "url": "guide/cannabis/index.html",
    "revision": "2a09869cc41ca5206bb83cdbceb47826"
  },
  {
    "url": "guide/dispensaries/beyond-hello/index.html",
    "revision": "89834277e13b8c098758dbb383026347"
  },
  {
    "url": "guide/dispensaries/columbia-care/index.html",
    "revision": "7019eccf059618c9842629e3b11568de"
  },
  {
    "url": "guide/dispensaries/cresco-yeltrah/index.html",
    "revision": "85618cd2053c538d78eea758009a5475"
  },
  {
    "url": "guide/dispensaries/cure-pennsylvania/index.html",
    "revision": "bcd17a1b83caaaa8b42245cc105b1ebb"
  },
  {
    "url": "guide/dispensaries/harvest-of-reading/index.html",
    "revision": "83c1a3f37e67305bb6c7cbbb13998223"
  },
  {
    "url": "guide/dispensaries/herbology/index.html",
    "revision": "4b8fd3ad4cd4732d0dcd43998d17de4a"
  },
  {
    "url": "guide/dispensaries/ilera-healthcare/index.html",
    "revision": "315008b9e49bf3471b313f8e1fd0a6aa"
  },
  {
    "url": "guide/dispensaries/index.html",
    "revision": "599007f38365f477f975f2b166f98ed8"
  },
  {
    "url": "guide/dispensaries/justice-grown/index.html",
    "revision": "e27e728c56f136d947021818ad2871c8"
  },
  {
    "url": "guide/dispensaries/keystone-canna-remedies/index.html",
    "revision": "42c8b26a1411e62ccda5c3e026a1d2e9"
  },
  {
    "url": "guide/dispensaries/keystone-center-of-integrative-wellness/index.html",
    "revision": "8e2e7cd7e4f90316261a19abbbb19a85"
  },
  {
    "url": "guide/dispensaries/keystone-shops/index.html",
    "revision": "5b97b30d0d210a3a82c29868c4fc8779"
  },
  {
    "url": "guide/dispensaries/knox-medical/index.html",
    "revision": "532954b2dbfc05a5609a8ecccf9af6a4"
  },
  {
    "url": "guide/dispensaries/liberty/index.html",
    "revision": "50ab5d3f9252103667976a5d6643e5cd"
  },
  {
    "url": "guide/dispensaries/maitri-medicinals/index.html",
    "revision": "3f1bbfa3cf44ff124a4713b8350f3026"
  },
  {
    "url": "guide/dispensaries/mission-pennsylvania-ii/index.html",
    "revision": "581f76fb700ddad78ff0625b2be9c8ea"
  },
  {
    "url": "guide/dispensaries/natures-medicines/index.html",
    "revision": "241ecb222035330b2eb10e7b4ebf8bad"
  },
  {
    "url": "guide/dispensaries/organic-remedies/index.html",
    "revision": "ed89f3275b1c1fc55d517e20efa886aa"
  },
  {
    "url": "guide/dispensaries/restore-integrative-wellness-center/index.html",
    "revision": "b14365d7790c93991ce86301daa5e23e"
  },
  {
    "url": "guide/dispensaries/rise/index.html",
    "revision": "ae4bc3a0e4ff29569a57116ec37c62cb"
  },
  {
    "url": "guide/dispensaries/solevo/index.html",
    "revision": "f2ba8d81a4efdced3ed8f58f48bbc46f"
  },
  {
    "url": "guide/dispensaries/terravida-holistic-centers/index.html",
    "revision": "fe2c1e3ccec5454811bf5a42e9b74eb1"
  },
  {
    "url": "guide/dispensaries/the-healing-center/index.html",
    "revision": "02222145447b3d7cc40bbbb0c6304ce6"
  },
  {
    "url": "guide/getting-certified/index.html",
    "revision": "f51c6f9305616fddf16d66d153c308d8"
  },
  {
    "url": "guide/index.html",
    "revision": "f091c2e41e7242c683508d4c79ba5153"
  },
  {
    "url": "guide/tools/index.html",
    "revision": "461db7f0c6462187834be0f1e792ede0"
  },
  {
    "url": "i18n/index.html",
    "revision": "1522b3de6a7f11e8cafaaabbdf4ceccf"
  },
  {
    "url": "images/hero--old.png",
    "revision": "42e7bce7e747a3b96870dc9ca5219cc8"
  },
  {
    "url": "images/hero.png",
    "revision": "56a5973706e03b9c6afe8ac8a4905c8b"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "985d95060a85afe5a564f59073c9d2ba"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "c7d94f674d581be2082172863dbfd117"
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
    "url": "images/open-graph.png",
    "revision": "7d3b6a369f0d0ba468b7559d8b746fed"
  },
  {
    "url": "images/t-shirt-2.jpg",
    "revision": "992c7d1574b7b21763060422beaeb7d9"
  },
  {
    "url": "images/t-shirt-3.jpg",
    "revision": "659366ddc17640f69ba71d83b4689120"
  },
  {
    "url": "images/t-shirt-4.jpg",
    "revision": "39190a0434c8bab73bf98e7176595d5b"
  },
  {
    "url": "images/t-shirt-5.jpg",
    "revision": "ed285592daddf6986457778c3bc3e418"
  },
  {
    "url": "images/t-shirt-6.jpg",
    "revision": "b4d2c434b3f2fab98329cc6df7f17bb2"
  },
  {
    "url": "images/t-shirt-cccp-back.jpg",
    "revision": "5dbd06018b706a0220032769bea99e0f"
  },
  {
    "url": "images/t-shirt-cccp-front.jpg",
    "revision": "22fd710de2df6e3762b29b23b04c5009"
  },
  {
    "url": "images/t-shirt.jpg",
    "revision": "eb30dad5d3bbc9fa0eb2899c2ce1052c"
  },
  {
    "url": "index.html",
    "revision": "db376a09fd5ec239187c13f916c2c8e6"
  },
  {
    "url": "share/index.html",
    "revision": "af8837e19ffe810932c166b05b139ea2"
  },
  {
    "url": "tools/find-practitioners.html",
    "revision": "eb84ccc5965e518eecc44a4576d90f11"
  },
  {
    "url": "tools/index.html",
    "revision": "33e9de933be23c87619fe213cb9fe76c"
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
