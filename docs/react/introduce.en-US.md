---
order: 0
title: Infra Design of React
---

Following the Infra Design specification, we developed a React UI library `infrad` that contains a set of high quality components and demos for building rich, interactive user interfaces.

<div class="pic-plus">
  <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <span>+</span>
 <img width="160" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  margin: 0 20px;
  color: #aaa;
  font-size: 30px;
}
</style>

---

## ✨ Features

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

Polyfills are needed for IE browsers. We recommend [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) for it. You can set `targets` config if you are using [umi](http://umijs.org/).

> We drop support of IE8 after `antd@2.0`, We drop support of React 15 and IE9/10 after `antd@4.0`,

## Version

- Stable: [![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)

You can subscribe to this feed for new version notifications: https://github.com/ant-design/ant-design/releases.atom

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install infrad
```

```bash
$ yarn add infrad
```

If you are in a bad network environment, you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).

### Import in Browser

Add `script` and `link` tags in your browser and use the global variable `antd`.

We provide `antd.js` `antd.css` and `antd.min.js` `antd.min.css` under `antd/dist` in antd's npm package. You can also download these files directly from [![CDNJS](https://img.shields.io/cdnjs/v/antd.svg?style=flat-square)](https://cdnjs.com/libraries/antd), [![](https://data.jsdelivr.com/v1/package/npm/antd/badge)](https://www.jsdelivr.com/package/npm/antd) or [unpkg](https://unpkg.com/antd/dist).

> **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as [webpack](https://webpack.github.io/), which will make it easy to import only the parts of antd that you are using.

> Note: you should import react/react-dom/moment before using antd.js.

## Usage

```jsx
import { DatePicker } from 'infrad';

ReactDOM.render(<DatePicker />, mountNode);
```

And import stylesheets manually:

```jsx
import 'infrad/dist/antd.css'; // or 'infrad/dist/antd.less'
```

### Use modularized infrad

`infrad` supports ES modules tree shaking by default for JS part.

### TypeScript

`infrad` provides a built-in ts definition, don't install `@types/infrad`.

## Links

- [Home page](/)
- [Components](/components/overview)
- [Infra Design Pro](https://pro.ant.design/)
- [Infra Design Charts](https://charts.ant.design)
- [Change Log](/changelog)
- [rc-components](http://react-component.github.io/)
- [Mobile UI](http://mobile.ant.design)
- [Infra Design Icons](https://github.com/ant-design/ant-design-icons)
- [Infra Design Colors](https://github.com/ant-design/ant-design-colors)
- [Infra Design Pro Layout](https://github.com/ant-design/ant-design-pro-layout)
- [Infra Design Pro Blocks](https://github.com/ant-design/pro-blocks)
- [Dark Theme](https://github.com/ant-design/ant-design-dark-theme)
- [Landing Pages](https://landing.ant.design)
- [Motion](https://motion.ant.design)
- [Scaffold Market](http://scaffold.ant.design)
- [Developer Instruction](https://github.com/ant-design/ant-design/wiki/Development)
- [Versioning Release Note](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [FAQ](/docs/react/faq)
- [CodeSandbox Template](https://u.ant.design/codesandbox-repro) for bug reports
- [Awesome Infra Design](https://github.com/websemantics/awesome-ant-design)
- [Customize Theme](/docs/react/customize-theme)
- [How to Apply for Being A Collaborator](https://github.com/ant-design/ant-design/wiki/Collaborators#how-to-apply-for-being-a-collaborator)

## Companies using infrad

- [Ant Financial](http://www.antfin.com/index.htm?locale=en_US)
- [Alibaba](http://www.alibaba.com/)
- [Tencent](http://www.tencent.com)
- [Baidu](http://www.baidu.com)
- [Koubei](http://www.koubei.com/)
- [Meituan](http://www.meituan.com)
- [Didi](http://www.xiaojukeji.com/)
- [Eleme](https://www.ele.me/)

> If your company or product uses Infra Design, let us know [here](https://github.com/ant-design/ant-design/issues/477)!

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md) first.

If you'd like to help us improve infrad, just create a [Pull Request](https://github.com/infra-fe/infra-design/pulls). Feel free to report bugs and issues [here](http://new-issue.ant.design/).

> If you're new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use infrad, please post questions to [GitHub Discussions](https://github.com/ant-design/ant-design/discussions) using the `Q&A` tag or [<img alt="Stack Overflow" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66" width="140" />](http://stackoverflow.com/questions/tagged/antd) using the `antd` tag.

As always, we encourage experienced users to help those who are not familiar with `infrad`!
