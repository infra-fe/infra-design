(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{3216:function(t,u,s){t.exports={basic:s(3644),custom:s(3645)}},3644:function(t,u,s){t.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/back-top/demo/basic.md",id:"components-back-top-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { BackTop } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>BackTop <span class="token operator">/</span><span class="token operator">></span>
    Scroll down <span class="token keyword">to</span> see the bottom<span class="token operator">-</span>right
    <span class="token operator">&lt;</span>strong className<span class="token operator">=</span><span class="token string">"site-back-top-basic"</span><span class="token operator">></span> gray <span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span>
    button<span class="token punctuation">.</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackTop</span></span> <span class="token punctuation">/></span></span>
    Scroll down to see the bottom<span class="token operator">-</span>right
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-back-top-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> gray <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
    button<span class="token punctuation">.</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackTop</span></span> <span class="token punctuation">/></span></span>
    Scroll down to see the bottom<span class="token operator">-</span>right
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-back-top-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> gray <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
    button<span class="token punctuation">.</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var o=s(0),i=s(52),n=c(s(0)),e=s(11);function c(a){return a&&a.__esModule?a:{default:a}}var l=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(e.BackTop,null),"Scroll down to see the bottom-right",n.default.createElement("strong",{className:"site-back-top-basic"}," gray "),"button.")},k=l;return o.createElement(k)},style:`.site-back-top-basic {
  color: rgba(64, 64, 64, 0.6);
}
[data-theme="dark"] .site-back-top-basic {
  color: rgba(255,255,255,.45);
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-back-top-basic</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">64</span>, <span class="token number">64</span>, <span class="token number">64</span>, <span class="token number">0.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3645:function(t,u,s){t.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56DE\u5230\u9876\u90E8\u6309\u94AE\u7684\u6837\u5F0F\uFF0C\u9650\u5236\u5BBD\u9AD8\uFF1A",["code","40px * 40px"],"\u3002"]],"en-US":[["p","You can customize the style of the button, just note the size limit: no more than ",["code","40px * 40px"],"."]]},meta:{order:1,iframe:400,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6837\u5F0F","en-US":"Custom style"},filename:"components/back-top/demo/custom.md",id:"components-back-top-demo-custom"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { BackTop } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> style<span class="token punctuation">:</span> React<span class="token punctuation">.</span>CSSProperties <span class="token operator">=</span> {
  height<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  width<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  lineHeight<span class="token punctuation">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span>
  borderRadius<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  backgroundColor<span class="token punctuation">:</span> <span class="token string">'#1088e9'</span><span class="token punctuation">,</span>
  color<span class="token punctuation">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  fontSize<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">'600vh'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token number">8</span> }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Scroll <span class="token keyword">to</span> bottom<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>BackTop<span class="token operator">></span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{style}<span class="token operator">></span>UP<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BackTop<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> style<span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
  height<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  lineHeight<span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span>
  borderRadius<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  backgroundColor<span class="token operator">:</span> <span class="token string">'#1088e9'</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  textAlign<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'600vh'</span><span class="token punctuation">,</span> padding<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackTop</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">UP</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BackTop</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> BackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#1088e9'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'600vh'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Scroll to bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackTop</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token constant">UP</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BackTop</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var o=s(0),i=s(52),n=c(s(0)),e=s(11);function c(p){return p&&p.__esModule?p:{default:p}}var l={height:40,width:40,lineHeight:"40px",borderRadius:4,backgroundColor:"#1088e9",color:"#fff",textAlign:"center",fontSize:14},k=function(){return n.default.createElement("div",{style:{height:"600vh",padding:8}},n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement("div",null,"Scroll to bottom"),n.default.createElement(e.BackTop,null,n.default.createElement("div",{style:l},"UP")))},a=k;return o.createElement(a)},src:"/demo-0.09098804234002689.html"}}}]);
