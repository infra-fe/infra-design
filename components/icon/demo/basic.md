---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

通过 `@ant-design/icons` 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 `spin` 属性来实现动画旋转效果。

## en-US

Import icons from `@ant-design/icons`, component name of icons with different theme is the icon name suffixed by the theme name. Specify the `spin` property to show spinning animation.

```tsx
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from 'infra-design-icons';
import { Space } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);

export default App;
```
