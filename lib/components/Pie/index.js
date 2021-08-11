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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Pie = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pie, _PureComponent);

  var _super = _createSuper(Pie);

  function Pie() {
    var _this;

    _classCallCheck(this, Pie);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.saveRef = function (node) {
      _this.chartRef = node;
    };

    return _this;
  }

  _createClass(Pie, [{
    key: "getOption",
    value: function getOption() {
      var _this$props = this.props,
          _this$props$options = _this$props.options,
          title = _this$props$options.title,
          legend = _this$props$options.legend,
          tooltip = _this$props$options.tooltip,
          showTitle = _this$props$options.showTitle,
          series = _this$props$options.series,
          otherConfig = _objectWithoutProperties(_this$props$options, ["title", "legend", "tooltip", "showTitle", "series"]),
          radius = _this$props.radius,
          center = _this$props.center,
          y = _this$props.y;

      return _objectSpread({
        title: _objectSpread(_objectSpread({}, _itemDefaultConfig.titleTextStyle), {}, {
          show: showTitle
        }, title),
        tooltip: _objectSpread({
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        }, tooltip),
        legend: _objectSpread({
          top: 'bottom',
          left: 'center',
          type: 'scroll',
          itemGap: 15,
          icon: 'pin'
        }, legend),
        series: series ? (series || []).map(function (item) {
          return _objectSpread(_objectSpread({}, _itemDefaultConfig.pieSeriesConfig), {}, {
            type: 'pie',
            radius: radius,
            center: center
          }, item);
        }) : [{
          type: 'pie',
          radius: radius,
          center: center,
          data: y
        }]
      }, otherConfig);
    }
  }, {
    key: "getEchartsInstance",
    value: function getEchartsInstance() {
      if (!this.chartRef) return;
      return this.chartRef.getEchartsInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          rest = _objectWithoutProperties(_this$props2, ["options"]);

      return /*#__PURE__*/_react.default.createElement(_EChartsReactCore.default, _extends({
        notMerge: true,
        ref: this.saveRef,
        options: this.getOption()
      }, rest));
    }
  }]);

  return Pie;
}(_react.PureComponent);

Pie.propTypes = {
  theme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  showTitle: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  radius: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  center: _propTypes.default.array,
  options: _propTypes.default.shape({
    series: _propTypes.default.array
  }).isRequired
};
Pie.defaultProps = {
  style: {},
  className: '',
  theme: 'xm',
  showTitle: false,
  radius: ['35%', '50%'],
  center: ['50%', '50%'],
  options: {}
};
var _default = Pie;
exports.default = _default;