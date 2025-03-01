---
order: 2
title:
  zh-CN: 自定义选项
  en-US: Customized
---

## zh-CN

也可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `options`。

## en-US

You could pass `AutoComplete.Option` as children of `AutoComplete`, instead of using `options`。

```tsx
import { AutoComplete } from 'infrad';
import React, { useState } from 'react';

const { Option } = AutoComplete;

const App: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    setResult(res);
  };

  return (
    <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="input here">
      {result.map((email: string) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default App;
```
