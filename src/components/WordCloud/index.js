import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ReactEChartsCore from '../Core/EChartsReactCore'

import { titleTextStyle, } from '../../itemDefaultConfig'

const WordCloud = forwardRef(
  (
    {
      options: { title, legend, series, grid, ...otherConfig },
      showTitle,
      showLabel,
      rotate,
      cloudData,
      interval,
      boundaryGap,
      setColor,
      y,
      ...rest
    },
    ref,
  ) => {
    const options = {
      title: {
        ...titleTextStyle,
        show: showTitle, // title.show优先级高于showTitle
        ...title,
      },
      tooltip: {
        trigger: 'item',
        padding: [10, 15],
        textStyle: {
          fontSize: 20,
        },
      },
      legend: {
        ...legend,
      },
      grid: {
        ...grid,
      },
      series: series.map(item => {
        return {
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: 'circle',
          textStyle: {
            normal: {
              color:
                typeof setColor === 'function'
                  ? setColor
                  : function() {
                      return (
                        'rgb(' +
                        Math.round(Math.random() * 255) +
                        ', ' +
                        Math.round(Math.random() * 255) +
                        ', ' +
                        Math.round(Math.random() * 255) +
                        ')'
                      )
                    },
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333',
            },
          },

          ...item,
        }
      }),
      ...otherConfig,
    }

    return <ReactEChartsCore notMerge options={options} ref={ref} {...rest} />
  },
)

WordCloud.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showTitle: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.shape({
    series: PropTypes.array.isRequired,
  }).isRequired,
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

WordCloud.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: false,
  showLabel: false,
  boundaryGap: true,
  y:[],
  options: {
    title: {},
    legend: {},
    toolbox: {},
    grid: {},
    series: [],
  },
}

export default WordCloud
