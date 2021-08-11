// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/qiang/chart/node_modules/_@umijs_runtime@3.4.15@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/qiang/chart/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/chart":[{"title":"快速上手","path":"/chart/quick-learning","meta":{"order":0},"children":[{"path":"/chart/quick-learning","title":"入门","meta":{}}]},{"title":"业务图表组件","path":"/chart/components","meta":{"order":2},"children":[{"path":"/chart/components/area","title":"Area-面积图","meta":{"order":1}},{"path":"/chart/components/line","title":"Line-折线图","meta":{"order":1}},{"path":"/chart/components/bar","title":"Bar-柱状图","meta":{"order":2}},{"path":"/chart/components/pie","title":"Pie-饼图","meta":{"order":4}},{"path":"/chart/components/word-cloud","title":"WordCloud-词云","meta":{"order":5}},{"path":"/chart/components/core","title":"Chart-底层组件","meta":{"order":18}}]}],"*":[{"path":"/","title":"Index","meta":{}}],"/vue":[{"title":"快速上手","path":"/vue/quick-learning","meta":{},"children":[{"path":"/vue/quick-learning","title":"入门","meta":{}}]}]}},"locales":[],"navs":{"*":[{"title":"Vue图表组件","path":"/vue"},{"title":"React图表组件","path":"/chart"},{"title":"Xm Design Tv","path":"http://api.jituancaiyun.net/xm-design-tv/index.html"},{"title":"Xm Design","path":"http://api.jituancaiyun.net/xm-design-vue2/index.html"},{"title":"echarts","path":"https://echarts.apache.org/zh/index.html"}]},"title":"xm-charts","logo":"https://user-images.githubusercontent.com/9743418/104887549-680c1e80-59a6-11eb-8222-40e1d38a0fe2.png","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/chart/components/area",
        "component": require('../../components/Area/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Area/index.md",
          "updatedTime": 1619419913000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "Area-面积图",
          "order": 1,
          "slugs": [
            {
              "depth": 3,
              "value": "用法:",
              "heading": "用法"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Area-面积图"
      },
      {
        "path": "/chart/components/bar",
        "component": require('../../components/Bar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Bar/index.md",
          "updatedTime": 1620453714000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "Bar-柱状图",
          "order": 2,
          "slugs": [
            {
              "depth": 4,
              "value": "用法:",
              "heading": "用法"
            },
            {
              "depth": 5,
              "value": "基本柱状图:",
              "heading": "基本柱状图"
            },
            {
              "depth": 5,
              "value": "堆叠柱状图:",
              "heading": "堆叠柱状图"
            },
            {
              "depth": 5,
              "value": "水平柱状图:",
              "heading": "水平柱状图"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Bar-柱状图"
      },
      {
        "path": "/chart/components/core",
        "component": require('../../components/Core/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Core/index.md",
          "updatedTime": 1619419913000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "Chart-底层组件",
          "order": 18,
          "slugs": [
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Chart-底层组件"
      },
      {
        "path": "/chart/components/line",
        "component": require('../../components/Line/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Line/index.md",
          "updatedTime": 1619419913000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "Line-折线图",
          "order": 1,
          "slugs": [
            {
              "depth": 4,
              "value": "基本折线图",
              "heading": "基本折线图"
            },
            {
              "depth": 4,
              "value": "双 y 轴",
              "heading": "双-y-轴"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Line-折线图"
      },
      {
        "path": "/chart/components/pie",
        "component": require('../../components/Pie/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Pie/index.md",
          "updatedTime": 1619419913000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "Pie-饼图",
          "order": 4,
          "slugs": [
            {
              "depth": 4,
              "value": "环形饼图",
              "heading": "环形饼图"
            },
            {
              "depth": 4,
              "value": "基本饼图",
              "heading": "基本饼图"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Pie-饼图"
      },
      {
        "path": "/chart/components/word-cloud",
        "component": require('../../components/WordCloud/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/WordCloud/index.md",
          "updatedTime": 1620453714000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "业务图表组件",
            "order": 2,
            "path": "/chart/components"
          },
          "title": "WordCloud-词云",
          "order": 5,
          "slugs": []
        },
        "title": "WordCloud-词云"
      },
      {
        "path": "/chart/quick-learning",
        "component": require('../../quickLearning/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/quickLearning/index.md",
          "updatedTime": 1623294786000,
          "nav": {
            "title": "React图表组件",
            "path": "/chart"
          },
          "group": {
            "title": "快速上手",
            "order": 0,
            "path": "/chart/quick-learning"
          },
          "title": "入门",
          "slugs": [
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 3,
              "value": "使用步骤",
              "heading": "使用步骤"
            },
            {
              "depth": 4,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 4,
              "value": "结果",
              "heading": "结果"
            },
            {
              "depth": 4,
              "value": "说明",
              "heading": "说明"
            }
          ]
        },
        "title": "入门"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1619419913000,
          "hero": {
            "title": "xm-charts",
            "desc": "基于echarts和react封装的组件",
            "actions": [
              {
                "text": "在线实例",
                "link": "/chart/quick-learning"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": null
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "零配置-只关心数据源",
              "desc": null
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "组件丰富",
              "desc": null
            }
          ],
          "slugs": [],
          "title": "Index"
        },
        "title": "Index"
      },
      {
        "path": "/vue/quick-learning",
        "component": require('../../../docs/vue/quickLearning/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/vue/quickLearning/index.md",
          "updatedTime": 1623294786000,
          "nav": {
            "title": "Vue图表组件",
            "path": "/vue"
          },
          "group": {
            "title": "快速上手",
            "path": "/vue/quick-learning"
          },
          "title": "入门",
          "slugs": [
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 3,
              "value": "使用步骤",
              "heading": "使用步骤"
            },
            {
              "depth": 4,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 4,
              "value": "说明",
              "heading": "说明"
            }
          ]
        },
        "title": "入门"
      },
      {
        "path": "/chart/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/chart/components/area"
      },
      {
        "path": "/chart",
        "meta": {},
        "exact": true,
        "redirect": "/chart/quick-learning"
      },
      {
        "path": "/vue",
        "meta": {},
        "exact": true,
        "redirect": "/vue/quick-learning"
      }
    ],
    "title": "xm-charts"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
