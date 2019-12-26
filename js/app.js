if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=> console.log('services worker registered', reg))
    .catch((err)=> console.log('servicer worker not registered', err));
}