function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal'; // import { bind, clear } from 'size-sensor'

import { addListener, removeListener } from 'resize-detector';
import echarts from 'echarts/lib/echarts';
import { pick } from '../../utils';

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
          removeListener(_this.echartsElement, _this.resizeHandler);
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
        addListener(_this.echartsElement, _this.resizeHandler);
      }
    };

    _this.bindEvents = function (instance, events) {
      var _bindEvent = function _bindEvent(eventName, func) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof func === 'function') {
          // binding event
          // instance.off(eventName); // ?????? dispose ???????????????????????? off ??????
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

    _this.echartsLib = echarts; // the echarts object.

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
      // ?????????????????? setOption?????????????????????????????????????????? true
      if (typeof this.props.shouldSetOption === 'function' && !this.props.shouldSetOption(prevProps, this.props)) {
        return;
      } // ???????????????????????????????????? dispose ???????????????
      // 1. ?????? theme ?????????
      // 2. ?????? opts ?????????
      // 3. ?????? onEvents ?????????????????????????????????????????????????????????


      if (!isEqual(prevProps.theme, this.props.theme) || !isEqual(prevProps.opts, this.props.opts) || !isEqual(prevProps.onEvents, this.props.onEvents)) {
        this.dispose();
        this.rerender(); // ??????

        return;
      } // ?????????????????????????????????????????? setOption


      var pickKeys = ['options', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];

      if (isEqual(pick(this.props, pickKeys), pick(prevProps, pickKeys))) {
        return;
      }

      var echartObj = this.renderEchartDom(); // ???????????????????????????????????????????????????????????????????????? resize

      if (!isEqual(prevProps.style, this.props.style) || !isEqual(prevProps.className, this.props.className)) {
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


      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(e) {
          _this2.echartsElement = e;
        },
        style: newStyle,
        className: "echarts-for-react ".concat(className)
      });
    }
  }]);

  return EChartsReactCore;
}(Component);

export { EChartsReactCore as default };
EChartsReactCore.propTypes = {
  options: PropTypes.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  // echarts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChartReady: PropTypes.func,
  showLoading: PropTypes.bool,
  loadingOption: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  onEvents: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  }),
  shouldSetOption: PropTypes.func
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
    text: '?????????...',
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