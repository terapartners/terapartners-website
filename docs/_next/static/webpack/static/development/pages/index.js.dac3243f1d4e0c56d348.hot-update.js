webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Box.js":
/*!***************************!*\
  !*** ./components/Box.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/projects/terapartners/terapartners-website/components/Box.js";




var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Box__ImgWrapper",
  componentId: "sc-1z4595-0"
})(["width:", ";height:", ";overflow:hidden;position:relative;margin:0 auto;"], function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Box__Overlay",
  componentId: "sc-1z4595-1"
})(["position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;transition:.5s ease;background-color:#005f9e;", ":hover &{opacity:0.7;}"], ImgWrapper);
var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Box__BoxText",
  componentId: "sc-1z4595-2"
})(["font-size:30px;font-family:'Raleway';color:white;display:block;margin:0 auto;text-align:left;position:absolute;width:200px;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);", ":hover &{opacity:1;}"], ImgWrapper);
var LearnMore = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Box__LearnMore",
  componentId: "sc-1z4595-3"
})(["font-size:18px;font-family:raleway-semibold;text-align:left;color:white;cursor:pointer;&:hover{font-family:raleway-bold;text-decoration:underline;}"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Box__Img",
  componentId: "sc-1z4595-4"
})(["width:100%;display:block;filter:grayscale(100%) brightness(100%);-webkit-filter:grayscale(100%) brightness(100%);"]);
function Box(props) {
  var delay = props.delay,
      width = props.width,
      height = props.height,
      src = props.src,
      link = props.link,
      txt = props.txt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_2___default.a, {
    delay: delay,
    style: {
      width: '100%',
      position: 'relative'
    },
    animateOnce: true,
    animateIn: "fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgWrapper, {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, txt, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LearnMore, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Learn More")))));
}

/***/ })

})
//# sourceMappingURL=index.js.dac3243f1d4e0c56d348.hot-update.js.map