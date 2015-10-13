import React, {
  createClass,
  PropTypes,
} from 'react';

const HelloWorld = createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
  },
  render() {
    return (
      <div>{this.props.text}</div>
    );
  },
});

export default HelloWorld;
