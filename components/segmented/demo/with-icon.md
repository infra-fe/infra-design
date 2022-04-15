---
order: 0
title:
  zh-CN: 设置图标
  en-US: With Icon
---

## zh-CN

给 Segmented Item 设置 Icon。

## en-US

Set `icon` for Segmented Item.

```jsx
import { Segmented } from 'infrad';
import { AppstoreOutlined, BarsOutlined } from 'infra-design-icons';

ReactDOM.render(
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />,
  mountNode,
);
```
