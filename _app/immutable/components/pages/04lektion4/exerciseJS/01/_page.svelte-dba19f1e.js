import{S as p,i as f,s as y,k as g,q as _,O as T,l as x,m as E,r as v,h as l,H as u,C as d,o as S,X as b}from"../../../../../chunks/index-0bc4cd80.js";const{document:h}=b;function j(i){let e,n;return{c(){e=g("style"),n=_(`.result {\r
			padding: 1rem;\r
		}\r
		h2 {\r
			font-size: 2rem;\r
		}`)},l(a){const r=T("svelte-1dxyqcj",h.head);e=x(r,"STYLE",{});var t=E(e);n=v(t,`.result {\r
			padding: 1rem;\r
		}\r
		h2 {\r
			font-size: 2rem;\r
		}`),t.forEach(l),r.forEach(l)},m(a,r){u(h.head,e),u(e,n)},p:d,i:d,o:d,d(a){l(e)}}}function q(i){return S(()=>{let e;document.querySelector("main")?(e=document.querySelector("main"),e.innerHTML=""):(e=document.createElement("main"),document.body.append(e));const n=async()=>{try{return await(await fetch("https://jsonplaceholder.typicode.com/todos")).json()}catch{let s=document.createElement("h2");s.innerText="Sorry, we had problems getting the data. Try again later.",document.body.append(s)}},a=t=>{console.log(t);let s=document.createElement("div");s.className="result";let o,m=0;t.forEach(c=>{m!==c.userId&&(m+=1,o=document.createElement("ul"),o.innerHTML=`<h2>User ${c.userId}:</h2>`),o.innerHTML+=`<li>${c.title} <input type="checkbox" ${c.completed?"checked":""}></li>`,e.append(o)})},r=async()=>{let t=await n();a(t)};setTimeout(()=>{r()},1e3)}),[]}class $ extends p{constructor(e){super(),f(this,e,q,j,y,{})}}export{$ as default};
