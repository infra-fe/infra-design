---
order: 99
title:
  zh-CN: Dep Debug
  en-US: Dep Debug
debug: true
---

## zh-CN

Buggy!

## en-US

Buggy!

```tsx
import { Form, Input } from 'infrad';
import React from 'react';

let acc = 0;

const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="debug"
      initialValues={{
        debug1: 'debug1',
        debug2: 'debug2',
      }}
    >
      <Form.Item noStyle dependencies={['debug1']}>
        {
          () => acc++
          // return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
        }
      </Form.Item>
      <Form.Item label="debug1" name="debug1">
        <Input />
      </Form.Item>
      <Form.Item label="debug2" name="debug2">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default App;
```
