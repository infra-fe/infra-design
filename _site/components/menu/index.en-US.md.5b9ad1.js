(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{3292:function(e,p,t){e.exports={content:["section",["p","A versatile menu for navigation."],["h2","When To Use"],["p","Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently. Ant Design offers two navigation options: top and side. Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website."],["p","More layouts with navigation: ",["a",{title:null,href:"/components/layout"},"Layout"],"."],["h2","Notes for developers"],["ul",["li",["p","Menu is rendered as a ",["code","ul"]," element, so it only supports ",["a",{title:null,href:"https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element"},["code","li"]," and ",["code","script-supporting"]," elements"]," as children nodes\u3002Your customized node should be wrapped by ",["code","Menu.Item"],"."]],["li",["p","Menu needs to collect its node structure, so its children should be ",["code","Menu.*"]," or encapsulated HOCs."]]],["h3","Usage upgrade after 4.20.0"],function(){var s=t(0),u=t(54),a=o(t(461));function o(n){return n&&n.__esModule?n:{default:n}}return s.createElement(a.default,{message:"After version 4.20.0, we provide a simpler usage <Menu items={[...]} /> with better perfermance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 5.0."})},["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// works when >=4.20.0, recommended \u2705</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// remember to pass the key prop</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// which is required</span>
  <span class="token punctuation">{</span>
    label<span class="token punctuation">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'submenu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 3'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'submenu-item-1'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// works when &lt;4.20.0, deprecated when >=4.20.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub</span> <span class="token attr-name">menu"</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>`},["code",`// works when >=4.20.0, recommended \u2705
const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];
return <Menu items={items} />;

// works when <4.20.0, deprecated when >=4.20.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F
<Menu>
  <Menu.Item>item 1</Menu.Item>
  <Menu.Item>item 2</Menu.Item>
  <Menu.SubMenu title="sub menu">
    <Menu.Item>item 3</Menu.Item>
  </Menu.SubMenu>
</Menu>;`]],["p","The legacy demo code for version ",["code","<4.20.0"]," could be found at ",["a",{title:null,href:"https://github.com/ant-design/ant-design/tree/4.19.5/components/menu/demo"},"https://github.com/ant-design/ant-design/tree/4.19.5/components/menu/demo"],"."]],meta:{category:"Components",cols:1,type:"Navigation",title:"Menu",cover:"https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg",filename:"components/menu/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#Notes-for-developers",title:"Notes for developers"},"Notes for developers"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Menu"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","defaultOpenKeys"],["td","Array with the keys of default opened sub menus"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","defaultSelectedKeys"],["td","Array with the keys of default selected menu items"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandIcon"],["td","custom expand icon of submenu"],["td","ReactNode ","|"," ",["code","(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode"]],["td","-"],["td","4.9.0"]],["tr",["td","forceSubMenuRender"],["td","Render submenu into DOM before it becomes visible"],["td","boolean"],["td","false"],["td"]],["tr",["td","inlineCollapsed"],["td","Specifies the collapsed status when menu is inline mode"],["td","boolean"],["td","-"],["td"]],["tr",["td","inlineIndent"],["td","Indent (in pixels) of inline menu items on each level"],["td","number"],["td","24"],["td"]],["tr",["td","items"],["td","Menu item content"],["td",["a",{title:null,href:"#ItemType"},"ItemType","[","]"]],["td","-"],["td","4.20.0"]],["tr",["td","mode"],["td","Type of menu"],["td",["code","vertical"]," ","|"," ",["code","horizontal"]," ","|"," ",["code","inline"]],["td",["code","vertical"]],["td"]],["tr",["td","multiple"],["td","Allows selection of multiple items"],["td","boolean"],["td","false"],["td"]],["tr",["td","openKeys"],["td","Array with the keys of currently opened sub-menus"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","overflowedIndicator"],["td","Customized the ellipsis icon when menu is collapsed horizontally"],["td","ReactNode"],["td",["code","<EllipsisOutlined />"]],["td"]],["tr",["td","selectable"],["td","Allows selecting menu items"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","Array with the keys of currently selected menu items"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","style"],["td","Style of the root node"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","subMenuCloseDelay"],["td","Delay time to hide submenu when mouse leaves (in seconds)"],["td","number"],["td","0.1"],["td"]],["tr",["td","subMenuOpenDelay"],["td","Delay time to show submenu when mouse enters, (in seconds)"],["td","number"],["td","0"],["td"]],["tr",["td","theme"],["td","Color theme of the menu"],["td",["code","light"]," ","|"," ",["code","dark"]],["td",["code","light"]],["td"]],["tr",["td","triggerSubMenuAction"],["td","Which action can trigger submenu open/close"],["td",["code","hover"]," ","|"," ",["code","click"]],["td",["code","hover"]],["td"]],["tr",["td","onClick"],["td","Called when a menu item is clicked"],["td","function({ item, key, keyPath, domEvent })"],["td","-"],["td"]],["tr",["td","onDeselect"],["td","Called when a menu item is deselected (multiple mode only)"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","Called when sub-menus are opened or closed"],["td","function(openKeys: string","[","])"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Called when a menu item is selected"],["td","function({ item, key, keyPath, selectedKeys, domEvent })"],["td","-"],["td"]]]],["blockquote",["p","More options in ",["a",{title:null,href:"https://github.com/react-component/menu#api"},"rc-menu"]]],["h3","ItemType"],["blockquote",["p","type ItemType = ",["a",{title:null,href:"#MenuItemType"},"MenuItemType"]," | ",["a",{title:null,href:"#SubMenuType"},"SubMenuType"]," | ",["a",{title:null,href:"#MenuItemGroupType"},"MenuItemGroupType"]," | ",["a",{title:null,href:"#MenuDividerType"},"MenuDividerType"],";"]],["h4","MenuItemType"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","danger"],["td","Display the danger style"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","Whether menu item is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","The icon of the menu item"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","key"],["td","Unique ID of the menu item"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","Menu label"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","title"],["td","Set display title for collapsed item"],["td","string"],["td","-"],["td"]]]],["blockquote",["p","Note: ",["code","icon"]," is a newly added prop in ",["code","4.2.0"],". For previous versions, please use the following method to define the icon."],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.SubMenu</span>
  <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PieChartOutlined</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Option <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span>
  <span class="token operator">...</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.SubMenu</span><span class="token punctuation">></span></span>`},["code",`<Menu.Item>
  <PieChartOutlined />
  <span>Option 1</span>
</Menu.Item>
<Menu.SubMenu
  title={
    <>
      <PieChartOutlined />
      <span>Option 2</span>
    </>
  }
>
  ...
</Menu.SubMenu>`]]],["h4","SubMenuType"],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","children"],["td","Sub-menus or sub-menu items"],["td",["a",{title:null,href:"#ItemType"},"ItemType","[","]"]],["td","-"],["td"]],["tr",["td","disabled"],["td","Whether sub-menu is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","Icon of sub menu"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","key"],["td","Unique ID of the sub-menu"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","Menu label"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","popupClassName"],["td","Sub-menu class name, not working when ",["code",'mode="inline"']],["td","string"],["td","-"],["td"]],["tr",["td","popupOffset"],["td","Sub-menu offset, not working when ",["code",'mode="inline"']],["td","[","number, number]"],["td","-"],["td"]],["tr",["td","theme"],["td","Color theme of the SubMenu (inherits from Menu by default)"],["td"],["td",["code","light"]," ","|"," ",["code","dark"]],["td","-"],["td"]],["tr",["td","onTitleClick"],["td","Callback executed when the sub-menu title is clicked"],["td","function({ key, domEvent })"],["td","-"],["td"]]]],["h4","MenuItemGroupType"],["p","Define ",["code","type"]," as ",["code","group"]," to make as group:"],["pre",{lang:"ts",highlighted:`<span class="token keyword">const</span> groupItem <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// Must have</span>
  label<span class="token punctuation">:</span> <span class="token string">'My Group'</span><span class="token punctuation">,</span>
  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`const groupItem = {
  type: 'group', // Must have
  label: 'My Group',
  children: [],
};`]],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","children"],["td","Sub-menu items"],["td","MenuItem","[","]"],["td","-"],["td"]],["tr",["td","label"],["td","The title of the group"],["td","ReactNode"],["td","-"],["td"]]]],["h4","MenuDividerType"],["p","Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu. Need define the ",["code","type"]," as ",["code","divider"],"\uFF1A"],["pre",{lang:"ts",highlighted:`<span class="token keyword">const</span> dividerItem <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// Must have</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`const dividerItem = {
  type: 'divider', // Must have
};`]],["table",["thead",["tr",["th","Param"],["th","Description"],["th","Type"],["th","Default value"],["th","Version"]]],["tbody",["tr",["td","dashed"],["td","Whether line is dashed"],["td","boolean"],["td","false"],["td"]]]],["h2","FAQ"],["h3","Why will Menu's children be rendered twice?"],["p","Menu collects structure info with ",["a",{title:null,href:"https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543"},"twice-render"]," to support HOC usage. Merging into one render may cause the logic to become much more complex. Contributions to help improve the collection logic are welcomed."]]}}}]);
