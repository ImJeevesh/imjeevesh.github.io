!function(){const e="pwa-jr-v1",t=["./","./index.html","./index.js","./index.css"];self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((t=>Promise.all(t.filter((t=>t!==e)).map((e=>caches.delete(e)))))))})),self.addEventListener("install",(n=>{n.waitUntil(caches.open(e).then((e=>{e.addAll(t)})))})),self.addEventListener("fetch",(t=>{var n;t.respondWith((n=t.request,caches.open(e).then((e=>fetch(n).then((t=>(e.put(n,t.clone()),Promise.resolve(t)))).catch((()=>e.match(n)))))))}))}();