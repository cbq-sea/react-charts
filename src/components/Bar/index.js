import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ReactEChartsCore from '../Core/EChartsReactCore'
import { labelStyle, dataZoomConfig } from '../../itemDefaultConfig'
import { formatNumber } from '../../utils'

const Bar = forwardRef(
  (
    {
      options: { title, legend, grid, xAxis, yAxis, series, ...otherConfig },
      showTitle,
      rotate,
      showLabel,
      interval,
      x,
      y,
      dataZoom,
      yAxisName,
      isHorizontal,
      isStack,
      ...rest
    },
    ref,
  ) => {
    const { isArray } = Array

    const xConfig = isArray(xAxis)
      ? xAxis.map(({ axisLabel, ...rest }) => ({
          axisLabel: {
            interval: interval ? 'auto' : 0,
            rotate: rotate || 0,
            ...axisLabel,
          },
          data: x,
          ...rest,
        }))
      : {
          data: x,
          ...xAxis,
          axisLabel: {
            interval: interval ? 'auto' : 0,
            rotate: rotate || 0,
            ...xAxis?.axisLabel,
          },
        }

    const yConfig = isArray(yAxis)
      ? yAxis.map((item, index) => ({
          name: isArray(yAxisName) ? yAxisName[index] : yAxisName,
          ...item,
        }))
      : {
          name: isArray(yAxisName) ? yAxisName[0] : yAxisName,
          ...yAxis,
        }

    const options = {
      title: {
        show: showTitle, // title.show优先级高于showTitle
        ...title,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        type: 'scroll',
        ...legend,
      },
      dataZoom: dataZoom ? dataZoomConfig : [],
      grid: {
        ...grid,
      },

      xAxis: isHorizontal ? yConfig : xConfig,
      yAxis: isHorizontal ? xConfig : yConfig,
      series: series ? series : y,
      ...otherConfig,
    }

    options.series.forEach(item => {
      if (showLabel || (item.label && item.label.show)) {
        item.label = {
          ...labelStyle,
          formatter: function({ value }) {
            // 千分位分隔符
            return formatNumber(value)
          },
          ...item.label,
        }
      }

      item.stack = isStack ? '总量' : ''
      item.type = item.type || 'bar'
      item.barMaxWidth = item.barMaxWidth || 20
      item.barMinWidth = item.barMinWidth || 2
    })

    return <ReactEChartsCore notMerge options={options} ref={ref} {...rest} />
  },
)

Bar.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  interval: PropTypes.bool,
  showTitle: PropTypes.bool,
  showLabel: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.shape({
    xAxis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    yAxis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    series: PropTypes.array,
  }).isRequired,
  rotate: PropTypes.number,
  dataZoom: PropTypes.bool, // 是否开启x轴滚动，适合于x轴数据
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto']),
    ]),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto']),
    ]),
  }),
}

Bar.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: true,
  showLabel: false,
  dataZoom: false, // 是否开启x轴滚动
  options: {},
}

export default Bar
