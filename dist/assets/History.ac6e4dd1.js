import{_ as C}from"./index.c4a8f932.js";import{d as W,g as S,c as l,h as x,k as _,l as k,m as o}from"./light.a036d10a.js";import{d as u,l as T,j as U,q as w,s as m,u as B,v as z,x as P,P as H,o as D,y as F}from"./vendor.a9c6e360.js";var M={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};const j=t=>{const{primaryColor:e,textColor2:a,borderColor:s,lineHeight:n,fontSize:r,borderRadiusSmall:h,dividerColor:b,fontWeightStrong:v,textColor1:c,textColor3:p,infoColor:d,warningColor:f,errorColor:y,successColor:g,codeColor:J}=t;return Object.assign(Object.assign({},M),{aTextColor:e,blockquoteTextColor:a,blockquotePrefixColor:s,blockquoteLineHeight:n,blockquoteFontSize:r,codeBorderRadius:h,liTextColor:a,liLineHeight:n,liFontSize:r,hrColor:b,headerFontWeight:v,headerTextColor:c,pTextColor:a,pTextColor1Depth:c,pTextColor2Depth:a,pTextColor3Depth:p,pLineHeight:n,pFontSize:r,headerBarColor:e,headerBarColorPrimary:e,headerBarColorInfo:d,headerBarColorError:y,headerBarColorWarning:f,headerBarColorSuccess:g,textColor:a,textColor1Depth:c,textColor2Depth:a,textColor3Depth:p,textColorPrimary:e,textColorInfo:d,textColorSuccess:g,textColorWarning:f,textColorError:y,codeTextColor:a,codeColor:J,codeBorder:"1px solid #0000"})},$={name:"Typography",common:W,self:j};var L=$,V=S("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[l("&:first-child",{marginTop:0}),x("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[x("align-text",{paddingLeft:0},[l("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),l("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),l("&::before",{backgroundColor:"var(--n-bar-color)"})])]);const O=Object.assign(Object.assign({},k.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean});var i=t=>u({name:`H${t}`,props:O,setup(e){const{mergedClsPrefixRef:a}=_(e),s=k("Typography","H",V,L,e,a);return{mergedClsPrefix:a,cssVars:T(()=>{const{type:n}=e,{common:{cubicBezierEaseInOut:r},self:{headerFontWeight:h,headerTextColor:b,[o("headerPrefixWidth",t)]:v,[o("headerFontSize",t)]:c,[o("headerMargin",t)]:p,[o("headerBarWidth",t)]:d,[o("headerBarColor",n)]:f}}=s.value;return{"--n-bezier":r,"--n-font-size":c,"--n-margin":p,"--n-bar-color":f,"--n-bar-width":d,"--n-font-weight":h,"--n-text-color":b,"--n-prefix-width":v}})}},render(){const{prefix:e,alignText:a,mergedClsPrefix:s,cssVars:n,$slots:r}=this;return U(`h${t}`,{class:[`${s}-h`,`${s}-h${t}`,{[`${s}-h--prefix-bar`]:e,[`${s}-h--align-text`]:a}],style:n},r)}});const q=i("1");i("2");i("3");i("4");i("5");i("6");const E={class:"history"},N={class:"history-content"},I={class:"history-content-title"},R=F("\u201C\u98D3\u98CE\u54C8\u8482\u201D\u7684\u7248\u672C\u5386\u53F2"),A=H('<div class="history-content-sub" data-v-bef7ac98><div class="history-content-sub-title" data-v-bef7ac98><a href="#" title="Special:\u65E5\u5FD7" data-v-bef7ac98>\u67E5\u770B\u8BE5\u9875\u9762\u7684\u65E5\u5FD7</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="\u67E5\u770B\u8BE5\u9875\u9762\u7684\u8FC7\u6EE4\u5668\u65E5\u5FD7" data-v-bef7ac98>\u67E5\u770B\u8FC7\u6EE4\u5668\u65E5\u5FD7</a><span data-v-bef7ac98>\uFF09</span></div></div><div class="history-content-legend" data-v-bef7ac98><p data-v-bef7ac98><span data-v-bef7ac98>\u9009\u62E9\u4E0B\u5217\u4EFB\u4F55\u4E00\u4E2A\u7248\u672C\u7684\u65E5\u671F\u70B9\u51FB\u53EF\u4EE5\u6D4F\u89C8\u3002\u9700\u8981\u66F4\u591A\u5E2E\u52A9\u8BF7\u53C2\u770B</span><a href="#" title="Help:\u9875\u9762\u5386\u53F2" data-v-bef7ac98>Help:\u9875\u9762\u5386\u53F2</a><span data-v-bef7ac98>\u548C</span><a href="#" title="Help:\u7F16\u8F91\u6458\u8981" data-v-bef7ac98>Help:\u7F16\u8F91\u6458\u8981</a>\u3002 </p><div class="history-content-legend-inline" data-v-bef7ac98><ul data-v-bef7ac98><li data-v-bef7ac98><span data-v-bef7ac98>\u5916\u90E8\u5DE5\u5177\uFF1A</span><a rel="nofollow" class="external text" href="#" data-v-bef7ac98>\u4FEE\u8BA2\u5386\u53F2\u7EDF\u8BA1</a></li><li data-v-bef7ac98><a class="external text" href="#" data-v-bef7ac98>\u641C\u7D22\u7F16\u8F91\u5386\u53F2</a></li><li data-v-bef7ac98><a class="external text" href="#" data-v-bef7ac98>\u672C\u6708\u9875\u9762\u6D4F\u89C8\u7EDF\u8BA1</a></li><li data-v-bef7ac98><a class="external text" href="#" data-v-bef7ac98>\u4FEE\u590D\u6B7B\u94FE</a></li></ul></div><p data-v-bef7ac98><span data-v-bef7ac98>\uFF08\u5F53\u524D\uFF09= \u4E0E\u6700\u540E\u4FEE\u8BA2\u7248\u672C\u7684\u5DEE\u522B\uFF0C\uFF08\u5148\u524D\uFF09= \u4E0E\u524D\u4E00\u4E2A\u4FEE\u8BA2\u7248\u672C\u7684\u5DEE\u522B\uFF0C</span><b data-v-bef7ac98>\u5C0F</b><span data-v-bef7ac98>=</span><a href="#" title="Help:\u5C0F\u4FEE\u6539" data-v-bef7ac98>\u5C0F\u4FEE\u6539</a><span data-v-bef7ac98>\uFF0C\u2192 =</span><a href="#" title="Help:\u7AE0\u8282" data-v-bef7ac98>\u7AE0\u8282\u7F16\u8F91</a><span data-v-bef7ac98>\uFF0C\u2190 =</span><a href="#" class="mw-redirect" title="Wikipedia:AES" data-v-bef7ac98>\u81EA\u52A8\u7F16\u8F91\u6458\u8981</a></p></div><div data-v-bef7ac98><span data-v-bef7ac98>\uFF08\u6700\u65B0 |</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>\u6700\u65E9</a><span data-v-bef7ac98>\uFF09 \u67E5\u770B\uFF08\u524D50\u4E2A |</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>\u540E50\u4E2A</a><span data-v-bef7ac98>\uFF09\uFF08</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>20</a><span data-v-bef7ac98>|</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>50</a><span data-v-bef7ac98>|</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>100</a><span data-v-bef7ac98>|</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>250</a><span data-v-bef7ac98>|</span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>500</a><span data-v-bef7ac98>\uFF09</span></div><ul class="history-content-pagehistory" data-v-bef7ac98><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li><li data-v-bef7ac98><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98>\u5F53\u524D</span><span data-v-bef7ac98><a href="#" title="Difference with preceding revision" data-v-bef7ac98>\u5148\u524D</a></span></span><a href="#" title="\u98D3\u98CE\u54C8\u8482" data-v-bef7ac98>2022\u5E741\u670830\u65E5 (\u65E5) 15:39</a>\u200E <span class="history-content-pagehistory-user" data-v-bef7ac98><a href="#" class="history-content-pagehistory-user-link" title="User:Jarodalien" data-v-bef7ac98><bdi data-v-bef7ac98>Jarodalien</bdi></a><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a></span><span data-v-bef7ac98><a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>\u8D21\u732E</a></span></span></span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-diff-bytes" data-v-bef7ac98>30,217\u5B57\u8282</span><span class="history-content-pagehistory-diff-bytes" title="\u66F4\u6539\u540E\u670930,217\u5B57\u8282" data-v-bef7ac98>\u22128</span>\u200E <span class="history-content-pagehistory-separator" data-v-bef7ac98></span><span class="history-content-pagehistory-parentheses" data-v-bef7ac98> \u56DE\u9000\u5230\u7531 <a href="#" title="Special:\u7528\u6237\u8D21\u732E/Jarodalien" data-v-bef7ac98>Jarodalien</a><span data-v-bef7ac98>\uFF08</span><a href="#" title="User talk:Jarodalien" data-v-bef7ac98>\u8BA8\u8BBA</a>\uFF09\u505A\u51FA\u7684\u4FEE\u8BA2\u7248\u672C69918931\uFF1A\u56DB\u4E94\u4F4D\u6570\u8FD8\u52A0\u4EC0\u4E48 </span><span class="history-content-pagehistory-links" data-v-bef7ac98><span data-v-bef7ac98><span data-v-bef7ac98><a href="#" title="\u201C\u64A4\u9500\u201D\u53EF\u4EE5\u6062\u590D\u8BE5\u7F16\u8F91\u5E76\u5728\u9884\u89C8\u6A21\u5F0F\u4E0B\u6253\u5F00\u7F16\u8F91\u8868\u5355\u3002\u5B83\u5141\u8BB8\u5728\u6458\u8981\u4E2D\u52A0\u5165\u539F\u56E0\u3002" data-v-bef7ac98>\u64A4\u9500</a></span></span><span data-v-bef7ac98><a href="#" title="\u53D1\u9001\u611F\u8C22\u901A\u77E5\u7ED9\u8BE5\u7528\u6237" data-v-bef7ac98>\u611F\u8C22</a></span></span><span class="history-content-pagehistory-tag" data-v-bef7ac98><a href="#" title="Special:\u6807\u7B7E" data-v-bef7ac98>\u6807\u7B7E</a>\uFF1A <span class="history-content-pagehistory-tag-marker" data-v-bef7ac98><a href="#" title="Wikipedia:TW" data-v-bef7ac98>TW</a></span><span class="history-content-pagehistory-tag-marker" data-v-bef7ac98>\u64A4\u9500</span></span></li></ul>',4),K=u({name:"PageHistory"}),G=Object.assign(K,{setup(t){return(e,a)=>(D(),w("div",E,[m("div",N,[m("div",I,[B(P(q),null,{default:z(()=>[R]),_:1})]),A])]))}});var Z=C(G,[["__scopeId","data-v-bef7ac98"]]);export{Z as default};
