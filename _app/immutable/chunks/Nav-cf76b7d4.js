import{S as q,i as C,s as I,k as _,a as S,l as m,m as v,c as V,h as c,n as h,b as p,H as d,C as A,I as w,q as b,r as g,e as N,u as E}from"./index-8546963b.js";import{b as o}from"./paths-791c7742.js";function j(s,e,r){const f=s.slice();return f[3]=e[r],f}function y(s){let e,r;return{c(){e=_("a"),r=b("Home"),this.h()},l(f){e=m(f,"A",{class:!0,href:!0});var t=v(e);r=g(t,"Home"),t.forEach(c),this.h()},h(){h(e,"class","uno-964moj"),h(e,"href",o+"/")},m(f,t){p(f,e,t),d(e,r)},p:A,d(f){f&&c(e)}}}function D(s){let e,r=s[3].replace("/","")+"",f,t;return{c(){e=_("a"),f=b(r),this.h()},l(l){e=m(l,"A",{class:!0,href:!0});var a=v(e);f=g(a,r),a.forEach(c),this.h()},h(){h(e,"class","uno-k0k7kf"),h(e,"href",t=""+(o+s[1]+s[3]))},m(l,a){p(l,e,a),d(e,f)},p(l,a){a&1&&r!==(r=l[3].replace("/","")+"")&&E(f,r),a&3&&t!==(t=""+(o+l[1]+l[3]))&&h(e,"href",t)},d(l){l&&c(e)}}}function z(s){let e,r=s[3].replace("/","")+"",f,t;return{c(){e=_("a"),f=b(r),this.h()},l(l){e=m(l,"A",{class:!0,href:!0});var a=v(e);f=g(a,r),a.forEach(c),this.h()},h(){h(e,"class","uno-lkjsj7"),h(e,"href",t=""+(o+s[1]+s[3]))},m(l,a){p(l,e,a),d(e,f)},p(l,a){a&1&&r!==(r=l[3].replace("/","")+"")&&E(f,r),a&3&&t!==(t=""+(o+l[1]+l[3]))&&h(e,"href",t)},d(l){l&&c(e)}}}function B(s){let e,r=s[3].replace("/","")+"",f,t;return{c(){e=_("a"),f=b(r),this.h()},l(l){e=m(l,"A",{class:!0,href:!0});var a=v(e);f=g(a,r),a.forEach(c),this.h()},h(){h(e,"class","uno-2c4cln"),h(e,"href",t=""+(o+s[1]+s[3]))},m(l,a){p(l,e,a),d(e,f)},p(l,a){a&1&&r!==(r=l[3].replace("/","")+"")&&E(f,r),a&3&&t!==(t=""+(o+l[1]+l[3]))&&h(e,"href",t)},d(l){l&&c(e)}}}function F(s){let e,r=s[3].replace("/","")+"",f,t;return{c(){e=_("a"),f=b(r),this.h()},l(l){e=m(l,"A",{class:!0,href:!0});var a=v(e);f=g(a,r),a.forEach(c),this.h()},h(){h(e,"class","uno-964moj"),h(e,"href",t=""+(o+s[1]+s[3]))},m(l,a){p(l,e,a),d(e,f)},p(l,a){a&1&&r!==(r=l[3].replace("/","")+"")&&E(f,r),a&3&&t!==(t=""+(o+l[1]+l[3]))&&h(e,"href",t)},d(l){l&&c(e)}}}function H(s){let e;function r(l,a){if(l[2]===1)return F;if(l[2]===2)return B;if(l[2]===3)return z;if(l[2]===4)return D}let f=r(s),t=f&&f(s);return{c(){t&&t.c(),e=N()},l(l){t&&t.l(l),e=N()},m(l,a){t&&t.m(l,a),p(l,e,a)},p(l,a){f===(f=r(l))&&t?t.p(l,a):(t&&t.d(1),t=f&&f(l),t&&(t.c(),t.m(e.parentNode,e)))},d(l){t&&t.d(l),l&&c(e)}}}function G(s){let e,r,f,t=s[2]===1&&y(),l=s[0],a=[];for(let n=0;n<l.length;n+=1)a[n]=H(j(s,l,n));return{c(){e=_("nav"),r=_("div"),t&&t.c(),f=S();for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=m(n,"NAV",{class:!0});var u=v(e);r=m(u,"DIV",{class:!0});var i=v(r);t&&t.l(i),f=V(i);for(let k=0;k<a.length;k+=1)a[k].l(i);i.forEach(c),u.forEach(c),this.h()},h(){h(r,"class","uno-s68r3h"),h(e,"class","uno-yv8dws")},m(n,u){p(n,e,u),d(e,r),t&&t.m(r,null),d(r,f);for(let i=0;i<a.length;i+=1)a[i].m(r,null)},p(n,[u]){if(n[2]===1?t?t.p(n,u):(t=y(),t.c(),t.m(r,f)):t&&(t.d(1),t=null),u&7){l=n[0];let i;for(i=0;i<l.length;i+=1){const k=j(n,l,i);a[i]?a[i].p(k,u):(a[i]=H(k),a[i].c(),a[i].m(r,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=l.length}},i:A,o:A,d(n){n&&c(e),t&&t.d(),w(a,n)}}}function J(s,e,r){let{routes:f}=e,{prefix:t}=e,{level:l}=e;return s.$$set=a=>{"routes"in a&&r(0,f=a.routes),"prefix"in a&&r(1,t=a.prefix),"level"in a&&r(2,l=a.level)},[f,t,l]}class M extends q{constructor(e){super(),C(this,e,J,G,I,{routes:0,prefix:1,level:2})}}export{M as N};
