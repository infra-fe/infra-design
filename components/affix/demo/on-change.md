---
order: 1
title:
  zh-CN: 固定状态改变的回调
  en-US: Callback
---

## zh-CN

可以获得是否固定的状态。

## en-US

Callback with affixed state.

```tsx
import { Affix, Button } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);

export default App;
```
