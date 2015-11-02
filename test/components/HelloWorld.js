'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HelloWorld = (0, _react.createClass)({
  propTypes: {
    text: _react.PropTypes.string.isRequired
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      this.props.text
    );
  }
});

exports['default'] = HelloWorld;
module.exports = exports['default'];
