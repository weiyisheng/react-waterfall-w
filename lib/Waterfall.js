'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemBox = require('./ItemBox');

var _ItemBox2 = _interopRequireDefault(_ItemBox);

Array.prototype.minValue = function () {
  var maxIndex = 0;

  for (var i = 0; i < this.length; i++) {
    if (this[i] < this[maxIndex]) {
      maxIndex = i;
    }
  }

  return {
    index: maxIndex,
    value: this[maxIndex]
  };
};

Array.prototype.maxValue = function () {
  var maxIndex = 0;

  for (var i = 0; i < this.length; i++) {
    if (this[i] > this[maxIndex]) {
      maxIndex = i;
    }
  }

  return {
    index: maxIndex,
    value: this[maxIndex]
  };
};

var Waterfall = (function (_React$Component) {
  _inherits(Waterfall, _React$Component);

  function Waterfall(props) {
    _classCallCheck(this, Waterfall);

    _get(Object.getPrototypeOf(Waterfall.prototype), 'constructor', this).call(this, props);

    this.state = {
      maxNumberOfCols: -1,
      childrenLayouts: {},
      containerWidth: 0,
      containerHeight: 0
    };

    this.childrenSizes = {};
  }

  _createClass(Waterfall, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      window.addEventListener('resize', function () {
        _this.caculateNumberOfCols();
      });
    }
  }, {
    key: 'caculateNumberOfCols',
    value: function caculateNumberOfCols() {
      var containerWidth = this.container.offsetWidth;
      var width = this.childrenSizes[Object.keys(this.childrenSizes)[0]].width;
      if (parseInt(containerWidth / width) !== this.maxNumberOfCols) {
        var resetChidrenPosition = false;
        if (this.maxNumberOfCols) {
          resetChidrenPosition = true;
        }
        this.maxNumberOfCols = parseInt(containerWidth / width);
        this.setState({
          maxNumberOfCols: this.maxNumberOfCols,
          containerWidth: this.maxNumberOfCols * width
        });
        if (resetChidrenPosition) {
          this.caculateChildrenPosition();
        }
      }
    }
  }, {
    key: 'caculateChildrenPosition',
    value: function caculateChildrenPosition() {
      var _this2 = this;

      if (this.maxNumberOfCols === -1) {
        return;
      }

      var colHeightAcc = [];
      var childrenLayouts = {};
      for (var i = 0; i < this.maxNumberOfCols; i++) {
        colHeightAcc[i] = 0;
      }
      Object.keys(this.childrenSizes).forEach(function (k) {
        var colWidth = _this2.childrenSizes[0].width;

        childrenLayouts = Object.assign({}, childrenLayouts, _defineProperty({}, k, {
          left: colHeightAcc.minValue().index * colWidth,
          top: colHeightAcc.minValue().value
        }));
        colHeightAcc[colHeightAcc.minValue().index] = colHeightAcc.minValue().value + _this2.childrenSizes[k].height;
      });

      this.setState({
        childrenLayouts: childrenLayouts,
        containerHeight: colHeightAcc.maxValue().value
      });
    }
  }, {
    key: 'setChildSize',
    value: function setChildSize(_ref) {
      var index = _ref.index;
      var height = _ref.height;
      var width = _ref.width;
      var items = this.props.items;

      this.childrenSizes = Object.assign({}, this.childrenSizes, _defineProperty({}, index, {
        width: width,
        height: height
      }));

      if (this.state.maxNumberOfCols === -1) {
        this.caculateNumberOfCols();
      }

      if (Object.keys(this.childrenSizes).length === items.length) {
        this.caculateChildrenPosition();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var renderItem = _props.renderItem;
      var items = _props.items;
      var _state = this.state;
      var maxNumberOfCols = _state.maxNumberOfCols;
      var childrenLayouts = _state.childrenLayouts;
      var containerWidth = _state.containerWidth;
      var containerHeight = _state.containerHeight;

      return _react2['default'].createElement(
        'div',
        { className: 'waterfall-cot',
          ref: function (e) {
            return _this3.container = e;
          } },
        _react2['default'].createElement(
          'div',
          { className: 'waterfall-box',
            style: containerWidth && containerHeight ? { width: containerWidth, height: containerHeight } : null },
          (items || []).map(function (item, index) {
            return _react2['default'].createElement(
              _ItemBox2['default'],
              { index: index,
                key: index,
                layout: childrenLayouts[index],
                maxNumberOfCols: maxNumberOfCols },
              renderItem(item, function (width, height) {
                _this3.setChildSize({ index: index, height: height, width: width });
              })
            );
          })
        )
      );
    }
  }]);

  return Waterfall;
})(_react2['default'].Component);

exports['default'] = Waterfall;
module.exports = exports['default'];