'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HelloWorldJsx = require('./HelloWorld.js');

var _HelloWorldJsx2 = _interopRequireDefault(_HelloWorldJsx);

var Container = (0, _react.createClass)({
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'container' },
      _react2['default'].createElement(_HelloWorldJsx2['default'], { text: 'Hello World' })
    );
  }
});

exports['default'] = Container;
module.exports = exports['default'];
