import{S as b,i as E,s as H,k as M,q as $,O as S,l as q,m as _,r as j,h as p,H as y,C as h,o as U,X as R}from"../../../../../chunks/index-0bc4cd80.js";const{document:v}=R;function k(f){let n,a;return{c(){n=M("style"),a=$(`.user {\r
			padding: 0rem;\r
			margin: 2rem;\r
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
		}\r
    .button-div {\r
      flex-direction: row;\r
    }`)},l(m){const c=S("svelte-1dwit85",v.head);n=q(c,"STYLE",{});var o=_(n);a=j(o,`.user {\r
			padding: 0rem;\r
			margin: 2rem;\r
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
		}\r
    .button-div {\r
      flex-direction: row;\r
    }`),o.forEach(p),c.forEach(p)},m(m,c){y(v.head,n),y(n,a)},p:h,i:h,o:h,d(m){p(n)}}}function N(f){return U(()=>{let n;document.querySelector("main")?(n=document.querySelector("main"),n.innerHTML=""):(n=document.createElement("main"),document.body.append(n));let a="https://jsonplaceholder.typicode.com/users",m="https://jsonplaceholder.typicode.com/posts",c="https://jsonplaceholder.typicode.com/todos";const o=async r=>{try{return await(await fetch(r)).json()}catch{let s=document.createElement("h2");s.innerText="Error loading the required data. Please try again later."}},w=(r,d)=>{let s=document.createElement("div");s.className="result",r.forEach((e,i)=>{let t;t=document.createElement("div"),t.className="user",console.log(e),t.innerHTML+=`<p>${e.name}</p>`,t.innerHTML+=`<div class="button-div"><button id="show-info-${i}">Show info</button><button id="delete-${i}">Delete</button></div>`,n.append(t);let l=document.querySelector(`#show-info-${i}`),L=document.querySelector(`#delete-${i}`);l.addEventListener("click",async T=>{let u=await o(a);g(u[i])}),L.addEventListener("click",async T=>{console.log("delete"),console.log(t);let u=await o(a),x=document.querySelector("main");confirm(`are you sure you want to remove ${u[i].name}?`)&&x.removeChild(t)})})},g=async r=>{let d=await o(m),s=await o(c),e,i=document.createElement("div");d=d.filter(t=>t.userId===r.id),s=s.filter(t=>t.userId===r.id&&t.completed),i.className="result-user",document.querySelector(".user-info")?(e=document.querySelector(".user-info"),e.innerHTML=""):e=document.createElement("div"),e.className="user-info",e.innerHTML+=`<p>${r.name}</p>`,e.innerHTML+="<hr/>";for(const[t,l]of Object.entries(r.address))t==="street"&&(e.innerHTML+=`<p>${l}</p>`);e.innerHTML+="<hr/>",e.innerHTML+="<p>Post titles: </p><ul>",d.forEach((t,l)=>{l<5&&(e.innerHTML+=`<li>${t.title}</li>`)}),e.innerHTML+="<hr/>",e.innerHTML+="<p>Unfinished todos: </p><ul>",s.forEach((t,l)=>{e.innerHTML+=`<li>${t.title}</li>`}),e.innerHTML+="<hr/>",n.append(e)};(async()=>{let r=await o(a);w(r)})()}),[]}class I extends b{constructor(n){super(),E(this,n,N,k,H,{})}}export{I as default};
