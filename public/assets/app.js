(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/Alert */ "./assets/js/elements/Alert.js");
/* harmony import */ var _elements_Burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/Burger */ "./assets/js/elements/Burger.js");
/* harmony import */ var _elements_Burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elements_Burger__WEBPACK_IMPORTED_MODULE_2__);
// any CSS you import will output into a single css file (app.css in this case)


 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/elements/Alert.js":
/*!*************************************!*\
  !*** ./assets/js/elements/Alert.js ***!
  \*************************************/
/*! exports provided: Alert, FloatAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatAlert", function() { return FloatAlert; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../modules/animation */ "./assets/js/modules/animation.js");






















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Alert = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Alert, _HTMLElement);

  var _super = _createSuper(Alert);

  function Alert() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref.type,
        message = _ref.message;

    _classCallCheck(this, Alert);

    _this = _super.call(this);

    if (type !== undefined) {
      _this.type = type;
    } else {
      _this.type = _this.getAttribute('type');
    }

    if (!message) {
      message = _this.innerHTML;
    }

    if (_this.type === 'error' || _this.type === null) {
      _this.type = 'danger';
    }

    _this.message = message;
    return _this;
  }

  _createClass(Alert, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.innerHTML = "<div class=\"alert alert-".concat(this.type, "\">\n            <svg class=\"icon icon-{$name}\">\n              <use xlink:href=\"/sprite.svg#").concat(this.icon, "\"></use>\n            </svg>\n            ").concat(this.message, "\n            <button class=\"alert-close\">\n              <svg class=\"icon\">\n                <use xlink:href=\"/sprite.svg#cross\"></use>\n              </svg>\n            </button>\n          </div>");
      this.querySelector('.alert-close').addEventListener('click', function (e) {
        e.preventDefault();

        _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var element = this.querySelector('.alert');
      element.classList.add('out');
      window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_modules_animation__WEBPACK_IMPORTED_MODULE_21__["slideToTop"])(element);

              case 2:
                _this3.parentElement.removeChild(_this3);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 500);
    }
  }, {
    key: "icon",
    get: function get() {
      if (this.type === 'danger') {
        return 'warning';
      } else if (this.type === 'success') {
        return 'check';
      }
    }
  }]);

  return Alert;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
var FloatAlert = /*#__PURE__*/function (_Alert) {
  _inherits(FloatAlert, _Alert);

  var _super2 = _createSuper(FloatAlert);

  function FloatAlert() {
    var _this4;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FloatAlert);

    _this4 = _super2.call(this, options);

    _this4.classList.add('is-floating');

    _this4.style.position = 'fixed';
    _this4.style.top = '20px';
    _this4.style.right = '20px';
    _this4.style.maxWidth = '400px';
    _this4.style.zIndex = '100';
    return _this4;
  }

  return FloatAlert;
}(Alert);
customElements.define('alert-message', Alert);
customElements.define('alert-floating', FloatAlert);

/***/ }),

/***/ "./assets/js/elements/Burger.js":
/*!**************************************!*\
  !*** ./assets/js/elements/Burger.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelector('.nav__burger').addEventListener('click', function () {
  document.querySelector('.nav__menu').classList.toggle('is-active');
  document.querySelector('.nav__burger').classList.toggle('is-active');
});

/***/ }),

/***/ "./assets/js/modules/animation.js":
/*!****************************************!*\
  !*** ./assets/js/modules/animation.js ***!
  \****************************************/
/*! exports provided: slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @param {HTMLElement} element 
 * @param {Number} duration 
 * @returns {Promise<boolean>}
 */
function slideToTop(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  return new Promise(function (resolve, reject) {
    element.style.height = element.offsetHeight + 'px';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      resolve(false);
    }, duration);
  });
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VsZW1lbnRzL0FsZXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9CdXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvYW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2UiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInNsaWRlVG9Ub3AiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJIVE1MRWxlbWVudCIsIkZsb2F0QWxlcnQiLCJvcHRpb25zIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWF4V2lkdGgiLCJ6SW5kZXgiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImRvY3VtZW50IiwidG9nZ2xlIiwiZHVyYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7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QVIsQ0FBY3NCLFlBQWQsR0FBNkIsQ0FBN0I7QUFDQTlCLFVBQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFXO0FBQ3pCSixhQUFPLENBQUNXLEtBQVIsQ0FBY3VCLE9BQWQsR0FBd0IsTUFBeEI7QUFDQWxDLGFBQU8sQ0FBQ1csS0FBUixDQUFjd0IsY0FBZCxDQUE2QixRQUE3QjtBQUNBbkMsYUFBTyxDQUFDVyxLQUFSLENBQWN3QixjQUFkLENBQTZCLGFBQTdCO0FBQ0FuQyxhQUFPLENBQUNXLEtBQVIsQ0FBY3dCLGNBQWQsQ0FBNkIsZ0JBQTdCO0FBQ0FuQyxhQUFPLENBQUNXLEtBQVIsQ0FBY3dCLGNBQWQsQ0FBNkIsWUFBN0I7QUFDQW5DLGFBQU8sQ0FBQ1csS0FBUixDQUFjd0IsY0FBZCxDQUE2QixlQUE3QjtBQUNBbkMsYUFBTyxDQUFDVyxLQUFSLENBQWN3QixjQUFkLENBQTZCLFVBQTdCO0FBQ0FuQyxhQUFPLENBQUNXLEtBQVIsQ0FBY3dCLGNBQWQsQ0FBNkIscUJBQTdCO0FBQ0FuQyxhQUFPLENBQUNXLEtBQVIsQ0FBY3dCLGNBQWQsQ0FBNkIscUJBQTdCO0FBQ0FaLGFBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxLQVhELEVBV0dGLFFBWEg7QUFZSCxHQXZCTSxDQUFQO0FBd0JILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vZWxlbWVudHMvQWxlcnQnXHJcbmltcG9ydCAnLi9lbGVtZW50cy9CdXJnZXInXHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTsiLCJpbXBvcnQge3NsaWRlVG9Ub3B9IGZyb20gJy4uL21vZHVsZXMvYW5pbWF0aW9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFsZXJ0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHt0eXBlLCBtZXNzYWdlfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmlubmVySFRNTFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZXJyb3InIHx8IHRoaXMudHlwZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy50eXBlID0gJ2RhbmdlcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dGhpcy50eXBlfVwiPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbiBpY29uLXskbmFtZX1cIj5cclxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIvc3ByaXRlLnN2ZyMke3RoaXMuaWNvbn1cIj48L3VzZT5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICR7dGhpcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWxlcnQtY2xvc2VcIj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiL3Nwcml0ZS5zdmcjY3Jvc3NcIj48L3VzZT5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNsb3NlICgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCBzbGlkZVRvVG9wKGVsZW1lbnQpXHJcbiAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcylcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZGFuZ2VyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb2F0QWxlcnQgZXh0ZW5kcyBBbGVydCB7XHJcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucylcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lzLWZsb2F0aW5nJylcclxuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIHRoaXMuc3R5bGUudG9wID0gJzIwcHgnXHJcbiAgICAgICAgdGhpcy5zdHlsZS5yaWdodCA9ICcyMHB4J1xyXG4gICAgICAgIHRoaXMuc3R5bGUubWF4V2lkdGggPSAnNDAwcHgnXHJcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSAnMTAwJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FsZXJ0LW1lc3NhZ2UnLCBBbGVydClcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbGVydC1mbG9hdGluZycsIEZsb2F0QWxlcnQpIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYnVyZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxufSkiLCIvKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzbGlkZVRvVG9wIChlbGVtZW50LCBkdXJhdGlvbiA9IDUwMCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJ1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnXHJcbiAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgICAgfSwgZHVyYXRpb24pXHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==