const React = require('react');
const ReactDOM = require('react-dom/server');

module.exports = function render(options) {
  const Component = options.Component;
  const props = options.props;
  const isStatic = options.isStatic || false;

  if (isStatic) {
    return ReactDOM
      .renderToStaticMarkup(React.createElement(Component, props));
  }

  return ReactDOM
    .renderToString(React.createElement(Component, props));
};
