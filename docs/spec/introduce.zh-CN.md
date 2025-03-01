---
category: Infra Design
order: 0
title: 介绍
---

<div style="text-align:center;margin:40px 0;">
  <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ">
</div>

蚂蚁集团的企业级产品是一个庞大且复杂的系统，数量多且功能复杂，而且变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。

随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁集团体验技术部）经过大量项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 —— Infra Design。基于「自然」、「确定性」、「意义感」、「生长性」四大[设计价值观](/docs/spec/values)，通过模块化解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。

---

## 设计资源

我们提供完善的设计指引、最佳实践、设计资源和设计工具，来帮助设计者快速产出高质量产品原型。

- [设计价值观](/docs/spec/values)
- [设计模式](/docs/spec/overview)
- [可视化](/docs/spec/visual)
- [插画](/docs/spec/illustration)
- [设计资源](/docs/resources)
- [Sketch 工具集](http://kitchen.alipay.com/)
- [文章](/docs/resources#%E6%96%87%E7%AB%A0)

## 前端实现

我们采用 [React](http://facebook.github.io/react/) 封装了一套 Infra Design 的组件库，也欢迎社区其他框架的实现版本。

```__react
import {
  ExportOutlined,
} from 'infra-design-icons';

const LinkIcon = () => (
  <ExportOutlined className="outside-link-icon" />
);

const LinksList = () => (
  <ul>
    <li>
      <a href="/docs/react/introduce" target="_blank">Infra Design of React</a>
      （官方实现）
    </li>
    <li>
      <a href="http://ng.ant.design" target="_blank">
        NG-ZORRO - Infra Design of Angular
      </a>
    </li>
    <li>
      <a href="http://ng.mobile.ant.design" target="_blank">
        NG-ZORRO-MOBILE - Infra Design Mobile of Angular
      </a>
    </li>
    <li>
      <a href="http://antdv.com" target="_blank">Infra Design of Vue</a>
    </li>
    <li>
      <a href="https://ant-design-blazor.github.io/" target="_blank">
        Infra Design Blazor
      </a>
    </li>
    <li>
      <a href="https://ecomfe.github.io/santd" target="_blank">
        San UI Toolkit for Infra Design
      </a>
    </li>
    <li>
      <a href="https://github.com/priornix/antizer" target="_blank">
        antizer (ClojureScript)
      </a>
    </li>
  </ul>
);

ReactDOM.render(<LinksList />, mountNode);
```

## 谁在使用

- [蚂蚁集团](http://www.antgroup.com/)
- [阿里巴巴](http://www.alibaba.com/)
- [腾讯](http://www.tencent.com)
- [百度](http://www.baidu.com)
- [口碑](http://www.koubei.com/)
- [美团](http://www.meituan.com)
- [滴滴](http://www.xiaojukeji.com/)
- [饿了么](https://www.ele.me/)
- [其他用户](https://github.com/ant-design/ant-design/issues/477)

> 如果你的公司和产品使用了 Infra Design，欢迎到 [这里](https://github.com/ant-design/ant-design/issues/477) 留言。

## 社区评价

- 知乎：[如何评价 Infra Design 这个项目？](https://www.zhihu.com/question/33629737)
- Hacknews: [Show HN: Antd – A set of high-quality React components](https://news.ycombinator.com/item?id=13053137)
- Alligator: [Crafting Beautiful UIs in React Using Infra Design](https://alligator.io/react/beautiful-uis-ant-design/)
- [漫谈 Material Design & Infra Design](http://dwbbb.com/blog/MaterialDesignAntDesign/)
- [Introduction to Infra Design](https://blog.logrocket.com/introduction-to-ant-design/)
- [Build a React App with Infra Design Principles](https://developer.okta.com/blog/2020/09/16/ant-design-react-app)
- [Meet Antd, an enterprise React UI library](https://medium.com/javascript-in-plain-english/antd-library-what-why-useful-or-not-5fec225b639d)

## 如何贡献

我们欢迎任何形式的贡献，有任何建议或意见，请给我们 [提问](https://github.com/ant-design/ant-design/issues)。
