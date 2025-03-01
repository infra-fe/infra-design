---
order: 3
title:
  zh-CN: 渐进加载
  en-US: Progressive Loading
---

## zh-CN

大图使用 placeholder 渐进加载。

## en-US

Progressive when large image loading.

```tsx
import { Button, Image, Space } from 'infrad';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [random, setRandom] = useState<number>();

  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
};

export default App;
```
