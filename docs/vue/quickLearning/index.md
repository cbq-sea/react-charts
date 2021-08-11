---
nav:
  title: Vue图表组件
  path: /vue

group:
  title: 快速上手

title: 入门
---

## 快速上手

### 使用步骤

```bash
xnpm install -S @xm/vue-charts

```

```javascript
import Vue from 'vue';
import XmChart from '@xm/vue-charts';

Vue.use(XmChart);

或者 单个引入
import { Line, Bar, Pie, WordCloud} from '@xm/vue-charts';
```

#### 用法

```html
<template>
  <xm-area
    :x="['示意1', '示意2']"
    :y="[
        {
          data: [200, 600],
          name: '面积图',
        },
      ]"
    yAxisName="单位：个"
  />
</template>
```

#### 说明

抽象出：
`x 为维度`
`y 为指标`

具体 props 同 React 图表组件
