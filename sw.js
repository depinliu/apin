if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3577b011"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_401-TLMmqwNw.js",revision:null},{url:"assets/_404-DKsEnhJs.js",revision:null},{url:"assets/_error-C90seXnM.js",revision:null},{url:"assets/AuthContentComponent-DGkQbFSN.js",revision:null},{url:"assets/BottomNavbarComponent-BeMkLCP_.js",revision:null},{url:"assets/BottomNavbarComponent-BvvSrGly.css",revision:null},{url:"assets/BudgetView-CiEwHg84.js",revision:null},{url:"assets/CardItemComponent-rH5N9pGL.js",revision:null},{url:"assets/CardItemsComponent-BXLjPmmA.js",revision:null},{url:"assets/ExpenseListComponent-DVEMxZVg.js",revision:null},{url:"assets/FilterExpenseByMonthYearComponent-CiYUmj64.js",revision:null},{url:"assets/FormAuthComponent-CmNNuHxM.js",revision:null},{url:"assets/HomeView-B7l2Vtvu.js",revision:null},{url:"assets/index-BQVrmuAG.css",revision:null},{url:"assets/index-CGs8o4Md.js",revision:null},{url:"assets/index-CHqs0Ro0.css",revision:null},{url:"assets/LoginView-BrRw8kun.js",revision:null},{url:"assets/ModalDeleteExpense-DxR4xCZp.js",revision:null},{url:"assets/ProfileView-BKbFm0xY.js",revision:null},{url:"assets/RegisterView-D4lpGufC.js",revision:null},{url:"assets/ReportView-BD4UVAPm.js",revision:null},{url:"assets/TabComponent-BCWKaCEG.js",revision:null},{url:"index.html",revision:"983a0caa7c1b5fb6779284e2b333c8b5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon/icon-192x192.png",revision:"b85525decc337d7789c5b67943866fa2"},{url:"favicon/icon-512x512.png",revision:"d27e4ffd05dc34d30095836c88ae2f9d"},{url:"manifest.webmanifest",revision:"8fd0549a0b513770dce4e86710621f0c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET")}));
