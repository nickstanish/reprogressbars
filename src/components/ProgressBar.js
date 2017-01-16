import React, { Component, PropTypes } from 'react';
import ProgressProvider from './ProgressProvider';
import Bar from './Bar';

function only(originalObject, keys) {
  const newObject = {};
  keys.forEach((key) => {
    if (originalObject[key] !== undefined) {
      newObject[key] = originalObject[key];
    }
  });
  return newObject;
}

export default class ProgressBar extends Component {
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    isLoading: PropTypes.bool,
    className: PropTypes.string,
    useBoxShadow: PropTypes.bool
  };

  render() {
    const barProps = only(this.props, ['color', 'height', 'className', 'useBoxShadow']);
    return (
      <ProgressProvider isLoading={this.props.isLoading}>
        <Bar {...barProps} />
      </ProgressProvider>
    );
  }
}
