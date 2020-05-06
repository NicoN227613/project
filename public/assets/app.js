(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/modules/choices.scss":
/*!*****************************************!*\
  !*** ./assets/css/modules/choices.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/modules/date.scss":
/*!**************************************!*\
  !*** ./assets/css/modules/date.scss ***!
  \**************************************/
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
/* harmony import */ var _elements_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/DatePicker */ "./assets/js/elements/DatePicker.js");
/* harmony import */ var _elements_UserSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/UserSelect */ "./assets/js/elements/UserSelect.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/filter */ "./assets/js/modules/filter.js");
// any CSS you import will output into a single css file (app.css in this case)





 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
new _modules_filter__WEBPACK_IMPORTED_MODULE_5__["default"](document.querySelector('.js-filter'));

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
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Alert, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      var duration = this.getAttribute('duration');
      var progressBar = '';

      if (duration !== null) {
        progressBar = "<div class=\"alert__progress\" style=\"animation-duration: ".concat(duration, "\">");
        window.setTimeout(this.close, duration * 1000);
      }

      this.innerHTML = "<div class=\"alert alert-".concat(this.type, "\">\n            <svg class=\"icon icon-{$name}\">\n              <use xlink:href=\"/sprite.svg#").concat(this.icon, "\"></use>\n            </svg>\n            ").concat(this.message, "\n            <button class=\"alert-close\">\n              <svg class=\"icon\">\n                <use xlink:href=\"/sprite.svg#cross\"></use>\n              </svg>\n            </button>\n            ").concat(progressBar, "\n          </div>");
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

                _this3.dispatchEvent(new CustomEvent('close'));

              case 4:
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

/***/ "./assets/js/elements/DatePicker.js":
/*!******************************************!*\
  !*** ./assets/js/elements/DatePicker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_modules_date_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../css/modules/date.scss */ "./assets/css/modules/date.scss");
/* harmony import */ var _css_modules_date_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_modules_date_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flatpickr/dist/l10n/fr.js */ "./node_modules/flatpickr/dist/l10n/fr.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_20__);


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





/**
 * @property {flatpickr} flatpickr
 */

var DatePicker = /*#__PURE__*/function (_HTMLInputElement) {
  _inherits(DatePicker, _HTMLInputElement);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    return _super.apply(this, arguments);
  }

  _createClass(DatePicker, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.flatpickr = flatpickr__WEBPACK_IMPORTED_MODULE_17___default()(this, {
        altInput: true,
        altFormat: "j F Y",
        dateFormat: "Y-m-d",
        locale: flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_20__["French"],
        weekNumbers: true
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.flatpickr.destroy();
    }
  }]);

  return DatePicker;
}( /*#__PURE__*/_wrapNativeSuper(HTMLInputElement));


global.customElements.define('date-picker', DatePicker, {
  "extends": 'input'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/elements/UserSelect.js":
/*!******************************************!*\
  !*** ./assets/js/elements/UserSelect.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_modules_choices_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../css/modules/choices.scss */ "./assets/css/modules/choices.scss");
/* harmony import */ var _css_modules_choices_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_css_modules_choices_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_timers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../modules/timers */ "./assets/js/modules/timers.js");





















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/**
 * @param {string} endpoint
 * @param {string} search
 */

function getUsers(endpoint, search) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(endpoint + '/' + search);

          case 2:
            response = _context.sent;

            if (!(response.status >= 200 && response.status < 300)) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return response.json();

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
            return _context.abrupt("return", []);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}
/**
 * @property {number|null} timer
 * @property {string} endpoint
 * @property {choices} Choices
 */


var UserSelect = /*#__PURE__*/function (_HTMLSelectElement) {
  _inherits(UserSelect, _HTMLSelectElement);

  var _super = _createSuper(UserSelect);

  function UserSelect() {
    _classCallCheck(this, UserSelect);

    return _super.apply(this, arguments);
  }

  _createClass(UserSelect, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.timer) {
        global.clearTimeout(this.timer);
        this.timer = null;
        return;
      }

      this.endpoint = this.getAttribute('endpoint');

      if (this.endpoint === null) {
        console.error("Impossible de monter l'élément user-select, endpoint n'est pas définit");
        return;
      }

      var onSearch = Object(_modules_timers__WEBPACK_IMPORTED_MODULE_22__["debounce"])(this.onSearch.bind(this), 1000);
      this.choices = new choices_js__WEBPACK_IMPORTED_MODULE_20___default.a(this);
      this.addEventListener('search', onSearch);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.timer = window.setTimeout(function () {
        if (this.choices) {
          this.choices.destroy();
        }
      }, 500);
    }
  }, {
    key: "onSearch",
    value: function onSearch(e) {
      var search = e.detail.value;

      if (search.length != 0) {
        this.choices.setChoices(getUsers(this.endpoint, search), 'id', 'email', true);
      }
    }
  }]);

  return UserSelect;
}( /*#__PURE__*/_wrapNativeSuper(HTMLSelectElement));

global.customElements.define('user-select', UserSelect, {
  "extends": 'select'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ }),

/***/ "./assets/js/modules/filter.js":
/*!*************************************!*\
  !*** ./assets/js/modules/filter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flip_toolkit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flip-toolkit */ "./node_modules/flip-toolkit/lib/index.es.js");


















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // https://github.com/aholachek/react-flip-toolkit

/**
 * @property {HTMLFormElement} form
 * @property {HTMLElement} products
 * @property {HTMLElement} pagination
 * @property {number} page
 * @property {boolean} moreNav
 */

var Filter = /*#__PURE__*/function () {
  /** @param {HTMLElement|null} element */
  function Filter(element) {
    _classCallCheck(this, Filter);

    if (element === null) {
      return;
    } // Création de variables qui ciblent les différents classes js-filter-...


    this.form = element.querySelector('.js-filter-form');
    this.products = element.querySelector('.js-filter-products');
    this.pagination = element.querySelector('.js-filter-pagination');
    this.page = parseInt(new URLSearchParams(window.location.search).get('page') || 1);
    this.moreNav = this.page === 1;
    this.bindEvents();
  }
  /**
   * Ajouter des comportements aux différents éléments
   */


  _createClass(Filter, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      // input => le champ de recherche + input[type=checkbox] des catégories et des emplacements
      this.form.querySelectorAll('input').forEach(function (input) {
        input.addEventListener('change', _this.loadForm.bind(_this));
      });

      if (this.moreNav) {
        this.pagination.innerHTML = '<button class="btn">Voir plus de produits</button>';
        this.pagination.querySelector('button').addEventListener('click', this.loadMore.bind(this));
      } else {
        this.pagination.addEventListener('click', function (e) {
          if (e.target.tagName === 'A') {
            e.preventDefault();

            _this.loadUrl(e.target.getAttribute('href'));
          }
        });
      }
    }
  }, {
    key: "loadMore",
    value: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var button, url, params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                button = this.pagination.querySelector('button');
                button.setAttribute('disabled', 'disabled');
                this.page++; // Incrémentation de pages

                url = new URL(window.location.href);
                params = new URLSearchParams(url.search);
                params.set('page', this.page); // Ajout du mot 'page' dans l'url

                _context.next = 8;
                return this.loadUrl(url.pathname + '?' + params.toString(), true);

              case 8:
                button.removeAttribute('disabled');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }, {
    key: "loadForm",
    value: function () {
      var _loadForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, url, params;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.page = 1;
                data = new FormData(this.form);
                url = new URL(this.form.getAttribute('action') || window.location.href);
                params = new URLSearchParams();
                data.forEach(function (value, key) {
                  params.append(key, value);
                });
                return _context2.abrupt("return", this.loadUrl(url.pathname + '?' + params.toString()));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadForm() {
        return _loadForm.apply(this, arguments);
      }

      return loadForm;
    }()
  }, {
    key: "loadUrl",
    value: function () {
      var _loadUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
        var append,
            params,
            response,
            data,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                append = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
                this.showLoader(); // Charger la fonction qui affiche le loader

                params = new URLSearchParams(url.split('?')[1] || '');
                params.set('ajax', 1);
                _context3.next = 6;
                return fetch(url.split('?')[0] + '?' + params.toString(), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

              case 6:
                response = _context3.sent;

                if (!(response.status >= 200 && response.status < 300)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 10;
                return response.json();

              case 10:
                data = _context3.sent;
                this.flipProducts(data.products, append); // Chargement de la fonction qui anime le placement des produits

                if (!this.moreNav) {
                  this.pagination.innerHTML = data.pagination;
                } else if (this.page === data.pages) {
                  this.pagination.style.display = 'none'; // Supprime le bouton lorsque la page contient le(s) dernier(s) produit(s)
                } else {
                  this.pagination.style.display = null; // Affichage du bouton si la page ne contient pas le(s) dernier(s) produit(s)
                }

                params["delete"]('ajax'); // Supprimer le mot 'ajax' de l'url

                history.replaceState({}, '', url.split('?')[0] + '?' + params.toString()); // Remplace l'élément courant dans l'historique de l'utilisateur et changera l'url afichée dans la barre de d'adresse

                _context3.next = 18;
                break;

              case 17:
                console.error(response); // Afficher l'erreur dans la console

              case 18:
                this.hideLoader(); // Charger la fonction qui cache le loader

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadUrl(_x) {
        return _loadUrl.apply(this, arguments);
      }

      return loadUrl;
    }()
    /**
     * Remplace les produits avec un effet d'animation flip
     * @param {string} products 
     */

  }, {
    key: "flipProducts",
    value: function flipProducts(products, append) {
      var springPreset = 'gentle'; // https://codepen.io/aholachek/pen/bKmZbV

      var exitSpring = function exitSpring(element, index, onComplete) {
        Object(flip_toolkit__WEBPACK_IMPORTED_MODULE_17__["spring"])({
          config: 'stiff',
          values: {
            translateY: [0, -20],
            opacity: [1, 0]
          },
          onUpdate: function onUpdate(_ref) {
            var translateY = _ref.translateY,
                opacity = _ref.opacity;
            element.style.opacity = opacity;
            element.style.transform = "translateY(".concat(translateY, "px)");
          },
          onComplete: onComplete
        });
      };

      var appearSpring = function appearSpring(element, index) {
        Object(flip_toolkit__WEBPACK_IMPORTED_MODULE_17__["spring"])({
          config: 'stiff',
          values: {
            translateY: [20, 0],
            opacity: [0, 1]
          },
          onUpdate: function onUpdate(_ref2) {
            var translateY = _ref2.translateY,
                opacity = _ref2.opacity;
            element.style.opacity = opacity;
            element.style.transform = "translateY(".concat(translateY, "px)");
          },
          delay: index * 20
        });
      };

      var flipper = new flip_toolkit__WEBPACK_IMPORTED_MODULE_17__["Flipper"]({
        element: this.products
      });
      this.products.children.forEach(function (element) {
        flipper.addFlipped({
          element: element,
          spring: springPreset,
          flipId: element.id,
          shouldFlip: false,
          onExit: exitSpring
        });
      });
      flipper.recordBeforeUpdate();

      if (append) {
        this.products.innerHTML += products;
      } else {
        this.products.innerHTML = products;
      }

      this.products.innerHTML = products;
      this.products.children.forEach(function (element) {
        flipper.addFlipped({
          element: element,
          spring: springPreset,
          flipId: element.id,
          onAppear: appearSpring
        });
      });
      flipper.update();
    }
    /**
     * Afficher le loader
     */

  }, {
    key: "showLoader",
    value: function showLoader() {
      this.form.classList.add('is-loading');
      var loader = this.form.querySelector('.js-loading');

      if (loader === null) {
        return;
      }

      loader.setAttribute('aria-hidden', 'false');
      loader.style.display = null;
    }
    /**
     * Cacher le loader
     */

  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.form.classList.remove('is-loading');
      var loader = this.form.querySelector('.js-loading');

      if (loader === null) {
        return;
      }

      loader.setAttribute('aria-hidden', 'true');
      loader.style.display = 'none';
    }
  }]);

  return Filter;
}();



/***/ }),

/***/ "./assets/js/modules/timers.js":
/*!*************************************!*\
  !*** ./assets/js/modules/timers.js ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (!immediate && !timeout) func.apply(context, args);
  };
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbW9kdWxlcy9jaG9pY2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9tb2R1bGVzL2RhdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWxlbWVudHMvQnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9EYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9Vc2VyU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvdGltZXJzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJGaWx0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiY2xvc2UiLCJiaW5kIiwiZHVyYXRpb24iLCJwcm9ncmVzc0JhciIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJpY29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzbGlkZVRvVG9wIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiSFRNTEVsZW1lbnQiLCJGbG9hdEFsZXJ0Iiwib3B0aW9ucyIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIm1heFdpZHRoIiwiekluZGV4IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJ0b2dnbGUiLCJEYXRlUGlja2VyIiwiZmxhdHBpY2tyIiwiYWx0SW5wdXQiLCJhbHRGb3JtYXQiLCJkYXRlRm9ybWF0IiwibG9jYWxlIiwiRnJlbmNoIiwid2Vla051bWJlcnMiLCJkZXN0cm95IiwiSFRNTElucHV0RWxlbWVudCIsImdsb2JhbCIsImdldFVzZXJzIiwiZW5kcG9pbnQiLCJzZWFyY2giLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIlVzZXJTZWxlY3QiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImVycm9yIiwib25TZWFyY2giLCJkZWJvdW5jZSIsImNob2ljZXMiLCJDaG9pY2VzIiwiZGV0YWlsIiwidmFsdWUiLCJsZW5ndGgiLCJzZXRDaG9pY2VzIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiLCJmb3JtIiwicHJvZHVjdHMiLCJwYWdpbmF0aW9uIiwicGFnZSIsInBhcnNlSW50IiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJnZXQiLCJtb3JlTmF2IiwiYmluZEV2ZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5wdXQiLCJsb2FkRm9ybSIsImxvYWRNb3JlIiwidGFyZ2V0IiwidGFnTmFtZSIsImxvYWRVcmwiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJ1cmwiLCJVUkwiLCJocmVmIiwicGFyYW1zIiwic2V0IiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsInJlbW92ZUF0dHJpYnV0ZSIsImRhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsInNob3dMb2FkZXIiLCJzcGxpdCIsImhlYWRlcnMiLCJmbGlwUHJvZHVjdHMiLCJwYWdlcyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJoaWRlTG9hZGVyIiwic3ByaW5nUHJlc2V0IiwiZXhpdFNwcmluZyIsImluZGV4Iiwib25Db21wbGV0ZSIsInNwcmluZyIsImNvbmZpZyIsInZhbHVlcyIsInRyYW5zbGF0ZVkiLCJvcGFjaXR5Iiwib25VcGRhdGUiLCJ0cmFuc2Zvcm0iLCJhcHBlYXJTcHJpbmciLCJkZWxheSIsImZsaXBwZXIiLCJGbGlwcGVyIiwiY2hpbGRyZW4iLCJhZGRGbGlwcGVkIiwiZmxpcElkIiwiaWQiLCJzaG91bGRGbGlwIiwib25FeGl0IiwicmVjb3JkQmVmb3JlVXBkYXRlIiwib25BcHBlYXIiLCJ1cGRhdGUiLCJsb2FkZXIiLCJyZW1vdmUiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVo7QUFFQSxJQUFJQyx1REFBSixDQUFXQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFTyxJQUFNQyxLQUFiO0FBQUE7O0FBQUE7O0FBQ0ksbUJBQW1DO0FBQUE7O0FBQUEsbUZBQUosRUFBSTtBQUFBLFFBQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxRQUFmQyxPQUFlLFFBQWZBLE9BQWU7O0FBQUE7O0FBQy9COztBQUNBLFFBQUlELElBQUksS0FBS0UsU0FBYixFQUF3QjtBQUN0QixZQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFLQSxJQUFMLEdBQVksTUFBS0csWUFBTCxDQUFrQixNQUFsQixDQUFaO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWkEsYUFBTyxHQUFHLE1BQUtHLFNBQWY7QUFDRDs7QUFDRCxRQUFJLE1BQUtKLElBQUwsS0FBYyxPQUFkLElBQXlCLE1BQUtBLElBQUwsS0FBYyxJQUEzQyxFQUFpRDtBQUMvQyxZQUFLQSxJQUFMLEdBQVksUUFBWjtBQUNEOztBQUNELFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtJLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgsK0JBQWI7QUFkK0I7QUFlaEM7O0FBaEJQO0FBQUE7QUFBQSx3Q0FrQjJCO0FBQUE7O0FBQ25CLFVBQU1DLFFBQVEsR0FBRyxLQUFLSixZQUFMLENBQWtCLFVBQWxCLENBQWpCO0FBQ0EsVUFBSUssV0FBVyxHQUFHLEVBQWxCOztBQUNBLFVBQUlELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkMsbUJBQVcsd0VBQThERCxRQUE5RCxRQUFYO0FBQ0FFLGNBQU0sQ0FBQ0MsVUFBUCxDQUFrQixLQUFLTCxLQUF2QixFQUE4QkUsUUFBUSxHQUFHLElBQXpDO0FBQ0Q7O0FBQ0QsV0FBS0gsU0FBTCxzQ0FBNEMsS0FBS0osSUFBakQsNkdBRXFDLEtBQUtXLElBRjFDLHdEQUlNLEtBQUtWLE9BSlgsc05BVU1PLFdBVk47QUFZQSxXQUFLVixhQUFMLENBQW1CLGNBQW5CLEVBQW1DYyxnQkFBbkMsQ0FBb0QsT0FBcEQsRUFBNkQsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xFQSxTQUFDLENBQUNDLGNBQUY7O0FBQ0EsY0FBSSxDQUFDVCxLQUFMO0FBQ0QsT0FIRDtBQUlEO0FBekNQO0FBQUE7QUFBQSw0QkEyQ2U7QUFBQTs7QUFDUCxVQUFNVSxPQUFPLEdBQUcsS0FBS2pCLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBaEI7QUFDQWlCLGFBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsS0FBdEI7QUFDQVIsWUFBTSxDQUFDQyxVQUFQLHVFQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVlEsc0VBQVUsQ0FBQ0gsT0FBRCxDQURBOztBQUFBO0FBRWhCLHNCQUFJLENBQUNJLGFBQUwsQ0FBbUJDLFdBQW5CLENBQStCLE1BQS9COztBQUNBLHNCQUFJLENBQUNDLGFBQUwsQ0FBbUIsSUFBSUMsV0FBSixDQUFnQixPQUFoQixDQUFuQjs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEIsSUFJRyxHQUpIO0FBS0Q7QUFuRFA7QUFBQTtBQUFBLHdCQXFEZTtBQUNQLFVBQUksS0FBS3RCLElBQUwsS0FBYyxRQUFsQixFQUE0QjtBQUN4QixlQUFPLFNBQVA7QUFDSCxPQUZELE1BRU8sSUFBSSxLQUFLQSxJQUFMLEtBQWMsU0FBbEIsRUFBNkI7QUFDaEMsZUFBTyxPQUFQO0FBQ0g7QUFDSjtBQTNETDs7QUFBQTtBQUFBLGlDQUEyQnVCLFdBQTNCO0FBOERPLElBQU1DLFVBQWI7QUFBQTs7QUFBQTs7QUFDSSx3QkFBMkI7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3ZCLGdDQUFNQSxPQUFOOztBQUNBLFdBQUtULFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjs7QUFDQSxXQUFLUyxLQUFMLENBQVdDLFFBQVgsR0FBc0IsT0FBdEI7QUFDQSxXQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUIsTUFBakI7QUFDQSxXQUFLRixLQUFMLENBQVdHLEtBQVgsR0FBbUIsTUFBbkI7QUFDQSxXQUFLSCxLQUFMLENBQVdJLFFBQVgsR0FBc0IsT0FBdEI7QUFDQSxXQUFLSixLQUFMLENBQVdLLE1BQVgsR0FBb0IsS0FBcEI7QUFQdUI7QUFRMUI7O0FBVEw7QUFBQSxFQUFnQ2hDLEtBQWhDO0FBWUFpQyxjQUFjLENBQUNDLE1BQWYsQ0FBc0IsZUFBdEIsRUFBdUNsQyxLQUF2QztBQUNBaUMsY0FBYyxDQUFDQyxNQUFmLENBQXNCLGdCQUF0QixFQUF3Q1QsVUFBeEMsRTs7Ozs7Ozs7Ozs7QUM3RUEzQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNjLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRSxZQUFXO0FBQ3hFZixVQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUNrQixTQUFyQyxDQUErQ2tCLE1BQS9DLENBQXNELFdBQXREO0FBQ0FyQyxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNrQixTQUF2QyxDQUFpRGtCLE1BQWpELENBQXdELFdBQXhEO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0lBR3FCQyxVOzs7Ozs7Ozs7Ozs7O3dDQUVHO0FBQ2hCLFdBQUtDLFNBQUwsR0FBaUJBLGlEQUFTLENBQUMsSUFBRCxFQUFPO0FBQzdCQyxnQkFBUSxFQUFFLElBRG1CO0FBRTdCQyxpQkFBUyxFQUFFLE9BRmtCO0FBRzdCQyxrQkFBVSxFQUFFLE9BSGlCO0FBSTdCQyxjQUFNLEVBQUVDLGlFQUpxQjtBQUs3QkMsbUJBQVcsRUFBRTtBQUxnQixPQUFQLENBQTFCO0FBT0g7OzsyQ0FFc0I7QUFDbkIsV0FBS04sU0FBTCxDQUFlTyxPQUFmO0FBQ0g7Ozs7aUNBZG1DQyxnQjs7O0FBaUJ4Q0MsTUFBTSxDQUFDYixjQUFQLENBQXNCQyxNQUF0QixDQUE2QixhQUE3QixFQUE0Q0UsVUFBNUMsRUFBd0Q7QUFBQyxhQUFTO0FBQVYsQ0FBeEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQSxTQUFTVyxRQUFULENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0M7QUFDaEMsOEVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDb0JDLEtBQUssQ0FBQ0YsUUFBUSxHQUFHLEdBQVgsR0FBaUJDLE1BQWxCLENBRHpCOztBQUFBO0FBQ0dFLG9CQURIOztBQUFBLGtCQUVDQSxRQUFRLENBQUNDLE1BQVQsSUFBbUIsR0FBbkIsSUFBMEJELFFBQVEsQ0FBQ0MsTUFBVCxHQUFrQixHQUY3QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdjRCxRQUFRLENBQUNFLElBQVQsRUFIZDs7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBS0ksRUFMSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQO0FBT0g7QUFFRDs7Ozs7OztJQUtNQyxVOzs7Ozs7Ozs7Ozs7O3dDQUVrQjtBQUNoQixVQUFJLEtBQUtDLEtBQVQsRUFBZ0I7QUFDWlQsY0FBTSxDQUFDVSxZQUFQLENBQW9CLEtBQUtELEtBQXpCO0FBQ0EsYUFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQTtBQUNIOztBQUNELFdBQUtQLFFBQUwsR0FBZ0IsS0FBSzVDLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBaEI7O0FBQ0EsVUFBSSxLQUFLNEMsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUN4QnJELGVBQU8sQ0FBQzhELEtBQVIsQ0FBYyx3RUFBZDtBQUNBO0FBQ0g7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHQyxpRUFBUSxDQUFDLEtBQUtELFFBQUwsQ0FBY25ELElBQWQsQ0FBbUIsSUFBbkIsQ0FBRCxFQUEyQixJQUEzQixDQUF6QjtBQUNBLFdBQUtxRCxPQUFMLEdBQWUsSUFBSUMsa0RBQUosQ0FBWSxJQUFaLENBQWY7QUFDQSxXQUFLaEQsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0M2QyxRQUFoQztBQUNIOzs7MkNBRXNCO0FBQ25CLFdBQUtILEtBQUwsR0FBYTdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFZO0FBQ3ZDLFlBQUcsS0FBS2lELE9BQVIsRUFBaUI7QUFDWixlQUFLQSxPQUFMLENBQWFoQixPQUFiO0FBQ0o7QUFDSixPQUpZLEVBSVYsR0FKVSxDQUFiO0FBS0g7Ozs2QkFHSzlCLEMsRUFBRztBQUNULFVBQU1tQyxNQUFNLEdBQUduQyxDQUFDLENBQUNnRCxNQUFGLENBQVNDLEtBQXhCOztBQUNBLFVBQUlkLE1BQU0sQ0FBQ2UsTUFBUCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQixhQUFLSixPQUFMLENBQWFLLFVBQWIsQ0FBd0JsQixRQUFRLENBQUMsS0FBS0MsUUFBTixFQUFnQkMsTUFBaEIsQ0FBaEMsRUFBeUQsSUFBekQsRUFBK0QsT0FBL0QsRUFBd0UsSUFBeEU7QUFDSDtBQUNKOzs7O2lDQWhDd0JpQixpQjs7QUFrQ3pCcEIsTUFBTSxDQUFDYixjQUFQLENBQXNCQyxNQUF0QixDQUE2QixhQUE3QixFQUE0Q29CLFVBQTVDLEVBQXdEO0FBQ3BELGFBQVM7QUFEMkMsQ0FBeEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTs7Ozs7QUFLTyxTQUFTbkMsVUFBVCxDQUFxQkgsT0FBckIsRUFBOEM7QUFBQSxNQUFoQlIsUUFBZ0IsdUVBQUwsR0FBSztBQUNqRCxTQUFPLElBQUkyRCxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUNyRCxXQUFPLENBQUNXLEtBQVIsQ0FBYzJDLE1BQWQsR0FBdUJ0RCxPQUFPLENBQUN1RCxZQUFSLEdBQXVCLElBQTlDO0FBQ0F2RCxXQUFPLENBQUNXLEtBQVIsQ0FBYzZDLGtCQUFkLEdBQW1DLHlCQUFuQztBQUNBeEQsV0FBTyxDQUFDVyxLQUFSLENBQWM4QyxrQkFBZCxHQUFtQ2pFLFFBQVEsR0FBRyxJQUE5QztBQUNBUSxXQUFPLENBQUN1RCxZQUFSO0FBQ0F2RCxXQUFPLENBQUNXLEtBQVIsQ0FBYytDLFFBQWQsR0FBeUIsUUFBekI7QUFDQTFELFdBQU8sQ0FBQ1csS0FBUixDQUFjMkMsTUFBZCxHQUF1QixDQUF2QjtBQUNBdEQsV0FBTyxDQUFDVyxLQUFSLENBQWNnRCxVQUFkLEdBQTJCLENBQTNCO0FBQ0EzRCxXQUFPLENBQUNXLEtBQVIsQ0FBY2lELGFBQWQsR0FBOEIsQ0FBOUI7QUFDQTVELFdBQU8sQ0FBQ1csS0FBUixDQUFja0QsU0FBZCxHQUEwQixDQUExQjtBQUNBN0QsV0FBTyxDQUFDVyxLQUFSLENBQWNtRCxZQUFkLEdBQTZCLENBQTdCO0FBQ0FwRSxVQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBVztBQUN6QkssYUFBTyxDQUFDVyxLQUFSLENBQWNvRCxPQUFkLEdBQXdCLE1BQXhCO0FBQ0EvRCxhQUFPLENBQUNXLEtBQVIsQ0FBY3FELGNBQWQsQ0FBNkIsUUFBN0I7QUFDQWhFLGFBQU8sQ0FBQ1csS0FBUixDQUFjcUQsY0FBZCxDQUE2QixhQUE3QjtBQUNBaEUsYUFBTyxDQUFDVyxLQUFSLENBQWNxRCxjQUFkLENBQTZCLGdCQUE3QjtBQUNBaEUsYUFBTyxDQUFDVyxLQUFSLENBQWNxRCxjQUFkLENBQTZCLFlBQTdCO0FBQ0FoRSxhQUFPLENBQUNXLEtBQVIsQ0FBY3FELGNBQWQsQ0FBNkIsZUFBN0I7QUFDQWhFLGFBQU8sQ0FBQ1csS0FBUixDQUFjcUQsY0FBZCxDQUE2QixVQUE3QjtBQUNBaEUsYUFBTyxDQUFDVyxLQUFSLENBQWNxRCxjQUFkLENBQTZCLHFCQUE3QjtBQUNBaEUsYUFBTyxDQUFDVyxLQUFSLENBQWNxRCxjQUFkLENBQTZCLHFCQUE3QjtBQUNBWixhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0gsS0FYRCxFQVdHNUQsUUFYSDtBQVlILEdBdkJNLENBQVA7QUF3QkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0M5QjJDOztBQUU1Qzs7Ozs7Ozs7SUFPcUJYLE07QUFFakI7QUFDQSxrQkFBWW1CLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsUUFBSUEsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ2xCO0FBQ0gsS0FIZ0IsQ0FJakI7OztBQUNBLFNBQUtpRSxJQUFMLEdBQVlqRSxPQUFPLENBQUNqQixhQUFSLENBQXNCLGlCQUF0QixDQUFaO0FBQ0EsU0FBS21GLFFBQUwsR0FBZ0JsRSxPQUFPLENBQUNqQixhQUFSLENBQXNCLHFCQUF0QixDQUFoQjtBQUNBLFNBQUtvRixVQUFMLEdBQWtCbkUsT0FBTyxDQUFDakIsYUFBUixDQUFzQix1QkFBdEIsQ0FBbEI7QUFDQSxTQUFLcUYsSUFBTCxHQUFZQyxRQUFRLENBQUMsSUFBSUMsZUFBSixDQUFvQjVFLE1BQU0sQ0FBQzZFLFFBQVAsQ0FBZ0J0QyxNQUFwQyxFQUE0Q3VDLEdBQTVDLENBQWdELE1BQWhELEtBQTJELENBQTVELENBQXBCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtMLElBQUwsS0FBYyxDQUE3QjtBQUNBLFNBQUtNLFVBQUw7QUFDSDtBQUVEOzs7Ozs7O2lDQUdhO0FBQUE7O0FBQ1Q7QUFDQSxXQUFLVCxJQUFMLENBQVVVLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFBQyxLQUFLLEVBQUk7QUFDakRBLGFBQUssQ0FBQ2hGLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLEtBQUksQ0FBQ2lGLFFBQUwsQ0FBY3ZGLElBQWQsQ0FBbUIsS0FBbkIsQ0FBakM7QUFDSCxPQUZEOztBQUdBLFVBQUksS0FBS2tGLE9BQVQsRUFBa0I7QUFDZCxhQUFLTixVQUFMLENBQWdCOUUsU0FBaEIsR0FBNEIsb0RBQTVCO0FBQ0EsYUFBSzhFLFVBQUwsQ0FBZ0JwRixhQUFoQixDQUE4QixRQUE5QixFQUF3Q2MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLEtBQUtrRixRQUFMLENBQWN4RixJQUFkLENBQW1CLElBQW5CLENBQWxFO0FBQ0gsT0FIRCxNQUdPO0FBQ0osYUFBSzRFLFVBQUwsQ0FBZ0J0RSxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQUMsQ0FBQyxFQUFJO0FBQzlDLGNBQUlBLENBQUMsQ0FBQ2tGLE1BQUYsQ0FBU0MsT0FBVCxLQUFxQixHQUF6QixFQUE4QjtBQUMxQm5GLGFBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxpQkFBSSxDQUFDbUYsT0FBTCxDQUFhcEYsQ0FBQyxDQUFDa0YsTUFBRixDQUFTNUYsWUFBVCxDQUFzQixNQUF0QixDQUFiO0FBQ0g7QUFDSixTQUxFO0FBTUY7QUFDSjs7Ozs7Ozs7OztBQUdTK0Ysc0IsR0FBUyxLQUFLaEIsVUFBTCxDQUFnQnBGLGFBQWhCLENBQThCLFFBQTlCLEM7QUFDZm9HLHNCQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEM7QUFDQSxxQkFBS2hCLElBQUwsRyxDQUFZOztBQUNOaUIsbUIsR0FBTSxJQUFJQyxHQUFKLENBQVE1RixNQUFNLENBQUM2RSxRQUFQLENBQWdCZ0IsSUFBeEIsQztBQUNOQyxzQixHQUFTLElBQUlsQixlQUFKLENBQW9CZSxHQUFHLENBQUNwRCxNQUF4QixDO0FBQ2Z1RCxzQkFBTSxDQUFDQyxHQUFQLENBQVcsTUFBWCxFQUFtQixLQUFLckIsSUFBeEIsRSxDQUE4Qjs7O3VCQUN4QixLQUFLYyxPQUFMLENBQWFHLEdBQUcsQ0FBQ0ssUUFBSixHQUFlLEdBQWYsR0FBcUJGLE1BQU0sQ0FBQ0csUUFBUCxFQUFsQyxFQUFxRCxJQUFyRCxDOzs7QUFDTlIsc0JBQU0sQ0FBQ1MsZUFBUCxDQUF1QixVQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHFCQUFLeEIsSUFBTCxHQUFZLENBQVo7QUFDTXlCLG9CLEdBQU8sSUFBSUMsUUFBSixDQUFhLEtBQUs3QixJQUFsQixDO0FBQ1BvQixtQixHQUFNLElBQUlDLEdBQUosQ0FBUSxLQUFLckIsSUFBTCxDQUFVN0UsWUFBVixDQUF1QixRQUF2QixLQUFvQ00sTUFBTSxDQUFDNkUsUUFBUCxDQUFnQmdCLElBQTVELEM7QUFDTkMsc0IsR0FBUyxJQUFJbEIsZUFBSixFO0FBRWZ1QixvQkFBSSxDQUFDakIsT0FBTCxDQUFhLFVBQUM3QixLQUFELEVBQVFnRCxHQUFSLEVBQWdCO0FBQ3pCUCx3QkFBTSxDQUFDUSxNQUFQLENBQWNELEdBQWQsRUFBbUJoRCxLQUFuQjtBQUNILGlCQUZEO2tEQUdPLEtBQUttQyxPQUFMLENBQWFHLEdBQUcsQ0FBQ0ssUUFBSixHQUFlLEdBQWYsR0FBcUJGLE1BQU0sQ0FBQ0csUUFBUCxFQUFsQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytGQUdHTixHOzs7Ozs7Ozs7O0FBQUtXLHNCLDhEQUFTLEs7QUFDeEIscUJBQUtDLFVBQUwsRyxDQUFrQjs7QUFDWlQsc0IsR0FBUyxJQUFJbEIsZUFBSixDQUFvQmUsR0FBRyxDQUFDYSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsS0FBcUIsRUFBekMsQztBQUNmVixzQkFBTSxDQUFDQyxHQUFQLENBQVcsTUFBWCxFQUFtQixDQUFuQjs7dUJBQ3VCdkQsS0FBSyxDQUFDbUQsR0FBRyxDQUFDYSxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsSUFBb0IsR0FBcEIsR0FBMEJWLE1BQU0sQ0FBQ0csUUFBUCxFQUEzQixFQUE4QztBQUN0RVEseUJBQU8sRUFBRTtBQUNMLHdDQUFvQjtBQURmO0FBRDZELGlCQUE5QyxDOzs7QUFBdEJoRSx3Qjs7c0JBS0ZBLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixHQUFuQixJQUEwQkQsUUFBUSxDQUFDQyxNQUFULEdBQWtCLEc7Ozs7Ozt1QkFDekJELFFBQVEsQ0FBQ0UsSUFBVCxFOzs7QUFBYndELG9CO0FBQ04scUJBQUtPLFlBQUwsQ0FBa0JQLElBQUksQ0FBQzNCLFFBQXZCLEVBQWlDOEIsTUFBakMsRSxDQUF5Qzs7QUFDekMsb0JBQUksQ0FBQyxLQUFLdkIsT0FBVixFQUFtQjtBQUNmLHVCQUFLTixVQUFMLENBQWdCOUUsU0FBaEIsR0FBNEJ3RyxJQUFJLENBQUMxQixVQUFqQztBQUNILGlCQUZELE1BRU8sSUFBSSxLQUFLQyxJQUFMLEtBQWN5QixJQUFJLENBQUNRLEtBQXZCLEVBQThCO0FBQ2pDLHVCQUFLbEMsVUFBTCxDQUFnQnhELEtBQWhCLENBQXNCb0QsT0FBdEIsR0FBZ0MsTUFBaEMsQ0FEaUMsQ0FDTTtBQUMxQyxpQkFGTSxNQUVBO0FBQ0gsdUJBQUtJLFVBQUwsQ0FBZ0J4RCxLQUFoQixDQUFzQm9ELE9BQXRCLEdBQWdDLElBQWhDLENBREcsQ0FDa0M7QUFDeEM7O0FBQ0R5QixzQkFBTSxVQUFOLENBQWMsTUFBZCxFLENBQXNCOztBQUN0QmMsdUJBQU8sQ0FBQ0MsWUFBUixDQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QmxCLEdBQUcsQ0FBQ2EsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLElBQW9CLEdBQXBCLEdBQTBCVixNQUFNLENBQUNHLFFBQVAsRUFBdkQsRSxDQUEwRTs7Ozs7O0FBRTFFaEgsdUJBQU8sQ0FBQzhELEtBQVIsQ0FBY04sUUFBZCxFLENBQXdCOzs7QUFFNUIscUJBQUtxRSxVQUFMLEcsQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEI7Ozs7Ozs7aUNBSWF0QyxRLEVBQVU4QixNLEVBQVE7QUFDM0IsVUFBTVMsWUFBWSxHQUFHLFFBQXJCLENBRDJCLENBQ0c7O0FBQzlCLFVBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVUxRyxPQUFWLEVBQW1CMkcsS0FBbkIsRUFBMEJDLFVBQTFCLEVBQXNDO0FBQ3JEQyxvRUFBTSxDQUFDO0FBQ0hDLGdCQUFNLEVBQUUsT0FETDtBQUVIQyxnQkFBTSxFQUFFO0FBQ0pDLHNCQUFVLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxFQUFMLENBRFI7QUFFSkMsbUJBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBRkwsV0FGTDtBQU1IQyxrQkFBUSxFQUFFLHdCQUdKO0FBQUEsZ0JBRkZGLFVBRUUsUUFGRkEsVUFFRTtBQUFBLGdCQURGQyxPQUNFLFFBREZBLE9BQ0U7QUFDRmpILG1CQUFPLENBQUNXLEtBQVIsQ0FBY3NHLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0FqSCxtQkFBTyxDQUFDVyxLQUFSLENBQWN3RyxTQUFkLHdCQUF3Q0gsVUFBeEM7QUFDSCxXQVpFO0FBYUhKLG9CQUFVLEVBQVZBO0FBYkcsU0FBRCxDQUFOO0FBZUgsT0FoQkQ7O0FBaUJBLFVBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVwSCxPQUFWLEVBQW1CMkcsS0FBbkIsRUFBMEI7QUFDM0NFLG9FQUFNLENBQUM7QUFDSEMsZ0JBQU0sRUFBRSxPQURMO0FBRUhDLGdCQUFNLEVBQUU7QUFDSkMsc0JBQVUsRUFBRSxDQUFDLEVBQUQsRUFBSyxDQUFMLENBRFI7QUFFSkMsbUJBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBRkwsV0FGTDtBQU1IQyxrQkFBUSxFQUFFLHlCQUdKO0FBQUEsZ0JBRkZGLFVBRUUsU0FGRkEsVUFFRTtBQUFBLGdCQURGQyxPQUNFLFNBREZBLE9BQ0U7QUFDRmpILG1CQUFPLENBQUNXLEtBQVIsQ0FBY3NHLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0FqSCxtQkFBTyxDQUFDVyxLQUFSLENBQWN3RyxTQUFkLHdCQUF3Q0gsVUFBeEM7QUFDSCxXQVpFO0FBYUhLLGVBQUssRUFBRVYsS0FBSyxHQUFHO0FBYlosU0FBRCxDQUFOO0FBZUgsT0FoQkQ7O0FBaUJBLFVBQU1XLE9BQU8sR0FBRyxJQUFJQyxxREFBSixDQUFZO0FBQ3hCdkgsZUFBTyxFQUFFLEtBQUtrRTtBQURVLE9BQVosQ0FBaEI7QUFHQSxXQUFLQSxRQUFMLENBQWNzRCxRQUFkLENBQXVCNUMsT0FBdkIsQ0FBK0IsVUFBQTVFLE9BQU8sRUFBSTtBQUN0Q3NILGVBQU8sQ0FBQ0csVUFBUixDQUFtQjtBQUNmekgsaUJBQU8sRUFBUEEsT0FEZTtBQUVmNkcsZ0JBQU0sRUFBRUosWUFGTztBQUdmaUIsZ0JBQU0sRUFBRTFILE9BQU8sQ0FBQzJILEVBSEQ7QUFJZkMsb0JBQVUsRUFBRSxLQUpHO0FBS2ZDLGdCQUFNLEVBQUVuQjtBQUxPLFNBQW5CO0FBT0gsT0FSRDtBQVNBWSxhQUFPLENBQUNRLGtCQUFSOztBQUNBLFVBQUk5QixNQUFKLEVBQVk7QUFDUixhQUFLOUIsUUFBTCxDQUFjN0UsU0FBZCxJQUEyQjZFLFFBQTNCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0EsUUFBTCxDQUFjN0UsU0FBZCxHQUEwQjZFLFFBQTFCO0FBQ0g7O0FBQ0QsV0FBS0EsUUFBTCxDQUFjN0UsU0FBZCxHQUEwQjZFLFFBQTFCO0FBQ0EsV0FBS0EsUUFBTCxDQUFjc0QsUUFBZCxDQUF1QjVDLE9BQXZCLENBQStCLFVBQUE1RSxPQUFPLEVBQUk7QUFDdENzSCxlQUFPLENBQUNHLFVBQVIsQ0FBbUI7QUFDZnpILGlCQUFPLEVBQVBBLE9BRGU7QUFFZjZHLGdCQUFNLEVBQUVKLFlBRk87QUFHZmlCLGdCQUFNLEVBQUUxSCxPQUFPLENBQUMySCxFQUhEO0FBSWZJLGtCQUFRLEVBQUVYO0FBSkssU0FBbkI7QUFNSCxPQVBEO0FBUUFFLGFBQU8sQ0FBQ1UsTUFBUjtBQUNIO0FBRUQ7Ozs7OztpQ0FHYTtBQUNULFdBQUsvRCxJQUFMLENBQVVoRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixZQUF4QjtBQUNBLFVBQU0rSCxNQUFNLEdBQUcsS0FBS2hFLElBQUwsQ0FBVWxGLGFBQVYsQ0FBd0IsYUFBeEIsQ0FBZjs7QUFDQSxVQUFJa0osTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakI7QUFDSDs7QUFDREEsWUFBTSxDQUFDN0MsWUFBUCxDQUFvQixhQUFwQixFQUFtQyxPQUFuQztBQUNBNkMsWUFBTSxDQUFDdEgsS0FBUCxDQUFhb0QsT0FBYixHQUF1QixJQUF2QjtBQUNIO0FBRUQ7Ozs7OztpQ0FHYTtBQUNULFdBQUtFLElBQUwsQ0FBVWhFLFNBQVYsQ0FBb0JpSSxNQUFwQixDQUEyQixZQUEzQjtBQUNBLFVBQU1ELE1BQU0sR0FBRyxLQUFLaEUsSUFBTCxDQUFVbEYsYUFBVixDQUF3QixhQUF4QixDQUFmOztBQUNBLFVBQUlrSixNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQjtBQUNIOztBQUNEQSxZQUFNLENBQUM3QyxZQUFQLENBQW9CLGFBQXBCLEVBQW1DLE1BQW5DO0FBQ0E2QyxZQUFNLENBQUN0SCxLQUFQLENBQWFvRCxPQUFiLEdBQXVCLE1BQXZCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUxFLFNBQVNwQixRQUFULENBQW1Cd0YsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCQyxTQUEvQixFQUEwQztBQUM3QyxNQUFJQyxPQUFKO0FBQ0EsU0FBTyxZQUFVO0FBQ2IsUUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFBQSxRQUFvQkMsSUFBSSxHQUFHQyxTQUEzQjtBQUNBakcsZ0JBQVksQ0FBQzhGLE9BQUQsQ0FBWjtBQUNBQSxXQUFPLEdBQUczSSxVQUFVLENBQUMsWUFBWTtBQUM3QjJJLGFBQU8sR0FBRyxJQUFWO0FBQ0EsVUFBRyxDQUFDRCxTQUFKLEVBQWVGLElBQUksQ0FBQ08sS0FBTCxDQUFXSCxPQUFYLEVBQW9CQyxJQUFwQjtBQUNsQixLQUhtQixFQUdqQkosSUFIaUIsQ0FBcEI7QUFJQSxRQUFHLENBQUNDLFNBQUQsSUFBYyxDQUFDQyxPQUFsQixFQUEyQkgsSUFBSSxDQUFDTyxLQUFMLENBQVdILE9BQVgsRUFBb0JDLElBQXBCO0FBQzlCLEdBUkQ7QUFTSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL2VsZW1lbnRzL0FsZXJ0J1xyXG5pbXBvcnQgJy4vZWxlbWVudHMvQnVyZ2VyJ1xyXG5pbXBvcnQgJy4vZWxlbWVudHMvRGF0ZVBpY2tlcidcclxuaW1wb3J0ICcuL2VsZW1lbnRzL1VzZXJTZWxlY3QnXHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9tb2R1bGVzL2ZpbHRlcidcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xyXG5cclxubmV3IEZpbHRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyJykpIiwiaW1wb3J0IHtzbGlkZVRvVG9wfSBmcm9tICcuLi9tb2R1bGVzL2FuaW1hdGlvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICh7dHlwZSwgbWVzc2FnZX0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICBtZXNzYWdlID0gdGhpcy5pbm5lckhUTUxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Vycm9yJyB8fCB0aGlzLnR5cGUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudHlwZSA9ICdkYW5nZXInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcclxuICAgICAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkdXJhdGlvbicpXHJcbiAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gJyc7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBwcm9ncmVzc0JhciA9IGA8ZGl2IGNsYXNzPVwiYWxlcnRfX3Byb2dyZXNzXCIgc3R5bGU9XCJhbmltYXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb259XCI+YFxyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5jbG9zZSwgZHVyYXRpb24gKiAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHt0aGlzLnR5cGV9XCI+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uIGljb24teyRuYW1lfVwiPlxyXG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnIyR7dGhpcy5pY29ufVwiPjwvdXNlPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgJHt0aGlzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhbGVydC1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIvc3ByaXRlLnN2ZyNjcm9zc1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgJHtwcm9ncmVzc0Jhcn1cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY2xvc2UgKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdXQnKVxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IHNsaWRlVG9Ub3AoZWxlbWVudClcclxuICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKVxyXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSlcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnZGFuZ2VyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb2F0QWxlcnQgZXh0ZW5kcyBBbGVydCB7XHJcbiAgICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucylcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lzLWZsb2F0aW5nJylcclxuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIHRoaXMuc3R5bGUudG9wID0gJzIwcHgnXHJcbiAgICAgICAgdGhpcy5zdHlsZS5yaWdodCA9ICcyMHB4J1xyXG4gICAgICAgIHRoaXMuc3R5bGUubWF4V2lkdGggPSAnNDAwcHgnXHJcbiAgICAgICAgdGhpcy5zdHlsZS56SW5kZXggPSAnMTAwJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FsZXJ0LW1lc3NhZ2UnLCBBbGVydClcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbGVydC1mbG9hdGluZycsIEZsb2F0QWxlcnQpIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYnVyZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYnVyZ2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxufSkiLCJpbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcidcclxuaW1wb3J0ICdmbGF0cGlja3IvZGlzdC9mbGF0cGlja3IubWluLmNzcydcclxuaW1wb3J0ICcuLi8uLi9jc3MvbW9kdWxlcy9kYXRlLnNjc3MnXHJcbmltcG9ydCB7RnJlbmNofSBmcm9tICdmbGF0cGlja3IvZGlzdC9sMTBuL2ZyLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7ZmxhdHBpY2tyfSBmbGF0cGlja3JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBIVE1MSW5wdXRFbGVtZW50IHtcclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmZsYXRwaWNrciA9IGZsYXRwaWNrcih0aGlzLCB7XHJcbiAgICAgICAgICAgIGFsdElucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBhbHRGb3JtYXQ6IFwiaiBGIFlcIixcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxyXG4gICAgICAgICAgICBsb2NhbGU6IEZyZW5jaCxcclxuICAgICAgICAgICAgd2Vla051bWJlcnM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5mbGF0cGlja3IuZGVzdHJveSgpXHJcbiAgICB9XHJcblxyXG59XHJcbmdsb2JhbC5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhdGUtcGlja2VyJywgRGF0ZVBpY2tlciwge2V4dGVuZHM6ICdpbnB1dCd9KSIsImltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnXHJcbmltcG9ydCAnLi8uLi8uLi9jc3MvbW9kdWxlcy9jaG9pY2VzLnNjc3MnXHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi8uLi9tb2R1bGVzL3RpbWVycydcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VXNlcnMoZW5kcG9pbnQsIHNlYXJjaCkge1xyXG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50ICsgJy8nICsgc2VhcmNoKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IHRpbWVyXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbmRwb2ludFxyXG4gKiBAcHJvcGVydHkge2Nob2ljZXN9IENob2ljZXNcclxuICovXHJcbmNsYXNzIFVzZXJTZWxlY3QgZXh0ZW5kcyBIVE1MU2VsZWN0RWxlbWVudCB7XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgZ2xvYmFsLmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdlbmRwb2ludCcpXHJcbiAgICAgICAgaWYgKHRoaXMuZW5kcG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkltcG9zc2libGUgZGUgbW9udGVyIGwnw6lsw6ltZW50IHVzZXItc2VsZWN0LCBlbmRwb2ludCBuJ2VzdCBwYXMgZMOpZmluaXRcIilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9uU2VhcmNoID0gZGVib3VuY2UodGhpcy5vblNlYXJjaC5iaW5kKHRoaXMpLCAxMDAwKVxyXG4gICAgICAgIHRoaXMuY2hvaWNlcyA9IG5ldyBDaG9pY2VzKHRoaXMpXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzZWFyY2gnLCBvblNlYXJjaClcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNob2ljZXMpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLmNob2ljZXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9XHJcblxyXG5cclxub25TZWFyY2ggKGUpIHtcclxuICAgIGNvbnN0IHNlYXJjaCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICBpZiAoc2VhcmNoLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzLnNldENob2ljZXMoZ2V0VXNlcnModGhpcy5lbmRwb2ludCwgc2VhcmNoKSwgJ2lkJywgJ2VtYWlsJywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG59XHJcbmdsb2JhbC5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VzZXItc2VsZWN0JywgVXNlclNlbGVjdCwge1xyXG4gICAgZXh0ZW5kczogJ3NlbGVjdCdcclxufSkiLCIvKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzbGlkZVRvVG9wIChlbGVtZW50LCBkdXJhdGlvbiA9IDUwMCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJ1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnXHJcbiAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXHJcbiAgICAgICAgfSwgZHVyYXRpb24pXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHtGbGlwcGVyLHNwcmluZ30gZnJvbSAnZmxpcC10b29sa2l0JyAvLyBodHRwczovL2dpdGh1Yi5jb20vYWhvbGFjaGVrL3JlYWN0LWZsaXAtdG9vbGtpdFxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHByb2R1Y3RzXHJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHBhZ2luYXRpb25cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBhZ2VcclxuICogQHByb3BlcnR5IHtib29sZWFufSBtb3JlTmF2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xyXG5cclxuICAgIC8qKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IGVsZW1lbnQgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ3LDqWF0aW9uIGRlIHZhcmlhYmxlcyBxdWkgY2libGVudCBsZXMgZGlmZsOpcmVudHMgY2xhc3NlcyBqcy1maWx0ZXItLi4uXHJcbiAgICAgICAgdGhpcy5mb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWZvcm0nKVxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1maWx0ZXItcHJvZHVjdHMnKVxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1wYWdpbmF0aW9uJylcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYXJzZUludChuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgncGFnZScpIHx8IDEpXHJcbiAgICAgICAgdGhpcy5tb3JlTmF2ID0gdGhpcy5wYWdlID09PSAxXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFqb3V0ZXIgZGVzIGNvbXBvcnRlbWVudHMgYXV4IGRpZmbDqXJlbnRzIMOpbMOpbWVudHNcclxuICAgICAqL1xyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBpbnB1dCA9PiBsZSBjaGFtcCBkZSByZWNoZXJjaGUgKyBpbnB1dFt0eXBlPWNoZWNrYm94XSBkZXMgY2F0w6lnb3JpZXMgZXQgZGVzIGVtcGxhY2VtZW50c1xyXG4gICAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmxvYWRGb3JtLmJpbmQodGhpcykpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodGhpcy5tb3JlTmF2KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cImJ0blwiPlZvaXIgcGx1cyBkZSBwcm9kdWl0czwvYnV0dG9uPidcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVXJsKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRNb3JlICgpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLnBhZ2luYXRpb24ucXVlcnlTZWxlY3RvcignYnV0dG9uJylcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgdGhpcy5wYWdlKysgLy8gSW5jcsOpbWVudGF0aW9uIGRlIHBhZ2VzXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zZWFyY2gpXHJcbiAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHRoaXMucGFnZSkgLy8gQWpvdXQgZHUgbW90ICdwYWdlJyBkYW5zIGwndXJsXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkVXJsKHVybC5wYXRobmFtZSArICc/JyArIHBhcmFtcy50b1N0cmluZygpLCB0cnVlKVxyXG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRVcmwodXJsLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZFVybCh1cmwsIGFwcGVuZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCkgLy8gQ2hhcmdlciBsYSBmb25jdGlvbiBxdWkgYWZmaWNoZSBsZSBsb2FkZXJcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zcGxpdCgnPycpWzFdIHx8ICcnKVxyXG4gICAgICAgIHBhcmFtcy5zZXQoJ2FqYXgnLCAxKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnNwbGl0KCc/JylbMF0gKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFByb2R1Y3RzKGRhdGEucHJvZHVjdHMsIGFwcGVuZCkgLy8gQ2hhcmdlbWVudCBkZSBsYSBmb25jdGlvbiBxdWkgYW5pbWUgbGUgcGxhY2VtZW50IGRlcyBwcm9kdWl0c1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubW9yZU5hdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmlubmVySFRNTCA9IGRhdGEucGFnaW5hdGlvblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSA9PT0gZGF0YS5wYWdlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gU3VwcHJpbWUgbGUgYm91dG9uIGxvcnNxdWUgbGEgcGFnZSBjb250aWVudCBsZShzKSBkZXJuaWVyKHMpIHByb2R1aXQocylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5zdHlsZS5kaXNwbGF5ID0gbnVsbCAvLyBBZmZpY2hhZ2UgZHUgYm91dG9uIHNpIGxhIHBhZ2UgbmUgY29udGllbnQgcGFzIGxlKHMpIGRlcm5pZXIocykgcHJvZHVpdChzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmFtcy5kZWxldGUoJ2FqYXgnKSAvLyBTdXBwcmltZXIgbGUgbW90ICdhamF4JyBkZSBsJ3VybFxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybC5zcGxpdCgnPycpWzBdICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpIC8vIFJlbXBsYWNlIGwnw6lsw6ltZW50IGNvdXJhbnQgZGFucyBsJ2hpc3RvcmlxdWUgZGUgbCd1dGlsaXNhdGV1ciBldCBjaGFuZ2VyYSBsJ3VybCBhZmljaMOpZSBkYW5zIGxhIGJhcnJlIGRlIGQnYWRyZXNzZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpIC8vIEFmZmljaGVyIGwnZXJyZXVyIGRhbnMgbGEgY29uc29sZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGVMb2FkZXIoKSAvLyBDaGFyZ2VyIGxhIGZvbmN0aW9uIHF1aSBjYWNoZSBsZSBsb2FkZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbXBsYWNlIGxlcyBwcm9kdWl0cyBhdmVjIHVuIGVmZmV0IGQnYW5pbWF0aW9uIGZsaXBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0cyBcclxuICAgICAqL1xyXG4gICAgZmxpcFByb2R1Y3RzKHByb2R1Y3RzLCBhcHBlbmQpIHtcclxuICAgICAgICBjb25zdCBzcHJpbmdQcmVzZXQgPSAnZ2VudGxlJyAvLyBodHRwczovL2NvZGVwZW4uaW8vYWhvbGFjaGVrL3Blbi9iS21aYlZcclxuICAgICAgICBjb25zdCBleGl0U3ByaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHNwcmluZyh7XHJcbiAgICAgICAgICAgICAgICBjb25maWc6ICdzdGlmZicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMCwgLTIwXSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHlcclxuICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcHBlYXJTcHJpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgc3ByaW5nKHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogJ3N0aWZmJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsyMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5XHJcbiAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX1weClgO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDIwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZsaXBwZXIgPSBuZXcgRmxpcHBlcih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucHJvZHVjdHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZmxpcHBlci5hZGRGbGlwcGVkKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzcHJpbmc6IHNwcmluZ1ByZXNldCxcclxuICAgICAgICAgICAgICAgIGZsaXBJZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgIHNob3VsZEZsaXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25FeGl0OiBleGl0U3ByaW5nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmbGlwcGVyLnJlY29yZEJlZm9yZVVwZGF0ZSgpXHJcbiAgICAgICAgaWYgKGFwcGVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLmlubmVySFRNTCArPSBwcm9kdWN0c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuaW5uZXJIVE1MID0gcHJvZHVjdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5pbm5lckhUTUwgPSBwcm9kdWN0c1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZmxpcHBlci5hZGRGbGlwcGVkKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzcHJpbmc6IHNwcmluZ1ByZXNldCxcclxuICAgICAgICAgICAgICAgIGZsaXBJZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICAgIG9uQXBwZWFyOiBhcHBlYXJTcHJpbmdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZsaXBwZXIudXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmljaGVyIGxlIGxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93TG9hZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJylcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLmpzLWxvYWRpbmcnKVxyXG4gICAgICAgIGlmIChsb2FkZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlciBsZSBsb2FkZXJcclxuICAgICAqL1xyXG4gICAgaGlkZUxvYWRlcigpIHtcclxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpXHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2FkaW5nJylcclxuICAgICAgICBpZiAobG9hZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlIChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgIGxldCB0aW1lb3V0XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGxcclxuICAgICAgICAgICAgaWYoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9LCB3YWl0KVxyXG4gICAgICAgIGlmKCFpbW1lZGlhdGUgJiYgIXRpbWVvdXQpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7IFxyXG4gICAgfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=