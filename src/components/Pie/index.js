import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactEChartsCore from '../Core/EChartsReactCore'

import { titleTextStyle, pieSeriesConfig } from '../../itemDefaultConfig'

class Pie extends PureComponent {
  getOption() {
    const {
      options: { title, legend, tooltip, showTitle, series, ...otherConfig },
      radius,
      center,
      y,
    } = this.props

    return {
      title: {
        ...titleTextStyle,
        show: showTitle, // title.show优先级高于showTitle
        ...title,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        ...tooltip,
      },
      legend: {
        top: 'bottom',
        left: 'center',
        type: 'scroll',
        itemGap: 15,
        icon: 'pin',
        ...legend,
      },

      series: series
        ? (series || []).map(item => ({
            ...pieSeriesConfig,
            type: 'pie',
            radius,
            center,
            ...item,
          }))
        : [
            {
              type: 'pie',
              radius,
              center,
              data: y,
            },
          ],
      ...otherConfig,
    }
  }

  getEchartsInstance() {
    if (!this.chartRef) return

    return this.chartRef.getEchartsInstance()
  }

  saveRef = node => {
    this.chartRef = node
  }

  render() {
    const { options, ...rest } = this.props

    return (
      <ReactEChartsCore
        notMerge
        ref={this.saveRef}
        options={this.getOption()}
        {...rest}
      />
    )
  }
}

Pie.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showTitle: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  center: PropTypes.array,
  options: PropTypes.shape({
    series: PropTypes.array,
  }).isRequired,
}

Pie.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  showTitle: false,
  radius: ['35%', '50%'],
  center: ['50%', '50%'],
  options: {},
}

export default Pie
