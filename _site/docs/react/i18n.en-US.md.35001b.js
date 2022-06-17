(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{3399:function(t,n){t.exports={content:["article",["p","The default language of ",["code","antd@2.x"]," is currently English. If you wish to use other languages, follow the instructions below."],["h2","ConfigProvider"],["p",["code","antd"]," provides a React Component ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"]," for configuring antd locale text globally."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> frFR <span class="token keyword">from</span> <span class="token string">'antd/lib/locale/fr_FR'</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>frFR<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';
import frFR from 'antd/lib/locale/fr_FR';

return (
  <ConfigProvider locale={frFR}>
    <App />
  </ConfigProvider>
);`]],["p","You can see the complete configuration here: ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"],"."],["p","Note: ",["code","fr_FR"]," is the filename, the following table also follows the same rules."],["p","The following languages are currently supported:"],["h3","Supported languages:"],["table",["thead",["tr",["th","Language"],["th","Filename"]]],["tbody",["tr",["td","Arabic"],["td","ar_EG"]],["tr",["td","Azerbaijani"],["td","az_AZ"]],["tr",["td","Bulgarian"],["td","bg_BG"]],["tr",["td","Bangla (Bangladesh)"],["td","bn_BD"]],["tr",["td","Belarusian"],["td","by_BY"]],["tr",["td","Catalan"],["td","ca_ES"]],["tr",["td","Czech"],["td","cs_CZ"]],["tr",["td","Danish"],["td","da_DK"]],["tr",["td","German"],["td","de_DE"]],["tr",["td","Greek"],["td","el_GR"]],["tr",["td","English (United Kingdom)"],["td","en_GB"]],["tr",["td","English"],["td","en_US"]],["tr",["td","Spanish"],["td","es_ES"]],["tr",["td","Estonian"],["td","et_EE"]],["tr",["td","Persian"],["td","fa_IR"]],["tr",["td","Finnish"],["td","fi_FI"]],["tr",["td","French (Belgium)"],["td","fr_BE"]],["tr",["td","French (Canada)"],["td","fr_CA"]],["tr",["td","French (France)"],["td","fr_FR"]],["tr",["td","Irish (Ireland)"],["td","ga_IE"]],["tr",["td","Galician (Spain)"],["td","gl_ES"]],["tr",["td","Hebrew"],["td","he_IL"]],["tr",["td","Hindi"],["td","hi_IN"]],["tr",["td","Croatian"],["td","hr_HR"]],["tr",["td","Hungarian"],["td","hu_HU"]],["tr",["td","Armenian"],["td","hy_AM"]],["tr",["td","Indonesian"],["td","id_ID"]],["tr",["td","Italian"],["td","it_IT"]],["tr",["td","Icelandic"],["td","is_IS"]],["tr",["td","Japanese"],["td","ja_JP"]],["tr",["td","Georgian"],["td","ka_GE"]],["tr",["td","Kurdish (Kurmanji)"],["td","kmr_IQ"]],["tr",["td","Kannada"],["td","kn_IN"]],["tr",["td","Kazakh"],["td","kk_KZ"]],["tr",["td","Khmer"],["td","km_KH"]],["tr",["td","Korean"],["td","ko_KR"]],["tr",["td","Lithuanian"],["td","lt_LT"]],["tr",["td","Latvian"],["td","lv_LV"]],["tr",["td","Macedonian"],["td","mk_MK"]],["tr",["td","Malayalam (India)"],["td","ml_IN"]],["tr",["td","Mongolian"],["td","mn_MN"]],["tr",["td","Malay (Malaysia)"],["td","ms_MY"]],["tr",["td","Norwegian"],["td","nb_NO"]],["tr",["td","Nepal"],["td","ne_NP"]],["tr",["td","Dutch (Belgium)"],["td","nl_BE"]],["tr",["td","Dutch"],["td","nl_NL"]],["tr",["td","Polish"],["td","pl_PL"]],["tr",["td","Portuguese (Brazil)"],["td","pt_BR"]],["tr",["td","Portuguese"],["td","pt_PT"]],["tr",["td","Romanian"],["td","ro_RO"]],["tr",["td","Russian"],["td","ru_RU"]],["tr",["td","Slovak"],["td","sk_SK"]],["tr",["td","Serbian"],["td","sr_RS"]],["tr",["td","Slovenian"],["td","sl_SI"]],["tr",["td","Swedish"],["td","sv_SE"]],["tr",["td","Tamil"],["td","ta_IN"]],["tr",["td","Thai"],["td","th_TH"]],["tr",["td","Turkish"],["td","tr_TR"]],["tr",["td","Turkmen"],["td","tk_TK"]],["tr",["td","Urdu (Pakistan)"],["td","ur_PK"]],["tr",["td","Ukrainian"],["td","uk_UA"]],["tr",["td","Vietnamese"],["td","vi_VN"]],["tr",["td","Chinese (Simplified)"],["td","zh_CN"]],["tr",["td","Chinese (Traditional)"],["td","zh_HK"]],["tr",["td","Chinese (Traditional)"],["td","zh_TW"]]]],["p","See more usage at ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"],"."],["h2","Adding new language"],["p","If your language is not in above list, feel free to create a locale package based on the ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale/en_US.tsx"},"en_US"]," lanugage pack and send us a pull request. For reference, you can refer to the pull request of adding the ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/21387"},"Azerbaijani"]," language as a sample."],["p","Do it step by step:"],["ol",["li",["p","Fork ",["code","antd"]," and git clone to local, switch to ",["code","feature"]," branch, pull it to make sure it's up-to-date, create a new branch based on ",["code","feature"]," branch, all work will be done in it."],["pre",{lang:"bash",highlighted:`<span class="token function">git</span> clone git@github.com:<span class="token operator">&lt;</span>your organization<span class="token operator">></span>/ant-design.git
<span class="token function">cd</span> ant-design/
<span class="token function">git</span> remote add upstream origin git@github.com:ant-design/ant-design.git
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>your new branch name<span class="token operator">></span>`},["code",`git clone git@github.com:<your organization>/ant-design.git
cd ant-design/
git remote add upstream origin git@github.com:ant-design/ant-design.git
git checkout -b <your new branch name>`]]],["li",["p","Add the language support for ",["a",{title:null,href:"https://github.com/react-component/picker"},"rc-picker"],", for example ",["a",{title:null,href:"https://github.com/react-component/picker/blob/master/src/locale/en_US.ts"},"this"],"."]],["li",["p","Add the language support for ",["a",{title:null,href:"https://github.com/react-component/pagination"},"rc-pagination"],", for example ",["a",{title:null,href:"https://github.com/react-component/pagination/blob/master/src/locale/en_US.js"},"this"],"."]],["li",["p","Wait for ",["code","rc-picker"]," and ",["code","rc-pagination"]," to release the new version containing the above."]],["li",["p","Update the ",["code","rc-picker"]," and ",["code","rc-pagination"]," versions in ",["code","antd"]," and add the remaining other necessary content for the language. for example ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/21387"},"Azerbaijani PR"],"."]],["li",["p","Add a test case for the language in ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/__tests__/index.test.js"},"index.test.js"],"."]],["li",["p","update snapshots, you may also need to delete ",["code","node_modules"],", lock files (",["code","yarn.lock"]," or ",["code","package-lock.json"],") and reinstall at first."],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> run <span class="token function">test</span> -- components/locale-provider -u'},["code","npm run test -- components/locale-provider -u"]]],["li",["p","Add the language to i18n list ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/docs/react/i18n.en-US.md"},"docs/react/i18n.en-US.md"]," and ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/docs/react/i18n.zh-CN.md"},"docs/react/i18n.zh-CN.md"],"."]],["li",["p","Watch out the CI status, and if it failed, look at the logs and make some changes until it all passes."]],["li",["p","Ok, now everything is ready for review."]]]],meta:{order:10,title:"Internationalization",filename:"docs/react/i18n.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#ConfigProvider",title:"ConfigProvider"},"ConfigProvider"]],["li",["a",{className:"bisheng-toc-h2",href:"#Adding-new-language",title:"Adding new language"},"Adding new language"]]]}}}]);
