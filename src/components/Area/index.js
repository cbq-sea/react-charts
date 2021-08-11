import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import EChartsReactCore from '../Core/EChartsReactCore'
import { labelStyle, dataZoomConfig } from '../../itemDefaultConfig'
import { formatNumber } from '../../utils'

const Area = forwardRef(
  (
    {
      options: { title, legend, grid, xAxis, yAxis, series, ...otherConfig },
      showTitle,
      showLabel,
      rotate,
      interval,
      boundaryGap,
      x,
      y,
      dataZoom,
      yAxisName,
      ...rest
    },
    ref,
  ) => {
    const { isArray } = Array

    const options = {
      title: {
        show: showTitle, // title.show优先级高于showTitle
        ...title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        type: 'scroll',
        ...legend,
      },
      grid: {
        ...grid,
      },
      dataZoom: dataZoom ? dataZoomConfig : [],
      xAxis: isArray(xAxis)
        ? xAxis.map(({ axisLabel, ...rest }) => ({
            axisLabel: {
              interval: interval ? 'auto' : 0,
              rotate: rotate || 0,
              ...axisLabel,
            },
            boundaryGap,
            data: x,
            ...rest,
          }))
        : {
            boundaryGap,
            data: x,
            ...xAxis,
            axisLabel: {
              interval: interval ? 'auto' : 0,
              rotate: rotate || 0,
              ...xAxis?.axisLabel,
            },
          },

      yAxis: isArray(yAxis)
        ? yAxis.map((item, index) => ({
            name: isArray(yAxisName) ? yAxisName[index] : yAxisName,
            ...item,
          }))
        : {
            name: isArray(yAxisName) ? yAxisName[0] : yAxisName,
            ...yAxis,
          },
      series: series ? series : y,
      ...otherConfig,
    }

    options.series.forEach(item => {
      if (showLabel || (item.label && item.label.show)) {
        item.label = {
          ...labelStyle,
          formatter({ value }) {
            // 千分位分隔符
            return formatNumber(value)
          },
          ...item.label,
        }
      }
      item.areaStyle = item.areaStyle || { opacity: 0.2 }
      item.type = item.type || 'line'
      // item.symbol = 'none' // 此处配置 不显示点
    })

    return <EChartsReactCore notMerge options={options} ref={ref} {...rest} />
  },
)

Area.propTypes = {
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
  boundaryGap: PropTypes.bool, // 是否两边留白
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

Area.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: false,
  showLabel: false,
  boundaryGap: true,
  options: {},
}

export default Area
