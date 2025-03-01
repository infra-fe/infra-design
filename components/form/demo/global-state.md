---
order: 7
title:
  zh-CN: 表单数据存储于上层组件
  en-US: Store Form Data into Upper Component
---

## zh-CN

通过 `onFieldsChange` 和 `fields`，可以把表单的数据存储到上层组件或者 [Redux](https://github.com/reactjs/redux)、[dva](https://github.com/dvajs/dva) 中，更多可参考 [rc-field-form 示例](https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&selectedStory=StateForm-redux&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)。

**注意：** 将表单数据存储于外部容器[并非好的实践](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)，如无必要请避免使用。

## en-US

We can store form data into upper component or [Redux](https://github.com/reactjs/redux) or [dva](https://github.com/dvajs/dva) by using `onFieldsChange` and `fields`, see more at this [rc-field-form demo](https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&selectedStory=StateForm-redux&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).

**Note:** Save Form data globally [is not a good practice](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978). You should avoid this if not necessary.

```tsx
import { Form, Input } from 'infrad';
import React, { useState } from 'react';

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[{ required: true, message: 'Username is required!' }]}
    >
      <Input />
    </Form.Item>
  </Form>
);

const App: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([{ name: ['username'], value: 'Ant Design' }]);

  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
        }}
      />
      <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
    </>
  );
};

export default App;
```

<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
