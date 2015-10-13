import React from 'react';
import {
  renderToStaticMarkup,
  renderToString,
} from 'react-dom/server';

export default function render({Component, props, isStatic = false}) {
  if (isStatic) {
    return renderToStaticMarkup(<Component {...props} />);
  }
  return renderToString(<Component {...props} />);
}
