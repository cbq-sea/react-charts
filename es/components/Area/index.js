function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import EChartsReactCore from '../Core/EChartsReactCore';
import { labelStyle, dataZoomConfig } from '../../itemDefaultConfig';
import { formatNumber } from '../../utils';
var Area = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$options = _ref.options,
      title = _ref$options.title,
      legend = _ref$options.legend,
      grid = _ref$options.grid,
      xAxis = _ref$options.xAxis,
      yAxis = _ref$options.yAxis,
      series = _ref$options.series,
      otherConfig = _objectWithoutProperties(_ref$options, ["title", "legend", "grid", "xAxis", "yAxis", "series"]),
      showTitle = _ref.showTitle,
      showLabel = _ref.showLabel,
      rotate = _ref.rotate,
      interval = _ref.interval,
      boundaryGap = _ref.boundaryGap,
      x = _ref.x,
      y = _ref.y,
      dataZoom = _ref.dataZoom,
      yAxisName = _ref.yAxisName,
      rest = _objectWithoutProperties(_ref, ["options", "showTitle", "showLabel", "rotate", "interval", "boundaryGap", "x", "y", "dataZoom", "yAxisName"]);

  var isArray = Array.isArray;

  var options = _objectSpread({
    title: _objectSpread({
      show: showTitle
    }, title),
    tooltip: {
      trigger: 'axis'
    },
    legend: _objectSpread({
      type: 'scroll'
    }, legend),
    grid: _objectSpread({}, grid),
    dataZoom: dataZoom ? dataZoomConfig : [],
    xAxis: isArray(xAxis) ? xAxis.map(function (_ref2) {
      var axisLabel = _ref2.axisLabel,
          rest = _objectWithoutProperties(_ref2, ["axisLabel"]);

      return _objectSpread({
        axisLabel: _objectSpread({
          interval: interval ? 'auto' : 0,
          rotate: rotate || 0
        }, axisLabel),
        boundaryGap: boundaryGap,
        data: x
      }, rest);
    }) : _objectSpread(_objectSpread({
      boundaryGap: boundaryGap,
      data: x
    }, xAxis), {}, {
      axisLabel: _objectSpread({
        interval: interval ? 'auto' : 0,
        rotate: rotate || 0
      }, xAxis === null || xAxis === void 0 ? void 0 : xAxis.axisLabel)
    }),
    yAxis: isArray(yAxis) ? yAxis.map(function (item, index) {
      return _objectSpread({
        name: isArray(yAxisName) ? yAxisName[index] : yAxisName
      }, item);
    }) : _objectSpread({
      name: isArray(yAxisName) ? yAxisName[0] : yAxisName
    }, yAxis),
    series: series ? series : y
  }, otherConfig);

  options.series.forEach(function (item) {
    if (showLabel || item.label && item.label.show) {
      item.label = _objectSpread(_objectSpread({}, labelStyle), {}, {
        formatter: function formatter(_ref3) {
          var value = _ref3.value;
          // 千分位分隔符
          return formatNumber(value);
        }
      }, item.label);
    }

    item.areaStyle = item.areaStyle || {
      opacity: 0.2
    };
    item.type = item.type || 'line'; // item.symbol = 'none' // 此处配置 不显示点
  });
  return /*#__PURE__*/React.createElement(EChartsReactCore, _extends({
    notMerge: true,
    options: options,
    ref: ref
  }, rest));
});
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
    series: PropTypes.array
  }).isRequired,
  rotate: PropTypes.number,
  boundaryGap: PropTypes.bool,
  // 是否两边留白
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  })
};
Area.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: false,
  showLabel: false,
  boundaryGap: true,
  options: {}
};
export default Area;