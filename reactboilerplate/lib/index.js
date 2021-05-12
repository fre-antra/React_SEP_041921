"use strict";

var _Home = _interopRequireDefault(require("./Home/Home"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//class Hello extends React.Component {
//    render() {
//        return <Home />
//    }
//}
var output = document.querySelector("#output");

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Home["default"], null), output);