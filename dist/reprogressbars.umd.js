(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = global || self, factory(global.Reprogressbars = {}, global.React));
}(this, function (exports, React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	var invariant_1 = invariant;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant_1(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction_1;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ( module.exports) {
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	function Bar(props) {
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
	    barStyles.boxShadow = "0 0 5px ".concat(color);
	  }

	  var wrapperClassNames = classnames('reprogressbar', className, {
	    'reprogressbar--active': active,
	    'reprogressbar--inactive': !active
	  });
	  return React__default.createElement("div", {
	    className: wrapperClassNames
	  }, active && React__default.createElement("div", {
	    className: "reprogressbar_bar",
	    style: barStyles
	  }));
	}
	Bar.propTypes = {
	  color: propTypes.string,
	  height: propTypes.string,
	  className: propTypes.string,
	  useBoxShadow: propTypes.bool,
	  progress: propTypes.shape({
	    active: propTypes.bool,
	    value: propTypes.number
	  })
	};
	Bar.defaultProps = {
	  color: '#29d',
	  height: '2px',
	  useBoxShadow: true
	};

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(source, true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(source).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	var shifty = createCommonjsModule(function (module, exports) {
	/*! 2.3.1 */
	!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=6)}([function(t,e,n){(function(t){function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new j,n=e.tween(t);return n.tweenable=e,n}Object.defineProperty(e,"__esModule",{value:!0}),e.Tweenable=e.composeEasingObject=e.tweenProps=e.clone=e.each=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tween=o;var c=n(5),s=r(c),f=n(1),h=function(t){return t&&t.__esModule?t:{default:t}}(f),l=n(7),p=r(l),d="undefined"!=typeof window?window:t,m=d.cancelAnimationFrame||d.webkitCancelAnimationFrame||d.oCancelAnimationFrame||d.msCancelAnimationFrame||d.mozCancelRequestAnimationFrame||d.clearTimeout,_=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||d.mozCancelRequestAnimationFrame&&d.mozRequestAnimationFrame||setTimeout,v=function(){},y=e.each=function(t,e){return Object.keys(t).forEach(e)},w=e.clone=function(t){return (0, h.default)({},t)},g=w(s),b=function(t,e,n,r){return t+(e-t)*n(r)},O=e.tweenProps=function(t,e,n,r,i,o,u){var a=t<o?0:(t-o)/i;return y(e,function(t){var i=u[t],o="function"==typeof i?i:g[i];e[t]=b(n[t],r[t],o,a);}),e},M=e.composeEasingObject=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",n={},r=void 0===e?"undefined":a(e);return "string"===r||"function"===r?y(t,function(t){return n[t]=e}):y(t,function(t){return n[t]=n[t]||e[t]||"linear"}),n},j=e.Tweenable=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;i(this,t),this._currentState=e,this._configured=!1,this._scheduleFunction=_,void 0!==n&&this.setConfig(n);}return u(t,[{key:"_applyFilter",value:function(e){var n=this,r=t.filters,i=this._filterArgs;y(r,function(t){var o=r[t][e];void 0!==o&&o.apply(n,i);});}},{key:"_timeoutHandler",value:function(e){var n=this,r=arguments,i=this._currentState,o=this._delay,u=this._duration,a=this._step,c=this._targetState,s=this._timestamp,f=s+o+u,h=Math.min(e||t.now(),f),l=h>=f,p=u-(f-h);this.isPlaying()&&(l?(a(c,this._attachment,p),this.stop(!0)):(this._scheduleId=this._scheduleFunction.call(d,function(){return n._timeoutHandler.apply(n,r)},1e3/60),this._applyFilter("beforeTween"),h<s+o?(h=1,u=1,s=1):s+=o,O(h,i,this._originalState,c,u,s,this._easing),this._applyFilter("afterTween"),a(i,this._attachment,p)));}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=this._attachment,r=this._configured;return this._isTweening?this:(void 0===e&&r||this.setConfig(e),this._timestamp=t.now(),this._start(this.get(),n),this.resume())}},{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._configured=!0,this._attachment=e.attachment,(0, h.default)(this,{_pausedAtTime:null,_scheduleId:null,_delay:e.delay||0,_start:e.start||v,_step:e.step||v,_duration:e.duration||500,_currentState:w(e.from||this.get())}),(0, h.default)(this,{_originalState:this.get(),_targetState:w(e.to||this.get())});var n=this._currentState;this._targetState=(0, h.default)({},n,this._targetState),this._easing=M(n,e.easing),this._filterArgs=[n,this._originalState,this._targetState,this._easing],this._applyFilter("tweenCreated");var r=e.promise||Promise;return this._promise=new r(function(e,n){t._resolve=e,t._reject=n;}),this._promise.catch(v),this}},{key:"get",value:function(){return w(this._currentState)}},{key:"set",value:function(t){this._currentState=t;}},{key:"pause",value:function(){return this._pausedAtTime=t.now(),this._isPaused=!0,this}},{key:"resume",value:function(){return this._isPaused&&(this._timestamp+=t.now()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this._promise}},{key:"seek",value:function(e){e=Math.max(e,0);var n=t.now();return this._timestamp+e===0?this:(this._timestamp=n-e,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,this._timeoutHandler(n),this.pause()),this)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._attachment,n=this._currentState,r=this._easing,i=this._originalState,o=this._targetState;return this._isTweening=!1,this._isPaused=!1,m(this._scheduleId),t?(this._applyFilter("beforeTween"),O(1,n,i,o,1,0,r),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(n,e)):this._reject(n,e),this}},{key:"isPlaying",value:function(){return this._isTweening&&!this._isPaused}},{key:"setScheduleFunction",value:function(t){this._scheduleFunction=t;}},{key:"dispose",value:function(){var t=this;y(this,function(e){return delete t[e]});}}]),t}();(0, h.default)(j,{formulas:g,filters:{token:p},now:Date.now||function(t){return +new Date}});}).call(e,n(4));},function(t,e,n){function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return !1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return !1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return !1;var r={};return "abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t;}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return !1}}()?Object.assign:function(t,e){for(var n,a,c=r(t),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var f in n)o.call(n,f)&&(c[f]=n[f]);if(i){a=i(n);for(var h=0;h<a.length;h++)u.call(n,a[h])&&(c[a[h]]=n[a[h]]);}}return c};},function(t,e,n){function r(t,e,n,r,i,o){var u=0,a=0,c=0,s=0,f=0,h=0,l=function(t){return ((u*t+a)*t+c)*t},p=function(t){return ((s*t+f)*t+h)*t},d=function(t){return (3*u*t+2*a)*t+c},m=function(t){return t>=0?t:0-t},_=function(t,e){var n=void 0,r=void 0,i=void 0,o=void 0,u=void 0,a=void 0;for(i=t,a=0;a<8;a++){if(o=l(i)-t,m(o)<e)return i;if(u=d(i),m(u)<1e-6)break;i-=o/u;}if(n=0,r=1,(i=t)<n)return n;if(i>r)return r;for(;n<r;){if(o=l(i),m(o-t)<e)return i;t>o?n=i:r=i,i=.5*(r-n)+n;}return i};return c=3*e,a=3*(r-e)-c,u=1-c-a,h=3*n,f=3*(i-n)-h,s=1-h-f,function(t,e){return p(_(t,e))}(t,function(t){return 1/(200*t)}(o))}Object.defineProperty(e,"__esModule",{value:!0}),e.unsetBezierFunction=e.setBezierFunction=void 0;var i=n(0),o=n(1),u=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function(t,e,n,i){return function(o){return r(o,t,e,n,i,1)}};e.setBezierFunction=function(t,e,n,r,o){return i.Tweenable.formulas[t]=(0, u.default)(a(e,n,r,o),{displayName:t,x1:e,y1:n,x2:r,y2:o})},e.unsetBezierFunction=function(t){return delete i.Tweenable.formulas[t]};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.interpolate=void 0;var r=n(0),i=new r.Tweenable;i._filterArgs=[];e.interpolate=function(t,e,n,o){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=(0, r.clone)(t),c=(0, r.composeEasingObject)(t,o);i.set({}),i._filterArgs=[a,t,e,c],i._applyFilter("tweenCreated"),i._applyFilter("beforeTween");var s=(0, r.tweenProps)(n,a,t,e,1,u,c);return i._applyFilter("afterTween"),s};},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this");}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window);}t.exports=r;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});e.linear=function(t){return t},e.easeInQuad=function(t){return Math.pow(t,2)},e.easeOutQuad=function(t){return -(Math.pow(t-1,2)-1)},e.easeInOutQuad=function(t){return (t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},e.easeInCubic=function(t){return Math.pow(t,3)},e.easeOutCubic=function(t){return Math.pow(t-1,3)+1},e.easeInOutCubic=function(t){return (t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},e.easeInQuart=function(t){return Math.pow(t,4)},e.easeOutQuart=function(t){return -(Math.pow(t-1,4)-1)},e.easeInOutQuart=function(t){return (t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeInQuint=function(t){return Math.pow(t,5)},e.easeOutQuint=function(t){return Math.pow(t-1,5)+1},e.easeInOutQuint=function(t){return (t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},e.easeInSine=function(t){return 1-Math.cos(t*(Math.PI/2))},e.easeOutSine=function(t){return Math.sin(t*(Math.PI/2))},e.easeInOutSine=function(t){return -.5*(Math.cos(Math.PI*t)-1)},e.easeInExpo=function(t){return 0===t?0:Math.pow(2,10*(t-1))},e.easeOutExpo=function(t){return 1===t?1:1-Math.pow(2,-10*t)},e.easeInOutExpo=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},e.easeInCirc=function(t){return -(Math.sqrt(1-t*t)-1)},e.easeOutCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},e.easeInOutCirc=function(t){return (t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.easeOutBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.easeInBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.easeOutBack=function(t){var e=1.70158;return (t-=1)*t*((e+1)*t+e)+1},e.easeInOutBack=function(t){var e=1.70158;return (t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.elastic=function(t){return -1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},e.swingFromTo=function(t){var e=1.70158;return (t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.swingFrom=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.swingTo=function(t){var e=1.70158;return (t-=1)*t*((e+1)*t+e)+1},e.bounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.bouncePast=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},e.easeFromTo=function(t){return (t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeFrom=function(t){return Math.pow(t,4)},e.easeTo=function(t){return Math.pow(t,.25)};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);Object.defineProperty(e,"Tweenable",{enumerable:!0,get:function(){return r.Tweenable}}),Object.defineProperty(e,"tween",{enumerable:!0,get:function(){return r.tween}});var i=n(3);Object.defineProperty(e,"interpolate",{enumerable:!0,get:function(){return i.interpolate}});var o=n(2);Object.defineProperty(e,"setBezierFunction",{enumerable:!0,get:function(){return o.setBezierFunction}}),Object.defineProperty(e,"unsetBezierFunction",{enumerable:!0,get:function(){return o.unsetBezierFunction}});},function(t,e,n){function r(t){return parseInt(t,16)}function i(t,e,n){[t,e,n].forEach(_),this._tokenData=g(t);}function o(t,e,n,r){var i=this._tokenData;P(r,i),[t,e,n].forEach(function(t){return b(t,i)});}function u(t,e,n,r){var i=this._tokenData;[t,e,n].forEach(function(t){return F(t,i)}),S(r,i);}Object.defineProperty(e,"__esModule",{value:!0}),e.tweenCreated=i,e.beforeTween=o,e.afterTween=u;var a=n(0),c=function(){var t=/[0-9.\-]+/g.source,e=/,\s*/.source;return new RegExp("rgb\\("+t+e+t+e+t+"\\)","g")}(),s=/#([0-9]|[a-f]){3,6}/gi,f=function(t,e){return t.map(function(t,n){return "_"+e+"_"+n})},h=function(t){var e=t.match(/([^\-0-9\.]+)/g);return e?(1===e.length||t.charAt(0).match(/(\d|\-|\.)/))&&e.unshift(""):e=["",""],e.join("VAL")},l=function(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),[r(t.substr(0,2)),r(t.substr(2,2)),r(t.substr(4,2))]},p=function(t){return "rgb("+l(t).join(",")+")"},d=function(t,e,n){var r=e.match(t),i=e.replace(t,"VAL");return r&&r.forEach(function(t){return i=i.replace("VAL",n(t))}),i},m=function(t){return d(s,t,p)},_=function(t){(0, a.each)(t,function(e){var n=t[e];"string"==typeof n&&n.match(s)&&(t[e]=m(n));});},v=function(t){var e=t.match(/[0-9.\-]+/g).map(Math.floor);return ""+t.match(/^.*\(/)[0]+e.join(",")+")"},y=function(t){return d(c,t,v)},w=function(t){return t.match(/[0-9.\-]+/g)},g=function(t){var e={};return (0, a.each)(t,function(n){var r=t[n];"string"==typeof r&&(e[n]={formatString:h(r),chunkNames:f(w(r),n)});}),e},b=function(t,e){(0, a.each)(e,function(n){w(t[n]).forEach(function(r,i){return t[e[n].chunkNames[i]]=+r}),delete t[n];});},O=function(t,e){var n={};return e.forEach(function(e){n[e]=t[e],delete t[e];}),n},M=function(t,e){return e.map(function(e){return t[e]})},j=function(t,e){return e.forEach(function(e){return t=t.replace("VAL",+e.toFixed(4))}),t},F=function(t,e){(0, a.each)(e,function(n){var r=e[n],i=r.chunkNames,o=r.formatString,u=j(o,M(O(t,i),i));t[n]=y(u);});},P=function(t,e){(0, a.each)(e,function(n){var r=e[n].chunkNames,i=t[n];"string"==typeof i?function(){var e=i.split(" "),n=e[e.length-1];r.forEach(function(r,i){return t[r]=e[i]||n});}():r.forEach(function(e){return t[e]=i}),delete t[n];});},S=function(t,e){(0, a.each)(e,function(n){var r=e[n].chunkNames,i=(r.length,t[r[0]]);t[n]="string"==typeof i?r.map(function(e){var n=t[e];return delete t[e],n}).join(" "):i;});};}])});

	});

	unwrapExports(shifty);
	var shifty_1 = shifty.Tweenable;
	var shifty_2 = shifty.shifty;

	var stepsConfig = {
	  initial: {
	    to: {
	      value: 45
	    },
	    duration: 2000,
	    easing: 'easeOutQuad'
	  },
	  slow: {
	    to: {
	      value: 80
	    },
	    duration: 20000,
	    easing: 'easeOutQuad'
	  },
	  finish: {
	    to: {
	      value: 100
	    },
	    duration: 200,
	    easing: 'easeOutQuad'
	  }
	};

	var noOp = function noOp() {};

	var ProgressProvider =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(ProgressProvider, _Component);

	  function ProgressProvider(props) {
	    var _this;

	    _classCallCheck(this, ProgressProvider);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressProvider).call(this, props));
	    _this.state = {
	      active: false,
	      value: 0
	    };
	    return _this;
	  }

	  _createClass(ProgressProvider, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this._tweenable = new shifty_1();

	      if (this.props.isLoading) {
	        this.begin();
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (!this.props.isLoading && nextProps.isLoading) {
	        this.begin();
	      } else if (this.props.isLoading && !nextProps.isLoading) {
	        this.finish();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.stop();

	      this._tweenable.dispose();

	      this._tweenable = null;
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      if (this._tweenable.isPlaying()) {
	        this._tweenable.stop();
	      }
	    }
	  }, {
	    key: "begin",
	    value: function begin() {
	      var _this2 = this;

	      this.stop();
	      this.setState({
	        active: true,
	        value: 0
	      });
	      var fromValue = {
	        from: {
	          value: 0
	        }
	      };
	      this.tween(_objectSpread2({}, stepsConfig.initial, {}, fromValue)).then(function () {
	        return _this2.tween(stepsConfig.slow);
	      }).catch(noOp);
	    }
	  }, {
	    key: "tween",
	    value: function tween(config) {
	      var _this3 = this;

	      this._tweenable.setConfig(_objectSpread2({}, config, {
	        step: function step(state) {
	          return _this3.updateValue(state);
	        }
	      }));

	      return this._tweenable.tween();
	    }
	  }, {
	    key: "finish",
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
	    key: "updateValue",
	    value: function updateValue(_ref) {
	      var value = _ref.value;
	      this.setState({
	        value: value
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	      var _this$state = this.state,
	          active = _this$state.active,
	          value = _this$state.value;
	      var child = React.Children.only(children);

	      if (!child) {
	        return null;
	      }

	      var progressProps = {
	        active: active,
	        value: value
	      };
	      var enhancedChild = React__default.cloneElement(child, {
	        progress: progressProps
	      });
	      return enhancedChild;
	    }
	  }]);

	  return ProgressProvider;
	}(React.Component);

	_defineProperty(ProgressProvider, "propTypes", {
	  isLoading: propTypes.bool,
	  children: propTypes.element
	});

	function only(originalObject, keys) {
	  var newObject = {};
	  keys.forEach(function (key) {
	    if (originalObject[key] !== undefined) {
	      newObject[key] = originalObject[key];
	    }
	  });
	  return newObject;
	}

	function ProgressBar(props) {
	  var barProps = only(props, ['color', 'height', 'className', 'useBoxShadow']);
	  return React__default.createElement(ProgressProvider, {
	    isLoading: props.isLoading
	  }, React__default.createElement(Bar, barProps));
	}
	ProgressBar.propTypes = {
	  color: propTypes.string,
	  height: propTypes.string,
	  isLoading: propTypes.bool,
	  className: propTypes.string,
	  useBoxShadow: propTypes.bool
	};

	function withProgress(ProgressBarComponent) {
	  function ProgressBarProvider(props) {
	    return React__default.createElement(ProgressProvider, {
	      isLoading: props.isLoading
	    }, React__default.createElement(ProgressBarComponent, null));
	  }

	  ProgressBarProvider.propTypes = {
	    isLoading: propTypes.bool
	  };
	  return ProgressBarProvider;
	}

	exports.Bar = Bar;
	exports.ProgressBar = ProgressBar;
	exports.ProgressProvider = ProgressProvider;
	exports.withProgress = withProgress;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
