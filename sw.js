//install server worker 
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/js/app.js',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/css/styles.css',
    '/css/responsive.css',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/data/restaurants.json',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '//normalize-css.googlecode.com/svn/trunk/normalize.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'mapbox://styles/mapbox/streets-v11',
    'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js',
    'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',

];
// install service worker
self.addEventListener('install', evt => {
    console.log('services worker is installed');
    evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
    })
    );
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('service worker is activated');
});

//fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event',evt);
    evt.respondWith(
        caches.match(evt.request).then( cachesRes =>{
            return cachesRes || fetch(evt.request);
        })
    );
});
