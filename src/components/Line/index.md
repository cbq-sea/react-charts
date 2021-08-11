---
nav:
  title: React图表组件
  path: /chart

group:
  title: 业务图表组件
  order: 2

title: Line-折线图
order: 1
---

#### 基本折线图

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
    data: [100, 900],
    name: '指标2',
  },
]

// y轴名称
const yAxisName = ['单位: 个']

export default () => <Line x={x} y={y} yAxisName={yAxisName} />
```

#### 双 y 轴

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
    data: [20, 40],
    name: '指标2',
  },
]

// y轴名称
const yAxisName = ['单位: 个', '单位： %']
const rightAxisSite = ['指标2']

export default () => (
  <Line x={x} y={y} yAxisName={yAxisName} rightAxisSite={rightAxisSite} />
)
```

### API

|      参数      |                                               说明                                                |      类型      |                            默认值                            |
| :------------: | :-----------------------------------------------------------------------------------------------: | :------------: | :----------------------------------------------------------: |
|       x        |                                               维度                                                |     array      |                              -                               |
|       y        |                                               指标                                                |     array      |                                                              |
|   yAxisName    |                                             y 轴名称                                              |     array      |                              -                               |
| rightAxisSite  |                                     指标在 y 轴 left or right                                     |     Array      |                          默认 left                           |
|     isRate     |                                           是否是百分比                                            |    boolean     |                            false                             |
|    dataZoom    |                                         是否开启横向滚动                                          |    boolean     |                            false                             |
|     rotate     |                                      x 轴 label 字体 rotate                                       |     number     |                              0                               |
|    interval    |                               设置坐标轴分割间隔（设置 0 强制显示）                               | number\|string |                            'auto'                            |
|   showLabel    |                                       是否显示节点处 label                                        |    boolean     |                            false                             |
|    options     | echarts 图表配置项 (优先级高于以上配置)[echarts](https://echarts.apache.org/zh/option.html#title) |     object     |                              -                               |
|  showLoading   |                                         是否显示加载状态                                          |    boolean     |                            false                             |
| loadingOptions |                                           图表加载样式                                            |     object     |                              -                               |
|     theme      |                                               主题                                                | string\|object |                              xm                              |
|  initOptions   |                                        初始化时的附加参数                                         |     object     | {devicePixelRatio:window.devicePixelRatio,renderer:'canvas'} |

可以通过实例的 getEchartsInstance 方法获取图表实例
