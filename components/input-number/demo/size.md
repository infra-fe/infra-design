---
order: 1
title:
  zh-CN: 三种大小
  en-US: Sizes
---

## zh-CN

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

## en-US

There are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.

```tsx
import { InputNumber, Space } from 'infrad';
import React from 'react';

const onChange = (value: number) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </Space>
);

export default App;
```
