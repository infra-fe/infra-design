---
order: 5
title:
  zh-CN: 异步关闭
  en-US: Asynchronously close
---

## zh-CN

点击确定后异步关闭气泡确认框，例如提交表单。

## en-US

Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.

```tsx
import { Button, Popconfirm } from 'infrad';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Popconfirm
      title="Title"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};

export default App;
```
