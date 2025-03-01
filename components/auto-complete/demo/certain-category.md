---
order: 4
title:
  zh-CN: 查询模式 - 确定类目
  en-US: Lookup-Patterns - Certain Category
---

## zh-CN

[查询模式: 确定类目](https://ant.design/docs/spec/reaction#Lookup-Patterns) 示例。

## en-US

Demonstration of [Lookup Patterns: Certain Category](https://ant.design/docs/spec/reaction#Lookup-Patterns). Basic Usage, set options of autocomplete with `options` property.

```tsx
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'infrad';
import React from 'react';

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('infradesign', 10000), renderItem('infradesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('infradesign UI FAQ', 60100), renderItem('infradesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('infradesign design language', 100000)],
  },
];

const App: React.FC = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);

export default App;
```

```css
.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}
```
