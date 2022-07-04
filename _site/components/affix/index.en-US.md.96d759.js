(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{3195:function(t,n){t.exports={content:["section",["p","Wrap Affix around another component to make it stick the viewport."],["h2","When To Use"],["p","On longer web pages, it's helpful to stick component into the viewport. This is common for menus and actions."],["p","Please note that Affix should not cover other content on the page, especially when the size of the viewport is small."]],meta:{category:"Components",type:"Navigation",title:"Affix",cover:"https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg",filename:"components/affix/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","offsetBottom"],["td","Offset from the bottom of the viewport (in pixels)"],["td","number"],["td","-"]],["tr",["td","offsetTop"],["td","Offset from the top of the viewport (in pixels)"],["td","number"],["td","0"]],["tr",["td","target"],["td","Specifies the scrollable area DOM node"],["td","() => HTMLElement"],["td","() => window"]],["tr",["td","onChange"],["td","Callback for when Affix state is changed"],["td","(affixed?: boolean) => void"],["td","-"]]]],["p",["strong","Note:"]," Children of ",["code","Affix"]," must not have the property ",["code","position: absolute"],", but you can set ",["code","position: absolute"]," on ",["code","Affix"]," itself:"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> y<span class="token punctuation">,</span> left<span class="token punctuation">:</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>`},["code","<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>"]],["h2","FAQ"],["h3","When binding container with ",["code","target"]," in Affix, elements sometimes move out of the container."],["p","We only listen to container scroll events for performance consideration. You can add custom listeners if you still want to: ",["a",{title:null,href:"https://codesandbox.io/s/2xyj5zr85p"},"https://codesandbox.io/s/2xyj5zr85p"]],["p","Related issues\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3938"},"#3938"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5642"},"#5642"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16120"},"#16120"]],["h3","When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element ",["code","left"]," is incorrect."],["p","Affix is \u200B\u200Bgenerally only applicable to areas with one-way scrolling, and only supports usage in vertical scrolling containers. If you want to use it in a horizontal container, you can consider implementing with the native ",["code","position: sticky"]," property."],["p","Related issues\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/29108"},"#29108"]]]}}}]);
