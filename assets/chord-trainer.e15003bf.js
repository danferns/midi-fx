import{S as O,i as P,s as k,f as M,m as I,t as N,g as D,h as v,e as q,B,k as E,a as L,K as w,b as y,C as R,D as U,d as $}from"./index.e013242d.js";import{N as j}from"./NodeUI.b76530f2.js";import{T as z}from"./Table.0710b753.js";import{c as A}from"./NodeUtil.713c9217.js";import{r as F,c as G}from"./chord-explorer.d7b6d02e.js";import{isNoteOn as H,isNoteOff as J}from"./note-splitter.ef71eab4.js";function Q(i){let t,o=i[2](i[0][0])+"",n,f,a,u;return a=new z({props:{tableData:i[0].map(i[7]).slice(1),height:122}}),{c(){t=q("div"),n=B(o),f=E(),M(a.$$.fragment),L(t,"class","bigtext svelte-a43qhp"),w(t,"success",i[1])},m(s,r){y(s,t,r),R(t,n),y(s,f,r),I(a,s,r),u=!0},p(s,r){(!u||r&1)&&o!==(o=s[2](s[0][0])+"")&&U(n,o),r&2&&w(t,"success",s[1]);const h={};r&1&&(h.tableData=s[0].map(s[7]).slice(1)),a.$set(h)},i(s){u||(N(a.$$.fragment,s),u=!0)},o(s){D(a.$$.fragment,s),u=!1},d(s){s&&$(t),s&&$(f),v(a,s)}}}function V(i){let t,o;return t=new j({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){M(t.$$.fragment)},m(n,f){I(t,n,f),o=!0},p(n,[f]){const a={};f&8195&&(a.$$scope={dirty:f,ctx:n}),t.$set(a)},i(n){o||(N(t.$$.fragment,n),o=!0)},o(n){D(t.$$.fragment,n),o=!1},d(n){v(t,n)}}}const se=`
        Displays a chord and waits for the user to play it.
        If the chord is played correctly, it will be played through the "Success" output, 
        and a new chord will be displayed.
    `;function b(){const i=["M","m"],t=Math.floor(Math.random()*12),o=i[Math.floor(Math.random()*2)];return{root:t,shape:o}}function W(i,t,o){let{id:n}=t;const f={MIDI:(e,c,m)=>{H(e,c,m)?l.includes(c)||(l.push(c),C(r[0])&&(o(1,d=!0),T())):J(e,c,m)&&(l=l.filter(_=>_!==c),g.has(c)&&(g.delete(c),s("Success",e,c,m)),l.length===0&&d&&(o(1,d=!1),r.shift(),r.push(b()),o(0,r))),s("MIDI",e,c,m)}},a={Preview:new Set,MIDI:new Set,Success:new Set};let{state:u={}}=t;const s=A(n,a);let r=[];for(let e=0;e<5;e++)r.push(b());function h(e){return F(e.root)+e.shape}let l=[];function C(e){const c=G[e.shape],m=e.root,_=new Set(c.map(p=>(p+m)%12)),S=new Set(l.map(p=>p%12));for(const p of _)if(!S.has(p))return!1;for(const p of S)if(!_.has(p))return!1;return!0}let d=!1,g=new Set;function T(){for(const e of l)s("Success",144,e,100),g.add(e)}const K=e=>[h(e)];return i.$$set=e=>{"id"in e&&o(3,n=e.id),"state"in e&&o(6,u=e.state)},[r,d,h,n,f,a,u,K]}class oe extends O{constructor(t){super(),P(this,t,W,V,k,{id:3,inputs:4,outputs:5,state:6})}get inputs(){return this.$$.ctx[4]}get outputs(){return this.$$.ctx[5]}}export{oe as default,se as doc};