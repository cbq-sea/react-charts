import { registerTheme } from 'echarts/lib/echarts'

// 主题色-调色盘
export const colorPalette = [
  '#4eb4ff',
  '#42d8ae',
  '#ffdc35',
  '#ff9d4d',
  '#fe7b5d',
  '#ff84b7',
  '#24c4c1',
  '#48c6fa',
  '#70a1fc',
  '#9b91f2'
]

const theme = {
  color: colorPalette,

  title: {
    textStyle: {
      fontWeight: 500,
      color: '#262a30',
      fontSize: 16
    }
  },
  legend: {
    top: 'top',
    left: '0%',
    type: 'scroll',
    icon: 'roundRect',
    padding: 0,
    itemHeight: 2,
    itemWidth: 12,
    textStyle: {
      color: '#5c626b',
    },
  },
  visualMap: {
    itemWidth: 15,
    color: ['#5ab1ef', '#e0ffff'],
  },

  grid: {
    top: 50,
    left: '0%',
    right: 25,
    bottom: 10,
    containLabel: true,
  },
  tooltip: {
    confine: true,
    backgroundColor: '#fff',
    textStyle: {
      color: '#333'
    },
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.05)',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'rgba(0,0,0,.3)'
      },
      crossStyle: {
        color: '#008acd'
      },

      shadowStyle: {
        color: 'rgba(200,200,200,0.2)'
      }
    }
  },

  dataZoom: {
    dataBackgroundColor: 'rgba(149, 155, 163, 0.2)',
    fillerColor: 'rgba(149, 155, 163, 0.4)',
    borderRadius: 4,
    handleColor: '#008acd'
  },

  categoryAxis: {
    boundaryGap: true,
    axisLine: {
      lineStyle: {
        color: '#cbcfd6'
      }
    },
    axisLabel: {
      color: '#5c626b'
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#cbcfd6']
      }
    }
  },

  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#cbcfd6'
      }
    },
    axisLabel: {
      color: '#5c626b'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(203,207,214,.8)',
        type: 'dashed'
      }
    },
    minInterval: 1,
    nameTextStyle: {
      color: '#5c626b',
      fontSize: 12
    },
    axisTick: {
      show: false
    }
  },

  radar: {
    name: {
      textStyle: { color: '#262a30' }
    },
    splitArea: { show: false }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dd6b66'],
          [0.8, '#759aa0'],
          [1, '#ea7e53']
        ]
      }
    },
    axisLabel: {
      show: true,
      color: '#262a30'
    }, // 刻度标签。
    title: { show: true, offsetCenter: [0, '80%'], color: '#262a30' },
    detail: {
      show: false
    }
  }
}

registerTheme('xm', theme)



