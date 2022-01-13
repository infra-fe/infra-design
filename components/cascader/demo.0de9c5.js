(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{3192:function(u,h,n){u.exports={basic:n(3632),"change-on-select":n(3633),"custom-dropdown":n(3634),"custom-render":n(3635),"custom-trigger":n(3636),"default-value":n(3637),"disabled-option":n(3638),"fields-name":n(3639),hover:n(3640),lazy:n(3641),multiple:n(3642),search:n(3643),size:n(3644),suffix:n(3645)}},3632:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u7701\u5E02\u533A\u7EA7\u8054\u3002"]],"en-US":[["p","Cascade selection box for selecting province/city/district."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/cascader/demo/basic.md",id:"components-cascader-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{options:l,onChange:e,placeholder:"Please select"})}}},3633:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002"]],"en-US":[["p","Allow only select parent options."]]},meta:{order:5,title:{"zh-CN":"\u9009\u62E9\u5373\u6539\u53D8","en-US":"Change on select"},filename:"components/cascader/demo/change-on-select.md",id:"components-cascader-demo-change-on-select"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hanzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">changeOnSelect</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hanzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">changeOnSelect</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hanzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{options:l,onChange:e,changeOnSelect:!0})}}},3634:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","dropdownRender"]," \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002"]],"en-US":[["p","Customize the dropdown menu via ",["code","dropdownRender"],"."]]},meta:{order:12,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},filename:"components/cascader/demo/custom-dropdown.md",id:"components-cascader-demo-custom-dropdown"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dropdownRender</span><span class="token punctuation">(</span>menus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>menus<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>The footer is not very short<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dropdownRender<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader<span class="token punctuation">,</span> Divider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dropdownRender</span><span class="token punctuation">(</span><span class="token parameter">menus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>menus<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>The footer is not very short<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>dropdownRender<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){return a.createElement("div",null,c,a.createElement(o.Divider,{style:{margin:0}}),a.createElement("div",{style:{padding:8}},"The footer is not very short."))}return a.createElement(o.Cascader,{options:l,dropdownRender:e,placeholder:"Please select"})}}},3635:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002"]],"en-US":[["p","For instance, add an external link after the selected value."]]},meta:{order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5DF2\u9009\u9879","en-US":"Custom render"},filename:"components/cascader/demo/custom-render.md",id:"components-cascader-demo-custom-render"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
            code<span class="token punctuation">:</span> <span class="token number">752100</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
            code<span class="token punctuation">:</span> <span class="token number">453400</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleAreaClick</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> label<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">,</span> label<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> displayRender <span class="token operator">=</span> <span class="token punctuation">(</span>labels<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
  labels<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> option <span class="token operator">=</span> selectedOptions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> labels<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>label<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> <span class="token function">handleAreaClick</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> label<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>code<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span> <span class="token operator">/</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'xihu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">displayRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>displayRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">752100</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">453400</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleAreaClick</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> label<span class="token punctuation">,</span> option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">,</span> label<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">displayRender</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">labels<span class="token punctuation">,</span> selectedOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  labels<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">label<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> option <span class="token operator">=</span> selectedOptions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> labels<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>label<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">handleAreaClick</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> label<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>code<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>option<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span> <span class="token operator">/</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'xihu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">displayRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>displayRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}];function e(r,d,f){r.stopPropagation(),console.log("clicked",d,f)}var c=function(d,f){return d.map(function(z,w){var C=f[w];return w===d.length-1?a.createElement("span",{key:C.value},z," (",a.createElement("a",{onClick:function(N){return e(N,z,C)}},C.code),")"):a.createElement("span",{key:C.value},z," / ")})};return a.createElement(o.Cascader,{options:l,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:c,style:{width:"100%"}})}}},3636:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002"]],"en-US":[["p","Separate trigger button and result."]]},meta:{order:2,title:{"zh-CN":"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A","en-US":"Custom trigger"},filename:"components/cascader/demo/custom-trigger.md",id:"components-cascader-demo-custom-trigger"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CitySwitcher</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    text<span class="token punctuation">:</span> <span class="token string">'Unselect'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      text<span class="token punctuation">:</span> selectedOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>o <span class="token operator">=</span><span class="token operator">></span> o<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
        <span class="token entity" title="&nbsp;">&amp;nbsp;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change city<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Cascader</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CitySwitcher</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CitySwitcher</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Unselect'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> selectedOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> selectedOptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=></span> o<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
        <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change city<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Cascader</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CitySwitcher</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36);function o(s){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(s)}var l=n(11);function e(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function c(s,t){for(var i=0;i<t.length;i++){var k=t[i];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(s,k.key,k)}}function r(s,t,i){return t&&c(s.prototype,t),i&&c(s,i),Object.defineProperty(s,"prototype",{writable:!1}),s}function d(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(t&&t.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),t&&f(s,t)}function f(s,t){return f=Object.setPrototypeOf||function(k,v){return k.__proto__=v,k},f(s,t)}function z(s){var t=S();return function(){var k=N(s),v;if(t){var j=N(this).constructor;v=Reflect.construct(k,arguments,j)}else v=k.apply(this,arguments);return w(this,v)}}function w(s,t){if(t&&(o(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(s)}function C(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function S(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(s){return!1}}function N(s){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},N(s)}function O(s,t,i){return t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}var p=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}],g=function(s){d(i,s);var t=z(i);function i(){var k;e(this,i);for(var v=arguments.length,j=new Array(v),b=0;b<v;b++)j[b]=arguments[b];return k=t.call.apply(t,[this].concat(j)),O(C(k),"state",{text:"Unselect"}),O(C(k),"onChange",function(x,R){k.setState({text:R.map(function(U){return U.label}).join(", ")})}),k}return r(i,[{key:"render",value:function(){return a.createElement("span",null,this.state.text,"\xA0",a.createElement(l.Cascader,{options:p,onChange:this.onChange},a.createElement("a",{href:"#"},"Change city")))}}]),i}(a.Component);return a.createElement(g,null)}}},3637:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\u3002"]],"en-US":[["p","Specifies default value by an array."]]},meta:{order:1,title:{"zh-CN":"\u9ED8\u8BA4\u503C","en-US":"Default value"},filename:"components/cascader/demo/default-value.md",id:"components-cascader-demo-default-value"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'xihu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'zhejiang'</span><span class="token punctuation">,</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span> <span class="token string">'xihu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{defaultValue:["zhejiang","hangzhou","xihu"],options:l,onChange:e})}}},3638:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 ",["code","disabled"]," \u5B57\u6BB5\u3002"]],"en-US":[["p","Disable option by specifying the ",["code","disabled"]," property in ",["code","options"],"."]]},meta:{order:4,title:{"zh-CN":"\u7981\u7528\u9009\u9879","en-US":"Disabled option"},filename:"components/cascader/demo/disabled-option.md",id:"components-cascader-demo-disabled-option"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{options:l,onChange:e})}}},3639:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002"]],"en-US":[["p","Custom field names."]]},meta:{order:10,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D","en-US":"Custom Field Names"},filename:"components/cascader/demo/fields-name.md",id:"components-cascader-demo-fields-name"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    code<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        code<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        name<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            code<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            name<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    code<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        code<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        name<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            code<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            name<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token string">'code'</span><span class="token punctuation">,</span> children<span class="token punctuation">:</span> <span class="token string">'items'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">fieldNames</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'code'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'items'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{fieldNames:{label:"name",value:"code",children:"items"},options:l,onChange:e,placeholder:"Please select"})}}},3640:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002"]],"en-US":[["p","Hover to expand sub menu, click to select option."]]},meta:{order:3,title:{"zh-CN":"\u79FB\u5165\u5C55\u5F00","en-US":"Hover"},filename:"components/cascader/demo/hover.md",id:"components-cascader-demo-hover"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">// Just show the latest item.</span>
<span class="token keyword">function</span> <span class="token function">displayRender</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> label<span class="token punctuation">[</span>label<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">expandTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>
    <span class="token attr-name">displayRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>displayRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Just show the latest item.</span>
<span class="token keyword">function</span> <span class="token function">displayRender</span><span class="token punctuation">(</span><span class="token parameter">label</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> label<span class="token punctuation">[</span>label<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">expandTrigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>
    <span class="token attr-name">displayRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>displayRender<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(r){console.log(r)}function c(r){return r[r.length-1]}return a.createElement(o.Cascader,{options:l,expandTrigger:"hover",displayRender:c,onChange:e})}}},3641:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","loadData"]," \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002"],["blockquote",["p","\u6CE8\u610F\uFF1A",["code","loadData"]," \u4E0E ",["code","showSearch"]," \u65E0\u6CD5\u4E00\u8D77\u4F7F\u7528\u3002"]]],"en-US":[["p","Load options lazily with ",["code","loadData"],"."],["blockquote",["p","Note: ",["code","loadData"]," cannot work with ",["code","showSearch"],"."]]]},meta:{order:9,title:{"zh-CN":"\u52A8\u6001\u52A0\u8F7D\u9009\u9879","en-US":"Load Options Lazily"},filename:"components/cascader/demo/lazy.md",id:"components-cascader-demo-lazy"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> optionLists <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    isLeaf<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    isLeaf<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LazyOptions <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>optionLists<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> loadData <span class="token operator">=</span> selectedOptions <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetOption <span class="token operator">=</span> selectedOptions<span class="token punctuation">[</span>selectedOptions<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    targetOption<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// load options lazily</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      targetOption<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      targetOption<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          label<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>targetOption<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Dynamic 1\`</span></span><span class="token punctuation">,</span>
          value<span class="token punctuation">:</span> <span class="token string">'dynamic1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          label<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>targetOption<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Dynamic 2\`</span></span><span class="token punctuation">,</span>
          value<span class="token punctuation">:</span> <span class="token string">'dynamic2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadData<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">changeOnSelect</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyOptions</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> optionLists <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LazyOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>optionLists<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> selectedOptions</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">loadData</span> <span class="token operator">=</span> <span class="token parameter">selectedOptions</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetOption <span class="token operator">=</span> selectedOptions<span class="token punctuation">[</span>selectedOptions<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    targetOption<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// load options lazily</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      targetOption<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      targetOption<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>targetOption<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Dynamic 1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dynamic1'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>targetOption<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Dynamic 2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'dynamic2'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadData<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">changeOnSelect</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LazyOptions</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11);function l(p){return r(p)||c(p)||z(p)||e()}function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function r(p){if(Array.isArray(p))return w(p)}function d(p,g){return S(p)||C(p,g)||z(p,g)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(p,g){if(!!p){if(typeof p=="string")return w(p,g);var s=Object.prototype.toString.call(p).slice(8,-1);if(s==="Object"&&p.constructor&&(s=p.constructor.name),s==="Map"||s==="Set")return Array.from(p);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return w(p,g)}}function w(p,g){(g==null||g>p.length)&&(g=p.length);for(var s=0,t=new Array(g);s<g;s++)t[s]=p[s];return t}function C(p,g){var s=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(s!=null){var t=[],i=!0,k=!1,v,j;try{for(s=s.call(p);!(i=(v=s.next()).done)&&(t.push(v.value),!(g&&t.length===g));i=!0);}catch(b){k=!0,j=b}finally{try{!i&&s.return!=null&&s.return()}finally{if(k)throw j}}return t}}function S(p){if(Array.isArray(p))return p}var N=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}],O=function(){var g=a.useState(N),s=d(g,2),t=s[0],i=s[1],k=function(b,x){console.log(b,x)},v=function(b){var x=b[b.length-1];x.loading=!0,setTimeout(function(){x.loading=!1,x.children=[{label:"".concat(x.label," Dynamic 1"),value:"dynamic1"},{label:"".concat(x.label," Dynamic 2"),value:"dynamic2"}],i(l(t))},1e3)};return a.createElement(o.Cascader,{options:t,loadData:v,onChange:k,changeOnSelect:!0})};return a.createElement(O,null)}}},3642:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u4E00\u6B21\u6027\u9009\u62E9\u591A\u4E2A\u9009\u9879\u3002"]],"en-US":[["p","Select multiple options"]]},meta:{order:5.1,version:"4.17.0",title:{"zh-CN":"\u591A\u9009","en-US":"Multiple"},filename:"components/cascader/demo/multiple.md",id:"components-cascader-demo-multiple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Light'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`Number </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
    value<span class="token punctuation">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        label<span class="token punctuation">:</span> <span class="token string">'Little'</span><span class="token punctuation">,</span>
        value<span class="token punctuation">:</span> <span class="token string">'little'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Toy Fish'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'fish'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Toy Cards'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'cards'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token punctuation">:</span> <span class="token string">'Toy Bird'</span><span class="token punctuation">,</span>
            value<span class="token punctuation">:</span> <span class="token string">'bird'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">233</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">multiple</span>
    <span class="token attr-name">maxTagCount</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Light'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Number </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Little'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'little'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Toy Fish'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'fish'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Toy Cards'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'cards'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Toy Bird'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'bird'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">233</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">multiple</span>
    <span class="token attr-name">maxTagCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{label:"Light",value:"light",children:new Array(20).fill(null).map(function(c,r){return{label:"Number ".concat(r),value:r}})},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish"},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}];function e(c){console.log(c)}return a.createElement(o.Cascader,{style:{width:233},options:l,onChange:e,multiple:!0,maxTagCount:"responsive"})}}},3643:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002"],["blockquote",["p",["code","Cascader[showSearch]"]," \u6682\u4E0D\u652F\u6301\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u66F4\u591A\u4FE1\u606F\u89C1 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5547"},"#5547"]]]],"en-US":[["p","Search and select options directly."],["blockquote",["p","Now, ",["code","Cascader[showSearch]"]," doesn't support search on server, more info ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5547"},"#5547"]]]]},meta:{order:8,title:{"zh-CN":"\u641C\u7D22","en-US":"Search"},filename:"components/cascader/demo/search.md",id:"components-cascader-demo-search"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xiasha'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Xia Sha'</span><span class="token punctuation">,</span>
            disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>option <span class="token operator">=</span><span class="token operator">></span> option<span class="token punctuation">.</span>label<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span>
    <span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> filter <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xiasha'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Xia Sha'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> selectedOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> selectedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">inputValue<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">option</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>label<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
    <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
    <span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> filter <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}];function e(r,d){console.log(r,d)}function c(r,d){return d.some(function(f){return f.label.toLowerCase().indexOf(r.toLowerCase())>-1})}return a.createElement(o.Cascader,{options:l,onChange:e,placeholder:"Please select",showSearch:{filter:c},onSearch:function(d){return console.log(d)}})}}},3644:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002"]],"en-US":[["p","Cascade selection box of different sizes."]]},meta:{order:6,title:{"zh-CN":"\u5927\u5C0F","en-US":"Size"},filename:"components/cascader/demo/size.md",id:"components-cascader-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function e(c){console.log(c)}return a.createElement(a.Fragment,null,a.createElement(o.Cascader,{size:"large",options:l,onChange:e}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Cascader,{options:l,onChange:e}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Cascader,{size:"small",options:l,onChange:e}),a.createElement("br",null),a.createElement("br",null))}}},3645:function(u,h,n){u.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","suffixIcon"]," \u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807\uFF0C\u901A\u8FC7 ",["code","expandIcon"]," \u81EA\u5B9A\u4E49\u6B21\u7EA7\u83DC\u5355\u5C55\u5F00\u56FE\u6807\u3002"]],"en-US":[["p","Use ",["code","suffixIcon"]," to customize the selection box suffix icon, and use ",["code","expandIcon"]," to customize the current item expand icon."]]},meta:{order:11,debug:!0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Custom Icons"},filename:"components/cascader/demo/suffix.md",id:"components-cascader-demo-suffix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    value<span class="token punctuation">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        value<span class="token punctuation">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            value<span class="token punctuation">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
      <span class="token attr-name">suffixIcon={&lt;SmileOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>
      options<span class="token operator">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">suffixIcon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ab<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
      <span class="token attr-name">expandIcon={&lt;SmileOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>
      options<span class="token operator">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span>
      onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
      placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">expandIcon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ab<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span> <span class="token punctuation">/></span></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infrad'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'infra-design-icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhejiang'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Hangzhou'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'xihu'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'West Lake'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Jiangsu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Nanjing'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'zhonghuamen'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Zhong Hua Men'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
      <span class="token attr-name">suffixIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">suffixIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ab<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span>
      <span class="token attr-name">expandIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span>
      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">expandIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ab<span class="token punctuation">"</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var a=n(0),m=n(36),o=n(11),l=n(25),e=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];function c(r){console.log(r)}return a.createElement(a.Fragment,null,a.createElement(o.Cascader,{suffixIcon:a.createElement(l.SmileOutlined,null),options:e,onChange:c,placeholder:"Please select"}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Cascader,{suffixIcon:"ab",options:e,onChange:c,placeholder:"Please select"}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Cascader,{expandIcon:a.createElement(l.SmileOutlined,null),options:e,onChange:c,placeholder:"Please select"}),a.createElement("br",null),a.createElement("br",null),a.createElement(o.Cascader,{expandIcon:"ab",options:e,onChange:c,placeholder:"Please select"}))}}}}]);
