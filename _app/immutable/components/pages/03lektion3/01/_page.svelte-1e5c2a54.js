import{S as J,i as K,s as Q,k as c,q,a as d,l as u,m as f,r as A,h as m,c as p,n as l,b as R,H as t,C as $,o as V}from"../../../../chunks/index-7508de5e.js";function W(z){let e,i,L,b,h,S,o,n,s,r,_,T,v,B,y,H,g,I,w,N,M,E,P,U,x;return{c(){e=c("main"),i=c("h1"),L=q("Ankademin AB"),b=d(),h=c("h2"),S=q("Lista över anställda"),o=d(),n=c("ul"),s=d(),r=c("h2"),_=q("Lägg till anställd"),T=d(),v=c("input"),B=d(),y=c("input"),H=d(),g=c("label"),I=q("Admin"),w=d(),N=c("input"),M=d(),E=c("button"),P=q("Lägg till"),U=d(),x=c("p"),this.h()},l(k){e=u(k,"MAIN",{class:!0});var a=f(e);i=u(a,"H1",{class:!0});var C=f(i);L=A(C,"Ankademin AB"),C.forEach(m),b=p(a),h=u(a,"H2",{class:!0});var D=f(h);S=A(D,"Lista över anställda"),D.forEach(m),o=p(a),n=u(a,"UL",{class:!0,id:!0}),f(n).forEach(m),s=p(a),r=u(a,"H2",{class:!0});var j=f(r);_=A(j,"Lägg till anställd"),j.forEach(m),T=p(a),v=u(a,"INPUT",{class:!0,placeholder:!0,id:!0,type:!0}),B=p(a),y=u(a,"INPUT",{class:!0,placeholder:!0,id:!0,type:!0}),H=p(a),g=u(a,"LABEL",{for:!0});var O=f(g);I=A(O,"Admin"),O.forEach(m),w=p(a),N=u(a,"INPUT",{type:!0,name:!0,id:!0}),M=p(a),E=u(a,"BUTTON",{class:!0,id:!0});var F=f(E);P=A(F,"Lägg till"),F.forEach(m),U=p(a),x=u(a,"P",{class:!0});var G=f(x);G.forEach(m),a.forEach(m),this.h()},h(){l(i,"class","uno-x39txx"),l(h,"class","uno-b9bpw0"),l(n,"class","uno-9mhbzm"),l(n,"id","employee-list"),l(r,"class","uno-b9bpw0"),l(v,"class","uno-ka1cf7"),l(v,"placeholder","förnamn"),l(v,"id","first-name"),l(v,"type","text"),l(y,"class","uno-ka1cf7"),l(y,"placeholder","efternamn"),l(y,"id","last-name"),l(y,"type","text"),l(g,"for","admin"),l(N,"type","checkbox"),l(N,"name","admin"),l(N,"id","admin"),l(E,"class","uno-saoozz"),l(E,"id","add"),l(x,"class","uno-n7uh6q"),l(e,"class","uno-i9uabj")},m(k,a){R(k,e,a),t(e,i),t(i,L),t(e,b),t(e,h),t(h,S),t(e,o),t(e,n),t(e,s),t(e,r),t(r,_),t(e,T),t(e,v),t(e,B),t(e,y),t(e,H),t(e,g),t(g,I),t(e,w),t(e,N),t(e,M),t(e,E),t(E,P),t(e,U),t(e,x)},p:$,i:$,o:$,d(k){k&&m(e)}}}function X(z){let e=[];return V(()=>{class i{constructor(n,s){this.firstName=n,this.lastName=s}changeName(){let n=document.querySelector("#first-name").value,s=document.querySelector("#last-name").value;this.firstName=n,this.lastName=s,b()}}class L extends i{deleteDb(){e=[],b()}}let b=()=>{let o=document.querySelector("#employee-list");o.innerHTML="",e.forEach(n=>{console.log(`employee.constructor: ${n.constructor}`);let s=document.createElement("li");s.innerText=`${n.firstName} ${n.lastName}`;let r=document.createElement("button");if(r.innerHTML='<button class="uno-7ox8c3">ändra namn</button>',r.addEventListener("click",()=>n.changeName()),s.append(r),n.constructor.name==="Admin"){let _=document.createElement("button");_.innerHTML='<button class="uno-0213rv">ta bort allt</button>',_.addEventListener("click",()=>{n.deleteDb()}),s.append(_)}o.append(s)})},h=()=>{let o=document.querySelector("#first-name").value,n=document.querySelector("#last-name").value,s=document.querySelector("#admin").checked;console.log(s);let r;s?r=new L(o,n):r=new i(o,n),e.push(r),e=e,console.log(e),b()};document.querySelector("#add").addEventListener("click",h)}),[]}class Z extends J{constructor(e){super(),K(this,e,X,W,Q,{})}}export{Z as default};
