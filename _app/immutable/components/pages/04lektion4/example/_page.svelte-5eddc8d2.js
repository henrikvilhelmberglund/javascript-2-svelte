import{S as s,i as l,s as d,o as c}from"../../../../chunks/index-ed5b6319.js";function i(o){return c(()=>{async function e(){return await(await fetch("https://jsonplaceholder.typicode.com/todos/1")).json()}let n=t=>{let a=document.createElement("div");a.innerHTML=`<p>Title: ${t.title}</p>
<p>Completed: ${t.completed}</p>`,document.body.append(a)};(async()=>{let t=await e();n(t)})()}),[]}class u extends s{constructor(e){super(),l(this,e,i,null,d,{})}}export{u as default};
