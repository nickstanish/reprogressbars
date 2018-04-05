import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Bar(props) {
  var useBoxShadow = props.useBoxShadow,
      height = props.height,
      color = props.color,
      className = props.className,
      _props$progress = props.progress,
      active = _props$progress.active,
      value = _props$progress.value;


  var barStyles = {
    width: value + '%',
    height: height,
    backgroundColor: color
  };

  if (useBoxShadow) {
    barStyles.boxShadow = '0 0 5px ' + color;
  }

  var wrapperClassNames = classNames('reprogressbar', className, {
    'reprogressbar--active': active,
    'reprogressbar--inactive': !active
  });

  return React.createElement(
    'div',
    { className: wrapperClassNames },
    active && React.createElement('div', { className: 'reprogressbar_bar', style: barStyles })
  );
}

Bar.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  useBoxShadow: PropTypes.bool,
  progress: PropTypes.shape({
    active: PropTypes.bool,
    value: PropTypes.number
  })
};

Bar.defaultProps = {
  color: '#29d',
  height: '2px',
  useBoxShadow: true
};