---
order: 10
title:
  zh-CN: 密码框
  en-US: Password box
---

## zh-CN

密码框。

## en-US

Input type of password.

```tsx
import { IInvisible, IView } from 'infra-design-icons';
import { Input, Space } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <IView /> : <IInvisible />)}
    />
    <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <IView /> : <IInvisible />)}
    />
  </Space>
);

export default App;
```
