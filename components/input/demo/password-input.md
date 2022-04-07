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

```jsx
import { Input, Space } from 'infrad';
import { IView, IInvisible } from 'infra-design-icons';

export default () => (
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
```
