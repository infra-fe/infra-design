---
order: 9999
title:
  zh-CN: 测试特殊 col 24 用法
  en-US: Test col 24 usage
debug: true
---

## zh-CN

See issue [#32980](https://github.com/ant-design/ant-design/issues/32980).

## en-US

See issue [#32980](https://github.com/ant-design/ant-design/issues/32980).

```tsx
import { Button, Select, Form, Input, Divider } from 'infrad';
import React from 'react';

const sharedItem = (
  <Form.Item
    label={<a href="https://github.com/ant-design/ant-design/issues/36459">#36459</a>}
    initialValue={['bamboo']}
    name="select"
    style={{ boxShadow: '0 0 3px red' }}
  >
    <Select
      style={{ width: '70%' }}
      mode="multiple"
      options={[
        { label: 'Bamboo', value: 'bamboo' },
        { label: 'Little', value: 'little' },
        { label: 'Light', value: 'light' },
      ]}
    />
  </Form.Item>
);

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {sharedItem}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name="responsive"
        labelCol={{ sm: 24, xl: 24 }}
        wrapperCol={{ sm: 24, xl: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Divider />

      <Form layout="vertical">
        {sharedItem}

        <Form.Item label="col12" name="col12" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
```
