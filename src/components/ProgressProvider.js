import React, { Component, PropTypes, Children } from 'react';
import Tweenable from 'shifty';

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
    this._tweenable.stop();
    this._tweenable = null;
  }

  begin() {
    this._tweenable.stop();
    this.setState({
      active: true,
      value: 0
    });

    this._tweenable.tween({
      from: { value: 0 },
      to: { value: 45 },
      duration: 2000,
      easing: 'easeOutQuad',
      step: () => this.updateValue(),
      finish: () => {
        this.updateValue();
        this._tweenable.tween({
          from: { value: this._tweenable.get().value },
          to: { value: 80 },
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
