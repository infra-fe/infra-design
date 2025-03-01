---
order: 1
title:
  zh-CN: 四种样式
  en-US: More types
---

## zh-CN

共有四种样式 `success`、`info`、`warning`、`error`。

## en-US

There are 4 types of Alert: `success`, `info`, `warning`, `error`.

```tsx
import { Alert } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </>
);

export default App;
```

<style>
[data-theme="compact"] .code-box-demo .ant-alert {
  margin-bottom: 8px;
}
</style>
