module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SparklinesLine = __webpack_require__(4);

	var _SparklinesLine2 = _interopRequireDefault(_SparklinesLine);

	var _SparklinesBars = __webpack_require__(5);

	var _SparklinesBars2 = _interopRequireDefault(_SparklinesBars);

	var _SparklinesSpots = __webpack_require__(6);

	var _SparklinesSpots2 = _interopRequireDefault(_SparklinesSpots);

	var _SparklinesReferenceLine = __webpack_require__(7);

	var _SparklinesReferenceLine2 = _interopRequireDefault(_SparklinesReferenceLine);

	var _SparklinesNormalBand = __webpack_require__(9);

	var _SparklinesNormalBand2 = _interopRequireDefault(_SparklinesNormalBand);

	var _DataProcessor = __webpack_require__(8);

	var _DataProcessor2 = _interopRequireDefault(_DataProcessor);

	var Sparklines = (function (_React$Component) {
	    _inherits(Sparklines, _React$Component);

	    _createClass(Sparklines, null, [{
	        key: 'propTypes',
	        value: {
	            data: _react2['default'].PropTypes.array,
	            limit: _react2['default'].PropTypes.number,
	            width: _react2['default'].PropTypes.number,
	            height: _react2['default'].PropTypes.number,
	            margin: _react2['default'].PropTypes.number,
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            data: [],
	            width: 120,
	            height: 30,
	            margin: 2
	        },
	        enumerable: true
	    }]);

	    function Sparklines(props) {
	        _classCallCheck(this, Sparklines);

	        _get(Object.getPrototypeOf(Sparklines.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Sparklines, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            var _this = this;

	            return nextProps.data.some(function (d, i) {
	                return d !== _this.props.data[i];
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var data = _props.data;
	            var limit = _props.limit;
	            var width = _props.width;
	            var height = _props.height;
	            var margin = _props.margin;
	            var style = _props.style;

	            if (data.length === 0) return false;

	            var points = _DataProcessor2['default'].dataToPoints(data, limit, width, height, margin);

	            return _react2['default'].createElement(
	                'svg',
	                { width: width, height: height, style: style },
	                _react2['default'].Children.map(this.props.children, function (child) {
	                    return _react2['default'].cloneElement(child, { points: points, width: width, height: height, margin: margin });
	                })
	            );
	        }
	    }]);

	    return Sparklines;
	})(_react2['default'].Component);

	exports.Sparklines = Sparklines;
	exports.SparklinesLine = _SparklinesLine2['default'];
	exports.SparklinesBars = _SparklinesBars2['default'];
	exports.SparklinesSpots = _SparklinesSpots2['default'];
	exports.SparklinesReferenceLine = _SparklinesReferenceLine2['default'];
	exports.SparklinesNormalBand = _SparklinesNormalBand2['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var SparklinesLine = (function (_React$Component) {
	    _inherits(SparklinesLine, _React$Component);

	    function SparklinesLine() {
	        _classCallCheck(this, SparklinesLine);

	        _get(Object.getPrototypeOf(SparklinesLine.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SparklinesLine, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var points = _props.points;
	            var width = _props.width;
	            var height = _props.height;
	            var margin = _props.margin;
	            var color = _props.color;
	            var style = _props.style;

	            var linePoints = points.map(function (p) {
	                return [p.x, p.y];
	            }).reduce(function (a, b) {
	                return a.concat(b);
	            });
	            var closePolyPoints = [points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
	            var fillPoints = linePoints.concat(closePolyPoints);

	            var lineStyle = {
	                stroke: color || style.stroke || 'slategray',
	                strokeWidth: style.strokeWidth || '1',
	                strokeLinejoin: style.strokeLinejoin || 'round',
	                strokeLinecap: style.strokeLinecap || 'round',
	                fill: 'none'
	            };
	            var fillStyle = {
	                stroke: style.stroke || 'none',
	                strokeWidth: '0',
	                fillOpacity: style.fillOpacity || '.1',
	                fill: color || style.fill || 'slategray'
	            };

	            return _react2['default'].createElement(
	                'g',
	                null,
	                _react2['default'].createElement('polyline', { points: fillPoints.join(' '), style: fillStyle }),
	                _react2['default'].createElement('polyline', { points: linePoints.join(' '), style: lineStyle })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            color: _react2['default'].PropTypes.string,
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            style: {}
	        },
	        enumerable: true
	    }]);

	    return SparklinesLine;
	})(_react2['default'].Component);

	exports['default'] = SparklinesLine;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var SparklinesBars = (function (_React$Component) {
	    _inherits(SparklinesBars, _React$Component);

	    function SparklinesBars() {
	        _classCallCheck(this, SparklinesBars);

	        _get(Object.getPrototypeOf(SparklinesBars.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SparklinesBars, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var points = _props.points;
	            var width = _props.width;
	            var height = _props.height;
	            var margin = _props.margin;
	            var style = _props.style;

	            var barWidth = points.length >= 2 ? points[1].x - points[0].x : 0;

	            return _react2['default'].createElement(
	                'g',
	                null,
	                points.map(function (p, i) {
	                    return _react2['default'].createElement('rect', {
	                        key: i,
	                        x: p.x, y: p.y,
	                        width: barWidth, height: height - p.y,
	                        style: style });
	                })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            style: { fill: 'slategray' }
	        },
	        enumerable: true
	    }]);

	    return SparklinesBars;
	})(_react2['default'].Component);

	exports['default'] = SparklinesBars;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var SparklinesSpots = (function (_React$Component) {
	    _inherits(SparklinesSpots, _React$Component);

	    function SparklinesSpots() {
	        _classCallCheck(this, SparklinesSpots);

	        _get(Object.getPrototypeOf(SparklinesSpots.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SparklinesSpots, [{
	        key: 'lastDirection',
	        value: function lastDirection(points) {

	            Math.sign = Math.sign || function (x) {
	                return x > 0 ? 1 : -1;
	            };

	            return points.length < 2 ? 0 : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var points = _props.points;
	            var width = _props.width;
	            var height = _props.height;
	            var size = _props.size;
	            var style = _props.style;
	            var spotColors = _props.spotColors;

	            var startSpot = _react2['default'].createElement('circle', {
	                cx: points[0].x,
	                cy: points[0].y,
	                r: size,
	                style: style });

	            var endSpot = _react2['default'].createElement('circle', {
	                cx: points[points.length - 1].x,
	                cy: points[points.length - 1].y,
	                r: size,
	                style: style || { fill: spotColors[this.lastDirection(points)] } });

	            return _react2['default'].createElement(
	                'g',
	                null,
	                style && startSpot,
	                endSpot
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            size: _react2['default'].PropTypes.number,
	            style: _react2['default'].PropTypes.object,
	            spotColors: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            size: 2,
	            spotColors: {
	                '-1': 'red',
	                '0': 'black',
	                '1': 'green'
	            }
	        },
	        enumerable: true
	    }]);

	    return SparklinesSpots;
	})(_react2['default'].Component);

	exports['default'] = SparklinesSpots;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DataProcessor = __webpack_require__(8);

	var _DataProcessor2 = _interopRequireDefault(_DataProcessor);

	var SparklinesReferenceLine = (function (_React$Component) {
	    _inherits(SparklinesReferenceLine, _React$Component);

	    function SparklinesReferenceLine() {
	        _classCallCheck(this, SparklinesReferenceLine);

	        _get(Object.getPrototypeOf(SparklinesReferenceLine.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SparklinesReferenceLine, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var points = _props.points;
	            var margin = _props.margin;
	            var type = _props.type;
	            var style = _props.style;

	            var ypoints = points.map(function (p) {
	                return p.y;
	            });
	            var y = _DataProcessor2['default'].calculateFromData(ypoints, type);

	            return _react2['default'].createElement('line', {
	                x1: points[0].x, y1: y + margin,
	                x2: points[points.length - 1].x, y2: y + margin,
	                style: style });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            type: _react2['default'].PropTypes.oneOf(['max', 'min', 'mean', 'avg', 'median']),
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            type: 'mean',
	            style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
	        },
	        enumerable: true
	    }]);

	    return SparklinesReferenceLine;
	})(_react2['default'].Component);

	exports['default'] = SparklinesReferenceLine;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataProcessor = (function () {
	    function DataProcessor() {
	        _classCallCheck(this, DataProcessor);
	    }

	    _createClass(DataProcessor, null, [{
	        key: "dataToPoints",
	        value: function dataToPoints(data, limit, width, height, margin) {

	            if (limit && limit < data.length) {
	                data = data.slice(data.length - limit);
	            }

	            var max = this.max(data);
	            var min = this.min(data);

	            var vfactor = (height - margin * 2) / (max - min || 1);
	            var hfactor = (width - margin * 2) / ((limit || data.length) - 1);

	            return data.map(function (d, i) {
	                return {
	                    x: i * hfactor + margin,
	                    y: (max - data[i]) * vfactor + margin
	                };
	            });
	        }
	    }, {
	        key: "max",
	        value: function max(data) {
	            return Math.max.apply(Math, data);
	        }
	    }, {
	        key: "min",
	        value: function min(data) {
	            return Math.min.apply(Math, data);
	        }
	    }, {
	        key: "mean",
	        value: function mean(data) {
	            return (this.max(data) - this.min(data)) / 2;
	        }
	    }, {
	        key: "avg",
	        value: function avg(data) {
	            return data.reduce(function (a, b) {
	                return a + b;
	            }) / (data.length + 1);
	        }
	    }, {
	        key: "median",
	        value: function median(data) {
	            return data.sort()[Math.floor(data.length / 2)];
	        }
	    }, {
	        key: "variance",
	        value: function variance(data) {
	            var mean = this.mean(data);
	            var sq = data.map(function (n) {
	                return Math.pow(n - mean, 2);
	            });
	            return this.mean(sq);
	        }
	    }, {
	        key: "stdev",
	        value: function stdev(data) {
	            var mean = this.mean(data);
	            var sqDiff = data.map(function (n) {
	                return Math.pow(n - mean, 2);
	            });
	            var avgSqDiff = this.avg(sqDiff);
	            return Math.sqrt(avgSqDiff);
	        }
	    }, {
	        key: "calculateFromData",
	        value: function calculateFromData(data, calculationType) {
	            return this[calculationType].call(this, data);
	        }
	    }]);

	    return DataProcessor;
	})();

	exports["default"] = DataProcessor;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DataProcessor = __webpack_require__(8);

	var _DataProcessor2 = _interopRequireDefault(_DataProcessor);

	var SparklinesNormalBand = (function (_React$Component) {
	    _inherits(SparklinesNormalBand, _React$Component);

	    function SparklinesNormalBand() {
	        _classCallCheck(this, SparklinesNormalBand);

	        _get(Object.getPrototypeOf(SparklinesNormalBand.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(SparklinesNormalBand, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var points = _props.points;
	            var margin = _props.margin;
	            var style = _props.style;

	            var ypoints = points.map(function (p) {
	                return p.y;
	            });
	            var mean = _DataProcessor2['default'].calculateFromData(ypoints, 'mean');
	            var stdev = _DataProcessor2['default'].calculateFromData(ypoints, 'stdev');

	            return _react2['default'].createElement('rect', { x: points[0].x, y: mean - stdev + margin,
	                width: points[points.length - 1].x - points[0].x, height: stdev * 2,
	                style: style });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            style: _react2['default'].PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            style: { fill: 'red', fillOpacity: .1 }
	        },
	        enumerable: true
	    }]);

	    return SparklinesNormalBand;
	})(_react2['default'].Component);

	exports['default'] = SparklinesNormalBand;
	module.exports = exports['default'];

/***/ }
/******/ ]);