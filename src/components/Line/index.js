import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ReactEChartsCore from '../Core/EChartsReactCore'

import { labelStyle, dataZoomConfig } from '../../itemDefaultConfig'
import { formatNumber } from '../../utils'

const createTopRate = (data, isRate, i) =>
  `${i === 0 ? data.name : ''}</br> ${data.marker} ${data.seriesName}:${
    data.data
  }${isRate ? '%' : ''}`

const Line = forwardRef(
  (
    {
      options: { title, legend, grid, xAxis, yAxis, series, ...otherConfig },
      showTitle,
      rotate,
      showLabel,
      interval,
      isRate,
      x,
      y,
      dataZoom,
      yAxisName,
      rightAxisSite,
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
        formatter: data => {
          return data.map((data, i) => createTopRate(data, isRate, i)).join('')
        },
      },
      legend: {
        type: 'scroll',
        ...legend,
      },
      dataZoom: dataZoom ? dataZoomConfig : [],
      grid: {
        ...grid,
      },
      xAxis: isArray(xAxis)
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
          },

      yAxis: yAxis
        ? isArray(yAxis)
          ? yAxis.map((item, index) => ({
              name: isArray(yAxisName) ? yAxisName[index] : yAxisName,
              ...item,
            }))
          : {
              name: isArray(yAxisName) ? yAxisName[0] : yAxisName,
              ...yAxis,
            }
        : isArray(yAxisName)
        ? yAxisName.map((item, index) => ({
            name: yAxisName[index],
          }))
        : {
            name: yAxisName,
            ...yAxis,
          },
      series: series ? series : y,
      ...otherConfig,
    }

    options.series.forEach(item => {
      const yAxisIndex = rightAxisSite.indexOf(item.name) > -1 ? 1 : 0

      if (showLabel || (item.label && item.label.show)) {
        item.label = {
          ...labelStyle,
          formatter: isRate
            ? '{c}%'
            : function({ value }) {
                // 千分位分隔符

                return formatNumber(value)
              },
          ...item.label,
        }
      }

      item.yAxisIndex = yAxisIndex
      item.type = item.type || 'line'
      item.barMaxWidth = item.barMaxWidth || 22
    })

    return <ReactEChartsCore notMerge options={options} ref={ref} {...rest} />
  },
)

Line.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  interval: PropTypes.bool,
  showTitle: PropTypes.bool,
  showLabel: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  isRate: PropTypes.bool, // 是否带百分比
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

Line.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  isRate: false,
  showTitle: false,
  interval: true,
  showLabel: false,
  dataZoom: false,
  options: {},
  rightAxisSite: [],
}

export default Line
