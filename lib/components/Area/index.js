"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EChartsReactCore = _interopRequireDefault(require("../Core/EChartsReactCore"));

var _itemDefaultConfig = require("../../itemDefaultConfig");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Area = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
    dataZoom: dataZoom ? _itemDefaultConfig.dataZoomConfig : [],
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
      item.label = _objectSpread(_objectSpread({}, _itemDefaultConfig.labelStyle), {}, {
        formatter: function formatter(_ref3) {
          var value = _ref3.value;
          // 千分位分隔符
          return (0, _utils.formatNumber)(value);
        }
      }, item.label);
    }

    item.areaStyle = item.areaStyle || {
      opacity: 0.2
    };
    item.type = item.type || 'line'; // item.symbol = 'none' // 此处配置 不显示点
  });
  return /*#__PURE__*/_react.default.createElement(_EChartsReactCore.default, _extends({
    notMerge: true,
    options: options,
    ref: ref
  }, rest));
});
Area.propTypes = {
  theme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  interval: _propTypes.default.bool,
  showTitle: _propTypes.default.bool,
  showLabel: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  options: _propTypes.default.shape({
    xAxis: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
    yAxis: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
    series: _propTypes.default.array
  }).isRequired,
  rotate: _propTypes.default.number,
  boundaryGap: _propTypes.default.bool,
  // 是否两边留白
  opts: _propTypes.default.shape({
    devicePixelRatio: _propTypes.default.number,
    renderer: _propTypes.default.oneOf(['canvas', 'svg']),
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null, undefined, 'auto'])]),
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null, undefined, 'auto'])])
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
var _default = Area;
exports.default = _default;