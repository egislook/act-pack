"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pack = require("../@pack");

var _actheme = _interopRequireWildcard(require("actheme"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MainScreen(props) {
  return /*#__PURE__*/_react["default"].createElement(Styled.Wrap, null, /*#__PURE__*/_react["default"].createElement(Styled.Text, null, "React Native for Web & Next.js"), /*#__PURE__*/_react["default"].createElement(Styled.Link, {
    href: "/"
  }, "Go back to Main Screen"), /*#__PURE__*/_react["default"].createElement(Styled.Cont, null, /*#__PURE__*/_react["default"].createElement(Styled.Text, {
    "aria-level": "2"
  }, "Subheader")));
}

var _default = MainScreen;
exports["default"] = _default;

var Styled = _actheme["default"].create({
  Wrap: 'ai,jc:c fg:1',
  Cont: 'mt:s4',
  Text: 'fs,mb:s6 fs:24',
  Link: [_pack.Elems.Link, 'c:pink fb:normal fs:s5']
}); // function AlternateScreen(props) {
//   return (
//     <View style={styles.container}>
//       <Text accessibilityRole="header" style={styles.text}>
//         React Native for Web & Next.js Alt
//       </Text>
//
//       <Elems.Link style={styles.link} href="/">
//         Back to Main Screen
//       </Elems.Link>
//
//       <View style={styles.textContainer}>
//         <Text accessibilityRole="header" aria-level="2" style={styles.text}>
//           Subheader
//         </Text>
//       </View>
//     </View>
//   )
// }
//
// export default AlternateScreen
//
// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   link: {
//     color: 'blue',
//   },
//   textContainer: {
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   text: {
//     alignItems: 'center',
//     fontSize: 24,
//     marginBottom: 24,
//   },
// })