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
var Bar = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
      x = _ref.x,
      y = _ref.y,
      dataZoom = _ref.dataZoom,
      yAxisName = _ref.yAxisName,
      isHorizontal = _ref.isHorizontal,
      isStack = _ref.isStack,
      rest = _objectWithoutProperties(_ref, ["options", "showTitle", "rotate", "showLabel", "interval", "x", "y", "dataZoom", "yAxisName", "isHorizontal", "isStack"]);

  var isArray = Array.isArray;
  var xConfig = isArray(xAxis) ? xAxis.map(function (_ref2) {
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
  });
  var yConfig = isArray(yAxis) ? yAxis.map(function (item, index) {
    return _objectSpread({
      name: isArray(yAxisName) ? yAxisName[index] : yAxisName
    }, item);
  }) : _objectSpread({
    name: isArray(yAxisName) ? yAxisName[0] : yAxisName
  }, yAxis);

  var options = _objectSpread({
    title: _objectSpread({
      show: showTitle
    }, title),
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: _objectSpread({
      icon: 'rect',
      itemWidth: 8,
      itemHeight: 8,
      type: 'scroll'
    }, legend),
    dataZoom: dataZoom ? dataZoomConfig : [],
    grid: _objectSpread({}, grid),
    xAxis: isHorizontal ? yConfig : xConfig,
    yAxis: isHorizontal ? xConfig : yConfig,
    series: series ? series : y
  }, otherConfig);

  options.series.forEach(function (item) {
    if (showLabel || item.label && item.label.show) {
      item.label = _objectSpread(_objectSpread({}, labelStyle), {}, {
        formatter: function formatter(_ref3) {
          var value = _ref3.value;
          // ??????????????????
          return formatNumber(value);
        }
      }, item.label);
    }

    item.stack = isStack ? '??????' : '';
    item.type = item.type || 'bar';
    item.barMaxWidth = item.barMaxWidth || 20;
    item.barMinWidth = item.barMinWidth || 2;
  });
  return /*#__PURE__*/React.createElement(ReactEChartsCore, _extends({
    notMerge: true,
    options: options,
    ref: ref
  }, rest));
});
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
    series: PropTypes.array
  }).isRequired,
  rotate: PropTypes.number,
  dataZoom: PropTypes.bool,
  // ????????????x?????????????????????x?????????
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  })
};
Bar.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: true,
  showLabel: false,
  dataZoom: false,
  // ????????????x?????????
  options: {}
};
export default Bar;