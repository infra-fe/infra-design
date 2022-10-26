---
order: 0
title:
  zh-CN: 顶部导航(暗色主题)
  en-US: Top Navigation(dark theme)
---

## zh-CN

水平的顶部导航(暗色主题)菜单。

## en-US

Horizontal top navigation(dark theme) menu.

```tsx
import { Menu } from 'infrad';
import { useState } from 'react';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from 'infra-design-icons';

const { SubMenu } = Menu;

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  return (
    <Menu onClick={e => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default App;
```
