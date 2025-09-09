const CACHE_NAME = 'classpay-app-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/logo.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+Sinhala:wght@400;700&display=swap',
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    'https://fonts.gstatic.com/s/notosanssinhala/v20/AlZq_y1ZtY3ymOryg38hOCSdOnFq0En23OU.ttf'
];

// Install a service worker
self.addEventListener('install', event => {
    console.log('ClassPay Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('ClassPay Service Worker: Cache opened');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('ClassPay Service Worker: Installation complete');
                return self.skipWaiting();
            })
    );
});

// Activate service worker
self.addEventListener('activate', event => {
    console.log('ClassPay Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('ClassPay Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('ClassPay Service Worker: Activation complete');
            return self.clients.claim();
        })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    console.log('ClassPay Service Worker: Serving from cache:', event.request.url);
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }).catch(() => {
                    // Return offline page or fallback for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

// Handle background sync
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        console.log('ClassPay Service Worker: Background sync triggered');
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Handle any background sync tasks
    return Promise.resolve();
}

// Handle push notifications (for future use)
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/logo.png',
            badge: '/logo.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});
