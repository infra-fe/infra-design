---
order: 1.1
title:
  zh-CN: 额外操作
  en-US: Extra Actions
---

## zh-CN

在 Ant Design 规范中，操作按钮建议放在抽屉的右上角，可以使用 `extra` 属性来实现。

## en-US

Extra actions should be placed at corner of drawer in Ant Design, you can use `extra` prop for that.

```tsx
import { Button, Drawer, Radio, Space } from 'infrad';
import type { DrawerProps } from 'infrad/es/drawer';
import type { RadioChangeEvent } from 'infrad/es/radio';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
```
