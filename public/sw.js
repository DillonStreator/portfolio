if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"186FlXszNd2DKDDpHevfi"},{url:"/_next/static/186FlXszNd2DKDDpHevfi/_buildManifest.js",revision:"5afd560cac66e37e43900c65b2d196a1"},{url:"/_next/static/186FlXszNd2DKDDpHevfi/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/186FlXszNd2DKDDpHevfi/pages/_app.js",revision:"293aec7b053de0848e877e385298550b"},{url:"/_next/static/186FlXszNd2DKDDpHevfi/pages/_error.js",revision:"2be2bbad37085fd3ce31afbb05008528"},{url:"/_next/static/186FlXszNd2DKDDpHevfi/pages/index.js",revision:"93090b3aedf166f1f1eeaf7c3c7d4667"},{url:"/_next/static/chunks/fcc641b17fe89da762822375384f1ceca879a4e6.a1a019ce3158294c8679.js",revision:"197894e43dbf536faa1ec0c016495a01"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/css/04eb6f7ac4a4f2975950.css",revision:"4b990f0630284ddbda7e316c110ab2de"},{url:"/_next/static/css/e2ebfc52631cee61b017.css",revision:"c485bb191addad5d766088995c3ba7d8"},{url:"/_next/static/runtime/main-a38fb3d2160df3cf5433.js",revision:"1640a495864c0308be2748da6035948d"},{url:"/_next/static/runtime/polyfills-283772482f0035efccb9.js",revision:"08832ea8292d303ba36610c6e1d52b4f"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-chrome-192x192.png",revision:"6f11a2c3cd3abf0b2999062fa8f9a930"},{url:"/android-chrome-512x512.png",revision:"7fcd82148795450c41e4605ece0b2dfe"},{url:"/apple-touch-icon.png",revision:"6167cf3db5c93d482e7dd9c87f3af7d4"},{url:"/cv.md",revision:"6dac1d06fc0d1cf80e22b1e5875ddeb9"},{url:"/dillon.JPG",revision:"5b82cad2d5dff8560c4611bab9af7f6d"},{url:"/dillon_headshot.jpg",revision:"90febf4ae07d0773ea7b570af8cff72e"},{url:"/dillon_headshot_250x250.jpg",revision:"95b2bcc632955334e67efd287efad355"},{url:"/dillon_headshot_25x25.jpg",revision:"832694273dc084d709fbc57f62f245d5"},{url:"/favicon-16x16.png",revision:"12eaebcf6cb6232efaa426ee8d7de3fd"},{url:"/favicon-32x32.png",revision:"52f6a5655b2e7405415433a24e03980d"},{url:"/favicon.ico",revision:"4023d1cadca675fadb56d5ee3be43290"},{url:"/github.svg",revision:"db57c655f097294ff8962232c18fa668"},{url:"/linkedin.svg",revision:"e10f00d1da17ddd2b78cb9f70c9304d3"},{url:"/manifest.json",revision:"926772d9898ec21a30d7d4501c74ebc7"},{url:"/npm.svg",revision:"ee4ac18eb4d49941409828282a870f7f"},{url:"/profile.jpg",revision:"a421ca547d4db6714fa24437e1569fbc"},{url:"/resume.pdf",revision:"b20f005e4bf6a4ff3f85eb3405377034"},{url:"/scss/global.scss",revision:"d762d87f093cd9d7d3130cafcd25217a"},{url:"/scss/index.module.scss",revision:"39c0a6a50936e8a1471ef266c887d9fe"},{url:"/scss/variables.scss",revision:"5e3565badf0677575e86fe3750463ae9"},{url:"/site.webmanifest",revision:"718174f0ceeb2afd5355692e77e6c699"},{url:"/stack-overflow.svg",revision:"f2256972e991da710c0b0cf0c32bba4b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
