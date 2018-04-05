var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Tweenable } from 'shifty';

var stepsConfig = {
  initial: {
    to: { value: 45 },
    duration: 2000,
    easing: 'easeOutQuad'
  },
  slow: {
    to: { value: 80 },
    duration: 20000,
    easing: 'easeOutQuad'
  },
  finish: {
    to: { value: 100 },
    duration: 200,
    easing: 'easeOutQuad'
  }
};

var noOp = function noOp() {};

var ProgressProvider = (_temp = _class = function (_Component) {
  _inherits(ProgressProvider, _Component);

  function ProgressProvider(props) {
    _classCallCheck(this, ProgressProvider);

    var _this = _possibleConstructorReturn(this, (ProgressProvider.__proto__ || Object.getPrototypeOf(ProgressProvider)).call(this, props));

    _this.state = {
      active: false,
      value: 0
    };
    return _this;
  }

  _createClass(ProgressProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._tweenable = new Tweenable();

      if (this.props.isLoading) {
        this.begin();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.isLoading && nextProps.isLoading) {
        this.begin();
      } else if (this.props.isLoading && !nextProps.isLoading) {
        this.finish();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
      this._tweenable.dispose();
      this._tweenable = null;
    }
  }, {
    key: 'stop',
    value: function stop() {
      if (this._tweenable.isPlaying()) {
        this._tweenable.stop();
      }
    }
  }, {
    key: 'begin',
    value: function begin() {
      var _this2 = this;

      this.stop();
      this.setState({
        active: true,
        value: 0
      });

      var fromValue = {
        from: { value: 0 }
      };

      this.tween(_extends({}, stepsConfig.initial, fromValue)).then(function () {
        return _this2.tween(stepsConfig.slow);
      }).catch(noOp);
    }
  }, {
    key: 'tween',
    value: function tween(config) {
      var _this3 = this;

      this._tweenable.setConfig(_extends({}, config, {
        step: function step(state) {
          return _this3.updateValue(state);
        }
      }));
      return this._tweenable.tween();
    }
  }, {
    key: 'finish',
    value: function finish() {
      var _this4 = this;

      this.stop();
      this.tween(stepsConfig.finish).then(function () {
        _this4.setState({
          value: _this4._tweenable.get().value,
          active: false
        });
      }).catch(noOp);
    }
  }, {
    key: 'updateValue',
    value: function updateValue(_ref) {
      var value = _ref.value;

      this.setState({
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          active = _state.active,
          value = _state.value;


      var child = Children.only(children);
      if (!child) {
        return null;
      }

      var progressProps = {
        active: active,
        value: value
      };

      var enhancedChild = React.cloneElement(child, {
        progress: progressProps
      });

      return enhancedChild;
    }
  }]);

  return ProgressProvider;
}(Component), _class.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.element
}, _temp);
export { ProgressProvider as default };