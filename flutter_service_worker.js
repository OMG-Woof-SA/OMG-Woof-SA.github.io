'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f2b9345c1d8b293098ca5a819db04d96",
"index.html": "874d8a05d7e8dbfaa906d0ddbf6c3206",
"/": "874d8a05d7e8dbfaa906d0ddbf6c3206",
"main.dart.js": "0e904bb68e2814f0d4c57d62e34b9a37",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "076c70aea5fdc4ac0531ee70b062b5b0",
"assets/AssetManifest.json": "8c6a9d4ea0cf76acde5f9b5f91bf8c6f",
"assets/NOTICES": "202a8f9e8344e64049af08184e685489",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/WATCH.png": "60a459799b68721d6089a0e4f2e20fcd",
"assets/assets/dash.png": "b900fd21fe047df9c607c1ea26624dc7",
"assets/assets/praise_tag.png": "f0d12e61bbcf2b7127a7cbb8e4c2104d",
"assets/assets/praise_t.png": "b46d257228dd8626be929252e92042f6",
"assets/assets/OMG_logo.png": "7baf9e417bc3397bfeb9a7566a9c4cc1",
"assets/assets/OMG%2520Pray-final.png": "9e8b7e349a78ca7643bae8978ad28155",
"assets/assets/GAME.png": "29c1e92b476b62967fedac60702b67ad",
"assets/assets/watch_t.png": "2ffea0545a67f4ee1ab0d5af55eb7d8e",
"assets/assets/tasks_port.png": "f139aa543c8d5d9dcf0d3c9250eefe1b",
"assets/assets/ACT%2520OUT%25202.1.png": "8756620355265c206fd843d9266e3329",
"assets/assets/PRAY%25201.1.png": "abaad908ced63e7ba7a429258ffa05eb",
"assets/assets/banner.png": "99da734d4cbf7465563dfafea1705dea",
"assets/assets/click.mp3": "34df6906f7630b37946a1f6c38383848",
"assets/assets/file.pdf": "fed70528b22fda6ae5e5d06511596217",
"assets/assets/arrow.png": "96b4eeeaf87d36c1c459dd0ba6f61be0",
"assets/assets/OMG%2520Game.png": "9e229714cfaae52f80db30cb38a7d264",
"assets/assets/GAME%25202.png": "86e47d0c93f486aeb524715cd33b8005",
"assets/assets/ACT%2520OUT.png": "e5f0926bcd94860df4b58e92b3c1e04e",
"assets/assets/gem_port.png": "28e521db077d27904ef01f3af7328ce2",
"assets/assets/video.mp4": "10c918b1d01aea85864ee65d9e0c2305",
"assets/assets/lessons_port.png": "24faaeff56935853905fca3708d222e2",
"assets/assets/GAME%25201.png": "8649a4bd542b9cf794f760e94fcfffe7",
"assets/assets/OMG%2520Watch.png": "6f9743b38ce3d110d49ba534e25f4930",
"assets/assets/ACT%2520OUT%25201.1.png": "4a0120135e45bd683bd1606643b8a10e",
"assets/assets/PRAY%25202.1.png": "e737a54ae5c8cc9e5a85f6cf3361403e",
"assets/assets/PRAY.png": "47eb84faea2128fa182f7e65ec4c5653",
"assets/assets/shield_check_low.png": "84786dbf97a56977d67df2aa1c220e8e",
"assets/assets/dash_3.png": "01365d3c686acec75163177b73874f1e",
"assets/assets/dash_2.png": "880fba55fa2739cd39b2523d4170dfd5",
"assets/assets/act_tag.png": "45f7e2984fa62a5a3b759a56140f6adb",
"assets/assets/boss_port.png": "0af9460d7047f4c0eb73d12a345e993b",
"assets/assets/dash_1.png": "afdf6542621374f9cc1584ae98cf967d",
"assets/assets/LEARN%25201.png": "d5e752a7d381375d30f4b56de605fc4f",
"assets/assets/cross.png": "e96e7f255d9df446ebd0be3f3db54e3d",
"assets/assets/dash_4.png": "6ccf95b29f919d8174fb93bf919da0c3",
"assets/assets/shield_check.png": "053a3854a682364c39e624574f3fe33e",
"assets/assets/video_icon.png": "cb84db7da80f322454279de6e13fec6b",
"assets/assets/LEARN%25202.png": "f95ad0bc4a6cddc929de5a7b912e28e7",
"assets/assets/LEARN.png": "f0eaf30f8520c0626bc075801eee4003",
"assets/assets/pdf_icon.png": "5dd8451512acdd6e4723fd22bd00a2f4",
"assets/assets/watch_tag.png": "d8d5c06ae0a382faf16da7aba64b833a",
"assets/assets/logo_sec.png": "008ed62bf7bf68e87e4bd3148cd2253f",
"assets/assets/4.png": "91355ef2b9f06f2074efcc31e74abd3e",
"assets/assets/OMG%2520Actout%2520Final.png": "112981ac09e6fe7ccfa93df7e0e61063",
"assets/assets/OMG%2520Pray.png": "5f149485d725232a5bc2bdd7b3c0b5ec",
"assets/assets/5.png": "af2f757c0c1742abf852318f5b64e415",
"assets/assets/OMG%2520Learn.png": "463c6be1d8918b4bc1bdfd8a608ca99f",
"assets/assets/7.png": "a4fad6d80c9647a08a81a6b6a6abefbd",
"assets/assets/plank.png": "58d691704355591d2016f4d417104ace",
"assets/assets/6.png": "8348c3a0d1743ce19e6e1d7e5f1474a2",
"assets/assets/2.png": "8125995461bb4596661daca540859053",
"assets/assets/3.png": "f0c5ebaaadb5df7c4236b607d736040e",
"assets/assets/learn_t.png": "76bb519dc11ac2f1c8632e0d7f594cca",
"assets/assets/1.png": "a9d8c9821df1cd9dd2bec8f4b411b3da",
"assets/assets/OMG%2520Actout.png": "fca5a0e55b63a9ab900d6fd6f0ec0e35",
"assets/assets/learn_tag.png": "153a49fdde4679435c70c52d03499e12",
"assets/assets/0.png": "6387f1127733d0d932cde5084443803a",
"assets/assets/WATCH%25202.png": "160f09cac373a958c517834aee846002",
"assets/assets/praise.png": "b46d257228dd8626be929252e92042f6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
