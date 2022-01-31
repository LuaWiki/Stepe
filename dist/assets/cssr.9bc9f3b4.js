import{i as R}from"./utils.5ef80674.js";import{B as $,h as q,w as G,l as D}from"./vendor.a9c6e360.js";import{C as J}from"./use-rtl.a873a0ca.js";globalThis&&globalThis.__awaiter;function ie(t=8){return Math.random().toString(16).slice(2,2+t)}function se(t,r=[],i){const u={};return r.forEach(s=>{u[s]=t[s]}),Object.assign(u,i)}let j,W;const K=()=>{var t,r;j=R?(r=(t=document)===null||t===void 0?void 0:t.fonts)===null||r===void 0?void 0:r.ready:void 0,W=!1,j!==void 0?j.then(()=>{W=!0}):W=!0};K();function ue(t){if(W)return;let r=!1;$(()=>{W||j==null||j.then(()=>{r||t()})}),q(()=>{r=!0})}const Q={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function V(t,r,i){if(t==="mousemoveoutside"){const u=s=>{r.contains(s.target)||i(s)};return{mousemove:u,touchstart:u}}else if(t==="clickoutside"){let u=!1;const s=c=>{u=!r.contains(c.target)},a=c=>{!u||r.contains(c.target)||i(c)};return{mousedown:s,mouseup:a,touchstart:s,touchend:a}}return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`),{}}function I(t,r,i){const u=Q[t];let s=u.get(r);s===void 0&&u.set(r,s=new WeakMap);let a=s.get(i);return a===void 0&&s.set(i,a=V(t,r,i)),a}function X(t,r,i,u){if(t==="mousemoveoutside"||t==="clickoutside"){const s=I(t,r,i);return Object.keys(s).forEach(a=>{ee(a,document,s[a],u)}),!0}return!1}function Y(t,r,i,u){if(t==="mousemoveoutside"||t==="clickoutside"){const s=I(t,r,i);return Object.keys(s).forEach(a=>{ne(a,document,s[a],u)}),!0}return!1}function Z(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const t=new WeakMap,r=new WeakMap;function i(){t.set(this,!0)}function u(){t.set(this,!0),r.set(this,!0)}function s(n,e,o){const d=n[e];return n[e]=function(){return o.apply(n,arguments),d.apply(n,arguments)},n}function a(n,e){n[e]=Event.prototype[e]}const c=new WeakMap,O=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function P(){var n;return(n=c.get(this))!==null&&n!==void 0?n:null}function E(n,e){O!==void 0&&Object.defineProperty(n,"currentTarget",{configurable:!0,enumerable:!0,get:e!=null?e:O.get})}const l={bubble:{},capture:{}},w={};function L(){const n=function(e){const{type:o,eventPhase:d,target:f,bubbles:h}=e;if(d===2)return;const v=d===1?"capture":"bubble";let p=f;const b=[];for(;p===null&&(p=window),b.push(p),p!==window;)p=p.parentNode||null;const g=l.capture[o],H=l.bubble[o];if(s(e,"stopPropagation",i),s(e,"stopImmediatePropagation",u),E(e,P),v==="capture"){if(g===void 0)return;for(let m=b.length-1;m>=0&&!t.has(e);--m){const T=b[m],M=g.get(T);if(M!==void 0){c.set(e,T);for(const k of M){if(r.has(e))break;k(e)}}if(m===0&&!h&&H!==void 0){const k=H.get(T);if(k!==void 0)for(const A of k){if(r.has(e))break;A(e)}}}}else if(v==="bubble"){if(H===void 0)return;for(let m=0;m<b.length&&!t.has(e);++m){const T=b[m],M=H.get(T);if(M!==void 0){c.set(e,T);for(const k of M){if(r.has(e))break;k(e)}}}}a(e,"stopPropagation"),a(e,"stopImmediatePropagation"),E(e)};return n.displayName="evtdUnifiedHandler",n}function z(){const n=function(e){const{type:o,eventPhase:d}=e;if(d!==2)return;const f=w[o];f!==void 0&&f.forEach(h=>h(e))};return n.displayName="evtdUnifiedWindowEventHandler",n}const y=L(),x=z();function C(n,e){const o=l[n];return o[e]===void 0&&(o[e]=new Map,window.addEventListener(e,y,n==="capture")),o[e]}function B(n){return w[n]===void 0&&(w[n]=new Set,window.addEventListener(n,x)),w[n]}function U(n,e){let o=n.get(e);return o===void 0&&n.set(e,o=new Set),o}function S(n,e,o,d){const f=l[e][o];if(f!==void 0){const h=f.get(n);if(h!==void 0&&h.has(d))return!0}return!1}function F(n,e){const o=w[n];return!!(o!==void 0&&o.has(e))}function N(n,e,o,d){let f;if(typeof d=="object"&&d.once===!0?f=g=>{_(n,e,f,d),o(g)}:f=o,X(n,e,f,d))return;const v=d===!0||typeof d=="object"&&d.capture===!0?"capture":"bubble",p=C(v,n),b=U(p,e);if(b.has(f)||b.add(f),e===window){const g=B(n);g.has(f)||g.add(f)}}function _(n,e,o,d){if(Y(n,e,o,d))return;const h=d===!0||typeof d=="object"&&d.capture===!0,v=h?"capture":"bubble",p=C(v,n),b=U(p,e);if(e===window&&!S(e,h?"bubble":"capture",n,o)&&F(n,o)){const H=w[n];H.delete(o),H.size===0&&(window.removeEventListener(n,x),w[n]=void 0)}b.has(o)&&b.delete(o),b.size===0&&p.delete(e),p.size===0&&(window.removeEventListener(n,y,v==="capture"),l[v][n]=void 0)}return{on:N,off:_}}const{on:ee,off:ne}=Z();function ae(t,r){return G(t,i=>{i!==void 0&&(r.value=i)}),D(()=>t.value===void 0?r.value:t.value)}function de(t,r){return D(()=>{for(const i of r)if(t[i]!==void 0)return t[i];return t[r[r.length-1]]})}const{c:fe}=J(),ce="vueuc-style";export{ee as a,ue as b,ce as c,fe as d,ie as e,de as f,se as k,ne as o,ae as u};
