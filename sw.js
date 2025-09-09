const CACHE_NAME = 'classpay-app-v3';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './logo.png'
];

// Install a service worker
self.addEventListener('install', event => {
    console.log('ClassPay Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('ClassPay Service Worker: Cache opened');
                // Cache only essential files first
                return cache.addAll(urlsToCache).catch(error => {
                    console.log('ClassPay Service Worker: Some files failed to cache:', error);
                    // Continue even if some files fail
                    return Promise.resolve();
                });
            })
            .then(() => {
                console.log('ClassPay Service Worker: Installation complete');
                return self.skipWaiting();
            })
            .catch(error => {
                console.log('ClassPay Service Worker: Installation failed:', error);
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

    // Skip unsupported schemes (chrome-extension, data, blob, etc.)
    const url = new URL(event.request.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
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

                    // Only cache http/https requests
                    if (url.protocol === 'http:' || url.protocol === 'https:') {
                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            })
                            .catch(error => {
                                console.log('ClassPay Service Worker: Failed to cache response:', error);
                            });
                    }

                    return response;
                }).catch(error => {
                    console.log('ClassPay Service Worker: Fetch failed:', error);
                    // Return offline page or fallback for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                    // For other requests, return a basic response
                    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
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
