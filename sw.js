if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,o)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let r={};const t=s=>n(s,l),u={module:{uri:l},exports:r,require:t};e[l]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(o(...s),r)))}}define(["./workbox-3577b011"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_401-DTdpuzpn.js",revision:null},{url:"assets/_404-BHhuyZKv.js",revision:null},{url:"assets/_error-B4oy_cug.js",revision:null},{url:"assets/AuthContentComponent-A7bbewHb.js",revision:null},{url:"assets/BottomNavbarComponent-DIKSjtpu.css",revision:null},{url:"assets/BottomNavbarComponent-DvEHIsNo.js",revision:null},{url:"assets/BudgetCardItemComponent-CaNL2GR0.js",revision:null},{url:"assets/BudgetListComponent-Cwj8pwyd.js",revision:null},{url:"assets/BudgetView-CUH8hCsC.js",revision:null},{url:"assets/ExpenseListComponent-lzeG78f8.js",revision:null},{url:"assets/ExpenseStore-BVsysCAK.js",revision:null},{url:"assets/FilterExpenseByMonthYearComponent-0TWemInL.js",revision:null},{url:"assets/FormAuthComponent-BAE2KPjL.js",revision:null},{url:"assets/FormExpense-8J5RKPZK.js",revision:null},{url:"assets/HomeCardItemComponent-Dkr3PFHQ.js",revision:null},{url:"assets/HomeCardItemsComponent-ByOd_kGi.js",revision:null},{url:"assets/HomeView-Bz6uEDJ_.js",revision:null},{url:"assets/index-Boz_6IjS.js",revision:null},{url:"assets/index-BQVrmuAG.css",revision:null},{url:"assets/index-h9VtKMMu.css",revision:null},{url:"assets/LoginView-eLYky4Wc.js",revision:null},{url:"assets/LogoutButton-CaI8bo-5.js",revision:null},{url:"assets/ModalDeleteExpense-C6DkIDId.js",revision:null},{url:"assets/ModalLogoutConfirmation-ASgZ_2Ov.js",revision:null},{url:"assets/ProfileView-CO7hnYXL.js",revision:null},{url:"assets/RegisterView-BIbesAok.js",revision:null},{url:"assets/ReportView-DSbxLu-N.js",revision:null},{url:"assets/TabComponent-D5UCXDcU.js",revision:null},{url:"index.html",revision:"a538441f11227ef45267b54e9c2c62f6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon/icon-192x192.png",revision:"b85525decc337d7789c5b67943866fa2"},{url:"favicon/icon-512x512.png",revision:"d27e4ffd05dc34d30095836c88ae2f9d"},{url:"manifest.webmanifest",revision:"8fd0549a0b513770dce4e86710621f0c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({request:s})=>"document"===s.destination),new s.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),s.registerRoute((({request:s})=>"image"===s.destination),new s.CacheFirst({cacheName:"image-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800})]}),"GET")}));
