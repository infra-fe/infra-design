---
order: 6
title:
  zh-CN: 国际化
  en-US: Internationalization
---

## zh-CN

设置 `okText` 与 `cancelText` 以自定义按钮文字。

## en-US

To customize the text of the buttons, you need to set `okText` and `cancelText` props.

```tsx
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'infrad';
import React, { useState } from 'react';

const LocalizedModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};

const confirm = () => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
};

const App: React.FC = () => (
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>
);

export default App;
```
