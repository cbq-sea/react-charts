"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pieEmphasisLabel = exports.pieSeriesConfig = exports.labelStyle = exports.dataZoomConfig = exports.lbYAxis = exports.lbXAxis = exports.lbGrid = exports.lbLegend = exports.titleTextStyle = void 0;
// title样式
var titleTextStyle = {
  fontSize: 16,
  fontWeight: 500,
  color: 'rgba(0, 0, 0, 0.85)'
}; // 图例

exports.titleTextStyle = titleTextStyle;
var lbLegend = {// top: 'top',
  // left: 4,
  // type: 'scroll',
  // icon: 'roundRect',
  // padding: 0,
  // itemHeight: 2,
  // itemWidth: 12,
}; // grid

exports.lbLegend = lbLegend;
var lbGrid = {// left: 0,
  // right: 10,
  // bottom: 10,
  // containLabel: true,
}; // x轴

exports.lbGrid = lbGrid;
var lbXAxis = {// type: 'category',
  // axisLine: {
  //   lineStyle: {
  //     color: '#ccd6eb',
  //   },
  // },
  // boundaryGap: true,
}; // y轴

exports.lbXAxis = lbXAxis;
var lbYAxis = {// type: 'value',
  // minInterval: 1,
  // axisLine: { show: false },
  // splitLine: {
  //   show: true,
  //   lineStyle: {
  //     type: 'dashed',
  //   },
  // },
  // axisTick: {
  //   show: false,
  // },
}; // 滚动条设置 如果有需要可直接import 并设置option.dataZoom  =  dataZoomConfig

exports.lbYAxis = lbYAxis;
var dataZoomConfig = [{
  // 添加X轴滚动条
  realtime: true,
  show: true,
  start: 0,
  end: 60,
  height: 16
}, {
  type: 'inside',
  realtime: true,
  start: 0,
  end: 60
}]; // 节点处出现数据

exports.dataZoomConfig = dataZoomConfig;
var labelStyle = {
  show: true,
  position: 'top',
  textStyle: {
    color: '#000'
  }
}; // 饼图每块的默认配置

exports.labelStyle = labelStyle;
var pieSeriesConfig = {
  type: 'pie',
  radius: ['35%', '50%'],
  selectedMode: 'single',
  label: {
    formatter: '{b} \n\n {d}%',
    padding: [0, 0]
  } // label: {
  //   formatter: '{b} \n {per|{d}}{per|%}',
  //   padding: [0, 0],
  //   textStyle: {
  //     rich: {
  //       per: {
  //         lineHeight: 22,
  //       },
  //     },
  //   },
  // },

};
exports.pieSeriesConfig = pieSeriesConfig;
var pieEmphasisLabel = {
  show: true,
  fontSize: 20,
  fontWeight: 'bold',
  formatter: '{per|{d}%}\n{name|{b}}',
  textStyle: {
    rich: {
      per: {
        fontSize: 18,
        color: '#959BA3',
        lineHeight: 30
      },
      name: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#41A6FE'
      }
    }
  }
};
exports.pieEmphasisLabel = pieEmphasisLabel;