---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

## en-US

Large size tabs are usually used in page header, and small size could be used in Modal.

```tsx
import type { RadioChangeEvent } from 'infrad';
import { Radio, Tabs } from 'infrad';
import type { SizeType } from 'infrad/es/config-provider/SizeContext';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of tab ${id}`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default App;
```
