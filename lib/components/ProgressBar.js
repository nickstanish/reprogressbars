import React from 'react';
import PropTypes from 'prop-types';
import ProgressProvider from './ProgressProvider';
import Bar from './Bar';

function only(originalObject, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    if (originalObject[key] !== undefined) {
      newObject[key] = originalObject[key];
    }
  });
  return newObject;
}

export default function ProgressBar(props) {
  var barProps = only(props, ['color', 'height', 'className', 'useBoxShadow']);
  return React.createElement(
    ProgressProvider,
    { isLoading: props.isLoading },
    React.createElement(Bar, barProps)
  );
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  useBoxShadow: PropTypes.bool
};