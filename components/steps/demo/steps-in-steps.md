---
order: 99
debug: true
title:
  zh-CN: Steps 嵌套 Steps
  en-US: Steps inside Steps
---

## zh-CN

测试 Steps 嵌套 Steps 的样式。

## en-US

Test style of Steps inside Steps.

```tsx
import type { StepsProps } from 'infrad';
import { Card, Radio, Steps } from 'infrad';
import React, { useState } from 'react';

const { Step } = Steps;

const App: React.FC = () => {
  const [size, setSize] = useState<StepsProps['size']>('default');

  const horizontalSteps = (
    <Card>
      <Steps size={size}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Card>
  );

  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={e => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps size={size} direction="vertical">
        <Step title="Finished" description={horizontalSteps} />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  );
};

export default App;
```
