(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{3399:function(n,a){n.exports={content:["article",{},["h2","\u7B2C\u4E00\u4E2A\u4F8B\u5B50"],["p","\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684 Infra Design \u7EC4\u4EF6\u7684\u5728\u7EBF codesandbox \u6F14\u793A\u3002"],["iframe",{src:"https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=light",style:"width: 100%; height: 500px; border: 0px; border-radius: 4px; overflow: hidden;",title:"antd reproduction template",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}],["h3","1. \u521B\u5EFA\u4E00\u4E2A codesandbox"],["p","\u8BBF\u95EE ",["a",{title:null,href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro"]," \u521B\u5EFA\u4E00\u4E2A codesandbox \u7684\u5728\u7EBF\u793A\u4F8B\uFF0C\u522B\u5FD8\u4E86\u4FDD\u5B58\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u3002"],["h3","2. \u4F7F\u7528\u7EC4\u4EF6"],["p","\u76F4\u63A5\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u66FF\u6362 ",["code","index.js"]," \u7684\u5185\u5BB9\uFF0C\u7528 React \u7684\u65B9\u5F0F\u76F4\u63A5\u4F7F\u7528 antd \u7EC4\u4EF6\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider<span class="token punctuation">,</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// \u7531\u4E8E antd \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\u4E3A\u4E2D\u6587</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">'antd/lib/locale/zh_CN'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'antd/dist/antd.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>

moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>date<span class="token punctuation">,</span> setDate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> handleChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">\`\u60A8\u9009\u62E9\u7684\u65E5\u671F\u662F: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY\u5E74MM\u6708DD\u65E5'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">'\u672A\u9009\u62E9'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setDate</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>zhCN<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">'100px auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          \u5F53\u524D\u65E5\u671F\uFF1A<span class="token punctuation">{</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY\u5E74MM\u6708DD\u65E5'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">'\u672A\u9009\u62E9'</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message } from 'antd';
// \u7531\u4E8E antd \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u6587\u6848\u662F\u82F1\u6587\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\u4E3A\u4E2D\u6587
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

moment.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(\`\u60A8\u9009\u62E9\u7684\u65E5\u671F\u662F: \${value ? value.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'}\`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          \u5F53\u524D\u65E5\u671F\uFF1A{date ? date.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'}
        </div>
      </div>
    </ConfigProvider>
  );
};

render(<App />, document.getElementById('root'));`]],["h3","3. \u63A2\u7D22\u66F4\u591A\u7EC4\u4EF6\u7528\u6CD5"],["p","\u4F60\u53EF\u4EE5\u5728\u7EC4\u4EF6\u9875\u9762\u7684\u5DE6\u4FA7\u83DC\u5355\u67E5\u770B\u7EC4\u4EF6\u5217\u8868\uFF0C\u6BD4\u5982 ",["a",{title:null,href:"/components/alert"},"Alert"]," \u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u6587\u6863\u4E2D\u63D0\u4F9B\u4E86\u5404\u7C7B\u6F14\u793A\uFF0C\u6700\u4E0B\u65B9\u6709\u7EC4\u4EF6 API \u6587\u6863\u53EF\u4EE5\u67E5\u9605\u3002\u5728\u4EE3\u7801\u6F14\u793A\u90E8\u5206\u627E\u5230\u7B2C\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u70B9\u51FB\u53F3\u4E0B\u89D2\u7684\u56FE\u6807\u5C55\u5F00\u4EE3\u7801\u3002"],["p","\u7136\u540E\u4F9D\u7167\u6F14\u793A\u4EE3\u7801\u7684\u5199\u6CD5\uFF0C\u5728\u4E4B\u524D\u7684 codesandbox \u91CC\u4FEE\u6539 ",["code","index.js"],"\uFF0C\u9996\u5148\u5728 ",["code","import"]," \u5185\u5F15\u5165 Alert \u7EC4\u4EF6\uFF1A"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { ConfigProvider, DatePicker, message } from 'antd';</span>
<span class="token inserted">+ import { ConfigProvider, DatePicker, message, Alert } from 'antd';</span>`},["code",`- import { ConfigProvider, DatePicker, message } from 'antd';
+ import { ConfigProvider, DatePicker, message, Alert } from 'antd';`]],["p","\u7136\u540E\u5728 ",["code","render"]," \u5185\u6DFB\u52A0\u76F8\u5E94\u7684 jsx \u4EE3\u7801\uFF1A"],["pre",{lang:"diff",highlighted:`  &lt;DatePicker onChange={value => this.handleChange(value)} />
  &lt;div style={{ marginTop: 16 }}>
<span class="token deleted">-   \u5F53\u524D\u65E5\u671F\uFF1A{date ? date.format('YYYY-MM-DD') : '\u672A\u9009\u62E9'}</span>
<span class="token inserted">+   &lt;Alert message="\u5F53\u524D\u65E5\u671F" description={date ? date.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'} /></span>
  &lt;/div>`},["code",`  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 16 }}>
-   \u5F53\u524D\u65E5\u671F\uFF1A{date ? date.format('YYYY-MM-DD') : '\u672A\u9009\u62E9'}
+   <Alert message="\u5F53\u524D\u65E5\u671F" description={date ? date.format('YYYY\u5E74MM\u6708DD\u65E5') : '\u672A\u9009\u62E9'} />
  </div>`]],["p","\u9009\u62E9\u4E00\u4E2A\u65E5\u671F\uFF0C\u5728\u53F3\u4FA7\u9884\u89C8\u533A\u5C31\u53EF\u4EE5\u770B\u5230\u5982\u56FE\u7684\u6548\u679C\u3002"],["p",["img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/ZosQjL9pqe/e6179c89-21a9-44c9-aea4-3cc04af7ef25.png",alt:"codesandbox screenshot"}]],["p","\u597D\u7684\uFF0C\u73B0\u5728\u4F60\u5DF2\u7ECF\u4F1A\u4F7F\u7528\u57FA\u672C\u7684 antd \u7EC4\u4EF6\u4E86\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7EE7\u7EED\u63A2\u7D22\u5176\u4ED6\u7EC4\u4EF6\u7684\u7528\u6CD5\u3002\u5982\u679C\u4F60\u9047\u5230\u7EC4\u4EF6\u7684 bug\uFF0C\u4E5F\u63A8\u8350\u5EFA\u4E00\u4E2A\u53EF\u91CD\u73B0\u7684 codesandbox \u6765\u62A5\u544A bug\u3002"],["h3","4. \u4E0B\u4E00\u6B65"],["p","\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4F60\u4F1A\u9700\u8981\u6784\u5EFA\u3001\u8C03\u8BD5\u3001\u4EE3\u7406\u3001\u6253\u5305\u90E8\u7F72\u7B49\u4E00\u7CFB\u5217\u5DE5\u7A0B\u5316\u7684\u9700\u6C42\u3002\u60A8\u53EF\u4EE5\u9605\u8BFB\u540E\u9762\u7684\u6587\u6863\u6216\u8005\u4F7F\u7528\u4EE5\u4E0B\u811A\u624B\u67B6\u548C\u8303\u4F8B\uFF1A"],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Infra Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/d2-projects/d2-admin"},"d2-admin"]]],["li",["p","\u66F4\u591A\u811A\u624B\u67B6\u53EF\u4EE5\u67E5\u770B ",["a",{title:null,href:"http://scaffold.ant.design/"},"\u811A\u624B\u67B6\u5E02\u573A"]]]],["h2","\u6309\u9700\u52A0\u8F7D"],["p",["code","antd"]," \u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 tree shaking\uFF0C\u5BF9\u4E8E js \u90E8\u5206\uFF0C\u76F4\u63A5\u5F15\u5165 ",["code","import { Button } from 'antd'"]," \u5C31\u4F1A\u6709\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C\u3002"],["p","\u5982\u679C\u4F60\u5728\u5F00\u53D1\u73AF\u5883\u7684\u63A7\u5236\u53F0\u770B\u5230\u4E0B\u9762\u7684\u63D0\u793A\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u8FD8\u5728\u4F7F\u7528 ",["code","webpack@1.x"]," \u6216\u8005 tree shaking \u5931\u6548\uFF0C\u8BF7\u5347\u7EA7\u6216\u68C0\u67E5\u76F8\u5173\u914D\u7F6E\u3002"],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."]],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"\u63A7\u5236\u53F0\u8B66\u544A"}]],["h2","\u81EA\u884C\u6784\u5EFA"],["p","\u5982\u679C\u60F3\u81EA\u5DF1\u7EF4\u62A4\u5DE5\u4F5C\u6D41\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",["a",{title:null,href:"https://webpack.github.io/"},"webpack"]," \u8FDB\u884C\u6784\u5EFA\u548C\u8C03\u8BD5\uFF0C\u53EF\u4EE5\u4F7F\u7528 React \u751F\u6001\u5708\u4E2D\u7684 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#react-tools"},"\u5404\u79CD\u811A\u624B\u67B6"]," \u8FDB\u884C\u5F00\u53D1\u3002"],["p","\u76EE\u524D\u793E\u533A\u4E5F\u6709\u5F88\u591A\u57FA\u4E8E antd \u5B9A\u5236\u7684 ",["a",{title:null,href:"http://scaffold.ant.design/"},"React \u811A\u624B\u67B6"],"\uFF0C\u6B22\u8FCE\u8FDB\u884C\u8BD5\u7528\u548C\u8D21\u732E\u3002"]],meta:{order:2,title:"\u5FEB\u901F\u4E0A\u624B",filename:"docs/react/getting-started.zh-CN.md"},description:["section",["p","Infra Design React \u81F4\u529B\u4E8E\u63D0\u4F9B\u7ED9\u7A0B\u5E8F\u5458",["strong","\u6109\u60A6"],"\u7684\u5F00\u53D1\u4F53\u9A8C\u3002"],["blockquote",["p","\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u63A8\u8350\u5148\u5B66\u4E60 ",["a",{title:null,href:"http://reactjs.org"},"React"]," \u548C ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"\uFF0C\u5E76\u6B63\u786E\u5B89\u88C5\u548C\u914D\u7F6E\u4E86 ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"]," v8 \u6216\u4EE5\u4E0A\u3002\u5B98\u65B9\u6307\u5357\u5047\u8BBE\u4F60\u5DF2\u4E86\u89E3\u5173\u4E8E HTML\u3001CSS \u548C JavaScript \u7684\u4E2D\u7EA7\u77E5\u8BC6\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u5B8C\u5168\u638C\u63E1\u4E86 React \u5168\u5BB6\u6876\u7684\u6B63\u786E\u5F00\u53D1\u65B9\u5F0F\u3002\u5982\u679C\u4F60\u521A\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF\u6216\u8005 React\uFF0C\u5C06 UI \u6846\u67B6\u4F5C\u4E3A\u4F60\u7684\u7B2C\u4E00\u6B65\u53EF\u80FD\u4E0D\u662F\u6700\u597D\u7684\u4E3B\u610F\u3002"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7B2C\u4E00\u4E2A\u4F8B\u5B50",title:"\u7B2C\u4E00\u4E2A\u4F8B\u5B50"},"\u7B2C\u4E00\u4E2A\u4F8B\u5B50"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6309\u9700\u52A0\u8F7D",title:"\u6309\u9700\u52A0\u8F7D"},"\u6309\u9700\u52A0\u8F7D"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u81EA\u884C\u6784\u5EFA",title:"\u81EA\u884C\u6784\u5EFA"},"\u81EA\u884C\u6784\u5EFA"]]]}}}]);
