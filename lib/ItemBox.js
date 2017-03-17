"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ItemBox = (function (_React$Component) {
  _inherits(ItemBox, _React$Component);

  function ItemBox() {
    _classCallCheck(this, ItemBox);

    _get(Object.getPrototypeOf(ItemBox.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ItemBox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var maxNumberOfCols = _props.maxNumberOfCols;
      var index = _props.index;
      var layout = _props.layout;

      var style = layout ? { visibility: "visible", position: "absolute", top: layout.top, left: layout.left } : maxNumberOfCols > -1 && index < maxNumberOfCols ? { visibility: "visible", float: "left", position: "relative" } : {};

      return _react2["default"].createElement(
        "div",
        { ref: function (e) {
            return _this.itemBox = e;
          },
          className: "waterfall-item-box",
          style: style },
        this.props.children
      );
    }
  }]);

  return ItemBox;
})(_react2["default"].Component);

exports["default"] = ItemBox;
module.exports = exports["default"];