import{S as M,i as E,s as x,k as b,q as $,W as S,l as q,m as _,r as j,h,H as g,C as f,o as U,X as N}from"../../../../../chunks/index-ed5b6319.js";const{document:L}=N;function R(y){let n,i;return{c(){n=b("style"),i=$(`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}\r
		.user-info {\r
			position: fixed;\r
			top: 20%;\r
			right: 0px;\r
			padding: 1rem;\r
			margin: 3rem;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`)},l(m){const c=S("svelte-7vdavl",L.head);n=q(c,"STYLE",{});var o=_(n);i=j(o,`.user {\r
			padding: 1rem;\r
			margin: 3rem;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}\r
		.user-info {\r
			position: fixed;\r
			top: 20%;\r
			right: 0px;\r
			padding: 1rem;\r
			margin: 3rem;\r
			border-radius: 1rem;\r
			width: 300px;\r
		}`),o.forEach(h),c.forEach(h)},m(m,c){g(L.head,n),g(n,i)},p:f,i:f,o:f,d(m){h(n)}}}function k(y){return U(()=>{let n;document.querySelector("main")?(n=document.querySelector("main"),n.innerHTML=""):(n=document.createElement("main"),document.body.append(n));let i="https://jsonplaceholder.typicode.com/users",m="https://jsonplaceholder.typicode.com/posts",c="https://jsonplaceholder.typicode.com/todos";const o=async r=>{try{return await(await fetch(r)).json()}catch{let s=document.createElement("h2");s.innerText="Error loading the required data. Please try again later."}},v=(r,l)=>{let s=document.createElement("div");s.className="result",r.forEach((e,a)=>{let t;t=document.createElement("div"),t.className="user",console.log(e),t.innerHTML+=`<p>${e.name}</p>`,t.innerHTML+=`<button id="show-info-${a}">Show info</button>`,t.innerHTML+=`<button id="delete-${a}">Delete</button>`,n.append(t);let d=document.querySelector(`#show-info-${a}`),T=document.querySelector(`#delete-${a}`);d.addEventListener("click",async u=>{let p=await o(i);w(p[a])}),T.addEventListener("click",async u=>{console.log("delete"),console.log(u.target.parentNode);let p=await o(i),H=document.querySelector("main");confirm(`are you sure you want to remove ${p[a].name}?`)&&H.removeChild(u.target.parentNode)})})},w=async r=>{let l=await o(m),s=await o(c),e,a=document.createElement("div");l=l.filter(t=>t.userId===r.id),s=s.filter(t=>t.userId===r.id&&t.completed),a.className="result-user",document.querySelector(".user-info")?(e=document.querySelector(".user-info"),e.innerHTML=""):e=document.createElement("div"),e.className="user-info",e.innerHTML+=`<p>${r.name}</p>`,e.innerHTML+="<hr/>";for(const[t,d]of Object.entries(r.address))t==="street"&&(e.innerHTML+=`<p>${d}</p>`);e.innerHTML+="<hr/>",e.innerHTML+="<p>Post titles: </p><ul>",l.forEach((t,d)=>{d<5&&(e.innerHTML+=`<li>${t.title}</li>`)}),e.innerHTML+="<hr/>",e.innerHTML+="<p>Unfinished todos: </p><ul>",s.forEach((t,d)=>{e.innerHTML+=`<li>${t.title}</li>`}),e.innerHTML+="<hr/>",n.append(e)};(async()=>{let r=await o(i);v(r)})()}),[]}class I extends M{constructor(n){super(),E(this,n,k,R,x,{})}}export{I as default};
