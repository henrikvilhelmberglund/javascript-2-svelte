import{S as $e,i as we,s as Pe,k as o,q as d,a as h,l as p,m as i,r as u,h as n,c as m,n as ye,b as Ee,H as t,C as Z}from"../../../../chunks/index-7c12fe80.js";function Se(s){let e,c,A=JSON.stringify(s[1])+"",$,w,v,P=JSON.stringify(s[2])+"",y,E,f,B=JSON.stringify(s[3].hi())+"",S,g,r,l=JSON.stringify(s[6])+"",_,G,N,x=s[2].greet()+"",C,K,b,ee=s[2].welcome()+"",R,Y,k,te=JSON.stringify(s[7])+"",z,D,I,ae=s[7].greet()+"",T,W,J,re=s[6].feedback(s[2])+"",j,F,O,se=s[6].feedback(s[4])+"",L,Q,H,le=s[0].compareGrades(s[2],s[4])+"",U,V,M,ne=s[0].compareGrades(s[5],s[2])+"",X;return{c(){e=o("main"),c=o("p"),$=d(A),w=h(),v=o("p"),y=d(P),E=h(),f=o("p"),S=d(B),g=h(),r=o("p"),_=d(l),G=h(),N=o("p"),C=d(x),K=h(),b=o("p"),R=d(ee),Y=h(),k=o("p"),z=d(te),D=h(),I=o("p"),T=d(ae),W=h(),J=o("p"),j=d(re),F=h(),O=o("p"),L=d(se),Q=h(),H=o("p"),U=d(le),V=h(),M=o("p"),X=d(ne),this.h()},l(q){e=p(q,"MAIN",{class:!0});var a=i(e);c=p(a,"P",{});var oe=i(c);$=u(oe,A),oe.forEach(n),w=m(a),v=p(a,"P",{});var pe=i(v);y=u(pe,P),pe.forEach(n),E=m(a),f=p(a,"P",{});var ie=i(f);S=u(ie,B),ie.forEach(n),g=m(a),r=p(a,"P",{});var de=i(r);_=u(de,l),de.forEach(n),G=m(a),N=p(a,"P",{});var ue=i(N);C=u(ue,x),ue.forEach(n),K=m(a),b=p(a,"P",{});var ce=i(b);R=u(ce,ee),ce.forEach(n),Y=m(a),k=p(a,"P",{});var he=i(k);z=u(he,te),he.forEach(n),D=m(a),I=p(a,"P",{});var me=i(I);T=u(me,ae),me.forEach(n),W=m(a),J=p(a,"P",{});var _e=i(J);j=u(_e,re),_e.forEach(n),F=m(a),O=p(a,"P",{});var ge=i(O);L=u(ge,se),ge.forEach(n),Q=m(a),H=p(a,"P",{});var ve=i(H);U=u(ve,le),ve.forEach(n),V=m(a),M=p(a,"P",{});var fe=i(M);X=u(fe,ne),fe.forEach(n),a.forEach(n),this.h()},h(){ye(e,"class","uno-r11zw5")},m(q,a){Ee(q,e,a),t(e,c),t(c,$),t(e,w),t(e,v),t(v,y),t(e,E),t(e,f),t(f,S),t(e,g),t(e,r),t(r,_),t(e,G),t(e,N),t(N,C),t(e,K),t(e,b),t(b,R),t(e,Y),t(e,k),t(k,z),t(e,D),t(e,I),t(I,T),t(e,W),t(e,J),t(J,j),t(e,F),t(e,O),t(O,L),t(e,Q),t(e,H),t(H,U),t(e,V),t(e,M),t(M,X)},p:Z,i:Z,o:Z,d(q){q&&n(e)}}}function Ge(s){class e{constructor(r,l){this.name=r,this.age=l}greet(){return console.log(`Hi! My name is ${this.name} and I am ${this.age}`),`Hi! My name is ${this.name} and I am ${this.age}`}}class c extends e{constructor(r,l,_){super(r,l),this.averageGrade=_}greet(){return`${super.greet()} and a student!`}welcome(){return"Welcome to Ankademin! 🦆"}static compareGrades(r,l){if(r.averageGrade>l.averageGrade)return`${r.name} has better grades than ${l.name}`;if(r.averageGrade<l.averageGrade)return`${l.name} has better grades than ${r.name}`}}class A extends e{hi(){return"Hi! I am a student2!"}}class $ extends c{constructor(r,l,_,G){super(r,l,_),this.tenure=G}greet(){let r=super.greet(),l=super.welcome();return`${r} ${l} By the way, I rule this classroom 😄`}}class w extends e{constructor(r,l,_){super(r,l),this.students=_}feedback(r){return r.averageGrade<5?`You need to step it up ${r.name}`:`You're doing good! Keep up the good work ${r.name}!`}}let v=new e("Matt",34),P=new c("Nala",16,6.7),y=new A("Nala",16,3),E=new c("Superman",16,3),f=new c("Dio",16,9),B=new w("Batman",40,37),S=new $("Kalle",35,9,"6 månader");return console.log(P),[c,v,P,y,E,f,B,S]}class be extends $e{constructor(e){super(),we(this,e,Ge,Se,Pe,{})}}export{be as default};
