---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

基本的时间轴。

## en-US

Basic timeline.

```tsx
import { Timeline } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);

export default App;
```
