import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Tweenable from 'shifty';

export default class ProgressBar extends Component {
  static defaultProps = {
    color: '#29d',
    height: '2px'
  };

  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    isLoading: PropTypes.bool,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this._tweenable = new Tweenable();

    this.state = {
      active: props.isLoading,
      value: 0
    };

    if (props.isLoading) {
      this.begin();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isLoading && nextProps.isLoading) {
      this.begin();
    } else if (this.props.isLoading && !nextProps.isLoading) {
      this.finish();
    }
  }
  begin() {
    this._tweenable.stop();
    this.setState({
      active: true,
      value: 0
    });

    this._tweenable.tween({
      from: { value: 0 },
      to: { value: 70 },
      duration: 2000,
      easing: 'easeOutQuad',
      step: () => this.updateValue(),
      finish: () => {
        this.updateValue();
        this._tweenable.tween({
          from: { value: this._tweenable.get().value },
          to: { value: 85 },
          duration: 20000,
          easing: 'easeOutQuad',
          step: () => this.updateValue(),
          finish: () => this.updateValue()
        });
      }
    });
  }
  finish() {
    this._tweenable.stop();
    this._tweenable.tween({
      from: { value: this.state.value },
      to: { value: 100 },
      duration: 200,
      easing: 'easeOutQuad',
      step: () => this.updateValue(),
      finish: () => {
        this.setState({
          value: this._tweenable.get().value,
          active: false
        });
      }
    });
  }

  updateValue() {
    this.setState({
      value: this._tweenable.get().value
    });
  }
  render() {
    const { height, color, className } = this.props;

    const barStyles = {
      width: this.state.value + '%',
      height,
      backgroundColor: color,
      boxShadow: `0 0 5px ${color}`
    };

    const wrapperClassNames = classNames('reprogressbar', className, {
      'reprogressbar--active': this.state.active,
      'reprogressbar--inactive': !this.state.active
    });
    return (
      <div className={wrapperClassNames}>
        {this.state.active && <div className="reprogressbar_bar" style={barStyles} />}
      </div>
    );
  }
}
