// install service worker 
self.addEventListener('install', evt => {
    console.log('services worker is installed');
    
});

// activate service worker 
self.addEventListener('activate', evt => {
    console.log('service worker is activated');
});

//fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event',evt);
});