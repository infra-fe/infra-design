---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

单击图像可以放大显示。

## en-US

Click the image to zoom in.

```tsx
import { Image } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
);

export default App;
```
