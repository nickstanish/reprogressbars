import React from 'react';
import PropTypes from 'prop-types';
import ProgressProvider from '../components/ProgressProvider';

export default function withProgress(ProgressBarComponent) {
  function ProgressBarProvider(props) {
    return (
      <ProgressProvider isLoading={props.isLoading}>
        <ProgressBarComponent />
      </ProgressProvider>
    );
  }

  ProgressBarProvider.propTypes = {
    isLoading: PropTypes.bool
  };

  return ProgressBarProvider;
}
