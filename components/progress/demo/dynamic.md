---
order: 4
title:
  zh-CN: 动态展示
  en-US: Dynamic
---

## zh-CN

会动的进度条才是好进度条。

## en-US

A dynamic progress bar is better.

```tsx
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'infrad';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};

export default App;
```
