---
nav:
  title: React图表组件
  path: /chart

group:
  title: 快速上手
  order: 0

title: 入门
---

## 快速上手

### 使用步骤

```bash
xnpm install -S @xm/react-charts

```

#### 用法

```jsx | pure
import React from 'react'
import { Line } from '@xm/react-charts'

// 维度
const x = ['示意1', '示意2']

// 指标
const y = [
  {
    data: [200, 600],
    name: '指标1',
  },
  {
    data: [200, 600],
    name: '指标2',
  },
]

export default () => <Line x={x} y={y} />
```

#### 结果

```jsx
import React from 'react'
import { Line } from '@xm/react-charts'

// 维度
const x = ['示意1', '示意2']

// 指标
const y = [
  {
    data: [200, 600],
    name: '指标1',
  },
  {
    data: [200, 600],
    name: '指标2',
  },
]

export default () => <Line x={x} y={y} />
```

#### 说明

抽象出：
`x 为维度`
`y 为指标`
