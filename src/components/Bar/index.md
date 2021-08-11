---
nav:
  title: React图表组件
  path: /chart

group:
  title: 业务图表组件
  order: 2

title: Bar-柱状图
order: 2
---

#### 用法:

##### 基本柱状图:

```jsx
import React from 'react'
import { Bar } from '@xm/react-charts'

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

export default () => <Bar x={x} y={y} />
```

##### 堆叠柱状图:

```jsx
import React from 'react'
import { Bar } from '@xm/react-charts'

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

// y轴名称
const yAxisName = ['单位: 个']

export default () => <Bar x={x} y={y} yAxisName={yAxisName} isStack />
```

##### 水平柱状图:

```jsx
import React from 'react'
import { Bar } from '@xm/react-charts'

// 维度
const x = ['示意1', '示意2']

// 指标
const y = [
  {
    data: [200, 600],
    name: '柱状图',
  },
  {
    data: [200, 60000],
    name: '柱状图2',
  },
]

export default () => <Bar x={x} y={y} isHorizontal />
```

### API

|      参数      |                                               说明                                                |      类型      |                             默认值                             |
| :------------: | :-----------------------------------------------------------------------------------------------: | :------------: | :------------------------------------------------------------: |
|       x        |                                               维度                                                |     array      |                               -                                |
|       y        |                                               指标                                                |     array      |                               -                                |
|   yAxisName    |                                             y 轴名称                                              |     array      |                               -                                |
|    isStack     |                                             是否堆叠                                              |    boolean     |                             false                              |
|  isHorizontal  |                                         是否是水平柱状图                                          |    boolean     |                             false                              |
|    dataZoom    |                                         是否开启横向滚动                                          |    boolean     |                             false                              |
|     rotate     |                                      x 轴 label 字体 rotate                                       |     number     |                               0                                |
|    interval    |                               设置坐标轴分割间隔（设置 0 强制显示）                               | number\|string |                             'auto'                             |
|   showLabel    |                                       是否显示节点处 label                                        |    boolean     |                             false                              |
|    options     | echarts 图表配置项 (优先级高于以上配置)[echarts](https://echarts.apache.org/zh/option.html#title) |     object     |                               -                                |
|  showLoading   |                                         是否显示加载状态                                          |    boolean     |                             false                              |
| loadingOptions |                                           图表加载样式                                            |     object     |                               -                                |
|     theme      |                                               主题                                                | string\|object |                               xm                               |
|  initOptions   |                                        初始化时的附加参数                                         |     object     | {devicePixelRatio: window.devicePixelRatio,renderer: 'canvas'} |

可以通过实例的 getEchartsInstance 方法获取图表实例
