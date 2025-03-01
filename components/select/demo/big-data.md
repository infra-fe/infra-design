---
order: 25
title:
  zh-CN: 大数据
  en-US: Big Data
---

## zh-CN

Select 使用了[虚拟滚动](https://github.com/react-component/virtual-list)技术，因而获得了比 [3.0 更好的性能](https://codesandbox.io/s/beautiful-banzai-m72lv)。

## en-US

Select use [virtual scroll](https://github.com/react-component/virtual-list) which get better performance [than 3.0](https://codesandbox.io/s/beautiful-banzai-m72lv).

```tsx
import type { SelectProps } from 'infrad';
import { Divider, Select, Typography } from 'infrad';
import React from 'react';

const { Title } = Typography;

const options: SelectProps['options'] = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
    <Title level={3}>Ant Design 4.0</Title>
    <Title level={4}>{options.length} Items</Title>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />

    <Divider />

    <Title level={3}>Ant Design 3.0</Title>
    <iframe
      title="Ant Design 3.0 Select demo"
      src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      style={{ width: '100%', height: 300 }}
    />
  </>
);

export default App;
```
