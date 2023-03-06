import{S as M,i as U,s as $,k as v,q as S,a as T,O as g,l as _,m as x,r as E,h as o,c as L,n as i,H as w,b as h,C as k,o as j,X as N}from"../../../../../chunks/index-8546963b.js";const{document:H}=N;function O(q){let r,m,u,a,f,b,l,y,t,c;return{c(){r=v("style"),m=S(`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			background-color: thistle;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`),u=T(),a=v("button"),f=S("Show"),b=T(),l=v("input"),y=T(),t=v("button"),c=S("Show user by number"),this.h()},l(e){const s=g("svelte-4ve73r",H.head);r=_(s,"STYLE",{});var n=x(r);m=E(n,`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			background-color: thistle;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`),n.forEach(o),s.forEach(o),u=L(e),a=_(e,"BUTTON",{id:!0,class:!0});var d=x(a);f=E(d,"Show"),d.forEach(o),b=L(e),l=_(e,"INPUT",{id:!0,type:!0,max:!0,class:!0}),y=L(e),t=_(e,"BUTTON",{id:!0,class:!0});var p=x(t);c=E(p,"Show user by number"),p.forEach(o),this.h()},h(){i(a,"id","show"),i(a,"class","svelte-pbgkpx"),i(l,"id","user-number"),i(l,"type","number"),i(l,"max","10"),i(l,"class","svelte-pbgkpx"),i(t,"id","show-user"),i(t,"class","svelte-pbgkpx")},m(e,s){w(H.head,r),w(r,m),h(e,u,s),h(e,a,s),w(a,f),h(e,b,s),h(e,l,s),h(e,y,s),h(e,t,s),w(t,c)},p:k,i:k,o:k,d(e){o(r),e&&o(u),e&&o(a),e&&o(b),e&&o(l),e&&o(y),e&&o(t)}}}function P(q){return j(()=>{let r;document.querySelector("main")?(r=document.querySelector("main"),r.innerHTML=""):(r=document.createElement("main"),document.body.append(r));const m=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json(),u=(t,c)=>{let e=document.createElement("div");e.className="result",t=c?[...Array(t[c])]:t,t.forEach(s=>{let n;document.querySelector(".user")?(n=document.querySelector(".user"),n.innerHTML=""):n=document.createElement("div"),n.className="user",console.log(s),n.innerHTML+=`<p>${s.name}</p>
        <p>${s.email}</p>`,n.innerHTML+="<hr>";for(const[d,p]of Object.entries(s.address))(d==="city"||d==="street")&&(n.innerHTML+=`<p>${p}</p>`);n.innerHTML+=`<p>${s.phone}</p>`,n.innerHTML+="<hr>";for(const[d,p]of Object.entries(s.company))d!=="catchPhrase"&&(n.innerHTML+=`<p>${p}</p>`);r.append(n)})},a=async()=>{let t=await m();u(t)},f=async t=>{let c=await m();u(c,t)};document.querySelector("#show").addEventListener("click",()=>{a()});let l=document.querySelector("#user-number");document.querySelector("#show-user").addEventListener("click",()=>{f(+l.value)})}),[]}class C extends M{constructor(r){super(),U(this,r,P,O,$,{})}}export{C as default};
