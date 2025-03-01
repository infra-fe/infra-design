---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

头像有三种尺寸，两种形状可选。

## en-US

Three sizes and two shapes are available.

```tsx
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'infrad';
import React from 'react';

const App: React.FC = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
    <div>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </>
);

export default App;
```

<style>
#components-avatar-demo-basic .ant-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
.ant-row-rtl #components-avatar-demo-basic .ant-avatar {
  margin-right: 0;
  margin-left: 16px;
}
</style>
