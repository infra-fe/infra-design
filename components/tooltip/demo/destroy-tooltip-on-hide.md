---
order: 4
debug: true
title:
  zh-CN: 隐藏后销毁
  en-US: Destroy tooltip when hidden
---

## zh-CN

通过 `destroyTooltipOnHide` 控制提示关闭时是否销毁 dom 节点。

## en-US

Setting `destroyTooltipOnHide` to control whether destroy dom node of tooltip when hidden.

```tsx
import { Tooltip } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);

export default App;
```
