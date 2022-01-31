import{m as E,i as pe,w as _,k as O,d as L,p as q,E as Ve,h as te,G as ne,t as N,l as W,j as x,H as We,B as ve,D as Ze,F as me,I as He,T as Xe,n as Ye,J as Ke,y as Ue}from"./vendor.a9c6e360.js";import{w as we,f as oe,u as G,r as qe,d as Ge,c as Z,g as J,i as be,j as ge,h as ye,s as Je,k as Qe,l as se,m as re}from"./use-rtl.a873a0ca.js";import{o as F,a as A,c as Re,b as et,d as ie,e as tt,u as nt,f as ot,k as rt}from"./cssr.9bc9f3b4.js";import{f as le}from"./utils.5ef80674.js";import{i as xe}from"./Button.75c24f56.js";import{f as it}from"./flatten.061e3e71.js";import{b as at}from"./Icon.f3853bcd.js";function Me(t,e="default",n=void 0){const o=t[e];if(!o)return we("getFirstSlotVNode",`slot[${e}] is empty`),null;const i=it(o(n));return i.length===1?i[0]:(we("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function st(t){const e=E(!!t.value);if(e.value)return pe(e);const n=_(t,o=>{o&&(e.value=!0,n())});return pe(e)}const $e=oe("n-modal-body"),Se=oe("n-drawer-body"),Ee=oe("n-popover-body"),lt=oe("n-internal-select-menu-body"),Ie="__disabled__";function H(t){const e=O($e,null),n=O(Se,null),o=O(Ee,null),i=O(lt,null);return G(()=>{var a;const{to:h}=t;return h!==void 0?h===!1?Ie:h===!0?"body":h:(e==null?void 0:e.value)?(a=e.value.$el)!==null&&a!==void 0?a:e.value:(n==null?void 0:n.value)?n.value:(o==null?void 0:o.value)?o.value:(i==null?void 0:i.value)?i.value:h!=null?h:"body"})}H.tdkey=Ie;H.propTo={type:[String,Object,Boolean],default:void 0};function de(t,e="default"){const n=t[e];if(n===void 0)throw new Error(`[vueuc/binder]: slot[${e}] is empty.`);return n()}function Be(t,e="default"){const n=t[e];if(n===void 0)throw new Error(`[vueuc/binder]: slot[${e}] is empty.`);const o=n();if(o.length===1)return o[0];throw new Error(`[vueuc/binder]: slot[${e}] should have exactly one child.`)}let j=null;function ze(){if(j===null&&(j=document.getElementById("v-binder-view-measurer"),j===null)){j=document.createElement("div"),j.id="v-binder-view-measurer";const{style:t}=j;t.position="fixed",t.left="0",t.right="0",t.top="0",t.bottom="0",t.pointerEvents="none",t.visibility="hidden",document.body.appendChild(j)}return j.getBoundingClientRect()}function dt(t,e){const n=ze();return{top:e,left:t,height:0,width:0,right:n.width-t,bottom:n.height-e}}function ue(t){const e=t.getBoundingClientRect(),n=ze();return{left:e.left-n.left,top:e.top-n.top,bottom:n.height+n.top-e.bottom,right:n.width+n.left-e.right,width:e.width,height:e.height}}function ut(t){return t.nodeType===9?null:t.parentNode}function Ce(t){if(t===null)return null;const e=ut(t);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:n,overflowX:o,overflowY:i}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(n+i+o))return e}return Ce(e)}const ct=L({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(t){var e;q("VBinder",(e=Ve())===null||e===void 0?void 0:e.proxy);const n=O("VBinder",null),o=E(null),i=r=>{o.value=r,n&&t.syncTargetWithParent&&n.setTargetRef(r)};let a=[];const h=()=>{let r=o.value;for(;r=Ce(r),r!==null;)a.push(r);for(const y of a)A("scroll",y,M,!0)},u=()=>{for(const r of a)F("scroll",r,M,!0);a=[]},s=new Set,m=r=>{s.size===0&&h(),s.has(r)||s.add(r)},b=r=>{s.has(r)&&s.delete(r),s.size===0&&u()},M=()=>{at(d)},d=()=>{s.forEach(r=>r())},c=new Set,w=r=>{c.size===0&&A("resize",window,l),c.has(r)||c.add(r)},p=r=>{c.has(r)&&c.delete(r),c.size===0&&F("resize",window,l)},l=()=>{c.forEach(r=>r())};return te(()=>{F("resize",window,l),u()}),{targetRef:o,setTargetRef:i,addScrollListener:m,removeScrollListener:b,addResizeListener:w,removeResizeListener:p}},render(){return de(this.$slots)}});var ft=ct,ht=L({name:"Target",setup(){const{setTargetRef:t,syncTarget:e}=O("VBinder");return{syncTarget:e,setTargetDirective:{mounted:t,updated:t}}},render(){const{syncTarget:t,setTargetDirective:e}=this;return t?ne(Be(this.$slots),[[e]]):Be(this.$slots)}});const X="@@mmoContext",pt={mounted(t,{value:e}){t[X]={handler:void 0},typeof e=="function"&&(t[X].handler=e,A("mousemoveoutside",t,e))},updated(t,{value:e}){const n=t[X];typeof e=="function"?n.handler?n.handler!==e&&(F("mousemoveoutside",t,n.handler),n.handler=e,A("mousemoveoutside",t,e)):(t[X].handler=e,A("mousemoveoutside",t,e)):n.handler&&(F("mousemoveoutside",t,n.handler),n.handler=void 0)},unmounted(t){const{handler:e}=t[X];e&&F("mousemoveoutside",t,e),t[X].handler=void 0}};var vt=pt;const Y="@@coContext",mt={mounted(t,{value:e}){t[Y]={handler:void 0},typeof e=="function"&&(t[Y].handler=e,A("clickoutside",t,e))},updated(t,{value:e}){const n=t[Y];typeof e=="function"?n.handler?n.handler!==e&&(F("clickoutside",t,n.handler),n.handler=e,A("clickoutside",t,e)):(t[Y].handler=e,A("clickoutside",t,e)):n.handler&&(F("clickoutside",t,n.handler),n.handler=void 0)},unmounted(t){const{handler:e}=t[Y];e&&F("clickoutside",t,e),t[Y].handler=void 0}};var Te=mt;function wt(t,e){console.error(`[vdirs/${t}]: ${e}`)}class bt{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,n){const{elementZIndex:o}=this;if(n!==void 0){e.style.zIndex=`${n}`,o.delete(e);return}const{nextZIndex:i}=this;o.has(e)&&o.get(e)+1===this.nextZIndex||(e.style.zIndex=`${i}`,o.set(e,i),this.nextZIndex=i+1,this.squashState())}unregister(e,n){const{elementZIndex:o}=this;o.has(e)?o.delete(e):n===void 0&&wt("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((n,o)=>n[1]-o[1]),this.nextZIndex=2e3,e.forEach(n=>{const o=n[0],i=this.nextZIndex++;`${i}`!==o.style.zIndex&&(o.style.zIndex=`${i}`)})}}var ce=new bt;const K="@@ziContext",gt={mounted(t,e){const{value:n={}}=e,{zIndex:o,enabled:i}=n;t[K]={enabled:!!i,initialized:!1},i&&(ce.ensureZIndex(t,o),t[K].initialized=!0)},updated(t,e){const{value:n={}}=e,{zIndex:o,enabled:i}=n,a=t[K].enabled;i&&!a&&(ce.ensureZIndex(t,o),t[K].initialized=!0),t[K].enabled=!!i},unmounted(t,e){if(!t[K].initialized)return;const{value:n={}}=e,{zIndex:o}=n;ce.unregister(t,o)}};var Fe=gt;function Ae(t){return typeof t=="string"?document.querySelector(t):t()}var yt=L({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(t){return{showTeleport:st(N(t,"show")),mergedTo:W(()=>{const{to:e}=t;return e!=null?e:"body"})}},render(){return this.showTeleport?this.disabled?de(this.$slots):x(We,{disabled:this.disabled,to:this.mergedTo},de(this.$slots)):null}});const ae={top:"bottom",bottom:"top",left:"right",right:"left"},ke={start:"end",center:"center",end:"start"},fe={top:"height",bottom:"height",left:"width",right:"width"},xt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Mt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},$t={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Oe={top:!0,bottom:!1,left:!0,right:!1},Ne={top:"end",bottom:"start",left:"end",right:"start"};function St(t,e,n,o,i,a){if(!i||a)return{placement:t,top:0,left:0};const[h,u]=t.split("-");let s=u!=null?u:"center",m={top:0,left:0};const b=(c,w,p)=>{let l=0,r=0;const y=n[c]-e[w]-e[c];return y>0&&o&&(p?r=Oe[w]?y:-y:l=Oe[w]?y:-y),{left:l,top:r}},M=h==="left"||h==="right";if(s!=="center"){const c=$t[t],w=ae[c],p=fe[c];if(n[p]>e[p]){if(e[c]+e[p]<n[p]){const l=(n[p]-e[p])/2;e[c]<l||e[w]<l?e[c]<e[w]?(s=ke[u],m=b(p,w,M)):m=b(p,c,M):s="center"}}else n[p]<e[p]&&e[w]<0&&e[c]>e[w]&&(s=ke[u])}else{const c=h==="bottom"||h==="top"?"left":"top",w=ae[c],p=fe[c],l=(n[p]-e[p])/2;(e[c]<l||e[w]<l)&&(e[c]>e[w]?(s=Ne[c],m=b(p,c,M)):(s=Ne[w],m=b(p,w,M)))}let d=h;return e[h]<n[fe[h]]&&e[h]<e[ae[h]]&&(d=ae[h]),{placement:s!=="center"?`${d}-${s}`:d,left:m.left,top:m.top}}function Et(t,e){return e?Mt[t]:xt[t]}function It(t,e,n,o,i,a){if(a)switch(t){case"bottom-start":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-e.top)}px`,left:`${Math.round(n.left-e.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-e.top+n.height/2)}px`,left:`${Math.round(n.left-e.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-e.top+n.height/2)}px`,left:`${Math.round(n.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-e.top+n.height)}px`,left:`${Math.round(n.left-e.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(t){case"bottom-start":return{top:`${Math.round(n.top-e.top+n.height+o)}px`,left:`${Math.round(n.left-e.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-e.top+n.height+o)}px`,left:`${Math.round(n.left-e.left+n.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-e.top+o)}px`,left:`${Math.round(n.left-e.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-e.top+o)}px`,left:`${Math.round(n.left-e.left+n.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-e.top+o)}px`,left:`${Math.round(n.left-e.left+n.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-e.top+n.height+o)}px`,left:`${Math.round(n.left-e.left+n.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-e.top+o)}px`,left:`${Math.round(n.left-e.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-e.top+n.height+o)}px`,left:`${Math.round(n.left-e.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-e.top+o)}px`,left:`${Math.round(n.left-e.left+n.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-e.top+n.height/2+o)}px`,left:`${Math.round(n.left-e.left+n.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-e.top+n.height/2+o)}px`,left:`${Math.round(n.left-e.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-e.top+n.height+o)}px`,left:`${Math.round(n.left-e.left+n.width/2+i)}px`,transform:"translateX(-50%)"}}}const Bt=ie([ie(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ie(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ie("> *",{pointerEvents:"all"})])]);var zt=L({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(t){const e=O("VBinder"),n=G(()=>t.enabled!==void 0?t.enabled:t.show),o=E(null),i=E(null),a=()=>{const{syncTrigger:d}=t;d.includes("scroll")&&e.addScrollListener(s),d.includes("resize")&&e.addResizeListener(s)},h=()=>{e.removeScrollListener(s),e.removeResizeListener(s)};ve(()=>{n.value&&(s(),a())});const u=qe();Bt.mount({id:"vueuc/binder",head:!0,anchorMetaName:Re,ssr:u}),te(()=>{h()}),et(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const d=o.value;if(d===null)return;const c=e.targetRef,{x:w,y:p,overlap:l}=t,r=w!==void 0&&p!==void 0?dt(w,p):ue(c),{width:y,minWidth:I,placement:v,internalShift:B,flip:g}=t;d.setAttribute("v-placement",v),l?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:S}=d;y==="target"?S.width=`${r.width}px`:y!==void 0?S.width=y:S.width="",I==="target"?S.minWidth=`${r.width}px`:I!==void 0?S.minWidth=I:S.minWidth="";const D=ue(d),k=ue(i.value),{left:z,top:V,placement:P}=St(v,r,D,B,g,l),U=Et(P,l),{left:f,top:$,transform:C}=It(P,k,r,V,z,l);d.setAttribute("v-placement",P),d.style.setProperty("--v-offset-left",`${Math.round(z)}px`),d.style.setProperty("--v-offset-top",`${Math.round(V)}px`),d.style.transform=`translateX(${f}) translateY(${$}) ${C}`,d.style.transformOrigin=U};_(n,d=>{d?(a(),m()):h()});const m=()=>{Ze().then(s).catch(d=>console.error(d))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{_(N(t,d),s)}),["teleportDisabled"].forEach(d=>{_(N(t,d),m)}),_(N(t,"syncTrigger"),d=>{d.includes("resize")?e.addResizeListener(s):e.removeResizeListener(s),d.includes("scroll")?e.addScrollListener(s):e.removeScrollListener(s)});const b=xe(),M=G(()=>{const{to:d}=t;if(d!==void 0)return d;!b.value});return{VBinder:e,mergedEnabled:n,offsetContainerRef:i,followerRef:o,mergedTo:M,syncPosition:s}},render(){return x(yt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{const t=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},this.$slots)]);return this.zindexable?ne(t,[[Fe,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});function je(t){return t instanceof HTMLElement}function De(t){for(let e=0;e<t.childNodes.length;e++){const n=t.childNodes[e];if(je(n)&&(_e(n)||De(n)))return!0}return!1}function Pe(t){for(let e=t.childNodes.length-1;e>=0;e--){const n=t.childNodes[e];if(je(n)&&(_e(n)||Pe(n)))return!0}return!1}function _e(t){if(!Ct(t))return!1;try{t.focus()}catch{}return document.activeElement===t}function Ct(t){if(t.tabIndex>0||t.tabIndex===0&&t.getAttribute("tabIndex")!==null)return!0;if(t.getAttribute("disabled"))return!1;switch(t.nodeName){case"A":return!!t.href&&t.rel!=="ignore";case"INPUT":return t.type!=="hidden"&&t.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Q=[];const Tt=L({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(t){const e=tt(),n=E(null),o=E(null);let i=!1,a=!1;const h=document.activeElement;function u(){return Q[Q.length-1]===e}function s(l){var r;l.code==="Escape"&&u()&&((r=t.onEsc)===null||r===void 0||r.call(t))}ve(()=>{_(()=>t.active,l=>{l?(M(),A("keydown",document,s)):(F("keydown",document,s),i&&d())},{immediate:!0})}),te(()=>{F("keydown",document,s),i&&d()});function m(l){if(!a&&u()){const r=b();if(r===null||r.contains(l.target))return;c("first")}}function b(){const l=n.value;if(l===null)return null;let r=l;for(;r=r.nextSibling,!(r===null||r instanceof Element&&r.tagName==="DIV"););return r}function M(){var l;if(!t.disabled){if(Q.push(e),t.autoFocus){const{initialFocusTo:r}=t;r===void 0?c("first"):(l=Ae(r))===null||l===void 0||l.focus()}i=!0,document.addEventListener("focus",m,!0)}}function d(){var l;if(t.disabled||(document.removeEventListener("focus",m,!0),Q=Q.filter(y=>y!==e),u()))return;const{finalFocusTo:r}=t;r!==void 0?(l=Ae(r))===null||l===void 0||l.focus():t.returnFocusOnDeactivated&&h instanceof HTMLElement&&(a=!0,h.focus({preventScroll:!0}),a=!1)}function c(l){if(!!u()&&t.active){const r=n.value,y=o.value;if(r!==null&&y!==null){const I=b();if(I==null||I===y){a=!0,r.focus({preventScroll:!0}),a=!1;return}a=!0;const v=l==="first"?De(I):Pe(I);a=!1,v||(a=!0,r.focus({preventScroll:!0}),a=!1)}}}function w(l){if(a)return;const r=b();r!==null&&(l.relatedTarget!==null&&r.contains(l.relatedTarget)?c("last"):c("first"))}function p(l){a||(l.relatedTarget!==null&&l.relatedTarget===n.value?c("last"):c("first"))}return{focusableStartRef:n,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:w,handleEndFocus:p}},render(){const{default:t}=this.$slots;if(t===void 0)return null;if(this.disabled)return t();const{active:e,focusableStyle:n}=this;return x(me,null,[x("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),t(),x("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});var Ft={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};const At=t=>{const{boxShadow2:e,popoverColor:n,textColor2:o,borderRadius:i,fontSize:a,dividerColor:h}=t;return Object.assign(Object.assign({},Ft),{fontSize:a,borderRadius:i,color:n,dividerColor:h,textColor:o,boxShadow:e})},kt={name:"Popover",common:Ge,self:At};var Ot=kt;const he={top:"bottom",bottom:"top",left:"right",right:"left"};var Nt=Z([J("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 transform-origin: inherit;
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[Z("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),Z("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),Z("&.popover-transition-enter-active",`
 transition:
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),Z("&.popover-transition-leave-active",`
 transition:
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `),be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[be("show-header","padding: var(--n-padding);")]),ge("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ge("content",`
 padding: var(--n-padding);
 `),J("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[J("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(var(--n-arrow-height) * 1.414);
 height: calc(var(--n-arrow-height) * 1.414);
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)])]),T("top-start",`
 top: calc(-0.707 * var(--n-arrow-height));
 left: calc(var(--n-arrow-offset) - var(--v-offset-left));
 `),T("top",`
 top: calc(-0.707 * var(--n-arrow-height));
 transform: translateX(calc(-0.707 * var(--n-arrow-height))) rotate(45deg);
 left: 50%;
 `),T("top-end",`
 top: calc(-0.707 * var(--n-arrow-height));
 right: calc(var(--n-arrow-offset) + var(--v-offset-left));
 `),T("bottom-start",`
 bottom: calc(-0.707 * var(--n-arrow-height));
 left: calc(var(--n-arrow-offset) - var(--v-offset-left));
 `),T("bottom",`
 bottom: calc(-0.707 * var(--n-arrow-height));
 transform: translateX(calc(-0.707 * var(--n-arrow-height))) rotate(45deg);
 left: 50%;
 `),T("bottom-end",`
 bottom: calc(-0.707 * var(--n-arrow-height));
 right: calc(var(--n-arrow-offset) + var(--v-offset-left));
 `),T("left-start",`
 left: calc(-0.707 * var(--n-arrow-height));
 top: calc(var(--n-arrow-offset-vertical) - var(--v-offset-top));
 `),T("left",`
 left: calc(-0.707 * var(--n-arrow-height));
 transform: translateY(calc(-0.707 * var(--n-arrow-height))) rotate(45deg);
 top: 50%;
 `),T("left-end",`
 left: calc(-0.707 * var(--n-arrow-height));
 bottom: calc(var(--n-arrow-offset-vertical) + var(--v-offset-top));
 
 `),T("right-start",`
 right: calc(-0.707 * var(--n-arrow-height));
 top: calc(var(--n-arrow-offset-vertical) - var(--v-offset-top));
 `),T("right",`
 right: calc(-0.707 * var(--n-arrow-height));
 transform: translateY(calc(-0.707 * var(--n-arrow-height))) rotate(45deg);
 top: 50%;
 `),T("right-end",`
 right: calc(-0.707 * var(--n-arrow-height));
 bottom: calc(var(--n-arrow-offset-vertical) + var(--v-offset-top));
 `)]);function T(t,e){const n=t.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return Z(`[v-placement="${t}"] >`,[J("popover",`
 margin-${he[n]}: var(--n-space);
 `,[ye("show-arrow",`
 margin-${he[n]}: var(--n-space-arrow);
 `),ye("overlap",`
 margin: 0;
 `),Je("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${he[n]}: auto;
 ${o}
 `,[J("popover-arrow",e)])])])}const Le=Object.assign(Object.assign({},se.props),{to:H.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],internalTrapFocus:Boolean,animated:Boolean,onClickoutside:Function,minWidth:Number,maxWidth:Number}),jt=({arrowStyle:t,clsPrefix:e})=>x("div",{key:"__popover-arrow__",class:`${e}-popover-arrow-wrapper`},x("div",{class:`${e}-popover-arrow`,style:t}));var Dt=L({name:"PopoverBody",inheritAttrs:!1,props:Le,setup(t,{slots:e,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:i}=Qe(t),a=se("Popover","Popover",Nt,Ot,t,i),h=E(null),u=O("NPopover"),s=E(null),m=E(t.show),b=W(()=>{const{trigger:v,onClickoutside:B}=t,g=[],{positionManuallyRef:{value:S}}=u;return S||(v==="click"&&!B&&g.push([Te,r]),v==="hover"&&g.push([vt,l])),B&&g.push([Te,r]),t.displayDirective==="show"&&g.push([He,t.show]),g}),M=W(()=>[{width:t.width==="trigger"?"":le(t.width)},t.maxWidth?{maxWidth:le(t.maxWidth)}:{},t.minWidth?{minWidth:le(t.minWidth)}:{},d.value]),d=W(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:B,cubicBezierEaseOut:g},self:{space:S,spaceArrow:D,padding:k,fontSize:z,textColor:V,dividerColor:P,color:U,boxShadow:f,borderRadius:$,arrowHeight:C,arrowOffset:R,arrowOffsetVertical:ee}}=a.value;return{"--n-box-shadow":f,"--n-bezier":v,"--n-bezier-ease-in":B,"--n-bezier-ease-out":g,"--n-font-size":z,"--n-text-color":V,"--n-color":U,"--n-divider-color":P,"--n-border-radius":$,"--n-arrow-height":C,"--n-arrow-offset":R,"--n-arrow-offset-vertical":ee,"--n-padding":k,"--n-space":S,"--n-space-arrow":D}});u.setBodyInstance({syncPosition:c}),te(()=>{u.setBodyInstance(null)}),_(N(t,"show"),v=>{t.animated||(v?m.value=!0:m.value=!1)});function c(){var v;(v=h.value)===null||v===void 0||v.syncPosition()}function w(v){t.trigger==="hover"&&u.handleMouseEnter(v)}function p(v){t.trigger==="hover"&&u.handleMouseLeave(v)}function l(v){t.trigger==="hover"&&!y().contains(v.target)&&u.handleMouseMoveOutside(v)}function r(v){(t.trigger==="click"&&!y().contains(v.target)||t.onClickoutside)&&u.handleClickOutside(v)}function y(){return u.getTriggerElement()}q(Ee,s),q(Se,null),q($e,null);function I(){let v;const{internalRenderBodyRef:{value:B}}=u,{value:g}=i;if(B)v=B([`${g}-popover`,t.overlap&&`${g}-popover--overlap`],s,M.value,w,p);else{const{value:S}=u.extraClassRef,{internalTrapFocus:D}=t,k=()=>{var z;return[e.header?x(me,null,x("div",{class:`${g}-popover__header`},e.header()),x("div",{class:`${g}-popover__content`},e)):(z=e.default)===null||z===void 0?void 0:z.call(e),t.showArrow?jt({arrowStyle:t.arrowStyle,clsPrefix:g}):null]};v=x("div",Ye({class:[`${g}-popover`,S.map(z=>`${g}-${z}`),{[`${g}-popover--overlap`]:t.overlap,[`${g}-popover--show-arrow`]:t.showArrow,[`${g}-popover--show-header`]:!!e.header,[`${g}-popover--raw`]:t.raw}],ref:s,style:M.value,onKeydown:u.handleKeydown,onMouseenter:w,onMouseleave:p},n),D?x(Tt,{active:t.show,autoFocus:!0},{default:k}):k())}return t.displayDirective==="show"||t.show?ne(v,b.value):null}return{namespace:o,isMounted:u.isMountedRef,zIndex:u.zIndexRef,followerRef:h,adjustedTo:H(t),followerEnabled:m,renderContentNode:I}},render(){return x(zt,{zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,ref:"followerRef",overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===H.tdkey},{default:()=>this.animated?x(Xe,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{this.followerEnabled=!1}},{default:this.renderContentNode}):this.renderContentNode()})}});const Pt=Object.keys(Le),_t={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Lt(t,e,n){_t[e].forEach(o=>{t.props?t.props=Object.assign({},t.props):t.props={};const i=t.props[o],a=n[o];i?t.props[o]=(...h)=>{i(...h),a(...h)}:t.props[o]=a})}const Vt=Ue("").type,Wt={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,internalExtraClass:{type:Array,default:()=>[]},onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],zIndex:Number,to:H.propTo,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Zt=Object.assign(Object.assign(Object.assign({},se.props),Wt),{internalRenderBody:Function});var Jt=L({name:"Popover",inheritAttrs:!1,props:Zt,__popover__:!0,setup(t){const e=xe(),n=E(null),o=W(()=>t.show),i=E(t.defaultShow),a=nt(o,i),h=G(()=>t.disabled?!1:a.value),u=()=>{if(t.disabled)return!0;const{getDisabled:f}=t;return!!(f==null?void 0:f())},s=()=>u()?!1:a.value,m=ot(t,["arrow","showArrow"]),b=W(()=>t.overlap?!1:m.value);let M=null;const d=E(null),c=E(null),w=G(()=>t.x!==void 0&&t.y!==void 0);function p(f){const{"onUpdate:show":$,onUpdateShow:C,onShow:R,onHide:ee}=t;i.value=f,$&&re($,f),C&&re(C,f),f&&R&&re(R,!0),f&&ee&&re(ee,!1)}function l(){M&&M.syncPosition()}function r(){const{value:f}=d;f&&(window.clearTimeout(f),d.value=null)}function y(){const{value:f}=c;f&&(window.clearTimeout(f),c.value=null)}function I(){const f=u();if(t.trigger==="focus"&&!f){if(s())return;p(!0)}}function v(){const f=u();if(t.trigger==="focus"&&!f){if(!s())return;p(!1)}}function B(){const f=u();if(t.trigger==="hover"&&!f){if(y(),d.value!==null||s())return;const $=()=>{p(!0),d.value=null},{delay:C}=t;C===0?$():d.value=window.setTimeout($,C)}}function g(){const f=u();if(t.trigger==="hover"&&!f){if(r(),c.value!==null||!s())return;const $=()=>{p(!1),c.value=null},{duration:C}=t;C===0?$():c.value=window.setTimeout($,C)}}function S(){g()}function D(f){var $;!s()||(t.trigger==="click"&&(r(),y(),p(!1)),($=t.onClickoutside)===null||$===void 0||$.call(t,f))}function k(){if(t.trigger==="click"&&!u()){r(),y();const f=!s();p(f)}}function z(f){!t.internalTrapFocus||f.code==="Escape"&&(r(),y(),p(!1))}function V(f){i.value=f}function P(){var f;return(f=n.value)===null||f===void 0?void 0:f.targetRef}function U(f){M=f}return q("NPopover",{getTriggerElement:P,handleKeydown:z,handleMouseEnter:B,handleMouseLeave:g,handleClickOutside:D,handleMouseMoveOutside:S,setBodyInstance:U,positionManuallyRef:w,isMountedRef:e,zIndexRef:N(t,"zIndex"),extraClassRef:N(t,"internalExtraClass"),internalRenderBodyRef:N(t,"internalRenderBody")}),{binderInstRef:n,positionManually:w,mergedShowConsideringDisabledProp:h,uncontrolledShow:i,mergedShowArrow:b,getMergedShow:s,setShow:V,handleClick:k,handleMouseEnter:B,handleMouseLeave:g,handleFocus:I,handleBlur:v,syncPosition:l}},render(){var t;const{positionManually:e,$slots:n}=this;let o,i=!1;if(!e&&(n.activator?o=Me(n,"activator"):o=Me(n,"trigger"),o)){o=Ke(o),o=o.type===Vt?x("span",[o]):o;const a={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if((t=o.type)===null||t===void 0?void 0:t.__popover__)i=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[a,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[a];else{const{internalInheritedEventHandlers:h}=this,u=[a,...h],s={onBlur:m=>{u.forEach(b=>{b.onBlur(m)})},onFocus:m=>{u.forEach(b=>{b.onFocus(m)})},onClick:m=>{u.forEach(b=>{b.onClick(m)})},onMouseenter:m=>{u.forEach(b=>{b.onMouseenter(m)})},onMouseleave:m=>{u.forEach(b=>{b.onMouseleave(m)})}};Lt(o,h?"nested":e?"manual":this.trigger,s)}}return x(ft,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const a=this.getMergedShow();return[this.internalTrapFocus&&a?ne(x("div",{style:{position:"fixed",inset:0}}),[[Fe,{enabled:a,zIndex:this.zIndex}]]):null,e?null:x(ht,null,{default:()=>o}),x(Dt,rt(this.$props,Pt,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:a})),n)]}})}});export{Jt as N,ft as V,ht as a,zt as b,Wt as c,Ot as p,jt as r};
