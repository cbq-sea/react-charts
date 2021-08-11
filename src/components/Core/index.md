---
nav:
  title: React图表组件
  path: /chart

group:
  title: 业务图表组件
  order: 2

title: Chart-底层组件
order: 18
---

```jsx
import React from 'react'
import { Chart } from '@xm/react-charts'

const options = {
  xAxis: [
    {
      type: 'category',
      data: ['示意1', '示意2'],
    },
  ],
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [200, 600],
      type: 'line',
      name: '折线图',
    },
  ],
}

export default () => <Chart options={options} />
```

### API

|      参数      |                             说明                             |      类型      |                            默认值                            |
| :------------: | :----------------------------------------------------------: | :------------: | :----------------------------------------------------------: |
|    options     | echarts 图表配置项 (优先级高于以上配置)[echarts](https://echarts.apache.org/zh/option.html#title) |     object     |                              -                               |
|  showLoading   |                       是否显示加载状态                       |    boolean     |                            false                             |
| loadingOptions |                         图表加载样式                         |     object     |                              -                               |
|     theme      |                             主题                             | string\|object |                              xm                              |
|  initOptions   |                      初始化时的附加参数                      |     object     | {devicePixelRatio: window.devicePixelRatio,renderer: 'canvas'} |

可以通过实例的 getEchartsInstance 方法获取图表实例
