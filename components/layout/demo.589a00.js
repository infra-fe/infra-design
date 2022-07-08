(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{3293:function(v,N,p){v.exports={basic:p(3889),"custom-trigger-debug":p(3890),"custom-trigger":p(3891),"fixed-sider":p(3892),fixed:p(3893),responsive:p(3894),side:p(3895),"top-side-2":p(3896),"top-side":p(3897),top:p(3898)}},3889:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u5178\u578B\u7684\u9875\u9762\u5E03\u5C40\u3002"]],"en-US":[["p","Classic page layouts."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C\u7ED3\u6784","en-US":"Basic Structure"},filename:"components/layout/demo/basic.md",id:"components-layout-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Layout } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header<span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
      <span class="token operator">&lt;</span>Content<span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer<span class="token operator">></span>Footer<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>

    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header<span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
        <span class="token operator">&lt;</span>Sider<span class="token operator">></span>Sider<span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content<span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer<span class="token operator">></span>Footer<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>

    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header<span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content<span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
        <span class="token operator">&lt;</span>Sider<span class="token operator">></span>Sider<span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer<span class="token operator">></span>Footer<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>

    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider<span class="token operator">></span>Sider<span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
        <span class="token operator">&lt;</span>Header<span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content<span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
        <span class="token operator">&lt;</span>Footer<span class="token operator">></span>Footer<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>Sider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(12),s=n(p(0));function n(y){return y&&y.__esModule?y:{default:y}}var e=o.Layout.Header,d=o.Layout.Footer,f=o.Layout.Sider,b=o.Layout.Content,x=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(o.Layout,null,s.default.createElement(e,null,"Header"),s.default.createElement(b,null,"Content"),s.default.createElement(d,null,"Footer")),s.default.createElement(o.Layout,null,s.default.createElement(e,null,"Header"),s.default.createElement(o.Layout,null,s.default.createElement(f,null,"Sider"),s.default.createElement(b,null,"Content")),s.default.createElement(d,null,"Footer")),s.default.createElement(o.Layout,null,s.default.createElement(e,null,"Header"),s.default.createElement(o.Layout,null,s.default.createElement(b,null,"Content"),s.default.createElement(f,null,"Sider")),s.default.createElement(d,null,"Footer")),s.default.createElement(o.Layout,null,s.default.createElement(f,null,"Sider"),s.default.createElement(o.Layout,null,s.default.createElement(e,null,"Header"),s.default.createElement(b,null,"Content"),s.default.createElement(d,null,"Footer"))))},m=x;return C.createElement(m)},style:`
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme="dark"] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
`}},3890:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u4FEE\u6539\u5185\u5BB9\u524D\uFF0C\u8BF7\u5C1D\u8BD5\u6B64 Demo \u67E5\u770B\u6837\u5F0F\u662F\u5426\u6296\u52A8\u3002"],["pre",{lang:"tsx",highlighted:`import {
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
} from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>PieChartOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Option 1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>DesktopOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Option 2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'User'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Bill'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>TeamOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Team'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Team 1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'7'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Team 2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'9'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>FileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider trigger<span class="token operator">=</span>{<span class="token keyword">null</span>} collapsible collapsed<span class="token operator">=</span>{collapsed}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Menu
          theme<span class="token operator">=</span><span class="token string">"dark"</span>
          mode<span class="token operator">=</span><span class="token string">"inline"</span>
          defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span>}
          defaultOpenKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span>}
          items<span class="token operator">=</span>{items}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
        <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }}<span class="token operator">></span>
          {React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token punctuation">:</span> MenuFoldOutlined<span class="token punctuation">,</span> {
            className<span class="token punctuation">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>!collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          }<span class="token punctuation">)</span>}
        <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content
          className<span class="token operator">=</span><span class="token string">"site-layout-background"</span>
          style<span class="token operator">=</span>{{
            margin<span class="token punctuation">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            minHeight<span class="token punctuation">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          }}
        <span class="token operator">></span>
          Content
        <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`},["code",`import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from 'infra-design-icons';
import type { MenuProps } from 'infrad';
import { Layout, Menu } from 'infrad';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2',
  },
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'User',
    children: [
      {
        key: '3',
        label: 'Tom',
      },
      {
        key: '4',
        label: 'Bill',
      },
      {
        key: '5',
        label: 'Alex',
      },
    ],
  },
  {
    key: 'sub2',
    icon: <TeamOutlined />,
    label: 'Team',
    children: [
      {
        key: '6',
        label: 'Team 1',
      },
      {
        key: '7',
        label: 'Team 2',
      },
    ],
  },
  {
    key: '9',
    icon: <FileOutlined />,
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;`]]],"en-US":[["h2","zh-CN"],["p","\u4FEE\u6539\u5185\u5BB9\u524D\uFF0C\u8BF7\u5C1D\u8BD5\u6B64 Demo \u67E5\u770B\u6837\u5F0F\u662F\u5426\u6296\u52A8\u3002"]]},meta:{order:99,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668 Debug","en-US":"Custom trigger debug"},debug:!0,filename:"components/layout/demo/custom-trigger-debug.md",id:"components-layout-demo-custom-trigger-debug"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
} from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>PieChartOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Option 1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>DesktopOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Option 2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'User'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Bill'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>TeamOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Team'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Team 1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'7'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Team 2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'9'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>FileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider trigger<span class="token operator">=</span>{<span class="token keyword">null</span>} collapsible collapsed<span class="token operator">=</span>{collapsed}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Menu
          theme<span class="token operator">=</span><span class="token string">"dark"</span>
          mode<span class="token operator">=</span><span class="token string">"inline"</span>
          defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span>}
          defaultOpenKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span>}
          items<span class="token operator">=</span>{items}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
        <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }}<span class="token operator">></span>
          {React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token punctuation">:</span> MenuFoldOutlined<span class="token punctuation">,</span> {
            className<span class="token punctuation">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>!collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          }<span class="token punctuation">)</span>}
        <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content
          className<span class="token operator">=</span><span class="token string">"site-layout-background"</span>
          style<span class="token operator">=</span>{{
            margin<span class="token punctuation">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            minHeight<span class="token punctuation">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          }}
        <span class="token operator">></span>
          Content
        <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PieChartOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Option 1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DesktopOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Option 2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'User'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Bill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TeamOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Team'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Team 1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'7'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Team 2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'9'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token operator">:</span> MenuFoldOutlined<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            className<span class="token operator">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span><span class="token operator">!</span>collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            margin<span class="token operator">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            minHeight<span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PieChartOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Option 1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DesktopOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Option 2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'User'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Bill'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'5'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TeamOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Team'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Team 1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'7'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Team 2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'9'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token operator">:</span> MenuFoldOutlined<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span><span class="token operator">!</span>collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55);function o(t){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},o(t)}var s=p(26),n=p(12),e=f(p(0));function d(t){if(typeof WeakMap!="function")return null;var c=new WeakMap,a=new WeakMap;return(d=function(k){return k?a:c})(t)}function f(t,c){if(!c&&t&&t.__esModule)return t;if(t===null||o(t)!=="object"&&typeof t!="function")return{default:t};var a=d(c);if(a&&a.has(t))return a.get(t);var l={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)){var w=k?Object.getOwnPropertyDescriptor(t,r):null;w&&(w.get||w.set)?Object.defineProperty(l,r,w):l[r]=t[r]}return l.default=t,a&&a.set(t,l),l}function b(t,c){return i(t)||h(t,c)||m(t,c)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(t,c){if(!!t){if(typeof t=="string")return y(t,c);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(t,c)}}function y(t,c){(c==null||c>t.length)&&(c=t.length);for(var a=0,l=new Array(c);a<c;a++)l[a]=t[a];return l}function h(t,c){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var l=[],k=!0,r=!1,w,S;try{for(a=a.call(t);!(k=(w=a.next()).done)&&(l.push(w.value),!(c&&l.length===c));k=!0);}catch(E){r=!0,S=E}finally{try{!k&&a.return!=null&&a.return()}finally{if(r)throw S}}return l}}function i(t){if(Array.isArray(t))return t}var g=n.Layout.Header,L=n.Layout.Sider,I=n.Layout.Content,B=[{key:"1",icon:e.default.createElement(s.PieChartOutlined,null),label:"Option 1"},{key:"2",icon:e.default.createElement(s.DesktopOutlined,null),label:"Option 2"},{key:"sub1",icon:e.default.createElement(s.UserOutlined,null),label:"User",children:[{key:"3",label:"Tom"},{key:"4",label:"Bill"},{key:"5",label:"Alex"}]},{key:"sub2",icon:e.default.createElement(s.TeamOutlined,null),label:"Team",children:[{key:"6",label:"Team 1"},{key:"7",label:"Team 2"}]},{key:"9",icon:e.default.createElement(s.FileOutlined,null)}],O=function(){var c=(0,e.useState)(!0),a=b(c,2),l=a[0],k=a[1];return e.default.createElement(n.Layout,null,e.default.createElement(L,{trigger:null,collapsible:!0,collapsed:l},e.default.createElement("div",{className:"logo"}),e.default.createElement(n.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["3"],defaultOpenKeys:["sub1"],items:B})),e.default.createElement(n.Layout,null,e.default.createElement(g,{className:"site-layout-background",style:{padding:0}},e.default.createElement(l?s.MenuUnfoldOutlined:s.MenuFoldOutlined,{className:"trigger",onClick:function(){return k(!l)}})),e.default.createElement(I,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280}},"Content")))},u=O;return C.createElement(u)},style:`#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #2673dd;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-custom-trigger</span> <span class="token class">.trigger</span> </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">18</span>px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">64</span>px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> color <span class="token number">0.3</span>s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token id">#components-layout-demo-custom-trigger</span> <span class="token class">.trigger</span><span class="token pseudo-class">:hover</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#2673dd</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3891:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",["code","trigger={null}"]," \u6765\u9690\u85CF\u9ED8\u8BA4\u8BBE\u5B9A\u3002"]],"en-US":[["p","If you want to use a customized trigger, you can hide the default one by setting ",["code","trigger={null}"],"."]]},meta:{order:5,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668","en-US":"Custom trigger"},filename:"components/layout/demo/custom-trigger.md",id:"components-layout-demo-custom-trigger"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
} from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import { Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider trigger<span class="token operator">=</span>{<span class="token keyword">null</span>} collapsible collapsed<span class="token operator">=</span>{collapsed}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Menu
          theme<span class="token operator">=</span><span class="token string">"dark"</span>
          mode<span class="token operator">=</span><span class="token string">"inline"</span>
          defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>}
          items<span class="token operator">=</span>{<span class="token punctuation">[</span>
            {
              key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
              icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'nav 1'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
              icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>VideoCameraOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'nav 2'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
            {
              key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
              icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UploadOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string">'nav 3'</span><span class="token punctuation">,</span>
            }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span>}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout className<span class="token operator">=</span><span class="token string">"site-layout"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }}<span class="token operator">></span>
          {React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token punctuation">:</span> MenuFoldOutlined<span class="token punctuation">,</span> {
            className<span class="token punctuation">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>!collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          }<span class="token punctuation">)</span>}
        <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content
          className<span class="token operator">=</span><span class="token string">"site-layout-background"</span>
          style<span class="token operator">=</span>{{
            margin<span class="token punctuation">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            minHeight<span class="token punctuation">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          }}
        <span class="token operator">></span>
          Content
        <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
              icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'nav 1'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
              icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">VideoCameraOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'nav 2'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
              icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UploadOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              label<span class="token operator">:</span> <span class="token string">'nav 3'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token operator">:</span> MenuFoldOutlined<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            className<span class="token operator">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span><span class="token operator">!</span>collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            margin<span class="token operator">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            minHeight<span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  MenuFoldOutlined<span class="token punctuation">,</span>
  MenuUnfoldOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Sider<span class="token punctuation">,</span> Content <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'nav 1'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">VideoCameraOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'nav 2'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UploadOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'nav 3'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>collapsed <span class="token operator">?</span> MenuUnfoldOutlined <span class="token operator">:</span> MenuFoldOutlined<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'trigger'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span><span class="token operator">!</span>collapsed<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'24px 16px'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55);function o(u){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(u)}var s=p(26),n=p(12),e=f(p(0));function d(u){if(typeof WeakMap!="function")return null;var t=new WeakMap,c=new WeakMap;return(d=function(l){return l?c:t})(u)}function f(u,t){if(!t&&u&&u.__esModule)return u;if(u===null||o(u)!=="object"&&typeof u!="function")return{default:u};var c=d(t);if(c&&c.has(u))return c.get(u);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in u)if(k!=="default"&&Object.prototype.hasOwnProperty.call(u,k)){var r=l?Object.getOwnPropertyDescriptor(u,k):null;r&&(r.get||r.set)?Object.defineProperty(a,k,r):a[k]=u[k]}return a.default=u,c&&c.set(u,a),a}function b(u,t){return i(u)||h(u,t)||m(u,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(u,t){if(!!u){if(typeof u=="string")return y(u,t);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return y(u,t)}}function y(u,t){(t==null||t>u.length)&&(t=u.length);for(var c=0,a=new Array(t);c<t;c++)a[c]=u[c];return a}function h(u,t){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var a=[],l=!0,k=!1,r,w;try{for(c=c.call(u);!(l=(r=c.next()).done)&&(a.push(r.value),!(t&&a.length===t));l=!0);}catch(S){k=!0,w=S}finally{try{!l&&c.return!=null&&c.return()}finally{if(k)throw w}}return a}}function i(u){if(Array.isArray(u))return u}var g=n.Layout.Header,L=n.Layout.Sider,I=n.Layout.Content,B=function(){var t=(0,e.useState)(!1),c=b(t,2),a=c[0],l=c[1];return e.default.createElement(n.Layout,null,e.default.createElement(L,{trigger:null,collapsible:!0,collapsed:a},e.default.createElement("div",{className:"logo"}),e.default.createElement(n.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],items:[{key:"1",icon:e.default.createElement(s.UserOutlined,null),label:"nav 1"},{key:"2",icon:e.default.createElement(s.VideoCameraOutlined,null),label:"nav 2"},{key:"3",icon:e.default.createElement(s.UploadOutlined,null),label:"nav 3"}]})),e.default.createElement(n.Layout,{className:"site-layout"},e.default.createElement(g,{className:"site-layout-background",style:{padding:0}},e.default.createElement(a?s.MenuUnfoldOutlined:s.MenuFoldOutlined,{className:"trigger",onClick:function(){return l(!a)}})),e.default.createElement(I,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280}},"Content")))},O=B;return C.createElement(O)},style:`#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #2673dd;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-custom-trigger</span> <span class="token class">.trigger</span> </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">18</span>px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">64</span>px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> color <span class="token number">0.3</span>s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token id">#components-layout-demo-custom-trigger</span> <span class="token class">.trigger</span><span class="token pseudo-class">:hover</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#2673dd</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token id">#components-layout-demo-custom-trigger</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">32</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout</span> <span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3892:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u5F53\u5185\u5BB9\u8F83\u957F\u65F6\uFF0C\u4F7F\u7528\u56FA\u5B9A\u4FA7\u8FB9\u680F\u53EF\u4EE5\u63D0\u4F9B\u66F4\u597D\u7684\u4F53\u9A8C\u3002"]],"en-US":[["p","When dealing with long content, a fixed sider can provide a better user experience."]]},meta:{order:8,iframe:360,title:{"zh-CN":"\u56FA\u5B9A\u4FA7\u8FB9\u680F","en-US":"Fixed Sider"},filename:"components/layout/demo/fixed-sider.md",id:"components-layout-demo-fixed-sider"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  AppstoreOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
} from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  AppstoreOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
  key<span class="token punctuation">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  icon<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
  label<span class="token punctuation">:</span> \`nav \${index <span class="token operator">+</span> <span class="token number">1</span>}\`<span class="token punctuation">,</span>
}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout hasSider<span class="token operator">></span>
    <span class="token operator">&lt;</span>Sider
      style<span class="token operator">=</span>{{
        overflow<span class="token punctuation">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token string">'100vh'</span><span class="token punctuation">,</span>
        position<span class="token punctuation">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span>
        left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        bottom<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      }}
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu theme<span class="token operator">=</span><span class="token string">"dark"</span> mode<span class="token operator">=</span><span class="token string">"inline"</span> defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span>} items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
    <span class="token operator">&lt;</span>Layout className<span class="token operator">=</span><span class="token string">"site-layout"</span> style<span class="token operator">=</span>{{ marginLeft<span class="token punctuation">:</span> <span class="token number">200</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'24px 16px 0'</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">'initial'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          Really
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          long
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
          content
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  AppstoreOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  AppstoreOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  icon<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
  label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">hasSider</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        overflow<span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token string">'100vh'</span><span class="token punctuation">,</span>
        position<span class="token operator">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'24px 16px 0'</span><span class="token punctuation">,</span> overflow<span class="token operator">:</span> <span class="token string">'initial'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          Really
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          long
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  AppstoreOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  UserOutlined<span class="token punctuation">,</span>
  VideoCameraOutlined<span class="token punctuation">,</span>
  UploadOutlined<span class="token punctuation">,</span>
  BarChartOutlined<span class="token punctuation">,</span>
  CloudOutlined<span class="token punctuation">,</span>
  AppstoreOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  ShopOutlined<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">icon<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">hasSider</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100vh'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'24px 16px 0'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'initial'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          Really
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          long
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token operator">...</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(26),s=p(12),n=e(p(0));function e(i){return i&&i.__esModule?i:{default:i}}var d=s.Layout.Header,f=s.Layout.Content,b=s.Layout.Footer,x=s.Layout.Sider,m=[o.UserOutlined,o.VideoCameraOutlined,o.UploadOutlined,o.BarChartOutlined,o.CloudOutlined,o.AppstoreOutlined,o.TeamOutlined,o.ShopOutlined].map(function(i,g){return{key:String(g+1),icon:n.default.createElement(i),label:"nav ".concat(g+1)}}),y=function(){return n.default.createElement(s.Layout,{hasSider:!0},n.default.createElement(x,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0,top:0,bottom:0}},n.default.createElement("div",{className:"logo"}),n.default.createElement(s.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:m})),n.default.createElement(s.Layout,{className:"site-layout",style:{marginLeft:200}},n.default.createElement(d,{className:"site-layout-background",style:{padding:0}}),n.default.createElement(f,{style:{margin:"24px 16px 0",overflow:"initial"}},n.default.createElement("div",{className:"site-layout-background",style:{padding:24,textAlign:"center"}},"...",n.default.createElement("br",null),"Really",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"long",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"...",n.default.createElement("br",null),"content")),n.default.createElement(b,{style:{textAlign:"center"}},"Infra Design \xA92018 Created by Ant UED")))},h=y;return C.createElement(h)},style:`#components-layout-demo-fixed-sider .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}
.site-layout .site-layout-background {
  background: #fff;
}
  [data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
  }
`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-fixed-sider</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">32</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.site-layout</span> <span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,src:"/demo-0.6610723550583033.html"}},3893:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u4E00\u822C\u7528\u4E8E\u56FA\u5B9A\u9876\u90E8\u5BFC\u822A\uFF0C\u65B9\u4FBF\u9875\u9762\u5207\u6362\u3002"]],"en-US":[["p","Fixed Header is generally used to fix the top navigation to facilitate page switching."]]},meta:{order:7,iframe:360,title:{"zh-CN":"\u56FA\u5B9A\u5934\u90E8","en-US":"Fixed Header"},filename:"components/layout/demo/fixed.md",id:"components-layout-demo-fixed"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span>Header style<span class="token operator">=</span>{{ position<span class="token punctuation">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span> zIndex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu
        theme<span class="token operator">=</span><span class="token string">"dark"</span>
        mode<span class="token operator">=</span><span class="token string">"horizontal"</span>
        defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span>}
        items<span class="token operator">=</span>{new <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
          key<span class="token punctuation">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> \`nav \${index <span class="token operator">+</span> <span class="token number">1</span>}\`<span class="token punctuation">,</span>
        }<span class="token punctuation">)</span><span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
    <span class="token operator">&lt;</span>Content className<span class="token operator">=</span><span class="token string">"site-layout"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 50px'</span><span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">64</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Breadcrumb style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'16px 0'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>List<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">380</span> }}<span class="token operator">></span>
        Content
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
    <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token operator">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          key<span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 50px'</span><span class="token punctuation">,</span> marginTop<span class="token operator">:</span> <span class="token number">64</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token operator">:</span> <span class="token number">380</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Content
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'fixed'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 50px'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">64</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'16px 0'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
          <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">380</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Content
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(12),s=n(p(0));function n(m){return m&&m.__esModule?m:{default:m}}var e=o.Layout.Header,d=o.Layout.Content,f=o.Layout.Footer,b=function(){return s.default.createElement(o.Layout,null,s.default.createElement(e,{style:{position:"fixed",zIndex:1,width:"100%"}},s.default.createElement("div",{className:"logo"}),s.default.createElement(o.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:new Array(3).fill(null).map(function(y,h){return{key:String(h+1),label:"nav ".concat(h+1)}})})),s.default.createElement(d,{className:"site-layout",style:{padding:"0 50px",marginTop:64}},s.default.createElement(o.Breadcrumb,{style:{margin:"16px 0"}},s.default.createElement(o.Breadcrumb.Item,null,"Home"),s.default.createElement(o.Breadcrumb.Item,null,"List"),s.default.createElement(o.Breadcrumb.Item,null,"App")),s.default.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:380}},"Content")),s.default.createElement(f,{style:{textAlign:"center"}},"Infra Design \xA92018 Created by Ant UED"))},x=b;return C.createElement(x)},style:`#components-layout-demo-fixed .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-fixed</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">31</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">16</span>px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.site-layout</span> <span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,src:"/demo-0.546794257598004.html"}},3894:function(v,N,p){v.exports={content:{"zh-CN":[["p","Layout.Sider \u652F\u6301\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002"],["blockquote",["p","\u8BF4\u660E\uFF1A\u914D\u7F6E ",["code","breakpoint"]," \u5C5E\u6027\u5373\u751F\u6548\uFF0C\u89C6\u7A97\u5BBD\u5EA6\u5C0F\u4E8E ",["code","breakpoint"]," \u65F6 Sider \u7F29\u5C0F\u4E3A ",["code","collapsedWidth"]," \u5BBD\u5EA6\uFF0C\u82E5\u5C06 ",["code","collapsedWidth"]," \u8BBE\u7F6E\u4E3A 0\uFF0C\u4F1A\u51FA\u73B0\u7279\u6B8A trigger\u3002"]]],"en-US":[["p","Layout.Sider supports responsive layout."],["blockquote",["p","Note: You can get a responsive layout by setting ",["code","breakpoint"],", the Sider will collapse to the width of ",["code","collapsedWidth"]," when window width is below the ",["code","breakpoint"],". And a special trigger will appear if the ",["code","collapsedWidth"]," is set to 0."]]]},meta:{order:6,title:{"zh-CN":"\u54CD\u5E94\u5F0F\u5E03\u5C40","en-US":"Responsive"},filename:"components/layout/demo/responsive.md",id:"components-layout-demo-responsive"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import { Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span>Sider
      breakpoint<span class="token operator">=</span><span class="token string">"lg"</span>
      collapsedWidth<span class="token operator">=</span><span class="token string">"0"</span>
      onBreakpoint<span class="token operator">=</span>{broken <span class="token operator">=</span><span class="token operator">></span> {
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>broken<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }}
      onCollapse<span class="token operator">=</span>{<span class="token punctuation">(</span>collapsed<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>collapsed<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }}
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu
        theme<span class="token operator">=</span><span class="token string">"dark"</span>
        mode<span class="token operator">=</span><span class="token string">"inline"</span>
        defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span>}
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined<span class="token punctuation">,</span> UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
            key<span class="token punctuation">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> \`nav \${index <span class="token operator">+</span> <span class="token number">1</span>}\`<span class="token punctuation">,</span>
          }<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-sub-header-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'24px 16px 0'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">360</span> }}<span class="token operator">></span>
          content
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span>
      <span class="token attr-name">breakpoint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span>
      <span class="token attr-name">collapsedWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">onBreakpoint</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>broken <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>broken<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onCollapse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>collapsed<span class="token punctuation">,</span> type<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>collapsed<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined<span class="token punctuation">,</span> UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-sub-header-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'24px 16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token operator">:</span> <span class="token number">360</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span>
      <span class="token attr-name">breakpoint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span>
      <span class="token attr-name">collapsedWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
      <span class="token attr-name">onBreakpoint</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">broken</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>broken<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onCollapse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">collapsed<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>collapsed<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
        <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span>
        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> VideoCameraOutlined<span class="token punctuation">,</span> UploadOutlined<span class="token punctuation">,</span> UserOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">icon<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-sub-header-background<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'24px 16px 0'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(26),s=p(12),n=e(p(0));function e(h){return h&&h.__esModule?h:{default:h}}var d=s.Layout.Header,f=s.Layout.Content,b=s.Layout.Footer,x=s.Layout.Sider,m=function(){return n.default.createElement(s.Layout,null,n.default.createElement(x,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(g){console.log(g)},onCollapse:function(g,L){console.log(g,L)}},n.default.createElement("div",{className:"logo"}),n.default.createElement(s.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"],items:[o.UserOutlined,o.VideoCameraOutlined,o.UploadOutlined,o.UserOutlined].map(function(i,g){return{key:String(g+1),icon:n.default.createElement(i),label:"nav ".concat(g+1)}})})),n.default.createElement(s.Layout,null,n.default.createElement(d,{className:"site-layout-sub-header-background",style:{padding:0}}),n.default.createElement(f,{style:{margin:"24px 16px 0"}},n.default.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},"content")),n.default.createElement(b,{style:{textAlign:"center"}},"Infra Design \xA92018 Created by Ant UED")))},y=m;return C.createElement(y)},style:`#components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
  [data-theme="dark"] .site-layout-sub-header-background {
    background: #141414;
  }
`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-responsive</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">32</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout-sub-header-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3895:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u4FA7\u8FB9\u4E24\u5217\u5F0F\u5E03\u5C40\u3002\u9875\u9762\u6A2A\u5411\u7A7A\u95F4\u6709\u9650\u65F6\uFF0C\u4FA7\u8FB9\u5BFC\u822A\u53EF\u6536\u8D77\u3002"],["p","\u4FA7\u8FB9\u5BFC\u822A\u5728\u9875\u9762\u5E03\u5C40\u4E0A\u91C7\u7528\u7684\u662F\u5DE6\u53F3\u7684\u7ED3\u6784\uFF0C\u4E00\u822C\u4E3B\u5BFC\u822A\u653E\u7F6E\u4E8E\u9875\u9762\u7684\u5DE6\u4FA7\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u8F85\u52A9\u83DC\u5355\u653E\u7F6E\u4E8E\u5DE5\u4F5C\u533A\u9876\u90E8\u3002\u5185\u5BB9\u6839\u636E\u6D4F\u89C8\u5668\u7EC8\u7AEF\u8FDB\u884C\u81EA\u9002\u5E94\uFF0C\u80FD\u63D0\u9AD8\u6A2A\u5411\u7A7A\u95F4\u7684\u4F7F\u7528\u7387\uFF0C\u4F46\u662F\u6574\u4E2A\u9875\u9762\u6392\u7248\u4E0D\u7A33\u5B9A\u3002\u4FA7\u8FB9\u5BFC\u822A\u7684\u6A21\u5F0F\u5C42\u7EA7\u6269\u5C55\u6027\u5F3A\uFF0C\u4E00\u3001\u4E8C\u3001\u4E09\u7EA7\u5BFC\u822A\u9879\u76EE\u53EF\u4EE5\u66F4\u4E3A\u987A\u7545\u4E14\u5177\u5173\u8054\u6027\u7684\u88AB\u5C55\u793A\uFF0C\u540C\u65F6\u4FA7\u8FB9\u5BFC\u822A\u53EF\u4EE5\u56FA\u5B9A\uFF0C\u4F7F\u5F97\u7528\u6237\u5728\u64CD\u4F5C\u548C\u6D4F\u89C8\u4E2D\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9A\u4F4D\u548C\u5207\u6362\u5F53\u524D\u4F4D\u7F6E\uFF0C\u6709\u5F88\u9AD8\u7684\u64CD\u4F5C\u6548\u7387\u3002\u4F46\u8FD9\u7C7B\u5BFC\u822A\u6A2A\u5411\u9875\u9762\u5185\u5BB9\u7684\u7A7A\u95F4\u4F1A\u88AB\u727A\u7272\u4E00\u90E8\u5206\u3002"],["blockquote",["p","\u{1F6CE}\uFE0F \u60F3\u8981 3 \u5206\u949F\u5B9E\u73B0\uFF1F\u8BD5\u8BD5 ",["a",{title:null,href:"https://procomponents.ant.design/components/layout"},"ProLayout"],"\uFF01"]]],"en-US":[["p","Two-columns layout. The sider menu can be collapsed when horizontal space is limited."],["p","Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable."],["p","The level of the aside navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents."]]},meta:{order:4,iframe:360,title:{"zh-CN":"\u4FA7\u8FB9\u5E03\u5C40","en-US":"Sider"},filename:"components/layout/demo/side.md",id:"components-layout-demo-side"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
} from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

function <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> MenuItem {
  return {
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
  } as MenuItem<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>PieChartOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>DesktopOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'User'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Bill'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Alex'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>TeamOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 1'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 2'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Files'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>FileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout style<span class="token operator">=</span>{{ minHeight<span class="token punctuation">:</span> <span class="token string">'100vh'</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider collapsible collapsed<span class="token operator">=</span>{collapsed} onCollapse<span class="token operator">=</span>{value <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Menu theme<span class="token operator">=</span><span class="token string">"dark"</span> defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>} mode<span class="token operator">=</span><span class="token string">"inline"</span> items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout className<span class="token operator">=</span><span class="token string">"site-layout"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">0</span> }} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'0 16px'</span> }}<span class="token operator">></span>
          <span class="token operator">&lt;</span>Breadcrumb style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'16px 0'</span> }}<span class="token operator">></span>
            <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>User<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
            <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>Bill<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">360</span> }}<span class="token operator">></span>
            Bill is a cat<span class="token punctuation">.</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
        <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Ant Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> MenuItem <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> MenuItem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PieChartOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DesktopOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'User'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Bill'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Alex'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TeamOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 1'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 2'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Files'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> minHeight<span class="token operator">:</span> <span class="token string">'100vh'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span> <span class="token attr-name">onCollapse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'0 16px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>User<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Bill<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> minHeight<span class="token operator">:</span> <span class="token number">360</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Bill is a cat<span class="token punctuation">.</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DesktopOutlined<span class="token punctuation">,</span>
  FileOutlined<span class="token punctuation">,</span>
  PieChartOutlined<span class="token punctuation">,</span>
  TeamOutlined<span class="token punctuation">,</span>
  UserOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">label<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PieChartOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DesktopOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'User'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Bill'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Alex'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TeamOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 1'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Team 2'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Files'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>collapsed<span class="token punctuation">,</span> setCollapsed<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token string">'100vh'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">collapsible</span> <span class="token attr-name">collapsed</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>collapsed<span class="token punctuation">}</span></span> <span class="token attr-name">onCollapse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCollapsed</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'0 16px'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'16px 0'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>User<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Bill<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
              <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span>
            Bill is a cat<span class="token punctuation">.</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Ant Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55);function o(a){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},o(a)}var s=p(26),n=p(12),e=f(p(0));function d(a){if(typeof WeakMap!="function")return null;var l=new WeakMap,k=new WeakMap;return(d=function(w){return w?k:l})(a)}function f(a,l){if(!l&&a&&a.__esModule)return a;if(a===null||o(a)!=="object"&&typeof a!="function")return{default:a};var k=d(l);if(k&&k.has(a))return k.get(a);var r={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var E=w?Object.getOwnPropertyDescriptor(a,S):null;E&&(E.get||E.set)?Object.defineProperty(r,S,E):r[S]=a[S]}return r.default=a,k&&k.set(a,r),r}function b(a,l){return i(a)||h(a,l)||m(a,l)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(a,l){if(!!a){if(typeof a=="string")return y(a,l);var k=Object.prototype.toString.call(a).slice(8,-1);if(k==="Object"&&a.constructor&&(k=a.constructor.name),k==="Map"||k==="Set")return Array.from(a);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return y(a,l)}}function y(a,l){(l==null||l>a.length)&&(l=a.length);for(var k=0,r=new Array(l);k<l;k++)r[k]=a[k];return r}function h(a,l){var k=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(k!=null){var r=[],w=!0,S=!1,E,U;try{for(k=k.call(a);!(w=(E=k.next()).done)&&(r.push(E.value),!(l&&r.length===l));w=!0);}catch(M){S=!0,U=M}finally{try{!w&&k.return!=null&&k.return()}finally{if(S)throw U}}return r}}function i(a){if(Array.isArray(a))return a}var g=n.Layout.Header,L=n.Layout.Content,I=n.Layout.Footer,B=n.Layout.Sider;function O(a,l,k,r){return{key:l,icon:k,children:r,label:a}}var u=[O("Option 1","1",e.default.createElement(s.PieChartOutlined,null)),O("Option 2","2",e.default.createElement(s.DesktopOutlined,null)),O("User","sub1",e.default.createElement(s.UserOutlined,null),[O("Tom","3"),O("Bill","4"),O("Alex","5")]),O("Team","sub2",e.default.createElement(s.TeamOutlined,null),[O("Team 1","6"),O("Team 2","8")]),O("Files","9",e.default.createElement(s.FileOutlined,null))],t=function(){var l=(0,e.useState)(!1),k=b(l,2),r=k[0],w=k[1];return e.default.createElement(n.Layout,{style:{minHeight:"100vh"}},e.default.createElement(B,{collapsible:!0,collapsed:r,onCollapse:function(E){return w(E)}},e.default.createElement("div",{className:"logo"}),e.default.createElement(n.Menu,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:u})),e.default.createElement(n.Layout,{className:"site-layout"},e.default.createElement(g,{className:"site-layout-background",style:{padding:0}}),e.default.createElement(L,{style:{margin:"0 16px"}},e.default.createElement(n.Breadcrumb,{style:{margin:"16px 0"}},e.default.createElement(n.Breadcrumb.Item,null,"User"),e.default.createElement(n.Breadcrumb.Item,null,"Bill")),e.default.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},"Bill is a cat.")),e.default.createElement(I,{style:{textAlign:"center"}},"Ant Design \xA92018 Created by Ant UED")))},c=t;return C.createElement(c)},style:`#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
  [data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
  }
`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-side</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">32</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout</span> <span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`,src:"/demo-0.4799541609139997.html"}},3896:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u540C\u6837\u62E5\u6709\u9876\u90E8\u5BFC\u822A\u53CA\u4FA7\u8FB9\u680F\uFF0C\u533A\u522B\u662F\u4E24\u8FB9\u672A\u7559\u8FB9\u8DDD\uFF0C\u591A\u7528\u4E8E\u5E94\u7528\u578B\u7684\u7F51\u7AD9\u3002"]],"en-US":[["p","Both the top navigation and the sidebar, commonly used in application site."]]},meta:{order:2,title:{"zh-CN":"\u9876\u90E8-\u4FA7\u8FB9\u5E03\u5C40-\u901A\u680F","en-US":"Header Sider 2"},filename:"components/layout/demo/top-side-2.md",id:"components-layout-demo-top-side-2"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Sider } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items1<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
  key<span class="token punctuation">,</span>
  label<span class="token punctuation">:</span> \`nav \${key}\`<span class="token punctuation">,</span>
}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items2<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    return {
      key<span class="token punctuation">:</span> \`sub\${key}\`<span class="token punctuation">,</span>
      icon<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
      label<span class="token punctuation">:</span> \`subnav \${key}\`<span class="token punctuation">,</span>

      children<span class="token punctuation">:</span> new <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
        return {
          key<span class="token punctuation">:</span> subKey<span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> \`option\${subKey}\`<span class="token punctuation">,</span>
        }<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token punctuation">,</span>
    }<span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu theme<span class="token operator">=</span><span class="token string">"dark"</span> mode<span class="token operator">=</span><span class="token string">"horizontal"</span> defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span>} items<span class="token operator">=</span>{items1} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Sider width<span class="token operator">=</span>{<span class="token number">200</span>} className<span class="token operator">=</span><span class="token string">"site-layout-background"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Menu
          mode<span class="token operator">=</span><span class="token string">"inline"</span>
          defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>}
          defaultOpenKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span>}
          style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span> borderRight<span class="token punctuation">:</span> <span class="token number">0</span> }}
          items<span class="token operator">=</span>{items2}
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 32px 32px'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'16px 0'</span> }}<span class="token operator">></span>
          <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>List<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
          <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content
          className<span class="token operator">=</span><span class="token string">"site-layout-background"</span>
          style<span class="token operator">=</span>{{
            padding<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            minHeight<span class="token punctuation">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          }}
        <span class="token operator">></span>
          Content
        <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> items1<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token punctuation">,</span>
  label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items2<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sub</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">subnav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>

      children<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          key<span class="token operator">:</span> subKey<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">option</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>subKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items1<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span> borderRight<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items2<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 32px 32px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            margin<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            minHeight<span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>
<span class="token keyword">const</span> items1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items2 <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">icon<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sub</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">subnav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> subKey<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">option</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>subKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items1<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
          <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderRight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items2<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 32px 32px'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'16px 0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(26),s=p(12),n=e(p(0));function e(i){return i&&i.__esModule?i:{default:i}}var d=s.Layout.Header,f=s.Layout.Content,b=s.Layout.Sider,x=["1","2","3"].map(function(i){return{key:i,label:"nav ".concat(i)}}),m=[o.UserOutlined,o.LaptopOutlined,o.NotificationOutlined].map(function(i,g){var L=String(g+1);return{key:"sub".concat(L),icon:n.default.createElement(i),label:"subnav ".concat(L),children:new Array(4).fill(null).map(function(I,B){var O=g*4+B+1;return{key:O,label:"option".concat(O)}})}}),y=function(){return n.default.createElement(s.Layout,null,n.default.createElement(d,{className:"header"},n.default.createElement("div",{className:"logo"}),n.default.createElement(s.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:x})),n.default.createElement(s.Layout,null,n.default.createElement(b,{width:200,className:"site-layout-background"},n.default.createElement(s.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},items:m})),n.default.createElement(s.Layout,{style:{padding:"0 32px 32px"}},n.default.createElement(s.Breadcrumb,{style:{margin:"16px 0"}},n.default.createElement(s.Breadcrumb.Item,null,"Home"),n.default.createElement(s.Breadcrumb.Item,null,"List"),n.default.createElement(s.Breadcrumb.Item,null,"App")),n.default.createElement(f,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},"Content"))))},h=y;return C.createElement(h)},style:`#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-top-side-2</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">31</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">16</span>px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-layout-demo-top-side-2</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">0</span> <span class="token number">16</span>px <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3897:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u62E5\u6709\u9876\u90E8\u5BFC\u822A\u53CA\u4FA7\u8FB9\u680F\u7684\u9875\u9762\uFF0C\u591A\u7528\u4E8E\u5C55\u793A\u7C7B\u7F51\u7AD9\u3002"]],"en-US":[["p","Both the top navigation and the sidebar, commonly used in documentation site."]]},meta:{order:3,title:{"zh-CN":"\u9876\u90E8-\u4FA7\u8FB9\u5E03\u5C40","en-US":"Header-Sider"},filename:"components/layout/demo/top-side.md",id:"components-layout-demo-top-side"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items1<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{
  key<span class="token punctuation">,</span>
  label<span class="token punctuation">:</span> \`nav \${key}\`<span class="token punctuation">,</span>
}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items2<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    return {
      key<span class="token punctuation">:</span> \`sub\${key}\`<span class="token punctuation">,</span>
      icon<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
      label<span class="token punctuation">:</span> \`subnav \${key}\`<span class="token punctuation">,</span>

      children<span class="token punctuation">:</span> new <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
        return {
          key<span class="token punctuation">:</span> subKey<span class="token punctuation">,</span>
          label<span class="token punctuation">:</span> \`option\${subKey}\`<span class="token punctuation">,</span>
        }<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token punctuation">,</span>
    }<span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span>Header className<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu theme<span class="token operator">=</span><span class="token string">"dark"</span> mode<span class="token operator">=</span><span class="token string">"horizontal"</span> defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span>} items<span class="token operator">=</span>{items1} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
    <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 50px'</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Breadcrumb style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'16px 0'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>List<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token operator">></span>
      <span class="token operator">&lt;</span>Layout className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'24px 0'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Sider className<span class="token operator">=</span><span class="token string">"site-layout-background"</span> width<span class="token operator">=</span>{<span class="token number">200</span>}<span class="token operator">></span>
          <span class="token operator">&lt;</span>Menu
            mode<span class="token operator">=</span><span class="token string">"inline"</span>
            defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>}
            defaultOpenKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span>}
            style<span class="token operator">=</span>{{ height<span class="token punctuation">:</span> <span class="token string">'100%'</span> }}
            items<span class="token operator">=</span>{items2}
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Sider<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 24px'</span><span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">280</span> }}<span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
    <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> items1<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token punctuation">,</span>
  label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items2<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>icon<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sub</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">subnav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>

      children<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          key<span class="token operator">:</span> subKey<span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">option</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>subKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items1<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 50px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'24px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
            <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items2<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 24px'</span><span class="token punctuation">,</span> minHeight<span class="token operator">:</span> <span class="token number">280</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer<span class="token punctuation">,</span> Sider <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>
<span class="token keyword">const</span> items1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items2 <span class="token operator">=</span> <span class="token punctuation">[</span>UserOutlined<span class="token punctuation">,</span> LaptopOutlined<span class="token punctuation">,</span> NotificationOutlined<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">icon<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sub</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>icon<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">subnav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> subKey <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> subKey<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">option</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>subKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span> <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items1<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 50px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'16px 0'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'24px 0'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Sider</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-background<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span>
            <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">defaultOpenKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items2<span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Sider</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 24px'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          Content
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(26),s=p(12),n=e(p(0));function e(g){return g&&g.__esModule?g:{default:g}}var d=s.Layout.Header,f=s.Layout.Content,b=s.Layout.Footer,x=s.Layout.Sider,m=["1","2","3"].map(function(g){return{key:g,label:"nav ".concat(g)}}),y=[o.UserOutlined,o.LaptopOutlined,o.NotificationOutlined].map(function(g,L){var I=String(L+1);return{key:"sub".concat(I),icon:n.default.createElement(g),label:"subnav ".concat(I),children:new Array(4).fill(null).map(function(B,O){var u=L*4+O+1;return{key:u,label:"option".concat(u)}})}}),h=function(){return n.default.createElement(s.Layout,null,n.default.createElement(d,{className:"header"},n.default.createElement("div",{className:"logo"}),n.default.createElement(s.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:m})),n.default.createElement(f,{style:{padding:"0 50px"}},n.default.createElement(s.Breadcrumb,{style:{margin:"16px 0"}},n.default.createElement(s.Breadcrumb.Item,null,"Home"),n.default.createElement(s.Breadcrumb.Item,null,"List"),n.default.createElement(s.Breadcrumb.Item,null,"App")),n.default.createElement(s.Layout,{className:"site-layout-background",style:{padding:"24px 0"}},n.default.createElement(x,{className:"site-layout-background",width:200},n.default.createElement(s.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},items:y})),n.default.createElement(f,{style:{padding:"0 24px",minHeight:280}},"Content"))),n.default.createElement(b,{style:{textAlign:"center"}},"Infra Design \xA92018 Created by Ant UED"))},i=h;return C.createElement(i)},style:`#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-layout-demo-top-side</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">31</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">16</span>px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-layout-demo-top-side</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">0</span> <span class="token number">16</span>px <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.site-layout-background</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3898:function(v,N,p){v.exports={content:{"zh-CN":[["p","\u6700\u57FA\u672C\u7684\u300E\u4E0A-\u4E2D-\u4E0B\u300F\u5E03\u5C40\u3002"],["p","\u4E00\u822C\u4E3B\u5BFC\u822A\u653E\u7F6E\u4E8E\u9875\u9762\u7684\u9876\u7AEF\uFF0C\u4ECE\u5DE6\u81EA\u53F3\u4F9D\u6B21\u4E3A\uFF1Alogo\u3001\u4E00\u7EA7\u5BFC\u822A\u9879\u3001\u8F85\u52A9\u83DC\u5355\uFF08\u7528\u6237\u3001\u8BBE\u7F6E\u3001\u901A\u77E5\u7B49\uFF09\u3002\u901A\u5E38\u5C06\u5185\u5BB9\u653E\u5728\u56FA\u5B9A\u5C3A\u5BF8\uFF08\u4F8B\u5982\uFF1A1200px\uFF09\u5185\uFF0C\u6574\u4E2A\u9875\u9762\u6392\u7248\u7A33\u5B9A\uFF0C\u4E0D\u53D7\u7528\u6237\u7EC8\u7AEF\u663E\u793A\u5668\u5F71\u54CD\uFF1B\u4E0A\u4E0B\u7EA7\u7684\u7ED3\u6784\u7B26\u5408\u7528\u6237\u4E0A\u4E0B\u6D4F\u89C8\u7684\u4E60\u60EF\uFF0C\u4E5F\u662F\u8F83\u4E3A\u7ECF\u5178\u7684\u7F51\u7AD9\u5BFC\u822A\u6A21\u5F0F\u3002\u9875\u9762\u4E0A\u4E0B\u5207\u5206\u7684\u65B9\u5F0F\u63D0\u9AD8\u4E86\u4E3B\u5DE5\u4F5C\u533A\u57DF\u7684\u4FE1\u606F\u5C55\u793A\u6548\u7387\uFF0C\u4F46\u5728\u7EB5\u5411\u7A7A\u95F4\u4E0A\u4F1A\u6709\u4E00\u4E9B\u727A\u7272\u3002\u6B64\u5916\uFF0C\u7531\u4E8E\u5BFC\u822A\u680F\u6C34\u5E73\u7A7A\u95F4\u7684\u9650\u5236\uFF0C\u4E0D\u9002\u5408\u90A3\u4E9B\u4E00\u7EA7\u5BFC\u822A\u9879\u5F88\u591A\u7684\u4FE1\u606F\u7ED3\u6784\u3002"]],"en-US":[["p",'The most basic "header-content-footer" layout.'],["p","Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: ",["code","1200px"],"), the layout of the whole page is stable, it's not affected by viewing area."],["p","Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links."]]},meta:{order:1,title:{"zh-CN":"\u4E0A\u4E2D\u4E0B\u5E03\u5C40","en-US":"Header-Content-Footer"},filename:"components/layout/demo/top.md",id:"components-layout-demo-top"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer } <span class="token operator">=</span> Layout<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Layout className<span class="token operator">=</span><span class="token string">"layout"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Header<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"logo"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Menu
        theme<span class="token operator">=</span><span class="token string">"dark"</span>
        mode<span class="token operator">=</span><span class="token string">"horizontal"</span>
        defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span>}
        items<span class="token operator">=</span>{new <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
          <span class="token keyword">const</span> key <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
          return {
            key<span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> \`nav \${key}\`<span class="token punctuation">,</span>
          }<span class="token comment" spellcheck="true">;</span>
        }<span class="token punctuation">)</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">></span>
    <span class="token operator">&lt;</span>Content style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token string">'0 50px'</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Breadcrumb style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'16px 0'</span> }}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>List<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>App<span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Breadcrumb<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"site-layout-content"</span><span class="token operator">></span>Content<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Content<span class="token operator">></span>
    <span class="token operator">&lt;</span>Footer style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant UED<span class="token operator">&lt;</span><span class="token operator">/</span>Footer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token operator">&lt;</span>Menu
        theme<span class="token operator">=</span><span class="token string">"dark"</span>
        mode<span class="token operator">=</span><span class="token string">"horizontal"</span>
        defaultSelectedKeys<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        items<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> key <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            key<span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'0 50px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'16px 0'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Content<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token operator">=</span> Layout<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token operator">&lt;</span>Menu
        theme<span class="token operator">=</span><span class="token string">"dark"</span>
        mode<span class="token operator">=</span><span class="token string">"horizontal"</span>
        defaultSelectedKeys<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        items<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> key <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            key<span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Header</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Content</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'0 50px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'16px 0'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb.Item</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Breadcrumb</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-layout-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Content</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Infra Design \xA9<span class="token number">2018</span> Created by Ant <span class="token constant">UED</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Footer</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var C=p(0),H=p(55),o=p(12),s=n(p(0));function n(m){return m&&m.__esModule?m:{default:m}}var e=o.Layout.Header,d=o.Layout.Content,f=o.Layout.Footer,b=function(){return s.default.createElement(o.Layout,{className:"layout"},s.default.createElement(e,null,s.default.createElement("div",{className:"logo"}),s.default.createElement(o.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:new Array(15).fill(null).map(function(y,h){var i=h+1;return{key:i,label:"nav ".concat(i)}})})),s.default.createElement(d,{style:{padding:"0 50px"}},s.default.createElement(o.Breadcrumb,{style:{margin:"16px 0"}},s.default.createElement(o.Breadcrumb.Item,null,"Home"),s.default.createElement(o.Breadcrumb.Item,null,"List"),s.default.createElement(o.Breadcrumb.Item,null,"App")),s.default.createElement("div",{className:"site-layout-content"},"Content")),s.default.createElement(f,{style:{textAlign:"center"}},"Infra Design \xA92018 Created by Ant UED"))},x=b;return C.createElement(x)},style:`.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
  [data-theme="dark"] .site-layout-content {
    background: #141414;
  }
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-layout-content</span> </span><span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token number">280</span>px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token id">#components-layout-demo-top</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">31</span>px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">24</span>px <span class="token number">16</span>px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">255</span>, <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-layout-demo-top</span> <span class="token class">.logo</span> </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px <span class="token number">0</span> <span class="token number">16</span>px <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}}}]);
