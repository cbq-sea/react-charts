function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactEChartsCore from '../Core/EChartsReactCore';
import { labelStyle, dataZoomConfig } from '../../itemDefaultConfig';
import { formatNumber } from '../../utils';

var createTopRate = function createTopRate(data, isRate, i) {
  return "".concat(i === 0 ? data.name : '', "</br> ").concat(data.marker, " ").concat(data.seriesName, ":").concat(data.data).concat(isRate ? '%' : '');
};

var Line = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$options = _ref.options,
      title = _ref$options.title,
      legend = _ref$options.legend,
      grid = _ref$options.grid,
      xAxis = _ref$options.xAxis,
      yAxis = _ref$options.yAxis,
      series = _ref$options.series,
      otherConfig = _objectWithoutProperties(_ref$options, ["title", "legend", "grid", "xAxis", "yAxis", "series"]),
      showTitle = _ref.showTitle,
      rotate = _ref.rotate,
      showLabel = _ref.showLabel,
      interval = _ref.interval,
      isRate = _ref.isRate,
      x = _ref.x,
      y = _ref.y,
      dataZoom = _ref.dataZoom,
      yAxisName = _ref.yAxisName,
      rightAxisSite = _ref.rightAxisSite,
      rest = _objectWithoutProperties(_ref, ["options", "showTitle", "rotate", "showLabel", "interval", "isRate", "x", "y", "dataZoom", "yAxisName", "rightAxisSite"]);

  var isArray = Array.isArray;

  var options = _objectSpread({
    title: _objectSpread({
      show: showTitle
    }, title),
    tooltip: {
      trigger: 'axis',
      formatter: function formatter(data) {
        return data.map(function (data, i) {
          return createTopRate(data, isRate, i);
        }).join('');
      }
    },
    legend: _objectSpread({
      type: 'scroll'
    }, legend),
    dataZoom: dataZoom ? dataZoomConfig : [],
    grid: _objectSpread({}, grid),
    xAxis: isArray(xAxis) ? xAxis.map(function (_ref2) {
      var axisLabel = _ref2.axisLabel,
          rest = _objectWithoutProperties(_ref2, ["axisLabel"]);

      return _objectSpread({
        axisLabel: _objectSpread({
          interval: interval ? 'auto' : 0,
          rotate: rotate || 0
        }, axisLabel),
        data: x
      }, rest);
    }) : _objectSpread(_objectSpread({
      data: x
    }, xAxis), {}, {
      axisLabel: _objectSpread({
        interval: interval ? 'auto' : 0,
        rotate: rotate || 0
      }, xAxis === null || xAxis === void 0 ? void 0 : xAxis.axisLabel)
    }),
    yAxis: yAxis ? isArray(yAxis) ? yAxis.map(function (item, index) {
      return _objectSpread({
        name: isArray(yAxisName) ? yAxisName[index] : yAxisName
      }, item);
    }) : _objectSpread({
      name: isArray(yAxisName) ? yAxisName[0] : yAxisName
    }, yAxis) : isArray(yAxisName) ? yAxisName.map(function (item, index) {
      return {
        name: yAxisName[index]
      };
    }) : _objectSpread({
      name: yAxisName
    }, yAxis),
    series: series ? series : y
  }, otherConfig);

  options.series.forEach(function (item) {
    var yAxisIndex = rightAxisSite.indexOf(item.name) > -1 ? 1 : 0;

    if (showLabel || item.label && item.label.show) {
      item.label = _objectSpread(_objectSpread({}, labelStyle), {}, {
        formatter: isRate ? '{c}%' : function (_ref3) {
          var value = _ref3.value;
          // 千分位分隔符
          return formatNumber(value);
        }
      }, item.label);
    }

    item.yAxisIndex = yAxisIndex;
    item.type = item.type || 'line';
    item.barMaxWidth = item.barMaxWidth || 22;
  });
  return /*#__PURE__*/React.createElement(ReactEChartsCore, _extends({
    notMerge: true,
    options: options,
    ref: ref
  }, rest));
});
Line.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  interval: PropTypes.bool,
  showTitle: PropTypes.bool,
  showLabel: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  isRate: PropTypes.bool,
  // 是否带百分比
  options: PropTypes.shape({
    xAxis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    yAxis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    series: PropTypes.array
  }).isRequired,
  rotate: PropTypes.number,
  dataZoom: PropTypes.bool,
  // 是否开启x轴滚动，适合于x轴数据
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  })
};
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
  rightAxisSite: []
};
export default Line;