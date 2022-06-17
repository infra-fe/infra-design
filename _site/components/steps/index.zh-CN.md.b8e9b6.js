(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{3352:function(t,n){t.exports={content:["section",["p","\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u4EFB\u52A1\u590D\u6742\u6216\u8005\u5B58\u5728\u5148\u540E\u5173\u7CFB\u65F6\uFF0C\u5C06\u5176\u5206\u89E3\u6210\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u4ECE\u800C\u7B80\u5316\u4EFB\u52A1\u3002"]],meta:{category:"Components",subtitle:"\u6B65\u9AA4\u6761",type:"\u5BFC\u822A",cols:1,title:"Steps",cover:"https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg",filename:"components/steps/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7B2C\u4E00\u6B65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7B2C\u4E8C\u6B65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7B2C\u4E09\u6B65<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Steps</span><span class="token punctuation">></span></span>`},["code",`<Steps>
  <Step title="\u7B2C\u4E00\u6B65" />
  <Step title="\u7B2C\u4E8C\u6B65" />
  <Step title="\u7B2C\u4E09\u6B65" />
</Steps>`]],["h3","Steps"],["p","\u6574\u4F53\u6B65\u9AA4\u6761\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","className"],["td","\u6B65\u9AA4\u6761\u7C7B\u540D"],["td","string"],["td","-"],["td"]],["tr",["td","current"],["td","\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\u3002\u5728\u5B50 Step \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","status"]," \u5C5E\u6027\u8986\u76D6\u72B6\u6001"],["td","number"],["td","0"],["td"]],["tr",["td","direction"],["td","\u6307\u5B9A\u6B65\u9AA4\u6761\u65B9\u5411\u3002\u76EE\u524D\u652F\u6301\u6C34\u5E73\uFF08",["code","horizontal"],"\uFF09\u548C\u7AD6\u76F4\uFF08",["code","vertical"],"\uFF09\u4E24\u79CD\u65B9\u5411"],["td","string"],["td",["code","horizontal"]],["td"]],["tr",["td","initial"],["td","\u8D77\u59CB\u5E8F\u53F7\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570"],["td","number"],["td","0"],["td"]],["tr",["td","labelPlacement"],["td","\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6C34\u5E73\u653E\u56FE\u6807\u53F3\u4FA7\uFF0C\u53EF\u9009 ",["code","vertical"]," \u653E\u56FE\u6807\u4E0B\u65B9"],["td","string"],["td",["code","horizontal"]],["td"]],["tr",["td","percent"],["td","\u5F53\u524D ",["code","process"]," \u6B65\u9AA4\u663E\u793A\u7684\u8FDB\u5EA6\u6761\u8FDB\u5EA6\uFF08\u53EA\u5BF9\u57FA\u672C\u7C7B\u578B\u7684 Steps \u751F\u6548\uFF09"],["td","number"],["td","-"],["td","4.5.0"]],["tr",["td","progressDot"],["td","\u70B9\u72B6\u6B65\u9AA4\u6761\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A function\uFF0ClabelPlacement \u5C06\u5F3A\u5236\u4E3A ",["code","vertical"]],["td","boolean ","|"," (iconDot, {index, status, title, description}) => ReactNode"],["td","false"],["td"]],["tr",["td","responsive"],["td","\u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5C0F\u4E8E ",["code","532px"]," \u65F6\u81EA\u52A8\u53D8\u4E3A\u5782\u76F4\u6A21\u5F0F"],["td","boolean"],["td","true"],["td"]],["tr",["td","size"],["td","\u6307\u5B9A\u5927\u5C0F\uFF0C\u76EE\u524D\u652F\u6301\u666E\u901A\uFF08",["code","default"],"\uFF09\u548C\u8FF7\u4F60\uFF08",["code","small"],"\uFF09"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","status"],["td","\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td",["code","process"]],["td"]],["tr",["td","type"],["td","\u6B65\u9AA4\u6761\u7C7B\u578B\uFF0C\u6709 ",["code","default"]," \u548C ",["code","navigation"]," \u4E24\u79CD"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","onChange"],["td","\u70B9\u51FB\u5207\u6362\u6B65\u9AA4\u65F6\u89E6\u53D1"],["td","(current) => void"],["td","-"],["td"]]]],["h3","Steps.Step"],["p","\u6B65\u9AA4\u6761\u5185\u7684\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","description"],["td","\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0\uFF0C\u53EF\u9009"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u7981\u7528\u70B9\u51FB"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","\u6B65\u9AA4\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u53EF\u9009"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","status"],["td","\u6307\u5B9A\u72B6\u6001\u3002\u5F53\u4E0D\u914D\u7F6E\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u4F7F\u7528 Steps \u7684 ",["code","current"]," \u6765\u81EA\u52A8\u6307\u5B9A\u72B6\u6001\u3002\u53EF\u9009\uFF1A",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td",["code","wait"]],["td"]],["tr",["td","subTitle"],["td","\u5B50\u6807\u9898"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","title"],["td","\u6807\u9898"],["td","ReactNode"],["td","-"],["td"]]]]]}}}]);
