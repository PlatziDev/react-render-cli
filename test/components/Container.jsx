import React, {
  createClass,
} from 'react';

import HelloWorld from './HelloWorld.jsx';

const Container = createClass({
  render() {
    return (
      <div id="container">
        <HelloWorld text="Hello World" />
      </div>
    );
  },
});

export default Container;
