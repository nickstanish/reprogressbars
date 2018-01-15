import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Bar(props) {
  const { useBoxShadow, height, color, className, progress: { active, value } } = props;

  const barStyles = {
    width: value + '%',
    height,
    backgroundColor: color
  };

  if (useBoxShadow) {
    barStyles.boxShadow = `0 0 5px ${color}`;
  }

  const wrapperClassNames = classNames('reprogressbar', className, {
    'reprogressbar--active': active,
    'reprogressbar--inactive': !active
  });

  return (
    <div className={wrapperClassNames}>
      {active && <div className="reprogressbar_bar" style={barStyles} />}
    </div>
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
