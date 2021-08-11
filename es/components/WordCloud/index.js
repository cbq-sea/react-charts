function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactEChartsCore from '../Core/EChartsReactCore';
import { titleTextStyle } from '../../itemDefaultConfig';
var WordCloud = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$options = _ref.options,
      title = _ref$options.title,
      legend = _ref$options.legend,
      series = _ref$options.series,
      grid = _ref$options.grid,
      otherConfig = _objectWithoutProperties(_ref$options, ["title", "legend", "series", "grid"]),
      showTitle = _ref.showTitle,
      showLabel = _ref.showLabel,
      rotate = _ref.rotate,
      cloudData = _ref.cloudData,
      interval = _ref.interval,
      boundaryGap = _ref.boundaryGap,
      setColor = _ref.setColor,
      y = _ref.y,
      rest = _objectWithoutProperties(_ref, ["options", "showTitle", "showLabel", "rotate", "cloudData", "interval", "boundaryGap", "setColor", "y"]);

  var options = _objectSpread({
    title: _objectSpread(_objectSpread({}, titleTextStyle), {}, {
      show: showTitle
    }, title),
    tooltip: {
      trigger: 'item',
      padding: [10, 15],
      textStyle: {
        fontSize: 20
      }
    },
    legend: _objectSpread({}, legend),
    grid: _objectSpread({}, grid),
    series: series.map(function (item) {
      return _objectSpread({
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 50],
        rotationRange: [0, 0],
        shape: 'circle',
        textStyle: {
          normal: {
            color: typeof setColor === 'function' ? setColor : function () {
              return 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      }, item);
    })
  }, otherConfig);

  return /*#__PURE__*/React.createElement(ReactEChartsCore, _extends({
    notMerge: true,
    options: options,
    ref: ref
  }, rest));
});
WordCloud.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showTitle: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.shape({
    series: PropTypes.array.isRequired
  }).isRequired,
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  })
};
WordCloud.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  rotate: 0,
  showTitle: false,
  interval: false,
  showLabel: false,
  boundaryGap: true,
  y: [],
  options: {
    title: {},
    legend: {},
    toolbox: {},
    grid: {},
    series: []
  }
};
export default WordCloud;