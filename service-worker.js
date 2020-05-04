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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "05930305bff8a3f1664050eac7f5151d"
  },
  {
    "url": "about.html",
    "revision": "d94ba0edfe13e754cd63b641e069feca"
  },
  {
    "url": "assets/css/0.styles.12d0744c.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c160eac.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.0409c95e.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.27d6c98f.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.a3c07268.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.c224b7ee.js",
    "revision": "5c559846f31a16374cb582956e1629b8"
  },
  {
    "url": "assets/js/15.e322c637.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.e9949b27.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.c293b89d.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.48f3c7a8.js",
    "revision": "0d665ee34a4fda4dfd8369076a5601c0"
  },
  {
    "url": "assets/js/19.16b0c7e6.js",
    "revision": "eaa8d974f5e86f81569a26bece8e14e3"
  },
  {
    "url": "assets/js/2.1025e516.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.0e2c8922.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.8d086267.js",
    "revision": "faa3987fab631729f2dd96b7dcb90cee"
  },
  {
    "url": "assets/js/22.8a72b4b8.js",
    "revision": "2628f98260c6135320bea425326b0a79"
  },
  {
    "url": "assets/js/23.4fd34717.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.e3a3c0b9.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.268d5185.js",
    "revision": "10c6bd2eb5b929a16506c3d52434e680"
  },
  {
    "url": "assets/js/26.0dfa4a8d.js",
    "revision": "a4c36aebcf201faac2a10e40d13a9205"
  },
  {
    "url": "assets/js/27.b230c0dd.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.e69327d1.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.1c961335.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.6736e6ee.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.a41aa6be.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.d789b75a.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.b8dcb539.js",
    "revision": "f2651ec0cabb3cc10533c541f7c29bae"
  },
  {
    "url": "assets/js/7.6568cc16.js",
    "revision": "7b398d65a98a8033e5ad033a72db40c3"
  },
  {
    "url": "assets/js/8.5c21f5be.js",
    "revision": "bf9b895683b03e38d267601a2c951743"
  },
  {
    "url": "assets/js/9.5dc0d465.js",
    "revision": "b45530ac26d17b170096622fa550efac"
  },
  {
    "url": "assets/js/app.1e2b455e.js",
    "revision": "42770c592d4768733344be85818f68dd"
  },
  {
    "url": "demo.html",
    "revision": "400684ee37ffd06163cf3fc6224df396"
  },
  {
    "url": "en/about.html",
    "revision": "378ebd9cdeca2f16c3e62caff96fd2e5"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "1d16f3e4353c4343f0b8854ffe7f4f36"
  },
  {
    "url": "en/guide/config.html",
    "revision": "85aeb22b8f11cac99b5b0786a1341160"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "d32cbb4a3e748d9bd87497c581266ff6"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "1b1d02b0ec210a4ce7ee43bc5dcbf3a0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "367670a627b0c76df74cd2bcf6f92e32"
  },
  {
    "url": "en/guide/page.html",
    "revision": "8697bf6de38120254e008bc3f38ac7d4"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "57ccc093f08d1be74f771416f22e1c5a"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "e4c2253ac0cb82aaa190e5f8cea827d0"
  },
  {
    "url": "en/index.html",
    "revision": "b23877d6b77f10cff5b4db0551098985"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "26b6419a0e3fc48036345c4fac8934b3"
  },
  {
    "url": "guide/config.html",
    "revision": "59ad2c58b7fd82240d5db105c40c376b"
  },
  {
    "url": "guide/faq.html",
    "revision": "c37a321a239b6d2b2888a8ed492acae7"
  },
  {
    "url": "guide/icon.html",
    "revision": "0d2c25f810fa4704cfe8c27a9439fefb"
  },
  {
    "url": "guide/index.html",
    "revision": "61bad8094853a0d550744396f7288cd3"
  },
  {
    "url": "guide/page.html",
    "revision": "d636271e255292db02102d44309ca9bc"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "68278e45c8a0767e06f4b032ce457243"
  },
  {
    "url": "guide/Todo.html",
    "revision": "ecd3badf5fa040b34450f0aadc76322e"
  },
  {
    "url": "index.html",
    "revision": "7b359a17f3b5dca52b21016143e90eca"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "007dfd34394fcd0b1f48103912922c59"
  }
].concat(self.__precacheManifest || []);
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
