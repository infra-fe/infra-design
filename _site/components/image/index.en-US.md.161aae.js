(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{3274:function(n,t){n.exports={content:["section",["p","Previewable image."],["h2","When To Use"],["ul",["li",["p","When you need to display pictures."]],["li",["p","Display when loading a large image or fault tolerant handling when loading fail."]]]],meta:{category:"Components",type:"Data Display",title:"Image",cols:2,cover:"https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",filename:"components/image/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","alt"],["td","Image description"],["td","string"],["td","-"],["td","4.6.0"]],["tr",["td","fallback"],["td","Load failure fault-tolerant src"],["td","string"],["td","-"],["td","4.6.0"]],["tr",["td","height"],["td","Image height"],["td","string ","|"," number"],["td","-"],["td","4.6.0"]],["tr",["td","placeholder"],["td","Load placeholder, use default placeholder when set ",["code","true"]],["td","ReactNode"],["td","-"],["td","4.6.0"]],["tr",["td","preview"],["td","preview config, disabled when ",["code","false"]],["td","boolean ","|"," ",["a",{title:null,href:"#previewType"},"previewType"]],["td","true"],["td","4.6.0 ",["a",{title:null,href:"#previewType"},"previewType"],":4.7.0"]],["tr",["td","src"],["td","Image path"],["td","string"],["td","-"],["td","4.6.0"]],["tr",["td","width"],["td","Image width"],["td","string ","|"," number"],["td","-"],["td","4.6.0"]],["tr",["td","onError"],["td","Load failed callback"],["td","(event: Event) => void"],["td","-"],["td","4.12.0"]],["tr",["td","rootClassName"],["td","add custom className for image root DOM and preview mode root DOM"],["td","string"],["td","-"],["td","4.20.0"]]]],["h3","previewType"],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
  visible<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token punctuation">;</span>
  onVisibleChange<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>visible<span class="token punctuation">,</span> prevVisible<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  getContainer<span class="token operator">?</span><span class="token punctuation">:</span> string <span class="token operator">|</span> HTMLElement <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// v4.8.0</span>
  src<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// v4.10.0</span>
  mask<span class="token operator">?</span><span class="token punctuation">:</span> ReactNode<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// v4.9.0</span>
  maskClassName<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// v4.11.0</span>
  current<span class="token operator">?</span><span class="token punctuation">:</span> number<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// v4.12.0 Only support PreviewGroup</span>
  countRender<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>current<span class="token punctuation">:</span> number<span class="token punctuation">,</span> total<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> string  <span class="token comment" spellcheck="true">// v4.20.0 Only support PreviewGroup</span>
<span class="token punctuation">}</span>`},["code",`{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement); // v4.8.0
  src?: string; // v4.10.0
  mask?: ReactNode; // v4.9.0
  maskClassName?: string; // v4.11.0
  current?: number; // v4.12.0 Only support PreviewGroup
  countRender?: (current: number, total: number) => string  // v4.20.0 Only support PreviewGroup
}`]],["p","Other attributes ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes"},"<","img>"]]]}}}]);
