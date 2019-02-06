webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ColumnComponent.js":
/*!***************************************!*\
  !*** ./components/ColumnComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ "./components/Column.js");
var _jsxFileName = "/Users/marianapiazza/projects/terapartners/components/ColumnComponent.js";



function ColumnComponent(props) {
  var contents = props.contents,
      columns = props.columns,
      srcs = props.srcs,
      overlaySrcs = props.overlaySrcs,
      names = props.names,
      surnames = props.surnames;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
      lineNumber: 12
    },
    __self: this
  }, contents.map(function (c, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      style: {
        padding: '0',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      xs: 12,
      md: 12,
      lg: 12 / columns,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_2__["default"], {
      height: 960 / columns - 10,
      width: 960 / columns - 10,
      src: srcs ? srcs[idx] : '',
      overlaySrc: overlaySrcs ? overlaySrcs[idx] : '',
      name: names ? names[idx] : '',
      surname: surnames ? surnames[idx] : '',
      content: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.3f8e6dce8c7e8036c8df.hot-update.js.map