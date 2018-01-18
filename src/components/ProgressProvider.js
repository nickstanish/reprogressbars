import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

const stepsConfig = {
  initial: {
    to: { value: 45 },
    duration: 2000,
    easing: 'easeOutQuad'
  },
  slow: {
    to: { value: 80 },
    duration: 20000,
    easing: 'easeOutQuad',
  },
  finish: {
    to: { value: 100 },
    duration: 200,
    easing: 'easeOutQuad'
  }
};

const noOp = () => {};

export default class ProgressProvider extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.element
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: 0
    };
  }

  componentDidMount() {
    this._tweenable = new Tweenable();

    if (this.props.isLoading) {
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

  componentWillUnmount() {
    this.stop();
    this._tweenable.dispose();
    this._tweenable = null;
  }

  stop() {
    if (this._tweenable.isPlaying()) {
      this._tweenable.stop();
    }
  }

  begin() {
    this.stop();
    this.setState({
      active: true,
      value: 0
    });

    const fromValue = {
      from: { value: 0 }
    };

    this.tween({ ...stepsConfig.initial, ...fromValue })
      .then(() => this.tween(stepsConfig.slow)).catch(noOp);
  }
  tween(config) {
    this._tweenable.setConfig({
      ...config,
      step: state => this.updateValue(state)
    });
    return this._tweenable.tween();
  }
  finish() {
    this.stop();
    this.tween(stepsConfig.finish).then(() => {
      this.setState({
        value: this._tweenable.get().value,
        active: false
      });
    }).catch(noOp);
  }

  updateValue({ value }) {
    this.setState({
      value
    });
  }
  render() {
    const { children } = this.props;
    const { active, value } = this.state;

    const child = Children.only(children);
    if (!child) {
      return null;
    }

    const progressProps = {
      active,
      value
    };

    const enhancedChild = React.cloneElement(child, {
      progress: progressProps
    });

    return enhancedChild;
  }
}
