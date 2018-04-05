import React from 'react';
import PropTypes from 'prop-types';
import ProgressProvider from '../components/ProgressProvider';

export default function withProgress(ProgressBarComponent) {
  function ProgressBarProvider(props) {
    return React.createElement(
      ProgressProvider,
      { isLoading: props.isLoading },
      React.createElement(ProgressBarComponent, null)
    );
  }

  ProgressBarProvider.propTypes = {
    isLoading: PropTypes.bool
  };

  return ProgressBarProvider;
}