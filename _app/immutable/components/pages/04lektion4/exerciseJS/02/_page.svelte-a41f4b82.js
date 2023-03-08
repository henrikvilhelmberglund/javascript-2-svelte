import{S as M,i as U,s as g,k as v,q as T,a as x,O as q,l as _,m as S,r as E,h as a,c as L,n as i,H as w,b as f,C as j,o as $,X as N}from"../../../../../chunks/index-8546963b.js";const{document:H}=N;function O(k){let n,b,d,o,y,m,c,p,l,t;return{c(){n=v("style"),b=T(`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			background-color: thistle;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`),d=x(),o=v("button"),y=T("Get profiles"),m=x(),c=v("input"),p=x(),l=v("button"),t=T("Show user by number"),this.h()},l(e){const s=q("svelte-4ve73r",H.head);n=_(s,"STYLE",{});var r=S(n);b=E(r,`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			background-color: thistle;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`),r.forEach(a),s.forEach(a),d=L(e),o=_(e,"BUTTON",{id:!0,class:!0});var u=S(o);y=E(u,"Get profiles"),u.forEach(a),m=L(e),c=_(e,"INPUT",{id:!0,type:!0,max:!0,class:!0}),p=L(e),l=_(e,"BUTTON",{id:!0,class:!0});var h=S(l);t=E(h,"Show user by number"),h.forEach(a),this.h()},h(){i(o,"id","show"),i(o,"class","svelte-pbgkpx"),i(c,"id","user-number"),i(c,"type","number"),i(c,"max","10"),i(c,"class","svelte-pbgkpx"),i(l,"id","show-user"),i(l,"class","svelte-pbgkpx")},m(e,s){w(H.head,n),w(n,b),f(e,d,s),f(e,o,s),w(o,y),f(e,m,s),f(e,c,s),f(e,p,s),f(e,l,s),w(l,t)},p:j,i:j,o:j,d(e){a(n),e&&a(d),e&&a(o),e&&a(m),e&&a(c),e&&a(p),e&&a(l)}}}function P(k){return $(()=>{let n;document.querySelector("main")?(n=document.querySelector("main"),n.innerHTML=""):(n=document.createElement("main"),document.body.append(n));const b=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json(),d=async t=>await(await fetch(`https://jsonplaceholder.typicode.com/users/${t}`)).json(),o=t=>{n=document.querySelector("main"),n.innerHTML="";let e=document.createElement("div");e.className="result",t=t.length?t:[t],console.log(t),t.forEach(s=>{let r;r=document.createElement("div"),r.className="user",console.log(s),r.innerHTML+=`<p>${s.name}</p>
        <p>${s.email}</p>`,r.innerHTML+="<hr>";for(const[u,h]of Object.entries(s.address))(u==="city"||u==="street")&&(r.innerHTML+=`<p>${h}</p>`);r.innerHTML+=`<p>${s.phone}</p>`,r.innerHTML+="<hr>";for(const[u,h]of Object.entries(s.company))u!=="catchPhrase"&&(r.innerHTML+=`<p>${h}</p>`);n.append(r)})},y=async()=>{let t=await b();o(t)},m=async t=>{let e=await d(t);o(e)};document.querySelector("#show").addEventListener("click",()=>{y()});let p=document.querySelector("#user-number");document.querySelector("#show-user").addEventListener("click",()=>{m(+p.value)})}),[]}class C extends M{constructor(n){super(),U(this,n,P,O,g,{})}}export{C as default};
