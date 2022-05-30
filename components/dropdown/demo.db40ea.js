(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{3265:function(d,C,a){d.exports={"arrow-center":a(3781),arrow:a(3782),basic:a(3783),"context-menu":a(3784),"dropdown-button":a(3785),event:a(3786),item:a(3787),loading:a(3788),"menu-full":a(3789),"overlay-visible":a(3790),placement:a(3791),"sub-menu":a(3792),trigger:a(3793)}},3781:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u8BBE\u7F6E ",["code","arrow"]," \u4E3A ",["code","{ pointAtCenter: true }"]," \u540E\uFF0C\u7BAD\u5934\u5C06\u6307\u5411\u76EE\u6807\u5143\u7D20\u7684\u4E2D\u5FC3\u3002"]],"en-US":[["p","By specifying ",["code","arrow"]," prop with ",["code","{ pointAtCenter: true }"],", the arrow will point to the center of the target element."]]},meta:{order:3,title:{"zh-CN":"\u7BAD\u5934\u6307\u5411","en-US":"Arrow pointing at the center"},filename:"components/dropdown/demo/arrow-center.md",id:"components-dropdown-demo-arrow-center"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottom"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topLeft"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"top"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topRight"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=k(a(0)),s=a(11);function k(u){return u&&u.__esModule?u:{default:u}}var r=n.default.createElement(s.Menu,{items:[{key:"1",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}]}),c=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomLeft",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"bottomLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottom",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"bottom")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomRight",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"bottomRight")),n.default.createElement("br",null),n.default.createElement(s.Dropdown,{overlay:r,placement:"topLeft",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"topLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"top",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"top")),n.default.createElement(s.Dropdown,{overlay:r,placement:"topRight",arrow:{pointAtCenter:!0}},n.default.createElement(s.Button,null,"topRight")))},y=c;return f.createElement(y)},style:`#components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-dropdown-demo-arrow-center</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-dropdown-demo-arrow-center</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3782:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u5C55\u793A\u4E00\u4E2A\u7BAD\u5934\u3002"]],"en-US":[["p","You could display an arrow."]]},meta:{order:2,title:{"zh-CN":"\u7BAD\u5934","en-US":"Arrow"},filename:"components/dropdown/demo/arrow.md",id:"components-dropdown-demo-arrow"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottom"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topLeft"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"top"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topRight"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=k(a(0)),s=a(11);function k(u){return u&&u.__esModule?u:{default:u}}var r=n.default.createElement(s.Menu,{items:[{key:"1",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}]}),c=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomLeft",arrow:!0},n.default.createElement(s.Button,null,"bottomLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottom",arrow:!0},n.default.createElement(s.Button,null,"bottom")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomRight",arrow:!0},n.default.createElement(s.Button,null,"bottomRight")),n.default.createElement("br",null),n.default.createElement(s.Dropdown,{overlay:r,placement:"topLeft",arrow:!0},n.default.createElement(s.Button,null,"topLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"top",arrow:!0},n.default.createElement(s.Button,null,"top")),n.default.createElement(s.Dropdown,{overlay:r,placement:"topRight",arrow:!0},n.default.createElement(s.Button,null,"topRight")))},y=c;return f.createElement(y)},style:`#components-dropdown-demo-arrow .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-dropdown-demo-arrow</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-dropdown-demo-arrow</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3783:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002"]],"en-US":[["p","The most basic dropdown menu."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/dropdown/demo/basic.md",id:"components-dropdown-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(g){return g&&g.__esModule?g:{default:g}}var c=n.default.createElement(s.Menu,{items:[{key:"1",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item (disabled)"),icon:n.default.createElement(k.IArrowDown,null),disabled:!0},{key:"3",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item (disabled)"),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]}),y=function(){return n.default.createElement(s.Dropdown,{overlay:c},n.default.createElement("a",{onClick:function(w){return w.preventDefault()}},n.default.createElement(s.Space,null,"Hover me",n.default.createElement(k.IArrowDown,null))))},u=y;return f.createElement(u)}}},3784:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002"]],"en-US":[["p","The default trigger mode is ",["code","hover"],", you can change it to ",["code","contextMenu"],"."]]},meta:{order:8,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"},filename:"components/dropdown/demo/context-menu.md",id:"components-dropdown-demo-context-menu"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} trigger<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span>}<span class="token operator">></span>
    <span class="token operator">&lt;</span>div
      className<span class="token operator">=</span><span class="token string">"site-dropdown-context-menu"</span>
      style<span class="token operator">=</span>{{
        textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        lineHeight<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      }}
    <span class="token operator">></span>
      Right Click on here
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-dropdown-context-menu<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        textAlign<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        lineHeight<span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Right Click on here
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-dropdown-context-menu<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Right Click on here
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=k(a(0)),s=a(11);function k(u){return u&&u.__esModule?u:{default:u}}var r=n.default.createElement(s.Menu,{items:[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}]}),c=function(){return n.default.createElement(s.Dropdown,{overlay:r,trigger:["contextMenu"]},n.default.createElement("div",{className:"site-dropdown-context-menu",style:{textAlign:"center",height:200,lineHeight:"200px"}},"Right Click on here"))},y=c;return f.createElement(y)},style:`.site-dropdown-context-menu {
  color: #777;
  background: #f7f7f7;
}
  [data-theme="dark"] .site-dropdown-context-menu {
    background: #141414;
    color: rgba(255,255,255,.65);
  }
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-dropdown-context-menu</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#777</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#f7f7f7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3785:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E ",["code","icon"]," \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002"]],"en-US":[["p","A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."]]},meta:{order:5,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE","en-US":"Button with dropdown menu"},filename:"components/dropdown/demo/dropdown-button.md",id:"components-dropdown-demo-dropdown-button"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown<span class="token punctuation">,</span> UserOutlined } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleButtonClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleMenuClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    onClick<span class="token operator">=</span>{handleMenuClick}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button onClick<span class="token operator">=</span>{handleButtonClick} overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottom"</span> icon<span class="token operator">=</span>{<span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span>}<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button onClick<span class="token operator">=</span>{handleButtonClick} overlay<span class="token operator">=</span>{menu} disabled<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
      overlay<span class="token operator">=</span>{menu}
      buttonsRender<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>
        <span class="token operator">&lt;</span>Tooltip title<span class="token operator">=</span><span class="token string">"tooltip"</span> key<span class="token operator">=</span><span class="token string">"leftButton"</span><span class="token operator">></span>
          {leftButton}
        <span class="token operator">&lt;</span><span class="token operator">/</span>Tooltip<span class="token operator">></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton as React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> string<span class="token operator">></span><span class="token punctuation">,</span> { loading<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">></span>
      <span class="token keyword">With</span> Tooltip
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Space<span class="token operator">></span>
          Button
          <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleMenuClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleMenuClick<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">buttonsRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>leftButton<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton <span class="token keyword">as</span> React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> string<span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> loading<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      With Tooltip
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Button
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleMenuClick<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
      <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
      <span class="token attr-name">buttonsRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>leftButton<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      With Tooltip
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Button
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(p){return p&&p.__esModule?p:{default:p}}function c(p,o){return w(p)||b(p,o)||u(p,o)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(p,o){if(!!p){if(typeof p=="string")return g(p,o);var i=Object.prototype.toString.call(p).slice(8,-1);if(i==="Object"&&p.constructor&&(i=p.constructor.name),i==="Map"||i==="Set")return Array.from(p);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(p,o)}}function g(p,o){(o==null||o>p.length)&&(o=p.length);for(var i=0,v=new Array(o);i<o;i++)v[i]=p[i];return v}function b(p,o){var i=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(i!=null){var v=[],t=!0,l=!1,m,h;try{for(i=i.call(p);!(t=(m=i.next()).done)&&(v.push(m.value),!(o&&v.length===o));t=!0);}catch(D){l=!0,h=D}finally{try{!t&&i.return!=null&&i.return()}finally{if(l)throw h}}return v}}function w(p){if(Array.isArray(p))return p}var S=function(o){s.message.info("Click on left button."),console.log("click left button",o)},x=function(o){s.message.info("Click on menu item."),console.log("click",o)},R=n.default.createElement(s.Menu,{onClick:x,items:[{label:"1st menu item",key:"1",icon:n.default.createElement(k.UserOutlined,null)},{label:"2nd menu item",key:"2",icon:n.default.createElement(k.UserOutlined,null)},{label:"3rd menu item",key:"3",icon:n.default.createElement(k.UserOutlined,null)}]}),E=function(){return n.default.createElement(s.Space,{wrap:!0},n.default.createElement(s.Dropdown.Button,{onClick:S,overlay:R},"Dropdown"),n.default.createElement(s.Dropdown.Button,{overlay:R,placement:"bottom",icon:n.default.createElement(k.UserOutlined,null)},"Dropdown"),n.default.createElement(s.Dropdown.Button,{onClick:S,overlay:R,disabled:!0},"Dropdown"),n.default.createElement(s.Dropdown.Button,{overlay:R,buttonsRender:function(i){var v=c(i,2),t=v[0],l=v[1];return[n.default.createElement(s.Tooltip,{title:"tooltip",key:"leftButton"},t),n.default.cloneElement(l,{loading:!0})]}},"With Tooltip"),n.default.createElement(s.Dropdown,{overlay:R},n.default.createElement(s.Button,null,n.default.createElement(s.Space,null,"Button",n.default.createElement(k.IArrowDown,null)))))},e=E;return f.createElement(e)}}},3786:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002"]],"en-US":[["p","An event will be triggered when you click menu items, in which you can make different operations according to item's key."]]},meta:{order:4,title:{"zh-CN":"\u89E6\u53D1\u4E8B\u4EF6","en-US":"Click event"},filename:"components/dropdown/demo/event.md",id:"components-dropdown-demo-event"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>{ key }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>\`Click on item \${key}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    onClick<span class="token operator">=</span>{onClick}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> onClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Click on item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Click on item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(b){return b&&b.__esModule?b:{default:b}}var c=function(w){var S=w.key;s.message.info("Click on item ".concat(S))},y=n.default.createElement(s.Menu,{onClick:c,items:[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}]}),u=function(){return n.default.createElement(s.Dropdown,{overlay:y},n.default.createElement("a",{onClick:function(S){return S.preventDefault()}},n.default.createElement(s.Space,null,"Hover me, Click menu item",n.default.createElement(k.IArrowDown,null))))},g=u;return f.createElement(g)}}},3787:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002"]],"en-US":[["p","Divider and disabled menu item."]]},meta:{order:2,title:{"zh-CN":"\u5176\u4ED6\u5143\u7D20","en-US":"Other elements"},filename:"components/dropdown/demo/item.md",id:"components-dropdown-demo-item"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        type<span class="token punctuation">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(g){return g&&g.__esModule?g:{default:g}}var c=n.default.createElement(s.Menu,{items:[{label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item"),key:"0"},{label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item"),key:"1"},{type:"divider"},{label:"3rd menu item\uFF08disabled\uFF09",key:"3",disabled:!0}]}),y=function(){return n.default.createElement(s.Dropdown,{overlay:c},n.default.createElement("a",{onClick:function(w){return w.preventDefault()}},n.default.createElement(s.Space,null,"Hover me",n.default.createElement(k.IArrowDown,null))))},u=y;return f.createElement(u)}}},3788:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u6DFB\u52A0 ",["code","loading"]," \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002"]],"en-US":[["p","A loading indicator can be added to a button by setting the ",["code","loading"]," property on the ",["code","Dropdown.Button"],"."]]},meta:{order:9,title:{"zh-CN":"\u52A0\u8F7D\u4E2D\u72B6\u6001","en-US":"Loading"},filename:"components/dropdown/demo/loading.md",id:"components-dropdown-demo-loading"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { DownOutlined } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> enterLoading <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>state<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment" spellcheck="true">;</span>
      return newLoadings<span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>state<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token comment" spellcheck="true">;</span>
        return newLoadings<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> loading overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> size<span class="token operator">=</span><span class="token string">"small"</span> loading overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
        type<span class="token operator">=</span><span class="token string">"primary"</span>
        loading<span class="token operator">=</span>{loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>}
        overlay<span class="token operator">=</span>{menu}
        onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>}
      <span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
        icon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
        loading<span class="token operator">=</span>{loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>}
        overlay<span class="token operator">=</span>{menu}
        onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>}
      <span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">enterLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">enterLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoadings</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setLoadings</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52);function n(t){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},n(t)}var s=y(a(0)),k=a(11),r=a(26);function c(t){if(typeof WeakMap!="function")return null;var l=new WeakMap,m=new WeakMap;return(c=function(D){return D?m:l})(t)}function y(t,l){if(!l&&t&&t.__esModule)return t;if(t===null||n(t)!=="object"&&typeof t!="function")return{default:t};var m=c(l);if(m&&m.has(t))return m.get(t);var h={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in t)if(M!=="default"&&Object.prototype.hasOwnProperty.call(t,M)){var I=D?Object.getOwnPropertyDescriptor(t,M):null;I&&(I.get||I.set)?Object.defineProperty(h,M,I):h[M]=t[M]}return h.default=t,m&&m.set(t,h),h}function u(t){return w(t)||b(t)||R(t)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w(t){if(Array.isArray(t))return E(t)}function S(t,l){return p(t)||e(t,l)||R(t,l)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(t,l){if(!!t){if(typeof t=="string")return E(t,l);var m=Object.prototype.toString.call(t).slice(8,-1);if(m==="Object"&&t.constructor&&(m=t.constructor.name),m==="Map"||m==="Set")return Array.from(t);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return E(t,l)}}function E(t,l){(l==null||l>t.length)&&(l=t.length);for(var m=0,h=new Array(l);m<l;m++)h[m]=t[m];return h}function e(t,l){var m=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(m!=null){var h=[],D=!0,M=!1,I,O;try{for(m=m.call(t);!(D=(I=m.next()).done)&&(h.push(I.value),!(l&&h.length===l));D=!0);}catch(j){M=!0,O=j}finally{try{!D&&m.return!=null&&m.return()}finally{if(M)throw O}}return h}}function p(t){if(Array.isArray(t))return t}var o=s.default.createElement(k.Menu,{items:[{label:"Submit and continue",key:"1"}]}),i=function(){var l=(0,s.useState)([]),m=S(l,2),h=m[0],D=m[1],M=function(O){D(function(j){var N=u(j);return N[O]=!0,N}),setTimeout(function(){D(function(j){var N=u(j);return N[O]=!1,N})},6e3)};return s.default.createElement(k.Space,{direction:"vertical"},s.default.createElement(k.Dropdown.Button,{type:"primary",loading:!0,overlay:o},"Submit"),s.default.createElement(k.Dropdown.Button,{type:"primary",size:"small",loading:!0,overlay:o},"Submit"),s.default.createElement(k.Dropdown.Button,{type:"primary",loading:h[0],overlay:o,onClick:function(){return M(0)}},"Submit"),s.default.createElement(k.Dropdown.Button,{icon:s.default.createElement(r.DownOutlined,null),loading:h[1],overlay:o,onClick:function(){return M(1)}},"Submit"))},v=i;return f.createElement(v)}}},3789:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u6B64\u6F14\u793A\u9700\u8981\u6CE8\u610F\u53BB\u6389 Reset \u6837\u5F0F\u540E\u67E5\u770B Dropdown \u5185 Menu \u7684\u6837\u5F0F\u662F\u5426\u6B63\u5E38\u3002"],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/19150"},"#19150"]]],"en-US":[["p","This demo was created for debugging Menu styles inside Dropdown."],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/19150"},"#19150"]]]},meta:{order:100,title:{"zh-CN":"Menu \u5B8C\u6574\u6837\u5F0F","en-US":"Menu full styles"},debug:!0,filename:"components/dropdown/demo/menu-full.md",id:"components-dropdown-demo-menu-full"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { MailOutlined<span class="token punctuation">,</span> AppstoreOutlined<span class="token punctuation">,</span> SettingOutlined<span class="token punctuation">,</span> IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

function <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  type<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> MenuItem {
  return {
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  } as MenuItem<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>MailOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>AppstoreOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>SettingOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">Not</span> crash
  <span class="token keyword">null</span> as any<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token operator">&lt;</span>Menu selectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>} openKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span>} items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover <span class="token keyword">to</span> check menu style
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MailOutlined<span class="token punctuation">,</span> AppstoreOutlined<span class="token punctuation">,</span> SettingOutlined<span class="token punctuation">,</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> MenuItem <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> MenuItem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MailOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppstoreOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// Not crash</span>
  <span class="token keyword">null</span> <span class="token keyword">as</span> any<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">openKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover to check menu style
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown<span class="token punctuation">,</span> MailOutlined<span class="token punctuation">,</span> SettingOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">label<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> children<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MailOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppstoreOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Not crash</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">openKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover to check menu style
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(w){return w&&w.__esModule?w:{default:w}}function c(w,S,x,R,E){return{key:S,icon:x,children:R,label:w,type:E}}var y=[c("Item Group","group",null,[c("Option 0","01"),c("Option 0","02")],"group"),c("Navigation One","sub1",n.default.createElement(k.MailOutlined,null),[c("Item 1","g1",null,[c("Option 1","1"),c("Option 2","2")],"group"),c("Item 2","g2",null,[c("Option 3","3"),c("Option 4","4")],"group")]),c("Navigation Two","sub2",n.default.createElement(k.AppstoreOutlined,null),[c("Option 5","5"),c("Option 6","6"),c("Submenu","sub3",null,[c("Option 7","7"),c("Option 8","8")])]),c("Navigation Three","sub4",n.default.createElement(k.SettingOutlined,null),[c("Option 9","9"),c("Option 10","10"),c("Option 11","11"),c("Option 12","12")]),null],u=n.default.createElement(s.Menu,{selectedKeys:["1"],openKeys:["sub1"],items:y}),g=function(){return n.default.createElement(s.Dropdown,{overlay:u},n.default.createElement("a",{onClick:function(x){return x.preventDefault()}},n.default.createElement(s.Space,null,"Hover to check menu style",n.default.createElement(k.IArrowDown,null))))},b=g;return f.createElement(b)}}},3790:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002"]],"en-US":[["p","The default is to close the menu when you click on menu items, this feature can be turned off."]]},meta:{order:7,title:{"zh-CN":"\u83DC\u5355\u9690\u85CF\u65B9\u5F0F","en-US":"The way of hiding menu."},filename:"components/dropdown/demo/overlay-visible.md",id:"components-dropdown-demo-overlay-visible"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleMenuClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">'3'</span><span class="token punctuation">)</span> {
      <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleVisibleChange <span class="token operator">=</span> <span class="token punctuation">(</span>flag<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setVisible</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Menu
      onClick<span class="token operator">=</span>{handleMenuClick}
      items<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          label<span class="token punctuation">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          label<span class="token punctuation">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          label<span class="token punctuation">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} onVisibleChange<span class="token operator">=</span>{handleVisibleChange} visible<span class="token operator">=</span>{visible}<span class="token operator">></span>
      <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Space<span class="token operator">></span>
          Hover me
          <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleMenuClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'3'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleVisibleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>flag<span class="token operator">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleMenuClick<span class="token punctuation">}</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
          key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
          key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
          key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleVisibleChange<span class="token punctuation">}</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Hover me
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>visible<span class="token punctuation">,</span> setVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'3'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleVisibleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleMenuClick<span class="token punctuation">}</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">onVisibleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleVisibleChange<span class="token punctuation">}</span></span> <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Hover me
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52);function n(e){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},n(e)}var s=y(a(0)),k=a(11),r=a(26);function c(e){if(typeof WeakMap!="function")return null;var p=new WeakMap,o=new WeakMap;return(c=function(v){return v?o:p})(e)}function y(e,p){if(!p&&e&&e.__esModule)return e;if(e===null||n(e)!=="object"&&typeof e!="function")return{default:e};var o=c(p);if(o&&o.has(e))return o.get(e);var i={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e)if(t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)){var l=v?Object.getOwnPropertyDescriptor(e,t):null;l&&(l.get||l.set)?Object.defineProperty(i,t,l):i[t]=e[t]}return i.default=e,o&&o.set(e,i),i}function u(e,p){return x(e)||S(e,p)||b(e,p)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(e,p){if(!!e){if(typeof e=="string")return w(e,p);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(e,p)}}function w(e,p){(p==null||p>e.length)&&(p=e.length);for(var o=0,i=new Array(p);o<p;o++)i[o]=e[o];return i}function S(e,p){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var i=[],v=!0,t=!1,l,m;try{for(o=o.call(e);!(v=(l=o.next()).done)&&(i.push(l.value),!(p&&i.length===p));v=!0);}catch(h){t=!0,m=h}finally{try{!v&&o.return!=null&&o.return()}finally{if(t)throw m}}return i}}function x(e){if(Array.isArray(e))return e}var R=function(){var p=(0,s.useState)(!1),o=u(p,2),i=o[0],v=o[1],t=function(D){D.key==="3"&&v(!1)},l=function(D){v(D)},m=s.default.createElement(k.Menu,{onClick:t,items:[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}]});return s.default.createElement(k.Dropdown,{overlay:m,onVisibleChange:l,visible:i},s.default.createElement("a",{onClick:function(D){return D.preventDefault()}},s.default.createElement(k.Space,null,"Hover me",s.default.createElement(r.IArrowDown,null))))},E=R;return f.createElement(E)}}},3791:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002"]],"en-US":[["p","Support 6 placements."]]},meta:{order:1,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},filename:"components/dropdown/demo/placement.md",id:"components-dropdown-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottom"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topLeft"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} placement<span class="token operator">=</span><span class="token string">"topRight"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=k(a(0)),s=a(11);function k(u){return u&&u.__esModule?u:{default:u}}var r=n.default.createElement(s.Menu,{items:[{key:"1",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}]}),c=function(){return n.default.createElement(s.Space,{direction:"vertical"},n.default.createElement(s.Space,{wrap:!0},n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomLeft"},n.default.createElement(s.Button,null,"bottomLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottom"},n.default.createElement(s.Button,null,"bottom")),n.default.createElement(s.Dropdown,{overlay:r,placement:"bottomRight"},n.default.createElement(s.Button,null,"bottomRight"))),n.default.createElement(s.Space,{wrap:!0},n.default.createElement(s.Dropdown,{overlay:r,placement:"topLeft"},n.default.createElement(s.Button,null,"topLeft")),n.default.createElement(s.Dropdown,{overlay:r,placement:"top"},n.default.createElement(s.Button,null,"top")),n.default.createElement(s.Dropdown,{overlay:r,placement:"topRight"},n.default.createElement(s.Button,null,"topRight"))))},y=c;return f.createElement(y)}}},3792:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002"]],"en-US":[["p","The menu has multiple levels."]]},meta:{order:6,title:{"zh-CN":"\u591A\u7EA7\u83DC\u5355","en-US":"Cascading menu"},filename:"components/dropdown/demo/sub-menu.md",id:"components-dropdown-demo-sub-menu"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        type<span class="token punctuation">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            key<span class="token punctuation">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Cascading menu
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Cascading menu
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Cascading menu
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(g){return g&&g.__esModule?g:{default:g}}var c=n.default.createElement(s.Menu,{items:[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}]}),y=function(){return n.default.createElement(s.Dropdown,{overlay:c},n.default.createElement("a",{onClick:function(w){return w.preventDefault()}},n.default.createElement(s.Space,null,"Cascading menu",n.default.createElement(k.IArrowDown,null))))},u=y;return f.createElement(u)}}},3793:function(d,C,a){d.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002"]],"en-US":[["p","The default trigger mode is ",["code","hover"],", you can change it to ",["code","click"],"."]]},meta:{order:3,title:{"zh-CN":"\u89E6\u53D1\u65B9\u5F0F","en-US":"Trigger mode"},filename:"components/dropdown/demo/trigger.md",id:"components-dropdown-demo-trigger"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'infrad'</span><span class="token comment" spellcheck="true">;</span>
import { IArrowDown } from <span class="token string">'infra-design-icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        label<span class="token punctuation">:</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>1st menu item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>2nd menu item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        type<span class="token punctuation">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu} trigger<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span>}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Click me
        <span class="token operator">&lt;</span>IArrowDown <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2nd menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Click me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> IArrowDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2nd menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Click me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IArrowDown</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=a(0),A=a(52),n=r(a(0)),s=a(11),k=a(26);function r(g){return g&&g.__esModule?g:{default:g}}var c=n.default.createElement(s.Menu,{items:[{label:n.default.createElement("a",{href:"https://www.antgroup.com"},"1st menu item"),key:"0"},{label:n.default.createElement("a",{href:"https://www.aliyun.com"},"2nd menu item"),key:"1"},{type:"divider"},{label:"3rd menu item",key:"3"}]}),y=function(){return n.default.createElement(s.Dropdown,{overlay:c,trigger:["click"]},n.default.createElement("a",{onClick:function(w){return w.preventDefault()}},n.default.createElement(s.Space,null,"Click me",n.default.createElement(k.IArrowDown,null))))},u=y;return f.createElement(u)}}}}]);
