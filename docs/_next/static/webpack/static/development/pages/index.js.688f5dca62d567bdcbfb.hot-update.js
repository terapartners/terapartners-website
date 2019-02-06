webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Column.js":
/*!******************************!*\
  !*** ./components/Column.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/projects/terapartners/terapartners-website/components/Column.js";



var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Column__ContentWrapper",
  componentId: "c3sib0-0"
})(["margin-top:40px;margin-bottom:70px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Column__Content",
  componentId: "c3sib0-1"
})(["font-size:16px;line-height:40px;font-family:'Raleway';font-weight:300;text-align:center;"]);
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Column__ImgWrapper",
  componentId: "c3sib0-2"
})(["height:", "px;width:", "px;overflow:hidden;position:relative;margin:0 auto;"], function (props) {
  return props.height;
}, function (props) {
  return props.width;
});
var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Column__BoxText",
  componentId: "c3sib0-3"
})(["font-size:22px;font-family:raleway-regular;color:white;display:block;margin:0 auto;text-align:left;position:absolute;line-height:30px;top:20%;left:20%;opacity:0;-webkit-transform:translate(-20%,-20%);-ms-transform:translate(-20%,-20%);transform:translate(-20%,-20%);transition:.5s ease;", ":hover &{opacity:1;}"], ImgWrapper);
var LearnMore = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Column__LearnMore",
  componentId: "c3sib0-4"
})(["font-size:15px;font-family:raleway-semibold;text-align:left;color:white;cursor:pointer;&:hover{font-family:raleway-bold;text-decoration:underline;}"]);
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Column__Overlay",
  componentId: "c3sib0-5"
})(["position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.5s ease;", ":hover &{opacity:1;filter:none;}"], ImgWrapper);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Column__Img",
  componentId: "c3sib0-6"
})(["width:100%;display:block;filter:grayscale(100%) brightness(100%);-webkit-filter:grayscale(100%) brightness(100%);", ":hover &{filter:none;-webkit-filter:grayscale(0%) brightness(100%);}"], ImgWrapper);
function Column(props) {
  var width = props.width,
      height = props.height,
      src = props.src,
      overlaySrc = props.overlaySrc,
      name = props.name,
      surname = props.surname,
      content = props.content;
  console.log(width);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: width,
      position: 'relative'
    },
    animateOnce: true,
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, src && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgWrapper, {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, overlaySrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: overlaySrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), surname, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LearnMore, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Learn More"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, content)));
}

/***/ })

})
//# sourceMappingURL=index.js.688f5dca62d567bdcbfb.hot-update.js.map