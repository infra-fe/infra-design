---
order: 1
title:
  zh-CN: 多色图标
  en-US: Two-tone icon and colorful icon
---

## zh-CN

双色图标可以通过 `twoToneColor` 属性设置主题色。

## en-US

You can set `twoToneColor` prop to specific primary color for two-tone icons.

```tsx
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from 'infra-design-icons';
import { Space } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);

export default App;
```
