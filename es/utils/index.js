function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export function summate(data) {
  return data.reduce(function (a, b) {
    return a + b.value * 1;
  }, 0);
}
/**
 * 格式化千分位
 * @param num
 * @returns {string}
 */

export var formatNumber = function formatNumber(num) {
  var numeral = Number(num);
  var bool = Number.isInteger(numeral);
  var reg = /\d{1,3}(?=(\d{3})+$)/g;

  if (bool) {
    return "".concat(numeral).replace(reg, '$&,');
  }

  var temp = "".concat(numeral).split('.');
  return "".concat(temp[0].replace(reg, '$&,'), ".").concat(temp[1]);
};
export function omit(obj, fields) {
  var shallowCopy = _objectSpread({}, obj);

  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}
export var pick = function pick(obj, keys) {
  var r = {};
  keys.forEach(function (key) {
    r[key] = obj[key];
  });
  return r;
};
export function isString(v) {
  return typeof v === 'string';
}