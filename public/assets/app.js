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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbW9kdWxlcy9jaG9pY2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9tb2R1bGVzL2RhdGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWxlbWVudHMvQnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9EYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9Vc2VyU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy90aW1lcnMuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkFsZXJ0IiwidHlwZSIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpY29uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZSIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2xpZGVUb1RvcCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIkhUTUxFbGVtZW50IiwiRmxvYXRBbGVydCIsIm9wdGlvbnMiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXhXaWR0aCIsInpJbmRleCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZG9jdW1lbnQiLCJ0b2dnbGUiLCJEYXRlUGlja2VyIiwiZmxhdHBpY2tyIiwiYWx0SW5wdXQiLCJhbHRGb3JtYXQiLCJkYXRlRm9ybWF0IiwibG9jYWxlIiwiRnJlbmNoIiwid2Vla051bWJlcnMiLCJkZXN0cm95IiwiSFRNTElucHV0RWxlbWVudCIsImdsb2JhbCIsImdldFVzZXJzIiwiZW5kcG9pbnQiLCJzZWFyY2giLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIlVzZXJTZWxlY3QiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImVycm9yIiwib25TZWFyY2giLCJkZWJvdW5jZSIsImJpbmQiLCJjaG9pY2VzIiwiQ2hvaWNlcyIsImRldGFpbCIsInZhbHVlIiwibGVuZ3RoIiwic2V0Q2hvaWNlcyIsIkhUTUxTZWxlY3RFbGVtZW50IiwiZHVyYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFTyxJQUFNQyxLQUFiO0FBQUE7O0FBQUE7O0FB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RyxDQUFDQyxTQUFELElBQWMsQ0FBQ0MsT0FBbEIsRUFBMkJILElBQUksQ0FBQ08sS0FBTCxDQUFXSCxPQUFYLEVBQW9CQyxJQUFwQjtBQUM5QixHQVJEO0FBU0gsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCAnLi9lbGVtZW50cy9BbGVydCdcclxuaW1wb3J0ICcuL2VsZW1lbnRzL0J1cmdlcidcclxuaW1wb3J0ICcuL2VsZW1lbnRzL0RhdGVQaWNrZXInXHJcbmltcG9ydCAnLi9lbGVtZW50cy9Vc2VyU2VsZWN0J1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXHJcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7IiwiaW1wb3J0IHtzbGlkZVRvVG9wfSBmcm9tICcuLi9tb2R1bGVzL2FuaW1hdGlvbidcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICh7dHlwZSwgbWVzc2FnZX0gPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICBtZXNzYWdlID0gdGhpcy5pbm5lckhUTUxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Vycm9yJyB8fCB0aGlzLnR5cGUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudHlwZSA9ICdkYW5nZXInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcclxuICAgICAgfVxyXG5cclxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3RoaXMudHlwZX1cIj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24gaWNvbi17JG5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiL3Nwcml0ZS5zdmcjJHt0aGlzLmljb259XCI+PC91c2U+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAke3RoaXMubWVzc2FnZX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFsZXJ0LWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIi9zcHJpdGUuc3ZnI2Nyb3NzXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmFsZXJ0LWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmFsZXJ0JylcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgYXdhaXQgc2xpZGVUb1RvcChlbGVtZW50KVxyXG4gICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgZ2V0IGljb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2RhbmdlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd3YXJuaW5nJ1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdjaGVjaydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbG9hdEFsZXJ0IGV4dGVuZHMgQWxlcnQge1xyXG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpcy1mbG9hdGluZycpXHJcbiAgICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICB0aGlzLnN0eWxlLnRvcCA9ICcyMHB4J1xyXG4gICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSAnMjBweCdcclxuICAgICAgICB0aGlzLnN0eWxlLm1heFdpZHRoID0gJzQwMHB4J1xyXG4gICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gJzEwMCdcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbGVydC1tZXNzYWdlJywgQWxlcnQpXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYWxlcnQtZmxvYXRpbmcnLCBGbG9hdEFsZXJ0KSIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2J1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXHJcbn0pIiwiaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXHJcbmltcG9ydCAnZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLm1pbi5jc3MnXHJcbmltcG9ydCAnLi4vLi4vY3NzL21vZHVsZXMvZGF0ZS5zY3NzJ1xyXG5pbXBvcnQge0ZyZW5jaH0gZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcydcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge2ZsYXRwaWNrcn0gZmxhdHBpY2tyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgSFRNTElucHV0RWxlbWVudCB7XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5mbGF0cGlja3IgPSBmbGF0cGlja3IodGhpcywge1xyXG4gICAgICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgYWx0Rm9ybWF0OiBcImogRiBZXCIsXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcclxuICAgICAgICAgICAgbG9jYWxlOiBGcmVuY2gsXHJcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuZmxhdHBpY2tyLmRlc3Ryb3koKVxyXG4gICAgfVxyXG5cclxufVxyXG5nbG9iYWwuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkYXRlLXBpY2tlcicsIERhdGVQaWNrZXIsIHtleHRlbmRzOiAnaW5wdXQnfSkiLCJpbXBvcnQgQ2hvaWNlcyBmcm9tICdjaG9pY2VzLmpzJ1xyXG5pbXBvcnQgJy4vLi4vLi4vY3NzL21vZHVsZXMvY2hvaWNlcy5zY3NzJ1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vLi4vbW9kdWxlcy90aW1lcnMnXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcclxuICovXHJcbmZ1bmN0aW9uIGdldFVzZXJzKGVuZHBvaW50LCBzZWFyY2gpIHtcclxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCArICcvJyArIHNlYXJjaClcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge251bWJlcnxudWxsfSB0aW1lclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW5kcG9pbnRcclxuICogQHByb3BlcnR5IHtjaG9pY2VzfSBDaG9pY2VzXHJcbiAqL1xyXG5jbGFzcyBVc2VyU2VsZWN0IGV4dGVuZHMgSFRNTFNlbGVjdEVsZW1lbnQge1xyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbC5jbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZW5kcG9pbnQnKVxyXG4gICAgICAgIGlmICh0aGlzLmVuZHBvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbXBvc3NpYmxlIGRlIG1vbnRlciBsJ8OpbMOpbWVudCB1c2VyLXNlbGVjdCwgZW5kcG9pbnQgbidlc3QgcGFzIGTDqWZpbml0XCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvblNlYXJjaCA9IGRlYm91bmNlKHRoaXMub25TZWFyY2guYmluZCh0aGlzKSwgMTAwMClcclxuICAgICAgICB0aGlzLmNob2ljZXMgPSBuZXcgQ2hvaWNlcyh0aGlzKVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignc2VhcmNoJywgb25TZWFyY2gpXHJcbiAgICB9XHJcblxyXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jaG9pY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5jaG9pY2VzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgfVxyXG5cclxuXHJcbm9uU2VhcmNoIChlKSB7XHJcbiAgICBjb25zdCBzZWFyY2ggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgaWYgKHNlYXJjaC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5zZXRDaG9pY2VzKGdldFVzZXJzKHRoaXMuZW5kcG9pbnQsIHNlYXJjaCksICdpZCcsICdlbWFpbCcsIHRydWUpXHJcbiAgICB9XHJcbn1cclxufVxyXG5nbG9iYWwuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd1c2VyLXNlbGVjdCcsIFVzZXJTZWxlY3QsIHtcclxuICAgIGV4dGVuZHM6ICdzZWxlY3QnXHJcbn0pIiwiLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiBcclxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVUb1RvcCAoZWxlbWVudCwgZHVyYXRpb24gPSA1MDApIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZydcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJ1xyXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKVxyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKVxyXG4gICAgICAgIH0sIGR1cmF0aW9uKVxyXG4gICAgfSlcclxufSIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgICBsZXQgdGltZW91dFxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsXHJcbiAgICAgICAgICAgIGlmKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfSwgd2FpdClcclxuICAgICAgICBpZighaW1tZWRpYXRlICYmICF0aW1lb3V0KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyBcclxuICAgIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9