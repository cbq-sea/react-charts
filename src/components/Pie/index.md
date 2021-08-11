---
nav:
  title: React图表组件
  path: /chart

group:
  title: 业务图表组件
  order: 2

title: Pie-饼图
order: 4
---

#### 环形饼图
```jsx
import React from 'react'
import { Pie } from '@xm/react-charts'

// 指标
const y = [
  {
    name: '指标1',
    value: 200,
  },
  {
    name: '指标2',
    value: 600,
  },
]

export default () => <Pie y={y} />
```

#### 基本饼图
```jsx
import React from 'react'
import { Pie } from '@xm/react-charts'

// 指标
const y = [
  {
    name: '指标1',
    value: 200,
  },
  {
    name: '指标2',
    value: 600,
  },
]

export default () => <Pie y={y} radius="70%" />
```

### API

|      参数      |                             说明                             |      类型      |                            默认值                            |
| :------------: | :----------------------------------------------------------: | :------------: | :----------------------------------------------------------: |
|       y        |                             指标                             |     array      |                              -                               |
|     radius     |                       饼图外半径内半径                       | string\|array  |                        ['35%', '50%']                        |
|     center     |                          xy 中心点                           |     array      |                        ['50%', '50%']                        |
|   showLabel    |                     是否显示节点处 label                     |    boolean     |                            false                             |
|    options     | echarts 图表配置项 (优先级高于以上配置)[echarts](https://echarts.apache.org/zh/option.html#title) |     object     |                              -                               |
|  showLoading   |                       是否显示加载状态                       |    boolean     |                            false                             |
| loadingOptions |                         图表加载样式                         |     object     |                              -                               |
|     theme      |                             主题                             | string\|object |                              xm                              |
|  initOptions   |                      初始化时的附加参数                      |     object     | {devicePixelRatio: window.devicePixelRatio,renderer: 'canvas'} |

可以通过实例的 getEchartsInstance 方法获取图表实例
