---
order: 8
debug: true
title:
  zh-CN: 自定义关闭按钮
  en-US: Customize close
---

## zh-CN

可用 `closeIcon` 自定义关闭按钮。

## en-US

The close icon can be customized using `closeIcon`.

```tsx
import { CloseCircleOutlined } from '@ant-design/icons';
import { Tag } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag closable closeIcon="关 闭">
      Tag1
    </Tag>
    <Tag closable closeIcon={<CloseCircleOutlined />}>
      Tag2
    </Tag>
  </>
);

export default App;
```
