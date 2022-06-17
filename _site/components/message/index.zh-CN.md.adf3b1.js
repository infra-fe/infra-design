(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{3296:function(n,t){n.exports={content:["section",["p","\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002"]],["li",["p","\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002"]]]],meta:{category:"Components",subtitle:"\u5168\u5C40\u63D0\u793A",type:"\u53CD\u9988",noinstant:!0,title:"Message",cover:"https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg",filename:"components/message/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A"],["ul",["li",["p",["code","message.success(content, [duration], onClose)"]]],["li",["p",["code","message.error(content, [duration], onClose)"]]],["li",["p",["code","message.info(content, [duration], onClose)"]]],["li",["p",["code","message.warning(content, [duration], onClose)"]]],["li",["p",["code","message.warn(content, [duration], onClose)"]," // alias of warning"]],["li",["p",["code","message.loading(content, [duration], onClose)"]]]],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","content"],["td","\u63D0\u793A\u5185\u5BB9"],["td","ReactNode ","|"," config"],["td","-"]],["tr",["td","duration"],["td","\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED"],["td","number"],["td","3"]],["tr",["td","onClose"],["td","\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"],["td","function"],["td","-"]]]],["p","\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B promise \u63A5\u53E3\u3002"],["ul",["li",["p",["code","message[level](content, [duration]).then(afterClose)"]]],["li",["p",["code","message[level](content, [duration], onClose).then(afterClose)"]]]],["p","\u5176\u4E2D ",["code","message[level]"]," \u662F\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u3002",["code","then"]," \u63A5\u53E3\u8FD4\u56DE\u503C\u662F Promise\u3002"],["p","\u4E5F\u53EF\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A"],["ul",["li",["p",["code","message.open(config)"]]],["li",["p",["code","message.success(config)"]]],["li",["p",["code","message.error(config)"]]],["li",["p",["code","message.info(config)"]]],["li",["p",["code","message.warning(config)"]]],["li",["p",["code","message.warn(config)"]," // alias of warning"]],["li",["p",["code","message.loading(config)"]]]],["p",["code","config"]," \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","className"],["td","\u81EA\u5B9A\u4E49 CSS class"],["td","string"],["td","-"]],["tr",["td","content"],["td","\u63D0\u793A\u5185\u5BB9"],["td","ReactNode"],["td","-"]],["tr",["td","duration"],["td","\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED"],["td","number"],["td","3"]],["tr",["td","icon"],["td","\u81EA\u5B9A\u4E49\u56FE\u6807"],["td","ReactNode"],["td","-"]],["tr",["td","key"],["td","\u5F53\u524D\u63D0\u793A\u7684\u552F\u4E00\u6807\u5FD7"],["td","string ","|"," number"],["td","-"]],["tr",["td","style"],["td","\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F"],["td",["a",{title:null,href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"CSSProperties"]],["td","-"]],["tr",["td","onClick"],["td","\u70B9\u51FB message \u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"],["td","function"],["td","-"]],["tr",["td","onClose"],["td","\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"],["td","function"],["td","-"]]]],["h3","\u5168\u5C40\u65B9\u6CD5"],["p","\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A"],["ul",["li",["p",["code","message.config(options)"]]],["li",["p",["code","message.destroy()"]]]],["blockquote",["p","\u4E5F\u53EF\u901A\u8FC7 ",["code","message.destroy(key)"]," \u6765\u5173\u95ED\u4E00\u6761\u6D88\u606F\u3002"]],["h4","message.config"],["blockquote",["p","\u5F53\u4F60\u4F7F\u7528 ",["code","ConfigProvider"]," \u8FDB\u884C\u5168\u5C40\u5316\u914D\u7F6E\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u9ED8\u8BA4\u81EA\u52A8\u5F00\u542F RTL \u6A21\u5F0F\u3002(4.3.0+)"],["p","\u5F53\u4F60\u60F3\u5355\u72EC\u4F7F\u7528\uFF0C\u53EF\u901A\u8FC7\u5982\u4E0B\u8BBE\u7F6E\u5F00\u542F RTL \u6A21\u5F0F\u3002"]],["pre",{lang:"js",highlighted:`message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  top<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  maxCount<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  rtl<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  prefixCls<span class="token punctuation">:</span> <span class="token string">'my-message'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: 'my-message',
});`]],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","duration"],["td","\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2"],["td","number"],["td","3"],["td"]],["tr",["td","getContainer"],["td","\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E"],["td","() => HTMLElement"],["td","() => document.body"],["td"]],["tr",["td","maxCount"],["td","\u6700\u5927\u663E\u793A\u6570, \u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u6700\u65E9\u7684\u6D88\u606F\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED"],["td","number"],["td","-"],["td"]],["tr",["td","prefixCls"],["td","\u6D88\u606F\u8282\u70B9\u7684 className \u524D\u7F00"],["td","string"],["td",["code","ant-message"]],["td","4.5.0"]],["tr",["td","rtl"],["td","\u662F\u5426\u5F00\u542F RTL \u6A21\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","top"],["td","\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E"],["td","number"],["td","8"],["td"]]]],["h2","FAQ"],["h3","\u4E3A\u4EC0\u4E48 message \u4E0D\u80FD\u83B7\u53D6 context\u3001redux \u7684\u5185\u5BB9\u548C ConfigProvider \u7684 ",["code","locale/prefixCls"]," \u914D\u7F6E\uFF1F"],["p","\u76F4\u63A5\u8C03\u7528 message \u65B9\u6CD5\uFF0Cantd \u4F1A\u901A\u8FC7 ",["code","ReactDOM.render"]," \u52A8\u6001\u521B\u5EFA\u65B0\u7684 React \u5B9E\u4F53\u3002\u5176 context \u4E0E\u5F53\u524D\u4EE3\u7801\u6240\u5728 context \u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u800C\u65E0\u6CD5\u83B7\u53D6 context \u4FE1\u606F\u3002"],["p","\u5F53\u4F60\u9700\u8981 context \u4FE1\u606F\uFF08\u4F8B\u5982 ConfigProvider \u914D\u7F6E\u7684\u5185\u5BB9\uFF09\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","message.useMessage"]," \u65B9\u6CD5\u4F1A\u8FD4\u56DE ",["code","api"]," \u5B9E\u4F53\u4EE5\u53CA ",["code","contextHolder"]," \u8282\u70B9\u3002\u5C06\u5176\u63D2\u5165\u5230\u4F60\u9700\u8981\u83B7\u53D6 context \u4F4D\u7F6E\u5373\u53EF\uFF1A"],["pre",{lang:"tsx",highlighted:`<span class="token keyword">const</span> <span class="token punctuation">[</span>api<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

return <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Context1<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Ant"</span><span class="token operator">></span>
    {<span class="token operator">/</span><span class="token operator">*</span> contextHolder \u5728 Context1 \u5185\uFF0C\u5B83\u53EF\u4EE5\u83B7\u5F97 Context1 \u7684 context <span class="token operator">*</span><span class="token operator">/</span>}
    {contextHolder}
    <span class="token operator">&lt;</span>Context2<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token string">"Design"</span><span class="token operator">></span>
      {<span class="token operator">/</span><span class="token operator">*</span> contextHolder \u5728 Context2 \u5916\uFF0C\u56E0\u800C\u4E0D\u4F1A\u83B7\u5F97 Context2 \u7684 context <span class="token operator">*</span><span class="token operator">/</span>}
    <span class="token operator">&lt;</span><span class="token operator">/</span>Context2<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Context1<span class="token punctuation">.</span>Provider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`const [api, contextHolder] = message.useMessage();

return (
  <Context1.Provider value="Ant">
    {/* contextHolder \u5728 Context1 \u5185\uFF0C\u5B83\u53EF\u4EE5\u83B7\u5F97 Context1 \u7684 context */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder \u5728 Context2 \u5916\uFF0C\u56E0\u800C\u4E0D\u4F1A\u83B7\u5F97 Context2 \u7684 context */}
    </Context2.Provider>
  </Context1.Provider>
);`]],["p",["strong","\u5F02\u540C\uFF1A"],"\u901A\u8FC7 hooks \u521B\u5EFA\u7684 ",["code","contextHolder"]," \u5FC5\u987B\u63D2\u5165\u5230\u5B50\u5143\u7D20\u8282\u70B9\u4E2D\u624D\u4F1A\u751F\u6548\uFF0C\u5F53\u4F60\u4E0D\u9700\u8981\u4E0A\u4E0B\u6587\u4FE1\u606F\u65F6\u8BF7\u76F4\u63A5\u8C03\u7528\u3002"],["h3","\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E prefixCls \uFF1F"],["p","\u4F60\u53EF\u4EE5\u901A\u8FC7 ",["a",{title:null,href:"/components/config-provider/#ConfigProvider.config()-4.13.0+"},["code","ConfigProvider.config"]]," \u8FDB\u884C\u8BBE\u7F6E\u3002"]]}}}]);
