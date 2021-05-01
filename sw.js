//nombre de la cache
const VERSION = "v1";

self.addEventListener('install', event =>{
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
    const request =event.request;

    //solo tome metodos get y los demas no haga nada
    if(request.method != 'GET'){
        return;
    }

    //buscar en cache
    event.respondWith(cachedResponse(request));

    //actualizar el cache
    event.waitUntil(updateCache(request));

});


async function precache(){
    const cache=caches.open(VERSION);
    return (await cache).addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/alan-walker-faded.mp4',
        ])
}


async function cachedResponse(request){
    const cache=await caches.open(VERSION);
    const response=await cache.match(request);
    return response || fetch(request);//si la respuesta es nulo responde lo que venga de internet
}

async function updateCache(request){
    const cache=await caches.open(VERSION);
    const response=await cache.match(request);
    return cache.put(request,response);
}