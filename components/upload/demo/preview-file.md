---
order: 9
title:
  zh-CN: 自定义预览
  en-US: Customize preview file
---

## zh-CN

自定义本地预览，用于处理非图片格式文件（例如视频文件）。

## en-US

Customize local preview. Can handle with non-image format files such as video.

```tsx
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'infrad';
import { Button, Upload } from 'infrad';
import React from 'react';

const props: UploadProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);

export default App;
```
