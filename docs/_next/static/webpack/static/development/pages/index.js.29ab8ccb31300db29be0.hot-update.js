webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BoxComponent.js":
/*!************************************!*\
  !*** ./components/BoxComponent.js ***!
  \************************************/
/*! exports provided: FirstSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstSection", function() { return FirstSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./components/Box.js");
var _jsxFileName = "/Users/marianapiazza/projects/terapartners/components/BoxComponent.js";
 // import styled from 'styled-components';


 // const ImgWrapper = styled.div`
//   width: 470px;
//   height: 314px;
//   overflow: hidden;
//   position: relative;
//   margin: 0 auto;
// `;
// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   transition: .5s ease;
//   background-color: #005f9e;
//   ${ImgWrapper}:hover & {
//     opacity: 0.7;
//   }
// `;
// const BoxText = styled.span`
//   font-size: 30px;
//   font-family: raleway-regular;
//   color: white;
//   display: block;
//   margin: 0 auto;
//   text-align: left;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   opacity: 0;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   ${ImgWrapper}:hover & {
//     opacity: 1;
//   }
// `;
// const LearnMore = styled.a`
//   font-size: 18px;
//   font-family: raleway-semibold;
//   text-align: left;
//   color: white;
//   cursor: pointer;
//   &:hover {
//     font-family: raleway-bold;
//     text-decoration: underline;
//   }
// `;
// const Img = styled.img`
//   width: 100%;
//   display: block;
//   filter: grayscale(100%) brightness(100%);
//   -webkit-filter: grayscale(100%) brightness(100%);
// `;

function FirstSection(props) {
  var txts = props.txts,
      columns = props.columns,
      srcs = props.srcs,
      height = props.height,
      width = props.width,
      links = props.links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      maxWidth: '960px',
      margin: 'auto',
      marginTop: '70px'
    },
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, txts.map(function (txt, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: {
        padding: '0',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      xs: 12,
      md: 12,
      lg: 12 / columns,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: srcs[idx],
      txt: txt,
      height: height,
      width: width,
      link: links[idx],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }));
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (FirstSection);

/***/ })

})
//# sourceMappingURL=index.js.29ab8ccb31300db29be0.hot-update.js.map