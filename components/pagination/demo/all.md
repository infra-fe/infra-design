---
order: 10
title:
  zh-CN: 全部展示
  en-US: Show All
---

## zh-CN

展示所有配置选项。

## en-US

Show all configured prop.

```tsx
import { Pagination } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={total => `Total ${total} items`}
  />
);

export default App;
```
