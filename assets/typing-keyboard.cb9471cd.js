import{S,i as C,s as L,f as w,m as v,t as y,g as h,h as D,c as N,j as U,T as M,k as q,H,b as $,l as W,U as A,d as k,n as g,B as b,D as T}from"./index.e013242d.js";import{c as B}from"./NodeUtil.713c9217.js";import{D as P}from"./DropDown.c3003db0.js";import{N as V}from"./NodeUI.b76530f2.js";import{T as j}from"./Title.09786df1.js";import{b as Y}from"./MathUtil.63f01330.js";function z(o){return{c:g,m:g,p:g,i:g,o:g,d:g}}function F(o){let e,n;return e=new j({props:{$$slots:{default:[G]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},m(t,s){v(e,t,s),n=!0},p(t,s){const c={};s&32769&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function G(o){let e,n=Math.floor(o[0].transpose/12)*12+"",t,s,c=(o[0].transpose+120)%12+"",r;return{c(){e=b("Transpose: "),t=b(n),s=b(" + "),r=b(c)},m(l,p){$(l,e,p),$(l,t,p),$(l,s,p),$(l,r,p)},p(l,p){p&1&&n!==(n=Math.floor(l[0].transpose/12)*12+"")&&T(t,n),p&1&&c!==(c=(l[0].transpose+120)%12+"")&&T(r,c)},d(l){l&&k(e),l&&k(t),l&&k(s),l&&k(r)}}}function J(o){let e,n;return e=new j({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},m(t,s){v(e,t,s),n=!0},p(t,s){const c={};s&32768&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Q(o){let e;return{c(){e=b("loading...")},m(n,t){$(n,e,t)},d(n){n&&k(e)}}}function R(o){let e,n,t,s,c,r;function l(u){o[6](u)}let p={options:Object.keys(K)};o[0].mapping!==void 0&&(p.value=o[0].mapping),e=new P({props:p}),N.push(()=>U(e,"value",l));let i={ctx:o,current:null,token:null,hasCatch:!1,pending:J,then:F,catch:z,value:14,blocks:[,,,]};return M(c=o[2](K[o[1]]),i),{c(){w(e.$$.fragment),t=q(),s=H(),i.block.c()},m(u,f){v(e,u,f),$(u,t,f),$(u,s,f),i.block.m(u,i.anchor=f),i.mount=()=>s.parentNode,i.anchor=s,r=!0},p(u,f){o=u;const _={};!n&&f&1&&(n=!0,_.value=o[0].mapping,W(()=>n=!1)),e.$set(_),i.ctx=o,f&2&&c!==(c=o[2](K[o[1]]))&&M(c,i)||A(i,o,f)},i(u){r||(y(e.$$.fragment,u),y(i.block),r=!0)},o(u){h(e.$$.fragment,u);for(let f=0;f<3;f+=1){const _=i.blocks[f];h(_)}r=!1},d(u){D(e,u),u&&k(t),u&&k(s),i.block.d(u),i.token=null,i=null}}}function X(o){let e,n;return e=new V({props:{width:"200",$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){w(e.$$.fragment)},m(t,s){v(e,t,s),n=!0},p(t,[s]){const c={};s&32771&&(c.$$scope={dirty:s,ctx:t}),e.$set(c)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}const ae=`
    Turns your typing keyboard into a MIDI input device. You can choose between multiple key mappings.
    Double-click on "Typing Keyboard" to view the active mapping file.
    `,K={Default:"default",Chromatic:"chromatic"};function Z(o,e,n){let{id:t}=e;const s={},c={MIDI:new Set};let{state:r={mapping:"Default",transpose:0}}=e;const l=B(t,c),p=new Set;let i;document.addEventListener("keydown",u),document.addEventListener("keyup",f),window.addEventListener("blur",_);function u(a){if(a.repeat)return;const d=a.code.startsWith("Key")?a.key:a.code;if(!p.has(d)&&!(a.ctrlKey||a.shiftKey||a.altKey||a.metaKey))if(Object.keys(i.notes).includes(d)){p.add(d);const m=i.notes[d]+r.transpose;m>=0&&m<=127&&l("MIDI",144,m,127)}else Object.keys(i.transpose).includes(d)&&(_(),n(0,r.transpose=Y(r.transpose+i.transpose[d],-127,127),r))}function f(a){const d=a.code.startsWith("Key")?a.key:a.code;if(!!p.has(d)&&(p.delete(d),Object.keys(i.notes).includes(d))){const m=i.notes[d]+r.transpose;m>=0&&m<=127&&l("MIDI",144,m,0)}}function _(){for(const a of p)l("MIDI",144,i.notes[a]+r.transpose,0);p.clear()}async function E(a){const d="./keymaps/"+a+".json";i=await fetch(d).then(m=>{if(!m.ok)throw new Error("HTTP error "+m.status);return m.json()}).catch(async m=>{throw new Error("Error loading mapping: "+m.message)})}let I;function O(a){o.$$.not_equal(r.mapping,a)&&(r.mapping=a,n(0,r))}return o.$$set=a=>{"id"in a&&n(3,t=a.id),"state"in a&&n(0,r=a.state)},o.$$.update=()=>{o.$$.dirty&3&&r.mapping!==I&&n(1,I=r.mapping)},[r,I,E,t,s,c,O]}class re extends S{constructor(e){super(),C(this,e,Z,X,L,{id:3,inputs:4,outputs:5,state:0})}get inputs(){return this.$$.ctx[4]}get outputs(){return this.$$.ctx[5]}}export{re as default,ae as doc};