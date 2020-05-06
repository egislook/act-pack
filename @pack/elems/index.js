"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _actheme = _interopRequireDefault(require("actheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Link = function Link(_ref) {
  var href = _ref.href,
      prefetch = _ref.prefetch,
      replace = _ref.replace,
      scroll = _ref.scroll,
      shallow = _ref.shallow,
      _ref$assetPrefix = _ref.assetPrefix,
      assetPrefix = _ref$assetPrefix === void 0 ? process.env.assetPrefix : _ref$assetPrefix,
      rest = _objectWithoutProperties(_ref, ["href", "prefetch", "replace", "scroll", "shallow", "assetPrefix"]);

  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    as: "".concat(assetPrefix).concat(href),
    href: href,
    passHref: true,
    prefetch: prefetch,
    replace: replace,
    scroll: scroll,
    shallow: shallow
  }, /*#__PURE__*/_react["default"].createElement(Styled.Text, _extends({
    accessibilityRole: "link"
  }, rest)));
};

exports.Link = Link;

var Styled = _actheme["default"].create({
  Text: ['Text', 'c:yellow fb:bold fs:s10']
});

var _default = {
  Link: Link
};
exports["default"] = _default;