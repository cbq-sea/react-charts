---
nav:
  title: React图表组件
  path: /chart

group:
  title: 业务图表组件
  order: 2

title: WordCloud-词云
order: 5
---

```jsx
import React from 'react'
import { WordCloud } from '@xm/react-charts'

const data = [
  { name: '微信', value: 3328 },
  { name: '南方+', value: 1045 },
  { name: '东莞时间网', value: 834 },
  { name: 'i东莞', value: 804 },
  { name: '新浪微博', value: 532 },
  { name: '今日头条', value: 493 },
  {
    name: '腾讯新闻',
    value: 479,
  },
]

export default () => <WordCloud options={{ series: [{ data }] }} />
```

|      参数      |        说明        |      类型      |                             默认值                             |
| :------------: | :----------------: | :------------: | :------------------------------------------------------------: |
|    setColor    |    设置字体颜色    |    function    |                               -                                |
|  showLoading   |  是否显示加载状态  |    boolean     |                             false                              |
| loadingOptions |    图表加载样式    |     object     |                               -                                |
|     theme      |        主题        | string\|object |                               xm                               |
|  initOptions   | 初始化时的附加参数 |     object     | {devicePixelRatio: window.devicePixelRatio,renderer: 'canvas'} |

可以通过实例的 getEchartsInstance 方法获取图表实例

更多配置项请参考 [echarts-wordcloud Document.](https://github.com/ecomfe/echarts-wordcloud)
