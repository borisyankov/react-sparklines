(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSparklines"] = factory(require("react"));
	else
		root["ReactSparklines"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.reduce(function (a, b) {
        return a + b;
    }) / data.length;
};

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.min.apply(Math, data);
};

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.max.apply(Math, data);
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(1);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sqDiff = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    var avgSqDiff = (0, _mean2.default)(sqDiff);
    return Math.sqrt(avgSqDiff);
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SparklinesText = exports.SparklinesNormalBand = exports.SparklinesReferenceLine = exports.SparklinesSpots = exports.SparklinesBars = exports.SparklinesCurve = exports.SparklinesLine = exports.Sparklines = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SparklinesText = __webpack_require__(22);

var _SparklinesText2 = _interopRequireDefault(_SparklinesText);

var _SparklinesLine = __webpack_require__(9);

var _SparklinesLine2 = _interopRequireDefault(_SparklinesLine);

var _SparklinesCurve = __webpack_require__(8);

var _SparklinesCurve2 = _interopRequireDefault(_SparklinesCurve);

var _SparklinesBars = __webpack_require__(7);

var _SparklinesBars2 = _interopRequireDefault(_SparklinesBars);

var _SparklinesSpots = __webpack_require__(12);

var _SparklinesSpots2 = _interopRequireDefault(_SparklinesSpots);

var _SparklinesReferenceLine = __webpack_require__(11);

var _SparklinesReferenceLine2 = _interopRequireDefault(_SparklinesReferenceLine);

var _SparklinesNormalBand = __webpack_require__(10);

var _SparklinesNormalBand2 = _interopRequireDefault(_SparklinesNormalBand);

var _dataToPoints = __webpack_require__(13);

var _dataToPoints2 = _interopRequireDefault(_dataToPoints);

var _reactAddonsShallowCompare = __webpack_require__(19);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sparklines = function (_React$Component) {
    _inherits(Sparklines, _React$Component);

    function Sparklines(props) {
        _classCallCheck(this, Sparklines);

        return _possibleConstructorReturn(this, (Sparklines.__proto__ || Object.getPrototypeOf(Sparklines)).call(this, props));
    }

    _createClass(Sparklines, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                limit = _props.limit,
                width = _props.width,
                height = _props.height,
                svgWidth = _props.svgWidth,
                svgHeight = _props.svgHeight,
                preserveAspectRatio = _props.preserveAspectRatio,
                margin = _props.margin,
                style = _props.style,
                max = _props.max,
                min = _props.min;


            if (data.length === 0) return null;

            var points = (0, _dataToPoints2.default)({ data: data, limit: limit, width: width, height: height, margin: margin, max: max, min: min });

            var svgOpts = { style: style, viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: preserveAspectRatio };
            if (svgWidth > 0) svgOpts.width = svgWidth;
            if (svgHeight > 0) svgOpts.height = svgHeight;

            return _react2.default.createElement(
                'svg',
                svgOpts,
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, { data: data, points: points, width: width, height: height, margin: margin });
                })
            );
        }
    }]);

    return Sparklines;
}(_react2.default.Component);

Sparklines.propTypes = {
    data: _react2.default.PropTypes.array,
    limit: _react2.default.PropTypes.number,
    width: _react2.default.PropTypes.number,
    height: _react2.default.PropTypes.number,
    svgWidth: _react2.default.PropTypes.number,
    svgHeight: _react2.default.PropTypes.number,
    preserveAspectRatio: _react2.default.PropTypes.string,
    margin: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.object,
    min: _react2.default.PropTypes.number,
    max: _react2.default.PropTypes.number,
    onMouseMove: _react2.default.PropTypes.func
};
Sparklines.defaultProps = {
    data: [],
    width: 240,
    height: 60,
    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin: 2
};
exports.Sparklines = Sparklines;
exports.SparklinesLine = _SparklinesLine2.default;
exports.SparklinesCurve = _SparklinesCurve2.default;
exports.SparklinesBars = _SparklinesBars2.default;
exports.SparklinesSpots = _SparklinesSpots2.default;
exports.SparklinesReferenceLine = _SparklinesReferenceLine2.default;
exports.SparklinesNormalBand = _SparklinesNormalBand2.default;
exports.SparklinesText = _SparklinesText2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesBars = function (_React$Component) {
    _inherits(SparklinesBars, _React$Component);

    function SparklinesBars() {
        _classCallCheck(this, SparklinesBars);

        return _possibleConstructorReturn(this, (SparklinesBars.__proto__ || Object.getPrototypeOf(SparklinesBars)).apply(this, arguments));
    }

    _createClass(SparklinesBars, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                points = _props.points,
                height = _props.height,
                style = _props.style,
                barWidth = _props.barWidth,
                onMouseMove = _props.onMouseMove;

            var strokeWidth = 1 * (style && style.strokeWidth || 0);
            var width = barWidth || (points && points.length >= 2 ? Math.ceil(Math.max(0, points[1].x - points[0].x - strokeWidth)) : 0);

            return _react2.default.createElement(
                'g',
                null,
                points.map(function (p, i) {
                    return _react2.default.createElement('rect', {
                        key: i,
                        x: Math.ceil(p.x - strokeWidth * i),
                        y: Math.ceil(p.y),
                        width: Math.ceil(width),
                        height: Math.ceil(Math.max(0, height - p.y)),
                        style: style,
                        onMouseMove: onMouseMove.bind(_this2, p) });
                })
            );
        }
    }]);

    return SparklinesBars;
}(_react2.default.Component);

SparklinesBars.propTypes = {
    points: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
    height: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.object,
    barWidth: _react2.default.PropTypes.number,
    onMouseMove: _react2.default.PropTypes.func
};
SparklinesBars.defaultProps = {
    style: { fill: 'slategray' }
};
exports.default = SparklinesBars;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesCurve = function (_React$Component) {
    _inherits(SparklinesCurve, _React$Component);

    function SparklinesCurve() {
        _classCallCheck(this, SparklinesCurve);

        return _possibleConstructorReturn(this, (SparklinesCurve.__proto__ || Object.getPrototypeOf(SparklinesCurve)).apply(this, arguments));
    }

    _createClass(SparklinesCurve, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                margin = _props.margin,
                color = _props.color,
                style = _props.style,
                _props$divisor = _props.divisor,
                divisor = _props$divisor === undefined ? 0.25 : _props$divisor;

            var prev = void 0;
            var curve = function curve(p) {
                var res = void 0;
                if (!prev) {
                    res = [p.x, p.y];
                } else {
                    var len = (p.x - prev.x) * divisor;
                    res = ["C",
                    //x1
                    prev.x + len,
                    //y1
                    prev.y,
                    //x2,
                    p.x - len,
                    //y2,
                    p.y,
                    //x,
                    p.x,
                    //y
                    p.y];
                }
                prev = p;
                return res;
            };
            var linePoints = points.map(function (p) {
                return curve(p);
            }).reduce(function (a, b) {
                return a.concat(b);
            });
            var closePolyPoints = ["L" + points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
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
                fill: style.fill || color || 'slategray'
            };

            return _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("path", { d: "M" + fillPoints.join(' '), style: fillStyle }),
                _react2.default.createElement("path", { d: "M" + linePoints.join(' '), style: lineStyle })
            );
        }
    }]);

    return SparklinesCurve;
}(_react2.default.Component);

SparklinesCurve.propTypes = {
    color: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object
};
SparklinesCurve.defaultProps = {
    style: {}
};
exports.default = SparklinesCurve;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesLine = function (_React$Component) {
    _inherits(SparklinesLine, _React$Component);

    function SparklinesLine() {
        _classCallCheck(this, SparklinesLine);

        return _possibleConstructorReturn(this, (SparklinesLine.__proto__ || Object.getPrototypeOf(SparklinesLine)).apply(this, arguments));
    }

    _createClass(SparklinesLine, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                margin = _props.margin,
                color = _props.color,
                style = _props.style,
                onMouseMove = _props.onMouseMove;


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
                fill: style.fill || color || 'slategray',
                pointerEvents: 'auto'
            };

            var tooltips = points.map(function (p, i) {
                return _react2.default.createElement('circle', {
                    cx: p.x,
                    cy: p.y,
                    r: 2,
                    style: fillStyle,
                    onMouseEnter: function onMouseEnter(e) {
                        return onMouseMove('enter', data[i], p);
                    },
                    onClick: function onClick(e) {
                        return onMouseMove('click', data[i], p);
                    }
                });
            });

            return _react2.default.createElement(
                'g',
                null,
                tooltips,
                _react2.default.createElement('polyline', { points: fillPoints.join(' '), style: fillStyle }),
                _react2.default.createElement('polyline', { points: linePoints.join(' '), style: lineStyle })
            );
        }
    }]);

    return SparklinesLine;
}(_react2.default.Component);

SparklinesLine.propTypes = {
    color: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object
};
SparklinesLine.defaultProps = {
    style: {}
};
exports.default = SparklinesLine;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mean = __webpack_require__(1);

var _mean2 = _interopRequireDefault(_mean);

var _stdev = __webpack_require__(4);

var _stdev2 = _interopRequireDefault(_stdev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesNormalBand = function (_React$Component) {
    _inherits(SparklinesNormalBand, _React$Component);

    function SparklinesNormalBand() {
        _classCallCheck(this, SparklinesNormalBand);

        return _possibleConstructorReturn(this, (SparklinesNormalBand.__proto__ || Object.getPrototypeOf(SparklinesNormalBand)).apply(this, arguments));
    }

    _createClass(SparklinesNormalBand, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                style = _props.style;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var dataMean = (0, _mean2.default)(ypoints);
            var dataStdev = (0, _stdev2.default)(ypoints);

            return _react2.default.createElement('rect', { x: points[0].x, y: dataMean - dataStdev + margin,
                width: points[points.length - 1].x - points[0].x, height: _stdev2.default * 2,
                style: style });
        }
    }]);

    return SparklinesNormalBand;
}(_react2.default.Component);

SparklinesNormalBand.propTypes = {
    style: _react2.default.PropTypes.object
};
SparklinesNormalBand.defaultProps = {
    style: { fill: 'red', fillOpacity: .1 }
};
exports.default = SparklinesNormalBand;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataProcessing = __webpack_require__(14);

var dataProcessing = _interopRequireWildcard(_dataProcessing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesReferenceLine = function (_React$Component) {
    _inherits(SparklinesReferenceLine, _React$Component);

    function SparklinesReferenceLine() {
        _classCallCheck(this, SparklinesReferenceLine);

        return _possibleConstructorReturn(this, (SparklinesReferenceLine.__proto__ || Object.getPrototypeOf(SparklinesReferenceLine)).apply(this, arguments));
    }

    _createClass(SparklinesReferenceLine, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                type = _props.type,
                style = _props.style,
                value = _props.value;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var y = type == 'custom' ? value : dataProcessing[type](ypoints);

            return _react2.default.createElement('line', {
                x1: points[0].x, y1: y + margin,
                x2: points[points.length - 1].x, y2: y + margin,
                style: style });
        }
    }]);

    return SparklinesReferenceLine;
}(_react2.default.Component);

SparklinesReferenceLine.propTypes = {
    type: _react2.default.PropTypes.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
    value: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.object
};
SparklinesReferenceLine.defaultProps = {
    type: 'mean',
    style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
};
exports.default = SparklinesReferenceLine;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesSpots = function (_React$Component) {
    _inherits(SparklinesSpots, _React$Component);

    function SparklinesSpots() {
        _classCallCheck(this, SparklinesSpots);

        return _possibleConstructorReturn(this, (SparklinesSpots.__proto__ || Object.getPrototypeOf(SparklinesSpots)).apply(this, arguments));
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
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                size = _props.size,
                style = _props.style,
                spotColors = _props.spotColors;


            var startSpot = _react2.default.createElement('circle', {
                cx: points[0].x,
                cy: points[0].y,
                r: size,
                style: style });

            var endSpot = _react2.default.createElement('circle', {
                cx: points[points.length - 1].x,
                cy: points[points.length - 1].y,
                r: size,
                style: style || { fill: spotColors[this.lastDirection(points)] } });

            return _react2.default.createElement(
                'g',
                null,
                style && startSpot,
                endSpot
            );
        }
    }]);

    return SparklinesSpots;
}(_react2.default.Component);

SparklinesSpots.propTypes = {
    size: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.object,
    spotColors: _react2.default.PropTypes.object
};
SparklinesSpots.defaultProps = {
    size: 2,
    spotColors: {
        '-1': 'red',
        '0': 'black',
        '1': 'green'
    }
};
exports.default = SparklinesSpots;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(2);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(3);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        limit = _ref.limit,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 1 : _ref$height,
        _ref$margin = _ref.margin,
        margin = _ref$margin === undefined ? 0 : _ref$margin,
        _ref$max = _ref.max,
        max = _ref$max === undefined ? (0, _max2.default)(data) : _ref$max,
        _ref$min = _ref.min,
        min = _ref$min === undefined ? (0, _min2.default)(data) : _ref$min;


    var len = data.length;

    if (limit && limit < len) {
        data = data.slice(len - limit);
    }

    var vfactor = (height - margin * 2) / (max - min || 2);
    var hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

    return data.map(function (d, i) {
        return {
            x: i * hfactor + margin,
            y: (max === min ? 1 : max - d) * vfactor + margin
        };
    });
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variance = exports.stdev = exports.median = exports.midRange = exports.avg = exports.mean = exports.max = exports.min = undefined;

var _min2 = __webpack_require__(2);

var _min3 = _interopRequireDefault(_min2);

var _mean2 = __webpack_require__(1);

var _mean3 = _interopRequireDefault(_mean2);

var _midRange2 = __webpack_require__(16);

var _midRange3 = _interopRequireDefault(_midRange2);

var _median2 = __webpack_require__(15);

var _median3 = _interopRequireDefault(_median2);

var _stdev2 = __webpack_require__(4);

var _stdev3 = _interopRequireDefault(_stdev2);

var _variance2 = __webpack_require__(17);

var _variance3 = _interopRequireDefault(_variance2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.min = _min3.default;
exports.max = _min3.default;
exports.mean = _mean3.default;
exports.avg = _mean3.default;
exports.midRange = _midRange3.default;
exports.median = _median3.default;
exports.stdev = _stdev3.default;
exports.variance = _variance3.default;

/***/ },
/* 15 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.sort(function (a, b) {
        return a - b;
    })[Math.floor(data.length / 2)];
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(2);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(3);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    return (0, _max2.default)(data) - (0, _min2.default)(data) / 2;
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(1);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sq = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    return (0, _mean2.default)(sq);
};

/***/ },
/* 18 */
/***/ function(module, exports) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var shallowEqual = __webpack_require__(18);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesText = function (_React$Component) {
    _inherits(SparklinesText, _React$Component);

    function SparklinesText() {
        _classCallCheck(this, SparklinesText);

        return _possibleConstructorReturn(this, (SparklinesText.__proto__ || Object.getPrototypeOf(SparklinesText)).apply(this, arguments));
    }

    _createClass(SparklinesText, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                point = _props.point,
                text = _props.text,
                fontSize = _props.fontSize,
                fontFamily = _props.fontFamily;
            var x = point.x,
                y = point.y;

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement(
                    'text',
                    { x: x, y: y, fontFamily: fontFamily || "Verdana", fontSize: fontSize || 10 },
                    text
                )
            );
        }
    }]);

    return SparklinesText;
}(_react2.default.Component);

SparklinesText.propTypes = {
    text: _react2.default.PropTypes.string,
    point: _react2.default.PropTypes.object,
    fontSize: _react2.default.PropTypes.number,
    fontFamily: _react2.default.PropTypes.string
};
SparklinesText.defaultProps = {
    text: '',
    point: { x: 0, y: 0 }
};
exports.default = SparklinesText;

/***/ }
/******/ ])
});
;