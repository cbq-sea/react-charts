"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "registerTheme", {
  enumerable: true,
  get: function get() {
    return _echarts.registerTheme;
  }
});
Object.defineProperty(exports, "Bar", {
  enumerable: true,
  get: function get() {
    return _Bar.default;
  }
});
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function get() {
    return _Line.default;
  }
});
Object.defineProperty(exports, "Pie", {
  enumerable: true,
  get: function get() {
    return _Pie.default;
  }
});
Object.defineProperty(exports, "Area", {
  enumerable: true,
  get: function get() {
    return _Area.default;
  }
});
Object.defineProperty(exports, "WordCloud", {
  enumerable: true,
  get: function get() {
    return _WordCloud.default;
  }
});
Object.defineProperty(exports, "Chart", {
  enumerable: true,
  get: function get() {
    return _EChartsReactCore.default;
  }
});

var _echarts = require("echarts/lib/echarts");

require("../theme");

require("../dependency");

var _Bar = _interopRequireDefault(require("./Bar"));

var _Line = _interopRequireDefault(require("./Line"));

var _Pie = _interopRequireDefault(require("./Pie"));

var _Area = _interopRequireDefault(require("./Area"));

var _WordCloud = _interopRequireDefault(require("./WordCloud"));

var _EChartsReactCore = _interopRequireDefault(require("./Core/EChartsReactCore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }