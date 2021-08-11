"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fastDeepEqual = _interopRequireDefault(require("fast-deep-equal"));

var _resizeDetector = require("resize-detector");

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var EChartsReactCore = /*#__PURE__*/function (_Component) {
  _inherits(EChartsReactCore, _Component);

  var _super = _createSuper(EChartsReactCore);

  function EChartsReactCore(props) {
    var _this;

    _classCallCheck(this, EChartsReactCore);

    _this = _super.call(this, props);

    _this.getEchartsInstance = function () {
      return _this.echartsLib.getInstanceByDom(_this.echartsElement) || _this.echartsLib.init(_this.echartsElement, _this.props.theme, _this.props.opts);
    };

    _this.dispose = function () {
      if (_this.echartsElement) {
        try {
          (0, _resizeDetector.removeListener)(_this.echartsElement, _this.resizeHandler);
        } catch (e) {
          console.warn(e);
        } // dispose echarts instance


        _this.echartsLib.dispose(_this.echartsElement);
      }
    };

    _this.resizeHandler = function () {
      var echartObj = _this.getEchartsInstance();

      try {
        echartObj.resize();
      } catch (e) {
        console.warn(e);
      }
    };

    _this.rerender = function () {
      var _this$props = _this.props,
          onEvents = _this$props.onEvents,
          onChartReady = _this$props.onChartReady;

      var echartObj = _this.renderEchartDom();

      _this.bindEvents(echartObj, onEvents || {}); // on chart ready


      if (typeof onChartReady === 'function') _this.props.onChartReady(echartObj); // on resize

      if (_this.echartsElement) {
        (0, _resizeDetector.addListener)(_this.echartsElement, _this.resizeHandler);
      }
    };

    _this.bindEvents = function (instance, events) {
      var _bindEvent = function _bindEvent(eventName, func) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof func === 'function') {
          // binding event
          // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
          instance.on(eventName, function (param) {
            func(param, instance);
          });
        }
      }; // loop and bind


      for (var eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _bindEvent(eventName, events[eventName]);
        }
      }
    };

    _this.renderEchartDom = function () {
      // init the echart object
      var echartObj = _this.getEchartsInstance(); // set the echart option


      echartObj.setOption(_this.props.options, _this.props.notMerge || false, _this.props.lazyUpdate || false); // set loading mask

      if (_this.props.showLoading) echartObj.showLoading(_this.props.loadingOption || null);else echartObj.hideLoading();
      return echartObj;
    };

    _this.echartsLib = _echarts.default; // the echarts object.

    _this.echartsElement = null; // echarts div element

    return _this;
  } // first add


  _createClass(EChartsReactCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rerender();
    } // update

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // 判断是否需要 setOption，由开发者自己来确定。默认为 true
      if (typeof this.props.shouldSetOption === 'function' && !this.props.shouldSetOption(prevProps, this.props)) {
        return;
      } // 以下属性修改的时候，需要 dispose 之后再新建
      // 1. 切换 theme 的时候
      // 2. 修改 opts 的时候
      // 3. 修改 onEvents 的时候，这样可以取消所有之前绑定的事件


      if (!(0, _fastDeepEqual.default)(prevProps.theme, this.props.theme) || !(0, _fastDeepEqual.default)(prevProps.opts, this.props.opts) || !(0, _fastDeepEqual.default)(prevProps.onEvents, this.props.onEvents)) {
        this.dispose();
        this.rerender(); // 重建

        return;
      } // 当这些属性保持不变的时候，不 setOption


      var pickKeys = ['options', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];

      if ((0, _fastDeepEqual.default)((0, _utils.pick)(this.props, pickKeys), (0, _utils.pick)(prevProps, pickKeys))) {
        return;
      }

      var echartObj = this.renderEchartDom(); // 样式修改的时候，可能会导致大小变化，所以触发一下 resize

      if (!(0, _fastDeepEqual.default)(prevProps.style, this.props.style) || !(0, _fastDeepEqual.default)(prevProps.className, this.props.className)) {
        try {
          echartObj.resize();
        } catch (e) {
          console.warn(e);
        }
      }
    } // remove

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dispose();
    } // return the echart object

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className;

      var newStyle = _objectSpread({
        height: 300
      }, style); // for render


      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(e) {
          _this2.echartsElement = e;
        },
        style: newStyle,
        className: "echarts-for-react ".concat(className)
      });
    }
  }]);

  return EChartsReactCore;
}(_react.Component);

exports.default = EChartsReactCore;
EChartsReactCore.propTypes = {
  options: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  // echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  notMerge: _propTypes.default.bool,
  lazyUpdate: _propTypes.default.bool,
  style: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onChartReady: _propTypes.default.func,
  showLoading: _propTypes.default.bool,
  loadingOption: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  onEvents: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  opts: _propTypes.default.shape({
    devicePixelRatio: _propTypes.default.number,
    renderer: _propTypes.default.oneOf(['canvas', 'svg']),
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null, undefined, 'auto'])]),
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null, undefined, 'auto'])])
  }),
  shouldSetOption: _propTypes.default.func
};
EChartsReactCore.defaultProps = {
  // echarts: {},
  notMerge: true,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: 'xm',
  onChartReady: function onChartReady() {},
  showLoading: false,
  loadingOption: {
    text: '加载中...',
    color: '#4413c2',
    textColor: '#270240',
    zlevel: 0
  },
  onEvents: {},
  opts: {},
  shouldSetOption: function shouldSetOption() {
    return true;
  }
};