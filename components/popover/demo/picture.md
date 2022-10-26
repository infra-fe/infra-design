---
order: 7
title:
  zh-CN: 带图片多内容
  en-US: have picture
---

## zh-CN

可以自定义 content，使其带常用的 picture 展示

## en-US

You can customize the content to display the commonly used picture

```tsx
import { Popover, Button, Image } from 'infrad';
import React from 'react';

const App: React.FC = () => {
  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
  };

  const Content = (
    <div style={flexStyle}>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width={400}
      />
      <span>Popover Title</span>
      <span>
        This is popover.When the text is too long.This is popover. When the text is too long.
      </span>
    </div>
  );

  return (
    <Popover content={Content} trigger="click">
      <Button type="primary">click me</Button>
    </Popover>
  );
};

export default App;
```
