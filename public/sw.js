if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next/app-build-manifest.json",revision:"97afe81cd637bae5e12879bb91b8f2b3"},{url:"/_next/static/NM9Ov3sTiavFm06OMGli4/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/NM9Ov3sTiavFm06OMGli4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-063178e039a513d4.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/212-471cc54c3a31b174.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/366-a27a96212475dc73.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/386-bbfe1fc1a5eb05db.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/457b8330-34c76ad47ade2c31.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/5650b5f8-5cc9919ea35981ee.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/648-16e1b6e93a9ba32f.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/69-c0003684f05be6cd.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/738-4245b4a39dfd23b3.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/763-ec970087cb355505.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/790-5b045d6191f5bd03.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/936-993963440d4970c3.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/_not-found/page-0e06e6ffc5d14cf4.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/auth/login/page-f730a1987a9b1e0c.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/layout-1341f37bb7fa6de3.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/management/page-a04dfdec73cb5c2a.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/page-a4ebbb04f89c7f8f.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/app/voucher/page-024bed7dc5bac474.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/fd9d1056-1023ea6cdb49bbc3.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/main-42da0016d87bec0c.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/main-app-5b855ed72be02dd8.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b29885e70773670a.js",revision:"NM9Ov3sTiavFm06OMGli4"},{url:"/_next/static/css/56f189993266a3f9.css",revision:"56f189993266a3f9"},{url:"/_next/static/media/22b50aa0e38e7293-s.p.ttf",revision:"eb09665e216e9c94f9cb08bacd6e236a"},{url:"/_next/static/media/5482909fbfe31420-s.p.ttf",revision:"02061c88bcafd61bdb6ade16c3c1d456"},{url:"/_next/static/media/6725fdbbc264ddfe-s.p.ttf",revision:"8fc074e097651f96785f9b25caad1413"},{url:"/_next/static/media/8c4112ed3b645906-s.p.ttf",revision:"41ffa9abf903d51fdaabc3e27cb87273"},{url:"/_next/static/media/df31b38630469b08-s.p.ttf",revision:"c95f9ffd4b22b623d30ff50c8115a65f"},{url:"/icons/icon-192x192.png",revision:"941435bc7749257cc3360dad3e87f8e8"},{url:"/icons/icon-512x512.png",revision:"4f66ec85a08c9c8380f06291de2cefe3"},{url:"/index.html",revision:"67dea3ef1cec83e8ac2da27a661b19dc"},{url:"/manifest.json",revision:"f2b06711d422fe4c7c4d0f52a71cad4f"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
