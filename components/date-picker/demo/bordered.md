---
order: 23
title:
  zh-CN: 无边框
  en-US: Bordered-less
---

## zh-CN

无边框样式。

## en-US

Bordered-less style component.

```tsx
import { DatePicker, Space } from 'infrad';
import React from 'react';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker bordered={false} />
    <DatePicker picker="week" bordered={false} />
    <DatePicker picker="month" bordered={false} />
    <DatePicker picker="year" bordered={false} />
    <RangePicker bordered={false} />
    <RangePicker picker="week" bordered={false} />
    <RangePicker picker="month" bordered={false} />
    <RangePicker picker="year" bordered={false} />
  </Space>
);

export default App;
```
