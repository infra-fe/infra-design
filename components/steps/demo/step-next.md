---
order: 3
title:
  zh-CN: 步骤切换
  en-US: Switch Step
---

## zh-CN

通常配合内容及按钮使用，表示一个流程的处理进度。

## en-US

Cooperate with the content and buttons, to represent the progress of a process.

```tsx
import { Button, message, Steps } from 'infrad';
import React, { useState } from 'react';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default App;
```

```css
.steps-content {
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
}

.steps-action {
  margin-top: 24px;
}
```

<style>
[data-theme="dark"] .steps-content {
  margin-top: 16px;
  border: 1px dashed #303030;
  background-color: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.65);
  padding-top: 80px;
}
</style>
